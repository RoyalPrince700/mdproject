import { useEffect, useState, type ReactNode } from 'react'
import { LibraryDrawer } from '../library/LibraryDrawer'
import { Toolbar, type ExportKind } from './Toolbar'
import { useDocumentTabs } from '../../store/documentTabs'
import type { DocumentFont, EditorViewMode } from '../../types/slide'

interface Props {
  documentId: string
  brand: string
  subtitle: string
  exporting: ExportKind
  editorView: EditorViewMode
  documentFont?: DocumentFont
  onPresent?: () => void
  onDownloadPptx?: () => void
  onDownloadDocx: () => void
  onAdd: () => void
  onReset?: () => void
  onViewChange: (view: EditorViewMode) => void
  onFontChange?: (font: DocumentFont) => void
  collaborationBar?: ReactNode
  children: ReactNode
}

export function AppShell({
  documentId,
  brand,
  subtitle,
  exporting,
  editorView,
  documentFont,
  onPresent,
  onDownloadPptx,
  onDownloadDocx,
  onAdd,
  onReset,
  onViewChange,
  onFontChange,
  collaborationBar,
  children,
}: Props) {
  const { activeId } = useDocumentTabs()
  const [libraryOpen, setLibraryOpen] = useState(false)
  const isActiveTab = activeId === documentId

  useEffect(() => {
    if (!isActiveTab) setLibraryOpen(false)
  }, [isActiveTab])

  return (
    <div className="app-shell">
      <Toolbar
        brand={brand}
        subtitle={subtitle}
        exporting={exporting}
        editorView={editorView}
        documentFont={documentFont}
        libraryOpen={libraryOpen}
        onToggleLibrary={() => setLibraryOpen((open) => !open)}
        onPresent={onPresent}
        onDownloadPptx={onDownloadPptx}
        onDownloadDocx={onDownloadDocx}
        onAdd={onAdd}
        onReset={onReset}
        onViewChange={onViewChange}
        onFontChange={onFontChange}
      />
      {collaborationBar}
      {children}
      <LibraryDrawer
        open={libraryOpen}
        currentId={documentId}
        onClose={() => setLibraryOpen(false)}
      />
    </div>
  )
}
