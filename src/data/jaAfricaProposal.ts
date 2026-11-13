import type { PresentationState, Slide } from '../types/slide'

export const JA_AFRICA_DOCUMENT_ID = 'smeh-ja-africa-proposal'
export const JA_AFRICA_DOCUMENT_TITLE =
  'SmartEdu Hub Sponsorship Proposal to JA Nigeria'
export const JA_AFRICA_SEED_REVISION = 2

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

const coverLetter = [
  'We respectfully write to introduce SmartEdu Hub, the indigenous AI-powered school management and digital learning platform of Accessible Publishers Limited, and to invite Junior Achievement Nigeria to sponsor it for schools already in the JA Nigeria network. The sponsorship we propose is a programme investment. JA Nigeria would underwrite school and learner access, a JA Nigeria-branded season across financial literacy, work readiness, digital literacy, and entrepreneurship, and the reporting your partnerships team needs in order to show what the year produced.',
  'Accessible Publishers Limited is an indigenous Nigerian education company, established in 1996 and headquartered at The Knowledge Hub in Ibadan. Our work covers educational publishing, printing, curriculum-aligned learning materials, and technology-enabled solutions for schools. SmartEdu Hub is built inside the company by our Technology and Digital team, working with Editorial, Learning and Development, Media, Marketing, Distribution, and Administration.',
  'In 2025, Accessible Publishers Limited was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year by Customers’ Choice Quality Awards. The company is ISO 9001 certified. That quality management system governs how we develop, review, and produce educational content, and how we build, test, and support SmartEdu Hub.',
  'We have followed JA Nigeria’s 2025 year closely. Your Annual Report records 426,228 learning experiences across the Federal Capital Territory and all 36 states, 97 percent more than in 2024, with 2,291 volunteers giving classroom time. The four pillars you publish — financial literacy, work readiness, digital literacy, and entrepreneurship — are the frame for this request. SET4LYF reached 58,107 girls in 21 states. The 2026 National Company of the Year competition showed student companies pitching businesses built to solve real problems. JA Nigeria is the Nigerian member of JA Africa, and this proposal is written for the Lekki office and for Nigerian schools.',
  'JA Nigeria keeps ownership of its curriculum, of the Company Program, of JA DEEP, and of the volunteer model that takes businesspeople into classrooms. SmartEdu Hub is the school platform those programmes can run on through the Nigerian school year. A JA Nigeria sponsorship would place administration, classroom tools, curriculum-aligned Nigerian books, AI tutoring, computer-based testing for WAEC, NECO, and JAMB, a competition engine, and a sponsor dashboard inside the schools where your volunteers and teachers already work.',
  'We ask JA Nigeria to sponsor an opening cohort of 50 partner secondary schools for one academic year, starting in the second term of the 2026/27 session or at the start of 2027/28, as you prefer. JA Nigeria would be the sponsor of record. The cost can be met from programme funds, from a designated partner, or from both. Where scale requires it, JA Nigeria can invite organisations already working with you — Access Bank, Meta, Google, Boeing, the Citi Foundation, Delta Air Lines, the ExxonMobil Foundation, the Aliko Dangote Foundation, the Prudence Foundation, the Central Bank of Nigeria and the Bankers’ Committee, the Federal Ministry of Education, and others you nominate — to co-fund licences, prizes, or more schools. We will prepare the co-branded brief. Your partnerships team leads those conversations.',
  'Accessible Publishers has implemented a related digital education solution for Abia State, and more than 30 schools adopted SmartEdu Hub within three months of launch. In 2026 we ran the Accessible Summer Competition on the platform: more than 5,000 registrations, a prize fund above ₦2.2 million, digital proctoring, and a prize-giving on 18 September 2026 at The Knowledge Hub for winners flown in from across Nigeria. That is the operating record behind a JA Nigeria-sponsored season.',
  'We would be honoured to present SmartEdu Hub to you at Plot 17, Block 122, Adewale Kolawole Crescent, Lekki, and to your programmes and partnerships colleagues. We are ready to agree the school list, the sponsorship schedule, branding, safeguarding and learner-data terms, and the measures you will want to publish. We can be reached at info@accessiblepublishers.com and cpo@accessiblepublishers.com, and on +234 803 323 4827. Partnership correspondence for this proposal can also be copied to info@ja-nigeria.org.',
]

export const JA_AFRICA_PROPOSAL_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'November 2026',
  letterDate: '13th November 2026',
  kind: 'proposal',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'Olaolu Akogun, Acting Executive Director',
  recipientOrg: 'Junior Achievement Nigeria',
  recipientAddress:
    'Plot 17, Block 122, Adewale Kolawole Crescent, Lekki, Lagos',
  salutation: 'Dear Mr Akogun,',
  subject:
    'Proposal for Junior Achievement Nigeria to Sponsor SmartEdu Hub as the Digital School Platform for Financial Literacy, Work Readiness, Digital Literacy, and Entrepreneurship',
  website: 'www.smarteduhub.ng',
  senderAddress:
    '121/123, The Knowledge Hub,\nObafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State.',
  coverLetter,
  signOff: [
    'Yours faithfully,',
    'Gbadega Adedapo',
    'MD/CEO',
    'For: Accessible Publishers Limited',
    'cc: Partnerships, Junior Achievement Nigeria (info@ja-nigeria.org)',
  ],
}

export const jaAfricaProposalSlides: Slide[] = [
  {
    id: 'ja-africa-01',
    layout: 'title',
    title: 'Proposal for JA Nigeria to Sponsor\nSmartEdu Hub',
    subtitle:
      'A digital school platform for JA Nigeria’s financial literacy, work readiness, digital literacy, and entrepreneurship programmes',
    footer:
      'Submitted to Olaolu Akogun, Acting Executive Director, Junior Achievement Nigeria\nAccessible Publishers Limited · 13th November 2026',
    notes:
      'Sponsorship ask to the Nigeria branch (Lekki). JA Nigeria remains curriculum and volunteer owner. Co-funding path uses partners named in the JA Nigeria 2025 Annual Report. Sources: ja-nigeria.org and the 2025 annual report.',
  },
  {
    id: 'ja-africa-02',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction',
    icon: 'Handshake',
    bullets: coverLetter.slice(0, 4),
    notes: 'These paragraphs become the opening letter in the Word download.',
  },
  {
    id: 'ja-africa-02b',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction (continued)',
    icon: 'FileText',
    bullets: coverLetter.slice(4),
  },
  sectionSlide('ja-africa-03', 'The Proposal', 'SmartEdu Hub x JA Nigeria', {
    subtitle:
      'Programme sponsorship for JA Nigeria partner schools, with room for JA Nigeria’s existing funders to co-underwrite',
  }),
  {
    id: 'ja-africa-04',
    layout: 'bullets',
    chapter: '1. Executive Summary',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'Accessible Publishers Limited asks Junior Achievement Nigeria to sponsor SmartEdu Hub for schools already in the JA Nigeria network. Sponsorship means JA Nigeria is the sponsor of record: it underwrites school and learner access, a season built on its four pillars, and a report its partnerships team can publish.',
      'The opening proposal is one academic year for 50 JA Nigeria partner secondary schools. JA Nigeria keeps its curriculum, the Company Program, JA DEEP, and its volunteer model. SmartEdu Hub is the school system those programmes can use between volunteer visits: attendance, content, AI tutoring, examinations, competitions, and a sponsor dashboard.',
      'JA Nigeria is funded through corporate, foundation, and institutional partnerships. The cohort can be paid from programme funds, by a named partner, or by both. Organisations already working with JA Nigeria — including Access Bank, Meta, Google, Boeing, the Citi Foundation, Delta Air Lines, the ExxonMobil Foundation, the Aliko Dangote Foundation, the Prudence Foundation, the Central Bank of Nigeria, and the Bankers’ Committee — are the natural co-funders if JA Nigeria wishes to go past the first 50 schools.',
    ],
  },
  {
    id: 'ja-africa-05',
    layout: 'bullets',
    chapter: '2. About JA Nigeria',
    title: 'About Junior Achievement Nigeria',
    icon: 'Globe',
    bullets: [
      'Junior Achievement Nigeria prepares young people aged 5 to 35 for work and enterprise through hands-on programmes. It is the Nigerian member of JA Africa and of JA Worldwide. Delivery runs with classroom teachers and volunteers from business, across the Federal Capital Territory and all 36 states. The head office is at Plot 17, Block 122, Adewale Kolawole Crescent, Lekki, Lagos. Partnership enquiries go to info@ja-nigeria.org and +234 906 596 3106.',
      'The 2025 Annual Report, signed on 12 February 2026 by Board Chairman Dave Uduanu and Acting Executive Director Olaolu Akogun, records 426,228 learning experiences, a 97 percent increase on 2024. 2,291 volunteers contributed classroom time. The published ambition is to empower 500,000 young Nigerians with entrepreneurial, financial, and workplace skills. The four pillars are financial literacy, work readiness, digital literacy, and entrepreneurship.',
      'Financial literacy was the largest pillar in 2025, reaching 98,888 young people: 30,972 through Global Money Week and Financial Literacy Day, 40,161 on World Savings Day, and 27,694 pupils through Cha-Ching, with the Central Bank of Nigeria, the Bankers’ Committee, and the Prudence Foundation. Work readiness reached 28,099 young people. Digital literacy reached 24,688, including 24,537 teenagers in Meta’s My Digital World.',
      'This proposal is addressed to Olaolu Akogun, Acting Executive Director, who also leads SET4LYF. The board includes Dave Uduanu as Chairman, and Simi Nwogugu, Chief Executive of JA Africa, among its directors. The sponsorship decision we are asking for sits with JA Nigeria.',
    ],
  },
  {
    id: 'ja-africa-06',
    layout: 'framework',
    chapter: '2. About JA Nigeria',
    title: 'Programmes This Sponsorship Is Built Around',
    icon: 'Layers',
    frameworkBlocks: [
      {
        label: 'Financial literacy',
        text: 'In 2025 JA Nigeria reached 98,888 young people through Global Money Week, Financial Literacy Day, World Savings Day, and Cha-Ching, with the Central Bank of Nigeria, the Bankers’ Committee, and the Prudence Foundation. Sponsorship puts practice, assessment, and school-wide money challenges on SmartEdu Hub beside those sessions.',
        icon: 'Wallet',
      },
      {
        label: 'Work readiness',
        text: 'Work-readiness programmes reached 28,099 young people in 2025, with career skills, mentorship, and time with industry volunteers. The platform keeps the school-side record those pathways need: attendance, practice, and examination routes through WAEC, NECO, and JAMB.',
        icon: 'UserRound',
      },
      {
        label: 'Digital literacy',
        text: 'Digital literacy reached 24,688 young people in 2025, including 24,537 teenagers in Meta’s My Digital World on online safety and responsible use. Google certification has also been part of JA Nigeria’s digital work. Sponsored schools give that learning a system the student uses for the rest of the year.',
        icon: 'Laptop',
      },
      {
        label: 'Entrepreneurship and NCOY',
        text: 'The Company Program, JA DEEP, and the National Company of the Year competition are how JA Nigeria students build a venture and pitch it. JA DEEP’s digital entrepreneurship track reached 28,928 girls inside SET4LYF in 2025. A sponsored SmartEdu Hub season gives those student companies a school-year home and a digital finish alongside NCOY. The Company Program and JA DEEP stay JA Nigeria’s.',
        icon: 'Store',
      },
      {
        label: 'SET4LYF',
        text: 'SET4LYF reached 58,107 girls in 21 states in 2025. The Ideathon drew girls from more than 500 secondary schools, and 16,662 girls built companies through the Company Program. Olaolu Akogun leads SET4LYF as well as the organisation. Sponsorship reports girls’ participation on its own, and examination tools support the school-completion side of the programme.',
        icon: 'Users',
      },
    ],
  },
  {
    id: 'ja-africa-07',
    layout: 'bullets',
    chapter: '3. About Accessible Publishers',
    title: 'About Accessible Publishers Limited',
    icon: 'Building2',
    bullets: [
      'Accessible Publishers Limited is an indigenous Nigerian education company, established in 1996, with its head office at 121/123, The Knowledge Hub, Obafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State. The company publishes and prints curriculum-aligned materials and builds the digital tools schools use to teach, assess, and administer.',
      'SmartEdu Hub is developed internally. Editorial, Learning and Development, Technology and Digital, Media, Production, Marketing, Distribution, Human Resources, and Administration share the work, so curriculum alignment, localisation, training, and support sit with one organisation.',
      'In 2025 the company was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year by Customers’ Choice Quality Awards. A related digital education solution has been implemented for Abia State. More than 30 schools adopted SmartEdu Hub within three months of launch.',
      'In celebration of Accessible Publishers at 30, the Accessible Summer Competition ran on SmartEdu Hub for JSS 1 to JSS 3 students nationwide. More than 5,000 learners registered. The prize fund was above ₦2.2 million. Registration, practice, and the final were digital, with proctoring and evidence review. On 18 September 2026 the prize-giving was held at The Knowledge Hub for winners flown in from across Nigeria. First prize of ₦1,000,000 went to Happiness John of Joy Prime Model Secondary School, Akwa Ibom.',
    ],
  },
  {
    id: 'ja-africa-08',
    layout: 'framework',
    chapter: '3. About Accessible Publishers',
    title: 'ISO Certification and Quality Assurance',
    icon: 'ShieldCheck',
    frameworkBlocks: [
      {
        label: 'ISO 9001 certified',
        text: 'Accessible Publishers Limited operates an ISO 9001 quality management system. Work is planned, documented, reviewed, and improved against an internationally recognised standard.',
        icon: 'CircleCheck',
      },
      {
        label: 'Editorial and curriculum QA',
        text: 'Titles and digital content pass structured editorial review for accuracy, age-appropriateness, and curriculum alignment before they reach schools.',
        icon: 'BookOpen',
      },
      {
        label: 'Platform and competition controls',
        text: 'SmartEdu Hub releases, competition scoring, learner data, and support follow documented controls. A JA Nigeria-sponsored season would use those controls, plus safeguarding terms agreed with JA Nigeria before any learner is enrolled.',
        icon: 'Monitor',
      },
      {
        label: 'What JA can rely on',
        text: 'Sponsorship delivery — licences, teacher onboarding, competition operations, and the closing impact brief — has an owner, a record, and a review after the season, written so JA Nigeria can share it with its board and its funders.',
        icon: 'ClipboardList',
      },
    ],
  },
  {
    id: 'ja-africa-09',
    layout: 'framework',
    chapter: '4. Why JA Nigeria',
    title: 'How Sponsorship Serves JA Nigeria’s Four Pillars',
    icon: 'Goal',
    frameworkBlocks: [
      {
        label: 'One school year, four pillars',
        text: 'Financial literacy, work readiness, digital literacy, and entrepreneurship already reach different cohorts. A sponsored SmartEdu Hub school holds all four in the same place the learner attends every day, so a Cha-Ching pupil, a My Digital World teenager, and a Company Program team are on one record.',
        icon: 'Layers',
      },
      {
        label: 'SET4LYF and girls in school',
        text: 'SET4LYF’s 58,107 girls, the Ideathon across more than 500 schools, and the Company Program track for 16,662 girls need a home after the event. Sponsored access can be pointed at those secondary schools. Examination practice supports girls staying through WAEC and NECO. Girls’ numbers are reported separately from the school total.',
        icon: 'Users',
      },
      {
        label: 'Partners JA Nigeria already has',
        text: 'The 2025 report is a partnership story: the Federal Ministry of Education, the Ministry of Women Affairs, the Central Bank of Nigeria, the Bankers’ Committee, Access Bank, Meta, Google, Boeing, the Citi Foundation, Delta Air Lines, the ExxonMobil Foundation, the Aliko Dangote Foundation, and the Prudence Foundation. JA Nigeria holds the title of this sponsorship. A current partner can underwrite schools, a prize pool, or the SET4LYF track. JA Nigeria leads that conversation.',
        icon: 'Handshake',
      },
      {
        label: 'From 50 schools toward 500,000',
        text: 'JA Nigeria’s stated ambition is to empower 500,000 young Nigerians. Fifty secondary schools the organisation already knows is a sized first year, drawn from more than one part of the country. After the impact brief, the same sponsorship can extend to more JA Nigeria schools. The decision to grow stays in Lekki.',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    id: 'ja-africa-10',
    layout: 'twoColumn',
    chapter: '4. Why JA Nigeria',
    title: 'What JA Nigeria Keeps, and What Sponsorship Adds',
    icon: 'GitBranch',
    leftTitle: 'JA Nigeria continues to own',
    leftBullets: [
      'Curriculum for financial literacy, work readiness, digital literacy, and entrepreneurship.',
      'The Company Program, JA DEEP, and the National Company of the Year competition.',
      'SET4LYF, including school selection and the girls’ cohort.',
      'Volunteer recruitment, teacher partnership, and delivery in the 36 states and the FCT.',
      'Relationships with the ministries, the Central Bank, and the corporate partners named in the 2025 report.',
    ],
    rightTitle: 'SmartEdu Hub adds inside the school',
    rightBullets: [
      'School management: attendance, results, communication, and learner records.',
      'AI Books and the Accessible Publishers catalogue, aligned to the Nigerian curriculum.',
      'CBT and past questions for WAEC, NECO, JAMB, BECE, and NCEE.',
      'A competition engine already used for a national season of more than 5,000 learners.',
      'A sponsor dashboard for participation, girls’ participation, completion, and stories.',
    ],
  },
  {
    id: 'ja-africa-11',
    layout: 'framework',
    chapter: '5. The Sponsorship',
    title: 'What JA Nigeria Would Be Sponsoring',
    icon: 'BadgeDollarSign',
    frameworkBlocks: [
      {
        label: '1. School-year access',
        text: 'JA Nigeria sponsors SmartEdu Hub for an opening cohort of 50 secondary schools it already works with, for one academic year. The sponsorship covers school and learner access, teacher and volunteer onboarding, and a named JA Nigeria presence on the schools’ portal.',
        icon: 'Building2',
      },
      {
        label: '2. A JA Nigeria season',
        text: 'One co-branded season for those schools: a student-company track beside the Company Program and NCOY, a financial-literacy track beside Global Money Week and Cha-Ching, and a girls’ track aligned to SET4LYF. Prize design is agreed with JA Nigeria. Rankings, evidence, and learner stories are part of the sponsorship.',
        icon: 'Goal',
      },
      {
        label: '3. A co-funding window',
        text: 'JA Nigeria holds title sponsorship. Accessible Publishers prepares a short co-branded offer that JA Nigeria’s partnerships team can take to a current funder. A partner may underwrite the cohort, a prize pool, the SET4LYF track, or schools beyond the first 50. JA Nigeria leads those conversations.',
        icon: 'Handshake',
      },
      {
        label: '4. More JA Nigeria schools',
        text: 'After the impact brief, the same sponsorship can cover more JA Nigeria secondary schools in other states. JA Nigeria chooses the next list. The first 50 schools are the proof, and the growth path stays inside Nigeria.',
        icon: 'Map',
      },
    ],
  },
  {
    id: 'ja-africa-12',
    layout: 'bullets',
    chapter: '6. Nigeria Pilot',
    title: 'Pilot Design for JA Nigeria Schools',
    icon: 'Map',
    bullets: [
      'JA Nigeria nominates the 50 secondary schools from schools already hosting its programmes. The list should show more than one part of the country, including schools in the SET4LYF states where a girls’ track will be meaningful.',
      'The practical start dates are the second term of the 2026/27 session, in January 2027, or the opening of the 2027/28 session in September 2027. JA Nigeria chooses. A January start uses the rest of the current school year as a live term. A September start gives a full planning runway for teacher training and the competition calendar, including the next National Company of the Year cycle.',
      'JA Nigeria leads programme fidelity: which sessions run, which of its volunteers attend, and how financial literacy, digital literacy, the Company Program, and SET4LYF sit on the school timetable. Accessible Publishers leads the platform, Nigerian curriculum content, the helpdesk, competition operations, and the data extracts JA Nigeria requests.',
      'Safeguarding and learner data are agreed in writing before enrolment. Consent, age-appropriate access, competition rules, and who may see school data are part of that agreement. ISO 9001 controls on content, scoring, and support sit underneath it.',
      'A useful pilot year produces active school use, trained teachers and volunteers, learners who finish the JA Nigeria tracks, a separate count of girls’ participation, a completed season, and a short impact brief JA Nigeria can share with its board, Dave Uduanu as Chairman, and its funders.',
      'The sponsorship schedule — a per-school fee for the year, and a separate budget for the competition season — will be tabled at the presentation in Lekki for JA Nigeria to accept, resize, or blend with a partner. This proposal fixes the shape of the sponsorship. JA Nigeria fixes the scale and the source of funds.',
    ],
  },
  {
    id: 'ja-africa-13',
    layout: 'twoColumn',
    chapter: '7. Mutual Benefits',
    title: 'Mutual Benefits',
    icon: 'Sparkles',
    leftTitle: 'What JA Nigeria gains',
    leftBullets: [
      'A year-round school platform carrying its four pillars past the volunteer visit.',
      'Title sponsorship it can show to Access Bank, Meta, Google, Boeing, Citi, Delta, ExxonMobil, Dangote, and the Prudence Foundation.',
      'One record for financial literacy, work readiness, digital literacy, and entrepreneurship in the same schools.',
      'A girls’ participation report that serves SET4LYF between the Ideathon and the Company Program.',
      'A 50-school proof toward the published goal of empowering 500,000 young Nigerians.',
    ],
    rightTitle: 'What SmartEdu Hub gains',
    rightBullets: [
      'A sponsor whose programmes already run in every state and the FCT.',
      'A clear use for the platform: money skills, digital skills, examinations, enterprise, and school administration together.',
      'Teacher and volunteer delivery through JA Nigeria, alongside our own onboarding.',
      'A competition season that sits beside the National Company of the Year.',
      'A reference partnership for later conversations with the funders JA Nigeria already trusts.',
    ],
  },
  {
    id: 'ja-africa-14',
    layout: 'framework',
    chapter: '8. Implementation',
    title: 'Implementation',
    icon: 'ClipboardList',
    frameworkBlocks: [
      {
        label: 'Presentation',
        text: 'Present SmartEdu Hub to Olaolu Akogun and to JA Nigeria’s programmes and partnerships team in Lekki. Confirm the sponsor-of-record role, the 50-school shape, and whether the first season is funded by JA Nigeria, by a named partner, or by both.',
        icon: 'Presentation',
      },
      {
        label: 'Agreement',
        text: 'Lock the school list, the term start, branding, prize philosophy, safeguarding, learner-data terms, and the indicators JA Nigeria wants in the brief. Sign a sponsorship schedule. JA Nigeria remains the programme owner.',
        icon: 'FileText',
      },
      {
        label: 'Onboarding and season',
        text: 'Train teachers and JA Nigeria volunteers. Open learner access to AI Books, the Accessible Publishers catalogue, and the examination tools. Map JA Nigeria sessions onto the platform. Run the co-branded season, with the SET4LYF track reported on its own.',
        icon: 'GraduationCap',
      },
      {
        label: 'Impact brief and next step',
        text: 'Deliver a short brief: schools live, learners active, tracks completed, girls’ participation, competition outcomes, and stories JA Nigeria can publish. JA Nigeria then decides to renew, to invite a co-funder, or to add schools in further states.',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'ja-africa-15',
    layout: 'bullets',
    chapter: '9. The Request',
    title: 'Request to Junior Achievement Nigeria',
    icon: 'Mail',
    bullets: [
      'We invite Junior Achievement Nigeria to sponsor SmartEdu Hub, as sponsor of record, for a one-year cohort of 50 partner secondary schools, including a season in financial literacy and entrepreneurship and a girls’ track aligned to SET4LYF.',
      'We ask for a working session with Olaolu Akogun and the partnerships team at the Lekki office, to agree school selection, timing, branding, safeguarding, the sponsorship schedule, and whether a current JA Nigeria funder should be invited to co-underwrite the year.',
      'We will bring a priced per-school schedule, a competition budget, a sample impact brief, and a one-page co-funding note written for the partners JA Nigeria chooses to approach. JA Nigeria decides the scale. We will operate what is agreed.',
    ],
  },
  {
    id: 'ja-africa-16',
    layout: 'bullets',
    chapter: '10. Conclusion',
    title: 'Conclusion',
    icon: 'Handshake',
    bullets: [
      'JA Nigeria’s 2025 report shows what intentional growth looks like inside one country: 426,228 learning experiences, every state and the FCT, and a girls’ programme that has already outrun its first target. SmartEdu Hub is a practical way for JA Nigeria to sponsor the school layer underneath that growth, with its curriculum, its volunteers, and its own schools kept at the centre.',
      'We respect the trust learners, teachers, ministries, and funders already place in Junior Achievement Nigeria. We would be honoured to put SmartEdu Hub at the service of that trust, and to earn a second year, or a longer school list, only after the brief is in your hands in Lekki.',
    ],
    footer:
      'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan, Oyo State\nSmartEdu Hub Accessible Digital Platform\nwww.smarteduhub.ng\nwww.accessiblepublishers.com\ninfo@accessiblepublishers.com · cpo@accessiblepublishers.com\n+234 803 323 4827',
  },
]

export const jaAfricaProposal: PresentationState = {
  slides: jaAfricaProposalSlides,
  currentIndex: 0,
  seedRevision: JA_AFRICA_SEED_REVISION,
  meta: JA_AFRICA_PROPOSAL_META,
}
