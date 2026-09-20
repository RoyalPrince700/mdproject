import type { PresentationState, Slide } from '../types/slide'

export const UBEC_DOCUMENT_ID = 'smeh-ubec-proposal'
export const UBEC_DOCUMENT_TITLE =
  'SmartEdu Hub Proposal to UBEC'
export const UBEC_SEED_REVISION = 1

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

export const UBEC_PROPOSAL_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'August 2026',
  letterDate: '26th August 2026',
  kind: 'proposal',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'The Executive Secretary',
  recipientOrg: 'Universal Basic Education Commission (UBEC)',
  recipientAddress:
    '7, Gwani Street, UBEC Building,\nWuse Zone 4, Abuja, Nigeria',
  subject:
    'Proposal for the Adoption of SmartEdu Hub Digital Solutions for Universal Basic Education Transformation, SUBEB Coordination, and National Learning Outcomes Improvement',
  website: 'www.smarteduhub.ng',
  coverLetter: [
    'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, for the consideration and adoption of the Universal Basic Education Commission (UBEC) as a strategic national solution for strengthening basic education delivery, SUBEB coordination, and measurable learning outcomes across Nigeria.',
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning solutions, and the development of quality educational materials for schools and institutions across Nigeria. Since our establishment in 1996, we have remained committed to supporting educational advancement through curriculum-aligned content, digital innovation, and teacher development initiatives.',
    'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025. This recognition underscores our commitment to reinventing education delivery through publishing excellence, education innovation, and digital solutions.',
    'We recognise UBEC’s statutory mandate to coordinate, monitor, and support the implementation of Universal Basic Education programmes in partnership with State Universal Basic Education Boards (SUBEBs) across the 36 states and the Federal Capital Territory. SmartEdu Hub is designed to support that mandate by giving learners curriculum-aligned digital content, giving teachers practical classroom tools, and giving UBEC and SUBEB officials real-time visibility into school performance, teacher activity, and learner engagement at scale.',
    'This proposal presents SmartEdu Hub as the learning, assessment, school-management, and reporting layer that can help UBEC convert national basic education reform goals into measurable classroom use, teacher productivity, learner outcomes, and federated education data that supports policy review and programme accountability.',
    'A key strength of Accessible Publishers Limited is that our digital products are developed internally by our Technology and Digital team, working closely with our Editorial, Learning and Development, Media, Marketing, Distribution, and Administration teams. This gives us strong control over product development, localisation, implementation, support, and continuous improvement.',
    'We have also developed and implemented a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch. This demonstrates practical experience in building and deploying education technology solutions at institutional and government scale.',
    'We would be honoured to present SmartEdu Hub to the Executive Secretary, UBEC leadership, technical teams, and designated SUBEB stakeholders at your convenience.',
  ],
  signOff: [
    'Yours faithfully,',
    'Gbadega Adedapo',
    'MD/CEO',
    'For: Accessible Publishers Limited',
  ],
}

export const ubecProposalSlides: Slide[] = [
  {
    id: 'ubec-01',
    layout: 'title',
    title:
      'Proposal for the Adoption of\nSmartEdu Hub Digital Solutions',
    subtitle:
      'Learning Management and School Management System for Universal Basic Education transformation, SUBEB coordination, and national learning outcomes improvement',
    footer:
      'Submitted to the Universal Basic Education Commission (UBEC)\nAccessible Publishers Limited · August 2026',
    notes:
      'Introduce SmartEdu Hub as a locally built education platform for national basic education adoption, SUBEB oversight, and measurable learning outcomes.',
  },
  {
    id: 'ubec-02',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction',
    icon: 'Handshake',
    bullets: [
      'We respectfully write to introduce SmartEdu Hub, an indigenous AI-powered digital learning and school management platform powered by Accessible Publishers Limited, for the consideration and adoption of the Universal Basic Education Commission (UBEC) as a strategic national solution for strengthening basic education delivery, SUBEB coordination, and measurable learning outcomes across Nigeria.',
      'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning, and curriculum-aligned materials. Established in 1996, we support schools through content, digital innovation, and teacher development.',
      'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025.',
      'We recognise UBEC’s statutory mandate to coordinate, monitor, and support Universal Basic Education programmes in partnership with SUBEBs across the 36 states and the Federal Capital Territory.',
    ],
    notes:
      'These paragraphs become the opening letter in the Word download. Edit them here if you need to change names, dates, or emphasis.',
  },
  {
    id: 'ubec-02b',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction (continued)',
    icon: 'FileText',
    bullets: [
      'SmartEdu Hub is designed to support that mandate by giving learners curriculum-aligned digital content, giving teachers practical classroom tools, and giving UBEC and SUBEB officials real-time visibility into school performance, teacher activity, and learner engagement at scale.',
      'Our digital products are developed internally by our Technology and Digital team, working with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. This gives us control over localisation, implementation, support, and improvement.',
      'We have developed a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
      'We would be honoured to present SmartEdu Hub to the Executive Secretary, UBEC leadership, technical teams, and designated SUBEB stakeholders at your convenience.',
    ],
  },
  sectionSlide('ubec-03', 'The Proposal', 'SmartEdu Hub × UBEC', {
    subtitle: 'Platform, adoption model, and request',
  }),
  {
    id: 'ubec-04',
    layout: 'bullets',
    chapter: '1. Executive Summary',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform, designed to help schools simplify administration, improve teaching, enhance student performance, and prepare learners for the future from one secure environment. For UBEC, it offers a practical way to strengthen basic education delivery nationally, improve learning outcomes at scale, and give federal and state education administrators real-time visibility into performance across schools, LGAs, and states.',
      'Our value proposition in three lines: For learners — curriculum-aligned interactive content, AI-powered books, past questions, and national competitions that make studying engaging and self-directed. For educators — lesson tools, instant assessments, professional development resources, and AI-assisted lesson support built in. For administrators — a real-time, paperless management system that gives UBEC, SUBEB, and school leaders the data they need, when they need it.',
      'Unlike traditional school management software that focuses only on administration, SmartEdu Hub combines school operations, digital learning, artificial intelligence, communication, finance, assessments, and student engagement into one seamless ecosystem. We propose a phased national adoption beginning with needs assessment and pilot states or LGAs, followed by teacher training, SUBEB onboarding, coordinated rollout, and continuous monitoring and support.',
    ],
  },
  {
    id: 'ubec-05',
    layout: 'bullets',
    chapter: '2. Background and Introduction',
    title: 'Background and Introduction',
    icon: 'Building2',
    bullets: [
      'SmartEdu Hub was founded with a singular mission: to simplify and strengthen the way schools operate and students learn. With years of experience in educational technology, Accessible Publishers Limited has designed the platform to address the unique challenges of Nigerian basic education schools, including offline accessibility, multilingual content support, and ease of use for teachers with varying levels of digital literacy.',
      'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. Over the years, the company has built a strong reputation across educational publishing, curriculum resources, school support materials, and technology-enabled learning solutions for schools, institutions, government programmes, and corporate partners.',
      'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year. With a national footprint, a staff strength of about 250 people, and deep understanding of the realities of Nigerian public basic education schools, we are positioned to support UBEC with solutions that are both locally grounded and nationally scalable.',
    ],
  },
  {
    id: 'ubec-06',
    layout: 'framework',
    chapter: '3. Why SmartEdu Hub',
    title: 'Why SmartEdu Hub Stands Apart',
    icon: 'ShieldCheck',
    frameworkBlocks: [
      {
        label: 'Locally designed',
        text: 'Our platform is built by education specialists with deep contextual knowledge of national curricula, school structures, and the practical realities of public basic education systems in Nigeria. We build for context, not just for code.',
        icon: 'Landmark',
      },
      {
        label: 'Field-validated',
        text: 'SmartEdu Hub has been deployed and stress-tested in schools, including those with intermittent power and low-speed internet. We do not build for ideal conditions; we build for the real world.',
        icon: 'ShieldCheck',
      },
      {
        label: 'Curriculum-first',
        text: 'Every piece of digital content is aligned to official NERDC curriculum frameworks for basic education. Our iBooks are not repurposed PDFs; they are purpose-engineered, interactive learning experiences built subject by subject.',
        icon: 'BookOpen',
      },
      {
        label: 'Holistic coverage',
        text: 'From the classroom (iBooks, CBT practice, AI tutor) to the staffroom (lesson planning tools) to the boardroom (analytics dashboards), SmartEdu Hub covers the full educational lifecycle in one integrated platform.',
        icon: 'Layers',
      },
      {
        label: 'Capacity building',
        text: 'We do not install software and disappear. We invest in the human infrastructure — training teachers, building SUBEB administrator confidence, and creating sustainable internal champions for digital transformation across Nigeria.',
        icon: 'Users',
      },
    ],
  },
  {
    id: 'ubec-07',
    layout: 'framework',
    chapter: '4. Proposed Solution Overview',
    title: 'Proposed Solution Overview',
    icon: 'Layers',
    bullets: [
      'Our proposal is structured around three core deliverables tailored to the needs of basic education schools. Each component can be deployed independently, but the full power of the platform is realised when all three work together, sharing data, student profiles, and performance insights seamlessly across schools, LGAs, states, and UBEC oversight structures.',
    ],
    frameworkBlocks: [
      {
        label: 'iBooks',
        text: 'Curriculum-aligned, multimedia-rich interactive digital textbooks designed for use on tablets, laptops, and smartphones, with offline support and an in-built AI tutor.',
        icon: 'NotebookPen',
      },
      {
        label: 'CBT environment',
        text: 'A comprehensive digital library of past-question computer-based tests accessible to students and teachers, covering WAEC, NECO, JAMB, BECE, and NCEE.',
        icon: 'ListChecks',
      },
      {
        label: 'School Management System',
        text: 'An integrated platform for managing student records, attendance, staff deployment, examinations, parent communication, finance, and real-time reporting for SUBEB and UBEC officials.',
        icon: 'Monitor',
      },
    ],
  },
  {
    id: 'ubec-07b',
    layout: 'framework',
    chapter: '4a. iBooks',
    title: 'iBooks: Interactive Digital Textbooks',
    icon: 'BookOpen',
    bullets: [
      'Our iBooks are curriculum-aligned interactive textbooks designed in accordance with the Nigerian Educational Research and Development Council (NERDC) curriculum for basic education. They represent a transformative departure from static printed textbooks, offering an immersive and engaging learning experience with AI support.',
    ],
    frameworkBlocks: [
      {
        label: 'Lesson plans and notes',
        text: 'Teachers can plan lessons and develop detailed lesson notes for classroom delivery, then download generated documents for ministry, SUBEB, and UBEC supervisors.',
        icon: 'ClipboardList',
      },
      {
        label: 'Question bank',
        text: 'Every topic comes with questions from different exam bodies. Teachers can access or generate these for external examination preparation or continuous assessment.',
        icon: 'ListChecks',
      },
      {
        label: 'Suggested videos',
        text: 'Carefully selected educational videos attached to topics help teachers explain concepts better and improve students’ understanding through visual learning.',
        icon: 'Presentation',
      },
      {
        label: 'AI tutor and study aids',
        text: 'Students can ask questions while reading, receive chapter summaries, understand difficult concepts, use flashcards, and revise independently with AI-powered support.',
        icon: 'Sparkles',
      },
      {
        label: 'Common mistakes and study tricks',
        text: 'Teachers and students can identify common errors in each topic area and access memory aids and smart study techniques that improve retention and performance.',
        icon: 'Target',
      },
    ],
  },
  {
    id: 'ubec-07c',
    layout: 'framework',
    chapter: '4b. CBT Environment',
    title: 'Computer-Based Test Environment',
    icon: 'FileText',
    bullets: [
      'The CBT environment provides students with an extensive, searchable digital library of past examination questions from relevant national and state examining bodies. Questions are categorised by year, subject, topic, and difficulty level, enabling highly targeted revision and timed mock examinations.',
    ],
    frameworkBlocks: [
      {
        label: 'Past questions library',
        text: 'Organised access to WAEC, NECO, JAMB, BECE, and NCEE past questions, continuously updated following each new examination sitting.',
        icon: 'Search',
      },
      {
        label: 'Timed mock exams',
        text: 'Mock examinations that replicate the exact format and conditions of major external assessments, reducing examination anxiety and improving time management.',
        icon: 'ListChecks',
      },
      {
        label: 'Instant scoring',
        text: 'Every incorrect answer is accompanied by step-by-step worked solutions, turning mistakes into learning moments with detailed feedback.',
        icon: 'BarChart3',
      },
      {
        label: 'Teacher assignments',
        text: 'Educators can create targeted practice sets for specific topics and assign them to entire classes or individual students.',
        icon: 'Users',
      },
      {
        label: 'Offline access',
        text: 'Practice sets can be downloaded and completed without internet connectivity, with results syncing automatically upon reconnection.',
        icon: 'Globe',
      },
    ],
  },
  {
    id: 'ubec-07d',
    layout: 'framework',
    chapter: '4c. School Management System',
    title: 'School Management System',
    icon: 'ClipboardList',
    bullets: [
      'The School Management System is the administrative backbone of SmartEdu Hub. It is designed to eliminate paperwork, improve data accuracy, and give school leaders, SUBEB officials, and UBEC policymakers real-time insight into school performance across Nigeria.',
    ],
    frameworkBlocks: [
      {
        label: 'Enrolment and records',
        text: 'Digital registration, bio-data capture, academic history tracking, document uploads, automated class assignment, and transfer management between schools.',
        icon: 'Users',
      },
      {
        label: 'Attendance',
        text: 'Daily digital attendance for students and staff, automated parent notifications on unexplained absence, and trend analytics per class, teacher, and school.',
        icon: 'ClipboardList',
      },
      {
        label: 'Academics and exams',
        text: 'Continuous assessment scoring, weighted result computation, report card generation, and end-of-term result communication to parents within the platform.',
        icon: 'GraduationCap',
      },
      {
        label: 'Finance and HR',
        text: 'Fee collection tracking, income and expenditure recording, staff profile management, leave workflows, and audit-ready financial reporting.',
        icon: 'Wallet',
      },
      {
        label: 'Parent portal and analytics',
        text: 'Mobile portal for parents to access attendance, results, and announcements, plus a federated dashboard for UBEC and SUBEB officials filterable by school, LGA, or state.',
        icon: 'Monitor',
      },
    ],
  },
  {
    id: 'ubec-08',
    layout: 'framework',
    chapter: '4d. Platform Features',
    title: 'Learning, Assessment and Student Engagement',
    icon: 'Sparkles',
    bullets: [
      'Beyond the three core deliverables, SmartEdu Hub brings administration, digital learning, artificial intelligence, communication, finance, assessments, and student engagement together in one modern platform designed to help basic education schools thrive in a digital world.',
    ],
    frameworkBlocks: [
      {
        label: 'Explore',
        text: 'A school-wide digital learning library where students and teachers browse subjects, study materials, past questions, and AI-powered books from one place.',
        icon: 'Search',
      },
      {
        label: 'AI Books',
        text: 'Digital textbooks with an intelligent tutor so learners ask questions while reading, receive summaries, and understand difficult concepts independently.',
        icon: 'Sparkles',
      },
      {
        label: 'Assessments and results',
        text: 'Teachers create, duplicate, and manage class tests and examinations from one workspace, while schools control when results become visible to students and parents.',
        icon: 'ListChecks',
      },
      {
        label: 'Competitions',
        text: 'Students compete nationally for cash prizes, laptops, educational gifts, and recognition — motivating academic excellence beyond the classroom.',
        icon: 'Goal',
      },
    ],
  },
  {
    id: 'ubec-08b',
    layout: 'framework',
    chapter: '4d. Platform Features',
    title: 'School Operations and Administration',
    icon: 'Monitor',
    frameworkBlocks: [
      {
        label: 'Dashboard',
        text: 'A live overview of student numbers, teacher activity, attendance, fees, outstanding payments, and ongoing classes across any school, LGA, or state.',
        icon: 'Monitor',
      },
      {
        label: 'Communication',
        text: 'Built-in private messaging, broadcast announcements, and role-based communication keep teachers, students, and administrators connected.',
        icon: 'MessageCircle',
      },
      {
        label: 'Classes and timetable',
        text: 'Schools set up their academic structure and weekly timetable so classes, subjects, teachers, attendance, assessments, and results stay connected.',
        icon: 'Presentation',
      },
      {
        label: 'Finance and activity log',
        text: 'Track fees, payments, expenses, scholarships, and financial reports, while an activity log records who did what and when for full transparency.',
        icon: 'Wallet',
      },
    ],
  },
  {
    id: 'ubec-09',
    layout: 'bullets',
    chapter: '5. Technical Specifications',
    title: 'Technical Specifications',
    icon: 'Laptop',
    bullets: [
      'Cloud-hosted on secure, data-sovereign servers with 99.9% uptime SLA and daily automated backups, with optional on-premise deployment for institutions with strict data residency requirements.',
      'Mobile-first responsive design, optimised for Android and iOS smartphones and tablets, requiring no native app installation for core functions.',
      'Role-based access control (RBAC): granular permission management ensures that each user — from a class teacher to a SUBEB director or UBEC national coordinator — sees precisely the data relevant to their role.',
      'API-ready integration layer designed to connect with existing government education data systems, including national education management information systems (EMIS), examination databases, and identity registries.',
      'End-to-end encryption for all data in transit and at rest, compliant with applicable data protection legislation.',
      'Multilingual interface configurable to support English and additional languages as required.',
    ],
  },
  {
    id: 'ubec-10',
    layout: 'framework',
    chapter: '6. Implementation Plan',
    title: 'Implementation Plan',
    icon: 'GitBranch',
    bullets: [
      'SmartEdu Hub proposes a phased implementation to ensure quality adoption, adequate training, and measurable impact across selected states, LGAs, and schools under UBEC coordination.',
    ],
    frameworkBlocks: [
      {
        label: 'Phase 1: Mobilisation',
        text: 'Needs assessment, school baseline data capture, infrastructure readiness review across selected states and LGAs, and MOU signing with UBEC and participating SUBEBs.',
        icon: 'ClipboardList',
      },
      {
        label: 'Phase 2: Deployment',
        text: 'Practical rollout of SmartEdu Hub in pilot schools, with device readiness checks, platform configuration, and initial content deployment.',
        icon: 'Laptop',
      },
      {
        label: 'Phase 3: Training',
        text: 'Training of headteachers, teachers, and SUBEB officials on all platform modules, including responsible use of AI-assisted features in education.',
        icon: 'Users',
      },
      {
        label: 'Phase 4: Coordinated rollout',
        text: 'Progressive rollout across agreed states and LGAs, 24/7 technical support, performance monitoring, quarterly reviews with UBEC leadership, and refresher training.',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    id: 'ubec-11',
    layout: 'twoColumn',
    chapter: '7. Relevance to UBEC',
    title: 'Why SmartEdu Hub is Relevant to UBEC',
    icon: 'Landmark',
    leftTitle: 'UBEC basic education priority',
    leftBullets: [
      'Strengthen Universal Basic Education delivery across all states and the FCT.',
      'Improve learning outcomes and examination readiness at national scale.',
      'Give UBEC and SUBEB officials real-time school performance data.',
      'Reduce paperwork and strengthen accountability in public basic schools.',
      'Build teacher capacity for digital-age classroom delivery nationwide.',
    ],
    rightTitle: 'SmartEdu Hub contribution',
    rightBullets: [
      'One integrated platform for learning, assessment, administration, communication, and finance.',
      'NERDC-aligned iBooks, video lessons, AI tutor, and past questions for WAEC, NECO, JAMB, BECE, and NCEE.',
      'Federated analytics dashboard filterable by school, LGA, or state for evidence-based policy decisions.',
      'Paperless attendance, results, report cards, and parent communication.',
      'Locally developed, field-tested, and supported by a Nigerian education company with government deployment experience.',
    ],
  },
  {
    id: 'ubec-12',
    layout: 'bullets',
    chapter: '8. Teacher Capacity',
    title: 'Teacher Capacity Development Support',
    icon: 'Users',
    bullets: [
      'Teacher capacity development is central to the success of any digital education intervention. SmartEdu Hub combines platform onboarding with practical support on lesson preparation, use of the digital library and AI Books, continuous assessment, CBT and past-question practice, attendance and results, learner tracking, school communication, and responsible classroom integration of AI-assisted tools.',
      'Training will cover: using SmartEdu Hub for attendance, records, reporting, and parent communication; using CBT and past questions to strengthen assessment; using NERDC-tailored video and audio lessons and offline lesson notes; using iBooks, AI tutor support, flashcards, and common-mistake prompts; and using Generative AI responsibly to improve lesson planning, assessment design, and school reporting.',
      'Structured refresher training for teachers and administrators every six months, with ad-hoc sessions available for new staff joiners, ensures sustainable adoption across UBEC-supported basic education schools.',
    ],
  },
  {
    id: 'ubec-13',
    layout: 'framework',
    chapter: '9. Support and Maintenance',
    title: 'Support and Maintenance',
    icon: 'Phone',
    frameworkBlocks: [
      {
        label: 'National coordinator',
        text: 'A dedicated SmartEdu Hub representative serving as the primary relationship manager and escalation point for UBEC and participating SUBEB officials.',
        icon: 'UserRound',
      },
      {
        label: 'Technical helpdesk',
        text: 'A staffed helpdesk accessible Monday to Saturday, 7am to 7pm, via phone, WhatsApp, and email. Critical issues receive a maximum 4-hour response commitment.',
        icon: 'MessageCircle',
      },
      {
        label: 'Software updates',
        text: 'All platform updates — new features, security patches, and content additions — delivered automatically at no additional cost throughout the contract period.',
        icon: 'Sparkles',
      },
      {
        label: 'Quarterly reviews',
        text: 'Formal quarterly performance review meetings with UBEC and SUBEB leadership to assess platform adoption, surface emerging issues, and co-develop improvement priorities.',
        icon: 'ClipboardList',
      },
    ],
  },
  {
    id: 'ubec-14',
    layout: 'bullets',
    chapter: '10. Commercial Terms',
    title: 'Commercial Terms',
    icon: 'Wallet',
    bullets: [
      'SmartEdu Hub offers flexible, competitive, and transparent pricing structures designed to accommodate the procurement frameworks, budget cycles, and financial realities of federal and state basic education programmes.',
      'Pricing can be structured per school, per LGA, per state, or as a national licence framework, with options for phased rollout that align with UBEC programme planning and SUBEB implementation timelines.',
      'We welcome the opportunity to discuss commercial terms with UBEC leadership, technical teams, and participating SUBEB procurement units at a mutually convenient time.',
    ],
  },
  {
    id: 'ubec-15',
    layout: 'bullets',
    chapter: '11. Request',
    title: 'Request to UBEC',
    icon: 'Mail',
    bullets: [
      'We respectfully invite the Universal Basic Education Commission to consider SmartEdu Hub as the digital learning, school-management, and reporting platform for Universal Basic Education transformation across Nigeria. We would welcome the opportunity to present the full solution and demonstrate how it can align with UBEC’s national basic education priorities.',
      'We propose: a live demonstration of the full platform to UBEC leadership and designated SUBEB officials; access to a pilot environment for a selection of schools in agreed states; phased deployment coordinated with participating SUBEBs; and meetings with technical, procurement, and programme implementation teams to address any specific requirements.',
    ],
  },
  {
    id: 'ubec-16',
    layout: 'bullets',
    chapter: '12. Conclusion',
    title: 'Conclusion',
    icon: 'Handshake',
    bullets: [
      'SmartEdu Hub is not a promise of future capability. It is a working, proven, locally developed platform that has demonstrated its ability to engage students, empower teachers, relieve administrators, and give policymakers the data they need to lead with confidence. It is built for the real world — for schools with intermittent power, for teachers at all levels of digital comfort, and for learners who deserve the best that educational technology can offer.',
      'We respect the weight of the decision before the Universal Basic Education Commission and are committed to earning the Commission’s confidence through transparency, demonstration, and measurable results. A national adoption framework around SmartEdu Hub would give UBEC a structured way to strengthen basic education delivery, support SUBEB coordination, improve teacher capacity, and build an evidence base for education policy across Nigeria.',
    ],
    footer:
      'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan\nSmartEduHub Accessible Digital Platform Team (SMEH)\nwww.smarteduhub.ng\nwww.accessiblepublishers.com',
    notes:
      'Close with the conclusion and institutional submission block, not a personal signature line.',
  },
]

export const ubecProposal: PresentationState = {
  slides: ubecProposalSlides,
  currentIndex: 0,
  seedRevision: UBEC_SEED_REVISION,
  meta: UBEC_PROPOSAL_META,
}
