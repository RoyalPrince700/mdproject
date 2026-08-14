import { useEffect } from 'react'

interface Options {
  enabled: boolean
  onNext: () => void
  onPrev: () => void
  onExit?: () => void
}

export function useKeyboardNav({ enabled, onNext, onPrev, onExit }: Options) {
  useEffect(() => {
    if (!enabled) return

    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        onNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        onPrev()
      } else if (e.key === 'Escape' && onExit) {
        e.preventDefault()
        onExit()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [enabled, onNext, onPrev, onExit])
}
