import { useCallback, useEffect, useMemo, useState } from 'react'
import { SEED_REVISION, seedPresentation } from '../data/seedSlides'
import {
  createEmptySlide,
  type PresentationState,
  type Slide,
  type SlideLayout,
} from '../types/slide'

const STORAGE_KEY = 'defense-presentation-v4'
const LEGACY_STORAGE_KEYS = [
  'defense-presentation-v1',
  'defense-presentation-v2',
  'defense-presentation-v3',
]

function clearLegacyStorage() {
  for (const key of LEGACY_STORAGE_KEYS) {
    localStorage.removeItem(key)
  }
}

function loadState(): PresentationState {
  try {
    clearLegacyStorage()
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return structuredClone(seedPresentation)
    const parsed = JSON.parse(raw) as PresentationState
    if (!parsed.slides?.length || parsed.seedRevision !== SEED_REVISION) {
      return structuredClone(seedPresentation)
    }
    return {
      ...structuredClone(seedPresentation),
      ...parsed,
      slides: parsed.slides,
      currentIndex: Math.min(
        Math.max(0, parsed.currentIndex ?? 0),
        parsed.slides.length - 1,
      ),
      seedRevision: SEED_REVISION,
      meta: { ...seedPresentation.meta, ...parsed.meta },
    }
  } catch {
    return structuredClone(seedPresentation)
  }
}

function persist(state: PresentationState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function usePresentationStore() {
  const [state, setState] = useState<PresentationState>(() => loadState())

  useEffect(() => {
    persist(state)
  }, [state])

  const currentSlide = useMemo(
    () => state.slides[state.currentIndex] ?? state.slides[0],
    [state.slides, state.currentIndex],
  )

  const setCurrentIndex = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      currentIndex: Math.min(Math.max(0, index), prev.slides.length - 1),
    }))
  }, [])

  const updateSlide = useCallback((id: string, patch: Partial<Slide>) => {
    setState((prev) => ({
      ...prev,
      slides: prev.slides.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    }))
  }, [])

  const addSlide = useCallback((layout: SlideLayout = 'bullets') => {
    setState((prev) => {
      const slide = createEmptySlide(layout)
      const insertAt = prev.currentIndex + 1
      const slides = [
        ...prev.slides.slice(0, insertAt),
        slide,
        ...prev.slides.slice(insertAt),
      ]
      return { ...prev, slides, currentIndex: insertAt }
    })
  }, [])

  const deleteSlide = useCallback((id: string) => {
    setState((prev) => {
      if (prev.slides.length <= 1) return prev
      const index = prev.slides.findIndex((s) => s.id === id)
      if (index < 0) return prev
      const slides = prev.slides.filter((s) => s.id !== id)
      const currentIndex = Math.min(prev.currentIndex, slides.length - 1)
      return { ...prev, slides, currentIndex }
    })
  }, [])

  const reorderSlides = useCallback((fromIndex: number, toIndex: number) => {
    setState((prev) => {
      if (
        fromIndex === toIndex ||
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= prev.slides.length ||
        toIndex >= prev.slides.length
      ) {
        return prev
      }
      const slides = [...prev.slides]
      const [moved] = slides.splice(fromIndex, 1)
      slides.splice(toIndex, 0, moved)
      let currentIndex = prev.currentIndex
      if (currentIndex === fromIndex) currentIndex = toIndex
      else if (fromIndex < currentIndex && toIndex >= currentIndex) currentIndex -= 1
      else if (fromIndex > currentIndex && toIndex <= currentIndex) currentIndex += 1
      return { ...prev, slides, currentIndex }
    })
  }, [])

  const resetToSeed = useCallback(() => {
    const next = structuredClone(seedPresentation)
    setState(next)
    persist(next)
  }, [])

  const nextSlide = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: Math.min(prev.currentIndex + 1, prev.slides.length - 1),
    }))
  }, [])

  const prevSlide = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: Math.max(prev.currentIndex - 1, 0),
    }))
  }, [])

  return {
    state,
    currentSlide,
    setCurrentIndex,
    updateSlide,
    addSlide,
    deleteSlide,
    reorderSlides,
    resetToSeed,
    nextSlide,
    prevSlide,
  }
}

export type PresentationStore = ReturnType<typeof usePresentationStore>
