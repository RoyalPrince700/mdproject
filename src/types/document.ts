import type { DocumentKind } from './slide'

export type DocumentSource = 'seed' | 'blank'

export interface DocumentEntry {
  id: string
  title: string
  brand: string
  author: string
  slideCount: number
  createdAt: string
  updatedAt: string
  source?: DocumentSource
  kind?: DocumentKind
}
