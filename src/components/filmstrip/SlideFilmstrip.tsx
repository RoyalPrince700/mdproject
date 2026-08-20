import { useRef, useState } from 'react'
import type { CollaboratorPresence } from '../../lib/collaborationSocket'
import type { Slide } from '../../types/slide'

interface Props {
  slides: Slide[]
  currentIndex: number
  onSelect: (index: number) => void
  onReorder: (fromIndex: number, toIndex: number) => void
  remoteEditors?: Map<string, CollaboratorPresence[]>
}

export function SlideFilmstrip({
  slides,
  currentIndex,
  onSelect,
  onReorder,
  remoteEditors,
}: Props) {
  const dragFrom = useRef<number | null>(null)
  const [dragging, setDragging] = useState<number | null>(null)

  return (
    <nav className="filmstrip" aria-label="Slides">
      <div className="filmstrip__title">Slides</div>
      <ul className="filmstrip__list">
        {slides.map((slide, index) => {
          const editors = remoteEditors?.get(slide.id)?.filter((c) => c.isEditing) ?? []
          const remoteColor = editors[0]?.color

          return (
          <li key={slide.id}>
            <button
              type="button"
              className={[
                'filmstrip__item',
                index === currentIndex ? 'is-active' : '',
                dragging === index ? 'is-dragging' : '',
                editors.length ? 'is-remote-editing' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={
                remoteColor
                  ? ({ '--remote-edit-color': remoteColor } as React.CSSProperties)
                  : undefined
              }
              draggable
              onClick={() => onSelect(index)}
              onDragStart={() => {
                dragFrom.current = index
                setDragging(index)
              }}
              onDragEnd={() => {
                dragFrom.current = null
                setDragging(null)
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                const from = dragFrom.current
                if (from == null || from === index) return
                onReorder(from, index)
                dragFrom.current = null
                setDragging(null)
              }}
              title={
                editors.length
                  ? `${editors.map((c) => c.name).join(', ')} editing`
                  : undefined
              }
            >
              <div className="filmstrip__thumb">
                <span className="filmstrip__thumb-num">{index + 1}</span>
                <div className="filmstrip__thumb-title">{slide.title}</div>
                {editors.length ? (
                  <span className="filmstrip__edit-dot" aria-hidden />
                ) : null}
              </div>
            </button>
          </li>
        )})}
      </ul>
    </nav>
  )
}
