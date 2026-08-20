import type { ReactNode } from 'react'
import { Toolbar, type ExportKind } from './Toolbar'
import type { DocumentFont, EditorViewMode } from '../../types/slide'

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
  children: ReactNode
}

export function AppShell({
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
  children,
}: Props) {
  return (
    <div className="app-shell">
      <Toolbar
        brand={brand}
        subtitle={subtitle}
        exporting={exporting}
        editorView={editorView}
        documentFont={documentFont}
        onBack={onBack}
        onPresent={onPresent}
        onDownloadPptx={onDownloadPptx}
        onDownloadDocx={onDownloadDocx}
        onAdd={onAdd}
        onReset={onReset}
        onViewChange={onViewChange}
        onFontChange={onFontChange}
      />
      {children}
    </div>
  )
}
