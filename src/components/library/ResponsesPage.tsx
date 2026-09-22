import { useMemo, useState } from 'react'
import { ArrowLeft, MessageSquareText } from 'lucide-react'
import { trackHash } from '../../lib/docRoutes'
import { formatTrackingDate, trackingOf } from '../../lib/tracking'
import type { DocumentLibrary } from '../../store/libraryStore'
import type { DocumentEntry } from '../../types/document'
import { ResponseModal } from './ResponseModal'

interface Props {
  library: DocumentLibrary
  onOpen: (id: string) => void
  onHome: () => void
}

export function ResponsesPage({ library, onOpen, onHome }: Props) {
  const [responseDoc, setResponseDoc] = useState<DocumentEntry | null>(null)

  const responses = useMemo(
    () =>
      library.documents.filter(
        (doc) => trackingOf(doc) === 'responded' || Boolean(doc.responseNote),
      ),
    [library.documents],
  )

  return (
    <div className="library">
      <header className="toolbar">
        <div className="toolbar__brand-row">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              window.location.hash = trackHash()
            }}
            aria-label="Back to tracking"
          >
            <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
            Track
          </button>
          <div className="toolbar__brand">
            <div className="toolbar__brand-name">All responses</div>
            <div className="toolbar__brand-sub">
              Replies recorded for submitted letters
            </div>
          </div>
        </div>
        <div className="toolbar__actions">
          <button type="button" className="btn btn--ghost" onClick={onHome}>
            Documents
          </button>
        </div>
      </header>

      <main className="library__body">
        {responses.length === 0 ? (
          <div className="library__empty">
            <MessageSquareText size={36} strokeWidth={1.5} aria-hidden="true" />
            <h1>No responses yet</h1>
            <p>
              When a letter gets a reply, mark it as Responded and save their
              response to see it here.
            </p>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                window.location.hash = trackHash()
              }}
            >
              Go to tracking
            </button>
          </div>
        ) : (
          <ul className="responses-page__list">
            {responses.map((doc) => (
              <li key={doc.id} className="responses-page__item">
                <div className="responses-page__item-top">
                  <button
                    type="button"
                    className="track-page__item-title"
                    onClick={() => onOpen(doc.id)}
                  >
                    {doc.title}
                  </button>
                  <span className="library-card__status library-card__status--responded">
                    Responded
                  </span>
                </div>
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
                {doc.responseNote ? (
                  <blockquote className="responses-page__note">
                    {doc.responseNote}
                  </blockquote>
                ) : (
                  <p className="track-page__item-meta">No response note saved.</p>
                )}
                <div className="track-page__item-actions">
                  <button
                    type="button"
                    className="btn btn--ghost-ink"
                    onClick={() => setResponseDoc(doc)}
                  >
                    <MessageSquareText size={14} strokeWidth={2} aria-hidden="true" />
                    Edit response
                  </button>
                  <button
                    type="button"
                    className="btn btn--ghost-ink"
                    onClick={() => onOpen(doc.id)}
                  >
                    Open letter
                  </button>
                </div>
              </li>
            ))}
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
