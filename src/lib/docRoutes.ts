export function documentHash(id: string) {
  return `#/doc/${encodeURIComponent(id)}`
}

export function documentHref(id: string) {
  const { origin, pathname, search } = window.location
  return `${origin}${pathname}${search}${documentHash(id)}`
}
