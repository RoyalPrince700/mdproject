import type { PresentationState, Slide } from '../types/slide'

export const CUPPY_DOCUMENT_ID = 'smeh-cuppy-proposal'
export const CUPPY_DOCUMENT_TITLE =
  'SmartEdu Hub Proposal to Florence Otedola (Cuppy Foundation)'
export const CUPPY_SEED_REVISION = 5

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

export const CUPPY_PROPOSAL_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'September 2026',
  letterDate: '3rd September 2026',
  kind: 'proposal',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'Florence Ifeoluwa Otedola (DJ Cuppy)',
  recipientOrg: 'The Cuppy Foundation',
  recipientAddress: 'London · Lagos · cuppyfoundation.org',
  subject:
    'Proposal for Strategic Partnership with the Cuppy Foundation on Sponsorship of SmartEdu Hub National Academic Competitions, Inclusive Digital Learning, and Youth Education Impact',
  website: 'www.smarteduhub.ng',
  senderAddress:
    '121/123, The Knowledge Hub,\nObafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State.',
  coverLetter: [
    'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, and to propose a strategic partnership with Florence Ifeoluwa Otedola and the Cuppy Foundation focused on sponsorship of national academic competitions and inclusive education access for Nigerian learners.',
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning solutions, and the development of quality educational materials for schools and institutions across Nigeria. Since our establishment in 1996, we have remained committed to supporting educational advancement through curriculum-aligned content, digital innovation, and teacher development initiatives.',
    'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025. This recognition underscores our commitment to reinventing education delivery through publishing excellence, education innovation, and digital solutions.',
    'Accessible Publishers Limited is ISO 9001 certified. Our quality management system governs how we develop, review, produce, and support educational content and digital solutions, so partners can rely on consistent quality, documented processes, and continuous improvement across publishing, printing, and SmartEdu Hub delivery.',
    'We have followed with deep admiration your work as an international DJ, philanthropist, and youth advocate — and especially the Cuppy Foundation’s portfolio approach to Sustainable Development Goal 4: inclusive and equitable quality education. Your long-standing partnerships with Save the Children, your support for girls’ education and learners with disabilities, your hardship funds for African students at leading universities, and your role as the first international ambassador for His Majesty King Charles III’s The King’s Trust all demonstrate a clear, consistent commitment to expanding opportunity for young people.',
    'This proposal invites the Cuppy Foundation to sponsor SmartEdu Hub’s national academic competitions — a platform feature through which students compete for cash prizes, laptops, educational gifts, vacation trips, and national recognition. Sponsorship would give the Foundation a highly visible, youth-centred education vehicle that motivates excellence, rewards effort, and reaches learners across Nigerian schools. Alongside competition sponsorship, SmartEdu Hub also hosts AI Books and the Accessible Publishers educational book catalogue, giving sponsored learners continuous access to curriculum-aligned digital textbooks and intelligent tutoring support.',
    'A key strength of Accessible Publishers Limited is that SmartEdu Hub is developed internally by our Technology and Digital team, working closely with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. We have also delivered a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
    'We would be honoured to present SmartEdu Hub to you and the Cuppy Foundation team, and to explore a competition-sponsorship partnership that amplifies youth empowerment, inclusive learning, and measurable classroom impact across Nigeria.',
  ],
  signOff: [
    'Yours faithfully,',
    'Gbadega Adedapo',
    'MD/CEO',
    'For: Accessible Publishers Limited',
  ],
}

export const cuppyProposalSlides: Slide[] = [
  {
    id: 'cuppy-01',
    layout: 'title',
    title:
      'Proposal for Strategic Partnership on\nSmartEdu Hub Digital Solutions',
    subtitle:
      'Competition sponsorship, AI Books, and inclusive digital learning with the Cuppy Foundation',
    footer:
      'Submitted to Florence Ifeoluwa Otedola · The Cuppy Foundation\nAccessible Publishers Limited · September 2026',
    notes:
      'Lead with competition sponsorship as the primary ask, then AI Books and Accessible Publishers catalogue as continuous learning support.',
  },
  {
    id: 'cuppy-02',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction',
    icon: 'Handshake',
    bullets: [
      'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, and to propose a strategic partnership with Florence Ifeoluwa Otedola and the Cuppy Foundation focused on sponsorship of national academic competitions and inclusive education access for Nigerian learners.',
      'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company established in 1996, with deep expertise in curriculum-aligned educational publishing, digital learning, and school support across Nigeria.',
      'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025.',
      'We are ISO 9001 certified, with a quality management system that governs editorial review, production, digital product assurance, and partner delivery so educational materials and SmartEdu Hub services meet consistent, documented standards.',
      'We admire the Cuppy Foundation’s commitment to inclusive and equitable quality education — including support for girls’ education, learners with disabilities, displaced children, and African students facing hardship.',
    ],
    notes:
      'These paragraphs become the opening letter in the Word download.',
  },
  {
    id: 'cuppy-02b',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction (continued)',
    icon: 'FileText',
    bullets: [
      'This proposal invites the Cuppy Foundation to sponsor SmartEdu Hub’s national academic competitions, through which students compete for cash prizes, laptops, educational gifts, vacation trips, and national recognition — while also accessing AI Books and Accessible Publishers titles on the platform.',
      'SmartEdu Hub is developed internally by Accessible Publishers Limited. We have delivered a digital education solution for Abia State, and more than 30 schools have adopted the platform within three months of launch.',
      'We would be honoured to present SmartEdu Hub to you and the Cuppy Foundation team at your convenience.',
    ],
  },
  sectionSlide('cuppy-03', 'The Proposal', 'SmartEdu Hub x Cuppy Foundation', {
    subtitle: 'Competition sponsorship, learning content, and youth impact',
  }),
  {
    id: 'cuppy-04',
    layout: 'bullets',
    chapter: '1. Executive Summary',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform. Beyond administration and classroom tools, it runs national academic competitions that inspire excellence and reward outstanding learners with cash prizes, devices, educational gifts, vacation trips, and national rankings.',
      'Accessible Publishers Limited proposes that the Cuppy Foundation become a named sponsor of SmartEdu Hub competitions — creating a high-visibility education initiative aligned with the Foundation’s focus on youth empowerment, inclusive education, and lifelong learning opportunities for all.',
      'Sponsorship would be reinforced by platform learning assets already available on SmartEdu Hub: AI Books (digital textbooks with an intelligent tutor) and the Accessible Publishers educational book catalogue — giving competition participants and partner schools continuous access to curriculum-aligned content, not only a one-day prize moment.',
    ],
  },
  {
    id: 'cuppy-05',
    layout: 'bullets',
    chapter: '2. About Florence Otedola',
    title: 'About Florence Otedola and the Cuppy Foundation',
    icon: 'ShieldCheck',
    bullets: [
      'Florence Ifeoluwa Otedola — professionally known as DJ Cuppy — is an internationally recognised DJ, producer, and philanthropist whose advocacy centres on equal opportunity for children and young people across Africa.',
      'In 2018 she founded the Cuppy Foundation to empower youth through education, using a portfolio approach to Sustainable Development Goal 4: inclusive and equitable quality education and lifelong learning for all. The Foundation partners with organisations including Save the Children and has supported girls’ education, child protection, and pathways for persons with disabilities.',
      'Cuppy serves as the first international ambassador for His Majesty King Charles III’s The King’s Trust, advocating for youth empowerment and social equity. The Foundation has also launched hardship funds supporting African students at Oxford University, New York University, and King’s College London.',
      'This proposal is tailored to that mission: a competition-sponsorship partnership that motivates learners nationally, celebrates excellence publicly, and pairs recognition with lasting digital learning tools.',
    ],
  },
  {
    id: 'cuppy-06',
    layout: 'bullets',
    chapter: '3. About Accessible Publishers',
    title: 'About Accessible Publishers Limited',
    icon: 'Building2',
    bullets: [
      'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. The company has built a strong reputation across educational publishing, curriculum resources, school support materials, and technology-enabled learning solutions for schools, institutions, government programmes, and corporate partners.',
      'SmartEdu Hub is developed internally by our Technology and Digital team, with input from Editorial, Learning and Development, Media, Production, Marketing, Distribution, Human Resources, and Administration. This gives us direct control over curriculum alignment, localisation, implementation, support, and continuous improvement.',
      'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year. We have implemented a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
      'The company is ISO 9001 certified. Quality assurance is built into how we write, review, print, and digitise learning materials, and into how we build, test, and support SmartEdu Hub — giving sponsors a partner whose processes, not only its promises, are independently standardised.',
    ],
  },
  {
    id: 'cuppy-06b',
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
        text: 'For the Cuppy Foundation, ISO-backed quality management means competition operations, learning content, and impact reporting are run with traceable processes, clear ownership, and continuous improvement after each season.',
        icon: 'ClipboardList',
      },
    ],
  },
  {
    id: 'cuppy-07',
    layout: 'cards',
    chapter: '4. Partnership Focus',
    title: 'Why Competition Sponsorship Fits the Cuppy Foundation',
    icon: 'Goal',
    bullets: [
      'The Cuppy Foundation invests in education that expands opportunity — especially for girls, learners with disabilities, and young people who need visible pathways to succeed. National academic competitions create exactly that kind of pathway: they turn classroom effort into public recognition, motivate peers, and give sponsors a clear story of impact.',
      'SmartEdu Hub competitions allow students to compete nationally and earn recognition through cash prizes, laptops, educational gifts, vacation trips, and national rankings. A Cuppy Foundation sponsorship can brand seasons or categories of these competitions, co-design prize packages, and spotlight inclusive excellence — including categories or outreach that prioritise girls and learners from underserved communities.',
      'Unlike one-off donations of devices or awards alone, competition sponsorship on SmartEdu Hub pairs the celebration of winners with everyday learning: AI Books, Accessible Publishers titles, past questions, CBT practice, and school performance tracking remain available to participants long after the competition ends.',
    ],
  },
  {
    id: 'cuppy-08',
    layout: 'twoColumn',
    chapter: '4. Partnership Focus',
    title: 'Mission Alignment',
    icon: 'Handshake',
    leftTitle: 'Cuppy Foundation priorities',
    leftBullets: [
      'Inclusive and equitable quality education (SDG 4).',
      'Youth empowerment and social equity.',
      'Support for girls’ education and learners with disabilities.',
      'Visible, accountable education impact through partners.',
      'Inspiration and opportunity for African young people.',
    ],
    rightTitle: 'What SmartEdu Hub offers',
    rightBullets: [
      'National academic competitions with prizes and rankings.',
      'AI Books with interactive tutoring support.',
      'Accessible Publishers curriculum-aligned book catalogue.',
      'CBT, past questions, and exam preparation tools.',
      'Usage and outcome reporting for foundation accountability.',
    ],
  },
  {
    id: 'cuppy-09',
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
        text: 'CBT and past questions (WAEC, NECO, JAMB, BECE, NCEE), attendance, results, communication, and dashboards that help schools and sponsors track engagement and progress.',
        icon: 'Monitor',
      },
    ],
  },
  {
    id: 'cuppy-10',
    layout: 'framework',
    chapter: '6. Proposed Sponsorship Scope',
    title: 'Proposed Sponsorship Scope',
    icon: 'GitBranch',
    frameworkBlocks: [
      {
        label: '1. Competition title sponsorship',
        text: 'Name and brand a SmartEdu Hub national competition season or category as a Cuppy Foundation sponsored series, with co-branded communications across partner schools.',
        icon: 'Goal',
      },
      {
        label: '2. Prize and reward package',
        text: 'Agree prize categories — cash awards, devices, educational gifts, learning trips, and recognition — sized to Foundation priorities and youth-empowerment messaging.',
        icon: 'BadgeDollarSign',
      },
      {
        label: '3. Learning access for participants',
        text: 'Extend AI Books and Accessible Publishers catalogue access to competition cohorts and selected partner schools so sponsorship builds lasting study habits, not only prize moments.',
        icon: 'Library',
      },
      {
        label: '4. Inclusive outreach',
        text: 'Design outreach and optional competition tracks that amplify girls’ participation and access for learners from underserved communities — consistent with Cuppy Foundation thematic focus.',
        icon: 'Users',
      },
    ],
  },
  {
    id: 'cuppy-11',
    layout: 'twoColumn',
    chapter: '7. Mutual Benefits',
    title: 'Mutual Benefits',
    icon: 'Sparkles',
    leftTitle: 'Benefits to the Cuppy Foundation',
    leftBullets: [
      'A youth-facing national competition platform with clear branding and storytelling.',
      'Measurable participation, engagement, and prize-outcome reporting.',
      'Alignment with SDG 4, girls’ education, and inclusive learning priorities.',
      'Association with a locally built, ISO 9001-certified Nigerian edtech and publishing ecosystem.',
      'Continuous learning value through AI Books and Accessible Publishers titles.',
    ],
    rightTitle: 'Benefits to SmartEdu Hub',
    rightBullets: [
      'Credible philanthropic sponsorship that elevates competition prestige.',
      'Stronger motivation and adoption among partner schools and learners.',
      'Shared visibility with a respected African youth education advocate.',
      'Deeper use of AI Books and the Accessible Publishers catalogue.',
      'A model partnership for other foundations and CSI programmes.',
    ],
  },
  {
    id: 'cuppy-12',
    layout: 'bullets',
    chapter: '8. Impact Model',
    title: 'From Sponsorship to Classroom Impact',
    icon: 'TrendingUp',
    bullets: [
      'Many education interventions stop at inspiration. SmartEdu Hub competitions are designed to convert inspiration into practice: students prepare using AI Books, Accessible Publishers titles, past questions, and CBT tools; they compete for recognition; and schools see engagement through platform analytics.',
      'For the Cuppy Foundation, this creates a closed-loop impact story — awareness, participation, preparation, performance, prizes, and continued learning — that can be communicated to partners, donors, and the public with evidence.',
      'Optional pilot design: one competition season across selected SmartEdu Hub schools; Cuppy Foundation title sponsorship; co-branded launch; prize fulfilment; and a short impact brief covering participation numbers, subject performance indicators, and learner stories — including girls and underserved cohorts.',
    ],
  },
  {
    id: 'cuppy-13',
    layout: 'framework',
    chapter: '9. Implementation',
    title: 'Implementation Activities',
    icon: 'ClipboardList',
    frameworkBlocks: [
      {
        label: 'Presentation and alignment',
        text: 'Present SmartEdu Hub competitions, AI Books, and Accessible Publishers catalogue to Florence Otedola and the Cuppy Foundation team; agree sponsorship theme, audience, and prize philosophy.',
        icon: 'Presentation',
      },
      {
        label: 'Season design',
        text: 'Define competition calendar, subjects or tracks, eligibility, inclusive outreach rules, branding guidelines, and prize logistics.',
        icon: 'ClipboardList',
      },
      {
        label: 'Launch and engagement',
        text: 'Co-branded launch across partner schools; learner onboarding to AI Books and Accessible Publishers titles; competition run with live rankings and communication support.',
        icon: 'TrendingUp',
      },
      {
        label: 'Report and renew',
        text: 'Deliver participation and outcome report; capture learner stories; review sponsorship renewal or scale-up for subsequent seasons.',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'cuppy-14',
    layout: 'bullets',
    chapter: '10. Request',
    title: 'Request to Florence Otedola and the Cuppy Foundation',
    icon: 'Mail',
    bullets: [
      'We respectfully invite Florence Ifeoluwa Otedola and the Cuppy Foundation to partner with Accessible Publishers Limited as title or category sponsors of SmartEdu Hub national academic competitions.',
      'We would welcome the opportunity to present SmartEdu Hub, demonstrate AI Books and the Accessible Publishers catalogue on the platform, and agree a pilot competition season with clear branding, prize design, inclusive outreach, and impact reporting.',
      'We are open to a flexible sponsorship model — single-season title sponsorship, multi-season partnership, prize endowment, or co-branded learner-access packages — that best fits the Cuppy Foundation’s education portfolio and youth-empowerment priorities.',
    ],
  },
  {
    id: 'cuppy-15',
    layout: 'bullets',
    chapter: '11. Conclusion',
    title: 'Conclusion',
    icon: 'Handshake',
    bullets: [
      'The Cuppy Foundation has shown that education sponsorship is most powerful when it expands dignity, access, and ambition for young people. SmartEdu Hub competitions offer a practical Nigerian vehicle for that ambition — national recognition, meaningful prizes, and continuous learning through AI Books and Accessible Publishers content.',
      'We respect the trust you have built with young people, partners, and global institutions, and we are committed to a partnership grounded in transparency, inclusion, and measurable outcomes. We would be honoured to work with you and the Cuppy Foundation to turn academic effort into celebration — and celebration into lasting learning.',
    ],
    footer:
      'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan\nSmartEduHub Accessible Digital Platform Team (SMEH)\nwww.smarteduhub.ng\nwww.accessiblepublishers.com',
    notes:
      'Close with the conclusion and institutional submission block.',
  },
]

export const cuppyProposal: PresentationState = {
  slides: cuppyProposalSlides,
  currentIndex: 0,
  seedRevision: CUPPY_SEED_REVISION,
  meta: CUPPY_PROPOSAL_META,
}
