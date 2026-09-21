export type InlineSegment = { text: string; bold?: boolean }

/** Split `**bold**` markers into plain/bold segments for display and export. */
export function parseInlineFormatting(text: string): InlineSegment[] {
  if (!text.includes('**')) {
    return text ? [{ text }] : []
  }

  const segments: InlineSegment[] = []
  const re = /\*\*(.+?)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, match.index) })
    }
    segments.push({ text: match[1], bold: true })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex) })
  }

  return segments.length ? segments : [{ text }]
}

export function hasInlineFormatting(text: string): boolean {
  return text.includes('**')
}
