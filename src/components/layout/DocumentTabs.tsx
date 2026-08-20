import { FileText, Home, X } from 'lucide-react'

export interface DocumentTab {
  id: string
  title: string
}

interface Props {
  tabs: DocumentTab[]
  activeId: string | null
  onSelect: (id: string) => void
  onClose: (id: string) => void
  onHome: () => void
}

export function DocumentTabs({
  tabs,
  activeId,
  onSelect,
  onClose,
  onHome,
}: Props) {
  return (
    <div className="doc-tabs" role="tablist" aria-label="Open documents">
      <button
        type="button"
        role="tab"
        aria-selected={activeId === null}
        className={`doc-tabs__home${activeId === null ? ' is-active' : ''}`}
        onClick={onHome}
        aria-label="All documents"
        title="All documents"
      >
        <Home size={15} strokeWidth={2} aria-hidden="true" />
      </button>

      {tabs.map((tab) => {
        const isActive = tab.id === activeId
        return (
          <div
            key={tab.id}
            className={`doc-tab${isActive ? ' is-active' : ''}`}
            onAuxClick={(event) => {
              if (event.button === 1) {
                event.preventDefault()
                onClose(tab.id)
              }
            }}
          >
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              className="doc-tab__label"
              onClick={() => onSelect(tab.id)}
              title={tab.title}
            >
              <FileText size={14} strokeWidth={2} aria-hidden="true" />
              <span>{tab.title}</span>
            </button>
            <button
              type="button"
              className="doc-tab__close"
              onClick={() => onClose(tab.id)}
              aria-label={`Close ${tab.title}`}
              title="Close tab"
            >
              <X size={13} strokeWidth={2.4} aria-hidden="true" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
