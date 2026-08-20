import { useEffect, useRef, type KeyboardEvent } from 'react'
import { getContentDensity, type ContentDensity } from '../../lib/contentDensity'
import { parseBulletItem } from '../../lib/slideIcons'
import { SlideIcon } from '../icons/SlideIcon'
import { EditableText } from './EditableText'

interface Props {
  items: string[]
  onChange: (items: string[]) => void
  className?: string
  density?: ContentDensity
  extraClass?: string
  onFocusSelect?: () => void
}

function listClass(
  items: string[],
  extra = '',
  densityOverride?: ContentDensity,
) {
  const density =
    densityOverride ??
    getContentDensity(items.map((item) => parseBulletItem(item).text))
  return ['slide__list', `slide__list--${density}`, extra]
    .filter(Boolean)
    .join(' ')
}

export function EditableBulletList({
  items,
  onChange,
  className,
  density,
  extraClass = '',
  onFocusSelect,
}: Props) {
  const listRef = useRef<HTMLUListElement>(null)
  const focusIndex = useRef<number | null>(null)

  useEffect(() => {
    if (focusIndex.current == null || !listRef.current) return
    const target = listRef.current.querySelector<HTMLElement>(
      `[data-bullet-index="${focusIndex.current}"]`,
    )
    focusIndex.current = null
    target?.focus()
  })

  const updateItem = (index: number, text: string, icon?: string) => {
    const next = [...items]
    const value = icon ? `[${icon}] ${text}` : text
    next[index] = value
    onChange(next)
  }

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLElement>) => {
    const parsed = parseBulletItem(items[index] ?? '')
    const text = parsed.text

    if (event.key === 'Enter') {
      event.preventDefault()
      const next = [...items]
      next.splice(index + 1, 0, parsed.icon ? `[${parsed.icon}] ` : '')
      focusIndex.current = index + 1
      onChange(next)
      return
    }

    if (
      event.key === 'Backspace' &&
      text === '' &&
      items.length > 1 &&
      window.getSelection()?.anchorOffset === 0
    ) {
      event.preventDefault()
      focusIndex.current = Math.max(0, index - 1)
      onChange(items.filter((_, i) => i !== index))
    }
  }

  const displayItems = items.length ? items : ['']

  return (
    <ul
      ref={listRef}
      className={className ?? listClass(displayItems, extraClass, density)}
    >
      {displayItems.map((item, index) => {
        const parsed = parseBulletItem(item)

        return (
          <li key={index} className={parsed.icon ? 'has-icon' : undefined}>
            {parsed.icon ? (
              <SlideIcon
                name={parsed.icon}
                className="slide__bullet-icon"
                size={18}
              />
            ) : null}
            <EditableText
              value={parsed.text}
              onChange={(text) => updateItem(index, text, parsed.icon)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              onFocusSelect={onFocusSelect}
              tag="span"
              placeholder="Click to add text"
              data-bullet-index={index}
            />
          </li>
        )
      })}
    </ul>
  )
}
