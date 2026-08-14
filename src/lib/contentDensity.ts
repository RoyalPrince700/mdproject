export type ContentDensity = 'sparse' | 'medium' | 'dense'

/** Scale type size to fill empty space on short slides; keep long verbatim readable. */
export function getContentDensity(items: string[]): ContentDensity {
  const cleaned = items.map((t) => t.trim()).filter(Boolean)
  if (!cleaned.length) return 'medium'
  const count = cleaned.length
  const avgLen =
    cleaned.reduce((sum, item) => sum + item.length, 0) / count
  const totalLen = cleaned.reduce((sum, item) => sum + item.length, 0)

  if (count <= 6 && avgLen < 90) return 'sparse'
  if (avgLen > 200 || totalLen > 900 || (count >= 5 && avgLen > 140)) {
    return 'dense'
  }
  return 'medium'
}

export function densityFontSize(
  items: string[],
  sizes: { sparse: number; medium: number; dense: number },
): number {
  return sizes[getContentDensity(items)]
}

/** Two-column tracks are half-width, so treat the same text as denser. */
export function getColumnDensity(items: string[]): ContentDensity {
  const cleaned = items.map((t) => t.trim()).filter(Boolean)
  if (!cleaned.length) return 'medium'
  const count = cleaned.length
  const totalLen = cleaned.reduce((sum, item) => sum + item.length, 0)
  const avgLen = totalLen / count

  if (count >= 5 || avgLen > 140 || totalLen > 500) return 'dense'
  if (count <= 2 && avgLen < 80) return 'sparse'
  return 'medium'
}
