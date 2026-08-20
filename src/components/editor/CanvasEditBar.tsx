import {
  SLIDE_LAYOUTS,
  type Slide,
  type SlideLayout,
} from '../../types/slide'
import type { SaveStatus } from '../../store/presentationStore'

interface Props {
  slide: Slide
  canDelete: boolean
  saveStatus: SaveStatus
  onLayoutChange: (layout: SlideLayout) => void
  onDelete: () => void
  mode?: 'slides' | 'document'
}

export function CanvasEditBar({
  slide,
  canDelete,
  saveStatus,
  onLayoutChange,
  onDelete,
  mode = 'slides',
}: Props) {
  const unitLabel = mode === 'document' ? 'section' : 'slide'

  return (
    <div className="canvas-edit-bar" role="toolbar" aria-label="Slide options">
      <label className="canvas-edit-bar__field">
        <span className="canvas-edit-bar__label">Layout</span>
        <select
          value={slide.layout}
          onChange={(e) => onLayoutChange(e.target.value as SlideLayout)}
        >
          {SLIDE_LAYOUTS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <span
        className={`canvas-edit-bar__save${
          saveStatus === 'saved' ? ' canvas-edit-bar__save--saved' : ''
        }`}
      >
        {saveStatus === 'saved' ? 'Saved' : 'Unsaved'}
      </span>

      <button
        type="button"
        className="btn btn--danger btn--sm"
        disabled={!canDelete}
        onClick={onDelete}
      >
        Delete {unitLabel}
      </button>

      <span className="canvas-edit-bar__hint">
        Click any text on the page to edit directly
      </span>
    </div>
  )
}
