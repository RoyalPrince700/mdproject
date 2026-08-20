import { createContext, useContext } from 'react'

export interface DocumentTabsApi {
  openIds: string[]
  activeId: string | null
  openDocument: (id: string) => void
  closeDocument: (id: string) => void
  goHome: () => void
}

export const DocumentTabsContext = createContext<DocumentTabsApi | null>(null)

export function useDocumentTabs(): DocumentTabsApi {
  const value = useContext(DocumentTabsContext)
  if (!value) {
    throw new Error('useDocumentTabs must be used inside DocumentTabsContext')
  }
  return value
}
