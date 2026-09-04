import type { PresentationState } from '../types/slide'
import {
  EDUCATION_NGO_DIRECTORY_ID,
  EDUCATION_NGO_DIRECTORY_TITLE,
  EDUCATION_NGOS,
  ngoProposalId,
  ngoProposalTitle,
} from './educationNgos'
import {
  buildEducationNgoDirectoryFrom,
  buildSmehNgoProposal,
} from './smehNgoProposalFactory'

export {
  EDUCATION_NGO_DIRECTORY_ID,
  EDUCATION_NGO_DIRECTORY_TITLE,
  EDUCATION_NGO_SEED_REVISION,
  EDUCATION_NGOS,
  ngoProposalId,
  ngoProposalTitle,
} from './educationNgos'

export const EDUCATION_NGO_PROPOSAL_IDS = EDUCATION_NGOS.map((org) =>
  ngoProposalId(org.slug),
)

export const EDUCATION_NGO_CATALOG_IDS = [
  EDUCATION_NGO_DIRECTORY_ID,
  ...EDUCATION_NGO_PROPOSAL_IDS,
]

export function educationNgoDirectory(): PresentationState {
  return buildEducationNgoDirectoryFrom(EDUCATION_NGOS)
}

export function educationNgoProposalById(id: string): PresentationState | null {
  const org = EDUCATION_NGOS.find((item) => ngoProposalId(item.slug) === id)
  return org ? buildSmehNgoProposal(org) : null
}

export function educationNgosMarkdown(): string {
  const lines = [
    '# Education NGOs and organisations — Top 50',
    '',
    'Research directory for **SmartEdu Hub** partnership outreach by Accessible Publishers Limited.',
    '',
    'Compiled **September 2026** from public websites and directories. Contacts (email, phone, address) change. Verify the correct partnership inbox before sending.',
    '',
    'Proposal template: the SmartEdu Hub proposal to **Florence Ifeoluwa Otedola (Cuppy Foundation)** — competition sponsorship, AI Books, and the Accessible Publishers catalogue. Each organisation below has a tailored proposal in the in-app Documents library (download as DOCX).',
    '',
    'Humanitarian and UN agencies are listed because they fund or implement education. Their proposals are written as technical partnership conversations, not casual CSI title-sponsorship asks.',
    '',
    '---',
    '',
  ]

  EDUCATION_NGOS.forEach((org, index) => {
    lines.push(`## ${index + 1}. ${org.name}`)
    lines.push('')
    lines.push(`- **Short name:** ${org.shortName}`)
    lines.push(`- **Category:** ${org.category}`)
    lines.push(`- **Attention:** ${org.attention}`)
    lines.push(`- **Email:** ${org.email}`)
    lines.push(`- **Phone:** ${org.phone}`)
    lines.push(`- **Address:** ${org.address}`)
    lines.push(`- **City:** ${org.city}`)
    lines.push(`- **Website:** ${org.website}`)
    lines.push(`- **In-app proposal:** ${ngoProposalTitle(org)}`)
    lines.push('')
  })

  lines.push('---')
  lines.push('')
  lines.push('## Accessible Publishers Limited (sender)')
  lines.push('')
  lines.push('- **Head office:** 121/123, The Knowledge Hub, Obafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State')
  lines.push('- **Website:** www.accessiblepublishers.com · www.smarteduhub.ng')
  lines.push('- **Email:** info@accessiblepublishers.com; cpo@accessiblepublishers.com')
  lines.push('- **Customer service:** +234 803 323 4827; +234 817 461 5807; +234 703 708 9870')
  lines.push('')

  return `${lines.join('\n')}\n`
}

export const educationNgoSeedCatalog: Record<
  string,
  { title: string; getState: () => PresentationState }
> = {
  [EDUCATION_NGO_DIRECTORY_ID]: {
    title: EDUCATION_NGO_DIRECTORY_TITLE,
    getState: () => structuredClone(educationNgoDirectory()),
  },
  ...Object.fromEntries(
    EDUCATION_NGOS.map((org) => [
      ngoProposalId(org.slug),
      {
        title: ngoProposalTitle(org),
        getState: () => structuredClone(buildSmehNgoProposal(org)),
      },
    ]),
  ),
}
