import type { DocumentKind } from './slide'

export type DocumentSource = 'seed' | 'blank'

/** Letter / proposal follow-up status on the library home. */
export type DocumentTrackingStatus = 'draft' | 'submitted' | 'responded'

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
  /** Follow-up status for submitted letters (defaults to draft when unset). */
  trackingStatus?: DocumentTrackingStatus
  submittedAt?: string
  respondedAt?: string
  /** Short note about the reply (optional). */
  responseNote?: string
}
