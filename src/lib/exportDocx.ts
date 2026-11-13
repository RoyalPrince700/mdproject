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
  TabStopType,
  TextRun,
  TextWrappingType,
  UnderlineType,
  VerticalPositionAlign,
  VerticalPositionRelativeFrom,
  WidthType,
} from 'docx'
import { PPT_COLORS, PPT_FONTS } from '../theme/defenseTheme'
import {
  proposalSenderLines,
  resolveDocumentFont,
  SMEH_COVER_FONT,
} from '../theme/documentTheme'
import {
  hasSmehBranding,
  isSmehProposal,
  isWordDocument,
  letterParagraphs,
  sectionBullets,
  sectionTableRows,
  skipProposalSlide,
  textOf,
} from './documentSections'
import { parseInlineFormatting } from './inlineText'
import { isCvHeaderSlide, parseCvLines, slideHasCvEntries } from './cvLayout'
import { loadAccessibleLogoAsset, loadWatermarkBytes } from './documentWatermark'
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
let DOC_IS_SUNDAY_SCHOOL_MANUAL = false

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
  if (!DOC_IS_PROPOSAL) {
    if (DOC_IS_SUNDAY_SCHOOL_MANUAL) {
      return new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 320, after: 140 },
        children: [
          new TextRun({
            text: text.toUpperCase(),
            bold: true,
            color: NAVY,
            font: DOC_HEADER_FONT,
            size: 32,
          }),
        ],
      })
    }
    return heading(text, HeadingLevel.HEADING_2)
  }
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

type TextRunOptions = {
  italics?: boolean
  bold?: boolean
  size?: number
  color?: string
  font?: string
}

function inlineTextRuns(
  text: string,
  options: TextRunOptions = {},
): TextRun[] {
  const segments = parseInlineFormatting(text)
  const hasMarkers = segments.some((segment) => segment.bold)
  if (!hasMarkers) {
    return [
      new TextRun({
        text,
        italics: options.italics,
        bold: options.bold,
        size: options.size ?? 22,
        color: options.color ?? NAVY,
        font: options.font ?? DOC_BODY_FONT,
      }),
    ]
  }

  return segments
    .filter((segment) => segment.text.length > 0)
    .map(
      (segment) =>
        new TextRun({
          text: segment.text,
          bold: segment.bold ?? options.bold,
          italics: options.italics,
          size: options.size ?? 22,
          color: options.color ?? NAVY,
          font: options.font ?? DOC_BODY_FONT,
        }),
    )
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
    children: inlineTextRuns(text, options),
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
    children: inlineTextRuns(text),
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
        children: inlineTextRuns(text, {
          bold: options.header || options.bold,
          size: 20,
          color: options.header ? WHITE : NAVY,
          font: options.header ? DOC_HEADER_FONT : DOC_BODY_FONT,
        }),
      }),
    ],
  })
}

function twoColTable(rows: string[][], headers?: string[]): Table {
  const columnCount = Math.max(headers?.length ?? 0, rows[0]?.length ?? 0, 2)
  const widths = columnCount === 3 ? [28, 36, 36] : [36, 64]
  const cells = (values: string[], header = false) =>
    Array.from({ length: columnCount }, (_, index) =>
      tableCell(values[index] ?? '', {
        header,
        bold: header || index === 0,
        width: widths[index] ?? Math.floor(100 / columnCount),
      }),
    )
  const body = rows.map(
    (row) =>
      new TableRow({
        children: cells(row),
      }),
  )
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      ...(headers
        ? [
            new TableRow({
              children: cells(headers, true),
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
            ...inlineTextRuns(text),
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

function createWatermarkHeader(
  asset: WatermarkAsset,
  cornerLogo?: WatermarkAsset | null,
): Header {
  const targetWidth = 640
  const ratio = asset.width > 0 ? asset.height / asset.width : 1
  const targetHeight = Math.max(1, Math.round(targetWidth * ratio))
  const imageRuns: ImageRun[] = [
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
  ]

  if (cornerLogo) {
    const cornerWidth = 132
    const cornerRatio =
      cornerLogo.width > 0 ? cornerLogo.height / cornerLogo.width : 0.31
    imageRuns.push(
      new ImageRun({
        type: 'png',
        data: cornerLogo.data,
        transformation: {
          width: cornerWidth,
          height: Math.max(1, Math.round(cornerWidth * cornerRatio)),
        },
        floating: {
          horizontalPosition: {
            relative: HorizontalPositionRelativeFrom.MARGIN,
            align: HorizontalPositionAlign.RIGHT,
          },
          verticalPosition: {
            relative: VerticalPositionRelativeFrom.MARGIN,
            align: VerticalPositionAlign.TOP,
          },
          behindDocument: false,
          allowOverlap: true,
          wrap: { type: TextWrappingType.NONE },
        },
      }),
    )
  }

  return new Header({
    children: [
      new Paragraph({
        children: imageRuns,
      }),
    ],
  })
}

/** Word point size → docx half-points. */
function coverPt(points: number) {
  return points * 2
}

function coverPartiesTable(state: PresentationState): Table {
  const leftLines = [
    'SUBMITTED TO',
    state.meta.recipient || '',
    state.meta.recipientOrg || '',
    state.meta.recipientAddress || '',
  ].filter(Boolean)

  const rightLines = ['SUBMITTED BY', ...proposalSenderLines(state.meta)]

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
              size: coverPt(SMEH_COVER_FONT.party),
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
    bannerLine('SMART EDU HUB', {
      bold: true,
      color: WHITE,
      size: coverPt(SMEH_COVER_FONT.brand),
      after: 40,
    }),
    bannerLine('Smart Edu Hub Accessible Digital Platform (SMEH)', {
      color: WHITE,
      size: coverPt(SMEH_COVER_FONT.tagline),
      after: 40,
    }),
    bannerLine((state.meta.website || DEFAULT_WEBSITE).replace(/\./g, '.\u200B'), {
      color: WHITE,
      size: coverPt(SMEH_COVER_FONT.website),
      after: 120,
    }),
    para('PROPOSAL FOR', {
      bold: true,
      color: PROPOSAL_BLUE,
      size: coverPt(SMEH_COVER_FONT.proposalFor),
      align: AlignmentType.CENTER,
      before: 280,
      after: 60,
    }),
    para(subject.toUpperCase(), {
      bold: true,
      font: DOC_HEADER_FONT,
      size: coverPt(SMEH_COVER_FONT.title),
      align: AlignmentType.CENTER,
      after: 80,
    }),
    para('(Learning Management & School Management System)', {
      italics: true,
      color: MUTED,
      size: coverPt(SMEH_COVER_FONT.subtitle),
      align: AlignmentType.CENTER,
      after: 200,
    }),
    para('', { before: 1200, after: 0 }),
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
    para(state.meta.salutation?.trim() || 'Dear Sir,', { after: 200 }),
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
    const lead =
      line.startsWith('Respectfully') || line.startsWith('For Further')
    out.push(
      para(line, {
        before: lead ? 200 : 0,
        after: line.startsWith('Yours') ? 200 : 40,
      }),
    )
  }

  out.push(divider())
  return out
}

function proposalNarrative(text: string): Paragraph {
  const boldOnly = text.match(/^\*\*(.+)\*\*$/)
  if (boldOnly) {
    return para(boldOnly[1], {
      bold: true,
      size: DOC_IS_SUNDAY_SCHOOL_MANUAL ? 24 : 22,
      before: DOC_IS_SUNDAY_SCHOOL_MANUAL ? 120 : 0,
      after: DOC_IS_SUNDAY_SCHOOL_MANUAL ? 80 : 120,
    })
  }

  return para(text, {
    after: 200,
    align: AlignmentType.BOTH,
  })
}

type EmbeddedImage = { data: Uint8Array; width: number; height: number }

async function loadSlideImages(state: PresentationState): Promise<Map<string, EmbeddedImage>> {
  const images = new Map<string, EmbeddedImage>()
  for (const slide of state.slides) {
    if (!slide.imageSrc) continue
    try {
      const response = await fetch(slide.imageSrc)
      if (!response.ok) continue
      const blob = await response.blob()
      const data = new Uint8Array(await blob.arrayBuffer())
      const size = await new Promise<{ width: number; height: number }>((resolve, reject) => {
        const url = URL.createObjectURL(blob)
        const img = new Image()
        img.onload = () => {
          const width = img.naturalWidth || img.width
          const height = img.naturalHeight || img.height
          URL.revokeObjectURL(url)
          resolve({ width, height })
        }
        img.onerror = () => {
          URL.revokeObjectURL(url)
          reject(new Error('Unable to read the document image'))
        }
        img.src = url
      })
      images.set(slide.id, { data, width: size.width, height: size.height })
    } catch {
      // Keep the section text if the picture cannot be read.
    }
  }
  return images
}

function documentImage(image: EmbeddedImage): Paragraph {
  const maxWidth = 620
  const ratio = image.width > 0 ? image.height / image.width : 0.62
  const width = Math.min(maxWidth, image.width || maxWidth)
  const height = Math.max(1, Math.round(width * ratio))
  return new Paragraph({
    spacing: { before: 80, after: 200 },
    children: [
      new ImageRun({
        type: 'png',
        data: image.data,
        transformation: { width, height },
      }),
    ],
  })
}

function proposalSlideBody(
  slide: Slide,
  images?: Map<string, EmbeddedImage>,
): Array<Paragraph | Table> {
  const rows = sectionTableRows(slide)
  const extras: Array<Paragraph | Table> = []
  const image = images?.get(slide.id)
  if (image) extras.push(documentImage(image))
  for (const text of sectionBullets(slide)) {
    extras.push(proposalNarrative(text))
  }
  if (rows.length) {
    const columns =
      slide.layout === 'twoColumn' ? resolveTwoColumnContent(slide) : null
    const headers =
      rows[0]?.length === 3
        ? [
            columns?.leftTitle || 'Page',
            slide.middleTitle || 'Current title',
            columns?.rightTitle || 'Recommended title',
          ]
        : [columns?.leftTitle || 'Item', columns?.rightTitle || 'Detail']
    extras.push(twoColTable(rows, headers))
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

function buildWordBodyChildren(
  state: PresentationState,
  images?: Map<string, EmbeddedImage>,
): Array<Paragraph | Table> {
  const children: Array<Paragraph | Table> = []
  let sectionNumber = 0
  const numbered = state.meta.numberedSections !== false

  for (const slide of state.slides) {
    if (skipProposalSlide(slide)) continue
    if (children.length > 0 && /^Lesson\s+\d+/i.test(slide.chapter?.trim() ?? '')) {
      children.push(pageBreak())
    }
    sectionNumber += 1
    const title = slide.title.trim() || `Section ${sectionNumber}`
    const heading = title.replace(/\n/g, ' ')
    children.push(
      proposalSectionHeading(numbered ? `${sectionNumber}. ${heading}` : heading),
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
    children.push(...proposalSlideBody(slide, images))
  }

  return children
}

function buildProposalChildren(
  state: PresentationState,
  images?: Map<string, EmbeddedImage>,
): Array<Paragraph | Table> {
  return [
    ...buildCoverPage(state),
    ...buildCoverLetter(state),
    ...buildWordBodyChildren(state, images),
  ]
}

function buildPlainDocumentChildren(
  state: PresentationState,
  images?: Map<string, EmbeddedImage>,
): Array<Paragraph | Table> {
  const body = buildWordBodyChildren(state, images)
  if (state.meta.omitCoverPage) return body
  return [...buildPlainCoverPage(state), ...body]
}

const CV_INK = '1A1A1A'
const CV_BODY_SIZE = 22
const CV_NAME_SIZE = 32
const CV_HEADING_SIZE = 24
const CV_LINE = 240
const CV_CONTENT_WIDTH = 9026

function cvRun(text: string, options: TextRunOptions = {}): TextRun[] {
  return inlineTextRuns(text, {
    ...options,
    size: options.size ?? CV_BODY_SIZE,
    color: options.color ?? CV_INK,
    font: options.font ?? DOC_BODY_FONT,
  })
}

function cvNamePara(text: string): Paragraph {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40, line: CV_LINE },
    children: cvRun(text.toUpperCase(), {
      bold: true,
      size: CV_NAME_SIZE,
    }),
  })
}

function cvContactPara(text: string): Paragraph {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120, line: CV_LINE },
    children: cvRun(text, { size: CV_BODY_SIZE }),
  })
}

function cvHeadingPara(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 200, after: 60, line: CV_LINE },
    border: {
      bottom: {
        color: CV_INK,
        space: 1,
        style: BorderStyle.SINGLE,
        size: 8,
      },
    },
    children: cvRun(text.toUpperCase(), {
      bold: true,
      size: CV_HEADING_SIZE,
    }),
  })
}

function cvRolePara(role: string, dates?: string): Paragraph {
  if (!dates) {
    return new Paragraph({
      spacing: { before: 80, after: 0, line: CV_LINE },
      children: cvRun(role, { bold: true }),
    })
  }
  return new Paragraph({
    spacing: { before: 80, after: 0, line: CV_LINE },
    tabStops: [{ type: TabStopType.RIGHT, position: CV_CONTENT_WIDTH }],
    children: [
      ...cvRun(role, { bold: true }),
      new TextRun({
        text: '\t',
        font: DOC_BODY_FONT,
        size: CV_BODY_SIZE,
      }),
      ...cvRun(dates),
    ],
  })
}

function cvOrgPara(text: string): Paragraph {
  return new Paragraph({
    spacing: { after: 20, line: CV_LINE },
    children: cvRun(text, { italics: true }),
  })
}

function cvBulletPara(text: string): Paragraph {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 20, line: CV_LINE },
    children: cvRun(text),
  })
}

function cvBodyPara(text: string): Paragraph {
  return new Paragraph({
    spacing: { after: 80, line: 276 },
    children: cvRun(text),
  })
}

function buildCvSlide(slide: Slide, index: number): Paragraph[] {
  if (isCvHeaderSlide(slide, index)) {
    return [
      cvNamePara(slide.title),
      ...sectionBullets(slide).map((line) => cvContactPara(line)),
    ]
  }

  const out: Paragraph[] = [cvHeadingPara(slide.title.replace(/\n/g, ' '))]
  const bullets = sectionBullets(slide)

  if (slideHasCvEntries(slide)) {
    for (const line of parseCvLines(bullets)) {
      if (line.kind === 'role') out.push(cvRolePara(line.role, line.dates))
      else if (line.kind === 'org') out.push(cvOrgPara(line.text))
      else out.push(cvBulletPara(line.text))
    }
    return out
  }

  if (bullets.length === 1) {
    out.push(cvBodyPara(bullets[0]))
    return out
  }

  for (const item of bullets) out.push(cvBulletPara(item))
  return out
}

function buildCvDocumentChildren(state: PresentationState): Paragraph[] {
  const children: Paragraph[] = []
  state.slides.forEach((slide, index) => {
    if (skipProposalSlide(slide)) return
    children.push(...buildCvSlide(slide, index))
  })
  return children
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
  options: { title?: string; documentId?: string } = {},
) {
  const smehProposal = isSmehProposal(state.meta.kind)
  const smehBranding = hasSmehBranding(state, options.documentId)
  const cvDocument = state.meta.documentLayout === 'cv'
  const plainDocument = state.meta.kind === 'document'
  const usesWordExport = isWordDocument(state.meta.kind)
  const fonts = resolveExportFonts(state)
  DOC_BODY_FONT = fonts.body
  DOC_HEADER_FONT = fonts.header
  DOC_IS_PROPOSAL = fonts.isProposal
  DOC_IS_SUNDAY_SCHOOL_MANUAL =
    state.meta.subject?.trim() === 'Translated Sunday School Manual'

  const titleSlide = state.slides.find((slide) => slide.layout === 'title')
  const docTitle =
    options.title?.trim() ||
    state.meta.subject?.trim() ||
    titleSlide?.title.replace(/\n/g, ' ').trim() ||
    (usesWordExport ? 'Document' : 'Presentation')

  const images = usesWordExport && !cvDocument ? await loadSlideImages(state) : undefined
  const children = smehProposal
    ? buildProposalChildren(state, images)
    : cvDocument
      ? buildCvDocumentChildren(state)
      : plainDocument
        ? buildPlainDocumentChildren(state, images)
        : buildDefenseChildren(state)

  const watermarkData = smehBranding ? await loadWatermarkBytes() : null
  const fadedWatermarkAsset = watermarkData
    ? await createFadedWatermarkAsset(watermarkData)
    : null
  const cornerLogoAsset = smehBranding ? await loadAccessibleLogoAsset() : null
  const watermarkHeader = fadedWatermarkAsset
    ? createWatermarkHeader(fadedWatermarkAsset, cornerLogoAsset)
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
            size: cvDocument ? CV_BODY_SIZE : 22,
            color: cvDocument ? CV_INK : NAVY,
            language: state.meta.language
              ? { value: state.meta.language }
              : undefined,
            noProof: state.meta.spellCheck === false,
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
            margin: cvDocument
              ? {
                  top: 1440,
                  bottom: 1440,
                  left: 1440,
                  right: 1440,
                }
              : {
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
  const fileName = `${fileSlug(docTitle)}.docx`
  downloadBlob(blob, fileName)
}
