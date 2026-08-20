import { outlineEntries } from '../../lib/documentSections'
import type { CollaboratorPresence } from '../../lib/collaborationSocket'

interface Props {
  state: import('../../types/slide').PresentationState
  activeId?: string
  onSelect: (id: string) => void
  remoteEditors?: Map<string, CollaboratorPresence[]>
}

export function DocumentOutline({ state, activeId, onSelect, remoteEditors }: Props) {
  const entries = outlineEntries(state)

  return (
    <nav className="doc-outline" aria-label="Document outline">
      <p className="doc-outline__title">Outline</p>
      <ol className="doc-outline__list">
        {entries.map((entry) => {
          const editors =
            remoteEditors?.get(entry.id)?.filter((c) => c.isEditing) ?? []
          const remoteColor = editors[0]?.color

          return (
          <li key={entry.id}>
            <button
              type="button"
              className={`doc-outline__item${
                activeId === entry.id ? ' doc-outline__item--active' : ''
              }${editors.length ? ' doc-outline__item--remote-edit' : ''}`}
              style={
                remoteColor
                  ? ({ '--remote-edit-color': remoteColor } as React.CSSProperties)
                  : undefined
              }
              onClick={() => onSelect(entry.id)}
              title={
                editors.length
                  ? `${editors.map((c) => c.name).join(', ')} editing`
                  : undefined
              }
            >
              {entry.sectionNumber ? `${entry.sectionNumber}. ` : null}
              {entry.label}
              {editors.length ? (
                <span className="doc-outline__edit-dot" aria-hidden />
              ) : null}
            </button>
          </li>
        )})}
      </ol>
    </nav>
  )
}
