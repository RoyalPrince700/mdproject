import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  createEmptySlide,
  type PresentationMeta,
  type PresentationState,
  type Slide,
  type SlideLayout,
} from '../types/slide'
import {
  getSeedState,
  loadPresentation,
  touchLibraryEntry,
  writePresentation,
} from './libraryStore'

function contentFingerprint(state: PresentationState) {
  return JSON.stringify({ slides: state.slides, meta: state.meta })
}

export type SaveStatus = 'saved' | 'unsaved'

export function usePresentationStore(documentId: string) {
  const [state, setState] = useState<PresentationState>(() =>
    loadPresentation(documentId),
  )
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('saved')
  const fingerprintRef = useRef(contentFingerprint(state))

  useEffect(() => {
    writePresentation(documentId, state)
    const fingerprint = contentFingerprint(state)
    if (fingerprint !== fingerprintRef.current) {
      fingerprintRef.current = fingerprint
      touchLibraryEntry(documentId, state)
    }
    setSaveStatus('saved')
  }, [documentId, state])

  const save = useCallback(() => {
    writePresentation(documentId, state)
    touchLibraryEntry(documentId, state)
    setSaveStatus('saved')
  }, [documentId, state])

  const markUnsaved = useCallback(() => {
    setSaveStatus('unsaved')
  }, [])

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

  const updateSlide = useCallback(
    (id: string, patch: Partial<Slide>) => {
      markUnsaved()
      setState((prev) => ({
        ...prev,
        slides: prev.slides.map((s) => (s.id === id ? { ...s, ...patch } : s)),
      }))
    },
    [markUnsaved],
  )

  const addSlide = useCallback(
    (layout: SlideLayout = 'bullets') => {
      markUnsaved()
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
    },
    [markUnsaved],
  )

  const deleteSlide = useCallback(
    (id: string) => {
      markUnsaved()
      setState((prev) => {
        if (prev.slides.length <= 1) return prev
        const index = prev.slides.findIndex((s) => s.id === id)
        if (index < 0) return prev
        const slides = prev.slides.filter((s) => s.id !== id)
        const currentIndex = Math.min(prev.currentIndex, slides.length - 1)
        return { ...prev, slides, currentIndex }
      })
    },
    [markUnsaved],
  )

  const reorderSlides = useCallback(
    (fromIndex: number, toIndex: number) => {
      markUnsaved()
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
        else if (fromIndex < currentIndex && toIndex >= currentIndex)
          currentIndex -= 1
        else if (fromIndex > currentIndex && toIndex <= currentIndex)
          currentIndex += 1
        return { ...prev, slides, currentIndex }
      })
    },
    [markUnsaved],
  )

  const resetToSeed = useCallback(() => {
    const next = getSeedState(documentId)
    if (!next) return
    fingerprintRef.current = ''
    setState(next)
    writePresentation(documentId, next)
    touchLibraryEntry(documentId, next)
    setSaveStatus('saved')
  }, [documentId])

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

  const updateMeta = useCallback(
    (patch: Partial<PresentationMeta>) => {
      markUnsaved()
      setState((prev) => ({
        ...prev,
        meta: { ...prev.meta, ...patch },
      }))
    },
    [markUnsaved],
  )

  const setEditorView = useCallback(
    (editorView: PresentationMeta['editorView']) => {
      updateMeta({ editorView })
    },
    [updateMeta],
  )

  return {
    state,
    currentSlide,
    saveStatus,
    save,
    setCurrentIndex,
    updateSlide,
    updateMeta,
    setEditorView,
    addSlide,
    deleteSlide,
    reorderSlides,
    resetToSeed,
    nextSlide,
    prevSlide,
  }
}

export type PresentationStore = ReturnType<typeof usePresentationStore>
