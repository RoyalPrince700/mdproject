import type { DocumentEntry, DocumentTrackingStatus } from '../types/document'

export function trackingOf(doc: DocumentEntry): DocumentTrackingStatus {
  return doc.trackingStatus ?? 'draft'
}

export function trackingLabel(status: DocumentTrackingStatus) {
  if (status === 'submitted') return 'Submitted'
  if (status === 'responded') return 'Responded'
  return 'Draft'
}

export function formatTrackingDate(iso?: string) {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatTrackingDateTime(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function trackingStats(documents: DocumentEntry[]) {
  let submitted = 0
  let awaiting = 0
  let responded = 0
  for (const doc of documents) {
    const status = trackingOf(doc)
    if (status === 'submitted') {
      submitted += 1
      awaiting += 1
    } else if (status === 'responded') {
      submitted += 1
      responded += 1
    }
  }
  return { submitted, awaiting, responded }
}
