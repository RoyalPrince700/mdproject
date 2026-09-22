import { useMemo, useState, type FormEvent } from 'react'
import {
  CheckCircle2,
  ClipboardList,
  Clock,
  ExternalLink,
  FilePlus,
  FileText,
  FolderOpen,
  Pencil,
  Plus,
  Search,
  Send,
  Trash2,
} from 'lucide-react'
import { documentHref } from '../../lib/docRoutes'
import {
  formatTrackingDateTime,
  trackingLabel,
  trackingOf,
  trackingStats,
} from '../../lib/tracking'
import type { DocumentLibrary } from '../../store/libraryStore'
import { ACCESSIBLE_SUMMER_DOCUMENT_ID, ACCESSIBLE_SUMMER_SLIDES_ID, ADEKANMBI_DOCUMENT_ID, ASC_NAPPS_INVITATION_DOCUMENT_ID, ASC_WINNER_SCHOOL_PROPOSAL_IDS, ADVANCE_FIELD_SALES_DOCUMENT_ID, CULTURE_EXCELLENCE_DOCUMENT_ID, CUPPY_DOCUMENT_ID, DM_CLASS1_DOCUMENT_ID, DM_CLASS1_SMEH_ASSIGNMENT_ID, EDUCATION_NGO_CATALOG_IDS, EKITI_DOCUMENT_ID, LOYALTY_FRAMEWORK_DOCUMENT_ID, SCHOLARSHIP_CAFE_DOCUMENT_ID, SEED_DOCUMENT_ID, SEPLAT_DOCUMENT_ID, TRIFONE_REFUND_DOCUMENT_ID, TUNDE_DOCUMENT_ID, UNION_DOCUMENT_ID, WEMA_DOCUMENT_ID, DEFENSE_QA_DOCUMENT_ID, DEFENSE_QA_SLIDES_ID, UNILORIN_JOTTER_DOCUMENT_ID } from '../../store/libraryStore'
import type { DocumentEntry, DocumentTrackingStatus } from '../../types/document'
import { ResponseModal } from './ResponseModal'

interface Props {
  library: DocumentLibrary
  onOpen: (id: string) => void
  onTrack: () => void
}

export function DocumentsHome({ library, onOpen, onTrack }: Props) {
  const [creating, setCreating] = useState(false)
  const [newTitle, setNewTitle] = useState('Untitled document')
  const [search, setSearch] = useState('')
  const [responseDoc, setResponseDoc] = useState<DocumentEntry | null>(null)

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

  const stats = useMemo(
    () => trackingStats(library.documents),
    [library.documents],
  )

  const hasSeed = library.documents.some((doc) => doc.id === SEED_DOCUMENT_ID)
  const hasWema = library.documents.some((doc) => doc.id === WEMA_DOCUMENT_ID)
  const hasUnion = library.documents.some((doc) => doc.id === UNION_DOCUMENT_ID)
  const hasEkiti = library.documents.some((doc) => doc.id === EKITI_DOCUMENT_ID)
  const hasScholarshipCafe = library.documents.some((doc) => doc.id === SCHOLARSHIP_CAFE_DOCUMENT_ID)
  const hasCuppy = library.documents.some((doc) => doc.id === CUPPY_DOCUMENT_ID)
  const hasTunde = library.documents.some((doc) => doc.id === TUNDE_DOCUMENT_ID)
  const hasAdekanmbi = library.documents.some((doc) => doc.id === ADEKANMBI_DOCUMENT_ID)
  const hasLoyaltyFramework = library.documents.some((doc) => doc.id === LOYALTY_FRAMEWORK_DOCUMENT_ID)
  const hasSeplat = library.documents.some((doc) => doc.id === SEPLAT_DOCUMENT_ID)
  const hasDefenseQaDoc = library.documents.some((doc) => doc.id === DEFENSE_QA_DOCUMENT_ID)
  const hasDefenseQaSlides = library.documents.some((doc) => doc.id === DEFENSE_QA_SLIDES_ID)
  const hasTrifoneRefund = library.documents.some((doc) => doc.id === TRIFONE_REFUND_DOCUMENT_ID)
  const hasCultureExcellence = library.documents.some((doc) => doc.id === CULTURE_EXCELLENCE_DOCUMENT_ID)
  const hasDmClass1 = library.documents.some((doc) => doc.id === DM_CLASS1_DOCUMENT_ID)
  const hasDmSmehAssignment = library.documents.some(
    (doc) => doc.id === DM_CLASS1_SMEH_ASSIGNMENT_ID,
  )
  const hasAccessibleSummerDoc = library.documents.some((doc) => doc.id === ACCESSIBLE_SUMMER_DOCUMENT_ID)
  const hasAccessibleSummerSlides = library.documents.some((doc) => doc.id === ACCESSIBLE_SUMMER_SLIDES_ID)
  const hasAscNappsInvitation = library.documents.some(
    (doc) => doc.id === ASC_NAPPS_INVITATION_DOCUMENT_ID,
  )
  const hasAscWinnerSchoolProposals = ASC_WINNER_SCHOOL_PROPOSAL_IDS.every((id) =>
    library.documents.some((doc) => doc.id === id),
  )
  const hasUnilorinJotter = library.documents.some((doc) => doc.id === UNILORIN_JOTTER_DOCUMENT_ID)
  const hasAdvanceFieldSales = library.documents.some((doc) => doc.id === ADVANCE_FIELD_SALES_DOCUMENT_ID)
  const hasEducationNgoCatalog = EDUCATION_NGO_CATALOG_IDS.every((id) =>
    library.documents.some((doc) => doc.id === id),
  )

  const visibleDocuments = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return library.documents
    return library.documents.filter((doc) => {
      const haystack = [doc.title, doc.brand, doc.author]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return haystack.includes(query)
    })
  }, [library.documents, search])

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
          <label className="library__search">
            <Search size={16} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">Search documents</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search documents"
            />
          </label>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={onTrack}
          >
            <ClipboardList size={16} strokeWidth={2} aria-hidden="true" />
            Track
            {stats.submitted > 0 ? (
              <span className="library__track-count">{stats.submitted}</span>
            ) : null}
          </button>
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
                  onOpen(library.restoreEducationNgoCatalog().id)
                }
              >
                Restore education NGO directory and 50 proposals
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(ADVANCE_FIELD_SALES_DOCUMENT_ID).id)
                }
              >
                Restore Field & Digital Sales Force partnership (Project ADVANCE)
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(UNILORIN_JOTTER_DOCUMENT_ID).id)
                }
              >
                Restore Unilorin convocation jotter partnership proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(ACCESSIBLE_SUMMER_SLIDES_ID).id)
                }
              >
                Restore Accessible Summer Top 50 slides
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(ACCESSIBLE_SUMMER_DOCUMENT_ID).id)
                }
              >
                Restore Accessible Summer Top 50 document
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(
                    library.restoreSeedDocument(ASC_NAPPS_INVITATION_DOCUMENT_ID).id,
                  )
                }
              >
                Restore NAPPS Oyo award presentation invitation
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreAscWinnerSchoolProposals().id)
                }
              >
                Restore ASC winning-school SmartEdu Hub proposals (4)
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(CULTURE_EXCELLENCE_DOCUMENT_ID).id)
                }
              >
                Restore Culture of Excellence and Accountability
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(DM_CLASS1_DOCUMENT_ID).id)
                }
              >
                Restore Digital Marketing Class 1 study guide
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(DM_CLASS1_SMEH_ASSIGNMENT_ID).id)
                }
              >
                Restore Digital Marketing Class 1 SmartEdu Hub assignment
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(TRIFONE_REFUND_DOCUMENT_ID).id)
                }
              >
                Restore Trifone power bank refund letter
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
                  onOpen(library.restoreSeedDocument(CUPPY_DOCUMENT_ID).id)
                }
              >
                Restore Cuppy Foundation proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(TUNDE_DOCUMENT_ID).id)
                }
              >
                Restore Tunde Onakoya / Chess in Slums proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(ADEKANMBI_DOCUMENT_ID).id)
                }
              >
                Restore Adekanmbi / APM Oyo SmartEdu Hub proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(EKITI_DOCUMENT_ID).id)
                }
              >
                Restore Ekiti Ministry of Education proposal
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
                onClick={() =>
                  onOpen(library.restoreSeedDocument(SEPLAT_DOCUMENT_ID).id)
                }
              >
                Restore Seplat Energy proposal
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() => onOpen(library.restoreDefenseDeck().id)}
              >
                Restore defense presentation
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(DEFENSE_QA_DOCUMENT_ID).id)
                }
              >
                Restore defense Q&A document (critical)
              </button>
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(DEFENSE_QA_SLIDES_ID).id)
                }
              >
                Restore defense Q&A slides (critical)
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
            {visibleDocuments.map((doc) => {
              const status = trackingOf(doc)
              return (
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
                    <div className="library-card__badges">
                      {doc.kind === 'proposal' ? (
                        <p className="library-card__kind">Proposal</p>
                      ) : doc.kind === 'document' ? (
                        <p className="library-card__kind">Document</p>
                      ) : null}
                      {status !== 'draft' ? (
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
                      ) : null}
                    </div>
                    <p className="library-card__meta">
                      {[doc.brand, doc.author].filter(Boolean).join(' · ') ||
                        'Untitled details'}
                    </p>
                    {doc.responseNote ? (
                      <p className="library-card__response">
                        Reply: {doc.responseNote}
                      </p>
                    ) : null}
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
                        {formatTrackingDateTime(doc.updatedAt)}
                      </span>
                    </p>
                  </button>
                  <div className="library-card__tracking">
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
                        onClick={(event) => event.stopPropagation()}
                      >
                        <option value="draft">Draft</option>
                        <option value="submitted">Submitted</option>
                        <option value="responded">Responded</option>
                      </select>
                    </label>
                  </div>
                  <div className="library-card__actions">
                    <button
                      type="button"
                      className="btn btn--ghost-ink"
                      onClick={() =>
                        window.open(documentHref(doc.id), '_blank', 'noopener,noreferrer')
                      }
                      aria-label="Open in new tab"
                      title="Open in new tab"
                    >
                      <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn--ghost-ink"
                      onClick={() => handleRename(doc.id, doc.title)}
                      aria-label="Rename"
                      title="Rename"
                    >
                      <Pencil size={14} strokeWidth={2} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn--danger-ink"
                      onClick={() => handleDelete(doc.id, doc.title)}
                      aria-label="Delete"
                      title="Delete"
                    >
                      <Trash2 size={14} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </li>
              )
            })}
          </ul>
        )}

        {library.documents.length > 0 && search.trim() && visibleDocuments.length === 0 ? (
          <p className="library__empty-filter">No documents match “{search.trim()}”.</p>
        ) : null}

        {library.documents.length > 0 && (!hasSeed || !hasWema || !hasUnion || !hasEkiti || !hasScholarshipCafe || !hasCuppy || !hasTunde || !hasAdekanmbi || !hasLoyaltyFramework || !hasSeplat || !hasDefenseQaDoc || !hasDefenseQaSlides || !hasTrifoneRefund || !hasCultureExcellence || !hasDmClass1 || !hasDmSmehAssignment || !hasAccessibleSummerDoc || !hasAccessibleSummerSlides || !hasAscNappsInvitation || !hasAscWinnerSchoolProposals || !hasUnilorinJotter || !hasAdvanceFieldSales || !hasEducationNgoCatalog) ? (
          <p className="library__restore">
            {!hasEducationNgoCatalog ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreEducationNgoCatalog().id)
                }
              >
                Add education NGO directory and 50 proposals
              </button>
            ) : null}
            {!hasAdvanceFieldSales ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(ADVANCE_FIELD_SALES_DOCUMENT_ID).id)
                }
              >
                Add Field & Digital Sales Force partnership (Project ADVANCE)
              </button>
            ) : null}
            {!hasUnilorinJotter ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(UNILORIN_JOTTER_DOCUMENT_ID).id)
                }
              >
                Add Unilorin convocation jotter partnership proposal
              </button>
            ) : null}
            {!hasAccessibleSummerSlides ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(ACCESSIBLE_SUMMER_SLIDES_ID).id)
                }
              >
                Add Accessible Summer Top 50 slides
              </button>
            ) : null}
            {!hasAccessibleSummerDoc ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(ACCESSIBLE_SUMMER_DOCUMENT_ID).id)
                }
              >
                Add Accessible Summer Top 50 document
              </button>
            ) : null}
            {!hasAscNappsInvitation ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(
                    library.restoreSeedDocument(ASC_NAPPS_INVITATION_DOCUMENT_ID).id,
                  )
                }
              >
                Add NAPPS Oyo award presentation invitation
              </button>
            ) : null}
            {!hasAscWinnerSchoolProposals ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreAscWinnerSchoolProposals().id)
                }
              >
                Add ASC winning-school SmartEdu Hub proposals (4)
              </button>
            ) : null}
            {!hasCultureExcellence ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(CULTURE_EXCELLENCE_DOCUMENT_ID).id)
                }
              >
                Add Culture of Excellence and Accountability
              </button>
            ) : null}
            {!hasDmClass1 ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(DM_CLASS1_DOCUMENT_ID).id)
                }
              >
                Add Digital Marketing Class 1 study guide
              </button>
            ) : null}
            {!hasDmSmehAssignment ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(DM_CLASS1_SMEH_ASSIGNMENT_ID).id)
                }
              >
                Add Digital Marketing Class 1 SmartEdu Hub assignment
              </button>
            ) : null}
            {!hasTrifoneRefund ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(TRIFONE_REFUND_DOCUMENT_ID).id)
                }
              >
                Add Trifone power bank refund letter
              </button>
            ) : null}
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
            {!hasCuppy ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(CUPPY_DOCUMENT_ID).id)
                }
              >
                Add SmartEdu Hub proposal to Cuppy Foundation
              </button>
            ) : null}
            {!hasTunde ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(TUNDE_DOCUMENT_ID).id)
                }
              >
                Add SmartEdu Hub proposal to Tunde Onakoya / Chess in Slums
              </button>
            ) : null}
            {!hasAdekanmbi ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(ADEKANMBI_DOCUMENT_ID).id)
                }
              >
                Add SmartEdu Hub proposal to Hon. Bimbo Adekanmbi (APM Oyo)
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
                Add SmartEdu Hub proposal to Ekiti Ministry of Education
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
            {!hasSeplat ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(SEPLAT_DOCUMENT_ID).id)
                }
              >
                Add SmartEdu Hub proposal to Seplat Energy
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
            {!hasDefenseQaDoc ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(DEFENSE_QA_DOCUMENT_ID).id)
                }
              >
                Add defense Q&A document (critical)
              </button>
            ) : null}
            {!hasDefenseQaSlides ? (
              <button
                type="button"
                className="btn btn--ghost-ink"
                onClick={() =>
                  onOpen(library.restoreSeedDocument(DEFENSE_QA_SLIDES_ID).id)
                }
              >
                Add defense Q&A slides (critical)
              </button>
            ) : null}
          </p>
        ) : null}
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
