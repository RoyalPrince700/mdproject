import { useEffect, useState, type MouseEvent } from 'react'
import { Clock, LayoutGrid, Search, X } from 'lucide-react'
import { documentHref } from '../../lib/docRoutes'
import { useDocumentTabs } from '../../store/documentTabs'
import { loadLibraryIndex } from '../../store/libraryStore'
import type { DocumentEntry } from '../../types/document'

interface Props {
  open: boolean
  currentId: string
  onClose: () => void
}

function formatUpdated(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

function unitLabel(doc: DocumentEntry) {
  const noun =
    doc.kind === 'proposal' || doc.kind === 'document' ? 'section' : 'slide'
  return `${doc.slideCount} ${doc.slideCount === 1 ? noun : `${noun}s`}`
}

function opensInNewWindow(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
}

export function LibraryDrawer({ open, currentId, onClose }: Props) {
  const { openIds, openDocument, goHome } = useDocumentTabs()
  const [documents, setDocuments] = useState<DocumentEntry[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!open) return
    setQuery('')
    setDocuments(loadLibraryIndex())

    const refresh = () => setDocuments(loadLibraryIndex())
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('storage', refresh)
    window.addEventListener('focus', refresh)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('storage', refresh)
      window.removeEventListener('focus', refresh)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  const needle = query.trim().toLowerCase()
  const visible = needle
    ? documents.filter((doc) =>
        [doc.title, doc.brand, doc.author]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(needle)),
      )
    : documents

  return (
    <div className="library-drawer">
      <div className="library-drawer__scrim" onClick={onClose} />
      <aside
        className="library-drawer__panel"
        role="dialog"
        aria-modal="false"
        aria-label="Documents"
      >
        <header className="library-drawer__header">
          <h2>Documents</h2>
          <button
            type="button"
            className="library-drawer__close"
            onClick={onClose}
            aria-label="Close documents list"
            title="Close"
          >
            <X size={18} strokeWidth={2} aria-hidden="true" />
          </button>
        </header>

        <p className="library-drawer__hint">
          Each document opens in its own tab above, so nothing you have open
          gets replaced.
        </p>

        <div className="library-drawer__search">
          <Search size={15} strokeWidth={2} aria-hidden="true" />
          <input
            type="search"
            value={query}
            placeholder="Search documents"
            aria-label="Search documents"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {visible.length === 0 ? (
          <p className="library-drawer__empty">
            {documents.length === 0
              ? 'No documents yet.'
              : `No documents match “${query}”.`}
          </p>
        ) : (
          <ul className="library-drawer__list">
            {visible.map((doc) => {
              const isCurrent = doc.id === currentId
              const isOpen = openIds.includes(doc.id)
              const meta = [doc.brand, doc.author].filter(Boolean).join(' · ')
              const badge = isCurrent ? 'This tab' : isOpen ? 'Open' : null

              return (
                <li key={doc.id}>
                  <a
                    className={`library-drawer__item${
                      isCurrent ? ' library-drawer__item--current' : ''
                    }`}
                    href={documentHref(doc.id)}
                    onClick={(event) => {
                      if (opensInNewWindow(event)) return
                      event.preventDefault()
                      openDocument(doc.id)
                      onClose()
                    }}
                  >
                    <span className="library-drawer__title">{doc.title}</span>
                    {meta ? (
                      <span className="library-drawer__meta">{meta}</span>
                    ) : null}
                    <span className="library-drawer__stats">
                      {unitLabel(doc)}
                      <span>
                        <Clock size={12} strokeWidth={2} aria-hidden="true" />
                        {formatUpdated(doc.updatedAt)}
                      </span>
                    </span>
                    {badge ? (
                      <span className="library-drawer__badge">{badge}</span>
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>
        )}

        <footer className="library-drawer__footer">
          <button
            type="button"
            className="btn btn--ghost-ink"
            onClick={() => {
              onClose()
              goHome()
            }}
          >
            <LayoutGrid size={15} strokeWidth={2} aria-hidden="true" />
            Manage all documents
          </button>
        </footer>
      </aside>
    </div>
  )
}
