import { useCallback, useEffect, useMemo, useState } from 'react'
import { PresentationEditor } from './components/editor/PresentationEditor'
import { DocumentsHome } from './components/library/DocumentsHome'
import { DocumentTabs } from './components/layout/DocumentTabs'
import { documentHash } from './lib/docRoutes'
import { DocumentTabsContext } from './store/documentTabs'
import { useDocumentLibrary } from './store/libraryStore'

const OPEN_TABS_KEY = 'md-open-tabs-v1'

function readHashId() {
  const match = window.location.hash.match(/^#\/doc\/([^/]+)$/)
  return match ? decodeURIComponent(match[1]) : null
}

function readStoredTabs(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(OPEN_TABS_KEY) ?? 'null')
    if (!Array.isArray(parsed)) return []
    return parsed.filter((id): id is string => typeof id === 'string')
  } catch {
    return []
  }
}

export default function App() {
  const library = useDocumentLibrary()
  const [openIds, setOpenIds] = useState<string[]>(() => {
    const stored = readStoredTabs()
    const hashId = readHashId()
    if (hashId && !stored.includes(hashId)) return [...stored, hashId]
    return stored
  })
  const [activeId, setActiveId] = useState<string | null>(readHashId)

  useEffect(() => {
    localStorage.setItem(OPEN_TABS_KEY, JSON.stringify(openIds))
  }, [openIds])

  // Drop tabs whose document was deleted from the library.
  useEffect(() => {
    setOpenIds((prev) => {
      const next = prev.filter((id) =>
        library.documents.some((doc) => doc.id === id),
      )
      return next.length === prev.length ? prev : next
    })
  }, [library.documents])

  useEffect(() => {
    if (activeId && !openIds.includes(activeId)) setActiveId(null)
  }, [activeId, openIds])

  useEffect(() => {
    const onHashChange = () => {
      const id = readHashId()
      if (!id) {
        setActiveId(null)
        return
      }
      setOpenIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
      setActiveId(id)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (activeId) {
      const hash = documentHash(activeId)
      if (window.location.hash !== hash) window.location.hash = hash
    } else if (window.location.hash) {
      const { pathname, search } = window.location
      window.history.pushState(null, '', `${pathname}${search}`)
    }
  }, [activeId])

  const openDocument = useCallback((id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setActiveId(id)
  }, [])

  const closeDocument = useCallback(
    (id: string) => {
      const index = openIds.indexOf(id)
      if (index < 0) return
      const next = openIds.filter((openId) => openId !== id)
      setOpenIds(next)
      if (activeId === id) {
        setActiveId(next.length ? next[Math.min(index, next.length - 1)] : null)
      }
    },
    [activeId, openIds],
  )

  const goHome = useCallback(() => {
    library.refresh()
    setActiveId(null)
  }, [library])

  const tabsApi = useMemo(
    () => ({ openIds, activeId, openDocument, closeDocument, goHome }),
    [activeId, closeDocument, goHome, openDocument, openIds],
  )

  const titleFor = useCallback(
    (id: string) =>
      library.documents.find((doc) => doc.id === id)?.title ??
      'Untitled document',
    [library.documents],
  )

  const home = <DocumentsHome library={library} onOpen={openDocument} />

  if (openIds.length === 0) {
    return (
      <DocumentTabsContext.Provider value={tabsApi}>
        {home}
      </DocumentTabsContext.Provider>
    )
  }

  return (
    <DocumentTabsContext.Provider value={tabsApi}>
      <div className="tabbed-app">
        <DocumentTabs
          tabs={openIds.map((id) => ({ id, title: titleFor(id) }))}
          activeId={activeId}
          onSelect={setActiveId}
          onClose={closeDocument}
          onHome={goHome}
        />
        <div className="tabbed-app__panels">
          {activeId === null ? (
            <div className="doc-panel doc-panel--home is-active">{home}</div>
          ) : null}
          {openIds.map((id) => (
            <div
              key={id}
              className={`doc-panel${id === activeId ? ' is-active' : ''}`}
            >
              <PresentationEditor documentId={id} documentTitle={titleFor(id)} />
            </div>
          ))}
        </div>
      </div>
    </DocumentTabsContext.Provider>
  )
}
