export function documentHash(id: string) {
  return `#/doc/${encodeURIComponent(id)}`
}

export function trackHash() {
  return '#/track'
}

export function responsesHash() {
  return '#/responses'
}

export function documentHref(id: string) {
  const { origin, pathname, search } = window.location
  return `${origin}${pathname}${search}${documentHash(id)}`
}

export function trackHref() {
  const { origin, pathname, search } = window.location
  return `${origin}${pathname}${search}${trackHash()}`
}

export function responsesHref() {
  const { origin, pathname, search } = window.location
  return `${origin}${pathname}${search}${responsesHash()}`
}

export type LibraryRoute =
  | { kind: 'home' }
  | { kind: 'track' }
  | { kind: 'responses' }
  | { kind: 'doc'; id: string }

export function readLibraryRoute(hash = window.location.hash): LibraryRoute {
  const docMatch = hash.match(/^#\/doc\/([^/]+)$/)
  if (docMatch) {
    return { kind: 'doc', id: decodeURIComponent(docMatch[1]) }
  }
  if (hash === '#/track' || hash === '#/track/') {
    return { kind: 'track' }
  }
  if (hash === '#/responses' || hash === '#/responses/') {
    return { kind: 'responses' }
  }
  return { kind: 'home' }
}

export function libraryRouteHash(route: LibraryRoute) {
  if (route.kind === 'doc') return documentHash(route.id)
  if (route.kind === 'track') return trackHash()
  if (route.kind === 'responses') return responsesHash()
  return ''
}
