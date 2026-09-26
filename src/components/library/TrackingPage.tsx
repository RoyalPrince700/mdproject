import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  MessageSquareText,
  Send,
} from 'lucide-react'
import { responsesHash } from '../../lib/docRoutes'
import {
  formatTrackingDate,
  trackingLabel,
  trackingOf,
  trackingStats,
} from '../../lib/tracking'
import type { DocumentLibrary } from '../../store/libraryStore'
import type { DocumentEntry, DocumentTrackingStatus } from '../../types/document'
import { ResponseModal } from './ResponseModal'

interface Props {
  library: DocumentLibrary
  onOpen: (id: string) => void
  onHome: () => void
}

export function TrackingPage({ library, onOpen, onHome }: Props) {
  const [responseDoc, setResponseDoc] = useState<DocumentEntry | null>(null)

  const stats = useMemo(
    () => trackingStats(library.documents),
    [library.documents],
  )

  const trackedDocuments = useMemo(
    () =>
      library.documents.filter((doc) => {
        const status = trackingOf(doc)
        return status === 'submitted' || status === 'responded'
      }),
    [library.documents],
  )

  const handleTrackingChange = (
    doc: DocumentEntry,
    next: DocumentTrackingStatus,
  ) => {
    const current = trackingOf(doc)
    if (next === current) return
    if (next === 'responded') {
      setResponseDoc(doc)
      return
    }
    library.setDocumentTracking(doc.id, next)
  }

  return (
    <div className="library">
      <header className="toolbar">
        <div className="toolbar__brand-row">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={onHome}
            aria-label="Back to documents"
          >
            <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
            Documents
          </button>
          <div className="toolbar__brand">
            <div className="toolbar__brand-name">Track letters</div>
            <div className="toolbar__brand-sub">
              Submitted letters and response status
            </div>
          </div>
        </div>
        <div className="toolbar__actions">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              window.location.hash = responsesHash()
            }}
          >
            <MessageSquareText size={16} strokeWidth={2} aria-hidden="true" />
            All responses
            {stats.responded > 0 ? (
              <span className="library__track-count">{stats.responded}</span>
            ) : null}
          </button>
        </div>
      </header>

      <main className="library__body">
        <div className="track-page__stats">
          <div className="track-page__stat">
            <span className="track-page__stat-value">{stats.submitted}</span>
            <span className="track-page__stat-label">Submitted</span>
          </div>
          <div className="track-page__stat">
            <span className="track-page__stat-value">{stats.awaiting}</span>
            <span className="track-page__stat-label">Awaiting reply</span>
          </div>
          <div className="track-page__stat">
            <span className="track-page__stat-value">{stats.responded}</span>
            <span className="track-page__stat-label">Responded</span>
          </div>
        </div>

        {trackedDocuments.length === 0 ? (
          <div className="library__empty">
            <Send size={36} strokeWidth={1.5} aria-hidden="true" />
            <h1>No submitted letters yet</h1>
            <p>
              Mark a document as Submitted on the home page to start tracking
              it here.
            </p>
            <button type="button" className="btn btn--primary" onClick={onHome}>
              Back to documents
            </button>
          </div>
        ) : (
          <ul className="track-page__list">
            {trackedDocuments.map((doc) => {
              const status = trackingOf(doc)
              return (
                <li key={doc.id} className="track-page__item">
                  <div className="track-page__item-top">
                    <div>
                      <button
                        type="button"
                        className="track-page__item-title"
                        onClick={() => onOpen(doc.id)}
                      >
                        {doc.title}
                      </button>
                      <p className="track-page__item-meta">
                        {[doc.brand, doc.author].filter(Boolean).join(' · ') ||
                          'No organisation'}
                        {doc.submittedAt
                          ? ` · Submitted ${formatTrackingDate(doc.submittedAt)}`
                          : ''}
                        {doc.respondedAt
                          ? ` · Replied ${formatTrackingDate(doc.respondedAt)}`
                          : ''}
                      </p>
                    </div>
                    <span
                      className={`library-card__status library-card__status--${status}`}
                    >
                      {status === 'responded' ? (
                        <CheckCircle2 size={12} strokeWidth={2} aria-hidden="true" />
                      ) : (
                        <Send size={12} strokeWidth={2} aria-hidden="true" />
                      )}
                      {trackingLabel(status)}
                    </span>
                  </div>

                  {doc.responseNote ? (
                    <p className="track-page__item-note">{doc.responseNote}</p>
                  ) : null}

                  <div className="track-page__item-actions">
                    <label className="library-card__status-select">
                      <span>Status</span>
                      <select
                        value={status}
                        onChange={(event) =>
                          handleTrackingChange(
                            doc,
                            event.target.value as DocumentTrackingStatus,
                          )
                        }
                      >
                        <option value="draft">Draft</option>
                        <option value="submitted">Submitted</option>
                        <option value="responded">Responded</option>
                      </select>
                    </label>
                    {status === 'responded' || status === 'submitted' ? (
                      <button
                        type="button"
                        className="btn btn--ghost-ink"
                        onClick={() => setResponseDoc(doc)}
                      >
                        <MessageSquareText size={14} strokeWidth={2} aria-hidden="true" />
                        {doc.responseNote ? 'Edit response' : 'Add response'}
                      </button>
                    ) : null}
                    <button
                      type="button"
                      className="btn btn--ghost-ink"
                      onClick={() => onOpen(doc.id)}
                    >
                      Open letter
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </main>

      {responseDoc ? (
        <ResponseModal
          document={responseDoc}
          onClose={() => setResponseDoc(null)}
          onSave={(responseNote) => {
            library.setDocumentTracking(responseDoc.id, 'responded', {
              responseNote,
            })
            setResponseDoc(null)
          }}
        />
      ) : null}
    </div>
  )
}
