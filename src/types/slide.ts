export type SlideLayout =
  | 'title'
  | 'section'
  | 'bullets'
  | 'twoColumn'
  | 'framework'
  | 'chart'
  | 'closing'

export type ChartType = 'bar' | 'pie'

export interface ChartDatum {
  name: string
  value: number
}

export interface Slide {
  id: string
  layout: SlideLayout
  title: string
  subtitle?: string
  /** Lucide icon name from SLIDE_ICONS, shown beside the title. */
  icon?: string
  bullets?: string[]
  leftTitle?: string
  leftBullets?: string[]
  rightTitle?: string
  rightBullets?: string[]
  frameworkBlocks?: FrameworkBlock[]
  chartType?: ChartType
  chartData?: ChartDatum[]
  chartCaption?: string
  notes?: string
  footer?: string
}

export interface FrameworkBlock {
  label: string
  text: string
  icon?: string
}

export interface PresentationState {
  slides: Slide[]
  currentIndex: number
  seedRevision?: number
  meta: {
    brand: string
    author: string
    degree: string
    date: string
  }
}

export const SLIDE_LAYOUTS: { value: SlideLayout; label: string }[] = [
  { value: 'title', label: 'Title' },
  { value: 'section', label: 'Section' },
  { value: 'bullets', label: 'Bullets' },
  { value: 'twoColumn', label: 'Two Column' },
  { value: 'framework', label: 'Framework' },
  { value: 'chart', label: 'Chart' },
  { value: 'closing', label: 'Closing' },
]

export function createEmptySlide(layout: SlideLayout = 'bullets'): Slide {
  const id = `slide-${crypto.randomUUID().slice(0, 8)}`
  switch (layout) {
    case 'title':
      return {
        id,
        layout,
        title: 'Presentation Title',
        subtitle: 'Subtitle',
        notes: '',
      }
    case 'section':
      return {
        id,
        layout,
        title: 'Section Title',
        subtitle: 'Optional subtitle',
        notes: '',
      }
    case 'twoColumn':
      return {
        id,
        layout,
        title: 'Two-Column Slide',
        leftTitle: 'Left',
        leftBullets: ['Point one'],
        rightTitle: 'Right',
        rightBullets: ['Point one'],
        notes: '',
      }
    case 'framework':
      return {
        id,
        layout,
        title: 'Framework',
        frameworkBlocks: [
          { label: 'A', text: 'Description' },
          { label: 'B', text: 'Description' },
          { label: 'C', text: 'Description' },
        ],
        notes: '',
      }
    case 'chart':
      return {
        id,
        layout,
        title: 'Chart Slide',
        chartType: 'bar',
        chartData: [
          { name: 'A', value: 10 },
          { name: 'B', value: 20 },
          { name: 'C', value: 15 },
        ],
        chartCaption: '',
        notes: '',
      }
    case 'closing':
      return {
        id,
        layout,
        title: 'Thank You',
        subtitle: 'Questions & Discussion',
        notes: '',
      }
    default:
      return {
        id,
        layout: 'bullets',
        title: 'New Slide',
        bullets: ['Bullet point'],
        notes: '',
      }
  }
}
