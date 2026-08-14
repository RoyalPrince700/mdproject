import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from 'docx'
import { parseBulletItem } from './slideIcons'
import { resolveTwoColumnContent } from './slideLayout'
import type { PresentationState, Slide } from '../types/slide'

const NAVY = '0B1F3A'
const GOLD = 'C9A227'
const MUTED = '5C6B7A'

function textOf(item: string): string {
  return parseBulletItem(item).text.trim()
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
        font: options.font ?? 'Calibri',
      }),
    ],
  })
}

function heading(text: string, level: (typeof HeadingLevel)[keyof typeof HeadingLevel]): Paragraph {
  return new Paragraph({
    heading: level,
    spacing: { before: 280, after: 120 },
    children: [
      new TextRun({
        text,
        bold: true,
        color: NAVY,
        font: 'Georgia',
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
        font: 'Georgia',
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
        font: 'Calibri',
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

function slideBody(slide: Slide): Paragraph[] {
  const out: Paragraph[] = []

  if (slide.layout === 'title' || slide.layout === 'section' || slide.layout === 'closing') {
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
      out.push(
        new Paragraph({
          spacing: { after: 140, line: 276 },
          children: [
            new TextRun({
              text: label ? `${label}. ` : '',
              bold: true,
              size: 22,
              color: NAVY,
              font: 'Georgia',
            }),
            new TextRun({
              text,
              size: 22,
              color: NAVY,
              font: 'Calibri',
            }),
          ],
        }),
      )
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

function documentHeader(state: PresentationState): Paragraph[] {
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
      font: 'Georgia',
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

export async function exportDocx(state: PresentationState) {
  const children: Paragraph[] = [...documentHeader(state), divider()]

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

    if (slide.subtitle?.trim() && slide.layout !== 'title') {
      children.push(para(slide.subtitle.trim(), { italics: true, color: MUTED, size: 20, after: 80 }))
    }

    children.push(...slideBody(slide))
  })

  const doc = new Document({
    creator: state.meta.author,
    title: 'DBA Preliminary Defense — IT in B2B Marketing Strategies',
    description: state.meta.brand,
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 22,
            color: NAVY,
          },
        },
      },
      paragraphStyles: [
        {
          id: 'Heading1',
          name: 'Heading 1',
          basedOn: 'Normal',
          next: 'Normal',
          quickFormat: true,
          run: {
            font: 'Georgia',
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
            font: 'Georgia',
            size: 26,
            bold: true,
            color: NAVY,
          },
          paragraph: {
            spacing: { before: 280, after: 100 },
          },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1080,
              bottom: 1080,
              left: 1080,
              right: 1080,
            },
          },
        },
        children,
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  downloadBlob(blob, 'DBA-Preliminary-Defense-Adedapo.docx')
}
