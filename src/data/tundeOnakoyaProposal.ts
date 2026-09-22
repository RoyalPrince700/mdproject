import type { PresentationState, Slide } from '../types/slide'

export const TUNDE_DOCUMENT_ID = 'smeh-tunde-onakoya-proposal'
export const TUNDE_DOCUMENT_TITLE =
  'SmartEdu Hub Proposal to Tunde Onakoya (Chess in Slums Africa)'
export const TUNDE_SEED_REVISION = 5

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

export const TUNDE_PROPOSAL_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'September 2026',
  letterDate: '3rd September 2026',
  kind: 'proposal',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'Tunde Onakoya',
  recipientOrg: 'Chess in Slums Africa',
  recipientAddress: 'Lagos, Nigeria · chessinslumsafrica.com',
  subject:
    'Proposal for Strategic Partnership with Chess in Slums Africa on SmartEdu Hub Academic Competition Sponsorship, AI Books, and Learning Access for Underserved Champions',
  website: 'www.smarteduhub.ng',
  senderAddress:
    '121/123, The Knowledge Hub,\nObafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State.',
  coverLetter: [
    'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, and to propose a strategic partnership with Tunde Onakoya and Chess in Slums Africa focused on sponsorship of academic competitions and digital learning access for children in underserved communities.',
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning solutions, and the development of quality educational materials for schools and institutions across Nigeria. Since our establishment in 1996, we have remained committed to supporting educational advancement through curriculum-aligned content, digital innovation, and teacher development initiatives.',
    'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025. This recognition underscores our commitment to reinventing education delivery through publishing excellence, education innovation, and digital solutions.',
    'Accessible Publishers Limited is ISO 9001 certified. Our quality management system governs how we develop, review, produce, and support educational content and digital solutions, so partners can rely on consistent quality, documented processes, and continuous improvement across publishing, printing, and SmartEdu Hub delivery.',
    'We have followed with great respect your journey as a national chess master, Guinness World Record holder for the longest chess marathon, and founder of Chess in Slums Africa. Your work proves a truth that guides our own mission: talent is universal, but opportunity is not. Through chess, STEM and digital skills, scholarships, mentorship, and the Innovation Hub in Lagos, you have given children in communities such as Majidun, Makoko, Oshodi, and beyond a disciplined path to critical thinking, confidence, and education.',
    'This proposal invites Chess in Slums Africa to partner with SmartEdu Hub on academic competition sponsorship and learning access. SmartEdu Hub competitions allow students to compete nationally for cash prizes, laptops, educational gifts, vacation trips, and rankings — extending the competitive spirit you already nurture through chess into broader academic excellence. Alongside competitions, SmartEdu Hub hosts AI Books and the Accessible Publishers educational book catalogue, which can strengthen literacy, curriculum learning, and independent study for CISA champions and hub learners.',
    'A key strength of Accessible Publishers Limited is that SmartEdu Hub is developed internally by our Technology and Digital team, working closely with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. We have also delivered a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
    'We would be honoured to present SmartEdu Hub to you and the Chess in Slums Africa team, and to explore a partnership that pairs strategic thinking on the chessboard with academic competition, AI-powered books, and lasting classroom opportunity.',
  ],
  signOff: [
    'Yours faithfully,',
    'Gbadega Adedapo',
    'MD/CEO',
    'For: Accessible Publishers Limited',
  ],
}

export const tundeProposalSlides: Slide[] = [
  {
    id: 'tunde-01',
    layout: 'title',
    title:
      'Proposal for Strategic Partnership on\nSmartEdu Hub Digital Solutions',
    subtitle:
      'Competition sponsorship, AI Books, and learning access with Chess in Slums Africa',
    footer:
      'Submitted to Tunde Onakoya · Chess in Slums Africa\nAccessible Publishers Limited · September 2026',
    notes:
      'Lead with competition sponsorship and learning access for underserved champions; connect chess discipline to academic competition and AI Books.',
  },
  {
    id: 'tunde-02',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction',
    icon: 'Handshake',
    bullets: [
      'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, and to propose a strategic partnership with Tunde Onakoya and Chess in Slums Africa focused on sponsorship of academic competitions and digital learning access for children in underserved communities.',
      'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company established in 1996, with deep expertise in curriculum-aligned educational publishing, digital learning, and school support across Nigeria.',
      'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025.',
      'We are ISO 9001 certified, with a quality management system that governs editorial review, production, digital product assurance, and partner delivery so educational materials and SmartEdu Hub services meet consistent, documented standards.',
      'We admire Chess in Slums Africa’s mission to use chess as a vehicle for education, technology, mentorship, and scholarships for children in impoverished communities.',
    ],
    notes:
      'These paragraphs become the opening letter in the Word download.',
  },
  {
    id: 'tunde-02b',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction (continued)',
    icon: 'FileText',
    bullets: [
      'This proposal invites Chess in Slums Africa to partner on SmartEdu Hub academic competition sponsorship, while giving CISA champions access to AI Books and Accessible Publishers titles that strengthen literacy, curriculum learning, and independent study.',
      'SmartEdu Hub is developed internally by Accessible Publishers Limited. We have delivered a digital education solution for Abia State, and more than 30 schools have adopted the platform within three months of launch.',
      'We would be honoured to present SmartEdu Hub to you and the Chess in Slums Africa team at your convenience.',
    ],
  },
  sectionSlide('tunde-03', 'The Proposal', 'SmartEdu Hub x Chess in Slums Africa', {
    subtitle: 'Competition, books, and opportunity for underserved champions',
  }),
  {
    id: 'tunde-04',
    layout: 'bullets',
    chapter: '1. Executive Summary',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform. It combines school operations, assessment, AI Books, Accessible Publishers educational titles, and national academic competitions that reward excellence with cash prizes, devices, educational gifts, vacation trips, and rankings.',
      'Accessible Publishers Limited proposes a partnership with Tunde Onakoya and Chess in Slums Africa in which SmartEdu Hub competitions and learning resources extend CISA’s competitive, mentorship-driven model into broader academic achievement — while AI Books and Accessible Publishers titles reinforce literacy and curriculum mastery for champions in underserved communities.',
      'The partnership can begin with a focused pilot linking CISA ambassadors and Innovation Hub learners to SmartEdu Hub competition tracks and digital book access, followed by co-branded competition seasons, prize support, and measurable reporting on engagement and learning outcomes.',
    ],
  },
  {
    id: 'tunde-05',
    layout: 'bullets',
    chapter: '2. About Tunde Onakoya',
    title: 'About Tunde Onakoya and Chess in Slums Africa',
    icon: 'ShieldCheck',
    bullets: [
      'Tunde Onakoya is a Nigerian chess master, social entrepreneur, and advocate who founded Chess in Slums Africa in 2018 to empower children in underserved communities through chess, education, technology, and mentorship. He grew up in Ikorodu, Lagos, discovered chess in a local barbershop, and has become a global symbol of resilience and opportunity.',
      'Chess in Slums Africa has expanded from community chess interventions in Majidun, Makoko, Oshodi and other communities into scholarships, STEM and digital skills, socio-emotional development, and an Innovation Hub in Lagos offering robotics, coding, AI exposure, design, and civic education.',
      'Onakoya holds the Guinness World Record for the longest chess marathon and continues to raise global awareness and resources for quality education for African children. His philosophy — that every child can rise when given the tools to think strategically — aligns directly with SmartEdu Hub’s belief that competition, practice, and access to quality learning materials can change life trajectories.',
      'This proposal is tailored to that mission: competition sponsorship that celebrates academic champions from underserved backgrounds, plus AI Books and Accessible Publishers content that keep learning continuous between tournaments and classrooms.',
    ],
  },
  {
    id: 'tunde-06',
    layout: 'bullets',
    chapter: '3. About Accessible Publishers',
    title: 'About Accessible Publishers Limited',
    icon: 'Building2',
    bullets: [
      'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. The company has built a strong reputation across educational publishing, curriculum resources, school support materials, and technology-enabled learning solutions for schools, institutions, government programmes, and corporate partners.',
      'SmartEdu Hub is developed internally by our Technology and Digital team, with input from Editorial, Learning and Development, Media, Production, Marketing, Distribution, Human Resources, and Administration. This gives us direct control over curriculum alignment, localisation, implementation, support, and continuous improvement.',
      'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year. We have implemented a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
      'The company is ISO 9001 certified. Quality assurance is built into how we write, review, print, and digitise learning materials, and into how we build, test, and support SmartEdu Hub — giving partners a company whose processes, not only its promises, are independently standardised.',
    ],
  },
  {
    id: 'tunde-06b',
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
        text: 'Titles and digital content pass structured editorial review for accuracy, age-appropriateness, and curriculum alignment before they reach learners. Quality checks sit with Editorial, Learning and Development, and subject specialists.',
        icon: 'BookOpen',
      },
      {
        label: 'Production and digital assurance',
        text: 'Print production, accessible formats, and SmartEdu Hub features are tested before release. Platform updates, competition scoring, learner data, and support processes follow documented controls so delivery remains reliable at scale.',
        icon: 'Monitor',
      },
      {
        label: 'Partner accountability',
        text: 'For Chess in Slums Africa, ISO-backed quality management means competition operations, book access, hub onboarding, and outcome reporting are run with traceable processes, clear ownership, and continuous improvement after each pilot.',
        icon: 'ClipboardList',
      },
    ],
  },
  {
    id: 'tunde-07',
    layout: 'cards',
    chapter: '4. Partnership Focus',
    title: 'Why This Partnership Fits Chess in Slums Africa',
    icon: 'Goal',
    bullets: [
      'Chess in Slums Africa already understands the power of competition: tournaments expose children to healthy challenge, new environments, and belief in their own potential. SmartEdu Hub academic competitions extend that same competitive energy into curriculum subjects, exam readiness, and national academic recognition.',
      'CISA’s Innovation Hub and STEM programmes introduce children to AI, coding, robotics, and digital literacy. SmartEdu Hub AI Books make that digital future concrete in everyday reading — students interact with textbooks, ask questions, receive explanations, and build independent learning habits that complement chess discipline.',
      'Accessible Publishers books on SmartEdu Hub close a critical gap for many underserved learners: reliable, curriculum-aligned educational content. Combined with scholarships and mentorship CISA already provides, competition sponsorship plus books create a fuller bridge from potential to academic success.',
    ],
  },
  {
    id: 'tunde-08',
    layout: 'twoColumn',
    chapter: '4. Partnership Focus',
    title: 'Mission Alignment',
    icon: 'Handshake',
    leftTitle: 'Chess in Slums Africa strengths',
    leftBullets: [
      'Chess as a tool for critical thinking and character.',
      'Community reach in underserved Lagos communities and beyond.',
      'Scholarships, mentorship, and continuous guidance.',
      'STEM, AI, and digital skills through the Innovation Hub.',
      'Tournament culture and competitive excellence.',
    ],
    rightTitle: 'What SmartEdu Hub adds',
    rightBullets: [
      'National academic competitions with prizes and rankings.',
      'AI Books with interactive tutoring for independent study.',
      'Accessible Publishers curriculum-aligned book catalogue.',
      'CBT and past-question practice for major examinations.',
      'School records, progress tracking, and impact reporting.',
    ],
  },
  {
    id: 'tunde-09',
    layout: 'framework',
    chapter: '5. SmartEdu Hub Offer',
    title: 'Competitions, AI Books, and Publishing Content',
    icon: 'Layers',
    frameworkBlocks: [
      {
        label: 'National competitions',
        text: 'Students compete for cash prizes, laptops, educational gifts, vacation trips, and national rankings — extending CISA’s competitive culture into academic subjects and exam excellence.',
        icon: 'Goal',
      },
      {
        label: 'AI Books',
        text: 'Digital textbooks with an AI tutor that explains concepts, summarises chapters, and supports self-paced learning — reinforcing the strategic, independent thinking chess already builds.',
        icon: 'Sparkles',
      },
      {
        label: 'Accessible Publishers books',
        text: 'Trusted Nigerian educational titles available on SmartEdu Hub, giving CISA champions and hub learners curriculum-aligned reading and study materials beyond chessboard sessions.',
        icon: 'BookOpen',
      },
      {
        label: 'Assessment and readiness',
        text: 'CBT and past questions for WAEC, NECO, JAMB, BECE, and NCEE, helping scholarship-bound champions prepare for the examinations that unlock the next stage of education.',
        icon: 'ListChecks',
      },
    ],
  },
  {
    id: 'tunde-10',
    layout: 'framework',
    chapter: '6. Proposed Partnership Scope',
    title: 'Proposed Partnership Scope',
    icon: 'GitBranch',
    frameworkBlocks: [
      {
        label: '1. Competition sponsorship',
        text: 'Co-brand or sponsor SmartEdu Hub academic competition tracks for CISA ambassadors and partner-school cohorts, with prizes that reinforce education, devices, and recognition.',
        icon: 'Goal',
      },
      {
        label: '2. Hub and cohort access',
        text: 'Provide SmartEdu Hub access — including AI Books and Accessible Publishers catalogue — for Innovation Hub learners and selected CISA community cohorts.',
        icon: 'Laptop',
      },
      {
        label: '3. Chess-to-classroom bridge',
        text: 'Design joint messaging and sessions that connect chess discipline (planning, patience, problem-solving) to academic competition preparation and digital reading habits.',
        icon: 'Lightbulb',
      },
      {
        label: '4. Scholarship pipeline support',
        text: 'Use platform performance data and competition outcomes to strengthen academic evidence for CISA scholarship and mentorship pathways.',
        icon: 'GraduationCap',
      },
    ],
  },
  {
    id: 'tunde-11',
    layout: 'twoColumn',
    chapter: '7. Mutual Benefits',
    title: 'Mutual Benefits',
    icon: 'Sparkles',
    leftTitle: 'Benefits to Chess in Slums Africa',
    leftBullets: [
      'Academic competition pathways that complement chess tournaments.',
      'AI Books and Accessible Publishers titles for champions and hub learners.',
      'Stronger exam preparation support for scholarship-bound students.',
      'Partnership with a locally built, ISO 9001-certified Nigerian publishing and edtech company.',
      'Reportable learning engagement beyond chess programme metrics.',
    ],
    rightTitle: 'Benefits to SmartEdu Hub',
    rightBullets: [
      'Credible partnership with a globally respected education advocate.',
      'Direct reach to highly motivated learners in underserved communities.',
      'A powerful story of competition, equity, and digital learning access.',
      'Deeper adoption of AI Books and Accessible Publishers content.',
      'A model for NGO and community-facing education partnerships.',
    ],
  },
  {
    id: 'tunde-12',
    layout: 'bullets',
    chapter: '8. Impact Model',
    title: 'From Chessboard to Classroom Excellence',
    icon: 'TrendingUp',
    bullets: [
      'CISA has shown that when children are given a board, a mentor, and a reason to believe, they can rewrite their futures. SmartEdu Hub extends that logic: when those same children are given AI Books, curriculum titles, exam practice, and a national academic competition to aim for, classroom excellence becomes another arena for championship.',
      'A practical pilot could onboard a defined CISA cohort to SmartEdu Hub; sponsor a competition track for those learners; provide AI Books and Accessible Publishers catalogue access at the Innovation Hub and partner learning sites; and report participation, reading engagement, assessment practice, and competition outcomes.',
      'This keeps faith with Onakoya’s fundraising and education agenda: not only visibility for underserved children, but concrete tools that improve how they study, compete, and prepare for scholarships and further schooling.',
    ],
  },
  {
    id: 'tunde-13',
    layout: 'framework',
    chapter: '9. Implementation',
    title: 'Implementation Activities',
    icon: 'ClipboardList',
    frameworkBlocks: [
      {
        label: 'Presentation and alignment',
        text: 'Present SmartEdu Hub to Tunde Onakoya and the CISA team; align on competition sponsorship, book access, and cohort size for a first pilot.',
        icon: 'Presentation',
      },
      {
        label: 'Pilot onboarding',
        text: 'Onboard Innovation Hub and selected community champions; activate AI Books, Accessible Publishers titles, and competition participation.',
        icon: 'Users',
      },
      {
        label: 'Joint engagement',
        text: 'Host chess-to-classroom sessions connecting strategic thinking with academic preparation, digital reading, and competition readiness.',
        icon: 'Puzzle',
      },
      {
        label: 'Review and scale',
        text: 'Review engagement and outcomes; refine prize design and content access; scale to additional communities or partner schools.',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'tunde-14',
    layout: 'bullets',
    chapter: '10. Request',
    title: 'Request to Tunde Onakoya and Chess in Slums Africa',
    icon: 'Mail',
    bullets: [
      'We respectfully invite Tunde Onakoya and Chess in Slums Africa to partner with Accessible Publishers Limited on SmartEdu Hub academic competition sponsorship and digital learning access for underserved champions.',
      'We would welcome the opportunity to present SmartEdu Hub, demonstrate AI Books and the Accessible Publishers catalogue, and agree a pilot cohort at the Innovation Hub and selected communities.',
      'We are open to a flexible partnership model — competition title or track sponsorship, prize support, hub learning licences, co-branded sessions, or combined packages — that advances CISA’s education mission and SmartEdu Hub’s commitment to academic excellence for every learner.',
    ],
  },
  {
    id: 'tunde-15',
    layout: 'bullets',
    chapter: '11. Conclusion',
    title: 'Conclusion',
    icon: 'Handshake',
    bullets: [
      'Chess in Slums Africa has shown the world that a child with a strategy can change a story. SmartEdu Hub offers a complementary arena: academic competitions that reward excellence, AI Books that teach with intelligence, and Accessible Publishers content that puts quality Nigerian learning materials within reach.',
      'We respect the dignity, discipline, and hope you bring to every community you serve. We would be honoured to work with you and Chess in Slums Africa so that more champions rise — on the board, in the classroom, and in life.',
    ],
    footer:
      'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan\nSmartEduHub Accessible Digital Platform Team (SMEH)\nwww.smarteduhub.ng\nwww.accessiblepublishers.com',
    notes:
      'Close with the conclusion and institutional submission block.',
  },
]

export const tundeProposal: PresentationState = {
  slides: tundeProposalSlides,
  currentIndex: 0,
  seedRevision: TUNDE_SEED_REVISION,
  meta: TUNDE_PROPOSAL_META,
}
