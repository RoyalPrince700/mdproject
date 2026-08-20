import type { PresentationState, Slide } from '../types/slide'

export const UNION_DOCUMENT_ID = 'smeh-union-proposal'
export const UNION_DOCUMENT_TITLE =
  'SmartEdu Hub Proposal to Union Bank'
export const UNION_SEED_REVISION = 1

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

export const UNION_PROPOSAL_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'August 2026',
  letterDate: '20th August 2026',
  kind: 'proposal',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'The Managing Director/Chief Executive Officer',
  recipientOrg: 'Union Bank of Nigeria Plc',
  recipientAddress:
    'Stallion Plaza, 36 Marina, Lagos Island, Lagos State, Nigeria',
  subject:
    'Proposal for Strategic Partnership on SmartEdu Hub for Education Digital Transformation, Teacher Development, and Measurable Edu360 Impact',
  website: 'www.smarteduhub.ng',
  coverLetter: [
    'We respectfully write to introduce SmartEdu Hub, an indigenous digital learning and school management platform powered by Accessible Publishers Limited, for the consideration of Union Bank of Nigeria Plc as a strategic education partner under the Bank’s Edu360 and UnionCares programmes.',
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning solutions, and the development of quality educational materials for schools and institutions across Nigeria. Since our establishment in 1996, we have remained committed to supporting educational advancement through curriculum-aligned content, digital innovation, and teacher development initiatives.',
    'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025. This recognition underscores our commitment to reinventing education delivery through publishing excellence, education innovation, and digital solutions.',
    'We recognise Union Bank as a long-established Nigerian financial institution with a clear conviction that education is a strategic investment rather than a peripheral social obligation. We also note the Bank’s Edu360 platform under UnionCares, its sustained focus on teacher development through initiatives such as the Maltina Teacher of the Year partnership, and its emphasis on digital literacy, STEM capability, youth readiness, and long-term ecosystem building across Nigerian schools and communities.',
    'This proposal presents SmartEdu Hub as the learning, assessment, school-management, and reporting layer that can help Union Bank convert education investments into measurable classroom use, teacher productivity, learner outcomes, and Edu360 reporting evidence.',
    'A key strength of Accessible Publishers Limited is that our digital products are developed internally by our Technology and Digital team, working closely with our Editorial, Learning and Development, Media, Marketing, Distribution, and Administration teams. This gives us strong control over product development, localisation, implementation, support, and continuous improvement.',
    'We have also developed and implemented a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch. This demonstrates practical experience in building and deploying education technology solutions at institutional scale.',
    'We would be honoured to present SmartEdu Hub to Union Bank’s leadership, Edu360 stakeholders, and education-partnership teams at your convenience.',
  ],
  signOff: [
    'Yours faithfully,',
    'Gbadega Adedapo',
    'MD/CEO',
    'For: Accessible Publishers Limited',
  ],
}

export const unionProposalSlides: Slide[] = [
  {
    id: 'union-01',
    layout: 'title',
    title: 'Proposal for Strategic Partnership on\nSmartEdu Hub Digital Solutions',
    subtitle:
      'Learning Management and School Management System for Union Bank’s Edu360 education initiatives, teacher development, and school-support programmes',
    footer:
      'Submitted to Union Bank of Nigeria Plc\nAccessible Publishers Limited · August 2026',
    notes:
      'Introduce SmartEdu Hub as a locally built education platform that can help Union Bank turn Edu360 investments into classroom use, teacher support, and reportable outcomes.',
  },
  {
    id: 'union-02',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction',
    icon: 'Handshake',
    bullets: [
      'We respectfully write to introduce SmartEdu Hub, an indigenous digital learning and school management platform powered by Accessible Publishers Limited, for the consideration of Union Bank of Nigeria Plc as a strategic education partner under the Bank’s Edu360 and UnionCares programmes.',
      'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company with core expertise in educational publishing, printing, technology-enabled learning, and curriculum-aligned materials. Established in 1996, we support schools through content, digital innovation, and teacher development.',
      'Recently, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025.',
      'We recognise Union Bank’s Edu360 platform as a sustained education ecosystem spanning teacher development, digital literacy, STEM capability, youth readiness, and inclusive school support aligned with SDG 4.',
    ],
    notes:
      'These paragraphs become the opening letter in the Word download. Edit them here if you need to change names, dates, or emphasis.',
  },
  {
    id: 'union-02b',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction (continued)',
    icon: 'FileText',
    bullets: [
      'This proposal presents SmartEdu Hub as the learning, assessment, school-management, and reporting layer that can help Union Bank convert education investments into measurable classroom use, teacher productivity, learner outcomes, and Edu360 reporting evidence.',
      'Our digital products are developed internally by our Technology and Digital team, working with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration. This gives us control over localisation, implementation, support, and improvement.',
      'We have developed a related digital education solution for Abia State, and more than 30 schools have adopted SmartEdu Hub within three months of launch.',
      'We would be honoured to present SmartEdu Hub to Union Bank’s leadership, Edu360 stakeholders, and education-partnership teams at your convenience.',
    ],
  },
  sectionSlide('union-03', 'The Proposal', 'SmartEdu Hub × Union Bank', {
    subtitle: 'Platform, partnership model, and request',
  }),
  {
    id: 'union-04',
    layout: 'bullets',
    chapter: '1. Executive Summary',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'SmartEdu Hub is a locally developed, AI-powered school management and digital learning platform created to improve how schools teach, assess, administer, communicate, and report outcomes. For Union Bank, it offers a practical way to move Edu360 from episodic school support into a structured programme that can be deployed, monitored, and reported with confidence.',
      'Unlike software that handles only school records, SmartEdu Hub brings administration, digital learning, artificial intelligence, communication, finance, assessments, and student engagement together in one environment. This includes interactive iBooks with AI support, a digital learning library, curriculum-aligned video and audio lessons, computer-based testing and past questions, attendance and results, teacher and student records, and reporting tools that make classroom use visible.',
      'We therefore propose a phased partnership that begins with review and pilot deployment in selected Union Bank–supported schools, followed by onboarding, teacher capacity development, implementation support, and Edu360-ready reporting. The objective is to give Union Bank a credible Nigerian-built education solution that produces measurable value for learners, educators, school leaders, and the Bank itself.',
    ],
  },
  {
    id: 'union-05',
    layout: 'bullets',
    chapter: '2. About the Company',
    title: 'About Accessible Publishers Limited',
    icon: 'Building2',
    bullets: [
      'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. Over the years, the company has built a strong reputation across educational publishing, curriculum resources, school support materials, and technology-enabled learning solutions for schools, institutions, government programmes, and corporate partners.',
      'Our work is strengthened by a multidisciplinary structure that brings together Editorial, Learning and Development, Technology and Digital, Media, Production, Marketing, Distribution, Human Resources, and Administration. This internal capacity allows us to design, produce, deploy, and support educational solutions without depending on outsourced ownership of core products.',
      'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year. With a national footprint and deep understanding of the realities of Nigerian schools, we are positioned to support partners such as Union Bank with solutions that are both locally grounded and institutionally scalable.',
    ],
  },
  {
    id: 'union-06',
    layout: 'framework',
    chapter: '3. Capability Statement',
    title: 'Capability Statement',
    icon: 'ShieldCheck',
    frameworkBlocks: [
      {
        label: 'In-house product',
        text: 'SmartEdu Hub is built internally by our Technology and Digital team, working closely with Editorial, Learning and Development, Media, and production units, which gives us direct control over localisation, implementation, support, and continuous improvement.',
        icon: 'Laptop',
      },
      {
        label: 'Institutional delivery',
        text: 'We have implemented a related digital education solution for Abia State and have seen more than 30 schools adopt SmartEdu Hub within three months of launch, demonstrating practical experience in public-sector and institutional deployment.',
        icon: 'Landmark',
      },
      {
        label: 'Curriculum content',
        text: 'Our content foundation includes long-standing NERDC-aligned textbooks, interactive iBooks, video and audio lessons, question banks, and teacher support resources designed for actual classroom use.',
        icon: 'BookOpen',
      },
      {
        label: 'Edu360 reporting',
        text: 'Usage, attendance, assessment, and engagement data can be summarised into clear evidence that supports Union Bank’s Edu360 reporting, UnionCares communication, and internal programme review.',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'union-07',
    layout: 'framework',
    chapter: '4. Platform Overview',
    title: 'Overview of SmartEdu Hub',
    icon: 'Layers',
    bullets: [
      'SmartEdu Hub is Nigeria’s all-in-one school management and digital learning platform. It is designed to help schools simplify administration, improve teaching, strengthen student performance, and prepare learners for major examinations from one secure environment. The full power of the platform is realised when learning, assessment, operations, communication, and reporting work together and share the same student, teacher, and school records.',
    ],
    frameworkBlocks: [
      {
        label: 'Digital learning library',
        text: 'Explore gives students and teachers a central place to access subjects, study materials, past questions, and AI-powered books, reducing dependence on scattered physical resources.',
        icon: 'ClipboardList',
      },
      {
        label: 'AI Books and iBooks',
        text: 'Curriculum-aligned digital books that students can read, question, summarise, and revise with an in-built AI tutor, while teachers use the same environment for lesson support.',
        icon: 'NotebookPen',
      },
      {
        label: 'Assessment and examination practice',
        text: 'Schools can create assessments, run computer-based tests, and give learners organised access to WAEC, NECO, JAMB/UTME, BECE, NCEE, and related past questions with faster feedback.',
        icon: 'ListChecks',
      },
      {
        label: 'School operations and reporting',
        text: 'A live dashboard and administration layer for attendance, student and teacher records, classes, timetables, results, communication, finance, and usage reports that an Edu360 partner can review.',
        icon: 'Monitor',
      },
    ],
  },
  {
    id: 'union-07b',
    layout: 'framework',
    chapter: '4. Platform Overview',
    title: 'Learning, Assessment and Student Engagement',
    icon: 'BookOpen',
    bullets: [
      'The learning side of SmartEdu Hub is built to keep donated devices and ICT laboratories in daily academic use. Students do not only gain access to hardware; they gain a structured digital library, examination practice, AI-supported reading, and opportunities for academic excellence that can be tracked by the school and by Union Bank.',
    ],
    frameworkBlocks: [
      {
        label: 'Explore',
        text: 'A school-wide digital learning library where students and teachers can browse subjects, study materials, past questions, and AI-powered books from one place, anytime they need them.',
        icon: 'Search',
      },
      {
        label: 'AI Books',
        text: 'Digital textbooks combined with an intelligent tutor so learners can ask questions while reading, receive chapter summaries, understand difficult concepts, and revise independently.',
        icon: 'Sparkles',
      },
      {
        label: 'Past questions',
        text: 'Organised examination materials from major Nigerian examining bodies, including WAEC, NECO, JAMB, BECE, and NCEE, to improve familiarity with exam patterns and learner confidence.',
        icon: 'FileText',
      },
      {
        label: 'Assessments',
        text: 'Teachers can create, duplicate, publish, and manage class tests and examinations from one workspace, saving time and standardising assessment practice across participating schools.',
        icon: 'ListChecks',
      },
      {
        label: 'Results',
        text: 'Schools can manage and release student results securely, controlling when results become visible and reducing the delays and errors associated with purely manual result processing.',
        icon: 'BarChart3',
      },
      {
        label: 'Competitions',
        text: 'Students can compete for national recognition and educational prizes, giving Union Bank–supported learners a motivation layer that extends beyond routine classroom work.',
        icon: 'Goal',
      },
    ],
  },
  {
    id: 'union-07c',
    layout: 'framework',
    chapter: '4. Platform Overview',
    title: 'School Operations and Administration',
    icon: 'ClipboardList',
    bullets: [
      'The operations side of SmartEdu Hub gives school leaders, teachers, and programme coordinators a single view of the school. This is important for Union Bank because it turns Edu360-supported schools into environments that can be administered, monitored, and reported with greater accuracy.',
    ],
    frameworkBlocks: [
      {
        label: 'Dashboard',
        text: 'A live overview of student numbers, teacher activity, attendance, fees, outstanding payments, and ongoing classes, so school leaders can see what is happening without opening multiple systems.',
        icon: 'Monitor',
      },
      {
        label: 'Communication',
        text: 'Built-in private messaging, broadcast announcements, and role-based communication keep teachers, students, and administrators connected without relying on scattered chat groups.',
        icon: 'MessageCircle',
      },
      {
        label: 'Teachers and students',
        text: 'Centralised records for teacher subjects, classes, contacts, and schedules, together with student enrolment, academic history, class assignment, and performance tracking.',
        icon: 'Users',
      },
      {
        label: 'Classes, subjects and timetable',
        text: 'Schools can set up their academic structure and weekly timetable so classes, subjects, teachers, attendance, assessments, and results stay connected in one system.',
        icon: 'Presentation',
      },
      {
        label: 'Attendance and management',
        text: 'Daily digital attendance, historical records, academic sessions, promotions, and grading are handled from one control centre, improving accountability and reducing paper-based gaps.',
        icon: 'ClipboardList',
      },
      {
        label: 'Finance and activity log',
        text: 'Schools can track fees, payments, expenses, scholarships, outstanding balances, and financial reports, while an activity log records who did what and when for transparency.',
        icon: 'Wallet',
      },
    ],
  },
  {
    id: 'union-08',
    layout: 'twoColumn',
    chapter: '5. Relevance to Union Bank',
    title: 'Why SmartEdu Hub is Relevant to Union Bank',
    icon: 'Landmark',
    leftTitle: 'Union Bank Edu360 priority',
    leftBullets: [
      'Education is treated as a strategic investment under Edu360 and UnionCares.',
      'The Bank emphasises teacher development, digital literacy, STEM, and youth readiness.',
      'Union Bank seeks sustained ecosystem building rather than one-off donations.',
      'There is growing need for interventions that can be measured over time.',
    ],
    rightTitle: 'SmartEdu Hub contribution',
    rightBullets: [
      'SmartEdu Hub provides curriculum-aligned learning content that gives devices and ICT labs daily classroom purpose.',
      'It supports teacher onboarding, lesson delivery, learner assessment, and digital school routines.',
      'It offers structured examination support for learners preparing for senior secondary assessments.',
      'It generates school-level usage and performance evidence that can strengthen Edu360 reporting and review.',
    ],
  },
  {
    id: 'union-09',
    layout: 'cards',
    chapter: '5. Relevance to Union Bank',
    title: 'From Ecosystem Intent to Classroom Use',
    icon: 'GraduationCap',
    bullets: [
      'Union Bank’s Edu360 platform creates the right foundation through teacher recognition, school engagement, digital literacy, STEM exposure, and youth-development initiatives. However, infrastructure and programme intent alone do not guarantee sustained learning impact. Schools still need curriculum-aligned content, structured assessments, teacher workflow tools, learner records, and a reliable way to monitor actual usage.',
      'SmartEdu Hub supplies that missing operational layer. It turns sponsored education assets into a daily teaching and learning system that students can use, teachers can manage, school leaders can supervise, and Union Bank can evaluate through clear evidence of adoption and performance.',
      'Because the platform is locally built and adaptable to Nigerian school conditions, it is also well suited to the realities of intermittent power, mixed device availability, low-bandwidth environments, and varying levels of digital literacy among teachers and learners.',
    ],
  },
  {
    id: 'union-10',
    layout: 'framework',
    chapter: '6. Partnership Scope',
    title: 'Proposed Partnership Scope',
    icon: 'GitBranch',
    frameworkBlocks: [
      {
        label: '1. Review',
        text: 'Present SmartEdu Hub to the Bank’s leadership, Edu360 team, and relevant education stakeholders, then agree the intervention scope, school profile, success criteria, and branding expectations.',
        icon: 'Presentation',
      },
      {
        label: '2. Pilot',
        text: 'Deploy the platform in selected Union Bank–supported schools and onboard teachers, administrators, and relevant education officers within a clearly defined pilot structure.',
        icon: 'GraduationCap',
      },
      {
        label: '3. Capacity development',
        text: 'Provide practical training for school personnel on platform use, lesson support, assessment workflows, learner tracking, and responsible use of AI-assisted features where relevant.',
        icon: 'Users',
      },
      {
        label: '4. Report and scale',
        text: 'Review implementation data, share Edu360-ready reports, refine the delivery model, and scale the solution across additional agreed locations where the pilot proves successful.',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    id: 'union-11',
    layout: 'bullets',
    chapter: '7. Teacher Capacity',
    title: 'Teacher Capacity Development Support',
    icon: 'Users',
    bullets: [
      'Teacher capacity development is central to the success of any digital education intervention and aligns directly with Union Bank’s Edu360 emphasis on investing in teachers who multiply learning outcomes. SmartEdu Hub therefore combines platform onboarding with practical support on lesson preparation, use of the digital library and AI Books, continuous assessment, CBT and past-question practice, attendance and results, learner tracking, school communication, and responsible classroom integration of AI-assisted tools.',
      'This approach helps teachers move beyond passive receipt of devices or content. It equips them to plan better lessons, manage records more efficiently, identify learning gaps earlier, communicate with learners and parents from one platform, and use digital resources in ways that improve classroom delivery and student preparedness for examinations.',
      'For Union Bank, this means the education intervention can be assessed not only by the number of schools reached, but also by the quality of usage, teacher confidence, and evidence of improved engagement within participating schools.',
    ],
  },
  {
    id: 'union-12',
    layout: 'twoColumn',
    chapter: '8. Delivery Model',
    title: 'Local Ownership and National Reach',
    icon: 'Globe',
    leftTitle: 'Why local ownership matters',
    leftBullets: [
      'The platform is not a resold foreign product without local accountability.',
      'Local ownership makes curriculum alignment and contextual adaptation faster.',
      'Technical support is responsive to Nigerian school realities and constraints.',
      'Feedback from schools and authorities can be translated quickly into product improvements.',
    ],
    rightTitle: 'Why rollout is practical',
    rightBullets: [
      'Accessible Publishers Limited has operational reach across Nigeria through its existing footprint.',
      'The company can support onboarding, training, field engagement, and monitoring at scale.',
      'Its multidisciplinary workforce provides implementation depth across content, technology, and service delivery.',
      'The organisation has experience engaging with public institutions, education agencies, universities, and corporate partners.',
    ],
  },
  {
    id: 'union-13',
    layout: 'framework',
    chapter: '9. Support',
    title: 'Support and Maintenance',
    icon: 'Phone',
    frameworkBlocks: [
      {
        label: 'Relationship manager',
        text: 'A dedicated coordinator will serve as Union Bank’s primary relationship manager and escalation point throughout the education partnership.',
        icon: 'UserRound',
      },
      {
        label: 'Helpdesk',
        text: 'Support will be available through structured helpdesk channels such as phone, WhatsApp, and email, with priority attention given to critical operational issues.',
        icon: 'MessageCircle',
      },
      {
        label: 'Updates',
        text: 'Software improvements, security patches, and relevant content updates will be delivered during the engagement period to keep the platform functional and current.',
        icon: 'Sparkles',
      },
      {
        label: 'Reviews',
        text: 'Quarterly review meetings with the Bank and participating schools will help assess uptake, address implementation issues, and schedule refresher training where needed.',
        icon: 'ClipboardList',
      },
    ],
  },
  {
    id: 'union-14',
    layout: 'bullets',
    chapter: '10. Request',
    title: 'Request to Union Bank',
    icon: 'Mail',
    bullets: [
      'We respectfully invite Union Bank to consider SmartEdu Hub as the digital learning, school-management, and reporting platform for selected Edu360 and school-support initiatives. We would welcome the opportunity to present the full solution and demonstrate how it can align with the Bank’s education, teacher development, digital literacy, and youth-readiness priorities.',
      'We also propose a focused pilot in selected Union Bank–supported schools so that the Bank can assess usability, relevance, implementation requirements, and reporting value before broader scale-up. This would provide a practical basis for joint learning, refinement, and a partnership model built on measurable outcomes rather than assumptions alone.',
    ],
  },
  {
    id: 'union-15',
    layout: 'bullets',
    chapter: '11. Conclusion',
    title: 'Conclusion',
    icon: 'Handshake',
    bullets: [
      'SmartEdu Hub is not a promise of future capability. It is a working, locally developed platform that already supports teaching, assessment, school administration, communication, finance, and reporting, and it is designed for the practical realities of Nigerian schools, including mixed device access, low bandwidth, and varying levels of digital comfort among teachers and learners.',
      'We respect the weight of the decision before Union Bank and are committed to earning the Bank’s confidence through transparency, demonstration, and measurable results. A partnership around SmartEdu Hub would give the Bank a structured way to convert Edu360 from equipment and infrastructure support into sustained classroom use, stronger teacher capacity, better learner preparation, and evidence that can be reviewed and reported with confidence.',
    ],
    footer:
      'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan\nSmartEduHub Accessible Digital Platform Team (SMEH)\nwww.smarteduhub.ng\nwww.accessiblepublishers.com',
    notes:
      'Close with the conclusion and institutional submission block, not a personal signature line.',
  },
]

export const unionProposal: PresentationState = {
  slides: unionProposalSlides,
  currentIndex: 0,
  seedRevision: UNION_SEED_REVISION,
  meta: UNION_PROPOSAL_META,
}
