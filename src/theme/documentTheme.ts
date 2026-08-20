import type { DocumentFont } from '../types/slide'

export const DOCUMENT_FONTS: { value: DocumentFont; label: string }[] = [
  { value: 'Arial', label: 'Arial' },
  { value: 'Calibri', label: 'Calibri' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Georgia', label: 'Georgia' },
]

export const PROPOSAL_COLORS = {
  headerBlue: '#1e4f8a',
  headerBlueDark: '#163d6b',
  accentOrange: '#e87722',
  body: '#1a1a1a',
  muted: '#4a5568',
  tableBorder: '#cbd5e1',
  tableHead: '#1e4f8a',
  tableHeadAlt: '#e87722',
  pageBg: '#ffffff',
  canvasBg: '#e8eaed',
} as const

export function resolveDocumentFont(meta?: { documentFont?: DocumentFont; kind?: string }) {
  if (meta?.documentFont) return meta.documentFont
  return meta?.kind === 'proposal' || meta?.kind === 'document'
    ? (meta.documentFont ?? 'Arial')
    : 'Calibri'
}
