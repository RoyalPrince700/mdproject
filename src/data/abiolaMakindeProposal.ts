import type { PresentationState, Slide } from '../types/slide'
import { ekitiProposal } from './ekitiProposal'

export const MAKINDE_DOCUMENT_ID = 'smeh-makinde-proposal'
export const MAKINDE_DOCUMENT_TITLE =
  'SmartEdu Hub Proposal to Hon. Dr. Abiola Makinde (Ondo East/Ondo West)'
export const MAKINDE_SEED_REVISION = 1

const LETTER_DATE = '5th October 2026'

const coverLetter = [
  'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, for the consideration of Hon. Dr. Abiola Makinde, Member of the House of Representatives for the Ondo East/Ondo West Federal Constituency, as a practical solution for modernising basic education in the public schools of Ondo East and Ondo West Local Government Areas.',
  'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning solutions, and the development of quality educational materials for schools and institutions across Nigeria. Since our establishment in 1996, we have remained committed to supporting educational advancement through curriculum-aligned content, digital innovation, and teacher development initiatives.',
  'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025 by Customers’ Choice Quality Awards. This recognition underscores our commitment to reinventing education delivery through publishing excellence, education innovation, and digital solutions.',
  'We are ISO 9001 certified, with a quality management system that governs editorial review, production, digital product assurance, and partner delivery so educational materials and SmartEdu Hub services meet consistent, documented standards.',
  'We recognise Your Honour’s record of service to this constituency and to education: as Caretaker Chairman of Ondo West Local Government, as a board member of the National Commission for Mass Literacy, Adult and Non-Formal Education, and through your work in the National Assembly, with other members, to facilitate the upgrade of Adeyemi College of Education, Ondo, to a Federal University of Education. SmartEdu Hub is designed to support that commitment by giving learners curriculum-aligned digital content, giving teachers practical classroom tools, and giving school leaders a clear view of attendance, assessment, and performance across both local government areas of the constituency.',
  'This proposal presents SmartEdu Hub as the learning, assessment, school-management, and reporting layer that can turn a constituency education intervention into measurable classroom use, teacher productivity, learner outcomes, and school-level data Your Honour can follow.',
  'A key strength of Accessible Publishers Limited is that our digital products are developed internally by our Technology and Digital team, working closely with our Editorial, Learning and Development, Media, Marketing, Distribution, and Administration teams. This gives us strong control over product development, localisation, implementation, support, and continuous improvement.',
  'We have also developed and implemented a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch. This demonstrates practical experience in building and deploying education technology solutions at institutional and government scale.',
  'We have already completed the Accessible Summer Competition on SmartEdu Hub, a free national contest for JSS 1–JSS 3 students held in celebration of Accessible Publishers @30. The body of this proposal sets out that exercise.',
  'We would be honoured to present SmartEdu Hub to Your Honour, school leaders in Ondo East and Ondo West, and designated technical stakeholders at your convenience.',
]

function remapIds(value: unknown, key?: string): unknown {
  if (typeof value === 'string') {
    if (key === 'id' && value.startsWith('ekiti-')) {
      return `makinde-${value.slice('ekiti-'.length)}`
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

function replaceExact(root: PresentationState, from: string, to: string) {
  let hits = 0
  const walk = (value: unknown): unknown => {
    if (typeof value === 'string') {
      if (!value.includes(from)) return value
      hits += 1
      return value.replaceAll(from, to)
    }
    if (Array.isArray(value)) return value.map((item) => walk(item))
    if (value && typeof value === 'object') {
      const out: Record<string, unknown> = {}
      for (const [key, child] of Object.entries(value)) out[key] = walk(child)
      return out
    }
    return value
  }
  const next = walk(root) as PresentationState
  if (hits === 0) {
    throw new Error(`Makinde proposal is missing expected text: ${from.slice(0, 140)}`)
  }
  return next
}

function slideById(proposal: PresentationState, id: string) {
  const slide = proposal.slides.find((item) => item.id === id)
  if (!slide) throw new Error(`Missing slide ${id}`)
  return slide
}

function buildMakindeProposal(): PresentationState {
  let proposal = remapIds(structuredClone(ekitiProposal)) as PresentationState

  const pairs: Array<[string, string]> = [
    [
      'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year by Customers’ Choice Quality Awards. With a national footprint, a staff strength of about 250 people, and deep understanding of the realities of Nigerian public schools, we are positioned to support Ekiti State with solutions that are both locally grounded and institutionally scalable.',
      'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year by Customers’ Choice Quality Awards. With a national footprint, a staff strength of about 250 people, and deep understanding of the realities of Nigerian public schools, we are positioned to support schools in Ondo East and Ondo West with solutions that are both locally grounded and ready for constituency use.',
    ],
    [
      'We do not install software and disappear. We invest in the human infrastructure — training teachers, building administrator confidence, and creating sustainable internal champions for digital transformation across Ekiti State.',
      'We do not install software and disappear. We invest in the human infrastructure — training teachers, building administrator confidence, and creating sustainable internal champions for digital transformation across Ondo East and Ondo West.',
    ],
    [
      'Our proposal is structured around three core deliverables tailored to the basic needs of schools. Each component can be deployed independently, but the full power of the platform is realised when all three work together, sharing data, student profiles, and performance insights seamlessly across Ekiti State.',
      'Our proposal is structured around three core deliverables tailored to the basic needs of schools. Each component can be deployed independently, but the full power of the platform is realised when all three work together, sharing data, student profiles, and performance insights seamlessly across Ondo East and Ondo West.',
    ],
    [
      'An integrated platform for managing student records, attendance, staff deployment, examinations, parent communication, finance, and real-time reporting for SUBEB and state officials.',
      'An integrated platform for managing student records, attendance, staff deployment, examinations, parent communication, finance, and real-time reporting for school leaders and the Honourable Member’s constituency team.',
    ],
    [
      'The School Management System is the administrative backbone of SmartEdu Hub. It is designed to eliminate paperwork, improve data accuracy, and give school leaders, SUBEB officials, and state policymakers real-time insight into school performance across Ekiti State.',
      'The School Management System is the administrative backbone of SmartEdu Hub. It is designed to eliminate paperwork, improve data accuracy, and give school leaders and the Honourable Member’s office real-time insight into school performance across Ondo East and Ondo West.',
    ],
    [
      'Mobile portal for parents to access attendance, results, and announcements, plus a state-wide dashboard for SUBEB and education officials filterable by school, zone, or LGA.',
      'Mobile portal for parents to access attendance, results, and announcements, plus a constituency dashboard filterable by school or local government area.',
    ],
    [
      'Beyond the three core deliverables, SmartEdu Hub brings administration, digital learning, artificial intelligence, communication, finance, assessments, and student engagement together in one modern platform designed to help Ekiti schools thrive in a digital world.',
      'Beyond the three core deliverables, SmartEdu Hub brings administration, digital learning, artificial intelligence, communication, finance, assessments, and student engagement together in one modern platform designed to help schools in Ondo East and Ondo West thrive in a digital world.',
    ],
    [
      'Role-based access control (RBAC): granular permission management ensures that each user — from a class teacher to a SUBEB director or state education commissioner — sees precisely the data relevant to their role.',
      'Role-based access control (RBAC): granular permission management ensures that each user — from a class teacher to a school head or the Honourable Member’s constituency team — sees precisely the data relevant to their role.',
    ],
    [
      'SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform, designed to help schools simplify administration, improve teaching, enhance student performance, and prepare learners for the future from one secure environment. For Ekiti State, it offers a practical way to modernise educational infrastructure, improve learning outcomes at scale, and give administrators real-time visibility into performance across schools in all 16 LGAs.',
      'SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform, designed to help schools simplify administration, improve teaching, enhance student performance, and prepare learners for the future from one secure environment. For Ondo East and Ondo West, it offers a practical way to modernise learning and school records, improve examination readiness, and give the Honourable Member and school leaders a clear view of performance across both local government areas.',
    ],
    [
      'Unlike traditional school management software that focuses only on administration, SmartEdu Hub combines school operations, digital learning, artificial intelligence, communication, finance, assessments, and student engagement into one seamless ecosystem. We propose a phased state-wide adoption beginning with needs assessment and pilot schools, followed by teacher training, SUBEB onboarding, full rollout across LGAs, and continuous monitoring and support.',
      'Unlike traditional school management software that focuses only on administration, SmartEdu Hub combines school operations, digital learning, artificial intelligence, communication, finance, assessments, and student engagement into one seamless ecosystem. We propose a phased constituency adoption beginning with needs assessment and pilot schools in Ondo town and Ondo East, followed by teacher training, onboarding of school leaders, coverage of both local government areas, and continuous monitoring and support.',
    ],
    [
      'Structured refresher training for teachers and administrators every six months, with ad-hoc sessions available for new staff joiners, ensures sustainable adoption across Ekiti State schools.',
      'Structured refresher training for teachers and administrators every six months, with ad-hoc sessions available for new staff joiners, ensures sustainable adoption across schools in Ondo East and Ondo West.',
    ],
    [
      'State-wide analytics dashboard filterable by school, zone, or LGA for evidence-based policy decisions.',
      'A constituency dashboard filterable by school or local government area, so progress in Ondo East and Ondo West can be reviewed in one place.',
    ],
  ]

  for (const [from, to] of pairs) proposal = replaceExact(proposal, from, to)

  const title = slideById(proposal, 'makinde-01')
  title.title = 'Proposal for the Adoption of\nSmartEdu Hub Digital Solutions'
  title.subtitle =
    'Learning Management and School Management System for basic education in the Ondo East/Ondo West Federal Constituency'
  title.footer =
    'Submitted to Hon. Dr. Abiola Makinde\nMember, House of Representatives, Ondo East/Ondo West Federal Constituency\nAccessible Publishers Limited · 5th October 2026'
  title.notes =
    'Introduce SmartEdu Hub as a locally built education platform for schools in Ondo East and Ondo West, with a clear request to the Honourable Member.'

  const letterOpen = slideById(proposal, 'makinde-02')
  letterOpen.bullets = [
    coverLetter[0],
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning, and curriculum-aligned materials. Established in 1996, we support schools through content, digital innovation, and teacher development.',
    coverLetter[2],
    coverLetter[3],
    'We recognise Your Honour’s record of service to this constituency and to education, including your tenure as Caretaker Chairman of Ondo West Local Government and your service on the board of the National Commission for Mass Literacy, Adult and Non-Formal Education.',
  ]

  const letterClose = slideById(proposal, 'makinde-02b')
  letterClose.bullets = [
    'Your work in the National Assembly, with other members, to facilitate the upgrade of Adeyemi College of Education, Ondo, to a Federal University of Education sits in the same tradition. SmartEdu Hub gives learners curriculum-aligned digital content, gives teachers practical classroom tools, and gives school leaders a clear view of attendance, assessment, and performance across both local government areas.',
    'Our digital products are developed internally by our Technology and Digital team, working with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. This gives us control over localisation, implementation, support, and improvement.',
    'We have developed a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
    coverLetter[8],
    coverLetter[9],
  ]

  const section = slideById(proposal, 'makinde-03')
  section.chapter = 'SmartEdu Hub × Ondo East/Ondo West'
  section.subtitle = 'Platform, constituency adoption, and request'

  const plan = slideById(proposal, 'makinde-10')
  plan.bullets = [
    'SmartEdu Hub proposes a phased implementation so adoption, training, and results can be followed across schools in Ondo East and Ondo West.',
  ]
  plan.frameworkBlocks = [
    {
      label: 'Phase 1: Mobilisation',
      text: 'Needs assessment, school baseline data capture, and an infrastructure readiness review, beginning with schools in Ondo town and Ondo East, and an understanding with the Honourable Member’s office.',
      icon: 'ClipboardList',
    },
    {
      label: 'Phase 2: Deployment',
      text: 'Practical rollout of SmartEdu Hub in the pilot schools, with device readiness checks, platform configuration, and initial content deployment.',
      icon: 'Laptop',
    },
    {
      label: 'Phase 3: Training',
      text: 'Training of headteachers and teachers on all platform modules, including responsible use of AI-assisted features in the classroom.',
      icon: 'Users',
    },
    {
      label: 'Phase 4: Constituency rollout',
      text: 'Coverage of participating schools across Ondo East and Ondo West, technical support, performance monitoring, quarterly reviews with the Honourable Member’s office, and refresher training.',
      icon: 'TrendingUp',
    },
  ]

  const relevance = slideById(proposal, 'makinde-11')
  relevance.chapter = '7. Relevance to Ondo East/Ondo West'
  relevance.title = 'Why SmartEdu Hub is Relevant to Ondo East/Ondo West'
  relevance.leftTitle = 'Constituency education priority'
  relevance.leftBullets = [
    'Strengthen learning in the public schools of Ondo East and Ondo West.',
    'Build on the constituency’s grammar-school and teacher-education tradition, including Adeyemi Federal University of Education, Ondo.',
    'Give the Honourable Member and school leaders a clear view of attendance, assessment, and learner progress.',
    'Support youth opportunity with examination readiness for BECE, WAEC, NECO, and JAMB.',
    'Keep lessons available where power and internet are not continuous.',
  ]
  relevance.rightTitle = 'SmartEdu Hub contribution'
  relevance.rightBullets = [
    'One integrated platform for learning, assessment, administration, communication, and finance.',
    'NERDC-aligned iBooks, video lessons, AI tutor, and past questions for WAEC, NECO, JAMB, BECE, and NCEE.',
    'A constituency dashboard filterable by school or local government area, so progress in Ondo East and Ondo West can be reviewed in one place.',
    'Paperless attendance, results, report cards, and parent communication.',
    'Locally developed, field-tested, and supported by a Nigerian education company with government deployment experience.',
  ]

  const support = slideById(proposal, 'makinde-13')
  const coordinator = support.frameworkBlocks?.[0]
  if (!coordinator) throw new Error('Missing support coordinator block')
  coordinator.label = 'Constituency coordinator'
  coordinator.text =
    'A dedicated SmartEdu Hub representative serving schools in Ondo East and Ondo West, and acting as the relationship manager for the Honourable Member’s office.'
  const reviews = support.frameworkBlocks?.[3]
  if (!reviews) throw new Error('Missing quarterly review block')
  reviews.text =
    'Formal quarterly performance review meetings with the Honourable Member’s office and participating school leaders to assess adoption, surface issues, and agree the next improvements.'

  const commercial = slideById(proposal, 'makinde-14')
  commercial.bullets = [
    'SmartEdu Hub offers flexible and transparent pricing that can be shaped to a constituency education project, a school-by-school start, or coverage of both local government areas.',
    'Pricing can be structured per school or for Ondo East and Ondo West together, with a phased rollout that follows the Honourable Member’s constituency programme and the readiness of participating schools.',
    'We welcome the opportunity to discuss commercial terms with Your Honour and your designated officers at a mutually convenient time.',
  ]

  const request = slideById(proposal, 'makinde-15')
  request.title = 'Request to Hon. Dr. Abiola Makinde'
  request.bullets = [
    'We respectfully invite Hon. Dr. Abiola Makinde to consider SmartEdu Hub as the digital learning, school-management, and reporting platform for a basic education intervention across the Ondo East/Ondo West Federal Constituency. We would welcome the opportunity to present the full solution and show how it can support the schools and young people of the constituency.',
    'We propose: a live demonstration of the platform to Your Honour; a pilot in selected schools in Ondo town and Ondo East; phased coverage of participating schools in both local government areas; and a working session with your constituency team and school leaders to agree the first steps.',
  ]

  const conclusion = slideById(proposal, 'makinde-16')
  conclusion.bullets = [
    'SmartEdu Hub is not a promise of future capability. It is a working, proven, locally developed platform that has demonstrated its ability to engage students, empower teachers, relieve administrators, and give decision-makers the data they need to lead with confidence. It is built for the real world — for schools with intermittent power, for teachers at all levels of digital comfort, and for learners who deserve the best that educational technology can offer.',
    'We respect the weight of the decision before Your Honour and are committed to earning your confidence through transparency, demonstration, and measurable results. Adoption of SmartEdu Hub would give Ondo East and Ondo West a structured way to strengthen classroom learning, teacher capacity, examination readiness, and school records across the federal constituency.',
  ]

  proposal.seedRevision = MAKINDE_SEED_REVISION
  proposal.meta = {
    brand: 'Accessible Publishers Limited',
    author: 'Gbadega Adedapo',
    degree: 'MD/CEO',
    date: LETTER_DATE,
    letterDate: LETTER_DATE,
    kind: 'proposal',
    editorView: 'document',
    documentFont: 'Arial',
    recipient: 'Hon. Dr. Abiola Makinde',
    recipientOrg:
      'Member, House of Representatives, Ondo East/Ondo West Federal Constituency',
    recipientAddress: 'National Assembly Complex, Three Arms Zone, Abuja, Nigeria',
    subject:
      'Proposal for the Adoption of SmartEdu Hub Digital Solutions for Basic Education in the Ondo East/Ondo West Federal Constituency',
    website: 'www.smarteduhub.ng',
    senderAddress:
      '121/123, The Knowledge Hub,\nObafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State.',
    coverLetter,
    signOff: [
      'Yours faithfully,',
      'Gbadega Adedapo',
      'MD/CEO',
      'For: Accessible Publishers Limited',
    ],
  }

  const blob = JSON.stringify(proposal)
  const banned = [
    'Ekiti',
    '16 LGA',
    '16 Local',
    'Ministry of Education',
    '· August 2026',
    '20th August 2026',
    'Honourable Commissioner',
    'Ado-Ekiti',
    'state-wide',
  ]
  const found = banned.find((term) => blob.includes(term))
  if (found) {
    throw new Error(`Makinde proposal still contains “${found}”`)
  }
  if (!blob.includes('Hon. Dr. Abiola Makinde') || !blob.includes(LETTER_DATE)) {
    throw new Error('Makinde proposal is missing the addressee or letter date')
  }
  return proposal
}

export const makindeProposal: PresentationState = buildMakindeProposal()

export const makindeProposalSlides: Slide[] = makindeProposal.slides
