import { useCallback, useEffect, useMemo, useState } from 'react'
import { PresentationEditor } from './components/editor/PresentationEditor'
import { DocumentsHome } from './components/library/DocumentsHome'
import { ResponsesPage } from './components/library/ResponsesPage'
import { TrackingPage } from './components/library/TrackingPage'
import { DocumentTabs } from './components/layout/DocumentTabs'
import {
  libraryRouteHash,
  readLibraryRoute,
  type LibraryRoute,
} from './lib/docRoutes'
import { DocumentTabsContext } from './store/documentTabs'
import { useDocumentLibrary } from './store/libraryStore'

const OPEN_TABS_KEY = 'md-open-tabs-v1'

type LibraryView = Extract<LibraryRoute['kind'], 'home' | 'track' | 'responses'>

function readStoredTabs(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(OPEN_TABS_KEY) ?? 'null')
    if (!Array.isArray(parsed)) return []
    return parsed.filter((id): id is string => typeof id === 'string')
  } catch {
    return []
  }
}

function initialRoute() {
  return readLibraryRoute()
}

export default function App() {
  const library = useDocumentLibrary()
  const initial = initialRoute()
  const [openIds, setOpenIds] = useState<string[]>(() => {
    const stored = readStoredTabs()
    if (initial.kind === 'doc' && !stored.includes(initial.id)) {
      return [...stored, initial.id]
    }
    return stored
  })
  const [activeId, setActiveId] = useState<string | null>(() =>
    initial.kind === 'doc' ? initial.id : null,
  )
  const [libraryView, setLibraryView] = useState<LibraryView>(() =>
    initial.kind === 'doc' ? 'home' : initial.kind,
  )

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
      const route = readLibraryRoute()
      if (route.kind === 'doc') {
        setOpenIds((prev) =>
          prev.includes(route.id) ? prev : [...prev, route.id],
        )
        setActiveId(route.id)
        setLibraryView('home')
        return
      }
      setActiveId(null)
      setLibraryView(route.kind)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const desired: LibraryRoute = activeId
      ? { kind: 'doc', id: activeId }
      : { kind: libraryView }
    const hash = libraryRouteHash(desired)
    if (window.location.hash !== hash) {
      if (hash) {
        window.location.hash = hash
      } else {
        const { pathname, search } = window.location
        window.history.pushState(null, '', `${pathname}${search}`)
      }
    }
  }, [activeId, libraryView])

  const openDocument = useCallback((id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setActiveId(id)
    setLibraryView('home')
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
    setLibraryView('home')
  }, [library])

  const goTrack = useCallback(() => {
    library.refresh()
    setActiveId(null)
    setLibraryView('track')
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

  const libraryPage =
    libraryView === 'track' ? (
      <TrackingPage library={library} onOpen={openDocument} onHome={goHome} />
    ) : libraryView === 'responses' ? (
      <ResponsesPage library={library} onOpen={openDocument} onHome={goHome} />
    ) : (
      <DocumentsHome
        library={library}
        onOpen={openDocument}
        onTrack={goTrack}
      />
    )

  if (openIds.length === 0) {
    return (
      <DocumentTabsContext.Provider value={tabsApi}>
        {libraryPage}
      </DocumentTabsContext.Provider>
    )
  }

  return (
    <DocumentTabsContext.Provider value={tabsApi}>
      <div className="tabbed-app">
        <DocumentTabs
          tabs={openIds.map((id) => ({ id, title: titleFor(id) }))}
          activeId={activeId}
          onSelect={(id) => {
            setActiveId(id)
            setLibraryView('home')
          }}
          onClose={closeDocument}
          onHome={goHome}
        />
        <div className="tabbed-app__panels">
          {activeId === null ? (
            <div className="doc-panel doc-panel--home is-active">
              {libraryPage}
            </div>
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
