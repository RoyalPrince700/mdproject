import type { DocumentFont } from '../types/slide'

export const DOCUMENT_FONTS: { value: DocumentFont; label: string }[] = [
  { value: 'Arial', label: 'Arial' },
  { value: 'Calibri', label: 'Calibri' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Georgia', label: 'Georgia' },
]

export const DEFAULT_PROPOSAL_SENDER_ORG = 'Accessible Publishers Limited'
export const DEFAULT_PROPOSAL_SENDER_ADDRESS =
  '121/123, The Knowledge Hub,\nObafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State.'

/** Word-point sizes for every SMEH proposal cover (on-screen and DOCX). */
export const SMEH_COVER_FONT = {
  brand: 28,
  tagline: 20,
  website: 20,
  proposalFor: 11,
  title: 18,
  subtitle: 16,
  party: 16,
} as const

export function smehCoverCssVars(): Record<string, string> {
  return {
    '--smeh-cover-brand': `${SMEH_COVER_FONT.brand}pt`,
    '--smeh-cover-tagline': `${SMEH_COVER_FONT.tagline}pt`,
    '--smeh-cover-website': `${SMEH_COVER_FONT.website}pt`,
    '--smeh-cover-label': `${SMEH_COVER_FONT.proposalFor}pt`,
    '--smeh-cover-title': `${SMEH_COVER_FONT.title}pt`,
    '--smeh-cover-subtitle': `${SMEH_COVER_FONT.subtitle}pt`,
    '--smeh-cover-party': `${SMEH_COVER_FONT.party}pt`,
  }
}

export function proposalSenderLines(meta?: {
  brand?: string
  senderAddress?: string
}) {
  const org = meta?.brand?.trim() || DEFAULT_PROPOSAL_SENDER_ORG
  const address = (meta?.senderAddress?.trim() || DEFAULT_PROPOSAL_SENDER_ADDRESS)
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean)
  return [org, ...address]
}

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
