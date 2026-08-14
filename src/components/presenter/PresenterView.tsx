import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import type { PresentationState, Slide } from '../../types/slide'
import { SlideCanvas } from '../editor/SlideCanvas'

interface Props {
  slide: Slide
  meta: PresentationState['meta']
  index: number
  total: number
  onNext: () => void
  onPrev: () => void
  onExit: () => void
}

export function PresenterView({
  slide,
  meta,
  index,
  total,
  onNext,
  onPrev,
  onExit,
}: Props) {
  useKeyboardNav({
    enabled: true,
    onNext,
    onPrev,
    onExit,
  })

  return (
    <div className="presenter" role="dialog" aria-modal="true" aria-label="Presenter">
      <div className="presenter__stage">
        <SlideCanvas slide={slide} meta={meta} />
      </div>
      <div className="presenter__hint">
        Slide {index + 1} of {total} · ← → to navigate · Esc to exit
      </div>
    </div>
  )
}
