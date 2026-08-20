import { outlineEntries } from '../../lib/documentSections'

interface Props {
  state: import('../../types/slide').PresentationState
  activeId?: string
  onSelect: (id: string) => void
}

export function DocumentOutline({ state, activeId, onSelect }: Props) {
  const entries = outlineEntries(state)

  return (
    <nav className="doc-outline" aria-label="Document outline">
      <p className="doc-outline__title">Outline</p>
      <ol className="doc-outline__list">
        {entries.map((entry) => (
          <li key={entry.id}>
            <button
              type="button"
              className={`doc-outline__item${
                activeId === entry.id ? ' doc-outline__item--active' : ''
              }`}
              onClick={() => onSelect(entry.id)}
            >
              {entry.sectionNumber ? `${entry.sectionNumber}. ` : null}
              {entry.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}
