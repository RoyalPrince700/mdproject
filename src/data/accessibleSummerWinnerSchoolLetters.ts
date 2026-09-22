import type { PresentationState, Slide } from '../types/slide'
import { DEFAULT_PROPOSAL_SENDER_ADDRESS } from '../theme/documentTheme'

export const ASC_WINNER_SCHOOL_PROPOSAL_SEED_REVISION = 2

type WinnerGender = 'female' | 'male'

export interface AscWinnerSchool {
  slug: string
  school: string
  shortName: string
  location: string
  student: string
  gender: WinnerGender
  classLabel?: string
  placeLabel: string
  placeShort: string
  prizeAmount: string
  prizeFigure: string
  schoolHook: string
  schoolPriorities: string[]
  adoptionFit: string[]
  localAngle: string
}

export const ASC_WINNER_SCHOOLS: AscWinnerSchool[] = [
  {
    slug: 'joy-prime',
    school: 'Joy Prime Model Secondary School',
    shortName: 'Joy Prime',
    location: 'Akwa Ibom State',
    student: 'Happiness John',
    gender: 'female',
    classLabel: 'a JSS 1 student',
    placeLabel: 'first place',
    placeShort: '1st Place',
    prizeAmount: 'One Million Naira (₦1,000,000)',
    prizeFigure: '₦1,000,000',
    schoolHook:
      'That a JSS 1 learner from Joy Prime Model Secondary School could rise to the national first prize tells us a great deal about the culture of reading, teaching, and honest effort you have built. We would be honoured to help that culture reach every classroom — not only the one outstanding student who has already shown what is possible.',
    schoolPriorities: [
      'Academic excellence recognised beyond the classroom.',
      'Strong Junior Secondary foundation for lifelong learning.',
      'Fair, transparent recognition of student effort.',
      'Modern tools that support teachers and school leaders.',
      'A platform that parents and proprietors can trust.',
    ],
    adoptionFit: [
      'Joy Prime has already proved, through Happiness John’s national first prize, that its learners can compete at the highest level on a digital stage.',
      'Adopting SmartEdu Hub would give every Joy Prime student the same practice environment, past-question tools, and AI Books that prepared a national champion — not only during a competition season, but every term.',
      'School management, parent communication, and bursary tools would sit beside learning, so excellence is organised across the whole school, not left to individual brilliance alone.',
    ],
    localAngle:
      'Akwa Ibom now stands at the top of a national Junior Secondary leaderboard through a Joy Prime student. Platform adoption would turn that moment into a standing academic advantage for the school.',
  },
  {
    slug: 'oasis',
    school: 'The Oasis Schools',
    shortName: 'The Oasis Schools',
    location: 'Ekpoma, Edo State',
    student: 'Agaga-Oamen Dave-Wisdom',
    gender: 'male',
    placeLabel: 'second place',
    placeShort: '2nd Place',
    prizeAmount: 'Five Hundred Thousand Naira (₦500,000)',
    prizeFigure: '₦500,000',
    schoolHook:
      'Ekpoma is now on the national academic map through a student of The Oasis Schools. The same habits that carried Dave-Wisdom onto that podium — reading, practice, and careful thinking — can be organised for every learner in your care if the school runs on the platform that hosted the competition.',
    schoolPriorities: [
      'Visible academic excellence for students in Edo State.',
      'Structured practice and exam readiness.',
      'Teacher support with digital content and assessments.',
      'Clear communication with parents.',
      'A modern school operating system that matches your results.',
    ],
    adoptionFit: [
      'The Oasis Schools produced a national second-place champion on SmartEdu Hub. That is living proof that your students, teachers, and school culture already fit the platform.',
      'Adoption would extend competition-grade practice, AI Books, CBT, and school administration to the whole Oasis community — so the next winner is not an exception, but a product of everyday systems.',
      'Parents and proprietors would gain one trusted place for attendance, results, fees, and academic progress.',
    ],
    localAngle:
      'A second-place national finish from Ekpoma is rare and valuable. SmartEdu Hub adoption would help The Oasis Schools protect and multiply that reputation.',
  },
  {
    slug: 'teko',
    school: 'Teko School',
    shortName: 'Teko School',
    location: 'Rivers State',
    student: 'Daniel Barry Monsigia',
    gender: 'male',
    placeLabel: 'joint third place',
    placeShort: '3rd Place (tie)',
    prizeAmount: 'Two Hundred and Fifty Thousand Naira (₦250,000)',
    prizeFigure: '₦250,000',
    schoolHook:
      'A Rivers State student standing among the national top three is a credit to Teko School. We want that credit to become a standing advantage: a school-wide system for practice, assessment, administration, and the next round of national competitions.',
    schoolPriorities: [
      'National recognition for Rivers State learners.',
      'Consistent academic practice and fair assessment.',
      'Efficient school administration and fee visibility.',
      'Teacher productivity and digital lesson support.',
      'Preparedness for BECE and senior examinations.',
    ],
    adoptionFit: [
      'Daniel Barry Monsigia’s joint third-place finish places Teko School among Nigeria’s strongest Junior Secondary schools in this contest.',
      'SmartEdu Hub is the same environment in which he practised and competed. Adopting it school-wide would give Teko a continuous pipeline of preparation, not a one-season spike.',
      'Administration, learning, parent communication, and competitions would sit in one secure stack — reducing WhatsApp fragmentation and paper scatter.',
    ],
    localAngle:
      'Rivers State earned a place on the national podium through Teko School. Platform adoption would help the school turn that pride into lasting operating strength.',
  },
  {
    slug: 'oritamefa',
    school: 'Oritamefa Baptist Model School',
    shortName: 'Oritamefa',
    location: 'Ibadan, Oyo State',
    student: 'Okunoye Mojolaoluwa Deborah',
    gender: 'female',
    placeLabel: 'joint third place',
    placeShort: '3rd Place (tie)',
    prizeAmount: 'Two Hundred and Fifty Thousand Naira (₦250,000)',
    prizeFigure: '₦250,000',
    schoolHook:
      'As an Ibadan school, you are neighbours to our headquarters. Mojolaoluwa’s national result is living proof that Oyo learners can compete — and win — on a digital stage. We would welcome the chance to walk your leadership through SmartEdu Hub in person at The Knowledge Hub, Oke-Ado, and to onboard Oritamefa as a flagship adopting school.',
    schoolPriorities: [
      'Excellence that reflects Ibadan and Oyo State pride.',
      'Faithful school values with modern academic tools.',
      'Strong Junior Secondary outcomes and exam readiness.',
      'Parent partnership and transparent school communication.',
      'A trusted local partner for digital school transformation.',
    ],
    adoptionFit: [
      'Oritamefa Baptist Model School produced a national joint third-place winner from Ibadan — proof that Oyo learners belong on a national digital stage.',
      'Because Accessible Publishers Limited is headquartered in Ibadan, adoption can include in-person onboarding, teacher training, and ongoing support at The Knowledge Hub, Oke-Ado.',
      'We invite Oritamefa to become a flagship SmartEdu Hub school: full SMS and LMS adoption, exam practice, parent tools, and continued competition pathways.',
    ],
    localAngle:
      'An Ibadan champion on a national podium is the strongest possible invitation to deepen a local partnership. We are ready to present and implement on site.',
  },
]

function pronouns(gender: WinnerGender) {
  return gender === 'female'
    ? { subject: 'she', object: 'her', possessive: 'her' }
    : { subject: 'he', object: 'him', possessive: 'his' }
}

function studentPhrase(school: AscWinnerSchool) {
  return school.classLabel
    ? `${school.student}, ${school.classLabel}`
    : school.student
}

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

export function ascWinnerSchoolProposalId(slug: string) {
  return `smeh-asc-winner-${slug}`
}

export function ascWinnerSchoolProposalTitle(school: AscWinnerSchool) {
  return `SmartEdu Hub Proposal to ${school.school}`
}

export const ASC_WINNER_SCHOOL_PROPOSAL_IDS = ASC_WINNER_SCHOOLS.map((school) =>
  ascWinnerSchoolProposalId(school.slug),
)

export function buildAscWinnerSchoolProposal(
  school: AscWinnerSchool,
): PresentationState {
  const p = school.slug
  const pr = pronouns(school.gender)
  const learner = studentPhrase(school)
  const subject = `Proposal for Adoption of SmartEdu Hub by ${school.school} — Building on ${school.student}’s Success in the Accessible Summer Competition`

  const coverLetter = [
    `We respectfully write to congratulate ${school.school} on the outstanding performance of ${learner} in the Accessible Summer Competition, and to formally propose that your school adopt SmartEdu Hub — the indigenous AI-powered school management and digital learning platform on which the competition was organised.`,
    `${school.student} earned ${school.placeLabel} and received ${school.prizeAmount}. Your school’s name now stands among the strongest Junior Secondary schools in this national contest. We are proud to place that achievement on record, and we write in the same spirit of partnership that made the honour possible.`,
    `We also thank the school formally for the role you played. To confirm eligibility, we requested an attestation form from the school. You kindly provided it, and that document enabled us to verify that ${school.student} is a bona fide student of ${school.school}. Without that cooperation, we could not have honoured ${pr.object} with the confidence and dignity the result deserved.`,
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company established in 1996 and headquartered in Ibadan. We were recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025, and we are ISO 9001 certified. SmartEdu Hub is developed in-house by Best Technology, our software subsidiary, working closely with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration.',
    `The Accessible Summer Competition was presented in celebration of Accessible Publishers @30. It was open free of charge to JSS 1–JSS 3 students nationwide, with over ₦2.2 million in prizes. From registration through the practice season to the Gold Stage final, every sitting was hosted on SmartEdu Hub, proctored and evidence-reviewed. On 18th September 2026 we held the prize-giving ceremony at The Knowledge Hub, Ibadan, and flew in our winners from across Nigeria — including ${school.student}.`,
    `${school.schoolHook}`,
    `This proposal therefore invites ${school.school} to adopt SmartEdu Hub as its school management and digital learning platform: administration, teaching, assessment, parent communication, finance, exam preparation, and future competitions — in one secure environment.`,
    'We would be honoured to present SmartEdu Hub to the Principal, proprietors, and relevant staff, agree a practical onboarding plan, and begin with the modules your school needs most.',
  ]

  const slides: Slide[] = [
    {
      id: `${p}-01`,
      layout: 'title',
      title: 'Proposal for Adoption of\nSmartEdu Hub Digital Solutions',
      subtitle: `Building on ${school.student}’s ${school.placeLabel} success · School management, digital learning, and academic excellence for ${school.shortName}`,
      footer: `Submitted to The Principal · ${school.school}\n${school.location}\nAccessible Publishers Limited · September 2026`,
      notes: `Comprehensive SMEH proposal inviting ${school.school} to adopt SmartEdu Hub after their student’s Accessible Summer Competition win.`,
    },
    {
      id: `${p}-02`,
      layout: 'bullets',
      chapter: 'Cover Letter',
      title: 'Letter of Introduction',
      icon: 'Handshake',
      bullets: coverLetter.slice(0, 4),
      notes: 'These paragraphs become the opening letter in the Word download.',
    },
    {
      id: `${p}-02b`,
      layout: 'bullets',
      chapter: 'Cover Letter',
      title: 'Letter of Introduction (continued)',
      icon: 'FileText',
      bullets: coverLetter.slice(4),
    },
    sectionSlide(
      `${p}-03`,
      'The Proposal',
      `SmartEdu Hub × ${school.shortName}`,
      {
        subtitle: 'Congratulations. Attestation. Adoption. Excellence.',
      },
    ),
    {
      id: `${p}-04`,
      layout: 'bullets',
      chapter: '1. Executive Summary',
      title: 'Executive Summary',
      icon: 'Target',
      bullets: [
        `SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform. It combines school operations, digital learning, artificial intelligence, communication, finance, assessments, and national academic competitions in one secure environment.`,
        `${school.school} has already experienced the platform’s competition layer at the highest level: ${learner} earned ${school.placeLabel} (${school.prizeFigure}) in the Accessible Summer Competition, which Accessible Publishers Limited hosted entirely on SmartEdu Hub.`,
        `We propose that ${school.school} adopt SmartEdu Hub school-wide — so the same environment that produced a national winner becomes everyday practice for enrolment, attendance, teaching, CBT, parent visibility, fees, and future competitions.`,
      ],
    },
    {
      id: `${p}-05`,
      layout: 'bullets',
      chapter: `2. About ${school.shortName}`,
      title: `Why ${school.school}`,
      icon: 'GraduationCap',
      bullets: [
        `${school.school} (${school.location}) is one of four schools whose students stood on the Accessible Summer Competition national podium. ${school.student} earned ${school.placeLabel} and received ${school.prizeAmount}.`,
        `The school’s cooperation was essential. When we requested an attestation form to confirm that ${school.student} was a bona fide student, ${school.shortName} provided it promptly — enabling fair verification and dignified award of the prize.`,
        school.localAngle,
        `This proposal is written to that relationship: not a cold introduction to a stranger school, but a formal invitation to deepen a proven partnership.`,
      ],
    },
    {
      id: `${p}-05b`,
      layout: 'framework',
      chapter: `2. About ${school.shortName}`,
      title: 'National Podium Result',
      icon: 'Goal',
      frameworkBlocks: [
        {
          label: school.placeShort,
          text: `${learner} · ${school.school}, ${school.location} · Prize: ${school.prizeFigure}.`,
          icon: 'Target',
        },
        {
          label: 'Platform',
          text: 'Accessible Summer Competition — registration, practice, and Gold Stage final hosted on SmartEdu Hub with proctoring and evidence review.',
          icon: 'Monitor',
        },
        {
          label: 'School role',
          text: 'Attestation form provided on request, confirming student identity and enabling prize verification.',
          icon: 'ClipboardList',
        },
        {
          label: 'Ceremony',
          text: 'Prize-giving held 18th September 2026 at The Knowledge Hub, Ibadan; winners flown in from across Nigeria.',
          icon: 'Landmark',
        },
      ],
    },
    {
      id: `${p}-06`,
      layout: 'bullets',
      chapter: '3. About Accessible Publishers',
      title: 'About Accessible Publishers Limited',
      icon: 'Building2',
      bullets: [
        'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. The company has built a strong reputation across educational publishing, curriculum resources, school support materials, and technology-enabled learning solutions.',
        'SmartEdu Hub is developed internally by Best Technology, our software and website-development subsidiary, with input from Editorial, Learning and Development, Media, Production, Marketing, Distribution, Human Resources, and Administration.',
        'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year. We have implemented a related digital education solution for Abia State, and more than 30 schools adopted SmartEdu Hub within three months of launch.',
        'The company is ISO 9001 certified. Quality assurance is built into how we write, review, print, and digitise learning materials, and into how we build, test, and support SmartEdu Hub.',
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
          text: 'Accessible Publishers Limited operates an ISO 9001 quality management system. Certification confirms that our work is planned, documented, reviewed, and improved against an internationally recognised standard.',
          icon: 'CircleCheck',
        },
        {
          label: 'Editorial and curriculum QA',
          text: 'Titles and digital content pass structured editorial review for accuracy, age-appropriateness, and curriculum alignment before they reach schools.',
          icon: 'BookOpen',
        },
        {
          label: 'Production and digital assurance',
          text: 'Print production, accessible formats, and SmartEdu Hub features are tested before release. Platform updates, competition scoring, learner data, and support processes follow documented controls.',
          icon: 'Monitor',
        },
        {
          label: 'School accountability',
          text: `For ${school.shortName}, ISO-backed quality management means onboarding, training, content, and support are run with traceable processes and continuous improvement.`,
          icon: 'ClipboardList',
        },
      ],
    },
    {
      id: `${p}-07`,
      layout: 'cards',
      chapter: '4. Why Adoption Fits',
      title: `Why SmartEdu Hub Fits ${school.shortName}`,
      icon: 'Goal',
      bullets: school.adoptionFit,
    },
    {
      id: `${p}-08`,
      layout: 'twoColumn',
      chapter: '4. Why Adoption Fits',
      title: 'Mission Alignment',
      icon: 'Handshake',
      leftTitle: `${school.shortName} priorities`,
      leftBullets: school.schoolPriorities,
      rightTitle: 'What SmartEdu Hub offers',
      rightBullets: [
        'School Management System — enrolment, attendance, timetable, results, staff, fees, reports.',
        'Learning Management System — Explore library, AI Books, assignments, lesson support.',
        'Exam preparation — WAEC, NECO, JAMB, BECE, NCEE past questions and CBT.',
        'Parent communication — attendance, results, fees in one trusted place.',
        'National academic competitions with prizes and rankings.',
      ],
    },
    {
      id: `${p}-09`,
      layout: 'framework',
      chapter: '5. SmartEdu Hub Offer',
      title: 'What the School Would Adopt',
      icon: 'Layers',
      frameworkBlocks: [
        {
          label: 'School Management System',
          text: 'Enrolment, attendance, timetable, results, staff records, fees, expenses, and management dashboards — replacing scattered paper and WhatsApp workflows.',
          icon: 'Laptop',
        },
        {
          label: 'Learning Management System',
          text: 'Explore digital library, NERDC-aligned AI Books with an in-text tutor, assignments, and teacher lesson support.',
          icon: 'BookOpen',
        },
        {
          label: 'Exam preparation / CBT',
          text: 'Organised past questions and timed mocks for WAEC, NECO, JAMB, BECE, and NCEE — the same practice culture that powered the Accessible Summer Competition.',
          icon: 'Monitor',
        },
        {
          label: 'Parents, finance, competitions',
          text: 'Parent visibility of attendance, results, and fees; bursary tools; and continued access to national academic competitions with cash prizes and rankings.',
          icon: 'Users',
        },
      ],
    },
    {
      id: `${p}-10`,
      layout: 'bullets',
      chapter: '6. Proof of Concept',
      title: 'Accessible Summer Competition as Proof',
      icon: 'TrendingUp',
      bullets: [
        'In celebration of Accessible Publishers @30, we presented the Accessible Summer Competition on SmartEdu Hub — open free to JSS 1–JSS 3 students nationwide, with over ₦2.2 million in prizes.',
        'Registration, practice, and the Gold Stage final were hosted digitally with proctoring and evidence review so results were earned fairly. Between registration and exam day, students received a full practice season to read widely, work through questions, and build exam confidence.',
        `Your student, ${school.student}, is living proof that SmartEdu Hub can identify, prepare, and celebrate excellence at national scale — and that ${school.school} already belongs in that story.`,
        'Adoption simply closes the loop: the platform that hosted the contest becomes the school’s everyday operating and learning system.',
      ],
    },
    {
      id: `${p}-10b`,
      layout: 'framework',
      chapter: '6. Proof of Concept',
      title: 'National Prize Podium — 18th September 2026',
      icon: 'GraduationCap',
      frameworkBlocks: [
        {
          label: '1st — ₦1,000,000',
          text: 'Happiness John, JSS 1, Joy Prime Model Secondary School, Akwa Ibom State.',
          icon: 'Target',
        },
        {
          label: '2nd — ₦500,000',
          text: 'Agaga-Oamen Dave-Wisdom, The Oasis Schools, Ekpoma, Edo State.',
          icon: 'Target',
        },
        {
          label: '3rd (tie) — ₦250,000',
          text: 'Daniel Barry Monsigia, Teko School, Rivers State.',
          icon: 'Target',
        },
        {
          label: '3rd (tie) — ₦250,000',
          text: 'Okunoye Mojolaoluwa Deborah, Oritamefa Baptist Model School, Ibadan, Oyo State.',
          icon: 'Landmark',
        },
      ],
    },
    {
      id: `${p}-11`,
      layout: 'framework',
      chapter: '7. Problems Solved',
      title: 'Problems SmartEdu Hub Solves for Schools',
      icon: 'ShieldCheck',
      frameworkBlocks: [
        {
          label: 'Scattered operations',
          text: 'Schools often run on paper, WhatsApp groups, and disconnected tools. SmartEdu Hub brings administration into one dashboard.',
          icon: 'ClipboardList',
        },
        {
          label: 'Teacher fragmentation',
          text: 'Teachers lack a single place for content, assessments, and feedback. The LMS and AI Books close that gap.',
          icon: 'Users',
        },
        {
          label: 'Weak exam practice',
          text: 'Students struggle to find organised past questions. CBT and competition practice build genuine exam confidence.',
          icon: 'Goal',
        },
        {
          label: 'Parent and fee opacity',
          text: 'Parents cannot easily see attendance, results, and fees; bursars lose time tracking balances by hand. SmartEdu Hub makes both visible and manageable.',
          icon: 'BarChart3',
        },
      ],
    },
    {
      id: `${p}-12`,
      layout: 'framework',
      chapter: '8. Proposed Adoption Scope',
      title: 'Proposed Adoption Scope',
      icon: 'GitBranch',
      frameworkBlocks: [
        {
          label: '1. School licence',
          text: `Onboard ${school.school} onto SmartEdu Hub with agreed modules for administration, learning, assessment, and communication.`,
          icon: 'Laptop',
        },
        {
          label: '2. Teacher capacity',
          text: 'Train teachers and administrators on dashboard use, AI Books, assignments, CBT, attendance, and results entry.',
          icon: 'Users',
        },
        {
          label: '3. Learner activation',
          text: 'Activate students on Explore, AI Books, past questions, and practice pathways — extending the habits that produced a national winner.',
          icon: 'BookOpen',
        },
        {
          label: '4. Parent and finance rollout',
          text: 'Enable parent visibility and bursary tools so families and school leadership share one trusted source of truth.',
          icon: 'Wallet',
        },
        {
          label: '5. Competition continuity',
          text: `Keep ${school.shortName} learners in the SmartEdu Hub competition pathway for future seasons and rankings.`,
          icon: 'Goal',
        },
      ],
    },
    {
      id: `${p}-13`,
      layout: 'twoColumn',
      chapter: '9. Mutual Benefits',
      title: 'Mutual Benefits',
      icon: 'Sparkles',
      leftTitle: `Benefits to ${school.shortName}`,
      leftBullets: [
        'A modern school operating and learning system in one place.',
        'Continuous practice culture that produced a national podium finish.',
        'Teacher tools, parent visibility, and bursary efficiency.',
        'Association with an indigenous, ISO 9001-certified Nigerian publisher.',
        'Priority pathway into future SmartEdu Hub competitions.',
      ],
      rightTitle: 'Benefits to SmartEdu Hub / Accessible',
      rightBullets: [
        `A flagship adopting school with a proven national winner.`,
        'Deeper classroom use of AI Books, CBT, and SMS modules.',
        'A reference story for other schools nationwide.',
        'Stronger competition pipeline from a high-performing school.',
        'Partnership grounded in attestation, trust, and shared success.',
      ],
    },
    {
      id: `${p}-14`,
      layout: 'framework',
      chapter: '10. Implementation',
      title: 'Implementation Pathway',
      icon: 'ClipboardList',
      frameworkBlocks: [
        {
          label: 'Phase 1 — Present',
          text: `Present SmartEdu Hub to the Principal, proprietors, and key staff of ${school.school}; agree modules, users, and timeline.`,
          icon: 'Presentation',
        },
        {
          label: 'Phase 2 — Onboard',
          text: 'Create school account structure; migrate or enter classes, staff, and students; configure fees and communication roles.',
          icon: 'ClipboardList',
        },
        {
          label: 'Phase 3 — Train and activate',
          text: 'Train teachers and administrators; activate AI Books, CBT, attendance, and parent access; monitor early use.',
          icon: 'TrendingUp',
        },
        {
          label: 'Phase 4 — Review',
          text: 'Review adoption metrics, address support needs, and plan competition participation for the next season.',
          icon: 'BarChart3',
        },
      ],
    },
    {
      id: `${p}-15`,
      layout: 'bullets',
      chapter: '11. Request',
      title: `Request to ${school.school}`,
      icon: 'Mail',
      bullets: [
        `We respectfully invite ${school.school} to adopt SmartEdu Hub as its school management and digital learning platform.`,
        'We would welcome the opportunity to present the platform formally, demonstrate AI Books, CBT, school dashboards, and parent tools, and agree a phased onboarding plan.',
        'We are open to a flexible adoption model — full-school licence, phased module rollout, or a pilot cohort of classes — that best fits your academic calendar and leadership priorities.',
        'For further enquiries and to arrange a presentation: Akeredolu Tosin S., Principal Executive Assistant to the MD/CEO · Phone: +234 803 057 7613 · Email: officeofthemd@accessiblepublishers.com · Website: www.smarteduhub.ng',
      ],
    },
    {
      id: `${p}-16`,
      layout: 'bullets',
      chapter: '12. Conclusion',
      title: 'Conclusion',
      icon: 'Handshake',
      bullets: [
        `${school.student}’s ${school.placeLabel} finish, and your school’s attestation support, already connect ${school.school} to SmartEdu Hub in the strongest possible way — through earned excellence and mutual trust.`,
        'Adopting the platform would turn that connection into daily school practice: better administration, richer learning, clearer parent partnership, and a standing place in national academic competitions.',
        `We respect the work your teachers and leadership have done, and we would be honoured to help ${school.shortName} multiply that excellence across every classroom.`,
      ],
      footer:
        'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan\nSmartEduHub Accessible Digital Platform Team (SMEH)\nwww.smarteduhub.ng\nwww.accessiblepublishers.com',
      notes: 'Close with the conclusion and institutional submission block.',
    },
  ]

  return {
    slides,
    currentIndex: 0,
    seedRevision: ASC_WINNER_SCHOOL_PROPOSAL_SEED_REVISION,
    meta: {
      brand: 'Accessible Publishers Limited',
      author: 'Gbadega Adedapo',
      degree: 'MD/CEO',
      date: 'September 2026',
      letterDate: '22nd September 2026',
      kind: 'proposal',
      editorView: 'document',
      documentFont: 'Arial',
      recipient: 'The Principal',
      recipientOrg: school.school,
      recipientAddress: school.location,
      subject,
      website: 'www.smarteduhub.ng',
      senderAddress: DEFAULT_PROPOSAL_SENDER_ADDRESS,
      coverLetter,
      signOff: [
        'Yours faithfully,',
        'Gbadega Adedapo',
        'MD/CEO',
        'For: Accessible Publishers Limited',
      ],
    },
  }
}

export function ascWinnerSchoolProposalById(
  id: string,
): PresentationState | null {
  const school = ASC_WINNER_SCHOOLS.find(
    (item) => ascWinnerSchoolProposalId(item.slug) === id,
  )
  return school ? buildAscWinnerSchoolProposal(school) : null
}

export const ascWinnerSchoolSeedCatalog: Record<
  string,
  { title: string; getState: () => PresentationState }
> = Object.fromEntries(
  ASC_WINNER_SCHOOLS.map((school) => [
    ascWinnerSchoolProposalId(school.slug),
    {
      title: ascWinnerSchoolProposalTitle(school),
      getState: () =>
        structuredClone(buildAscWinnerSchoolProposal(school)),
    },
  ]),
)
