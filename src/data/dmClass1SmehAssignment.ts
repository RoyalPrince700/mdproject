import type { PresentationState, Slide } from '../types/slide'

export const DM_CLASS1_SMEH_ASSIGNMENT_ID = 'dm-class1-smeh-assignment'
export const DM_CLASS1_SMEH_ASSIGNMENT_TITLE =
  'Digital Marketing Class 1 Practical Work — SmartEdu Hub'
export const DM_CLASS1_SMEH_ASSIGNMENT_REVISION = 1

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

export const DM_CLASS1_SMEH_ASSIGNMENT_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: '',
  degree: 'Digital Marketing Training — Class 1 Practical Work',
  date: 'September 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Calibri',
  subject: 'Digital Marketing Class 1 Practical Work — SmartEdu Hub',
}

export const dmClass1SmehAssignmentSlides: Slide[] = [
  {
    id: 'smeh-act-01',
    layout: 'title',
    title: 'Class 1 Practical Work\nSmartEdu Hub',
    subtitle:
      'Audience research, competitor analysis, and campaign thought process for SmartEdu Hub',
    notes:
      'Class 1 assignment. Open in Document view and download as DOCX. Apply the tutor’s sequence: problem → audience → personas → competitors → demographics → discovery, trust, action, and top of mind.',
  },
  sectionSlide('smeh-act-02', 'Brief', '1. Assignment brief', {
    subtitle: 'What the tutor asked, and how this paper answers it',
  }),
  {
    id: 'smeh-act-03',
    layout: 'bullets',
    chapter: '1. Assignment brief',
    title: 'Practical work — the questions',
    icon: 'ClipboardList',
    bullets: [
      'This paper is the Class 1 practical work for digital marketing (DM) training at Accessible Publishers Limited. **DM means Digital Marketing** throughout.',
      'The task: pick any company product; research the target audience; analyse key competitors; then answer four questions — what problem the company solves; where potential customers would discover it; what would make them trust it; and what action we want them to take.',
      'The brand for this first paper is **SmartEdu Hub**, the school management and digital learning platform of Accessible Publishers Limited. Later papers will apply the same method to Smipay, Oxygen FM Ibadan, Best Technology, and Accessible Publishers itself.',
      'The method is the tutor’s campaign thought process from Class 1, used in order: problem → audience → buyer personas → competitor audit → demographics → top-of-mind awareness. Discovery, trust, and desired action sit inside that sequence, not beside it.',
    ],
  },
  {
    id: 'smeh-act-04',
    layout: 'framework',
    chapter: '1. Assignment brief',
    title: 'How Class 1 is applied in this paper',
    icon: 'GitBranch',
    bullets: [
      'The assignment is not a list of ads. Digital marketing moves people through a journey that has an end goal. Each section below uses a Class 1 tool for a specific job.',
    ],
    frameworkBlocks: [
      {
        label: 'Thought process',
        text: 'Problem, audience, personas, competitors, demographics, then top of mind — the tutor’s order. Do not start with “we have a platform.”',
        icon: 'ListChecks',
      },
      {
        label: 'RACE',
        text: 'Used to name the day-to-day journey: Reach, Act, Conversion, Engage. Desired actions are written per persona against these stages.',
        icon: 'Goal',
      },
      {
        label: 'Channels and budget',
        text: 'Meta is the affordable default. Google Ads and LinkedIn Ads are used only where budget or a B2B audience justifies them. Traditional and digital work together.',
        icon: 'Share2',
      },
      {
        label: 'SOSTAC close',
        text: 'A short executive summary at the end, because SOSTAC is how this work would be presented to the Managing Director.',
        icon: 'Presentation',
      },
    ],
  },
  sectionSlide('smeh-act-05', 'The product', '2. Product chosen', {
    subtitle: 'SmartEdu Hub — not “an app,” a school ecosystem',
  }),
  {
    id: 'smeh-act-06',
    layout: 'bullets',
    chapter: '2. Product chosen',
    title: 'Why SmartEdu Hub',
    icon: 'GraduationCap',
    bullets: [
      'The product chosen is **SmartEdu Hub (SMeH)** — Nigeria’s all-in-one AI-powered school management and digital learning platform, built in-house by Accessible Publishers Limited in Ibadan.',
      'It is not only a School Management System and not only a learning app. It brings administration, teaching, learning, communication, finance, assessments, AI Books, past-question practice, and national academic competitions into one secure environment.',
      'Positioning in one sentence: schools use SmartEdu Hub to **manage better, teach better, and learn better** — from enrolment and fees to WAEC practice and prize competitions — without jumping across disconnected tools.',
      'This matters for the assignment. If the product is described as “we have a platform,” the campaign will talk to nobody. The offer must be split by product line, because a bursar buying fee tracking is not the same person as an SS3 student practising JAMB questions.',
    ],
  },
  {
    id: 'smeh-act-07',
    layout: 'framework',
    chapter: '2. Product chosen',
    title: 'Product lines used in this assignment',
    icon: 'Layers',
    bullets: [
      'The tutor said to create as many personas as each product line needs. These are the SmartEdu Hub lines this paper will speak to.',
    ],
    frameworkBlocks: [
      {
        label: 'SMS — school operations',
        text: 'Enrolment, attendance, timetable, results, staff records, dashboard, activity log. Buyer: proprietor, principal, bursar.',
        icon: 'Building2',
      },
      {
        label: 'LMS — teaching and learning',
        text: 'Explore library, AI Books, lesson support, assignments, assessments. Buyer and user: teacher, student, parent.',
        icon: 'BookOpen',
      },
      {
        label: 'Exam prep — PQ / CBT',
        text: 'WAEC, NECO, JAMB, BECE, and NCEE past questions, timed mocks, worked solutions. Buyer: parent. User: SS2–SS3 student.',
        icon: 'FileText',
      },
      {
        label: 'Competitions',
        text: 'National academic contests with cash prizes, devices, gifts, trips, and rankings. User: JSS–SSS students. Influencer: parent and school.',
        icon: 'Sparkles',
      },
      {
        label: 'Finance and parent portal',
        text: 'Fees, outstanding balances, reports, attendance and result visibility for parents. Buyer: bursar and proprietor. User: parent.',
        icon: 'Wallet',
      },
    ],
  },
  sectionSlide('smeh-act-08', 'Step 1', '3. The problem SmartEdu Hub solves', {
    subtitle: 'Tutor Step 1 — state the customer problem in plain language',
  }),
  {
    id: 'smeh-act-09',
    layout: 'bullets',
    chapter: '3. The problem SmartEdu Hub solves',
    title: 'The problem — not the product',
    icon: 'TriangleAlert',
    bullets: [
      '**Assignment answer:** SmartEdu Hub does not exist because “we built a platform.” It exists because Nigerian schools, teachers, parents, and exam candidates are stuck in a fragmented system that wastes time, hides performance, and leaves learners under-prepared.',
      'Schools run on paper registers, Excel sheets, and WhatsApp groups. Leaders cannot see attendance, fees, and results on one screen. Teachers repeat the same assessment work. Students cannot find organised past questions or someone to explain a difficult chapter at 9 p.m. Parents hear about missing fees or poor results too late. Bursars lose money to informal collection.',
      'Exam season makes the gap worse. WAEC, NECO, JAMB, BECE, and NCEE reward pattern familiarity and timed practice. Many learners only meet that standard in expensive extra lessons, if at all.',
      'In the tutor’s language: SmartEdu Hub solves **fragmented school administration, weak learning delivery, and exam-preparation gaps**. That is the problem statement this campaign must keep repeating, in the words of each persona.',
    ],
  },
  {
    id: 'smeh-act-10',
    layout: 'framework',
    chapter: '3. The problem SmartEdu Hub solves',
    title: 'The same problem, said by each customer',
    icon: 'MessageCircle',
    frameworkBlocks: [
      {
        label: 'Proprietor',
        text: 'I cannot see whether the school is full, whether fees are in, or whether teaching is happening — until a parent complains.',
        icon: 'Building2',
      },
      {
        label: 'Teacher',
        text: 'I spend nights setting tests and chasing scripts. Students still arrive unprepared for external exams.',
        icon: 'Users',
      },
      {
        label: 'Student',
        text: 'I need past questions and a clear explanation now, on my phone, not next week in a lesson I already missed.',
        icon: 'GraduationCap',
      },
      {
        label: 'Parent',
        text: 'I pay fees and still cannot see attendance, results, or whether my child is ready for WAEC.',
        icon: 'UserRound',
      },
      {
        label: 'Bursar',
        text: 'Fee collection is manual, disputes are constant, and I cannot produce a clean report when the proprietor asks.',
        icon: 'Wallet',
      },
    ],
  },
  sectionSlide('smeh-act-11', 'Step 2', '4. Target audience', {
    subtitle: 'Tutor Step 2 — who must change behaviour',
  }),
  {
    id: 'smeh-act-12',
    layout: 'bullets',
    chapter: '4. Target audience',
    title: 'Who must change behaviour',
    icon: 'Target',
    bullets: [
      'SmartEdu Hub has more than one customer. The **economic buyer** (who pays) is often not the **daily user**. Campaigns that mix those two people waste budget.',
      '**Schools pay** for SMS, LMS, finance, and staff tools. The decision usually sits with the proprietor or principal, with the bursar and senior teachers influencing. **Parents pay** for exam-prep access, competition entry, and sometimes a child login. **Students and teachers use** the product every day.',
      'Primary target for school adoption: private and mission secondary schools in Nigeria, starting where Accessible Publishers already has book relationships — South-West first (Ibadan and surrounding states), then states already in conversation (including Abia experience and Ekiti outreach).',
      'Primary target for exam-prep and competitions: SS2–SS3 learners (age 15+) and their parents; JSS learners for competitions such as Accessible Summer. Secondary: teachers who assign practice; education officials who buy at system scale.',
      'Behaviour we need to change: from “we manage the school on paper and WhatsApp” and “we buy extra lessons in exam year” to “the school, the parent, and the student work inside one SmartEdu Hub environment.”',
    ],
  },
  sectionSlide('smeh-act-13', 'Step 3', '5. Buyer personas', {
    subtitle: 'Tutor Step 3 — detailed profiles with message and channel',
  }),
  {
    id: 'smeh-act-14',
    layout: 'bullets',
    chapter: '5. Buyer personas',
    title: 'Persona map',
    icon: 'Users',
    bullets: [
      'A buyer persona is a detailed profile of a segment we will speak to with specific messaging and channels. Class 1 gave three SmartEdu Hub examples (student, parent, school admin). This paper keeps those and adds the extra product-line personas the tutor asked for: teacher, bursar, and junior-secondary competition learner.',
      'Six personas are used here. That is enough to cover SMS, LMS, PQ exam bodies, finance, and competitions without pretending every Nigerian school stakeholder is one person.',
      'Demographics (Step 5) are written inside each persona so channel choice does not drift. Age, gender, location, income, device, and language must match the media we buy.',
    ],
  },
  {
    id: 'smeh-act-15',
    layout: 'framework',
    chapter: '5. Buyer personas',
    title: 'Persona 1 — Tunde, SS2–SS3 student',
    icon: 'GraduationCap',
    bullets: [
      'Class 1 Persona 1, expanded. Product line: PQ / CBT and AI Books. He does not buy the school SMS. He is the user we must reach on Meta.',
    ],
    frameworkBlocks: [
      {
        label: 'Profile',
        text: 'Male, 16, SS2 going into SS3, lives in Ibadan or Lagos, mobile-first Android. Studies at night on a phone. Mix of English and Yoruba. Exam-focused, not “edtech curious.”',
        icon: 'UserRound',
      },
      {
        label: 'Problem',
        text: 'He cannot find organised WAEC, NECO, and JAMB practice, and nobody is available to explain a hard topic at the moment he is stuck.',
        icon: 'TriangleAlert',
      },
      {
        label: 'Message',
        text: 'Practise real past questions on your phone. Ask the AI tutor when you get stuck. See your score before the exam, not after.',
        icon: 'Quote',
      },
      {
        label: 'Channel',
        text: 'Meta (Instagram and Facebook) as the default. TikTok for short “question of the day” reach. WhatsApp status via school and parent forwards. Not LinkedIn. Not Google Ads unless budget is high.',
        icon: 'Share2',
      },
      {
        label: 'Desired action',
        text: 'Create a free practice account, complete one timed mock, then return daily. Conversion: paid exam-prep access (parent pays).',
        icon: 'Goal',
      },
    ],
  },
  {
    id: 'smeh-act-16',
    layout: 'framework',
    chapter: '5. Buyer personas',
    title: 'Persona 2 — Mrs Adewale, parent',
    icon: 'Users',
    bullets: [
      'Class 1 Persona 2, expanded. Often a woman with children in secondary school. She cares about results, school quality, and whether fees are being used well. She is a buyer for exam prep and an influencer on school adoption.',
    ],
    frameworkBlocks: [
      {
        label: 'Profile',
        text: 'Female, 38–48, one or more children in JSS3–SS3. Lives in an urban or peri-urban South-West city. Smartphone plus WhatsApp all day. Listens to radio (including Oxygen FM if in Ibadan). Middle-income; education is a non-negotiable expense.',
        icon: 'UserRound',
      },
      {
        label: 'Problem',
        text: 'She pays school fees and extra lessons, yet still cannot see attendance, results, or whether her child is ready for WAEC. Information arrives late, through rumours or a paper report card.',
        icon: 'TriangleAlert',
      },
      {
        label: 'Message',
        text: 'See attendance, results, and exam practice in one place. Know if your child is ready — before the exam year becomes a crisis.',
        icon: 'Quote',
      },
      {
        label: 'Channel',
        text: 'Meta (Facebook first, Instagram second), WhatsApp school groups, and radio on Oxygen FM Ibadan. School events and PTA meetings. Avoid assuming she is on LinkedIn.',
        icon: 'Mic',
      },
      {
        label: 'Desired action',
        text: 'Ask the school whether they use SmartEdu Hub; register the child for PQ practice; join parent portal. Conversion: pay for exam-prep or support the school’s subscription.',
        icon: 'Goal',
      },
    ],
  },
  {
    id: 'smeh-act-17',
    layout: 'framework',
    chapter: '5. Buyer personas',
    title: 'Persona 3 — Alhaja Bello, proprietor',
    icon: 'Building2',
    bullets: [
      'Class 1 Persona 3 (school admin), split into the actual buyer. She owns or runs a private school. She buys the SMS + LMS. LinkedIn, email, events, and direct sales are justified here even though LinkedIn Ads are expensive.',
    ],
    frameworkBlocks: [
      {
        label: 'Profile',
        text: 'Female, 45–60, proprietor of a private or mission school (300–1,200 learners). Based in Ibadan, Abeokuta, Lagos, or a state capital. Uses WhatsApp constantly; checks email; attends NAPPS and association meetings. Decision is financial and reputational.',
        icon: 'UserRound',
      },
      {
        label: 'Problem',
        text: 'The school looks busy but she cannot prove occupancy, fee collection, or academic performance. Inspectors and parents ask for records she cannot produce quickly. Rival schools are starting to look “digital.”',
        icon: 'TriangleAlert',
      },
      {
        label: 'Message',
        text: 'Run the whole school from one screen — students, teachers, fees, results, and exam prep — built by Accessible Publishers, not a faceless foreign tool.',
        icon: 'Quote',
      },
      {
        label: 'Channel',
        text: 'Direct sales and school visits, NAPPS and book-fair events, email, WhatsApp, and LinkedIn for B2B reach. Radio and outdoor near school clusters for awareness. Google Ads only if the school-acquisition budget is high.',
        icon: 'Handshake',
      },
      {
        label: 'Desired action',
        text: 'Book a demo, run a pilot term, then subscribe the school. Conversion: paid SMS + LMS subscription.',
        icon: 'Goal',
      },
    ],
  },
  {
    id: 'smeh-act-18',
    layout: 'framework',
    chapter: '5. Buyer personas',
    title: 'Persona 4 — Chioma, teacher',
    icon: 'NotebookPen',
    bullets: [
      'Product line: LMS, assessments, and CBT assignments. She rarely pays. She can block or accelerate school adoption. Influencer marketing in Class 1 (a teacher showing PQ prep) is written for her peers.',
    ],
    frameworkBlocks: [
      {
        label: 'Profile',
        text: 'Female, 28–40, teaches SS English, Mathematics, or a science subject. Android phone, limited laptop time in the staff room. Active in teacher WhatsApp groups. Tired of setting tests by hand.',
        icon: 'UserRound',
      },
      {
        label: 'Problem',
        text: 'Assessment is repetitive. Students do not practise enough. She has no shared library of NERDC-aligned materials or past questions she can assign in minutes.',
        icon: 'TriangleAlert',
      },
      {
        label: 'Message',
        text: 'Set a class test in minutes, assign past questions by topic, and let AI Books explain the hard parts so you can teach, not photocopy.',
        icon: 'Quote',
      },
      {
        label: 'Channel',
        text: 'Meta, teacher WhatsApp groups, school INSET, NAPPS workshops, and teacher-influencer demos. Short how-to videos beat long ads.',
        icon: 'Share2',
      },
      {
        label: 'Desired action',
        text: 'Log in, create one assessment, assign one practice set. Conversion: become the internal champion who tells the principal “we should keep this.”',
        icon: 'Goal',
      },
    ],
  },
  {
    id: 'smeh-act-19',
    layout: 'framework',
    chapter: '5. Buyer personas',
    title: 'Persona 5 — Mr Adebayo, bursar',
    icon: 'Wallet',
    bullets: [
      'Product line: finance management inside the SMS. He does not buy exam prep. If fee tracking is weak, the proprietor will not renew. Trust for him is audit, not inspiration.',
    ],
    frameworkBlocks: [
      {
        label: 'Profile',
        text: 'Male, 35–55, bursar or accounts officer in a private school. Works on a laptop in the office and a phone for alerts. Cares about outstanding balances, receipts, and a report he can defend.',
        icon: 'UserRound',
      },
      {
        label: 'Problem',
        text: 'Fee collection is manual. Disputes with parents are constant. Scholarships and instalments are tracked in a notebook. He cannot show cash-flow to the proprietor on demand.',
        icon: 'TriangleAlert',
      },
      {
        label: 'Message',
        text: 'See who has paid, who has not, and what the school is owed — without chasing paper receipts.',
        icon: 'Quote',
      },
      {
        label: 'Channel',
        text: 'Direct sales walkthroughs, email with sample reports, school-admin WhatsApp, and LinkedIn or events where school business managers gather. Not TikTok.',
        icon: 'Mail',
      },
      {
        label: 'Desired action',
        text: 'Review a fee dashboard in a demo, import one term’s records, then recommend subscription. Conversion: finance module live in term one.',
        icon: 'Goal',
      },
    ],
  },
  {
    id: 'smeh-act-20',
    layout: 'framework',
    chapter: '5. Buyer personas',
    title: 'Persona 6 — Aisha, JSS student (competitions)',
    icon: 'Sparkles',
    bullets: [
      'Product line: competitions and early LMS habit. Accessible Summer already proved JSS 1–3 students will enter a national contest on SmartEdu Hub. She is younger than the Class 1 SS2–SS3 persona, so creative and guardian consent change.',
    ],
    frameworkBlocks: [
      {
        label: 'Profile',
        text: 'Female, 12–14, JSS2, mobile access often shared with a parent or older sibling. Motivated by prizes, ranking, and being seen as “sharp.” Parent must approve and often must register her.',
        icon: 'UserRound',
      },
      {
        label: 'Problem',
        text: 'School work feels disconnected from recognition. She has few national stages where effort is rewarded with prizes and a public ranking.',
        icon: 'TriangleAlert',
      },
      {
        label: 'Message',
        text: 'Compete nationally from your school. Practise, get ranked, and win prizes — laptops, cash, trips — on a platform your school already trusts.',
        icon: 'Quote',
      },
      {
        label: 'Channel',
        text: 'School announcements, parent Meta and WhatsApp, radio, and in-school posters. Student-facing creative on Instagram and TikTok must still pull the parent to complete registration.',
        icon: 'Mic',
      },
      {
        label: 'Desired action',
        text: 'Register (parent or school), complete practice rounds, share ranking. Conversion: habit on the LMS plus parent trust that later supports SS exam-prep spend.',
        icon: 'Goal',
      },
    ],
  },
  sectionSlide('smeh-act-21', 'Step 4', '6. Competitor audit', {
    subtitle: 'Tutor Step 4 — what they have, what they do better, where we close the gap',
  }),
  {
    id: 'smeh-act-22',
    layout: 'bullets',
    chapter: '6. Competitor audit',
    title: 'How this audit is framed',
    icon: 'Search',
    bullets: [
      'Class 1 asked two questions: what do competitors have that we do not, and what are they doing better? The instruction was not to copy blindly. If a competitor posts six times a day and we post twice, we close the **visibility** gap with more useful frequency or stronger content — not a clone of their feed.',
      'SmartEdu Hub does not have one competitor. It sits between **school-administration software** (SMS) and **consumer learning apps** (video lessons and exam prep). Campaigns must name the rival the persona actually compares us with.',
      'A third rival is not a company: **the current habit** — paper, Excel, WhatsApp, and extra-lesson centres. Many schools will not leave that habit until trust and a clear demo beat inertia.',
    ],
  },
  {
    id: 'smeh-act-23',
    layout: 'framework',
    chapter: '6. Competitor audit',
    title: 'Key competitors by category',
    icon: 'GitBranch',
    frameworkBlocks: [
      {
        label: 'Edves',
        text: 'Nigerian school platform combining administration, fees, NERDC-aligned learning, and large state deployments (for example Enugu Smart Green Schools). Stronger public-sector proof at scale than SmartEdu Hub today.',
        icon: 'Building2',
      },
      {
        label: 'FlexiSAF / SAFSMS',
        text: 'Long-standing school management, records, e-testing, and related education software. Stronger legacy footprint in school administration than a new all-in-one brand.',
        icon: 'Monitor',
      },
      {
        label: 'SchoolTry and similar SMS tools',
        text: 'Administration, results, attendance, parent alerts, and finance modules. Compete for the bursar and proprietor on “run the school,” not on AI Books or national competitions.',
        icon: 'Laptop',
      },
      {
        label: 'uLesson',
        text: 'Consumer learning app with video lessons, quizzes, mocks, and WAEC/NECO/JAMB prep, plus school-facing Classboard. Much stronger student and parent brand awareness. Not a full SMS for fees, enrolment, and staff.',
        icon: 'Smartphone',
      },
      {
        label: 'Gradely',
        text: 'School-facing LMS with curriculum-aligned practice, videos, and assessments. Competes for the teacher and academic lead, less for the bursar.',
        icon: 'BookOpen',
      },
      {
        label: 'The default alternative',
        text: 'Paper registers, Excel, WhatsApp broadcasts, and neighbourhood extra lessons. Cheapest on day one; most expensive in lost fees, missing records, and weak exam preparation.',
        icon: 'FileText',
      },
    ],
  },
  {
    id: 'smeh-act-24',
    layout: 'twoColumn',
    chapter: '6. Competitor audit',
    title: 'What they have versus what we have',
    icon: 'Scale',
    bullets: [
      'This table is the honest Class 1 audit. Campaigns should attack the gaps we can close and stop pretending we already won the gaps we have not.',
    ],
    leftTitle: 'Where competitors are ahead',
    leftBullets: [
      'uLesson is already top-of-mind for many parents as “the learning app.” Frequency and creative polish on social are higher.',
      'Edves and FlexiSAF can show longer school-admin case history and, in Edves’ case, large state deployments.',
      'Pure SMS tools often look cheaper if the school only wants fees and report cards, with no learning layer.',
      'Video-lesson libraries (uLesson, Gradely) still outspend us on student-facing content volume.',
    ],
    rightTitle: 'Where SmartEdu Hub can win',
    rightBullets: [
      'One ecosystem: SMS + LMS + AI Books + PQ + competitions + parent and finance views. Rivals usually sell one layer.',
      'Accessible Publishers heritage: NERDC-aligned books, ISO 9001, 1996 Ibadan company, 2025 innovation award.',
      'In-house build with Editorial and Learning input — not a generic imported admin tool with Nigerian stickers.',
      'National competitions with real prizes (Accessible Summer: JSS, free entry, over ₦2.2 million) that learning-only apps do not run as school infrastructure.',
      'Early traction: 30+ schools in three months; Abia State digital education experience.',
    ],
  },
  {
    id: 'smeh-act-25',
    layout: 'bullets',
    chapter: '6. Competitor audit',
    title: 'Visibility gap — what we will do better without copying',
    icon: 'TrendingUp',
    bullets: [
      'Tutor rule applied: we will not copy uLesson’s or Edves’ content. We will close the visibility gap so SmartEdu Hub is seen as often as the problem is felt.',
      'For students and parents (Meta default): a steady rhythm of useful posts — one past question, one parent fee/result tip, one teacher demo — rather than silence for weeks then a burst of “we have a platform” graphics.',
      'For proprietors: presence at NAPPS, book fairs, and school visits, plus case stories from live schools. LinkedIn is used because the audience is B2B, not because LinkedIn is fashionable.',
      'For trust at category level: education and tech media (including TechCabal, TechPoint, and NairaMetrics when the story is the technology product), plus Oxygen FM for Ibadan parents. Off-page SEO supports Google and Bing over time.',
    ],
  },
  sectionSlide('smeh-act-26', 'Step 5', '7. Demographics and channel match', {
    subtitle: 'Tutor Step 5 — age, gender, location, income, device, language',
  }),
  {
    id: 'smeh-act-27',
    layout: 'framework',
    chapter: '7. Demographics and channel match',
    title: 'Media must match the persona',
    icon: 'MapPin',
    bullets: [
      'A mismatch here wastes spend. SS3 boys are not reached on LinkedIn. Bursars are not converted on TikTok. Parents in Ibadan still hear radio.',
    ],
    frameworkBlocks: [
      {
        label: 'Geography',
        text: 'Priority: Ibadan and Oyo, then South-West urban schools, then states where Accessible already has relationships. English is the product language; Yoruba and Pidgin appear in parent and radio creative where natural.',
        icon: 'Map',
      },
      {
        label: 'Device',
        text: 'Students and parents: Android smartphones, uneven data, WhatsApp as the real OS. School admin: phone plus office laptop. Landing pages must be fast on mobile — a CRO issue, not a design preference.',
        icon: 'Smartphone',
      },
      {
        label: 'Income and offer',
        text: 'School subscription is a termly operations cost. Exam-prep is a household education cost. Creative should talk “fees recovered” and “exam confidence,” not luxury tech.',
        icon: 'BadgeDollarSign',
      },
      {
        label: 'Budget rule',
        text: 'Default paid media: Meta. TikTok for youth reach. Radio and events for local trust. LinkedIn only for proprietor/B2B. Google Ads only if the acquisition budget is high.',
        icon: 'Wallet',
      },
    ],
  },
  sectionSlide('smeh-act-28', 'Discovery', '8. Where customers would discover SmartEdu Hub', {
    subtitle: 'Assignment question — discovery mapped to traditional and digital',
  }),
  {
    id: 'smeh-act-29',
    layout: 'twoColumn',
    chapter: '8. Where customers would discover SmartEdu Hub',
    title: 'Discovery is not one place',
    icon: 'Search',
    bullets: [
      'Potential customers do not all meet the brand on Instagram. Class 1 taught that traditional and digital are not rivals. Discovery is planned by persona.',
    ],
    leftTitle: 'Digital discovery',
    leftBullets: [
      'Meta ads and organic pages (Facebook and Instagram) — default paid channel.',
      'WhatsApp groups: PTA, class, teacher, NAPPS.',
      'Google and Bing search (SEO first; Google Ads only on a high budget) for queries such as school management software Nigeria, WAEC past questions, AI textbooks.',
      'TikTok short drills for students; LinkedIn articles and ads for proprietors.',
      'Teacher-influencer demos of PQ and AI Books; website and parent portal as the destination.',
    ],
    rightTitle: 'Traditional and physical discovery',
    rightBullets: [
      'Oxygen FM Ibadan — parent and school-owner reach in the home market.',
      'NAPPS meetings, school fairs, bookshops, and Accessible Publishers sales visits.',
      'In-school posters, PTA nights, and competition banners.',
      'Print and outdoor near dense school clusters when the campaign needs mass local awareness.',
      'Peer referral: a proprietor asking another proprietor “what do you use for fees and results?”',
    ],
  },
  {
    id: 'smeh-act-30',
    layout: 'bullets',
    chapter: '8. Where customers would discover SmartEdu Hub',
    title: 'Discovery by persona — so media is not generic',
    icon: 'Crosshair',
    bullets: [
      '**Tunde (student):** Instagram, TikTok, classmate WhatsApp, a teacher assigning practice in class.',
      '**Mrs Adewale (parent):** Facebook, school WhatsApp, Oxygen FM, PTA, another parent’s recommendation.',
      '**Alhaja Bello (proprietor):** sales visit, NAPPS, LinkedIn, email from Accessible, a demo at the school.',
      '**Chioma (teacher):** staff WhatsApp, workshop, a peer video of setting a test in minutes.',
      '**Mr Adebayo (bursar):** live dashboard in a sales meeting, sample fee report on email.',
      '**Aisha (JSS):** school assembly, parent registration, competition posters, radio mention of prizes.',
    ],
  },
  sectionSlide('smeh-act-31', 'Trust', '9. What would make them trust the company', {
    subtitle: 'Assignment question — proof, not slogans',
  }),
  {
    id: 'smeh-act-32',
    layout: 'bullets',
    chapter: '9. What would make them trust the company',
    title: 'Trust is earned before the ask',
    icon: 'ShieldCheck',
    bullets: [
      'Class 1 placed content marketing and influencer marketing **before** the purchase ask. People believe schools, parents, and teachers they already know, and they believe institutions with a track record.',
      'SmartEdu Hub inherits trust from Accessible Publishers Limited: indigenous, Ibadan-based, in educational publishing since **1996**, ISO 9001 certified, and named Nigeria’s Most Innovative Educational Publishing Company of the Year **2025**. That is not decoration. For a proprietor, it answers “will this company still be here next session?”',
      'Product trust is different from company trust. Parents need to see attendance and results. Bursars need an activity log and clean fee reports. Students need authentic past questions and an AI tutor that actually explains the chapter. Teachers need NERDC-aligned materials, not generic global content.',
      'Social proof: more than **30 schools** onboarded within three months of launch; a related digital education solution for **Abia State**; Accessible Summer as a national JSS competition with a published prize pool. Teacher influencers and parent testimonials should show the product working, not the logo spinning.',
    ],
  },
  {
    id: 'smeh-act-33',
    layout: 'framework',
    chapter: '9. What would make them trust the company',
    title: 'Trust signals by persona',
    icon: 'Handshake',
    frameworkBlocks: [
      {
        label: 'Student',
        text: 'Real WAEC/NECO/JAMB items, instant scores, worked solutions, and classmates already practising. A teacher assigning it in class is stronger than an ad.',
        icon: 'GraduationCap',
      },
      {
        label: 'Parent',
        text: 'Parent portal, other parents, radio, school endorsement, and a recognisable publisher — not an unknown startup asking for card details.',
        icon: 'Users',
      },
      {
        label: 'Proprietor',
        text: 'ISO 9001, award, live school references, in-house Nigerian build, data control, and a demo on their own enrolment and fee numbers.',
        icon: 'Building2',
      },
      {
        label: 'Teacher',
        text: 'A peer showing a test created in minutes, curriculum alignment, and less weekend marking — not a sales deck.',
        icon: 'NotebookPen',
      },
      {
        label: 'Bursar',
        text: 'Audit trail, outstanding-fee accuracy, receipts, and a report that survives the proprietor’s questions.',
        icon: 'Lock',
      },
    ],
  },
  sectionSlide('smeh-act-34', 'Action', '10. The action we want them to take', {
    subtitle: 'Assignment question — a journey with an end goal, using RACE',
  }),
  {
    id: 'smeh-act-35',
    layout: 'bullets',
    chapter: '10. The action we want them to take',
    title: 'End goals first',
    icon: 'Goal',
    bullets: [
      'Digital marketing is not only traffic. The tutor’s framing: **DM moves people through a journey that has an end goal.** SmartEdu Hub has two conversion goals, because there are two buyers.',
      '**School conversion:** the proprietor subscribes the school to SmartEdu Hub (SMS + LMS + finance live in a real term). That is the main business outcome.',
      '**Family conversion:** a parent activates exam-prep or competition access for a child. That builds consumer habit and pressure from home on schools that have not yet subscribed.',
      'Every persona also has a smaller **Act** (the click, demo, or first practice) and an **Engage** (return, assign, renew, refer). Traffic that does not reach these outcomes is wasted budget. If ads click and nobody demos, CRO checks the link, mobile speed, landing-page match, targeting, and offer — not only the creative.',
    ],
  },
  {
    id: 'smeh-act-36',
    layout: 'framework',
    chapter: '10. The action we want them to take',
    title: 'RACE actions for SmartEdu Hub',
    icon: 'Goal',
    bullets: [
      'On a tight budget, Reach and Act share one ad set; Conversion and Engage stay separate. On a high budget, run four ad sets. Meta carries most of this unless the audience is B2B.',
    ],
    frameworkBlocks: [
      {
        label: 'R — Reach',
        text: 'Know the name. Student sees a past-question clip. Parent hears Oxygen FM. Proprietor meets the sales team at NAPPS. Message: one platform for school, learning, and exams.',
        icon: 'Search',
      },
      {
        label: 'A — Act',
        text: 'Student starts a mock. Parent joins a WhatsApp waitlist or parent portal. Teacher creates a test. Proprietor books a demo. Bursar opens a sample fee report.',
        icon: 'Target',
      },
      {
        label: 'C — Conversion',
        text: 'School: signed subscription and first-term go-live. Family: paid exam-prep or completed competition registration. Count these, not likes.',
        icon: 'Wallet',
      },
      {
        label: 'E — Engage',
        text: 'Daily practice, teacher assignments, fee reminders, competition rounds, parent result views, renewal next term, and referral to another school or parent.',
        icon: 'Handshake',
      },
    ],
  },
  {
    id: 'smeh-act-37',
    layout: 'bullets',
    chapter: '10. The action we want them to take',
    title: 'Retargeting',
    icon: 'ArrowRight',
    bullets: [
      'After about **two months** of Reach and Conversion work, retarget people who already interacted: watched a demo video, visited the site, started sign-up, or practised once and stopped.',
      'They already know the brand, so cost per conversion should be lower than cold audiences. Example from Class 1, kept here: show PQ prep ads to people who watched most of an awareness video but have not registered.',
      'Retargeting supports Conversion and Engage. It is not a substitute for a working landing page. If the demo form is broken, CRO comes first.',
    ],
  },
  sectionSlide('smeh-act-38', 'Step 6', '11. Top-of-mind awareness', {
    subtitle: 'Tutor Step 6 — the brand people recall in the category',
  }),
  {
    id: 'smeh-act-39',
    layout: 'bullets',
    chapter: '11. Top-of-mind awareness',
    title: 'When they think “school platform,” they should think SmartEdu Hub',
    icon: 'Lightbulb',
    bullets: [
      '**Top-of-mind awareness** means that when a proprietor thinks of running the school digitally, or a parent thinks of exam practice, SmartEdu Hub comes to mind first — not only uLesson for lessons or a generic SMS for fees.',
      'That is built by consistent presence, not one burst of ads: Meta, WhatsApp, radio, sales visits, teacher demos, competitions, PR, and retargeting. The audience must keep seeing the same ecosystem.',
      'Worked path from Class 1, applied here: a parent hears Oxygen FM, sees a SmartEdu Hub Instagram ad about WAEC practice, meets the brand again at PTA because the school is onboarding, then is retargeted with a parent-portal story. Those touches must feel like one company, not four disconnected campaigns.',
      'Accessible group brands should reinforce this, not compete with it. Book sales, Oxygen FM, and later Smipay payments can sit in the same journey when the story is “Accessible helps the school and the family,” not five separate logos.',
    ],
  },
  sectionSlide('smeh-act-40', 'Plan', '12. Channel plan and MD summary', {
    subtitle: 'Budget cheat sheet plus a SOSTAC view for leadership',
  }),
  {
    id: 'smeh-act-41',
    layout: 'framework',
    chapter: '12. Channel plan and MD summary',
    title: 'Channel choices for this assignment',
    icon: 'Share2',
    bullets: [
      'These choices follow the Class 1 cheat sheet. They are a plan, not a media buy yet.',
    ],
    frameworkBlocks: [
      {
        label: 'Meta Ads',
        text: 'Default paid channel for students, parents, and teachers. Separate creative per persona. Affordable on a moderate budget.',
        icon: 'Share2',
      },
      {
        label: 'TikTok',
        text: 'Student and JSS competition reach. Always send the parent or school to complete the real action.',
        icon: 'Smartphone',
      },
      {
        label: 'LinkedIn',
        text: 'Proprietor and B2B only. Expensive — used because the buyer is professional, not as a default.',
        icon: 'Handshake',
      },
      {
        label: 'Google Ads',
        text: 'Hold unless school-acquisition budget is high. Until then, SEO on Google and Bing plus content (“how schools track fees,” “PQ for SS3”).',
        icon: 'Search',
      },
      {
        label: 'Radio, events, sales',
        text: 'Oxygen FM, NAPPS, PTA, book-fair, and field visits. Traditional plus digital, as Class 1 required.',
        icon: 'Mic',
      },
      {
        label: 'Content, influencers, PR',
        text: 'Teacher demos, parent explainers, school case stories, and tech/education media. Long-term trust and SEO.',
        icon: 'Sparkles',
      },
    ],
  },
  {
    id: 'smeh-act-42',
    layout: 'framework',
    chapter: '12. Channel plan and MD summary',
    title: 'SOSTAC — how this would be presented to the MD',
    icon: 'Presentation',
    bullets: [
      'RACE is how we would run the ads. SOSTAC is how we would walk the Managing Director through the same work.',
    ],
    frameworkBlocks: [
      {
        label: 'S — Situation',
        text: 'Schools are fragmented; exam prep is a household panic; uLesson owns consumer mindspace; SMS vendors own admin; SmartEdu Hub is the combined offer with publisher proof and early school traction.',
        icon: 'Map',
      },
      {
        label: 'O — Objectives',
        text: 'School subscriptions live in term; family exam-prep activations; measurable demos, practice completions, and renewals — not vanity traffic.',
        icon: 'Target',
      },
      {
        label: 'S — Strategy',
        text: 'Persona-led journeys. Schools bought through sales + proof. Families bought through Meta, radio, and WhatsApp. One ecosystem story.',
        icon: 'Crosshair',
      },
      {
        label: 'T — Tactics',
        text: 'Meta, TikTok, Oxygen FM, NAPPS, teacher influencers, SEO/content, LinkedIn for B2B, Google Ads only if budget is high, retargeting after ~2 months.',
        icon: 'Puzzle',
      },
      {
        label: 'A — Action',
        text: 'Produce six persona creatives, school demo script, parent landing page, teacher how-to videos, competition calendar, sales follow-up, CRO checklist on every link.',
        icon: 'ListChecks',
      },
      {
        label: 'C — Control',
        text: 'KPIs: demo bookings, school go-lives, PQ registrations, practice completions, fee-module usage, cost per conversion. Diagnose weak ads with CRO, not only new copy.',
        icon: 'BarChart3',
      },
    ],
  },
  sectionSlide('smeh-act-43', 'Answers', '13. Assignment answers at a glance', {
    subtitle: 'Direct responses to the practical-work questions',
  }),
  {
    id: 'smeh-act-44',
    layout: 'framework',
    chapter: '13. Assignment answers at a glance',
    title: 'SmartEdu Hub — practical work answers',
    icon: 'CircleCheck',
    bullets: [
      'This table is the submission summary. The sections above are the working. If a later brand paper (Smipay, Oxygen FM, Best Technology, Accessible Publishers) follows the same table, the method stays consistent.',
    ],
    frameworkBlocks: [
      {
        label: 'Product chosen',
        text: 'SmartEdu Hub — SMS + LMS + AI Books + exam prep (WAEC, NECO, JAMB, BECE, NCEE) + competitions + finance and parent communication, from Accessible Publishers Limited.',
        icon: 'GraduationCap',
      },
      {
        label: 'Target audience',
        text: 'Six personas: SS2–SS3 student; parent; proprietor; teacher; bursar; JSS competition learner. Buyers are the proprietor (school) and the parent (family). Users are students and teachers.',
        icon: 'Users',
      },
      {
        label: 'Key competitors',
        text: 'Edves, FlexiSAF/SAFSMS, SchoolTry-type SMS tools, uLesson, Gradely, and the paper/Excel/WhatsApp habit. We win as the combined ecosystem with publisher trust; we are behind on consumer brand fame and some state-scale admin proof.',
        icon: 'GitBranch',
      },
      {
        label: 'Problem solved',
        text: 'Fragmented school administration, weak learning delivery, invisible fees and results, and exam-preparation gaps — not “we have a platform.”',
        icon: 'TriangleAlert',
      },
      {
        label: 'Where they discover us',
        text: 'Meta, WhatsApp, TikTok, SEO, teacher demos, LinkedIn and sales for schools, Oxygen FM, NAPPS, PTA, book-fair visits, competitions, and parent-to-parent referral.',
        icon: 'Search',
      },
      {
        label: 'Why they would trust us',
        text: '1996 indigenous publisher, ISO 9001, 2025 award, NERDC-aligned content, in-house build, 30+ schools in three months, Abia experience, live parent/fee proof, authentic past questions, and teacher peers on camera.',
        icon: 'ShieldCheck',
      },
      {
        label: 'Action we want',
        text: 'School: book a demo and subscribe (conversion). Family: register and practise, then pay for exam-prep. Then engage: daily use, renewal, referral. RACE on Meta by default; retarget after about two months.',
        icon: 'Goal',
      },
    ],
  },
  {
    id: 'smeh-act-45',
    layout: 'bullets',
    chapter: '13. Assignment answers at a glance',
    title: 'What this paper used from Class 1',
    icon: 'CircleCheck',
    bullets: [
      'Thought process in order: problem → audience → personas → competitors → demographics → top of mind.',
      'Traditional plus digital: radio, events, and sales with Meta, WhatsApp, and SEO.',
      'Budget discipline: Meta default; Google and LinkedIn only when justified; TikTok for youth.',
      'RACE for running the journey; SOSTAC for presenting to the MD.',
      'CRO if the path breaks; retargeting after about two months; content and influencers before the hard sell.',
      'Next practical papers will repeat this method for the other Accessible group brands, starting after SmartEdu Hub.',
    ],
  },
]

export const dmClass1SmehAssignment: PresentationState = {
  slides: dmClass1SmehAssignmentSlides,
  currentIndex: 0,
  seedRevision: DM_CLASS1_SMEH_ASSIGNMENT_REVISION,
  meta: DM_CLASS1_SMEH_ASSIGNMENT_META,
}
