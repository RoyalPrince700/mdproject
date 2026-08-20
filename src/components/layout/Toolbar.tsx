import {
  Download,
  FileText,
  FolderOpen,
  LayoutTemplate,
  Plus,
  Presentation,
  RotateCcw,
} from 'lucide-react'
import { DOCUMENT_FONTS } from '../../theme/documentTheme'
import type { DocumentFont, EditorViewMode } from '../../types/slide'

export type ExportKind = 'pptx' | 'docx' | null

interface Props {
  brand: string
  subtitle: string
  exporting: ExportKind
  editorView: EditorViewMode
  documentFont?: DocumentFont
  onBack: () => void
  onPresent?: () => void
  onDownloadPptx?: () => void
  onDownloadDocx: () => void
  onAdd: () => void
  onReset?: () => void
  onViewChange: (view: EditorViewMode) => void
  onFontChange?: (font: DocumentFont) => void
}

export function Toolbar({
  brand,
  subtitle,
  exporting,
  editorView,
  documentFont,
  onBack,
  onPresent,
  onDownloadPptx,
  onDownloadDocx,
  onAdd,
  onReset,
  onViewChange,
  onFontChange,
}: Props) {
  const busy = exporting !== null
  const inDocument = editorView === 'document'
  const addLabel = inDocument ? 'Add section' : 'Add slide'

  return (
    <header className="toolbar">
      <div className="toolbar__brand-row">
        <button
          type="button"
          className="btn btn--ghost"
          onClick={onBack}
          title="All documents"
        >
          <FolderOpen size={16} strokeWidth={2} aria-hidden="true" />
          Documents
        </button>
        <div className="toolbar__brand">
          <div className="toolbar__brand-name">{brand}</div>
          {subtitle ? (
            <div className="toolbar__brand-sub">{subtitle}</div>
          ) : null}
        </div>
      </div>
      <div className="toolbar__actions">
        <div className="toolbar__view-toggle" role="group" aria-label="Editor view">
          <button
            type="button"
            className={`btn btn--toggle${inDocument ? ' btn--toggle--active' : ''}`}
            onClick={() => onViewChange('document')}
            title="Edit as Word document"
          >
            <FileText size={16} strokeWidth={2} aria-hidden="true" />
            Document
          </button>
          <button
            type="button"
            className={`btn btn--toggle${!inDocument ? ' btn--toggle--active' : ''}`}
            onClick={() => onViewChange('slides')}
            title="Edit as slide deck"
          >
            <LayoutTemplate size={16} strokeWidth={2} aria-hidden="true" />
            Slides
          </button>
        </div>

        {inDocument && onFontChange ? (
          <label className="toolbar__font">
            <span className="sr-only">Document font</span>
            <select
              value={documentFont ?? 'Arial'}
              onChange={(e) => onFontChange(e.target.value as DocumentFont)}
              aria-label="Document font"
            >
              {DOCUMENT_FONTS.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        <button type="button" className="btn btn--ghost" onClick={onAdd}>
          <Plus size={16} strokeWidth={2} aria-hidden="true" />
          {addLabel}
        </button>
        {onReset ? (
          <button type="button" className="btn btn--ghost" onClick={onReset}>
            <RotateCcw size={16} strokeWidth={2} aria-hidden="true" />
            Reset
          </button>
        ) : null}
        {!inDocument && onDownloadPptx ? (
          <button
            type="button"
            className="btn btn--ghost"
            onClick={onDownloadPptx}
            disabled={busy}
          >
            <Download size={16} strokeWidth={2} aria-hidden="true" />
            {exporting === 'pptx' ? 'Exporting…' : 'Download PPTX'}
          </button>
        ) : null}
        <button
          type="button"
          className={inDocument ? 'btn btn--primary' : 'btn btn--ghost'}
          onClick={onDownloadDocx}
          disabled={busy}
        >
          <FileText size={16} strokeWidth={2} aria-hidden="true" />
          {exporting === 'docx' ? 'Exporting…' : 'Download DOCX'}
        </button>
        {!inDocument && onPresent ? (
          <button type="button" className="btn btn--primary" onClick={onPresent}>
            <Presentation size={16} strokeWidth={2} aria-hidden="true" />
            Present
          </button>
        ) : null}
      </div>
    </header>
  )
}
