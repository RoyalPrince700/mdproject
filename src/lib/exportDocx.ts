import {
  AlignmentType,
  BorderStyle,
  Document,
  Header,
  HeadingLevel,
  HorizontalPositionAlign,
  HorizontalPositionRelativeFrom,
  ImageRun,
  Packer,
  PageBreak,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  TextWrappingType,
  UnderlineType,
  VerticalPositionAlign,
  VerticalPositionRelativeFrom,
  WidthType,
} from 'docx'
import { PPT_COLORS, PPT_FONTS } from '../theme/defenseTheme'
import { resolveDocumentFont } from '../theme/documentTheme'
import {
  isSmehProposal,
  isWordDocument,
  letterParagraphs,
  sectionBullets,
  sectionTableRows,
  skipProposalSlide,
  textOf,
} from './documentSections'
import { loadWatermarkBytes } from './documentWatermark'
import { resolveTwoColumnContent } from './slideLayout'
import type { PresentationState, Slide } from '../types/slide'

const NAVY = PPT_COLORS.navy
const GOLD = PPT_COLORS.gold
const MUTED = PPT_COLORS.muted
const WHITE = PPT_COLORS.white
const PROPOSAL_BLUE = '1E4F8A'
const FONT_H = PPT_FONTS.header
const FONT_B = PPT_FONTS.body
const DEFAULT_WEBSITE = 'www.smarteduhub.ng'

let DOC_BODY_FONT: string = FONT_B
let DOC_HEADER_FONT: string = FONT_H
let DOC_IS_PROPOSAL = false

interface WatermarkAsset {
  data: Uint8Array
  width: number
  height: number
}

async function createFadedWatermarkAsset(
  logoData: Uint8Array,
  opacity = 0.08,
): Promise<WatermarkAsset | null> {
  let objectUrl: string | null = null
  try {
    const sourceBlob = new Blob([logoData], { type: 'image/png' })
    objectUrl = URL.createObjectURL(sourceBlob)
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('Unable to load watermark image'))
      img.src = objectUrl as string
    })
    const canvas = document.createElement('canvas')
    canvas.width = image.naturalWidth || image.width
    canvas.height = image.naturalHeight || image.height
    const context = canvas.getContext('2d')
    if (!context) return null
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.globalAlpha = opacity
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    const fadedBlob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, 'image/png')
    })
    if (!fadedBlob) return null
    const buffer = await fadedBlob.arrayBuffer()
    return {
      data: new Uint8Array(buffer),
      width: image.naturalWidth || image.width,
      height: image.naturalHeight || image.height,
    }
  } catch {
    return null
  } finally {
    if (objectUrl) URL.revokeObjectURL(objectUrl)
  }
}

function resolveExportFonts(state: PresentationState) {
  const kind = state.meta.kind
  if (kind === 'proposal' || kind === 'document') {
    const font = resolveDocumentFont(state.meta)
    return {
      body: font,
      header: font,
      isProposal: kind === 'proposal',
    }
  }
  return { body: FONT_B, header: FONT_H, isProposal: false }
}

const THIN = { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' }
const CELL_BORDERS = { top: THIN, bottom: THIN, left: THIN, right: THIN }

function proposalSectionHeading(text: string): Paragraph {
  if (!DOC_IS_PROPOSAL) return heading(text, HeadingLevel.HEADING_2)
  return new Paragraph({
    spacing: { before: 280, after: 120 },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        color: PROPOSAL_BLUE,
        font: DOC_HEADER_FONT,
        size: 24,
      }),
    ],
  })
}

function para(
  text: string,
  options: {
    italics?: boolean
    bold?: boolean
    size?: number
    color?: string
    font?: string
    align?: (typeof AlignmentType)[keyof typeof AlignmentType]
    after?: number
    before?: number
  } = {},
): Paragraph {
  return new Paragraph({
    alignment: options.align,
    spacing: {
      after: options.after ?? 160,
      before: options.before ?? 0,
      line: 276,
    },
    children: [
      new TextRun({
        text,
        italics: options.italics,
        bold: options.bold,
        size: options.size ?? 22,
        color: options.color ?? NAVY,
        font: options.font ?? DOC_BODY_FONT,
      }),
    ],
  })
}

function heading(
  text: string,
  level: (typeof HeadingLevel)[keyof typeof HeadingLevel],
): Paragraph {
  return new Paragraph({
    heading: level,
    spacing: { before: 280, after: 120 },
    children: [
      new TextRun({
        text,
        bold: true,
        color: NAVY,
        font: DOC_HEADER_FONT,
      }),
    ],
  })
}

function subhead(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 160, after: 80 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 22,
        color: GOLD,
        font: DOC_HEADER_FONT,
      }),
    ],
  })
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 80, line: 276 },
    children: [
      new TextRun({
        text,
        size: 22,
        color: NAVY,
        font: DOC_BODY_FONT,
      }),
    ],
  })
}

function divider(): Paragraph {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    border: {
      bottom: {
        color: GOLD,
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    children: [],
  })
}

function tableCell(
  text: string,
  options: { header?: boolean; bold?: boolean; width: number } = { width: 50 },
): TableCell {
  return new TableCell({
    borders: CELL_BORDERS,
    width: { size: options.width, type: WidthType.PERCENTAGE },
    shading: options.header
      ? { type: ShadingType.CLEAR, fill: DOC_IS_PROPOSAL ? PROPOSAL_BLUE : NAVY }
      : undefined,
    margins: { top: 70, bottom: 70, left: 90, right: 90 },
    children: [
      new Paragraph({
        spacing: { after: 0, line: 260 },
        children: [
          new TextRun({
            text,
            bold: options.header || options.bold,
            size: 20,
            color: options.header ? WHITE : NAVY,
            font: options.header ? DOC_HEADER_FONT : DOC_BODY_FONT,
          }),
        ],
      }),
    ],
  })
}

function twoColTable(
  rows: Array<[string, string]>,
  headers?: [string, string],
): Table {
  const body = rows.map(
    ([left, right]) =>
      new TableRow({
        children: [
          tableCell(left, { bold: true, width: 36 }),
          tableCell(right, { width: 64 }),
        ],
      }),
  )
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      ...(headers
        ? [
            new TableRow({
              children: [
                tableCell(headers[0], { header: true, width: 36 }),
                tableCell(headers[1], { header: true, width: 64 }),
              ],
            }),
          ]
        : []),
      ...body,
    ],
  })
}

function slideBody(slide: Slide): Paragraph[] {
  const out: Paragraph[] = []

  if (slide.layout === 'title' || slide.layout === 'section' || slide.layout === 'closing') {
    if (slide.layout === 'closing' && slide.subtitle?.trim()) {
      out.push(para(slide.subtitle.trim(), { italics: true, after: 120 }))
    }
    if (slide.footer?.trim()) {
      out.push(para(slide.footer.trim(), { italics: true, color: MUTED, size: 20 }))
    }
    return out
  }

  if (slide.layout === 'twoColumn') {
    const columns = resolveTwoColumnContent(slide)
    if (columns.leftTitle) out.push(subhead(columns.leftTitle))
    for (const item of columns.leftBullets) {
      const text = textOf(item)
      if (text) out.push(bullet(text))
    }
    if (columns.rightTitle) out.push(subhead(columns.rightTitle))
    for (const item of columns.rightBullets) {
      const text = textOf(item)
      if (text) out.push(bullet(text))
    }
    return out
  }

  if (slide.layout === 'framework') {
    for (const block of slide.frameworkBlocks ?? []) {
      const label = block.label.trim()
      const text = block.text.trim()
      if (!label && !text) continue
      if (block.author?.trim()) {
        out.push(
          para(block.author.trim(), { bold: true, color: GOLD, size: 18, after: 40 }),
        )
      }
      out.push(
        new Paragraph({
          spacing: { after: 140, line: 276 },
          children: [
            new TextRun({
              text: label ? `${label}. ` : '',
              bold: true,
              size: 22,
              color: NAVY,
              font: DOC_HEADER_FONT,
            }),
            new TextRun({
              text,
              size: 22,
              color: NAVY,
              font: DOC_BODY_FONT,
            }),
          ],
        }),
      )
    }
    for (const item of slide.bullets ?? []) {
      const text = textOf(item)
      if (text) out.push(bullet(text))
    }
    return out
  }

  if (slide.layout === 'chart') {
    if (slide.chartCaption?.trim()) {
      out.push(para(slide.chartCaption.trim(), { italics: true, color: MUTED }))
    }
    for (const datum of slide.chartData ?? []) {
      const name = datum.name.trim()
      if (!name) continue
      out.push(bullet(`${name}: ${datum.value}`))
    }
    for (const item of slide.bullets ?? []) {
      const text = textOf(item)
      if (text) out.push(bullet(text))
    }
    return out
  }

  for (const item of slide.bullets ?? []) {
    const text = textOf(item)
    if (text) out.push(bullet(text))
  }
  if (slide.footer?.trim()) {
    out.push(para(slide.footer.trim(), { italics: true, color: MUTED, size: 20 }))
  }
  return out
}

function defenseHeader(state: PresentationState): Paragraph[] {
  const titleSlide = state.slides.find((slide) => slide.layout === 'title')
  const header: Paragraph[] = [
    para(state.meta.brand.toUpperCase(), {
      bold: true,
      color: GOLD,
      size: 22,
      align: AlignmentType.CENTER,
      after: 40,
    }),
    para('Preliminary Doctoral Defense · Chapters One to Three', {
      color: MUTED,
      size: 20,
      align: AlignmentType.CENTER,
      after: 200,
    }),
    para(titleSlide?.title ?? 'DBA Preliminary Defense', {
      bold: true,
      font: FONT_H,
      size: 36,
      align: AlignmentType.CENTER,
      after: 120,
    }),
  ]
  if (titleSlide?.subtitle?.trim()) {
    header.push(
      para(titleSlide.subtitle.trim(), {
        italics: true,
        color: MUTED,
        size: 24,
        align: AlignmentType.CENTER,
        after: 200,
      }),
    )
  }
  header.push(
    para(`${state.meta.author} · ${state.meta.degree} · ${state.meta.date}`, {
      color: NAVY,
      size: 20,
      align: AlignmentType.CENTER,
      after: 80,
    }),
  )
  return header
}

function pageBreak(): Paragraph {
  return new Paragraph({ children: [new PageBreak()] })
}

function bannerLine(
  text: string,
  options: {
    bold?: boolean
    color?: string
    size?: number
    after?: number
  } = {},
): Paragraph {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: options.after ?? 40, line: 240 },
    shading: { type: ShadingType.CLEAR, fill: PROPOSAL_BLUE },
    children: [
      new TextRun({
        text,
        bold: options.bold,
        color: options.color ?? WHITE,
        size: options.size ?? 22,
        font: options.bold ? DOC_HEADER_FONT : DOC_BODY_FONT,
        underline: { type: UnderlineType.NONE },
      }),
    ],
  })
}

function createWatermarkHeader(asset: WatermarkAsset): Header {
  const targetWidth = 640
  const ratio = asset.width > 0 ? asset.height / asset.width : 1
  const targetHeight = Math.max(1, Math.round(targetWidth * ratio))

  return new Header({
    children: [
      new Paragraph({
        children: [
          new ImageRun({
            type: 'png',
            data: asset.data,
            transformation: { width: targetWidth, height: targetHeight },
            floating: {
              horizontalPosition: {
                relative: HorizontalPositionRelativeFrom.PAGE,
                align: HorizontalPositionAlign.CENTER,
              },
              verticalPosition: {
                relative: VerticalPositionRelativeFrom.PAGE,
                align: VerticalPositionAlign.CENTER,
              },
              behindDocument: true,
              allowOverlap: true,
              wrap: { type: TextWrappingType.NONE },
            },
          }),
        ],
      }),
    ],
  })
}

function coverPartiesTable(state: PresentationState): Table {
  const leftLines = [
    'SUBMITTED TO',
    state.meta.recipient || '',
    state.meta.recipientOrg || '',
    state.meta.recipientAddress || '',
  ].filter(Boolean)

  const rightLines = [
    'SUBMITTED BY',
    state.meta.brand,
    `Date: ${state.meta.date}`,
  ].filter(Boolean)

  const cell = (lines: string[], labelIndex: number) =>
    new TableCell({
      borders: CELL_BORDERS,
      width: { size: 50, type: WidthType.PERCENTAGE },
      margins: { top: 90, bottom: 90, left: 120, right: 120 },
      children: lines.map((line, index) =>
        new Paragraph({
          spacing: { after: index === lines.length - 1 ? 0 : 60, line: 260 },
          children: [
            new TextRun({
              text: line,
              bold: index === labelIndex,
              size: index === labelIndex ? 18 : 22,
              color: index === labelIndex ? GOLD : NAVY,
              font: index === labelIndex ? DOC_HEADER_FONT : DOC_BODY_FONT,
            }),
          ],
        }),
      ),
    })

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [cell(leftLines, 0), cell(rightLines, 0)],
      }),
    ],
  })
}

function buildCoverPage(state: PresentationState): Array<Paragraph | Table> {
  const titleSlide = state.slides.find((slide) => slide.layout === 'title')
  const subject =
    state.meta.subject?.trim() ||
    titleSlide?.title.replace(/\n/g, ' ').trim() ||
    'Proposal'

  return [
    bannerLine('SMART EDU HUB', { bold: true, color: WHITE, size: 28, after: 40 }),
    bannerLine('SmartEduHub Accessible Digital Platform (SMEH)', {
      color: WHITE,
      size: 20,
      after: 40,
    }),
    bannerLine((state.meta.website || DEFAULT_WEBSITE).replace(/\./g, '.\u200B'), {
      color: WHITE,
      size: 18,
      after: 120,
    }),
    para('PROPOSAL FOR', {
      bold: true,
      color: PROPOSAL_BLUE,
      size: 18,
      align: AlignmentType.CENTER,
      before: 280,
      after: 60,
    }),
    para(subject.toUpperCase(), {
      bold: true,
      font: DOC_HEADER_FONT,
      size: 28,
      align: AlignmentType.CENTER,
      after: 80,
    }),
    para('(Learning Management & School Management System)', {
      italics: true,
      color: MUTED,
      size: 22,
      align: AlignmentType.CENTER,
      after: 200,
    }),
    para('', { before: 2200, after: 0 }),
    coverPartiesTable(state),
    para('', { before: 240, after: 0 }),
    new Paragraph({
      spacing: { before: 0, after: 0 },
      shading: { type: ShadingType.CLEAR, fill: PROPOSAL_BLUE },
      children: [new TextRun({ text: ' ', size: 8, color: PROPOSAL_BLUE })],
    }),
    pageBreak(),
  ]
}

function buildCoverLetter(state: PresentationState): Paragraph[] {
  const titleSlide = state.slides.find((slide) => slide.layout === 'title')
  const subject =
    state.meta.subject?.trim() ||
    titleSlide?.title.replace(/\n/g, ' ').trim() ||
    'Proposal'

  const out: Paragraph[] = [
    para(state.meta.letterDate || state.meta.date, { after: 200 }),
    para(`${state.meta.recipient},`, { after: 40 }),
    para(state.meta.recipientOrg || '', { after: 40 }),
    para(state.meta.recipientAddress || '', { after: 200 }),
    para('Dear Sir,', { after: 200 }),
    para(subject.toUpperCase(), {
      bold: true,
      font: DOC_HEADER_FONT,
      size: 24,
      after: 200,
    }),
  ]

  for (const paragraph of letterParagraphs(state)) {
    if (paragraph.trim()) {
      out.push(
        para(paragraph.trim(), {
          after: 200,
          align: AlignmentType.BOTH,
        }),
      )
    }
  }

  for (const line of state.meta.signOff ?? []) {
    out.push(para(line, { after: line.startsWith('Yours') ? 200 : 40 }))
  }

  out.push(divider())
  return out
}

function proposalNarrative(text: string): Paragraph {
  return para(text, {
    after: 200,
    align: AlignmentType.BOTH,
  })
}

function proposalSlideBody(slide: Slide): Array<Paragraph | Table> {
  const rows = sectionTableRows(slide)
  const extras: Array<Paragraph | Table> = []
  for (const text of sectionBullets(slide)) {
    extras.push(proposalNarrative(text))
  }
  if (rows.length) {
    const columns =
      slide.layout === 'twoColumn' ? resolveTwoColumnContent(slide) : null
    extras.push(
      twoColTable(rows, [
        columns?.leftTitle || 'Item',
        columns?.rightTitle || 'Detail',
      ]),
    )
  }
  if (slide.footer?.trim()) {
    const lines = slide.footer
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
    extras.push(para('', { after: 40 }))
    lines.forEach((line, index) => {
      extras.push(
        para(line, {
          bold: index === 0,
          after: 40,
          before: index === 0 ? 160 : 0,
        }),
      )
    })
  }
  if (!extras.length) return slideBody(slide)
  extras.push(para('', { after: 80 }))
  return extras
}

function fileSlug(text: string) {
  return (
    text
      .replace(/\n/g, ' ')
      .replace(/[^\w]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80) || 'Proposal'
  )
}

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = fileName
  anchor.rel = 'noopener'
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

function headingStyles() {
  return [
    {
      id: 'Heading1',
      name: 'Heading 1',
      basedOn: 'Normal',
      next: 'Normal',
      quickFormat: true,
      run: {
        font: DOC_HEADER_FONT,
        size: 32,
        bold: true,
        color: NAVY,
      },
      paragraph: {
        spacing: { before: 360, after: 120 },
      },
    },
    {
      id: 'Heading2',
      name: 'Heading 2',
      basedOn: 'Normal',
      next: 'Normal',
      quickFormat: true,
      run: {
        font: DOC_HEADER_FONT,
        size: 26,
        bold: true,
        color: NAVY,
      },
      paragraph: {
        spacing: { before: 280, after: 100 },
      },
    },
  ]
}

function buildPlainCoverPage(state: PresentationState): Array<Paragraph | Table> {
  const titleSlide = state.slides.find((slide) => slide.layout === 'title')
  const title =
    state.meta.subject?.trim() ||
    titleSlide?.title.replace(/\n/g, ' ').trim() ||
    'Document'
  const subtitle = titleSlide?.subtitle?.trim()
  const byline = [state.meta.brand, state.meta.author, state.meta.date]
    .filter(Boolean)
    .join(' · ')

  const children: Array<Paragraph | Table> = [
    para(title, {
      bold: true,
      font: DOC_HEADER_FONT,
      size: 36,
      align: AlignmentType.CENTER,
      before: 1200,
      after: subtitle ? 80 : 240,
    }),
  ]

  if (subtitle) {
    children.push(
      para(subtitle, {
        italics: true,
        color: MUTED,
        size: 24,
        align: AlignmentType.CENTER,
        after: 320,
      }),
    )
  }

  if (byline) {
    children.push(
      para(byline, {
        align: AlignmentType.CENTER,
        color: MUTED,
        after: 200,
      }),
    )
  }

  children.push(pageBreak())
  return children
}

function buildWordBodyChildren(state: PresentationState): Array<Paragraph | Table> {
  const children: Array<Paragraph | Table> = []
  let sectionNumber = 0

  for (const slide of state.slides) {
    if (skipProposalSlide(slide)) continue
    sectionNumber += 1
    const title = slide.title.trim() || `Section ${sectionNumber}`
    children.push(
      proposalSectionHeading(`${sectionNumber}. ${title.replace(/\n/g, ' ')}`),
    )
    if (slide.subtitle?.trim() && slide.layout !== 'closing') {
      children.push(
        para(slide.subtitle.trim(), {
          italics: true,
          color: MUTED,
          size: 20,
          after: 80,
        }),
      )
    }
    children.push(...proposalSlideBody(slide))
  }

  return children
}

function buildProposalChildren(state: PresentationState): Array<Paragraph | Table> {
  return [
    ...buildCoverPage(state),
    ...buildCoverLetter(state),
    ...buildWordBodyChildren(state),
  ]
}

function buildPlainDocumentChildren(state: PresentationState): Array<Paragraph | Table> {
  return [...buildPlainCoverPage(state), ...buildWordBodyChildren(state)]
}

function buildDefenseChildren(state: PresentationState): Paragraph[] {
  const children: Paragraph[] = [...defenseHeader(state), divider()]

  state.slides.forEach((slide, index) => {
    const title = slide.title.trim() || `Slide ${index + 1}`
    const isSection =
      slide.layout === 'section' ||
      slide.layout === 'title' ||
      slide.layout === 'closing'

    children.push(
      heading(
        `${index + 1}. ${title}`,
        isSection ? HeadingLevel.HEADING_1 : HeadingLevel.HEADING_2,
      ),
    )

    if (slide.chapter?.trim()) {
      children.push(
        para(slide.chapter.trim(), {
          bold: true,
          color: GOLD,
          size: 18,
          after: 40,
        }),
      )
    }

    if (slide.subtitle?.trim() && slide.layout !== 'title' && slide.layout !== 'closing') {
      children.push(para(slide.subtitle.trim(), { italics: true, color: MUTED, size: 20, after: 80 }))
    }

    children.push(...slideBody(slide))
  })

  return children
}

export async function exportDocx(
  state: PresentationState,
  options: { title?: string } = {},
) {
  const smehProposal = isSmehProposal(state.meta.kind)
  const plainDocument = state.meta.kind === 'document'
  const usesWordExport = isWordDocument(state.meta.kind)
  const fonts = resolveExportFonts(state)
  DOC_BODY_FONT = fonts.body
  DOC_HEADER_FONT = fonts.header
  DOC_IS_PROPOSAL = fonts.isProposal

  const titleSlide = state.slides.find((slide) => slide.layout === 'title')
  const docTitle =
    options.title?.trim() ||
    state.meta.subject?.trim() ||
    titleSlide?.title.replace(/\n/g, ' ').trim() ||
    (usesWordExport ? 'Document' : 'DBA Preliminary Defense — IT in B2B Marketing Strategies')

  const children = smehProposal
    ? buildProposalChildren(state)
    : plainDocument
      ? buildPlainDocumentChildren(state)
      : buildDefenseChildren(state)

  const watermarkData = smehProposal ? await loadWatermarkBytes() : null
  const fadedWatermarkAsset = watermarkData
    ? await createFadedWatermarkAsset(watermarkData)
    : null
  const watermarkHeader = fadedWatermarkAsset
    ? createWatermarkHeader(fadedWatermarkAsset)
    : undefined

  const doc = new Document({
    creator: state.meta.author,
    title: docTitle,
    description: state.meta.brand,
    styles: {
      default: {
        document: {
          run: {
            font: DOC_BODY_FONT,
            size: 22,
            color: NAVY,
          },
        },
      },
      paragraphStyles: headingStyles(),
    },
    sections: [
      {
        properties: {
          page: {
            size: usesWordExport
              ? {
                  width: 11906,
                  height: 16838,
                }
              : undefined,
            margin: {
              top: 1080,
              bottom: 1080,
              left: 1080,
              right: 1080,
            },
          },
        },
        headers: watermarkHeader ? { default: watermarkHeader } : undefined,
        children,
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  const fileName = usesWordExport
    ? `${fileSlug(docTitle)}.docx`
    : 'DBA-Preliminary-Defense-Adedapo.docx'
  downloadBlob(blob, fileName)
}
