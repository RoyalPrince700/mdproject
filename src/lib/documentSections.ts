import type { EditorViewMode, PresentationState, Slide } from '../types/slide'
import { parseBulletItem } from './slideIcons'
import { resolveTwoColumnContent } from './slideLayout'

export function textOf(item: string): string {
  return parseBulletItem(item).text.trim()
}

export function skipProposalSlide(slide: Slide): boolean {
  return (
    slide.layout === 'title' ||
    slide.layout === 'section' ||
    slide.chapter === 'Cover Letter'
  )
}

export function proposalBodySlides(slides: Slide[]): Slide[] {
  return slides.filter((slide) => !skipProposalSlide(slide))
}

export function proposalSectionNumber(slides: Slide[], slideId: string): number {
  const body = proposalBodySlides(slides)
  const index = body.findIndex((slide) => slide.id === slideId)
  return index >= 0 ? index + 1 : 0
}

export function outlineEntries(state: PresentationState) {
  const entries: Array<{
    id: string
    label: string
    kind: 'cover' | 'letter' | 'section'
    sectionNumber?: number
  }> = [{ id: '__cover', label: 'Cover page', kind: 'cover' }]

  const letterSlides = state.slides.filter((slide) => slide.chapter === 'Cover Letter')
  if (letterSlides.length) {
    entries.push({ id: '__letter', label: 'Cover letter', kind: 'letter' })
  }

  proposalBodySlides(state.slides).forEach((slide, index) => {
    entries.push({
      id: slide.id,
      label: slide.title.replace(/\n/g, ' ').trim() || `Section ${index + 1}`,
      kind: 'section',
      sectionNumber: index + 1,
    })
  })

  return entries
}

export function letterParagraphs(state: PresentationState): string[] {
  const fromSlides = state.slides
    .filter((slide) => slide.chapter === 'Cover Letter')
    .flatMap((slide) => (slide.bullets ?? []).map(textOf).filter(Boolean))
  return fromSlides.length > 0 ? fromSlides : (state.meta.coverLetter ?? [])
}

export function sectionTableRows(slide: Slide): Array<[string, string]> {
  if (slide.layout === 'framework') {
    return (slide.frameworkBlocks ?? [])
      .map((block): [string, string] | null => {
        const label = block.label.trim()
        const text = block.text.trim()
        if (!label && !text) return null
        return [label || 'Item', text]
      })
      .filter((row): row is [string, string] => row != null)
  }

  if (slide.layout === 'twoColumn') {
    const columns = resolveTwoColumnContent(slide)
    const left = columns.leftBullets.map(textOf).filter(Boolean)
    const right = columns.rightBullets.map(textOf).filter(Boolean)
    const length = Math.max(left.length, right.length)
    const rows: Array<[string, string]> = []
    for (let i = 0; i < length; i += 1) {
      rows.push([left[i] ?? '', right[i] ?? ''])
    }
    return rows
  }

  return []
}

export function sectionBullets(slide: Slide): string[] {
  return (slide.bullets ?? []).map(textOf).filter(Boolean)
}

export function defaultEditorView(kind?: PresentationState['meta']['kind']): EditorViewMode {
  return kind === 'proposal' ? 'document' : 'slides'
}
