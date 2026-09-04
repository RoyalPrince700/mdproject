import type { PresentationState, Slide } from '../types/slide'

export const ADVANCE_FIELD_SALES_DOCUMENT_ID =
  'advance-field-digital-sales-partnership'
export const ADVANCE_FIELD_SALES_DOCUMENT_TITLE =
  'Partnership Proposal — Field & Digital Sales Force under Project ADVANCE'
export const ADVANCE_FIELD_SALES_SEED_REVISION = 1

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

export const ADVANCE_FIELD_SALES_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Ologundudu Joseph',
  degree: 'Executive Assistant, Growth and Strategy',
  date: 'September 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Calibri',
  recipient: 'The Chief People Officer (CPO)',
  recipientOrg: 'Accessible Publishers Limited',
  subject:
    'Partnership Proposal: Field & Digital Sales Force Leveraging Project ADVANCE',
}

export const advanceFieldSalesSlides: Slide[] = [
  {
    id: 'afs-01',
    layout: 'title',
    title: 'Partnership Proposal\nField & Digital Sales Force',
    subtitle:
      'Leveraging Project ADVANCE to grow Trifone and Accessible product sales through a dedicated three-person commercial unit',
    footer: 'Accessible Publishers Limited · September 2026',
    notes:
      'Plain internal partnership proposal to the CPO. Export as DOCX from Document view.',
  },
  {
    id: 'afs-02',
    layout: 'bullets',
    chapter: 'Document control',
    title: 'Submission details',
    icon: 'FileText',
    bullets: [
      'To: The Chief People Officer (CPO), Accessible Publishers Limited',
      'From: Ologundudu Joseph, Executive Assistant — Growth and Strategy',
      'Date: September 2026',
      'Subject: Partnership Proposal — Field & Digital Sales Force under Project ADVANCE',
      'Document type: Internal partnership / operating proposal (not a SmartEdu Hub partner proposal)',
      'Related initiative: Project ADVANCE — Four Priorities Growth Agenda',
    ],
  },
  sectionSlide('afs-03', '1. Purpose', '1. Purpose of this proposal', {
    subtitle: 'Why this partnership is being proposed',
  }),
  {
    id: 'afs-04',
    layout: 'bullets',
    chapter: '1. Purpose of this proposal',
    title: 'Purpose',
    icon: 'Target',
    bullets: [
      'This proposal seeks management approval to establish a small, dedicated Field & Digital Sales Force that will operate under the strategic umbrella of Project ADVANCE.',
      'The unit will employ people to sell Trifone products and other products within the Accessible Publishers ecosystem, and to secure commercial opportunities for Accessible subsidiaries.',
      'The partnership is product-exclusive: the team will sell only Accessible-owned and Accessible-authorised products and services. No competing third-party catalogues will be marketed under this arrangement.',
      'Approval is also requested for a permanent workstation at Head Office for the Operations / Order Manager, and for the two field officers to use Head Office only for briefings and meetings before daily field activity.',
    ],
  },
  sectionSlide(
    'afs-05',
    '2. Strategic context',
    '2. Alignment with Project ADVANCE',
    { subtitle: 'How this unit advances the four growth priorities' },
  ),
  {
    id: 'afs-06',
    layout: 'bullets',
    chapter: '2. Alignment with Project ADVANCE',
    title: 'Project ADVANCE context',
    icon: 'TrendingUp',
    bullets: [
      'Project ADVANCE is Accessible Publishers Limited’s enterprise-wide growth agenda. It mobilises the organisation toward four verified outcomes: new customer onboarding, SmartEdu Hub subscriptions, movement of strategic / slow-moving titles, and new business from subsidiaries such as Trifone, Oxygen, Smipay and related ventures.',
      'The core operating need stated in Project ADVANCE is clear: growth must extend beyond the Marketing department. Every credible channel that converts demand into validated revenue strengthens cashflow, market share and customer reach.',
      'This Field & Digital Sales Force is proposed as a focused commercial extension of that agenda — a small team whose sole mandate is verified sales and deal closure for Accessible products, tracked with the same integrity standards as Project ADVANCE (no fictitious customers, no credit inflation, validation before recognition).',
    ],
  },
  {
    id: 'afs-07',
    layout: 'framework',
    chapter: '2. Alignment with Project ADVANCE',
    title: 'How the unit maps to ADVANCE priorities',
    icon: 'Layers',
    frameworkBlocks: [
      {
        label: '01 New customers',
        text: 'Online sellers and field closers identify, register and convert new buyers across Accessible channels.',
        icon: 'UserRound',
      },
      {
        label: '02 SmartEdu & titles',
        text: 'Where product fit exists, the team supports subscription and strategic title conversations as part of Accessible’s wider catalogue.',
        icon: 'BookOpen',
      },
      {
        label: '03 Slow-moving stock',
        text: 'Digital and field pitches can prioritise approved strategic or slow-moving titles under commercial guidance.',
        icon: 'Boxes',
      },
      {
        label: '04 New businesses',
        text: 'Primary focus: Trifone and other subsidiary products — verified income that counts under ADVANCE’s “new business generated” outcome.',
        icon: 'Store',
      },
    ],
  },
  sectionSlide(
    'afs-08',
    '3. Partnership overview',
    '3. Partnership overview',
    { subtitle: 'What is being proposed and what it is not' },
  ),
  {
    id: 'afs-09',
    layout: 'bullets',
    chapter: '3. Partnership overview',
    title: 'Partnership summary',
    icon: 'Handshake',
    bullets: [
      'Name (working): Field & Digital Sales Force — Project ADVANCE Extension.',
      'Sponsor / proposer: Ologundudu Joseph, Executive Assistant, Growth and Strategy.',
      'Approving authority sought: Chief People Officer (CPO), with commercial and operational concurrence as required.',
      'Headcount: Three (3) dedicated people — two field commercial closers and one Head Office operations / order manager.',
      'Channels: Online selling (digital outreach, listings, social / remote selling) plus physical field closing for Accessible and subsidiary opportunities.',
      'Exclusivity: The partnership authorises sales of Accessible Publishers products and authorised subsidiary products only (including Trifone and other Accessible-owned offerings). Outside products are out of scope.',
      'What this is not: It is not a SmartEdu Hub bank/government proposal template, not a freelance multi-brand agency, and not an open mandate to sell third-party goods from Head Office.',
    ],
  },
  sectionSlide('afs-10', '4. Operating model', '4. Operating model', {
    subtitle: 'Three roles, one commercial unit',
  }),
  {
    id: 'afs-11',
    layout: 'framework',
    chapter: '4. Operating model',
    title: 'Team structure (3 people)',
    icon: 'Users',
    frameworkBlocks: [
      {
        label: 'Field Closer 1',
        text: 'Out daily to close deals, open accounts and secure commercial opportunities for Accessible and its subsidiaries. Reports to Head Office for meetings and briefing only.',
        icon: 'MapPin',
      },
      {
        label: 'Field Closer 2',
        text: 'Same mandate as Field Closer 1 — pipeline hunting, presentations, negotiation support and deal closure for approved products and subsidiary jobs.',
        icon: 'MapPin',
      },
      {
        label: 'Operations / Order Manager',
        text: 'Based at Head Office. Manages online orders, fulfilment coordination, field logistics support, CRM / order records, and day-to-day operations for the unit.',
        icon: 'Building2',
      },
    ],
  },
  {
    id: 'afs-12',
    layout: 'bullets',
    chapter: '4. Operating model',
    title: 'Daily rhythm',
    icon: 'ClipboardList',
    bullets: [
      'Morning: Field Closers attend Head Office (or designated briefing point) for short coordination — targets, leads, stock/availability notes, pricing confirmations and risk flags — then leave for field activity.',
      'Day: Field Closers execute visits, demos, negotiations and deal closure. Online sellers / digital outreach run in parallel under the Operations Manager’s coordination.',
      'Throughout the day: Operations / Order Manager remains at Head Office — receives orders, updates status, escalates stock or pricing issues, and keeps a clean audit trail of every opportunity.',
      'Close of day / weekly: Pipeline review, validated conversions, blockers and next-day priorities. Reporting aligns with Project ADVANCE’s weekly visibility culture.',
    ],
  },
  sectionSlide(
    'afs-13',
    '5. Roles & responsibilities',
    '5. Roles and responsibilities',
    { subtitle: 'Clear mandates for each seat' },
  ),
  {
    id: 'afs-14',
    layout: 'bullets',
    chapter: '5. Roles and responsibilities',
    title: 'Field Closers (2)',
    icon: 'MapPin',
    bullets: [
      'Identify and pursue schools, institutions, retailers, corporate buyers and other qualified prospects for Accessible and subsidiary products.',
      'Close deals and secure jobs / contracts for Accessible subsidiaries where commercially appropriate and authorised.',
      'Present only approved products, prices and terms. Do not offer credit outside company policy.',
      'Submit clean lead and deal records to the Operations / Order Manager the same day.',
      'Attend Head Office meetings and briefings as scheduled; otherwise operate in the field.',
      'Uphold Project ADVANCE non-negotiables: accuracy, integrity, no fictitious customers, no inflated transactions.',
    ],
  },
  {
    id: 'afs-15',
    layout: 'bullets',
    chapter: '5. Roles and responsibilities',
    title: 'Operations / Order Manager (1) — Head Office',
    icon: 'ClipboardList',
    bullets: [
      'Occupy an assigned workstation at Head Office as the unit’s operational hub.',
      'Manage online sales workflow: order intake, confirmation, status updates and escalation to warehouse / finance / subsidiary owners as needed.',
      'Coordinate the two Field Closers — diaries, lead assignment, follow-up reminders and meeting packs.',
      'Maintain the unit’s order book, pipeline log and evidence pack for validation (so revenue can be trusted under ADVANCE-style quality gates).',
      'Act as first-line customer service contact for digital and field-originated orders within the unit’s scope.',
      'Protect exclusivity: flag any attempt to introduce non-Accessible products into the channel.',
    ],
  },
  {
    id: 'afs-16',
    layout: 'bullets',
    chapter: '5. Roles and responsibilities',
    title: 'Proposer / Growth & Strategy oversight',
    icon: 'UserRound',
    bullets: [
      'Ologundudu Joseph (Executive Assistant, Growth and Strategy) will provide day-to-day partnership oversight, ensure alignment with Project ADVANCE priorities, and report progress to the CPO and relevant commercial heads.',
      'Oversight includes: hiring recommendations within approved headcount, weekly performance rhythm, escalation of blockers, and integrity of reporting.',
    ],
  },
  sectionSlide(
    'afs-17',
    '6. Head Office ask',
    '6. Workspace and Head Office requirements',
    { subtitle: 'What the company is requested to provide' },
  ),
  {
    id: 'afs-18',
    layout: 'framework',
    chapter: '6. Workspace and Head Office requirements',
    title: 'Facilities request',
    icon: 'Building2',
    frameworkBlocks: [
      {
        label: 'Dedicated desk',
        text: 'A secure, assigned workstation at Head Office for the Operations / Order Manager — the permanent base of the unit.',
        icon: 'Monitor',
      },
      {
        label: 'Meeting access',
        text: 'Field Closers are not full-time office-based. They report to Head Office for meetings, briefings and coordination, then proceed to the field.',
        icon: 'Users',
      },
      {
        label: 'Basic tools',
        text: 'Access to shared printer / Wi-Fi, approved CRM or order template, product price lists, and stock-availability contacts.',
        icon: 'Laptop',
      },
      {
        label: 'Identity & conduct',
        text: 'Company ID / introduction letters as appropriate so field officers can represent Accessible professionally and exclusively.',
        icon: 'ShieldCheck',
      },
    ],
  },
  {
    id: 'afs-19',
    layout: 'bullets',
    chapter: '6. Workspace and Head Office requirements',
    title: 'Why Head Office presence matters',
    icon: 'Shield',
    bullets: [
      'A fixed Head Office base for the Operations / Order Manager creates a single source of truth for orders, reduces lost leads, and keeps online and field channels synchronised.',
      'It gives Finance, Warehouse and Subsidiary owners a clear human contact for fulfilment and validation — essential if outcomes are to count under Project ADVANCE quality gates.',
      'Limiting Field Closers to meeting-only office time keeps cost light while preserving discipline, brand control and daily accountability.',
    ],
  },
  sectionSlide(
    'afs-20',
    '7. Product scope',
    '7. Product and commercial scope',
    { subtitle: 'What may be sold — and what may not' },
  ),
  {
    id: 'afs-21',
    layout: 'bullets',
    chapter: '7. Product and commercial scope',
    title: 'In scope',
    icon: 'CircleCheck',
    bullets: [
      'Trifone products and services authorised for sale by Accessible Publishers Limited.',
      'Other Accessible Publishers products (including strategic and slow-moving titles where commercially directed).',
      'Approved products and commercial opportunities of Accessible subsidiaries (e.g. Oxygen, Smipay and related ventures), subject to each subsidiary’s pricing and onboarding rules.',
      'SmartEdu Hub subscription opportunities where the team is briefed and authorised to introduce or refer them.',
    ],
  },
  {
    id: 'afs-22',
    layout: 'bullets',
    chapter: '7. Product and commercial scope',
    title: 'Out of scope (hard boundaries)',
    icon: 'Ban',
    bullets: [
      'Sale or promotion of competing publishers’ books or non-Accessible merchandise.',
      'Personal side businesses run through Accessible channels, Head Office space, or company identity.',
      'Unauthorised credit, informal discounts outside policy, or unverified “placeholder” orders.',
      'Any activity that would compromise Project ADVANCE integrity rules or company reputation.',
    ],
  },
  sectionSlide('afs-23', '8. Online sales', '8. Online selling model', {
    subtitle: 'Digital channel under Head Office control',
  }),
  {
    id: 'afs-24',
    layout: 'bullets',
    chapter: '8. Online selling model',
    title: 'Online employment / selling approach',
    icon: 'Globe',
    bullets: [
      'In addition to the two Field Closers, the partnership will employ or engage people to sell Accessible and Trifone products online — expanding reach without expanding office footprint.',
      'All online orders route through the Head Office Operations / Order Manager for confirmation, logging and fulfilment coordination.',
      'Online sellers operate under the same exclusivity rule: Accessible ecosystem products only.',
      'Scripts, price sheets and product claims must be company-approved to protect brand and compliance.',
      'Performance is measured on verified paid orders, not vanity metrics (clicks or unconfirmed interest).',
    ],
  },
  sectionSlide(
    'afs-25',
    '9. Expected outcomes',
    '9. Expected outcomes and KPIs',
    { subtitle: 'What success looks like' },
  ),
  {
    id: 'afs-26',
    layout: 'framework',
    chapter: '9. Expected outcomes and KPIs',
    title: 'Proposed success measures',
    icon: 'BarChart3',
    frameworkBlocks: [
      {
        label: 'Verified revenue',
        text: 'Net paid sales from Trifone and other Accessible / subsidiary products attributed to the unit.',
        icon: 'BadgeDollarSign',
      },
      {
        label: 'New accounts',
        text: 'Verified new customers registered and converted to first transaction.',
        icon: 'UserRound',
      },
      {
        label: 'Deals closed',
        text: 'Number and value of field-closed deals and subsidiary jobs secured.',
        icon: 'Handshake',
      },
      {
        label: 'Order integrity',
        text: 'Clean order book, low error rate, and zero tolerance for fictitious or inflated claims.',
        icon: 'ShieldCheck',
      },
      {
        label: 'Online conversion',
        text: 'Paid online orders processed through the Head Office operations desk.',
        icon: 'Store',
      },
      {
        label: 'ADVANCE fit',
        text: 'Contribution visible on weekly dashboard language: customers, titles, subscriptions (where relevant), and new business.',
        icon: 'Sparkles',
      },
    ],
  },
  sectionSlide(
    'afs-27',
    '10. Implementation',
    '10. Implementation roadmap',
    { subtitle: 'From approval to steady state' },
  ),
  {
    id: 'afs-28',
    layout: 'bullets',
    chapter: '10. Implementation roadmap',
    title: 'Phased rollout',
    icon: 'GitBranch',
    bullets: [
      'Phase 1 — Approval (Week 1): CPO approval of partnership concept, headcount of three, Head Office desk allocation, and exclusivity terms.',
      'Phase 2 — Setup (Weeks 2–3): Recruit / assign the three roles; issue product briefings; set order templates; introduce Field Closers to subsidiary contacts; activate online selling guidelines.',
      'Phase 3 — Pilot (Weeks 4–12): Weekly pipeline reviews; monthly revenue and integrity report to CPO / Growth & Strategy; refine territories and product focus.',
      'Phase 4 — Review (Month 4): ROI and people-performance review; decide to sustain, adjust headcount, or expand online capacity.',
    ],
  },
  sectionSlide(
    'afs-29',
    '11. Governance',
    '11. Governance, people and controls',
    { subtitle: 'How the unit stays safe and accountable' },
  ),
  {
    id: 'afs-30',
    layout: 'bullets',
    chapter: '11. Governance, people and controls',
    title: 'People, conduct and controls',
    icon: 'Scale',
    bullets: [
      'Employment / engagement of the three core people (and any online sellers) will follow Accessible HR and CPO guidance — contracts, onboarding, and conduct expectations.',
      'The unit reports commercially through Growth & Strategy oversight, with people matters under CPO authority.',
      'All revenue claims require validation by Finance / product owner before they are treated as confirmed performance.',
      'Head Office space is for Accessible business only. Personal trading from the assigned desk is prohibited.',
      'Brand use (ID, letterheads, social posts) requires compliance with company communication standards.',
      'Misrepresentation, side-selling, or policy breaches are grounds for immediate review and termination of the partnership arrangement for the individual concerned.',
    ],
  },
  sectionSlide(
    'afs-31',
    '12. Support requested',
    '12. Support requested from the company',
    { subtitle: 'Decision asks for the CPO' },
  ),
  {
    id: 'afs-32',
    layout: 'bullets',
    chapter: '12. Support requested from the company',
    title: 'Approval requests',
    icon: 'CircleCheck',
    bullets: [
      'Approve the Field & Digital Sales Force partnership as a Project ADVANCE-aligned commercial unit.',
      'Approve a headcount of three: two Field Closers and one Head Office Operations / Order Manager.',
      'Allocate a secure workstation / space at Head Office for the Operations / Order Manager.',
      'Authorise Field Closers to use Head Office for meetings and briefings before daily field work.',
      'Confirm product exclusivity: the unit may sell only Accessible Publishers and authorised subsidiary products (including Trifone).',
      'Endorse online employment / engagement for selling Accessible and Trifone products under Head Office order control.',
      'Nominate or confirm escalation contacts in Sales, Warehouse, Finance and relevant subsidiaries for fast conversion support.',
    ],
  },
  sectionSlide('afs-33', '13. Risks', '13. Risks and mitigations', {
    subtitle: 'Anticipating issues before they cost revenue or reputation',
  }),
  {
    id: 'afs-34',
    layout: 'framework',
    chapter: '13. Risks and mitigations',
    title: 'Key risks',
    icon: 'TriangleAlert',
    frameworkBlocks: [
      {
        label: 'Brand misuse',
        text: 'Mitigation: exclusivity clause, approved scripts, and CPO/HR conduct rules.',
        icon: 'Shield',
      },
      {
        label: 'Order chaos',
        text: 'Mitigation: single Head Office operations desk as order source of truth.',
        icon: 'ClipboardList',
      },
      {
        label: 'False pipeline',
        text: 'Mitigation: ADVANCE-style validation — points/credit only after paid, confirmed outcomes.',
        icon: 'Search',
      },
      {
        label: 'Weak follow-up',
        text: 'Mitigation: named subsidiary / HOD contacts and weekly escalation rhythm.',
        icon: 'Phone',
      },
    ],
  },
  sectionSlide(
    'afs-35',
    '14. Recommendation',
    '14. Recommendation',
    { subtitle: 'Why this should be approved' },
  ),
  {
    id: 'afs-36',
    layout: 'bullets',
    chapter: '14. Recommendation',
    title: 'Recommendation',
    icon: 'Sparkles',
    bullets: [
      'Project ADVANCE calls for growth beyond a single department and for verified new business from Trifone and sister ventures. A three-person Field & Digital Sales Force is a lean, controllable way to answer that call.',
      'Keeping one operator at Head Office protects order integrity; sending two closers into the market protects reach; restricting the mandate to Accessible products protects the brand.',
      'I respectfully recommend that the CPO approve this partnership, the three-person structure, the Head Office workstation, and the exclusivity terms set out in this document.',
      'Upon approval, Growth & Strategy will proceed to staffing, briefing and a 12-week pilot with weekly reporting.',
    ],
  },
  {
    id: 'afs-37',
    layout: 'bullets',
    chapter: '15. Closing',
    title: 'Closing',
    icon: 'FileText',
    bullets: [
      'Thank you for considering this proposal. I am available to present the operating model, answer questions on headcount and workspace, and refine KPIs to CPO preference before launch.',
      '',
      'Submitted by:',
      'Ologundudu Joseph',
      'Executive Assistant, Growth and Strategy',
      'Accessible Publishers Limited',
      '',
      'For the attention of:',
      'The Chief People Officer (CPO)',
      'Accessible Publishers Limited',
      '',
      'Motto (Project ADVANCE): Everyone Sells. Everyone Grows.',
    ],
  },
]

export const advanceFieldSalesPartnership: PresentationState = {
  slides: advanceFieldSalesSlides,
  currentIndex: 0,
  seedRevision: ADVANCE_FIELD_SALES_SEED_REVISION,
  meta: ADVANCE_FIELD_SALES_META,
}
