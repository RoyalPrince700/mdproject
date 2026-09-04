import { useCallback, useState } from 'react'
import { SEED_REVISION, seedPresentation } from '../data/seedSlides'
import {
  UNION_DOCUMENT_ID,
  UNION_DOCUMENT_TITLE,
  unionProposal,
} from '../data/unionProposal'
import {
  EKITI_DOCUMENT_ID,
  EKITI_DOCUMENT_TITLE,
  ekitiProposal,
} from '../data/ekitiProposal'
import {
  SCHOLARSHIP_CAFE_DOCUMENT_ID,
  SCHOLARSHIP_CAFE_DOCUMENT_TITLE,
  scholarshipCafeProposal,
} from '../data/scholarshipCafeProposal'
import {
  CUPPY_DOCUMENT_ID,
  CUPPY_DOCUMENT_TITLE,
  cuppyProposal,
} from '../data/cuppyProposal'
import {
  TUNDE_DOCUMENT_ID,
  TUNDE_DOCUMENT_TITLE,
  tundeProposal,
} from '../data/tundeOnakoyaProposal'
import {
  LOYALTY_FRAMEWORK_DOCUMENT_ID,
  LOYALTY_FRAMEWORK_DOCUMENT_TITLE,
  loyaltyRewardFramework,
} from '../data/loyaltyRewardFramework'
import {
  WEMA_DOCUMENT_ID,
  WEMA_DOCUMENT_TITLE,
  wemaProposal,
} from '../data/wemaProposal'
import {
  SEPLAT_DOCUMENT_ID,
  SEPLAT_DOCUMENT_TITLE,
  seplatProposal,
} from '../data/seplatProposal'
import {
  DEFENSE_QA_DOCUMENT_ID,
  DEFENSE_QA_DOCUMENT_TITLE,
  DEFENSE_QA_SLIDES_ID,
  DEFENSE_QA_SLIDES_TITLE,
  defenseQaDocument,
  defenseQaSlides,
} from '../data/defenseQa'
import {
  TRIFONE_REFUND_DOCUMENT_ID,
  TRIFONE_REFUND_DOCUMENT_TITLE,
  trifoneRefundLetter,
} from '../data/trifoneRefundLetter'
import {
  CULTURE_EXCELLENCE_DOCUMENT_ID,
  CULTURE_EXCELLENCE_DOCUMENT_TITLE,
  cultureExcellenceDocument,
} from '../data/cultureExcellence'
import {
  ACCESSIBLE_SUMMER_DOCUMENT_ID,
  ACCESSIBLE_SUMMER_DOCUMENT_TITLE,
  ACCESSIBLE_SUMMER_SLIDES_ID,
  ACCESSIBLE_SUMMER_SLIDES_TITLE,
  accessibleSummerDocument,
  accessibleSummerSlides,
} from '../data/accessibleSummerTop50'
import {
  UNILORIN_JOTTER_DOCUMENT_ID,
  UNILORIN_JOTTER_DOCUMENT_TITLE,
  unilorinJotterProposal,
} from '../data/unilorinConvocationJotterProposal'
import {
  ADVANCE_FIELD_SALES_DOCUMENT_ID,
  ADVANCE_FIELD_SALES_DOCUMENT_TITLE,
  advanceFieldSalesPartnership,
} from '../data/advanceFieldSalesPartnership'
import {
  EDUCATION_NGO_CATALOG_IDS,
  EDUCATION_NGO_DIRECTORY_ID,
  EDUCATION_NGO_DIRECTORY_TITLE,
  EDUCATION_NGO_PROPOSAL_IDS,
  educationNgoSeedCatalog,
} from '../data/educationNgoProposals'
import type { DocumentEntry } from '../types/document'
import {
  createBlankPresentation,
  type PresentationState,
} from '../types/slide'

export const SEED_DOCUMENT_ID = 'preliminary-defense'
export const SEED_DOCUMENT_TITLE = 'Preliminary Defense Presentation'
export {
  EKITI_DOCUMENT_ID,
  EKITI_DOCUMENT_TITLE,
  LOYALTY_FRAMEWORK_DOCUMENT_ID,
  LOYALTY_FRAMEWORK_DOCUMENT_TITLE,
  SCHOLARSHIP_CAFE_DOCUMENT_ID,
  SCHOLARSHIP_CAFE_DOCUMENT_TITLE,
  CUPPY_DOCUMENT_ID,
  CUPPY_DOCUMENT_TITLE,
  TUNDE_DOCUMENT_ID,
  TUNDE_DOCUMENT_TITLE,
  WEMA_DOCUMENT_ID,
  WEMA_DOCUMENT_TITLE,
  UNION_DOCUMENT_ID,
  UNION_DOCUMENT_TITLE,
  SEPLAT_DOCUMENT_ID,
  SEPLAT_DOCUMENT_TITLE,
  DEFENSE_QA_DOCUMENT_ID,
  DEFENSE_QA_DOCUMENT_TITLE,
  DEFENSE_QA_SLIDES_ID,
  DEFENSE_QA_SLIDES_TITLE,
  TRIFONE_REFUND_DOCUMENT_ID,
  TRIFONE_REFUND_DOCUMENT_TITLE,
  CULTURE_EXCELLENCE_DOCUMENT_ID,
  CULTURE_EXCELLENCE_DOCUMENT_TITLE,
  ACCESSIBLE_SUMMER_DOCUMENT_ID,
  ACCESSIBLE_SUMMER_DOCUMENT_TITLE,
  ACCESSIBLE_SUMMER_SLIDES_ID,
  ACCESSIBLE_SUMMER_SLIDES_TITLE,
  UNILORIN_JOTTER_DOCUMENT_ID,
  UNILORIN_JOTTER_DOCUMENT_TITLE,
  ADVANCE_FIELD_SALES_DOCUMENT_ID,
  ADVANCE_FIELD_SALES_DOCUMENT_TITLE,
  EDUCATION_NGO_DIRECTORY_ID,
  EDUCATION_NGO_DIRECTORY_TITLE,
  EDUCATION_NGO_CATALOG_IDS,
  EDUCATION_NGO_PROPOSAL_IDS,
}

const SEED_CATALOG: Record<
  string,
  { title: string; getState: () => PresentationState }
> = {
  [SEED_DOCUMENT_ID]: {
    title: SEED_DOCUMENT_TITLE,
    getState: () => structuredClone(seedPresentation),
  },
  [WEMA_DOCUMENT_ID]: {
    title: WEMA_DOCUMENT_TITLE,
    getState: () => structuredClone(wemaProposal),
  },
  [LOYALTY_FRAMEWORK_DOCUMENT_ID]: {
    title: LOYALTY_FRAMEWORK_DOCUMENT_TITLE,
    getState: () => structuredClone(loyaltyRewardFramework),
  },
  [EKITI_DOCUMENT_ID]: {
    title: EKITI_DOCUMENT_TITLE,
    getState: () => structuredClone(ekitiProposal),
  },
  [SCHOLARSHIP_CAFE_DOCUMENT_ID]: {
    title: SCHOLARSHIP_CAFE_DOCUMENT_TITLE,
    getState: () => structuredClone(scholarshipCafeProposal),
  },
  [CUPPY_DOCUMENT_ID]: {
    title: CUPPY_DOCUMENT_TITLE,
    getState: () => structuredClone(cuppyProposal),
  },
  [TUNDE_DOCUMENT_ID]: {
    title: TUNDE_DOCUMENT_TITLE,
    getState: () => structuredClone(tundeProposal),
  },
  [UNION_DOCUMENT_ID]: {
    title: UNION_DOCUMENT_TITLE,
    getState: () => structuredClone(unionProposal),
  },
  [SEPLAT_DOCUMENT_ID]: {
    title: SEPLAT_DOCUMENT_TITLE,
    getState: () => structuredClone(seplatProposal),
  },
  [DEFENSE_QA_DOCUMENT_ID]: {
    title: DEFENSE_QA_DOCUMENT_TITLE,
    getState: () => structuredClone(defenseQaDocument),
  },
  [DEFENSE_QA_SLIDES_ID]: {
    title: DEFENSE_QA_SLIDES_TITLE,
    getState: () => structuredClone(defenseQaSlides),
  },
  [TRIFONE_REFUND_DOCUMENT_ID]: {
    title: TRIFONE_REFUND_DOCUMENT_TITLE,
    getState: () => structuredClone(trifoneRefundLetter),
  },
  [CULTURE_EXCELLENCE_DOCUMENT_ID]: {
    title: CULTURE_EXCELLENCE_DOCUMENT_TITLE,
    getState: () => structuredClone(cultureExcellenceDocument),
  },
  [ACCESSIBLE_SUMMER_DOCUMENT_ID]: {
    title: ACCESSIBLE_SUMMER_DOCUMENT_TITLE,
    getState: () => structuredClone(accessibleSummerDocument),
  },
  [ACCESSIBLE_SUMMER_SLIDES_ID]: {
    title: ACCESSIBLE_SUMMER_SLIDES_TITLE,
    getState: () => structuredClone(accessibleSummerSlides),
  },
  [UNILORIN_JOTTER_DOCUMENT_ID]: {
    title: UNILORIN_JOTTER_DOCUMENT_TITLE,
    getState: () => structuredClone(unilorinJotterProposal),
  },
  [ADVANCE_FIELD_SALES_DOCUMENT_ID]: {
    title: ADVANCE_FIELD_SALES_DOCUMENT_TITLE,
    getState: () => structuredClone(advanceFieldSalesPartnership),
  },
  ...educationNgoSeedCatalog,
}

export function isSeedDocument(id: string) {
  return Object.prototype.hasOwnProperty.call(SEED_CATALOG, id)
}

export function getSeedState(id: string): PresentationState | null {
  const entry = SEED_CATALOG[id]
  return entry ? entry.getState() : null
}

const LIBRARY_KEY = 'md-library-v1'
const DOC_PREFIX = 'md-doc-v1:'
const CATALOG_MIGRATION_KEY = 'md-seed-catalog-v2'
const LEGACY_STORAGE_KEYS = [
  'defense-presentation-v1',
  'defense-presentation-v2',
  'defense-presentation-v3',
  'defense-presentation-v4',
  'defense-presentation-v5',
]

export function docStorageKey(id: string) {
  return `${DOC_PREFIX}${id}`
}

function nowIso() {
  return new Date().toISOString()
}

function sortDocuments(documents: DocumentEntry[]) {
  return [...documents].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  )
}

function saveIndex(documents: DocumentEntry[]) {
  localStorage.setItem(
    LIBRARY_KEY,
    JSON.stringify({ documents: sortDocuments(documents) }),
  )
}

function clampIndex(state: PresentationState): PresentationState {
  const last = Math.max(0, (state.slides?.length ?? 1) - 1)
  return {
    ...state,
    currentIndex: Math.min(Math.max(0, state.currentIndex ?? 0), last),
  }
}

function parsePresentation(raw: string | null): PresentationState | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as PresentationState
    if (!parsed.slides?.length) return null
    return clampIndex(parsed)
  } catch {
    return null
  }
}

export function loadPresentation(id: string): PresentationState {
  const seed = getSeedState(id)
  const stored = parsePresentation(localStorage.getItem(docStorageKey(id)))
  if (stored) {
    if (seed) {
      const seedIsNewer =
        isSeedDocument(id) &&
        (seed.seedRevision ?? 0) > (stored.seedRevision ?? 0)
      return {
        ...seed,
        ...stored,
        slides: seedIsNewer ? seed.slides : stored.slides,
        seedRevision: seed.seedRevision,
        meta: seedIsNewer
          ? {
              ...stored.meta,
              ...seed.meta,
              contactRows: seed.meta.contactRows,
            }
          : { ...seed.meta, ...stored.meta },
      }
    }
    return stored
  }
  if (seed) return seed
  return createBlankPresentation()
}

export function writePresentation(id: string, state: PresentationState) {
  localStorage.setItem(docStorageKey(id), JSON.stringify(state))
}

function summaryFrom(
  id: string,
  title: string,
  state: PresentationState,
  extra?: Partial<DocumentEntry>,
): DocumentEntry {
  return {
    id,
    title,
    brand: state.meta.brand,
    author: state.meta.author,
    slideCount: state.slides.length,
    createdAt: extra?.createdAt ?? nowIso(),
    updatedAt: extra?.updatedAt ?? nowIso(),
    source: extra?.source,
    kind: extra?.kind ?? state.meta.kind,
  }
}

function migrateLegacyPresentation(): PresentationState {
  const latestLegacy = localStorage.getItem('defense-presentation-v5')
  const parsed = parsePresentation(latestLegacy)
  if (!parsed) return structuredClone(seedPresentation)
  return {
    ...structuredClone(seedPresentation),
    ...parsed,
    slides: parsed.slides,
    seedRevision: SEED_REVISION,
    meta: { ...seedPresentation.meta, ...parsed.meta },
  }
}

function catalogEntry(id: string): DocumentEntry {
  const state = getSeedState(id) ?? createBlankPresentation()
  const stored = parsePresentation(localStorage.getItem(docStorageKey(id)))
  return summaryFrom(id, SEED_CATALOG[id].title, stored ?? state, {
    source: 'seed',
  })
}

function seedLibrary(): DocumentEntry[] {
  const presentation = migrateLegacyPresentation()
  writePresentation(SEED_DOCUMENT_ID, presentation)
  const wema = structuredClone(wemaProposal)
  writePresentation(WEMA_DOCUMENT_ID, wema)
  const union = structuredClone(unionProposal)
  writePresentation(UNION_DOCUMENT_ID, union)
  const ekiti = structuredClone(ekitiProposal)
  writePresentation(EKITI_DOCUMENT_ID, ekiti)
  const scholarshipCafe = structuredClone(scholarshipCafeProposal)
  writePresentation(SCHOLARSHIP_CAFE_DOCUMENT_ID, scholarshipCafe)
  const cuppy = structuredClone(cuppyProposal)
  writePresentation(CUPPY_DOCUMENT_ID, cuppy)
  const tunde = structuredClone(tundeProposal)
  writePresentation(TUNDE_DOCUMENT_ID, tunde)
  const loyaltyFramework = structuredClone(loyaltyRewardFramework)
  writePresentation(LOYALTY_FRAMEWORK_DOCUMENT_ID, loyaltyFramework)
  const seplat = structuredClone(seplatProposal)
  writePresentation(SEPLAT_DOCUMENT_ID, seplat)
  const documents = [
    summaryFrom(SEPLAT_DOCUMENT_ID, SEPLAT_DOCUMENT_TITLE, seplat, {
      source: 'seed',
    }),
    summaryFrom(LOYALTY_FRAMEWORK_DOCUMENT_ID, LOYALTY_FRAMEWORK_DOCUMENT_TITLE, loyaltyFramework, {
      source: 'seed',
    }),
    summaryFrom(TUNDE_DOCUMENT_ID, TUNDE_DOCUMENT_TITLE, tunde, {
      source: 'seed',
    }),
    summaryFrom(CUPPY_DOCUMENT_ID, CUPPY_DOCUMENT_TITLE, cuppy, {
      source: 'seed',
    }),
    summaryFrom(SCHOLARSHIP_CAFE_DOCUMENT_ID, SCHOLARSHIP_CAFE_DOCUMENT_TITLE, scholarshipCafe, {
      source: 'seed',
    }),
    summaryFrom(EKITI_DOCUMENT_ID, EKITI_DOCUMENT_TITLE, ekiti, {
      source: 'seed',
    }),
    summaryFrom(UNION_DOCUMENT_ID, UNION_DOCUMENT_TITLE, union, {
      source: 'seed',
    }),
    summaryFrom(WEMA_DOCUMENT_ID, WEMA_DOCUMENT_TITLE, wema, {
      source: 'seed',
    }),
    summaryFrom(SEED_DOCUMENT_ID, SEED_DOCUMENT_TITLE, presentation, {
      source: 'seed',
    }),
  ]
  saveIndex(documents)
  localStorage.setItem(CATALOG_MIGRATION_KEY, '1')
  for (const key of LEGACY_STORAGE_KEYS) {
    localStorage.removeItem(key)
  }
  return documents
}

function ensureCatalogDocuments(documents: DocumentEntry[]): DocumentEntry[] {
  let next = documents
  let changed = false
  for (const id of Object.keys(SEED_CATALOG)) {
    if (!next.some((doc) => doc.id === id)) {
      next = [catalogEntry(id), ...next]
      changed = true
    }
  }
  if (changed) {
    saveIndex(next)
    localStorage.setItem(CATALOG_MIGRATION_KEY, '1')
  }
  return sortDocuments(next)
}

export function loadLibraryIndex(): DocumentEntry[] {
  try {
    const raw = localStorage.getItem(LIBRARY_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as { documents?: DocumentEntry[] }
      if (Array.isArray(parsed.documents)) {
        return ensureCatalogDocuments(parsed.documents)
      }
    }
  } catch {
    /* fall through to seed */
  }
  return ensureCatalogDocuments(seedLibrary())
}

export function touchLibraryEntry(id: string, state: PresentationState) {
  const documents = loadLibraryIndex().map((entry) =>
    entry.id === id
      ? {
          ...entry,
          brand: state.meta.brand,
          author: state.meta.author,
          slideCount: state.slides.length,
          updatedAt: nowIso(),
          kind: state.meta.kind ?? entry.kind,
        }
      : entry,
  )
  saveIndex(sortDocuments(documents))
}

export function useDocumentLibrary() {
  const [documents, setDocuments] = useState<DocumentEntry[]>(() =>
    loadLibraryIndex(),
  )

  const persist = useCallback((next: DocumentEntry[]) => {
    const sorted = sortDocuments(next)
    saveIndex(sorted)
    setDocuments(sorted)
  }, [])

  const refresh = useCallback(() => {
    setDocuments(loadLibraryIndex())
  }, [])

  const createDocument = useCallback(
    (title: string) => {
      const trimmed = title.trim() || 'Untitled presentation'
      const id = `doc-${crypto.randomUUID().slice(0, 8)}`
      const presentation = createBlankPresentation(trimmed)
      writePresentation(id, presentation)
      const entry = summaryFrom(id, trimmed, presentation, { source: 'blank' })
      persist([entry, ...documents])
      return entry
    },
    [documents, persist],
  )

  const restoreSeedDocument = useCallback(
    (id: string) => {
      const existing = documents.find((doc) => doc.id === id)
      if (existing) return existing
      const presentation = getSeedState(id)
      const catalog = SEED_CATALOG[id]
      if (!presentation || !catalog) {
        throw new Error(`Unknown seed document: ${id}`)
      }
      writePresentation(id, presentation)
      const entry = summaryFrom(id, catalog.title, presentation, {
        source: 'seed',
      })
      persist([entry, ...documents])
      return entry
    },
    [documents, persist],
  )

  const restoreEducationNgoCatalog = useCallback(() => {
    let next = documents
    let added = 0
    for (const id of EDUCATION_NGO_CATALOG_IDS) {
      if (next.some((doc) => doc.id === id)) continue
      const presentation = getSeedState(id)
      const catalog = SEED_CATALOG[id]
      if (!presentation || !catalog) continue
      writePresentation(id, presentation)
      next = [
        summaryFrom(id, catalog.title, presentation, { source: 'seed' }),
        ...next,
      ]
      added += 1
    }
    if (added) persist(next)
    return (
      next.find((doc) => doc.id === EDUCATION_NGO_DIRECTORY_ID) ?? next[0]
    )
  }, [documents, persist])

  const restoreDefenseDeck = useCallback(
    () => restoreSeedDocument(SEED_DOCUMENT_ID),
    [restoreSeedDocument],
  )

  const deleteDocument = useCallback(
    (id: string) => {
      localStorage.removeItem(docStorageKey(id))
      persist(documents.filter((doc) => doc.id !== id))
    },
    [documents, persist],
  )

  const renameDocument = useCallback(
    (id: string, title: string) => {
      const trimmed = title.trim()
      if (!trimmed) return
      persist(
        documents.map((doc) =>
          doc.id === id
            ? { ...doc, title: trimmed, updatedAt: nowIso() }
            : doc,
        ),
      )
    },
    [documents, persist],
  )

  return {
    documents,
    refresh,
    createDocument,
    restoreDefenseDeck,
    restoreSeedDocument,
    restoreEducationNgoCatalog,
    deleteDocument,
    renameDocument,
  }
}

export type DocumentLibrary = ReturnType<typeof useDocumentLibrary>
