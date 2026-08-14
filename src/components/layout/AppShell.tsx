import type { ReactNode } from 'react'
import { Toolbar, type ExportKind } from './Toolbar'

interface Props {
  brand: string
  author: string
  exporting: ExportKind
  onPresent: () => void
  onDownloadPptx: () => void
  onDownloadDocx: () => void
  onAdd: () => void
  onReset: () => void
  children: ReactNode
}

export function AppShell({
  brand,
  author,
  exporting,
  onPresent,
  onDownloadPptx,
  onDownloadDocx,
  onAdd,
  onReset,
  children,
}: Props) {
  return (
    <div className="app-shell">
      <Toolbar
        brand={brand}
        author={author}
        exporting={exporting}
        onPresent={onPresent}
        onDownloadPptx={onDownloadPptx}
        onDownloadDocx={onDownloadDocx}
        onAdd={onAdd}
        onReset={onReset}
      />
      {children}
    </div>
  )
}
