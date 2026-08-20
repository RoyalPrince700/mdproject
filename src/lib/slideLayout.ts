import { parseBulletItem } from './slideIcons'
import type { FrameworkBlock, PresentationState, Slide, SlideLayout } from '../types/slide'

function cleanList(items?: string[]): string[] {
  return (items ?? []).map((item) => item.trim()).filter(Boolean)
}

/** Byline under the title slide rule; falls back to presentation meta. */
export function titleBylineLines(
  slide: Slide,
  meta?: PresentationState['meta'],
): string[] {
  const fromFooter = (slide.footer ?? '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
  if (fromFooter.length) return fromFooter
  if (!meta) return []
  if (meta.kind === 'proposal') {
    return [
      meta.recipientOrg ? `Submitted to ${meta.recipientOrg}` : '',
      `${meta.brand} · ${meta.date}`,
    ].filter(Boolean)
  }
  if (meta.kind === 'document') {
    return [`${meta.brand} · ${meta.date}`].filter(Boolean)
  }
  return [
    `${meta.author} · ${meta.degree}`,
    `Preliminary Doctoral Defense · Chapters One to Three | ${meta.date}`,
  ]
}

export function splitList(items?: string[]): { left: string[]; right: string[] } {
  const cleaned = cleanList(items)
  const mid = Math.ceil(cleaned.length / 2)
  return {
    left: cleaned.slice(0, mid),
    right: cleaned.slice(mid),
  }
}

function blocksFromBullets(items?: string[]): FrameworkBlock[] {
  return cleanList(items).map((item, index) => {
    const parsed = parseBulletItem(item)
    return {
      label: `${index + 1}`,
      text: parsed.text,
      icon: parsed.icon,
    }
  })
}

function bulletsFromFramework(slide: Slide): string[] {
  return (slide.frameworkBlocks ?? [])
    .map((block) => {
      const label = block.label.trim()
      const text = block.text.trim()
      if (label && text) return `${label}: ${text}`
      return text || label
    })
    .filter(Boolean)
}

/** Resolve what a two-column slide should show, including fallbacks from other layouts. */
export function resolveTwoColumnContent(slide: Slide): {
  leftTitle: string
  rightTitle: string
  leftBullets: string[]
  rightBullets: string[]
} {
  const leftBullets = cleanList(slide.leftBullets)
  const rightBullets = cleanList(slide.rightBullets)
  if (leftBullets.length || rightBullets.length) {
    return {
      leftTitle: slide.leftTitle?.trim() ?? '',
      rightTitle: slide.rightTitle?.trim() ?? '',
      leftBullets,
      rightBullets,
    }
  }

  const fromBullets = splitList(slide.bullets)
  if (fromBullets.left.length || fromBullets.right.length) {
    return {
      leftTitle: slide.leftTitle?.trim() ?? '',
      rightTitle: slide.rightTitle?.trim() ?? '',
      leftBullets: fromBullets.left,
      rightBullets: fromBullets.right,
    }
  }

  const fromBlocks = splitList(bulletsFromFramework(slide))
  return {
    leftTitle: slide.leftTitle?.trim() ?? '',
    rightTitle: slide.rightTitle?.trim() ?? '',
    leftBullets: fromBlocks.left,
    rightBullets: fromBlocks.right,
  }
}

/** Remap slide fields when the user changes layout so content is not dropped. */
export function adaptSlideToLayout(
  slide: Slide,
  layout: SlideLayout,
): Partial<Slide> {
  if (layout === slide.layout) return { layout }

  if (layout === 'twoColumn') {
    const source =
      slide.layout === 'framework'
        ? bulletsFromFramework(slide)
        : cleanList(slide.bullets)
    if (source.length) {
      const { left, right } = splitList(source)
      return {
        layout,
        leftTitle: slide.leftTitle?.trim() ?? '',
        rightTitle: slide.rightTitle?.trim() ?? '',
        leftBullets: left,
        rightBullets: right,
      }
    }

    const existingLeft = cleanList(slide.leftBullets)
    const existingRight = cleanList(slide.rightBullets)
    if (existingLeft.length || existingRight.length) {
      return { layout }
    }

    return {
      layout,
      leftTitle: slide.leftTitle?.trim() || 'Left',
      rightTitle: slide.rightTitle?.trim() || 'Right',
      leftBullets: ['Point one'],
      rightBullets: ['Point one'],
    }
  }

  if (layout === 'framework') {
    if (slide.frameworkBlocks?.length) return { layout }

    const chartNames = (slide.chartData ?? [])
      .map((d) => d.name.trim())
      .filter(Boolean)
    const chartBullets = cleanList(slide.bullets)
    if (chartNames.length && chartNames.length === chartBullets.length) {
      return {
        layout,
        frameworkBlocks: chartNames.map((name, i) => {
          const parsed = parseBulletItem(chartBullets[i])
          return {
            label: name,
            text: parsed.text,
            icon: parsed.icon,
          }
        }),
      }
    }

    const fromBullets = blocksFromBullets(slide.bullets)
    if (fromBullets.length) {
      return { layout, frameworkBlocks: fromBullets }
    }

    return {
      layout,
      frameworkBlocks: [
        { label: 'A', text: 'Description' },
        { label: 'B', text: 'Description' },
        { label: 'C', text: 'Description' },
      ],
    }
  }

  if (layout === 'bullets' || layout === 'cards') {
    if (slide.layout === 'twoColumn') {
      const merged = [
        ...cleanList(slide.leftBullets),
        ...cleanList(slide.rightBullets),
      ]
      return {
        layout,
        bullets: merged.length ? merged : cleanList(slide.bullets).length
          ? cleanList(slide.bullets)
          : ['Bullet point'],
      }
    }
    if (slide.layout === 'framework') {
      const merged = bulletsFromFramework(slide)
      return {
        layout,
        bullets: merged.length ? merged : ['Bullet point'],
      }
    }
    return { layout }
  }

  return { layout }
}
