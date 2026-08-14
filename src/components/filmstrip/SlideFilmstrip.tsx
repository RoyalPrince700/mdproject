import { useRef, useState } from 'react'
import type { Slide } from '../../types/slide'

interface Props {
  slides: Slide[]
  currentIndex: number
  onSelect: (index: number) => void
  onReorder: (fromIndex: number, toIndex: number) => void
}

export function SlideFilmstrip({
  slides,
  currentIndex,
  onSelect,
  onReorder,
}: Props) {
  const dragFrom = useRef<number | null>(null)
  const [dragging, setDragging] = useState<number | null>(null)

  return (
    <nav className="filmstrip" aria-label="Slides">
      <div className="filmstrip__title">Slides</div>
      <ul className="filmstrip__list">
        {slides.map((slide, index) => (
          <li key={slide.id}>
            <button
              type="button"
              className={[
                'filmstrip__item',
                index === currentIndex ? 'is-active' : '',
                dragging === index ? 'is-dragging' : '',
              ]
                .filter(Boolean)
                .join(' ')}
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
            >
              <div className="filmstrip__thumb">
                <span className="filmstrip__thumb-num">{index + 1}</span>
                <div className="filmstrip__thumb-title">{slide.title}</div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
