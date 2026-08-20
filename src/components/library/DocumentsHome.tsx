import { useState, type FormEvent } from 'react'
import {
  Clock,
  FilePlus,
  FileText,
  FolderOpen,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react'
import type { DocumentLibrary } from '../../store/libraryStore'
import { EKITI_DOCUMENT_ID, LOYALTY_FRAMEWORK_DOCUMENT_ID, SCHOLARSHIP_CAFE_DOCUMENT_ID, SEED_DOCUMENT_ID, UNION_DOCUMENT_ID, WEMA_DOCUMENT_ID } from '../../store/libraryStore'

interface Props {
  library: DocumentLibrary
  onOpen: (id: string) => void
}

function formatUpdated(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function DocumentsHome({ library, onOpen }: Props) {
  const [creating, setCreating] = useState(false)
  const [newTitle, setNewTitle] = useState('Untitled document')

  const handleCreate = (event: FormEvent) => {
    event.preventDefault()
    const doc = library.createDocument(newTitle)
    setCreating(false)
    setNewTitle('Untitled document')
    onOpen(doc.id)
  }

  const handleRename = (id: string, current: string) => {
    const next = window.prompt('Rename document', current)
    if (next != null) library.renameDocument(id, next)
  }

  const handleDelete = (id: string, title: string) => {
    const ok = window.confirm(
      `Delete “${title}”? This cannot be undone.`,
    )
    if (ok) library.deleteDocument(id)
  }

  const hasSeed = library.documents.some((doc) => doc.id === SEED_DOCUMENT_ID)
  const hasWema = library.documents.some((doc) => doc.id === WEMA_DOCUMENT_ID)
  const hasUnion = library.documents.some((doc) => doc.id === UNION_DOCUMENT_ID)
  const hasEkiti = library.documents.some((doc) => doc.id === EKITI_DOCUMENT_ID)
  const hasScholarshipCafe = library.documents.some((doc) => doc.id === SCHOLARSHIP_CAFE_DOCUMENT_ID)
  const hasLoyaltyFramework = library.documents.some((doc) => doc.id === LOYALTY_FRAMEWORK_DOCUMENT_ID)

  return (
    <div className="library">
      <header className="toolbar">
        <div className="toolbar__brand">
          <div className="toolbar__brand-name">Documents</div>
          <div className="toolbar__brand-sub">
            Open a document to edit in Word or slide view, then download as DOCX or PPTX
          </div>
        </div>
        <div className="toolbar__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setCreating(true)}
          >
            <Plus size={16} strokeWidth={2} aria-hidden="true" />
            New document
          </button>
        </div>
      </header>

      <main className="library__body">
        {creating ? (
          <form className="library__create" onSubmit={handleCreate}>
            <label htmlFor="new-doc-title">Document title</label>
            <div className="library__create-row">
              <input
                id="new-doc-title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn btn--primary">
                Create
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() => {
                  setCreating(false)
                  setNewTitle('Untitled document')
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : null}

        {library.documents.length === 0 ? (
          <div className="library__empty">
            <FileText size={36} strokeWidth={1.5} aria-hidden="true" />
            <h1>No documents yet</h1>
            <p>Create a blank document or restore a starter template.</p>
            <div className="library__empty-actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => setCreating(true)}
              >
                <FilePlus size={16} strokeWidth={2} aria-hidden="true" />
                New document
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(LOYALTY_FRAMEWORK_DOCUMENT_ID).id)
                }
              >
                Restore School Loyalty Reward Framework
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(SCHOLARSHIP_CAFE_DOCUMENT_ID).id)
                }
              >
                Restore Scholarships Cafe proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(EKITI_DOCUMENT_ID).id)
                }
              >
                Restore Ekiti State proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(UNION_DOCUMENT_ID).id)
                }
              >
                Restore Union Bank proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(WEMA_DOCUMENT_ID).id)
                }
              >
                Restore Wema Bank proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() => onOpen(library.restoreDefenseDeck().id)}
              >
                Restore defense presentation
              </button>
            </div>
          </div>
        ) : (
          <ul className="library__grid">
            <li>
              <button
                type="button"
                className="library-card library-card--new"
                onClick={() => setCreating(true)}
              >
                <Plus size={28} strokeWidth={1.75} aria-hidden="true" />
                <span>New document</span>
              </button>
            </li>
            {library.documents.map((doc) => (
              <li key={doc.id}>
                <article className="library-card">
                  <button
                    type="button"
                    className="library-card__open"
                    onClick={() => onOpen(doc.id)}
                  >
                    <div className="library-card__icon" aria-hidden="true">
                      <FolderOpen size={20} strokeWidth={1.75} />
                    </div>
                    <h2>{doc.title}</h2>
                    {doc.kind === 'proposal' ? (
                      <p className="library-card__kind">Proposal</p>
                    ) : doc.kind === 'document' ? (
                      <p className="library-card__kind">Document</p>
                    ) : null}
                    <p className="library-card__meta">
                      {[doc.brand, doc.author].filter(Boolean).join(' · ') ||
                        'Untitled details'}
                    </p>
                    <p className="library-card__stats">
                      {doc.kind === 'proposal' || doc.kind === 'document' ? (
                        <>
                          {doc.slideCount}{' '}
                          {doc.slideCount === 1 ? 'section' : 'sections'}
                        </>
                      ) : (
                        <>
                          {doc.slideCount}{' '}
                          {doc.slideCount === 1 ? 'slide' : 'slides'}
                        </>
                      )}
                      <span>
                        <Clock size={13} strokeWidth={2} aria-hidden="true" />
                        {formatUpdated(doc.updatedAt)}
                      </span>
                    </p>
                  </button>
                  <div className="library-card__actions">
                    <button
                      type="button"
                      className="btn btn--ghost-ink"
                      onClick={() => handleRename(doc.id, doc.title)}
                    >
                      <Pencil size={14} strokeWidth={2} aria-hidden="true" />
                      Rename
                    </button>
                    <button
                      type="button"
                      className="btn btn--danger-ink"
                      onClick={() => handleDelete(doc.id, doc.title)}
                    >
                      <Trash2 size={14} strokeWidth={2} aria-hidden="true" />
                      Delete
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}

        {library.documents.length > 0 && (!hasSeed || !hasWema || !hasUnion || !hasEkiti || !hasScholarshipCafe || !hasLoyaltyFramework) ? (
          <p className="library__restore">
            {!hasLoyaltyFramework ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(LOYALTY_FRAMEWORK_DOCUMENT_ID).id)
                }
              >
                Add School Loyalty Reward Framework
              </button>
            ) : null}
            {!hasScholarshipCafe ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(SCHOLARSHIP_CAFE_DOCUMENT_ID).id)
                }
              >
                Add SmartEdu Hub proposal to Scholarships Cafe
              </button>
            ) : null}
            {!hasEkiti ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(EKITI_DOCUMENT_ID).id)
                }
              >
                Add SmartEdu Hub proposal to Ekiti State Government
              </button>
            ) : null}
            {!hasUnion ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(UNION_DOCUMENT_ID).id)
                }
              >
                Add SmartEdu Hub proposal to Union Bank
              </button>
            ) : null}
            {!hasWema ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(WEMA_DOCUMENT_ID).id)
                }
              >
                Add SmartEdu Hub proposal to Wema Bank
              </button>
            ) : null}
            {!hasSeed ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() => onOpen(library.restoreDefenseDeck().id)}
              >
                Add preliminary defense presentation
              </button>
            ) : null}
          </p>
        ) : null}
      </main>
    </div>
  )
}
