import type { PresentationState, Slide } from '../types/slide'
import { DEFAULT_PROPOSAL_SENDER_ADDRESS } from '../theme/documentTheme'
import {
  EDUCATION_NGO_SEED_REVISION,
  ngoProposalTitle,
  type EducationNgo,
} from './educationNgos'

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

function addressLine(org: EducationNgo) {
  return `${org.address} · ${org.website}`
}

function categoryInSentence(category: string) {
  const lower = category.toLowerCase()
  if (lower.startsWith('un ')) return `UN ${lower.slice(3)}`
  return lower
}

export function buildSmehNgoProposal(org: EducationNgo): PresentationState {
  const p = org.slug
  const coverLetter = [
    `We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, and to propose a strategic partnership with ${org.name} focused on academic competition sponsorship, inclusive digital learning, and measurable classroom impact for Nigerian learners.`,
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning solutions, and the development of quality educational materials for schools and institutions across Nigeria. Since our establishment in 1996, we have remained committed to supporting educational advancement through curriculum-aligned content, digital innovation, and teacher development initiatives.',
    'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025 by Customers’ Choice Quality Awards. This recognition underscores our commitment to reinventing education delivery through publishing excellence, education innovation, and digital solutions.',
    'Accessible Publishers Limited is ISO 9001 certified. Our quality management system governs how we develop, review, produce, and support educational content and digital solutions, so partners can rely on consistent quality, documented processes, and continuous improvement across publishing, printing, and SmartEdu Hub delivery.',
    org.admiration,
    `This proposal invites ${org.shortName} to partner on SmartEdu Hub’s national academic competitions — a platform feature through which students compete for cash prizes, laptops, educational gifts, vacation trips, and national recognition — and on continuous learning through AI Books and the Accessible Publishers educational book catalogue. The ask is tailored to ${org.shortName}’s work on ${categoryInSentence(org.category)}, not copied from a generic CSI template.`,
    'A key strength of Accessible Publishers Limited is that SmartEdu Hub is developed internally by our Technology and Digital team, working closely with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. We have also delivered a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
    `We would be honoured to present SmartEdu Hub to ${org.salutation}, and to explore a partnership that is practical, safeguarding-aware, and reportable.`,
  ]

  const slides: Slide[] = [
    {
      id: `${p}-01`,
      layout: 'title',
      title: 'Proposal for Strategic Partnership on\nSmartEdu Hub Digital Solutions',
      subtitle: `Competition sponsorship, AI Books, and inclusive digital learning with ${org.shortName}`,
      footer: `Submitted to ${org.attention} · ${org.name}\nAccessible Publishers Limited · September 2026`,
      notes: `Tailored SMEH proposal for ${org.name}, modelled on the Cuppy Foundation competition-sponsorship format.`,
    },
    {
      id: `${p}-02`,
      layout: 'bullets',
      chapter: 'Cover Letter',
      title: 'Letter of Introduction',
      icon: 'Handshake',
      bullets: coverLetter.slice(0, 5),
      notes: 'These paragraphs become the opening letter in the Word download.',
    },
    {
      id: `${p}-02b`,
      layout: 'bullets',
      chapter: 'Cover Letter',
      title: 'Letter of Introduction (continued)',
      icon: 'FileText',
      bullets: coverLetter.slice(5),
    },
    sectionSlide(`${p}-03`, 'The Proposal', `SmartEdu Hub x ${org.shortName}`, {
      subtitle: 'Competition sponsorship, learning content, and partner-fit impact',
    }),
    {
      id: `${p}-04`,
      layout: 'bullets',
      chapter: '1. Executive Summary',
      title: 'Executive Summary',
      icon: 'Target',
      bullets: [
        'SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform. Beyond administration and classroom tools, it runs national academic competitions that inspire excellence and reward outstanding learners with cash prizes, devices, educational gifts, vacation trips, and national rankings.',
        `Accessible Publishers Limited proposes that ${org.shortName} partner on SmartEdu Hub competitions and learning access in a way that matches ${org.shortName}’s mandate: ${categoryInSentence(org.category)}.`,
        'Sponsorship or programme integration would be reinforced by platform learning assets already available on SmartEdu Hub: AI Books (digital textbooks with an intelligent tutor) and the Accessible Publishers educational book catalogue — giving participants and partner schools continuous access to curriculum-aligned content, not only a one-day prize moment.',
      ],
    },
    {
      id: `${p}-05`,
      layout: 'bullets',
      chapter: `2. About ${org.shortName}`,
      title: `About ${org.name}`,
      icon: 'ShieldCheck',
      bullets: [
        ...org.about,
        `This proposal is written to that mandate. Contact for this partnership conversation: ${org.email}. ${org.phone}. ${org.address}.`,
      ],
    },
    {
      id: `${p}-06`,
      layout: 'bullets',
      chapter: '3. About Accessible Publishers',
      title: 'About Accessible Publishers Limited',
      icon: 'Building2',
      bullets: [
        'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. The company has built a strong reputation across educational publishing, curriculum resources, school support materials, and technology-enabled learning solutions for schools, institutions, government programmes, and corporate partners.',
        'SmartEdu Hub is developed internally by our Technology and Digital team, with input from Editorial, Learning and Development, Media, Production, Marketing, Distribution, Human Resources, and Administration. This gives us direct control over curriculum alignment, localisation, implementation, support, and continuous improvement.',
        'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year by Customers’ Choice Quality Awards. We have implemented a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
        'The company is ISO 9001 certified. Quality assurance is built into how we write, review, print, and digitise learning materials, and into how we build, test, and support SmartEdu Hub — giving partners a process standard, not only a product promise.',
      ],
    },
    {
      id: `${p}-06b`,
      layout: 'framework',
      chapter: '3. About Accessible Publishers',
      title: 'ISO Certification and Quality Assurance',
      icon: 'ShieldCheck',
      frameworkBlocks: [
        {
          label: 'ISO 9001 certified',
          text: 'Accessible Publishers Limited operates an ISO 9001 quality management system. Certification confirms that our work is planned, documented, reviewed, and improved against an internationally recognised standard — not left to informal practice.',
          icon: 'CircleCheck',
        },
        {
          label: 'Editorial and curriculum QA',
          text: 'Titles and digital content pass structured editorial review for accuracy, age-appropriateness, and curriculum alignment before they reach schools. Quality checks sit with Editorial, Learning and Development, and subject specialists.',
          icon: 'BookOpen',
        },
        {
          label: 'Production and digital assurance',
          text: 'Print production, accessible formats, and SmartEdu Hub features are tested before release. Platform updates, competition scoring, learner data, and support processes follow documented controls so delivery remains reliable at scale.',
          icon: 'Monitor',
        },
        {
          label: 'Partner accountability',
          text: `For ${org.shortName}, ISO-backed quality management means competition operations, learning content, and impact reporting are run with traceable processes, clear ownership, and continuous improvement after each season.`,
          icon: 'ClipboardList',
        },
      ],
    },
    {
      id: `${p}-07`,
      layout: 'cards',
      chapter: '4. Partnership Focus',
      title: `Why This Partnership Fits ${org.shortName}`,
      icon: 'Goal',
      bullets: org.partnershipFit,
    },
    {
      id: `${p}-08`,
      layout: 'twoColumn',
      chapter: '4. Partnership Focus',
      title: 'Mission Alignment',
      icon: 'Handshake',
      leftTitle: `${org.shortName} priorities`,
      leftBullets: org.priorities,
      rightTitle: 'What SmartEdu Hub offers',
      rightBullets: [
        'National academic competitions with prizes and rankings.',
        'AI Books with interactive tutoring support.',
        'Accessible Publishers curriculum-aligned book catalogue.',
        'CBT, past questions, and exam preparation tools.',
        'Usage and outcome reporting for partner accountability.',
      ],
    },
    {
      id: `${p}-09`,
      layout: 'framework',
      chapter: '5. SmartEdu Hub Offer',
      title: 'Competitions, AI Books, and Publishing Content',
      icon: 'Layers',
      frameworkBlocks: [
        {
          label: 'National competitions',
          text: 'Students compete for cash prizes, laptops, educational gifts, vacation trips, and national rankings — turning academic excellence into motivation, recognition, and aspiration beyond the classroom.',
          icon: 'Goal',
        },
        {
          label: 'AI Books',
          text: 'Digital textbooks powered by an intelligent AI tutor: students ask questions while reading, get chapter summaries, clarify difficult concepts, revise faster, and learn independently.',
          icon: 'Sparkles',
        },
        {
          label: 'Accessible Publishers books',
          text: 'Curriculum-aligned educational titles from Accessible Publishers are available on SmartEdu Hub, giving schools and learners trusted Nigerian content alongside platform tools.',
          icon: 'BookOpen',
        },
        {
          label: 'School and learning stack',
          text: 'CBT and past questions (WAEC, NECO, JAMB, BECE, NCEE), attendance, results, communication, and dashboards that help schools and partners track engagement and progress.',
          icon: 'Monitor',
        },
      ],
    },
    {
      id: `${p}-10`,
      layout: 'framework',
      chapter: '6. Proposed Partnership Scope',
      title: 'Proposed Partnership Scope',
      icon: 'GitBranch',
      frameworkBlocks: [
        {
          label: '1. Competition partnership',
          text: `Name and brand a SmartEdu Hub competition season, category, or school cluster with ${org.shortName}, with co-branded communications only where the partner’s brand rules allow.`,
          icon: 'Goal',
        },
        {
          label: '2. Prize and recognition design',
          text: org.prizeAngle,
          icon: 'BadgeDollarSign',
        },
        {
          label: '3. Learning access for participants',
          text: 'Extend AI Books and Accessible Publishers catalogue access to competition cohorts and selected partner schools so the relationship builds lasting study habits, not only prize moments.',
          icon: 'Library',
        },
        {
          label: '4. Inclusive and safe outreach',
          text: org.outreachAngle,
          icon: 'Users',
        },
      ],
    },
    {
      id: `${p}-11`,
      layout: 'twoColumn',
      chapter: '7. Mutual Benefits',
      title: 'Mutual Benefits',
      icon: 'Sparkles',
      leftTitle: `Benefits to ${org.shortName}`,
      leftBullets: [
        `A youth-facing academic platform aligned to ${categoryInSentence(org.category)}.`,
        'Measurable participation, engagement, and outcome reporting.',
        'Association with a locally built, ISO 9001-certified Nigerian publisher and edtech stack.',
        'Continuous learning value through AI Books and Accessible Publishers titles.',
        'Flexible models: sponsorship, grant, implementing partnership, or content collaboration.',
      ],
      rightTitle: 'Benefits to SmartEdu Hub',
      rightBullets: [
        `Credible partnership with ${org.shortName}.`,
        'Stronger motivation and adoption among partner schools and learners.',
        'Deeper use of AI Books and the Accessible Publishers catalogue.',
        'A model that can be reported honestly to other education partners.',
        'Implementation learning from a specialist education organisation.',
      ],
    },
    {
      id: `${p}-12`,
      layout: 'bullets',
      chapter: '8. Impact Model',
      title: 'From Partnership to Classroom Impact',
      icon: 'TrendingUp',
      bullets: [
        'Many education interventions stop at inspiration. SmartEdu Hub competitions are designed to convert inspiration into practice: students prepare using AI Books, Accessible Publishers titles, past questions, and CBT tools; they compete for recognition; and schools see engagement through platform analytics.',
        `For ${org.shortName}, this can create a closed-loop story — awareness, participation, preparation, performance, recognition, and continued learning — communicated with evidence rather than only with photographs.`,
        'Optional pilot design: one season or cluster; agreed branding and safeguarding; prize or resource fulfilment; and a short impact brief covering participation, performance indicators, and learner stories consistent with the partner’s communications rules.',
      ],
    },
    {
      id: `${p}-13`,
      layout: 'framework',
      chapter: '9. Implementation',
      title: 'Implementation Activities',
      icon: 'ClipboardList',
      frameworkBlocks: [
        {
          label: 'Presentation and alignment',
          text: `Present SmartEdu Hub to ${org.salutation}; agree theme, audience, safeguarding, and whether the primary product is competitions, learning access, or both.`,
          icon: 'Presentation',
        },
        {
          label: 'Season or cohort design',
          text: 'Define calendar, eligibility, outreach rules, branding guidelines, prize or resource logistics, and data-protection practices.',
          icon: 'ClipboardList',
        },
        {
          label: 'Launch and engagement',
          text: 'Onboard schools and learners to AI Books and Accessible Publishers titles; run the agreed competition or learning cohort with communication support.',
          icon: 'TrendingUp',
        },
        {
          label: 'Report and review',
          text: 'Deliver a participation and outcome report; capture consented stories; review renewal, grant next step, or honest closure if the fit is weak.',
          icon: 'BarChart3',
        },
      ],
    },
    {
      id: `${p}-14`,
      layout: 'bullets',
      chapter: '10. Request',
      title: `Request to ${org.shortName}`,
      icon: 'Mail',
      bullets: org.ask,
    },
    {
      id: `${p}-15`,
      layout: 'bullets',
      chapter: '11. Conclusion',
      title: 'Conclusion',
      icon: 'Handshake',
      bullets: org.conclusion,
      footer:
        'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan\nSmartEduHub Accessible Digital Platform Team (SMEH)\nwww.smarteduhub.ng\nwww.accessiblepublishers.com\n\nFor Further Enquiries\nAkeredolu Tosin S.\nPrincipal Executive Assistant to the MD/CEO\nPhone: +234 803 057 7613\nEmail: officeofthemd@accessiblepublishers.com',
      notes: 'Close with the conclusion, institutional submission block, and further-enquiries contact.',
    },
  ]

  return {
    slides,
    currentIndex: 0,
    seedRevision: EDUCATION_NGO_SEED_REVISION,
    meta: {
      brand: 'Accessible Publishers Limited',
      author: 'Gbadega Adedapo',
      degree: 'MD/CEO',
      date: 'September 2026',
      letterDate: '4th September 2026',
      kind: 'proposal',
      editorView: 'document',
      documentFont: 'Arial',
      recipient: org.attention,
      recipientOrg: org.name,
      recipientAddress: addressLine(org),
      subject: `Proposal for Strategic Partnership with ${org.name} on SmartEdu Hub Academic Competitions, AI Books, and Inclusive Digital Learning`,
      website: 'www.smarteduhub.ng',
      senderAddress: DEFAULT_PROPOSAL_SENDER_ADDRESS,
      coverLetter,
      signOff: [
        'Yours faithfully,',
        'Gbadega Adedapo',
        'MD/CEO',
        'For: Accessible Publishers Limited',
      ],
      contactRows: [
        { label: 'Organisation', value: org.name },
        { label: 'Attention', value: org.attention },
        { label: 'Email', value: org.email },
        { label: 'Phone', value: org.phone },
        { label: 'Address', value: org.address },
        { label: 'Website', value: org.website },
      ],
    },
  }
}

export function buildEducationNgoDirectoryFrom(
  orgs: EducationNgo[],
): PresentationState {
  const slides: Slide[] = [
    {
      id: 'ngo-dir-01',
      layout: 'title',
      title: 'Education NGOs and Organisations\nTop 50 Directory',
      subtitle:
        'Public contacts for SmartEdu Hub partnership outreach · September 2026',
      footer:
        'Accessible Publishers Limited · Research file also saved as org.md',
    },
    {
      id: 'ngo-dir-02',
      layout: 'bullets',
      chapter: 'How to use this directory',
      title: 'How to use this directory',
      icon: 'ClipboardList',
      bullets: [
        'This directory lists 50 NGOs, foundations, UN agencies, and education organisations that support learning in Nigeria or Africa. It is a research file for partnership outreach, not an endorsement by the listed organisations.',
        'Each organisation also has a tailored SmartEdu Hub proposal in Documents, modelled on the Cuppy Foundation (Florence Otedola) competition-sponsorship format. Open the matching proposal and download DOCX.',
        'Contacts were compiled in September 2026 from public websites and directories. Switchboards, partnership inboxes, and office addresses change. Verify email, phone, and the correct partnership channel before sending.',
        'Humanitarian and UN agencies are included because they fund or implement education. Their proposals are written as technical/partnership conversations, not as casual CSI title-sponsorship asks.',
      ],
    },
  ]

  orgs.forEach((org, index) => {
    const n = String(index + 1).padStart(2, '0')
    slides.push({
      id: `ngo-dir-${org.slug}`,
      layout: 'bullets',
      chapter: `${index + 1}. ${org.shortName}`,
      title: `${index + 1}. ${org.name}`,
      icon: 'Building2',
      bullets: [
        `Category: ${org.category}`,
        `Attention: ${org.attention}`,
        `Email: ${org.email}`,
        `Phone: ${org.phone}`,
        `Address: ${org.address} (${org.city})`,
        `Website: ${org.website}`,
        `Proposal document: ${ngoProposalTitle(org)}`,
      ],
      notes: `Directory entry ${n}`,
    })
  })

  return {
    slides,
    currentIndex: 0,
    seedRevision: EDUCATION_NGO_SEED_REVISION,
    meta: {
      brand: 'Accessible Publishers Limited',
      author: 'Gbadega Adedapo',
      degree: 'MD/CEO',
      date: 'September 2026',
      kind: 'document',
      editorView: 'document',
      documentFont: 'Calibri',
      subject: 'Education NGOs and Organisations Directory — Top 50 Contacts',
    },
  }
}
