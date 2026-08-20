import { isSmehProposal } from '../../lib/documentSections'
import { DOCUMENT_FONTS } from '../../theme/documentTheme'
import type { PresentationMeta } from '../../types/slide'
import type { SaveStatus } from '../../store/presentationStore'

interface Props {
  meta: PresentationMeta
  saveStatus: SaveStatus
  onSave: () => void
  onChange: (patch: Partial<PresentationMeta>) => void
}

function Field({
  id,
  label,
  value,
  onChange,
  multiline = false,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  multiline?: boolean
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea
          id={id}
          className="body-textarea"
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input id={id} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  )
}

export function DocumentMetaFields({ meta, saveStatus, onSave, onChange }: Props) {
  const smehProposal = isSmehProposal(meta.kind)

  return (
    <aside className="fields-pane">
      <div className="fields-pane__header">
        <h2>Document settings</h2>
      </div>

      <div className="field">
        <label htmlFor="documentFont">Document font</label>
        <select
          id="documentFont"
          value={meta.documentFont ?? 'Arial'}
          onChange={(e) =>
            onChange({
              documentFont: e.target.value as PresentationMeta['documentFont'],
            })
          }
        >
          {DOCUMENT_FONTS.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>
      </div>

      <Field
        id="subject"
        label={smehProposal ? 'Proposal subject' : 'Document title'}
        value={meta.subject ?? ''}
        onChange={(subject) => onChange({ subject })}
      />
      {smehProposal ? (
        <>
          <Field
            id="recipient"
            label="Recipient"
            value={meta.recipient ?? ''}
            onChange={(recipient) => onChange({ recipient })}
          />
          <Field
            id="recipientOrg"
            label="Recipient organisation"
            value={meta.recipientOrg ?? ''}
            onChange={(recipientOrg) => onChange({ recipientOrg })}
          />
          <Field
            id="recipientAddress"
            label="Recipient address"
            value={meta.recipientAddress ?? ''}
            onChange={(recipientAddress) => onChange({ recipientAddress })}
            multiline
          />
          <Field
            id="letterDate"
            label="Letter date"
            value={meta.letterDate ?? ''}
            onChange={(letterDate) => onChange({ letterDate })}
          />
        </>
      ) : null}
      <Field
        id="brand"
        label="Organisation"
        value={meta.brand}
        onChange={(brand) => onChange({ brand })}
      />
      <Field
        id="author"
        label={smehProposal ? 'Signatory name' : 'Author'}
        value={meta.author}
        onChange={(author) => onChange({ author })}
      />
      <Field
        id="date"
        label="Document date"
        value={meta.date}
        onChange={(date) => onChange({ date })}
      />
      {smehProposal ? (
        <Field
          id="website"
          label="Website"
          value={meta.website ?? ''}
          onChange={(website) => onChange({ website })}
        />
      ) : null}

      <div className="fields-actions">
        <button
          type="button"
          className={`btn btn--save${saveStatus === 'saved' ? ' btn--save--saved' : ''}`}
          onClick={onSave}
        >
          {saveStatus === 'saved' ? 'Saved' : 'Save'}
        </button>
        <span className="fields-actions__hint">
          Font and header details apply to the document view and DOCX export.
        </span>
      </div>
    </aside>
  )
}
