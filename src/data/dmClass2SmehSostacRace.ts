import type { PresentationState, Slide } from '../types/slide'

export const DM_CLASS2_SMEH_SOSTAC_RACE_ID =
  'dm-class2-smeh-sostac-race'
export const DM_CLASS2_SMEH_SOSTAC_RACE_TITLE =
  'Digital Marketing Class 2 - SmartEdu Hub SOSTAC and RACE Strategy'
export const DM_CLASS2_SMEH_SOSTAC_RACE_REVISION = 6

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

export const DM_CLASS2_SMEH_SOSTAC_RACE_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: '',
  degree: 'Executive Digital Marketing Strategy',
  date: 'September 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Calibri',
  subject:
    'Digital Marketing Class 2 - SmartEdu Hub SOSTAC and RACE Strategy',
}

export const dmClass2SmehSostacRaceSlides: Slide[] = [
  {
    id: 'dm2-smeh-01',
    layout: 'title',
    title: 'SmartEdu Hub\nDigital Marketing Strategy',
    subtitle: 'An executive SOSTAC plan for stronger visibility, adoption, and retention',
    notes:
      'Executive strategy presentation for management discussion.',
  },
  {
    id: 'dm2-smeh-02',
    layout: 'bullets',
    chapter: 'Executive Overview',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'SmartEdu Hub has a strong all-in-one product, but its full value is not yet clear online.',
      'Weak search visibility, limited proof content, and one general message reduce awareness and qualified enquiries.',
      'The proposed response is to improve the website, segment communication, build search authority, and run focused campaigns.',
      'The expected result is stronger market visibility, more qualified school enquiries, increased platform adoption, and better retention.',
    ],
  },
  sectionSlide('dm2-smeh-03', 'Situation', '1. Situation Analysis', {
    subtitle: 'Current position and priority problems',
  }),
  {
    id: 'dm2-smeh-04',
    layout: 'twoColumn',
    chapter: '1. Situation Analysis',
    title: 'Current Business Position',
    icon: 'Users',
    leftTitle: 'What we have',
    leftBullets: [
      'A connected School Management System and Learning Management System.',
      'AI Books, CBT, exam preparation, parent tools, and competitions.',
      'Accessible Publishers content, reputation, and school relationships.',
      'A locally built platform with direct implementation support.',
    ],
    rightTitle: 'Who we must reach',
    rightBullets: [
      '**Buyers:** school proprietors, principals, and bursars.',
      '**Influencers:** teachers and school administrators.',
      '**Users:** students and parents.',
      '**Initial focus:** schools and families in markets where Accessible already has relationships.',
    ],
  },
  {
    id: 'dm2-smeh-05',
    layout: 'twoColumn',
    chapter: '1. Situation Analysis',
    title: 'SWOT Summary',
    icon: 'Scale',
    leftTitle: 'Strengths / Opportunities',
    leftBullets: [
      'Complete school management and learning ecosystem.',
      'Trusted publishing brand and curriculum-aligned content.',
      'Growing demand for digital operations and exam support.',
      'Existing school, association, media, and partnership channels.',
    ],
    rightTitle: 'Weaknesses / Threats',
    rightBullets: [
      'Low search visibility and limited educational content online.',
      'The website does not present the complete product clearly.',
      'Established competitors already have stronger market awareness.',
      'Some schools may retain paper, Excel, and WhatsApp processes.',
    ],
  },
  {
    id: 'dm2-smeh-06',
    layout: 'framework',
    chapter: '1. Situation Analysis',
    title: 'Problems the Strategy Must Solve',
    icon: 'CircleAlert',
    frameworkBlocks: [
      {
        label: 'Unclear market message',
        text: 'The complete value of SmartEdu Hub is not immediately visible.',
        icon: 'MessageCircle',
      },
      {
        label: 'Weak discoverability',
        text: 'Limited search content makes the platform difficult to find online.',
        icon: 'Search',
      },
      {
        label: 'Limited proof',
        text: 'School results, testimonials, competitions, and use cases are underused.',
        icon: 'FileText',
      },
      {
        label: 'Weak conversion path',
        text: 'Different audiences do not have dedicated pages, demos, and next steps.',
        icon: 'GitBranch',
      },
    ],
  },
  sectionSlide('dm2-smeh-07', 'Objectives', '2. Objectives', {
    subtitle: 'What digital marketing must achieve',
  }),
  {
    id: 'dm2-smeh-08',
    layout: 'bullets',
    chapter: '2. Objectives',
    title: 'Audience Awareness Objectives',
    icon: 'Target',
    bullets: [
      'Increase awareness among school proprietors and principals of the administration, fee-management, attendance, and result-management tools.',
      'Increase awareness among teachers of the LMS, digital assessments, AI Books, and classroom-support tools.',
      'Increase awareness among students of CBT practice, past questions, AI Books, and academic competitions.',
      'Increase awareness among parents of attendance monitoring, result access, school communication, and examination-readiness support.',
    ],
  },
  {
    id: 'dm2-smeh-08b',
    layout: 'bullets',
    chapter: '2. Objectives',
    title: 'Adoption and Retention Objectives',
    icon: 'TrendingUp',
    bullets: [
      'Increase qualified enquiries from schools.',
      'Increase booked and completed school demonstrations.',
      'Increase the number of schools starting guided pilots.',
      'Increase paid school subscriptions.',
      'Increase student registrations for CBT, past questions, AI Books, and competitions.',
      'Increase parent registrations for progress and examination-support tools.',
      'Increase paid use of student learning and examination-preparation services.',
      'Increase active platform use after onboarding.',
      'Increase school renewals.',
      'Increase customer testimonials and referrals.',
    ],
  },
  sectionSlide('dm2-smeh-09', 'Strategy', '3. Strategy', {
    subtitle: 'The approach for achieving the objectives',
  }),
  {
    id: 'dm2-smeh-10',
    layout: 'bullets',
    chapter: '3. Strategy',
    title: 'Strategic Approach',
    icon: 'Crosshair',
    bullets: [
      'Position SmartEdu Hub as one connected platform for school operations, teaching, learning, examinations, and parent visibility.',
      'Target school proprietors and principals as buyers, teachers as adoption influencers, and students and parents as learning users.',
      'Develop a separate message and journey for each audience instead of promoting every feature in one general message.',
      'Use evidence from schools, users, competitions, and product demonstrations to reduce doubt and build trust.',
      'Build long-term search visibility and owned content while using paid campaigns to create immediate awareness.',
      'Connect marketing, sales, onboarding, support, and renewal so that interest can become sustained platform use.',
    ],
  },
  sectionSlide('dm2-smeh-11', 'Tactics', '4. Tactics', {
    subtitle: 'Practical execution linked to the identified problems',
  }),
  {
    id: 'dm2-smeh-12',
    layout: 'twoColumn',
    chapter: '4. Tactics',
    title: 'Website, Search, Content, and Paid Media',
    icon: 'Puzzle',
    leftTitle: 'Fix the message and visibility gaps',
    leftBullets: [
      'Rewrite the homepage to show the complete SmartEdu Hub offer.',
      'Create separate pages for schools, teachers, students, and parents.',
      'Optimise pages for school-management, digital-learning, and exam-preparation searches.',
      'Publish helpful articles that answer the questions each audience searches for.',
      'Fix mobile speed, broken links, social links, forms, and calls to action.',
    ],
    rightTitle: 'Build awareness and proof',
    rightBullets: [
      'Run separate Meta campaigns for school decision-makers, teachers, parents, and students.',
      'Use short product demonstrations for each audience.',
      'Publish school case studies and customer testimonials.',
      'Share competition results and student-success stories.',
      'Use WhatsApp, email, Oxygen FM, school visits, and associations to support digital campaigns.',
    ],
  },
  {
    id: 'dm2-smeh-13',
    layout: 'twoColumn',
    chapter: '4. Tactics',
    title: 'Lead Conversion and Retention Tactics',
    icon: 'CircleCheck',
    leftTitle: 'Convert qualified interest',
    leftBullets: [
      'Use simple enquiry and demo forms.',
      'Respond through WhatsApp, email, and telephone.',
      'Offer guided demonstrations and school pilots.',
      'Give each lead a clear next step and responsible contact.',
    ],
    rightTitle: 'Support continued use',
    rightBullets: [
      'Provide onboarding and short user guides.',
      'Send useful reminders and platform updates.',
      'Monitor inactive schools and users for follow-up.',
      'Request feedback, testimonials, renewals, and referrals.',
    ],
  },
  sectionSlide('dm2-smeh-14', 'Action', '5. Action', {
    subtitle: 'Ownership and immediate execution',
  }),
  {
    id: 'dm2-smeh-15',
    layout: 'framework',
    chapter: '5. Action',
    title: 'Execution Responsibilities',
    icon: 'ListChecks',
    frameworkBlocks: [
      {
        label: 'Digital Marketing',
        text: 'Coordinate campaigns, content, SEO, tracking, reporting, and optimisation.',
        icon: 'TrendingUp',
      },
      {
        label: 'Web and Product',
        text: 'Improve priority pages, demos, mobile performance, forms, and platform onboarding.',
        icon: 'Monitor',
      },
      {
        label: 'Sales and Customer Success',
        text: 'Qualify enquiries, conduct demos, manage pilots, support adoption, and pursue renewal.',
        icon: 'Users',
      },
      {
        label: 'Management',
        text: 'Approve priorities, budget, offers, ownership, and timely cross-team decisions.',
        icon: 'CircleCheck',
      },
    ],
  },
  sectionSlide('dm2-smeh-16', 'Control', '6. Control', {
    subtitle: 'Performance review and expected business outcome',
  }),
  {
    id: 'dm2-smeh-17',
    layout: 'framework',
    chapter: '6. Control',
    title: 'What Management Should Expect',
    icon: 'ChartLine',
    frameworkBlocks: [
      {
        label: 'Stronger visibility',
        text: 'Improved search presence, market awareness, and understanding of the complete offer.',
        icon: 'Search',
      },
      {
        label: 'Better-quality demand',
        text: 'More relevant enquiries, demo requests, trial registrations, and qualified school leads.',
        icon: 'Target',
      },
      {
        label: 'Higher adoption',
        text: 'More completed demos, active pilots, subscriptions, and paid learning use.',
        icon: 'CircleCheck',
      },
      {
        label: 'Stronger retention',
        text: 'More active users, renewals, testimonials, referrals, and evidence for future campaigns.',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    id: 'dm2-smeh-18',
    layout: 'twoColumn',
    chapter: '6. Control',
    title: 'Measurement and Management Review',
    icon: 'TrendingUp',
    leftTitle: 'What will be monitored',
    leftBullets: [
      'Search visibility and relevant website traffic.',
      'Enquiries, demo requests, and lead quality.',
      'Pilot, subscription, and paid-user conversion.',
      'Platform activity, retention, and referrals.',
    ],
    rightTitle: 'How control will work',
    rightBullets: [
      'Use website, advertising, search, email, and sales reports.',
      'Review performance regularly with responsible teams.',
      'Correct weak messages, pages, campaigns, or follow-up.',
      'Increase support for channels producing qualified adoption.',
    ],
  },
  {
    id: 'dm2-smeh-19',
    layout: 'twoColumn',
    chapter: '7. Management Decision',
    title: 'Recommended Priorities and Decisions',
    icon: 'ClipboardList',
    leftTitle: 'Recommended priorities',
    leftBullets: [
      'Correct the website message and conversion path.',
      'Build search content and publish credible proof.',
      'Run segmented Meta campaigns and direct school outreach.',
      'Strengthen lead follow-up, onboarding, and retention.',
    ],
    rightTitle: 'Management decisions required',
    rightBullets: [
      'Approve the priority audiences and campaign direction.',
      'Assign accountable owners across marketing, web, product, and sales.',
      'Approve an initial execution budget after channel costing.',
      'Approve regular management performance reviews.',
    ],
  },
  {
    id: 'dm2-smeh-20',
    layout: 'closing',
    chapter: '7. Management Decision',
    title: 'Thank You',
    subtitle: 'Management discussion and approval',
  },
]

export const dmClass2SmehSostacRace: PresentationState = {
  slides: dmClass2SmehSostacRaceSlides,
  currentIndex: 0,
  seedRevision: DM_CLASS2_SMEH_SOSTAC_RACE_REVISION,
  meta: DM_CLASS2_SMEH_SOSTAC_RACE_META,
}
