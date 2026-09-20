import type { PresentationState, Slide } from '../types/slide'

export const UNILORIN_JOTTER_DOCUMENT_ID =
  'unilorin-convocation-jotter-partnership'
export const UNILORIN_JOTTER_DOCUMENT_TITLE =
  'Proposal — University of Ilorin Convocation Jotter Partnership'
export const UNILORIN_JOTTER_SEED_REVISION = 1

function sectionSlide(
  id: string,
  title: string,
  chapter: string,
  extra?: { subtitle?: string; notes?: string },
): Slide {
  return {
    id,
    layout: 'section',
    title,
    chapter,
    subtitle: extra?.subtitle,
    notes: extra?.notes,
  }
}

export const UNILORIN_JOTTER_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Ologundudu Joseph',
  degree: 'Executive Assistant, Growth and Strategy',
  date: 'September 2026',
  letterDate: '2nd September 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'The Chief People Officer (CPO)',
  recipientOrg: 'Accessible Publishers Limited',
  subject:
    'Partnership Proposal — University of Ilorin Convocation Jotter Printing (Project ADVANCE)',
}

export const unilorinJotterSlides: Slide[] = [
  {
    id: 'unilorin-01',
    layout: 'title',
    title: 'Partnership Proposal:\nUniversity of Ilorin\nConvocation Jotter Printing',
    subtitle:
      'Submitted to the CPO, Accessible Publishers Limited — leveraging Project ADVANCE',
    footer: 'Ologundudu Joseph · Executive Assistant, Growth & Strategy · September 2026',
    notes:
      'Plain internal proposal. Export as DOCX from Document view. No SMEH template or watermark.',
  },
  {
    id: 'unilorin-02',
    layout: 'bullets',
    chapter: 'Cover',
    title: 'Document details',
    icon: 'FileText',
    bullets: [
      'Date: 2nd September 2026',
      'To: The Chief People Officer (CPO), Accessible Publishers Limited',
      'From: Ologundudu Joseph, Executive Assistant — Growth and Strategy',
      'Subject: Partnership proposal for University of Ilorin convocation jotter printing, in alignment with Project ADVANCE',
      'Reference: Project ADVANCE Stakeholder Engagement presentation (anchored 1st September 2026)',
    ],
  },
  sectionSlide('unilorin-03', 'Purpose', '1. Purpose', {
    subtitle: 'Why this proposal is before you',
  }),
  {
    id: 'unilorin-04',
    layout: 'bullets',
    chapter: '1. Purpose',
    title: 'Purpose of this proposal',
    icon: 'Target',
    bullets: [
      'This proposal requests management approval for a commercial partnership between me (as originator and field connector) and Accessible Publishers Limited (as printer and fulfilment partner) for convocation jotter printing ahead of the University of Ilorin October convocation.',
      'The ask is simple: Accessible Publishers prints the jotters at a preferential, affordable cost so that I can win student-run convocation jotter jobs with a clear pricing edge, while Accessible Publishers captures verified print revenue and a new institutional / campus pipeline.',
      'This is a practical expression of Project ADVANCE — spotting an opportunity, bringing it through the company, and converting it into validated new business.',
    ],
  },
  sectionSlide(
    'unilorin-05',
    'Project ADVANCE context',
    '2. Project ADVANCE alignment',
    {
      subtitle:
        'Building on the stakeholder engagement presentation of 1st September 2026',
    },
  ),
  {
    id: 'unilorin-06',
    layout: 'bullets',
    chapter: '2. Project ADVANCE alignment',
    title: 'Reference to Project ADVANCE',
    icon: 'Presentation',
    bullets: [
      'Yesterday’s Project ADVANCE Stakeholder Engagement presentation set out a clear enterprise growth agenda: every staff member is expected to act as a growth connector — identify opportunities, pass them through the right channel, and support conversion without disrupting core duties.',
      'Project ADVANCE’s four priorities include new customer onboarding, SmartEdu adoption, movement of strategic / slow-moving titles, and validated new business outcomes (including institutional accounts and textbook-category expansion).',
      'The motto of the initiative — “Everyone Sells. Everyone Grows.” — is the spirit of this proposal. I am bringing a time-bound campus opportunity to the company so that Accessible Publishers can print at volume and I can compete on price in a market that already runs on student-led jotter sales every convocation season.',
    ],
  },
  {
    id: 'unilorin-07',
    layout: 'framework',
    chapter: '2. Project ADVANCE alignment',
    title: 'How this opportunity maps to ADVANCE',
    icon: 'GitBranch',
    bullets: [
      'This jotter partnership is not a side hustle detached from company strategy. It is a live test of the ADVANCE operating model: spot → submit → support → validate → report.',
    ],
    frameworkBlocks: [
      {
        label: 'New business',
        text: 'Verified print jobs and campus relationships that did not previously sit on Accessible Publishers’ books.',
        icon: 'Store',
      },
      {
        label: 'New customers',
        text: 'Student organisers, faculty associations, and related campus buyers who may become repeat or referral accounts.',
        icon: 'UserRound',
      },
      {
        label: 'Plant utilisation',
        text: 'Affordable, high-volume jotter runs keep print capacity busy and convert idle capacity into working capital.',
        icon: 'Factory',
      },
      {
        label: 'Staff growth culture',
        text: 'Demonstrates that non-sales roles (Growth & Strategy support) can originate convertible commercial opportunities.',
        icon: 'Users',
      },
    ],
  },
  sectionSlide('unilorin-08', 'The opportunity', '3. Market opportunity', {
    subtitle: 'University of Ilorin — October convocation season',
  }),
  {
    id: 'unilorin-09',
    layout: 'bullets',
    chapter: '3. Market opportunity',
    title: 'University of Ilorin convocation jotter market',
    icon: 'GraduationCap',
    bullets: [
      'The University of Ilorin convocation is scheduled for October. Each convocation season, graduating students and student groups routinely commission and sell branded convocation jotters as memorabilia and fundraising items.',
      'Demand is concentrated, time-bound, and highly price-sensitive. Student organisers compare printers closely; the vendor who can deliver quality jotters at the lowest credible unit cost usually wins the job.',
      'I have proximity to this market and can originate and close jotter printing jobs if Accessible Publishers backs me with a preferential print rate that gives me a pricing edge against other campus printers.',
      'Winning even a share of Unilorin convocation jotter volume creates a proof case that can be repeated for other institutions’ convocation and matriculation seasons.',
    ],
  },
  sectionSlide('unilorin-10', 'The ask', '4. Proposed partnership', {
    subtitle: 'Roles, pricing edge, and commercial logic',
  }),
  {
    id: 'unilorin-11',
    layout: 'twoColumn',
    chapter: '4. Proposed partnership',
    title: 'Partnership model',
    icon: 'Handshake',
    leftTitle: 'My role (originator)',
    leftBullets: [
      'Identify and engage student organisers and campus buyers at the University of Ilorin.',
      'Secure jotter printing jobs (specs, quantities, delivery timelines, and payment terms).',
      'Present Accessible Publishers as the fulfilment partner and manage client expectations.',
      'Log the opportunity under Project ADVANCE for validation and leaderboard credit where applicable.',
      'Report weekly status, risks, and conversion progress to the agreed owner.',
    ],
    rightTitle: 'Accessible Publishers’ role',
    rightBullets: [
      'Print and finish convocation jotters to agreed quality and turnaround.',
      'Offer a preferential / staff-originated print rate that is meaningfully below open-market campus printers.',
      'Confirm capacity for October peak demand and provide clear unit pricing by quantity band.',
      'Validate revenue and issue invoices / receipts for ADVANCE scoring.',
      'Protect brand quality so Accessible Publishers remains a trusted campus printer.',
    ],
  },
  {
    id: 'unilorin-12',
    layout: 'bullets',
    chapter: '4. Proposed partnership',
    title: 'Why preferential pricing matters',
    icon: 'BadgeDollarSign',
    bullets: [
      'Campus jotter jobs are won or lost on unit price. Without a preferential rate from Accessible Publishers, I cannot undercut or match competing printers who already serve Unilorin student markets.',
      'An affordable internal print rate does not mean selling at a loss. It means a thin but clean margin for the company, volume throughput for the press, and a pricing edge for me as the connector — so the job lands with Accessible Publishers rather than with an outside printer.',
      'I therefore request that Production / Commercial agree a staff-originated jotter rate card (by size, pages, cover type, and quantity bands) that I can quote confidently before the October rush.',
    ],
  },
  sectionSlide('unilorin-13', 'Benefits', '5. Benefits to the company', {
    subtitle: 'What Accessible Publishers gains',
  }),
  {
    id: 'unilorin-14',
    layout: 'cards',
    chapter: '5. Benefits to the company',
    title: 'Value for Accessible Publishers Limited',
    icon: 'TrendingUp',
    bullets: [
      'Verified new print revenue from a seasonal campus market the company may not currently own.',
      'A live Project ADVANCE case study: staff-originated opportunity → validated conversion → measurable points and recognition.',
      'Brand presence among University of Ilorin graduating cohorts — useful for textbook, SmartEdu, and future institutional conversations.',
      'A repeatable playbook for other universities’ convocations and matriculations if the Unilorin pilot succeeds.',
      'Better utilisation of printing capacity during a predictable seasonal window.',
    ],
  },
  sectionSlide('unilorin-15', 'Governance', '6. Integrity and governance', {
    subtitle: 'Aligned with Project ADVANCE non-negotiables',
  }),
  {
    id: 'unilorin-16',
    layout: 'bullets',
    chapter: '6. Integrity and governance',
    title: 'Guardrails',
    icon: 'ShieldCheck',
    bullets: [
      'All jobs will be real, paid, and documented. No credit sales, inflated quantities, or fictitious customers.',
      'Points or recognition under Project ADVANCE (if claimed) will post only after finance / owner validation, consistent with the ADVANCE rules shared in the stakeholder presentation.',
      'Core duties as Executive Assistant, Growth and Strategy, will not be disrupted; campus engagement will be coordinated around work priorities.',
      'Accessible Publishers’ name and print quality standards will be protected on every job.',
      'Pricing, discounts, and payment terms will follow whatever rate card and approval path Management sets.',
    ],
  },
  sectionSlide('unilorin-17', 'Next steps', '7. Requested decisions', {
    subtitle: 'What I need from the CPO and relevant owners',
  }),
  {
    id: 'unilorin-18',
    layout: 'bullets',
    chapter: '7. Requested decisions',
    title: 'Approval requests',
    icon: 'ListChecks',
    bullets: [
      'Approve in principle a partnership under which I originate University of Ilorin convocation jotter jobs and Accessible Publishers prints them.',
      'Mandate Production / Commercial to issue a preferential jotter rate card (quantity bands, specs, turnaround) suitable for student-run campus jobs before the October convocation peak.',
      'Nominate an escalation owner for pricing queries, capacity confirmation, and revenue validation under Project ADVANCE.',
      'Confirm that verified jotter revenue from this channel may count toward Project ADVANCE “new business” outcomes where the rules allow.',
      'Agree a short pilot window through the Unilorin October convocation, with a brief after-action report on volume, margin, and lessons for other campuses.',
    ],
  },
  {
    id: 'unilorin-19',
    layout: 'bullets',
    chapter: '8. Closing',
    title: 'Closing',
    icon: 'MessageCircle',
    bullets: [
      'Project ADVANCE asked every staff member to spot opportunities and help convert them into verified business. The University of Ilorin’s October convocation jotter market is one such opportunity — concentrated demand, clear buyer behaviour, and a pricing contest I can win only with Accessible Publishers behind me.',
      'With a preferential print rate and clean fulfilment, Accessible Publishers gains revenue and campus footprint; I gain the pricing edge to close the jobs; and Project ADVANCE gains a concrete example of staff-led growth.',
      'I respectfully request the CPO’s support and the necessary introductions to Production and Commercial so we can lock rates and capacity in time for October.',
      '',
      'Respectfully submitted,',
      '',
      'Ologundudu Joseph',
      'Executive Assistant, Growth and Strategy',
      'Accessible Publishers Limited',
      '2nd September 2026',
    ],
  },
]

export const unilorinJotterProposal: PresentationState = {
  slides: unilorinJotterSlides,
  currentIndex: 0,
  seedRevision: UNILORIN_JOTTER_SEED_REVISION,
  meta: UNILORIN_JOTTER_META,
}
