import type { PresentationState, Slide } from '../types/slide'

export const SCHOLARSHIP_CAFE_DOCUMENT_ID = 'smeh-scholarship-cafe-proposal'
export const SCHOLARSHIP_CAFE_DOCUMENT_TITLE =
  'SmartEdu Hub Partnership Proposal to Scholarships Cafe'
export const SCHOLARSHIP_CAFE_SEED_REVISION = 1

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

export const SCHOLARSHIP_CAFE_PROPOSAL_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'August 2026',
  letterDate: '20th August 2026',
  kind: 'proposal',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'Dr. Olumuyiwa Igbalajobi',
  recipientOrg: 'Scholarships Cafe',
  recipientAddress: 'Canada · scholarshipscafe.com',
  subject:
    'Proposal for Strategic Partnership between SmartEdu Hub and Scholarships Cafe on Academic Preparation, Scholarship Readiness, and Global Opportunity Pathways for Nigerian Learners',
  website: 'www.smarteduhub.ng',
  coverLetter: [
    'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, and to propose a strategic partnership with Scholarships Cafe founded by Dr. Olumuyiwa Igbalajobi.',
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning solutions, and the development of quality educational materials for schools and institutions across Nigeria. Since our establishment in 1996, we have remained committed to supporting educational advancement through curriculum-aligned content, digital innovation, and teacher development initiatives.',
    'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025. This recognition underscores our commitment to reinventing education delivery through publishing excellence, education innovation, and digital solutions.',
    'We have followed with admiration the work of Scholarships Cafe in connecting talented Nigerian and African students to global scholarship opportunities, mentorship, and practical support — including initiatives that help eligible learners prepare documentation such as international passports needed to compete for funded study abroad placements. Your platform has reached tens of thousands of learners and helped facilitate scholarship outcomes worth significant value across Canada, the United States, the United Kingdom, and other destinations.',
    'We believe SmartEdu Hub and Scholarships Cafe are natural partners. SmartEdu Hub strengthens the academic foundation inside Nigerian schools — through NERDC-aligned learning content, CBT and past-question practice, digital records, report cards, transcripts, and school-wide performance visibility — while Scholarships Cafe opens the pathway from that foundation to fully funded international study. Together, we can build a credible end-to-end model: prepare learners well at home, identify strong candidates early, and support them through scholarship application and global placement.',
    'A key strength of Accessible Publishers Limited is that SmartEdu Hub is developed internally by our Technology and Digital team, working closely with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. We have also delivered a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
    'Given your Ekiti roots and our ongoing engagement with education stakeholders across Nigeria — including Ekiti State — we see particular opportunity for a pilot partnership that serves indigenes and underserved learners who need both strong academic preparation and trusted scholarship guidance.',
    'We would be honoured to present SmartEdu Hub to Dr. Igbalajobi and the Scholarships Cafe team, and to explore a structured partnership that benefits Nigerian learners, partner schools, and both organisations.',
  ],
  signOff: [
    'Yours faithfully,',
    'Gbadega Adedapo',
    'MD/CEO',
    'For: Accessible Publishers Limited',
  ],
}

export const scholarshipCafeProposalSlides: Slide[] = [
  {
    id: 'scafe-01',
    layout: 'title',
    title:
      'Proposal for Strategic Partnership on\nSmartEdu Hub Digital Solutions',
    subtitle:
      'Academic preparation in Nigeria and scholarship readiness abroad — a joint pathway for Nigerian learners',
    footer:
      'Submitted to Scholarships Cafe · Dr. Olumuyiwa Igbalajobi\nAccessible Publishers Limited · August 2026',
    notes:
      'Introduce SmartEdu Hub as the in-school academic layer and Scholarships Cafe as the global scholarship pathway layer.',
  },
  {
    id: 'scafe-02',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction',
    icon: 'Handshake',
    bullets: [
      'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, and to propose a strategic partnership with Scholarships Cafe founded by Dr. Olumuyiwa Igbalajobi.',
      'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company established in 1996, with deep expertise in curriculum-aligned educational publishing, digital learning, and school support across Nigeria.',
      'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025.',
      'We have followed with admiration the work of Scholarships Cafe in connecting talented Nigerian and African students to global scholarship opportunities, mentorship, and practical application support.',
    ],
    notes:
      'These paragraphs become the opening letter in the Word download.',
  },
  {
    id: 'scafe-02b',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction (continued)',
    icon: 'FileText',
    bullets: [
      'We believe SmartEdu Hub and Scholarships Cafe are natural partners. SmartEdu Hub strengthens academic preparation inside Nigerian schools, while Scholarships Cafe opens the pathway from that foundation to fully funded international study.',
      'SmartEdu Hub is developed internally by Accessible Publishers Limited. We have delivered a digital education solution for Abia State, and more than 30 schools have adopted the platform within three months of launch.',
      'Given your Ekiti roots and our engagement with education stakeholders across Nigeria, we see opportunity for a pilot partnership serving indigenes and underserved learners who need both strong academic preparation and trusted scholarship guidance.',
      'We would be honoured to present SmartEdu Hub to Dr. Igbalajobi and the Scholarships Cafe team at your convenience.',
    ],
  },
  sectionSlide('scafe-03', 'The Proposal', 'SmartEdu Hub × Scholarships Cafe', {
    subtitle: 'Partnership rationale, scope, and joint model',
  }),
  {
    id: 'scafe-04',
    layout: 'bullets',
    chapter: '1. Executive Summary',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform, designed to help schools simplify administration, improve teaching, strengthen student performance, and prepare learners for major examinations from one secure environment. Scholarships Cafe is a global platform dedicated to connecting underrepresented students to meaningful scholarship opportunities, mentorship, and application support.',
      'Accessible Publishers Limited proposes a strategic partnership in which SmartEdu Hub serves as the in-country academic and records layer for partner schools and learners, while Scholarships Cafe serves as the scholarship discovery, mentorship, and global placement layer for qualified candidates. The partnership creates a complete value chain: strong school-based learning at home, credible academic evidence for applications, and guided access to funded study abroad opportunities.',
      'We propose beginning with a focused pilot involving selected SmartEdu Hub schools and Scholarships Cafe communities — with particular relevance for Nigerian indigenes, including learners from Ekiti State and other underserved regions — followed by co-branded outreach, masterclasses, student referral pathways, and measurable reporting on academic readiness and scholarship outcomes.',
    ],
  },
  {
    id: 'scafe-05',
    layout: 'bullets',
    chapter: '2. About Scholarships Cafe',
    title: 'About Scholarships Cafe',
    icon: 'Globe',
    bullets: [
      'Scholarships Cafe, founded by Dr. Olumuyiwa Igbalajobi, is an education-focused platform that democratises access to global scholarship information, mentorship, and application guidance for students who may otherwise lack reliable networks or structured support.',
      'Born in Ado-Ekiti, Ekiti State, and now based in Canada, Dr. Igbalajobi has built Scholarships Cafe from a personal mission to ensure that talent — not privilege — determines access to world-class education. The platform has grown into a widely followed community supporting learners across Nigeria, Africa, and beyond.',
      'Through masterclasses, mentorship, scholarship alerts, community engagement, and practical initiatives — including support that helps eligible learners meet documentation requirements for international applications — Scholarships Cafe has helped thousands of students pursue funded opportunities in Canada, the United States, the United Kingdom, and other destinations.',
      'Scholarships Cafe also collaborates with educational institutions, NGOs, and government-facing education stakeholders in Nigeria, making it well suited to a structured partnership with a locally developed school platform such as SmartEdu Hub.',
    ],
  },
  {
    id: 'scafe-06',
    layout: 'bullets',
    chapter: '3. About Accessible Publishers',
    title: 'About Accessible Publishers Limited',
    icon: 'Building2',
    bullets: [
      'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. The company has built a strong reputation across educational publishing, curriculum resources, school support materials, and technology-enabled learning solutions for schools, institutions, government programmes, and corporate partners.',
      'SmartEdu Hub is developed internally by our Technology and Digital team, with input from Editorial, Learning and Development, Media, Production, Marketing, Distribution, Human Resources, and Administration. This gives us direct control over curriculum alignment, localisation, implementation, support, and continuous improvement.',
      'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year. We have implemented a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
    ],
  },
  {
    id: 'scafe-07',
    layout: 'twoColumn',
    chapter: '4. Partnership Rationale',
    title: 'Why This Partnership Makes Sense',
    icon: 'Handshake',
    leftTitle: 'What Scholarships Cafe excels at',
    leftBullets: [
      'Connecting learners to global scholarship opportunities.',
      'Providing mentorship, masterclasses, and application guidance.',
      'Building a trusted community for underrepresented students.',
      'Supporting practical readiness for study abroad — including documentation awareness.',
      'Partnering with institutions and education stakeholders across Nigeria.',
    ],
    rightTitle: 'What SmartEdu Hub adds',
    rightBullets: [
      'Strong in-school academic preparation through NERDC-aligned digital content.',
      'CBT and past-question practice for WAEC, NECO, JAMB, BECE, and NCEE.',
      'Digital student records, report cards, transcripts, and performance data.',
      'School-wide visibility to identify high-performing and scholarship-ready learners.',
      'A locally developed platform already deployed in Nigerian schools and states.',
    ],
  },
  {
    id: 'scafe-08',
    layout: 'cards',
    chapter: '4. Partnership Rationale',
    title: 'From Nigerian Classroom to Global Scholarship',
    icon: 'GraduationCap',
    bullets: [
      'Many talented Nigerian students fail to convert academic potential into funded international study not because they lack ambition, but because the journey is fragmented. They may study in schools without structured digital learning support, arrive at scholarship application season without strong examination preparation, and then struggle to present credible academic records or find trusted guidance at the right time.',
      'A SmartEdu Hub and Scholarships Cafe partnership addresses that fragmentation directly. SmartEdu Hub ensures learners build academic strength, digital confidence, and verifiable school records while still in Nigeria. Scholarships Cafe then meets those prepared learners with scholarship matching, mentorship, and application strategy at the point when they are ready to compete globally.',
      'For Nigerian indigenes — including learners from Ekiti State and other communities Scholarships Cafe already serves — this creates a more equitable pathway from local school to international opportunity.',
    ],
  },
  {
    id: 'scafe-09',
    layout: 'framework',
    chapter: '5. SmartEdu Hub Overview',
    title: 'What SmartEdu Hub Brings to the Partnership',
    icon: 'Layers',
    frameworkBlocks: [
      {
        label: 'Explore and AI Books',
        text: 'A digital learning library and AI-powered textbooks that help students study independently, understand difficult concepts, and build the academic confidence needed for competitive scholarship applications.',
        icon: 'BookOpen',
      },
      {
        label: 'Past questions and CBT',
        text: 'Organised WAEC, NECO, JAMB, BECE, and NCEE practice with timed mock exams, instant feedback, and performance tracking — strengthening examination readiness before students apply abroad.',
        icon: 'ListChecks',
      },
      {
        label: 'Records and transcripts',
        text: 'Digital student records, report cards, and transcript generation that give partner schools and scholarship mentors credible academic documentation for applications.',
        icon: 'FileText',
      },
      {
        label: 'School operations',
        text: 'Attendance, results, communication, finance, and analytics dashboards that help schools and partners monitor learner progress and identify standout candidates early.',
        icon: 'Monitor',
      },
    ],
  },
  {
    id: 'scafe-10',
    layout: 'framework',
    chapter: '6. Proposed Partnership Scope',
    title: 'Proposed Partnership Scope',
    icon: 'GitBranch',
    frameworkBlocks: [
      {
        label: '1. Discovery and alignment',
        text: 'Joint review of SmartEdu Hub capabilities, Scholarships Cafe community needs, target learner profiles, and partnership goals — including support for Nigerian indigenes and underserved students.',
        icon: 'Search',
      },
      {
        label: '2. Pilot schools and communities',
        text: 'Launch a pilot linking selected SmartEdu Hub schools with Scholarships Cafe mentorship and scholarship-readiness resources for a defined cohort of learners.',
        icon: 'GraduationCap',
      },
      {
        label: '3. Co-branded outreach',
        text: 'Joint masterclasses, webinars, and school/community sessions on academic excellence, digital learning, scholarship awareness, and responsible preparation for study abroad.',
        icon: 'Presentation',
      },
      {
        label: '4. Referral and reporting',
        text: 'Establish a structured referral pathway for academically strong SmartEdu Hub learners into Scholarships Cafe programmes, with agreed reporting on readiness, engagement, and outcomes.',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    id: 'scafe-11',
    layout: 'twoColumn',
    chapter: '7. Mutual Benefits',
    title: 'Mutual Benefits',
    icon: 'Sparkles',
    leftTitle: 'Benefits to Scholarships Cafe',
    leftBullets: [
      'Access to school-based learners with structured academic preparation and digital records.',
      'Stronger pipeline of scholarship-ready candidates from Nigerian schools.',
      'Partnership with a locally developed, award-winning education technology provider.',
      'Co-branded visibility in schools, states, and education communities across Nigeria.',
      'Better academic evidence and performance context for mentored learners.',
    ],
    rightTitle: 'Benefits to SmartEdu Hub',
    rightBullets: [
      'Trusted global scholarship pathway for high-performing SmartEdu Hub learners.',
      'Added value for partner schools seeking both local academic excellence and international opportunity.',
      'Association with a respected education advocate and scholarship community.',
      'Joint programmes that motivate student engagement and national academic competitions.',
      'Stronger story for government, NGO, and diaspora-facing education partnerships.',
    ],
  },
  {
    id: 'scafe-12',
    layout: 'bullets',
    chapter: '8. Target Learners',
    title: 'Target Learners and Communities',
    icon: 'Users',
    bullets: [
      'The partnership will prioritise Nigerian learners who demonstrate academic promise but need structured support to compete globally — including indigenes from Ekiti State and other regions Scholarships Cafe already serves with credibility and community trust.',
      'Target groups include: senior secondary students preparing for terminal examinations; recent graduates seeking funded undergraduate or postgraduate study abroad; teachers and counsellors in SmartEdu Hub partner schools who guide students toward scholarship readiness; and low- and middle-income learners who benefit from both affordable digital learning at home and trusted scholarship mentorship abroad.',
      'By combining local academic strengthening with global opportunity guidance, the partnership directly supports Scholarships Cafe’s mission to democratise access to education and SmartEdu Hub’s mission to help schools teach better, manage better, and prepare learners for success.',
    ],
  },
  {
    id: 'scafe-13',
    layout: 'framework',
    chapter: '9. Implementation Activities',
    title: 'Implementation Activities',
    icon: 'ClipboardList',
    frameworkBlocks: [
      {
        label: 'Platform presentation',
        text: 'Formal presentation of SmartEdu Hub to Dr. Igbalajobi and the Scholarships Cafe team, with walkthrough of learning, assessment, records, and reporting features relevant to scholarship readiness.',
        icon: 'Presentation',
      },
      {
        label: 'Pilot onboarding',
        text: 'Onboard agreed pilot schools and learner cohorts; provide SmartEdu Hub access, teacher orientation, and Scholarships Cafe mentorship touchpoints.',
        icon: 'Laptop',
      },
      {
        label: 'Masterclasses',
        text: 'Co-hosted sessions on examination preparation, digital learning, scholarship search strategy, application writing, and documentation readiness for international study.',
        icon: 'Users',
      },
      {
        label: 'Review and scale',
        text: 'Quarterly review of learner engagement, academic performance indicators, referral quality, and scholarship pipeline outcomes; refine and scale based on agreed success metrics.',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'scafe-14',
    layout: 'bullets',
    chapter: '10. Ekiti and Diaspora Connection',
    title: 'Ekiti Roots and Shared Mission',
    icon: 'Landmark',
    bullets: [
      'We note with appreciation that Dr. Olumuyiwa Igbalajobi is from Ado-Ekiti, Ekiti State — a state where Accessible Publishers Limited is also actively engaging education stakeholders on SmartEdu Hub adoption for basic education transformation across all 16 Local Government Areas.',
      'This shared Nigerian and Ekiti connection creates a natural foundation for a partnership that is not merely transactional, but rooted in a common desire to expand opportunity for young Nigerians — at home through stronger schools, and abroad through funded global education.',
      'A pilot that includes Ekiti indigenes, Ekiti schools, or Ekiti-facing outreach could serve as a powerful proof of concept for how diaspora-led scholarship ecosystems and locally built edtech platforms can work together for measurable impact.',
    ],
  },
  {
    id: 'scafe-15',
    layout: 'bullets',
    chapter: '11. Request',
    title: 'Request to Scholarships Cafe',
    icon: 'Mail',
    bullets: [
      'We respectfully invite Scholarships Cafe to partner with Accessible Publishers Limited on SmartEdu Hub as a structured academic preparation and scholarship readiness initiative for Nigerian learners.',
      'We would welcome the opportunity to present SmartEdu Hub to Dr. Olumuyiwa Igbalajobi and your team, agree a pilot scope, and explore co-branded masterclasses, learner referral pathways, and joint outreach to schools and communities across Nigeria.',
      'We are open to a flexible partnership model — including pilot collaboration, community programmes, school bundles, and state or NGO-facing initiatives — that allows both organisations to grow impact while staying true to our shared education mission.',
    ],
  },
  {
    id: 'scafe-16',
    layout: 'bullets',
    chapter: '12. Conclusion',
    title: 'Conclusion',
    icon: 'Handshake',
    bullets: [
      'SmartEdu Hub and Scholarships Cafe serve different parts of the same journey. One prepares learners powerfully inside Nigerian schools. The other opens the door to funded study abroad. Together, they can offer Nigerian students — especially indigenes and underserved learners — a more complete, credible, and compassionate pathway from local excellence to global opportunity.',
      'We respect the trust Scholarships Cafe has built with its community and are committed to earning a partnership based on transparency, shared values, and measurable outcomes. We would be honoured to work with Dr. Igbalajobi and the Scholarships Cafe team to turn academic potential into scholarship success.',
    ],
    footer:
      'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan\nSmartEduHub Accessible Digital Platform Team (SMEH)\nwww.smarteduhub.ng\nwww.accessiblepublishers.com',
    notes:
      'Close with the conclusion and institutional submission block.',
  },
]

export const scholarshipCafeProposal: PresentationState = {
  slides: scholarshipCafeProposalSlides,
  currentIndex: 0,
  seedRevision: SCHOLARSHIP_CAFE_SEED_REVISION,
  meta: SCHOLARSHIP_CAFE_PROPOSAL_META,
}
