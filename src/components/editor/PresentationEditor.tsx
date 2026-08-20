import { useCallback, useEffect, useMemo, useState } from 'react'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import { defaultEditorView } from '../../lib/documentSections'
import { exportDocx } from '../../lib/exportDocx'
import { exportPptx } from '../../lib/exportPptx'
import { resolveDocumentFont } from '../../theme/documentTheme'
import { useDocumentTabs } from '../../store/documentTabs'
import { SEED_DOCUMENT_ID, isSeedDocument } from '../../store/libraryStore'
import { usePresentationStore } from '../../store/presentationStore'
import { SlideFilmstrip } from '../filmstrip/SlideFilmstrip'
import { AppShell } from '../layout/AppShell'
import type { ExportKind } from '../layout/Toolbar'
import { PresenterView } from '../presenter/PresenterView'
import { DocumentCanvas } from './DocumentCanvas'
import { DocumentMetaFields } from './DocumentMetaFields'
import { DocumentOutline } from './DocumentOutline'
import { SlideCanvas } from './SlideCanvas'
import { SlideFields } from './SlideFields'

interface Props {
  documentId: string
  documentTitle: string
}

function scrollToDocSection(id: string) {
  const el = document.getElementById(`doc-${id}`)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function PresentationEditor({ documentId, documentTitle }: Props) {
  const tabs = useDocumentTabs()
  const isActiveTab = tabs.activeId === documentId
  const store = usePresentationStore(documentId)
  const [presenting, setPresenting] = useState(false)
  const [exporting, setExporting] = useState<ExportKind>(null)
  const [outlineId, setOutlineId] = useState<string>('__cover')
  const isSeed = isSeedDocument(documentId)
  const isProposal = store.state.meta.kind === 'proposal'
  const editorView =
    store.state.meta.editorView ?? defaultEditorView(store.state.meta.kind)
  const inDocument = editorView === 'document'

  useEffect(() => {
    if (isProposal && !store.state.meta.editorView) {
      store.setEditorView('document')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentId, isProposal])

  const handleDownloadPptx = useCallback(async () => {
    setExporting('pptx')
    try {
      await exportPptx(store.state)
    } catch (err) {
      console.error(err)
      window.alert('Could not export the PowerPoint file. Please try again.')
    } finally {
      setExporting(null)
    }
  }, [store.state])

  const handleDownloadDocx = useCallback(async () => {
    setExporting('docx')
    try {
      await exportDocx(store.state, { title: documentTitle })
    } catch (err) {
      console.error(err)
      window.alert('Could not export the Word document. Please try again.')
    } finally {
      setExporting(null)
    }
  }, [documentTitle, store.state])

  const handleReset = useCallback(() => {
    const ok = window.confirm(
      documentId === SEED_DOCUMENT_ID
        ? 'Reset all slides to the original defense deck? Your edits will be lost.'
        : 'Reset this document to the original template? Your edits will be lost.',
    )
    if (ok) store.resetToSeed()
  }, [documentId, store])

  useKeyboardNav({
    enabled: isActiveTab && !presenting && !inDocument,
    onNext: store.nextSlide,
    onPrev: store.prevSlide,
  })

  const subtitle = [store.state.meta.author, store.state.meta.brand]
    .filter(Boolean)
    .join(' · ')

  const handleOutlineSelect = useCallback(
    (id: string) => {
      setOutlineId(id)
      scrollToDocSection(id)
      if (id === '__cover' || id === '__contact') return
      if (id === '__letter') {
        const letterSlide = store.state.slides.find(
          (slide) => slide.chapter === 'Cover Letter',
        )
        if (letterSlide) {
          const index = store.state.slides.findIndex((s) => s.id === letterSlide.id)
          store.setCurrentIndex(index)
        }
        return
      }
      const index = store.state.slides.findIndex((slide) => slide.id === id)
      if (index >= 0) store.setCurrentIndex(index)
    },
    [store],
  )

  const editingSlide = useMemo(() => {
    if (outlineId === '__letter') {
      return (
        store.state.slides.find((slide) => slide.chapter === 'Cover Letter') ??
        store.currentSlide
      )
    }
    if (outlineId === '__cover' || outlineId === '__contact') {
      return store.currentSlide
    }
    return (
      store.state.slides.find((slide) => slide.id === outlineId) ??
      store.currentSlide
    )
  }, [outlineId, store.currentSlide, store.state.slides])

  const showMetaPanel =
    inDocument && (outlineId === '__cover' || outlineId === '__contact')

  return (
    <>
      <AppShell
        documentId={documentId}
        brand={documentTitle || store.state.meta.brand || 'Untitled'}
        subtitle={subtitle}
        exporting={exporting}
        editorView={editorView}
        documentFont={resolveDocumentFont(store.state.meta)}
        onPresent={inDocument ? undefined : () => setPresenting(true)}
        onDownloadPptx={inDocument ? undefined : handleDownloadPptx}
        onDownloadDocx={handleDownloadDocx}
        onAdd={() => store.addSlide(inDocument ? 'bullets' : 'bullets')}
        onReset={isSeed ? handleReset : undefined}
        onViewChange={store.setEditorView}
        onFontChange={(font) => store.updateMeta({ documentFont: font })}
      >
        {inDocument ? (
          <div className="workspace workspace--document">
            <DocumentOutline
              state={store.state}
              activeId={outlineId}
              onSelect={handleOutlineSelect}
            />
            <main className="document-pane">
              <DocumentCanvas
                state={store.state}
                activeId={outlineId}
                onSelect={handleOutlineSelect}
              />
            </main>
            {showMetaPanel ? (
              <DocumentMetaFields
                meta={store.state.meta}
                saveStatus={store.saveStatus}
                onSave={store.save}
                onChange={store.updateMeta}
              />
            ) : (
              <SlideFields
                slide={editingSlide}
                canDelete={store.state.slides.length > 1}
                saveStatus={store.saveStatus}
                onSave={store.save}
                onChange={(patch) => store.updateSlide(editingSlide.id, patch)}
                onDelete={() => store.deleteSlide(editingSlide.id)}
                mode="document"
              />
            )}
          </div>
        ) : (
          <div className="workspace">
            <SlideFilmstrip
              slides={store.state.slides}
              currentIndex={store.state.currentIndex}
              onSelect={store.setCurrentIndex}
              onReorder={store.reorderSlides}
            />
            <main className="canvas-pane">
              <div className="slide-stage">
                <SlideCanvas
                  slide={store.currentSlide}
                  meta={store.state.meta}
                  index={store.state.currentIndex}
                  total={store.state.slides.length}
                />
              </div>
              <div className="slide-nav">
                <button type="button" onClick={store.prevSlide}>
                  Previous
                </button>
                <span>
                  {store.state.currentIndex + 1} / {store.state.slides.length}
                </span>
                <button type="button" onClick={store.nextSlide}>
                  Next
                </button>
              </div>
            </main>
            <SlideFields
              slide={store.currentSlide}
              canDelete={store.state.slides.length > 1}
              saveStatus={store.saveStatus}
              onSave={store.save}
              onChange={(patch) =>
                store.updateSlide(store.currentSlide.id, patch)
              }
              onDelete={() => store.deleteSlide(store.currentSlide.id)}
              mode="slides"
            />
          </div>
        )}
      </AppShell>

      {presenting ? (
        <PresenterView
          slide={store.currentSlide}
          meta={store.state.meta}
          index={store.state.currentIndex}
          total={store.state.slides.length}
          onNext={store.nextSlide}
          onPrev={store.prevSlide}
          onExit={() => setPresenting(false)}
        />
      ) : null}
    </>
  )
}
