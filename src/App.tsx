import { useEffect, useState } from 'react'
import { PresentationEditor } from './components/editor/PresentationEditor'
import { DocumentsHome } from './components/library/DocumentsHome'
import { useDocumentLibrary } from './store/libraryStore'

function readOpenId() {
  const match = window.location.hash.match(/^#\/doc\/([^/]+)$/)
  return match ? decodeURIComponent(match[1]) : null
}

export default function App() {
  const library = useDocumentLibrary()
  const [openId, setOpenId] = useState<string | null>(readOpenId)

  useEffect(() => {
    const onHashChange = () => setOpenId(readOpenId())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const openDocument = (id: string) => {
    window.location.hash = `#/doc/${encodeURIComponent(id)}`
    setOpenId(id)
  }

  const goHome = () => {
    library.refresh()
    const { pathname, search } = window.location
    window.history.pushState(null, '', `${pathname}${search}`)
    setOpenId(null)
  }

  if (!openId) {
    return <DocumentsHome library={library} onOpen={openDocument} />
  }

  const openDoc = library.documents.find((doc) => doc.id === openId)

  return (
    <PresentationEditor
      key={openId}
      documentId={openId}
      documentTitle={openDoc?.title ?? 'Untitled presentation'}
      onBack={goHome}
    />
  )
}
