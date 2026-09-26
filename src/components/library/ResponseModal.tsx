import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { X } from 'lucide-react'
import type { DocumentEntry } from '../../types/document'

interface Props {
  document: DocumentEntry
  onClose: () => void
  onSave: (responseNote: string) => void
}

export function ResponseModal({ document, onClose, onSave }: Props) {
  const titleId = useId()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [note, setNote] = useState(document.responseNote ?? '')

  useEffect(() => {
    setNote(document.responseNote ?? '')
  }, [document.id, document.responseNote])

  useEffect(() => {
    textareaRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSave(note.trim())
  }

  return (
    <div className="response-modal" role="presentation">
      <button
        type="button"
        className="response-modal__backdrop"
        aria-label="Close response dialog"
        onClick={onClose}
      />
      <div
        className="response-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="response-modal__header">
          <div>
            <h2 id={titleId}>Record response</h2>
            <p>{document.title}</p>
          </div>
          <button
            type="button"
            className="btn btn--ghost-ink"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </header>

        <form className="response-modal__form" onSubmit={handleSubmit}>
          <label htmlFor="response-note">Their response</label>
          <textarea
            id="response-note"
            ref={textareaRef}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            rows={6}
            placeholder="What did they say? Decision, next steps, date of reply…"
          />
          <div className="response-modal__actions">
            <button type="button" className="btn btn--ghost-ink" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn--primary">
              Save response
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
