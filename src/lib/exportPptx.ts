import PptxGenJS from 'pptxgenjs'
import logoUrl from '../assets/westclifflogo.svg'
import { DEFENSE_THEME, PPT_COLORS, PPT_FONTS } from '../theme/defenseTheme'
import { densityFontSize, getColumnDensity, getContentDensity } from './contentDensity'
import { parseBulletItem } from './slideIcons'
import { resolveTwoColumnContent } from './slideLayout'
import type { PresentationState, Slide } from '../types/slide'

const NAVY = PPT_COLORS.navy
const GOLD = PPT_COLORS.gold
const MUTED = PPT_COLORS.muted
const WHITE = PPT_COLORS.white
const BG = PPT_COLORS.white
const BORDER = PPT_COLORS.border
const SECONDARY = PPT_COLORS.secondary
const FONT_H = PPT_FONTS.header
const FONT_B = PPT_FONTS.body

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
  s.addText(DEFENSE_THEME.university, {
    ...box(6.8, 0.18, 2.9, 0.3),
    fontSize: pt(9),
    fontFace: FONT_H,
    color: GOLD,
    bold: true,
    align: 'right',
  })
}

function addDeckFooter(
  s: PptxGenJS.Slide,
  index: number,
  total: number,
  dark = false,
) {
  const color = dark ? '94A3B8' : MUTED
  s.addText('WESTCLIFF UNIVERSITY · Doctoral Defense', {
    ...box(0.45, 5.32, 6.2, 0.22),
    fontSize: pt(9),
    fontFace: FONT_B,
    color,
  })
  s.addText(`Slide ${index + 1} of ${total}`, {
    ...box(6.7, 5.32, 2.85, 0.22),
    fontSize: pt(9),
    fontFace: FONT_B,
    color,
    align: 'right',
  })
}

function renderSlide(
  pptx: PptxGenJS,
  slide: Slide,
  meta: PresentationState['meta'],
  logo: string | null,
  index: number,
  total: number,
) {
  const s = pptx.addSlide()

  if (slide.notes?.trim()) {
    s.addNotes(slide.notes.trim())
  }

  s.background = { color: BG }

  s.addShape(pptx.ShapeType.rect, {
    ...box(0, 0, DESIGN_W, 0.08),
    fill: { color: NAVY },
    line: { color: NAVY },
  })

  addLogo(s, logo)

  if (slide.layout === 'title') {
    const titleLines = slide.title.split('\n').map((text, i, lines) => ({
      text,
      options: i < lines.length - 1 ? { breakLine: true as const } : undefined,
    }))
    s.addText(titleLines, {
      ...box(0.5, 1.35, 9.0, 1.55),
      fontSize: pt(24),
      fontFace: FONT_H,
      color: NAVY,
      bold: true,
      align: 'center',
      valign: 'middle',
    })
    if (slide.subtitle) {
      s.addText(slide.subtitle, {
        ...box(1.0, 3.4, 8.0, 0.7),
        fontSize: pt(16),
        fontFace: FONT_B,
        color: SECONDARY,
        align: 'center',
      })
    }
    s.addShape(pptx.ShapeType.rect, {
      ...box(4.35, 4.28, 1.3, 0.03),
      fill: { color: GOLD },
      line: { color: GOLD },
    })
    s.addText(
      `${meta.author} · ${meta.degree}\nPreliminary Doctoral Defense · Chapters One to Three | ${meta.date}`,
      {
        ...box(0.8, 4.42, 8.4, 0.7),
        fontSize: pt(14),
        fontFace: FONT_B,
        color: MUTED,
        align: 'center',
      },
    )
    return
  }

  if (slide.layout === 'section') {
    if (slide.chapter) {
      s.addText(slide.chapter.toUpperCase(), {
        ...box(0.8, 1.85, 8.4, 0.35),
        fontSize: pt(14),
        fontFace: FONT_B,
        color: GOLD,
        bold: true,
        charSpacing: 3,
        align: 'center',
      })
    }
    s.addText(slide.title, {
      ...box(0.7, 2.25, 8.6, 1.15),
      fontSize: pt(36),
      fontFace: FONT_H,
      color: NAVY,
      bold: true,
      align: 'center',
    })
    if (slide.subtitle) {
      s.addText(slide.subtitle, {
        ...box(1.1, 3.5, 7.8, 0.7),
        fontSize: pt(16),
        fontFace: FONT_B,
        color: MUTED,
        align: 'center',
      })
    }
    addDeckFooter(s, index, total)
    return
  }

  if (slide.layout === 'closing') {
    if (slide.chapter) {
      s.addText(slide.chapter.toUpperCase(), {
        ...box(0.45, 0.42, 7.6, 0.22),
        fontSize: pt(10),
        fontFace: FONT_B,
        color: GOLD,
        bold: true,
        charSpacing: 2,
      })
    }
    s.addText(slide.title, {
      ...box(0.45, 0.68, 7.6, 0.5),
      fontSize: pt(26),
      fontFace: FONT_H,
      color: NAVY,
      bold: true,
    })
    s.addShape(pptx.ShapeType.rect, {
      ...box(0.45, 1.22, 9.1, 0.025),
      fill: { color: GOLD },
      line: { color: GOLD },
    })
    if (slide.subtitle) {
      s.addShape(pptx.ShapeType.roundRect, {
        ...box(0.9, 1.7, 8.2, 2.4),
        fill: { color: WHITE },
        line: { color: BORDER },
        rectRadius: 0.08 * SX,
      })
      s.addShape(pptx.ShapeType.rect, {
        ...box(0.9, 1.7, 0.07, 2.4),
        fill: { color: GOLD },
        line: { color: GOLD },
      })
      s.addText(slide.subtitle, {
        ...box(1.2, 1.9, 7.6, 2.0),
        fontSize: pt(16),
        fontFace: FONT_B,
        color: PPT_COLORS.textDark,
        valign: 'middle',
      })
    }
    if (slide.footer) {
      s.addText(slide.footer, {
        ...box(0.8, 4.35, 8.4, 0.4),
        fontSize: pt(12),
        fontFace: FONT_B,
        color: MUTED,
        align: 'center',
      })
    }
    addDeckFooter(s, index, total)
    return
  }

  if (slide.chapter) {
    s.addText(slide.chapter.toUpperCase(), {
      ...box(0.45, 0.36, 7.6, 0.2),
      fontSize: pt(10),
      fontFace: FONT_B,
      color: GOLD,
      bold: true,
      charSpacing: 2,
    })
  }
  s.addText(slide.title, {
    ...box(0.45, slide.chapter ? 0.54 : 0.42, 7.6, 0.42),
    fontSize: pt(22),
    fontFace: FONT_H,
    color: NAVY,
    bold: true,
  })
  s.addShape(pptx.ShapeType.rect, {
    ...box(0.45, slide.chapter ? 0.98 : 0.86, 9.1, 0.025),
    fill: { color: GOLD },
    line: { color: GOLD },
  })

  if (slide.subtitle) {
    s.addText(slide.subtitle, {
      ...box(0.45, slide.chapter ? 1.06 : 0.94, 9.1, 0.3),
      fontSize: pt(12),
      fontFace: FONT_B,
      color: MUTED,
    })
  }

  if (slide.layout === 'bullets' || slide.layout === 'cards') {
    const items = (slide.bullets ?? []).map((t) => t.trim()).filter(Boolean)
    if (items.length) {
      const density = getContentDensity(items)
      const top = slide.subtitle ? 1.4 : 1.18
      if (slide.layout === 'cards') {
        const gap = 0.08
        const areaH = 3.85
        const height = (areaH - gap * (items.length - 1)) / items.length
        const fontSize =
          items.length >= 5
            ? 11
            : items.length === 4
              ? 12
              : items.length === 3
                ? 16
                : density === 'dense'
                  ? 13
                  : 15
        items.forEach((item, i) => {
          const y = top + i * (height + gap)
          s.addShape(pptx.ShapeType.roundRect, {
            ...box(0.45, y, 9.1, height),
            fill: { color: WHITE },
            line: { color: BORDER },
            rectRadius: 0.06 * SX,
          })
          s.addShape(pptx.ShapeType.rect, {
            ...box(0.45, y, 0.07, height),
            fill: { color: GOLD },
            line: { color: GOLD },
          })
          s.addText(parseBulletItem(item).text, {
            ...box(0.7, y + 0.04, 8.65, height - 0.08),
            fontSize: pt(fontSize),
            fontFace: FONT_B,
            color: PPT_COLORS.textDark,
            valign: 'middle',
            ...(items.length === 3 ? { lineSpacing: 24 } : {}),
          })
        })
      } else {
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
            fontFace: FONT_B,
            color: NAVY,
            paraSpaceAfter: pt(paraSpaceAfter),
            valign: 'middle',
          },
        )
      }
    }
  }

  if (slide.layout === 'twoColumn') {
    const columns = resolveTwoColumnContent(slide)
    const paired =
      columns.leftBullets.length === 1 && columns.rightBullets.length === 1
    const colDensity = getColumnDensity([
      ...columns.leftBullets,
      ...columns.rightBullets,
    ])

    if (paired) {
      const cardTop = slide.subtitle ? 1.32 : 1.08
      const cardH = 4.05
      const cardW = 4.48
      const gap = 0.18
      const leftX = 0.43
      const rightX = leftX + cardW + gap
      const pad = 0.22
      const titleH = 0.42
      const LEFT_FILL = 'EEF3FA'
      const RIGHT_FILL = 'F8F3E6'
      const LEFT_LINE = 'D7E4F2'
      const RIGHT_LINE = 'EADFC8'
      const GOLD_TEXT = '8A6A32'
      const fontSize = colDensity === 'sparse' ? 16 : colDensity === 'medium' ? 14 : 13

      const drawPairedCard = (
        x: number,
        fill: string,
        line: string,
        titleColor: string,
        title: string,
        body: string,
        iconFill: string,
      ) => {
        s.addShape(pptx.ShapeType.roundRect, {
          ...box(x, cardTop, cardW, cardH),
          fill: { color: fill },
          line: { color: line },
          rectRadius: 0.1 * SX,
        })
        const parsed = parseBulletItem(title)
        const hasIcon = Boolean(parsed.icon)
        if (hasIcon) {
          s.addShape(pptx.ShapeType.ellipse, {
            ...box(x + pad, cardTop + 0.2, 0.28, 0.28),
            fill: { color: iconFill },
            line: { color: iconFill },
          })
        }
        s.addText(parsed.text, {
          ...box(
            x + pad + (hasIcon ? 0.36 : 0),
            cardTop + 0.18,
            cardW - pad * 2 - (hasIcon ? 0.36 : 0),
            titleH,
          ),
          fontSize: pt(16),
          fontFace: FONT_H,
          color: titleColor,
          bold: true,
          align: 'left',
          valign: 'middle',
        })
        s.addText(body, {
          ...box(x + pad, cardTop + 0.68, cardW - pad * 2, cardH - 0.9),
          fontSize: pt(fontSize),
          fontFace: FONT_B,
          color: NAVY,
          align: 'left',
          valign: 'top',
        })
      }

      drawPairedCard(
        leftX,
        LEFT_FILL,
        LEFT_LINE,
        SECONDARY,
        columns.leftTitle,
        columns.leftBullets[0],
        SECONDARY,
      )
      drawPairedCard(
        rightX,
        RIGHT_FILL,
        RIGHT_LINE,
        GOLD_TEXT,
        columns.rightTitle,
        columns.rightBullets[0],
        GOLD,
      )
    } else {
      const top = slide.subtitle ? 1.4 : 1.15
      const headingH = columns.leftTitle || columns.rightTitle ? 0.36 : 0
      const ruleH = headingH ? 0.035 : 0
      const bodyTop = top + headingH + (headingH ? 0.16 : 0)
      const bodyH = 3.87 - headingH
      const fontSize =
        colDensity === 'sparse' ? 16 : colDensity === 'medium' ? 14 : 12

      if (columns.leftTitle) {
        s.addText(parseBulletItem(columns.leftTitle).text, {
          ...box(0.45, top, 4.4, headingH),
          fontSize: pt(18),
          fontFace: FONT_H,
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
            text: parseBulletItem(t).text,
            options: { bullet: true, breakLine: true },
          })),
          {
            ...box(0.45, bodyTop, 4.4, bodyH),
            fontSize: pt(fontSize),
            fontFace: FONT_B,
            color: NAVY,
            paraSpaceAfter: pt(colDensity === 'dense' ? 6 : 8),
            valign: 'top',
          },
        )
      }

      if (columns.rightTitle) {
        s.addText(parseBulletItem(columns.rightTitle).text, {
          ...box(5.15, top, 4.4, headingH),
          fontSize: pt(18),
          fontFace: FONT_H,
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
            text: parseBulletItem(t).text,
            options: { bullet: true, breakLine: true },
          })),
          {
            ...box(5.15, bodyTop, 4.4, bodyH),
            fontSize: pt(fontSize),
            fontFace: FONT_B,
            color: NAVY,
            paraSpaceAfter: pt(colDensity === 'dense' ? 6 : 8),
            valign: 'top',
          },
        )
      }
    }
  }

  if (slide.layout === 'framework' && slide.frameworkBlocks?.length) {
    const blocks = slide.frameworkBlocks.slice(0, 6)
    const noteItems = (slide.bullets ?? []).map((t) => t.trim()).filter(Boolean)
    const top = slide.subtitle ? 1.38 : 1.12
    const areaH = noteItems.length ? 3.12 : 3.7
    const count = blocks.length
    const cols = count <= 2 ? Math.max(count, 1) : count === 4 ? 2 : 3
    const rows = Math.ceil(count / cols)
    const gapX = 0.16
    const gapY = 0.14
    const totalW = 9.1
    const width = (totalW - gapX * (cols - 1)) / cols
    const height = (areaH - gapY * (rows - 1)) / rows
    const CARD_FILL = WHITE
    const bodySize = densityFontSize(
      blocks.map((b) => b.text),
      count >= 4
        ? { sparse: 13, medium: 12, dense: 11 }
        : { sparse: 15, medium: 13, dense: 12 },
    )
    const labelSize = count >= 4 ? 14 : count === 2 ? 16 : 17
    blocks.forEach((block, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const x = 0.45 + col * (width + gapX)
      const y = top + row * (height + gapY)
      s.addShape(pptx.ShapeType.roundRect, {
        ...box(x, y, width, height),
        fill: { color: CARD_FILL },
        line: { color: BORDER },
        rectRadius: 0.1 * SX,
      })
      s.addText(block.label, {
        ...box(x + 0.16, y + 0.1, width - 0.32, 0.32),
        fontSize: pt(labelSize),
        fontFace: FONT_H,
        color: NAVY,
        bold: true,
      })
      if (block.author) {
        s.addText(block.author, {
          ...box(x + 0.16, y + 0.4, width - 0.32, 0.22),
          fontSize: pt(10),
          fontFace: FONT_B,
          color: GOLD,
          bold: true,
        })
      }
      s.addText(block.text, {
        ...box(
          x + 0.16,
          y + (block.author ? 0.62 : 0.46),
          width - 0.32,
          height - (block.author ? 0.74 : 0.58),
        ),
        fontSize: pt(bodySize),
        fontFace: FONT_B,
        color: '000000',
        valign: 'top',
      })
    })
    if (noteItems.length) {
      s.addShape(pptx.ShapeType.roundRect, {
        ...box(0.45, top + areaH + 0.12, 9.1, 0.52),
        fill: { color: CARD_FILL },
        line: { color: BORDER },
        rectRadius: 0.08 * SX,
      })
      s.addText(
        noteItems.map((t) => parseBulletItem(t).text).join('  '),
        {
          ...box(0.6, top + areaH + 0.16, 8.8, 0.44),
          fontSize: pt(11),
          fontFace: FONT_B,
          color: NAVY,
          valign: 'middle',
        },
      )
    }
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
        chartColors: [NAVY, SECONDARY, GOLD, '334155', MUTED],
      },
    )

    if (slide.chartCaption) {
      s.addText(slide.chartCaption, {
        ...box(0.4, 4.9, 5.1, 0.3),
        fontSize: pt(11),
        fontFace: FONT_B,
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
          fontFace: FONT_B,
          color: NAVY,
          paraSpaceAfter: pt(colDensity === 'dense' ? 5 : 7),
          valign: 'top',
        },
      )
    }
  }

  addDeckFooter(s, index, total)
}

export async function exportPptx(state: PresentationState) {
  const pptx = new PptxGenJS()
  pptx.author = state.meta.author
  pptx.title = 'DBA Preliminary Defense — IT in B2B Marketing Strategies'
  pptx.subject = state.meta.brand
  pptx.defineLayout({ name: 'LAYOUT_16x9_OFFICE', width: SLIDE_W, height: SLIDE_H })
  pptx.layout = 'LAYOUT_16x9_OFFICE'
  pptx.theme = { headFontFace: FONT_H, bodyFontFace: FONT_B }

  const logo = await loadLogoData()

  for (const [index, slide] of state.slides.entries()) {
    renderSlide(pptx, slide, state.meta, logo, index, state.slides.length)
  }

  await pptx.writeFile({
    fileName: 'DBA-Preliminary-Defense-Adedapo.pptx',
  })
}
