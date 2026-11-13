import type { Slide } from '../types/slide'

export interface CvRoleEntry {
  role: string
  dates?: string
  organisation?: string
  bullets: string[]
}

export type CvLine =
  | { kind: 'role'; role: string; dates?: string }
  | { kind: 'org'; text: string }
  | { kind: 'bullet'; text: string }
  | { kind: 'para'; text: string }

export type CvDisplayBlock =
  | { kind: 'role'; role: string; dates?: string }
  | { kind: 'org'; text: string }
  | { kind: 'bullets'; items: string[] }

const ROLE_LINE = /^\*\*(.+?)\*\*(?:\s*\|\s*(.+))?$/

export function parseCvRoleLine(text: string) {
  const match = text.trim().match(ROLE_LINE)
  if (!match) return null
  return { role: match[1].trim(), dates: match[2]?.trim() }
}

export function isCvRoleLine(text: string) {
  return parseCvRoleLine(text) != null
}

export function slideHasCvEntries(slide: Slide) {
  return (slide.bullets ?? []).some((item) => isCvRoleLine(item))
}

export function parseCvLines(bullets: string[]): CvLine[] {
  const lines: CvLine[] = []
  let expectOrg = false

  for (const raw of bullets) {
    const text = raw.trim()
    if (!text) continue
    const role = parseCvRoleLine(text)
    if (role) {
      lines.push({ kind: 'role', role: role.role, dates: role.dates })
      expectOrg = true
      continue
    }
    if (expectOrg) {
      lines.push({ kind: 'org', text })
      expectOrg = false
      continue
    }
    lines.push({ kind: 'bullet', text })
  }

  return lines
}

export function groupCvEntries(bullets: string[]): CvRoleEntry[] {
  const entries: CvRoleEntry[] = []
  let current: CvRoleEntry | null = null

  for (const line of parseCvLines(bullets)) {
    if (line.kind === 'role') {
      current = {
        role: line.role,
        dates: line.dates,
        bullets: [],
      }
      entries.push(current)
      continue
    }
    if (!current) continue
    if (line.kind === 'org') current.organisation = line.text
    else current.bullets.push(line.text)
  }

  return entries
}

export function isCvHeaderSlide(slide: Slide, index: number) {
  return index === 0 || slide.chapter === 'Header'
}

export function groupCvDisplay(bullets: string[]): CvDisplayBlock[] {
  const blocks: CvDisplayBlock[] = []
  for (const line of parseCvLines(bullets)) {
    if (line.kind === 'bullet') {
      const last = blocks[blocks.length - 1]
      if (last?.kind === 'bullets') last.items.push(line.text)
      else blocks.push({ kind: 'bullets', items: [line.text] })
      continue
    }
    if (line.kind === 'para') continue
    blocks.push(line)
  }
  return blocks
}
