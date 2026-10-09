import type { PresentationState } from '../types/slide'
import { ekitiProposal } from './ekitiProposal'
import {
  OTHER_NIGERIAN_STATES,
  type NigerianState,
} from './nigerianStates'
import {
  STATE_EDUCATION_PROFILES,
  assertStateEducationProfiles,
} from './stateEducationProfiles'

export const STATE_EDUCATION_SEED_REVISION = 12
/** Osun copy was refreshed after Opon Imo was removed. Other states stay on the shared revision. */
const OSUN_EDUCATION_SEED_REVISION = STATE_EDUCATION_SEED_REVISION + 1

assertStateEducationProfiles(OTHER_NIGERIAN_STATES.map((state) => state.slug))

const STATE_PROPOSAL_DATE = '7th October 2026'

const ABIA_COVER_FROM =
  'We have also developed and implemented a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch. This demonstrates practical experience in building and deploying education technology solutions at institutional and government scale.'

const ABIA_SLIDE_FROM =
  'We have developed a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.'

function abiaCoverTo(state: NigerianState) {
  return `Accessible Publishers Limited has already developed and begun implementing a related digital education solution with Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch. This proposal sets out how that experience can be scaled for basic education across the state’s ${state.lgaCount} Local Government Areas.`
}

const ABIA_SLIDE_TO =
  'Accessible Publishers Limited has already developed a related digital education solution with Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch. This proposal sets out how that experience can be scaled for basic education across the state.'

export function stateEducationProposalId(slug: string) {
  return `smeh-${slug}-proposal`
}

export function stateEducationProposalTitle(state: NigerianState) {
  return `SmartEdu Hub Proposal to ${state.name} State Ministry of Education`
}

function localizeText(text: string, state: NigerianState) {
  let next = text.replaceAll('Ado-Ekiti', state.capital)
  next = next.replaceAll('Ekiti', state.name)
  next = next.replaceAll(
    '16 Local Government Areas',
    `${state.lgaCount} Local Government Areas`,
  )
  next = next.replaceAll('16 LGAs', `${state.lgaCount} LGAs`)
  if (state.slug === 'abia') {
    next = next.replaceAll(ABIA_COVER_FROM, abiaCoverTo(state))
    next = next.replaceAll(ABIA_SLIDE_FROM, ABIA_SLIDE_TO)
  }
  return next
}

function localizeNode(value: unknown, state: NigerianState, key?: string): unknown {
  if (typeof value === 'string') {
    if (key === 'id' && value.startsWith('ekiti-')) {
      return `${state.slug}-${value.slice('ekiti-'.length)}`
    }
    return localizeText(value, state)
  }
  if (Array.isArray(value)) {
    return value.map((item) => localizeNode(item, state))
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [childKey, child] of Object.entries(value)) {
      out[childKey] = localizeNode(child, state, childKey)
    }
    return out
  }
  return value
}

function applyStateEducationProfile(
  proposal: PresentationState,
  state: NigerianState,
): PresentationState {
  const profile = STATE_EDUCATION_PROFILES[state.slug]
  const summaryFrom = `For ${state.name} State, it offers a practical way to modernise educational infrastructure, improve learning outcomes at scale, and give administrators real-time visibility into performance across schools in all ${state.lgaCount} LGAs.`
  const conclusionFrom = `A state-wide adoption of SmartEdu Hub would give ${state.name} a structured way to modernise basic education, strengthen teacher capacity, improve learner preparation, and build an evidence base for education policy across all ${state.lgaCount} Local Government Areas.`
  const phase1From =
    'Needs assessment, school baseline data capture, infrastructure readiness review across selected LGAs, and MOU signing with the state government.'
  const phase4From = `State-wide rollout across all ${state.lgaCount} LGAs, 24/7 technical support, performance monitoring, quarterly reviews with state leadership, and refresher training.`
  const languagesFrom =
    'Multilingual interface configurable to support English and additional languages as required.'
  const requestFrom = `phased deployment across the ${state.lgaCount} LGAs`
  const sectionFrom = 'Platform, adoption model, and request'

  const walk = (value: unknown): unknown => {
    if (typeof value === 'string') {
      if (
        value.includes(
          'commitment to improving learning outcomes, strengthening school administration',
        )
      ) {
        return value.includes('SmartEdu Hub is designed to support that vision')
          ? profile.coverParagraph
          : profile.letterBullet
      }
      return value
        .replaceAll(summaryFrom, profile.summarySentence)
        .replaceAll(conclusionFrom, profile.conclusionSentence)
        .replaceAll(
          phase1From,
          `Start with schools in ${profile.pilotPlace}. Needs assessment, baseline data capture, an infrastructure readiness review, and an MOU with the state government come before any wider rollout.`,
        )
        .replaceAll(
          phase4From,
          `State-wide rollout across all ${state.lgaCount} LGAs, 24/7 technical support, performance monitoring, quarterly reviews with the Ministry and SUBEB, and refresher training. ${profile.rolloutNote}`,
        )
        .replaceAll(
          languagesFrom,
          `Multilingual interface configurable to support ${profile.languages}.`,
        )
        .replaceAll(
          requestFrom,
          `a first pilot in ${profile.pilotPlace}, followed by phased deployment across the ${state.lgaCount} LGAs`,
        )
        .replaceAll(sectionFrom, profile.sectionLine)
    }
    if (Array.isArray(value)) return value.map((item) => walk(item))
    if (value && typeof value === 'object') {
      const out: Record<string, unknown> = {}
      for (const [key, child] of Object.entries(value)) out[key] = walk(child)
      return out
    }
    return value
  }

  const next = walk(proposal) as PresentationState
  const relevance = next.slides.find((slide) => slide.id.endsWith('-11'))
  if (!relevance) {
    throw new Error(`Missing relevance section for ${state.name}`)
  }
  relevance.leftBullets = [...profile.priorities]
  relevance.rightBullets = [...profile.contributions]

  const blob = JSON.stringify(next)
  if (
    blob.includes('it offers a practical way to modernise') ||
    blob.includes('Platform, adoption model, and request') ||
    blob.includes(
      'commitment to improving learning outcomes, strengthening school administration',
    )
  ) {
    throw new Error(`State tailoring did not apply cleanly for ${state.name}`)
  }
  if (!blob.includes(profile.sectionLine) || !blob.includes(profile.letterBullet)) {
    throw new Error(`Tailored copy missing from ${state.name} proposal`)
  }
  return next
}

export function buildSmehStateProposal(state: NigerianState): PresentationState {
  const proposal = applyStateEducationProfile(
    localizeNode(structuredClone(ekitiProposal), state) as PresentationState,
    state,
  )
  proposal.seedRevision =
    state.slug === 'osun'
      ? OSUN_EDUCATION_SEED_REVISION
      : STATE_EDUCATION_SEED_REVISION
  proposal.meta.date = STATE_PROPOSAL_DATE
  proposal.meta.letterDate = STATE_PROPOSAL_DATE
  for (const slide of proposal.slides) {
    if (slide.footer?.includes('August 2026')) {
      slide.footer = slide.footer.replaceAll('August 2026', STATE_PROPOSAL_DATE)
    }
  }
  return proposal
}

export const STATE_EDUCATION_PROPOSAL_IDS = OTHER_NIGERIAN_STATES.map((state) =>
  stateEducationProposalId(state.slug),
)

export const stateEducationSeedCatalog: Record<
  string,
  { title: string; getState: () => PresentationState }
> = Object.fromEntries(
  OTHER_NIGERIAN_STATES.map((state) => [
    stateEducationProposalId(state.slug),
    {
      title: stateEducationProposalTitle(state),
      getState: () => structuredClone(buildSmehStateProposal(state)),
    },
  ]),
)
