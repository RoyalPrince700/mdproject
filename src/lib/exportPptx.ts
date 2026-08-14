import PptxGenJS from 'pptxgenjs'
import logoUrl from '../assets/westclifflogo.svg'
import { densityFontSize, getColumnDensity, getContentDensity } from './contentDensity'
import { parseBulletItem } from './slideIcons'
import { resolveTwoColumnContent } from './slideLayout'
import type { PresentationState, Slide } from '../types/slide'

const NAVY = '0B1F3A'
const GOLD = 'C9A227'
const MUTED = '5C6B7A'
const WHITE = 'FFFFFF'

/** Design space used by all layout numbers below (matches the 16:9 editor). */
const DESIGN_W = 10
const DESIGN_H = 5.625
/** PowerPoint / WPS Office Theme widescreen (LAYOUT_WIDE). */
const SLIDE_W = 13.333
const SLIDE_H = 7.5
const SX = SLIDE_W / DESIGN_W
const SY = SLIDE_H / DESIGN_H

function box(x: number, y: number, w: number, h: number) {
  return { x: x * SX, y: y * SY, w: w * SX, h: h * SY }
}

function pt(size: number) {
  return Math.round(size * SX)
}

let logoData: string | null = null

async function loadLogoData(): Promise<string | null> {
  if (logoData) return logoData
  try {
    const res = await fetch(logoUrl)
    const blob = await res.blob()
    logoData = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(String(reader.result))
      reader.onerror = () => reject(reader.error)
      reader.readAsDataURL(blob)
    })
    return logoData
  } catch {
    return null
  }
}

function addLogo(s: PptxGenJS.Slide, data: string | null) {
  if (data) {
    s.addImage({
      data,
      ...box(8.15, 0.18, 1.55, 0.4),
    })
    return
  }
  s.addText('WESTCLIFF UNIVERSITY', {
    ...box(6.8, 0.18, 2.9, 0.3),
    fontSize: pt(9),
    fontFace: 'Calibri',
    color: GOLD,
    bold: true,
    align: 'right',
  })
}

function renderSlide(
  pptx: PptxGenJS,
  slide: Slide,
  meta: PresentationState['meta'],
  logo: string | null,
) {
  const s = pptx.addSlide()

  s.background = { color: WHITE }

  s.addShape(pptx.ShapeType.rect, {
    ...box(0, 0, DESIGN_W, 0.08),
    fill: { color: NAVY },
    line: { color: NAVY },
  })

  addLogo(s, logo)

  if (slide.layout === 'title') {
    s.addText(meta.brand.toUpperCase(), {
      ...box(0.8, 0.95, 8.4, 0.3),
      fontSize: pt(12),
      fontFace: 'Calibri',
      color: GOLD,
      bold: true,
      charSpacing: 4,
      align: 'center',
    })
    s.addText('PRELIMINARY DOCTORAL DEFENSE · CHAPTERS ONE TO THREE', {
      ...box(0.8, 1.3, 8.4, 0.28),
      fontSize: pt(10),
      fontFace: 'Calibri',
      color: GOLD,
      align: 'center',
    })
    s.addText(slide.title, {
      ...box(0.55, 1.62, 8.9, 1.85),
      fontSize: pt(32),
      fontFace: 'Georgia',
      color: NAVY,
      bold: true,
      align: 'center',
      valign: 'middle',
    })
    if (slide.subtitle) {
      s.addText(slide.subtitle, {
        ...box(1.0, 3.5, 8.0, 0.7),
        fontSize: pt(16),
        fontFace: 'Calibri',
        color: MUTED,
        align: 'center',
      })
    }
    s.addShape(pptx.ShapeType.rect, {
      ...box(4.35, 4.28, 1.3, 0.03),
      fill: { color: GOLD },
      line: { color: GOLD },
    })
    s.addText(
      `${meta.author}\n${meta.degree} · College of Business Administration\n${meta.date}`,
      {
        ...box(0.8, 4.42, 8.4, 0.7),
        fontSize: pt(14),
        fontFace: 'Calibri',
        color: MUTED,
        align: 'center',
      },
    )
    if (slide.footer) {
      s.addText(slide.footer, {
        ...box(0.8, 5.15, 8.4, 0.25),
        fontSize: pt(11),
        fontFace: 'Calibri',
        color: GOLD,
        align: 'center',
      })
    }
    return
  }

  if (slide.layout === 'section' || slide.layout === 'closing') {
    s.addText(slide.title, {
      ...box(0.8, 2.0, 8.4, 1),
      fontSize: pt(36),
      fontFace: 'Georgia',
      color: NAVY,
      bold: true,
      align: 'center',
    })
    if (slide.subtitle) {
      s.addText(slide.subtitle, {
        ...box(1.1, 3.15, 7.8, 0.8),
        fontSize: pt(16),
        fontFace: 'Calibri',
        color: MUTED,
        align: 'center',
      })
    }
    if (slide.footer) {
      s.addText(slide.footer, {
        ...box(0.8, 5.1, 8.4, 0.25),
        fontSize: pt(11),
        fontFace: 'Calibri',
        color: GOLD,
        align: 'center',
      })
    }
    return
  }

  s.addText(slide.title, {
    ...box(0.45, 0.48, 7.6, 0.55),
    fontSize: pt(28),
    fontFace: 'Georgia',
    color: NAVY,
    bold: true,
  })

  if (slide.subtitle) {
    s.addText(slide.subtitle, {
      ...box(0.45, 1.02, 9.1, 0.34),
      fontSize: pt(14),
      fontFace: 'Calibri',
      color: MUTED,
    })
  }

  if (slide.layout === 'bullets') {
    const items = (slide.bullets ?? []).map((t) => t.trim()).filter(Boolean)
    if (items.length) {
      const density = getContentDensity(items)
      const fontSize = densityFontSize(items, {
        sparse: 22,
        medium: 17,
        dense: 14,
      })
      const paraSpaceAfter =
        density === 'sparse' ? 14 : density === 'medium' ? 10 : 7
      s.addText(
        items.map((t) => ({
          text: t,
          options: { bullet: true, breakLine: true },
        })),
        {
          ...box(0.55, 1.4, 8.9, 3.7),
          fontSize: pt(fontSize),
          fontFace: 'Calibri',
          color: NAVY,
          paraSpaceAfter: pt(paraSpaceAfter),
          valign: 'middle',
        },
      )
    }
  }

  if (slide.layout === 'twoColumn') {
    const columns = resolveTwoColumnContent(slide)
    const top = slide.subtitle ? 1.4 : 1.15
    const headingH = columns.leftTitle || columns.rightTitle ? 0.36 : 0
    const ruleH = headingH ? 0.035 : 0
    const bodyTop = top + headingH + (headingH ? 0.16 : 0)
    const bodyH = 3.87 - headingH
    const colDensity = getColumnDensity([
      ...columns.leftBullets,
      ...columns.rightBullets,
    ])
    const fontSize =
      colDensity === 'sparse' ? 16 : colDensity === 'medium' ? 14 : 12

    if (columns.leftTitle) {
      s.addText(columns.leftTitle, {
        ...box(0.45, top, 4.4, headingH),
        fontSize: pt(18),
        fontFace: 'Georgia',
        color: NAVY,
        bold: true,
      })
      s.addShape(pptx.ShapeType.rect, {
        ...box(0.45, top + headingH + 0.02, 4.4, ruleH),
        fill: { color: GOLD },
        line: { color: GOLD },
      })
    }
    if (columns.leftBullets.length) {
      s.addText(
        columns.leftBullets.map((t) => ({
          text: t,
          options: { bullet: true, breakLine: true },
        })),
        {
          ...box(0.45, bodyTop, 4.4, bodyH),
          fontSize: pt(fontSize),
          fontFace: 'Calibri',
          color: NAVY,
          paraSpaceAfter: pt(colDensity === 'dense' ? 6 : 8),
          valign: 'top',
        },
      )
    }

    if (columns.rightTitle) {
      s.addText(columns.rightTitle, {
        ...box(5.15, top, 4.4, headingH),
        fontSize: pt(18),
        fontFace: 'Georgia',
        color: NAVY,
        bold: true,
      })
      s.addShape(pptx.ShapeType.rect, {
        ...box(5.15, top + headingH + 0.02, 4.4, ruleH),
        fill: { color: GOLD },
        line: { color: GOLD },
      })
    }
    if (columns.rightBullets.length) {
      s.addText(
        columns.rightBullets.map((t) => ({
          text: t,
          options: { bullet: true, breakLine: true },
        })),
        {
          ...box(5.15, bodyTop, 4.4, bodyH),
          fontSize: pt(fontSize),
          fontFace: 'Calibri',
          color: NAVY,
          paraSpaceAfter: pt(colDensity === 'dense' ? 6 : 8),
          valign: 'top',
        },
      )
    }
  }

  if (slide.layout === 'framework' && slide.frameworkBlocks?.length) {
    const blocks = slide.frameworkBlocks.slice(0, 3)
    const top = slide.subtitle ? 1.4 : 1.15
    const width = 2.9
    const gap = 0.22
    const bodySize = densityFontSize(
      blocks.map((b) => b.text),
      { sparse: 15, medium: 13, dense: 12 },
    )
    blocks.forEach((block, i) => {
      const x = 0.45 + i * (width + gap)
      s.addShape(pptx.ShapeType.roundRect, {
        ...box(x, top, width, 3.55),
        fill: { color: WHITE },
        line: { color: 'D5DEEA' },
        rectRadius: 0.08 * SX,
      })
      s.addShape(pptx.ShapeType.rect, {
        ...box(x, top, width, 0.08),
        fill: { color: GOLD },
        line: { color: GOLD },
      })
      s.addText(block.label, {
        ...box(x + 0.14, top + 0.22, width - 0.28, 0.42),
        fontSize: pt(17),
        fontFace: 'Georgia',
        color: NAVY,
        bold: true,
      })
      s.addText(block.text, {
        ...box(x + 0.14, top + 0.7, width - 0.28, 2.6),
        fontSize: pt(bodySize),
        fontFace: 'Calibri',
        color: MUTED,
        valign: 'top',
      })
    })
  }

  if (slide.layout === 'chart' && slide.chartData?.length) {
    const top = slide.subtitle ? 1.4 : 1.15
    const chartType =
      slide.chartType === 'pie' ? pptx.ChartType.pie : pptx.ChartType.bar
    s.addChart(
      chartType,
      [
        {
          name: 'Series',
          labels: slide.chartData.map((d) => d.name),
          values: slide.chartData.map((d) => d.value),
        },
      ],
      {
        ...box(0.4, top, 5.1, 3.55),
        showTitle: false,
        showLegend: slide.chartType === 'pie',
        showValue: false,
        barGrouping: 'clustered',
        chartColors: [NAVY, '143356', GOLD, '1C446E', MUTED],
      },
    )

    if (slide.chartCaption) {
      s.addText(slide.chartCaption, {
        ...box(0.4, 4.9, 5.1, 0.3),
        fontSize: pt(11),
        fontFace: 'Calibri',
        color: MUTED,
        align: 'center',
      })
    }

    const items = (slide.bullets ?? []).map((t) => t.trim()).filter(Boolean)
    if (items.length) {
      const colDensity = getColumnDensity(
        items.map((item) => parseBulletItem(item).text),
      )
      const fontSize =
        colDensity === 'sparse' ? 14 : colDensity === 'medium' ? 12 : 11
      s.addText(
        items.map((t) => ({
          text: parseBulletItem(t).text,
          options: { bullet: true, breakLine: true },
        })),
        {
          ...box(5.7, top, 3.85, 3.7),
          fontSize: pt(fontSize),
          fontFace: 'Calibri',
          color: NAVY,
          paraSpaceAfter: pt(colDensity === 'dense' ? 5 : 7),
          valign: 'top',
        },
      )
    }
  }
}

export async function exportPptx(state: PresentationState) {
  const pptx = new PptxGenJS()
  pptx.author = state.meta.author
  pptx.title = 'DBA Preliminary Defense — IT in B2B Marketing Strategies'
  pptx.subject = state.meta.brand
  pptx.defineLayout({ name: 'LAYOUT_16x9_OFFICE', width: SLIDE_W, height: SLIDE_H })
  pptx.layout = 'LAYOUT_16x9_OFFICE'

  const logo = await loadLogoData()

  for (const slide of state.slides) {
    renderSlide(pptx, slide, state.meta, logo)
  }

  await pptx.writeFile({
    fileName: 'DBA-Preliminary-Defense-Adedapo.pptx',
  })
}
