import type { PresentationState, Slide } from '../types/slide'
import { NIGERIAN_STATES } from './nigerianStates'
import { buildSmehStateProposal } from './smehStateProposalFactory'

export const OSUN_SSG_DOCUMENT_ID = 'smeh-osun-ssg-proposal'
export const OSUN_SSG_DOCUMENT_TITLE =
  'SmartEdu Hub Proposal to Hon. Chief Teslim Igbalaye (SSG, Osun State)'
export const OSUN_SSG_SEED_REVISION = 5

const LETTER_DATE = '7th October 2026'

const osun = NIGERIAN_STATES.find((state) => state.slug === 'osun')
if (!osun) throw new Error('Osun is missing from the state list')

const coverLetter = [
  'We respectfully write to introduce SmartEdu Hub, an indigenous digital learning and school management platform powered by Accessible Publishers Limited, and to ask Your Honour, as Secretary to the State Government, to place this proposal before His Excellency, the Governor of Osun State, and the Ministry of Education, for basic education across the state’s 30 Local Government Areas.',
  'Accessible Publishers Limited, established in 1996, publishes curriculum-aligned materials for Nigerian schools and builds SmartEdu Hub in-house, through our Technology and Digital team working with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. We are ISO 9001 certified, and in 2025 we were recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year. A related digital education solution is already in use with Abia State, and more than 30 schools adopted the platform within three months of launch.',
  'We write with respect for your office and your record of service in this state. Born in Osogbo, you served as Executive Chairman of Osogbo Local Government, chaired the Association of Local Governments of Nigeria in Osun State, and later served as National Treasurer of ALGON. Your training in printing technology sits close to the work of an educational publishing company. From the Office of the Secretary to the State Government you now coordinate the business of the Osun State Government.',
  'We also recognise the education work already under way: 1,241 teachers recruited in 2026, including 660 through SUBEB, the Imole Teachers Corps already in classrooms, and Osun’s fifth place in the 2026 NECO, with 74.31 per cent of candidates recording five credits including English and Mathematics. This proposal sets out how SmartEdu Hub can support those teachers with lesson notes and assessment, give learners examination practice, and give SUBEB one record across all 30 Local Government Areas.',
  'We propose a live demonstration to Your Honour, a briefing your office can place before the Governor and the Honourable Commissioner for Education, and a first pilot in Osogbo, Ile-Ife, and Iwo, with Ijesha schools in the expansion that follows.',
  'We ask your office to commend this proposal to His Excellency and to the Honourable Commissioner for Education. We would be honoured to present SmartEdu Hub to Your Honour, and through your office to the Ministry of Education, SUBEB leadership, and designated technical stakeholders, at your convenience.',
]

function remapIds(value: unknown, key?: string): unknown {
  if (typeof value === 'string') {
    if (key === 'id' && value.startsWith('osun-')) {
      return `ssg-${value.slice('osun-'.length)}`
    }
    return value
  }
  if (Array.isArray(value)) return value.map((item) => remapIds(item))
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [childKey, child] of Object.entries(value)) {
      out[childKey] = remapIds(child, childKey)
    }
    return out
  }
  return value
}

function slideById(proposal: PresentationState, id: string) {
  const slide = proposal.slides.find((item) => item.id === id)
  if (!slide) throw new Error(`Missing slide ${id}`)
  return slide
}

function buildOsunSsgProposal(): PresentationState {
  const proposal = remapIds(
    buildSmehStateProposal(osun),
  ) as PresentationState

  const title = slideById(proposal, 'ssg-01')
  title.subtitle =
    'Learning Management and School Management System for basic education transformation across Osun State’s 30 Local Government Areas'
  title.footer =
    'Submitted to Hon. Chief Teslim Igbalaye\nSecretary to the State Government, Osun State\nAccessible Publishers Limited · 7th October 2026'
  title.notes =
    'Address the Secretary to the State Government and ask him to place SmartEdu Hub before the Governor and the Ministry of Education.'

  const letterOpen = slideById(proposal, 'ssg-02')
  letterOpen.bullets = coverLetter.slice(0, 2)

  const letterClose = slideById(proposal, 'ssg-02b')
  letterClose.bullets = coverLetter.slice(2)

  const summary = slideById(proposal, 'ssg-04')
  const summaryBullets = summary.bullets ?? []
  summaryBullets.splice(
    1,
    0,
    'In March 2026 the state employed 1,241 teachers in the first batch of its recruitment exercise, 660 through SUBEB, 526 through TESCOM, and 55 education officers, following the deployment of 1,750 Imole Teachers Corps members into primary and secondary schools. Public schools have been rehabilitated across the state, and the 2025 UBEC/SUBEB intervention is supplying classrooms, furniture, and ICT equipment. In the 2026 NECO Senior School Certificate Examination, Osun placed fifth nationally, with 74.31 per cent of candidates recording at least five credits including English Language and Mathematics, and the state has held a single-digit national ranking through 2024, 2025, and 2026.',
  )
  summary.bullets = summaryBullets

  const background = slideById(proposal, 'ssg-05')
  const backgroundBullets = background.bullets ?? []
  const companyIndex = backgroundBullets.findIndex((item) =>
    item.includes('established in 1996'),
  )
  if (companyIndex < 0) {
    throw new Error('Osun SSG proposal is missing the company background paragraph')
  }
  backgroundBullets[companyIndex] =
    'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. The company publishes curriculum-aligned materials and builds its digital products internally, through its Technology and Digital team working with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. We are ISO 9001 certified. A related digital education solution is already in use with Abia State, and more than 30 schools adopted SmartEdu Hub within three months of launch.'
  background.bullets = backgroundBullets

  const commercial = slideById(proposal, 'ssg-14')
  const commercialBullets = commercial.bullets ?? []
  commercialBullets[2] =
    'We welcome the opportunity to discuss commercial terms with Your Honour’s office, the Honourable Commissioner for Education, SUBEB leadership, and the state procurement team at a mutually convenient time.'
  commercial.bullets = commercialBullets

  const request = slideById(proposal, 'ssg-15')
  request.title = 'Request to the Secretary to the State Government'
  request.bullets = [
    'We respectfully invite Hon. Chief Teslim Igbalaye, Secretary to the State Government, to receive this proposal and to commend SmartEdu Hub to His Excellency, the Governor of Osun State, and to the Ministry of Education, as the digital learning, school-management, and reporting platform for basic education across the state.',
    'We propose: a live demonstration of the platform to Your Honour; a briefing that your office can place before the Governor and the Honourable Commissioner for Education; a pilot in Osogbo, Ile-Ife, and Iwo; and phased deployment across the 30 Local Government Areas, with Ijesha schools in the first expansion after that pilot.',
  ]

  const conclusion = slideById(proposal, 'ssg-16')
  const conclusionBullets = conclusion.bullets ?? []
  conclusionBullets[1] =
    'We respect the weight of the decision before the Government of Osun State and are committed to earning Your Honour’s confidence through transparency, demonstration, and measurable results. A state-wide adoption of SmartEdu Hub would give Osun a classroom and reporting system for the teachers and schools the state is already strengthening, across all 30 Local Government Areas.'
  conclusion.bullets = conclusionBullets

  proposal.seedRevision = OSUN_SSG_SEED_REVISION
  proposal.meta = {
    ...proposal.meta,
    date: LETTER_DATE,
    letterDate: LETTER_DATE,
    recipient: 'Hon. Chief Teslim Igbalaye',
    recipientOrg: 'Secretary to the State Government, Osun State',
    recipientAddress:
      'Bola Ige House, State Secretariat,\nAbere, Osogbo, Osun State, Nigeria',
    subject:
      'Proposal for the Adoption of SmartEdu Hub Digital Solutions for Basic Education Transformation across Osun State',
    coverLetter,
  }

  if (proposal.meta.recipient !== 'Hon. Chief Teslim Igbalaye') {
    throw new Error('Osun SSG proposal is missing the addressee')
  }
  if (!JSON.stringify(proposal).includes(LETTER_DATE)) {
    throw new Error('Osun SSG proposal is missing the letter date')
  }
  if (coverLetter[0].includes('for the consideration and adoption of the Ministry')) {
    throw new Error('Osun SSG cover letter is still addressed to the Ministry')
  }
  if (/opon imo|earlier device programme/i.test(JSON.stringify(proposal))) {
    throw new Error('Osun SSG proposal still cites Opon Imo or an earlier device programme')
  }
  return proposal
}

export const osunSsgProposal: PresentationState = buildOsunSsgProposal()

export const osunSsgProposalSlides: Slide[] = osunSsgProposal.slides
