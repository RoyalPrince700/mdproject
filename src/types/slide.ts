export type SlideLayout =
  | 'title'
  | 'section'
  | 'bullets'
  | 'cards'
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
  chapter?: string
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
  author?: string
  icon?: string
}

export type DocumentKind = 'presentation' | 'proposal'
export type EditorViewMode = 'slides' | 'document'
export type DocumentFont = 'Arial' | 'Calibri' | 'Times New Roman' | 'Georgia'

export interface PresentationMeta {
  brand: string
  author: string
  degree: string
  date: string
  letterDate?: string
  kind?: DocumentKind
  editorView?: EditorViewMode
  documentFont?: DocumentFont
  recipient?: string
  recipientOrg?: string
  recipientAddress?: string
  subject?: string
  coverLetter?: string[]
  signOff?: string[]
  website?: string
  contactRows?: { label: string; value: string }[]
}

export interface PresentationState {
  slides: Slide[]
  currentIndex: number
  seedRevision?: number
  meta: PresentationMeta
}

export const SLIDE_LAYOUTS: { value: SlideLayout; label: string }[] = [
  { value: 'title', label: 'Title' },
  { value: 'section', label: 'Section' },
  { value: 'bullets', label: 'Bullets' },
  { value: 'cards', label: 'Card list' },
  { value: 'twoColumn', label: 'Two Column' },
  { value: 'framework', label: 'Card grid' },
  { value: 'chart', label: 'Chart' },
  { value: 'closing', label: 'Closing' },
]

export function createBlankPresentation(title = 'Untitled document'): PresentationState {
  const slide = createEmptySlide('title')
  slide.title = title
  slide.subtitle = ''
  const now = new Date()
  return {
    slides: [slide],
    currentIndex: 0,
    meta: {
      brand: '',
      author: '',
      degree: '',
      date: now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    },
  }
}

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
        chapter: 'Chapter One',
        notes: '',
      }
    case 'cards':
      return {
        id,
        layout,
        title: 'Card List',
        bullets: ['Card one'],
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
