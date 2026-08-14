import { useCallback, useState } from 'react'
import { AppShell } from './components/layout/AppShell'
import { SlideCanvas } from './components/editor/SlideCanvas'
import { SlideFields } from './components/editor/SlideFields'
import { SlideFilmstrip } from './components/filmstrip/SlideFilmstrip'
import { PresenterView } from './components/presenter/PresenterView'
import type { ExportKind } from './components/layout/Toolbar'
import { useKeyboardNav } from './hooks/useKeyboardNav'
import { exportDocx } from './lib/exportDocx'
import { exportPptx } from './lib/exportPptx'
import { usePresentationStore } from './store/presentationStore'

export default function App() {
  const store = usePresentationStore()
  const [presenting, setPresenting] = useState(false)
  const [exporting, setExporting] = useState<ExportKind>(null)

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
      await exportDocx(store.state)
    } catch (err) {
      console.error(err)
      window.alert('Could not export the Word document. Please try again.')
    } finally {
      setExporting(null)
    }
  }, [store.state])

  const handleReset = useCallback(() => {
    const ok = window.confirm(
      'Reset all slides to the original defense deck? Your edits will be lost.',
    )
    if (ok) store.resetToSeed()
  }, [store])

  useKeyboardNav({
    enabled: !presenting,
    onNext: store.nextSlide,
    onPrev: store.prevSlide,
  })

  return (
    <>
      <AppShell
        brand={store.state.meta.brand}
        author={store.state.meta.author}
        exporting={exporting}
        onPresent={() => setPresenting(true)}
        onDownloadPptx={handleDownloadPptx}
        onDownloadDocx={handleDownloadDocx}
        onAdd={() => store.addSlide('bullets')}
        onReset={handleReset}
      >
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
            onChange={(patch) => store.updateSlide(store.currentSlide.id, patch)}
            onDelete={() => store.deleteSlide(store.currentSlide.id)}
          />
        </div>
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
