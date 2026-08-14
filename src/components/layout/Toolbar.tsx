import {
  Download,
  FileText,
  Plus,
  Presentation,
  RotateCcw,
} from 'lucide-react'

export type ExportKind = 'pptx' | 'docx' | null

interface Props {
  brand: string
  author: string
  exporting: ExportKind
  onPresent: () => void
  onDownloadPptx: () => void
  onDownloadDocx: () => void
  onAdd: () => void
  onReset: () => void
}

export function Toolbar({
  brand,
  author,
  exporting,
  onPresent,
  onDownloadPptx,
  onDownloadDocx,
  onAdd,
  onReset,
}: Props) {
  const busy = exporting !== null
  return (
    <header className="toolbar">
      <div className="toolbar__brand">
        <div className="toolbar__brand-name">{brand}</div>
        <div className="toolbar__brand-sub">
          Preliminary Defense Presentation · {author}
        </div>
      </div>
      <div className="toolbar__actions">
        <button type="button" className="btn btn--ghost" onClick={onAdd}>
          <Plus size={16} strokeWidth={2} aria-hidden="true" />
          Add slide
        </button>
        <button type="button" className="btn btn--ghost" onClick={onReset}>
          <RotateCcw size={16} strokeWidth={2} aria-hidden="true" />
          Reset
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={onDownloadPptx}
          disabled={busy}
        >
          <Download size={16} strokeWidth={2} aria-hidden="true" />
          {exporting === 'pptx' ? 'Exporting…' : 'Download PPTX'}
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={onDownloadDocx}
          disabled={busy}
        >
          <FileText size={16} strokeWidth={2} aria-hidden="true" />
          {exporting === 'docx' ? 'Exporting…' : 'Download DOCX'}
        </button>
        <button type="button" className="btn btn--primary" onClick={onPresent}>
          <Presentation size={16} strokeWidth={2} aria-hidden="true" />
          Present
        </button>
      </div>
    </header>
  )
}
