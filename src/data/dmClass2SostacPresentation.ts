import type { PresentationState, Slide } from '../types/slide'

export const DM_CLASS2_SOSTAC_PRESENTATION_ID =
  'dm-class2-smarteduhub-sostac-presentation'
export const DM_CLASS2_SOSTAC_PRESENTATION_TITLE =
  'SmartEdu Hub Digital Marketing Plan — SOSTAC'
export const DM_CLASS2_SOSTAC_PRESENTATION_REVISION = 2

const FOOTER = 'SmartEduHub'

export const dmClass2SostacPresentationSlides: Slide[] = [
  {
    id: 'sostac-title',
    layout: 'title',
    title: 'SmartEdu Hub\nDigital Marketing Plan',
    subtitle:
      'A concise SOSTAC presentation for management decision-making',
    footer: FOOTER,
    notes:
      'Open by explaining that this presentation focuses only on the SOSTAC plan: where SmartEdu Hub is now, where it needs to go, and how digital marketing will move it there.',
  },
  {
    id: 'sostac-situation-product',
    layout: 'bullets',
    chapter: 'Situation',
    title: 'What is SmartEdu Hub?',
    icon: 'GraduationCap',
    bullets: [
      '**SmartEdu Hub is an all-in-one education platform** developed by Accessible Publishers Limited.',
      'It combines school management, teaching and learning, AI Books, exam preparation, competitions, parent communication, and finance tools.',
      'It serves school proprietors, administrators, teachers, students, and parents from one connected platform.',
      'Its key advantage is integration: competitors often provide either school administration or digital learning, while SmartEdu Hub brings both together.',
      'It already has early market proof, including adoption by more than 30 schools within three months and delivery of the Accessible Summer Competition.',
    ],
    footer: FOOTER,
  },
  {
    id: 'sostac-situation-swot',
    layout: 'framework',
    chapter: 'Situation',
    title: 'SWOT analysis',
    icon: 'Boxes',
    frameworkBlocks: [
      {
        label: 'Strengths',
        text: 'All-in-one SMS, LMS, AI Books, exam prep, finance, and competitions; trusted Accessible Publishers heritage; early school adoption.',
        icon: 'ShieldCheck',
      },
      {
        label: 'Weaknesses',
        text: 'Low search visibility, empty blog and news pages, generic social links, limited audience-specific proof, and a website message that overemphasises school administration.',
        icon: 'TriangleAlert',
      },
      {
        label: 'Opportunities',
        text: 'Own the “school management plus learning” category; use SEO, content, Oxygen FM, NAPPS, school visits, and publisher relationships to build trust.',
        icon: 'TrendingUp',
      },
      {
        label: 'Threats',
        text: 'uLesson is stronger in parent and student awareness; Edves and FlexiSAF have longer school-admin histories; cheaper SMS-only tools may appear easier to buy.',
        icon: 'TriangleAlert',
      },
    ],
    footer: FOOTER,
  },
  {
    id: 'sostac-situation-summary',
    layout: 'twoColumn',
    chapter: 'Situation',
    title: 'Where SmartEdu Hub is now',
    icon: 'MapPin',
    leftTitle: 'Current position',
    leftBullets: [
      'A strong product with credible education-sector backing and early adoption.',
      'A broader offer than most competitors: operations, learning, exams, and engagement in one ecosystem.',
      'The public presentation does not yet communicate the full value clearly.',
    ],
    rightTitle: 'Main marketing challenge',
    rightBullets: [
      'Low awareness and weak search visibility.',
      'Different audiences currently receive one broad message.',
      'Limited content, case studies, and audience-specific demonstrations reduce trust and conversion.',
      'The immediate need is to improve visibility, explain the complete offer, and turn interest into demonstrations, pilots, subscriptions, and repeat use.',
    ],
    footer: FOOTER,
  },
  {
    id: 'sostac-objectives',
    layout: 'bullets',
    chapter: 'Objectives',
    title: 'What we want to achieve',
    icon: 'Target',
    bullets: [
      'Increase SmartEdu Hub awareness among school owners, administrators, teachers, parents, and students.',
      'Increase qualified traffic to audience-specific website pages and improve ranking for relevant education and school-management searches.',
      'Generate more WhatsApp enquiries, school leads, and completed demo bookings.',
      'Convert qualified schools into guided pilots and paid subscriptions.',
      'Increase paid exam-preparation and competition registrations from parents and students.',
      'Create regular platform usage, school renewals, testimonials, and referrals.',
    ],
    footer: FOOTER,
    notes:
      'Do not introduce these as separate RACE headings. Present them as one connected list of business and marketing objectives.',
  },
  {
    id: 'sostac-strategy',
    layout: 'framework',
    chapter: 'Strategy',
    title: 'Strategies we will use',
    icon: 'Crosshair',
    bullets: [
      'Each strategy responds directly to the weaknesses and threats in the situation analysis and supports the stated objectives.',
    ],
    frameworkBlocks: [
      {
        label: 'Reposition the brand',
        text: 'Present SmartEdu Hub as a complete education ecosystem, not only a school-management application.',
        icon: 'Layers',
      },
      {
        label: 'Segment the audience',
        text: 'Use distinct messages and journeys for school decision-makers, teachers, parents, and students.',
        icon: 'Users',
      },
      {
        label: 'Build search authority',
        text: 'Use useful, optimised content to close the SEO gap and capture people already searching for solutions.',
        icon: 'Search',
      },
      {
        label: 'Lead with proof',
        text: 'Use demonstrations, school results, competition stories, testimonials, and Accessible Publishers credibility to reduce buyer risk.',
        icon: 'ShieldCheck',
      },
      {
        label: 'Combine digital and direct sales',
        text: 'Connect Meta, WhatsApp, radio, NAPPS, and school visits so awareness leads to a real sales conversation.',
        icon: 'Handshake',
      },
      {
        label: 'Design for retention',
        text: 'Support onboarding and repeated use so pilots become subscriptions, renewals, testimonials, and referrals.',
        icon: 'ArrowRight',
      },
    ],
    footer: FOOTER,
  },
  {
    id: 'sostac-tactics',
    layout: 'twoColumn',
    chapter: 'Tactics',
    title: 'How the strategies will be applied',
    icon: 'Puzzle',
    leftTitle: 'Visibility and interest',
    leftBullets: [
      'Rewrite the homepage to show school management, learning, AI Books, exam prep, finance, and competitions.',
      'Create separate landing pages and short demo videos for schools, teachers, parents, and students.',
      'Publish SEO articles, news updates, case studies, and competition stories.',
      'Run audience-specific Meta campaigns and use Oxygen FM, NAPPS, WhatsApp, and school visits for local reach.',
    ],
    rightTitle: 'Conversion and retention',
    rightBullets: [
      'Use clear calls to action: Book a Demo, Try Exam Practice, Register for a Competition, and Talk to Sales.',
      'Follow up every qualified school lead quickly and move interested schools into guided pilots.',
      'Retarget people who watched videos, visited key pages, opened forms, or registered without completing the next step.',
      'Provide onboarding, tutorials, reminders, support, newsletters, and progress reports to encourage regular use and renewal.',
    ],
    footer: FOOTER,
  },
  {
    id: 'sostac-action',
    layout: 'bullets',
    chapter: 'Action',
    title: 'Actions we will take',
    icon: 'ListChecks',
    bullets: [
      'Fix the website message, broken or generic social links, page speed, mobile experience, analytics, and conversion tracking.',
      'Create audience landing pages, audience-specific demonstrations, testimonials, and clear calls to action.',
      'Launch Meta awareness, lead-generation, conversion, and retargeting campaigns with separate creative for each priority audience.',
      'Optimise priority pages and publish consistent SEO content to rank on Google and Bing.',
      'Use WhatsApp, email, Oxygen FM, NAPPS meetings, and school visits to support lead nurturing and sales follow-up.',
      'Train the sales and customer-success teams to deliver demonstrations, onboard pilots, support users, and record lead status.',
      'Review campaign and platform data regularly, improve weak pages or adverts, and move budget to activities producing qualified conversions.',
    ],
    footer: FOOTER,
  },
  {
    id: 'sostac-control',
    layout: 'twoColumn',
    chapter: 'Control',
    title: 'How performance and retention will be controlled',
    icon: 'BarChart3',
    leftTitle: 'Performance measures',
    leftBullets: [
      'Awareness: reach, impressions, video views, website visits, and search rankings.',
      'Interest: CTA clicks, WhatsApp enquiries, qualified leads, and demo bookings.',
      'Conversion: completed demonstrations, school pilots, paid school subscriptions, and paid learner registrations.',
      'Efficiency: cost per qualified lead, landing-page conversion rate, and return on advertising spend.',
    ],
    rightTitle: 'Retention measures',
    rightBullets: [
      'Track active schools, active teachers, completed learner sessions, and parent portal use.',
      'Monitor pilot-to-paid conversion, renewal rate, support issues, and reasons for inactivity.',
      'Use onboarding, reminders, training, customer support, newsletters, and retargeting to bring users back.',
      'Collect testimonials and referrals from satisfied schools, teachers, parents, and students.',
    ],
    footer: FOOTER,
  },
  {
    id: 'sostac-budget',
    layout: 'chart',
    chapter: 'Budget',
    title: 'Recommended budget allocation',
    icon: 'Wallet',
    chartType: 'pie',
    chartData: [
      { name: 'Meta ads — 30%', value: 30 },
      { name: 'Content — 20%', value: 20 },
      { name: 'Website & landing pages — 15%', value: 15 },
      { name: 'SEO — 12%', value: 12 },
      { name: 'Influencer/UGC — 10%', value: 10 },
      { name: 'Email/CRM — 5%', value: 5 },
      { name: 'Radio, events & print — 5%', value: 5 },
      { name: 'Google Ads test — 3%', value: 3 },
    ],
    chartCaption:
      'Allocate by percentage so the plan can scale to the approved budget. Meta leads paid media; SEO, content, and website improvements build lasting visibility and conversion.',
    footer: FOOTER,
  },
  {
    id: 'sostac-closing',
    layout: 'closing',
    title: 'Thank You',
    subtitle: 'SmartEdu Hub: manage better, teach better, learn smarter.',
    footer: FOOTER,
    notes: 'Invite questions and management direction on priorities and budget.',
  },
]

export const dmClass2SostacPresentation: PresentationState = {
  slides: dmClass2SostacPresentationSlides,
  currentIndex: 0,
  seedRevision: DM_CLASS2_SOSTAC_PRESENTATION_REVISION,
  meta: {
    brand: 'SmartEduHub',
    author: '',
    degree: 'Digital Marketing Training — SOSTAC Assignment',
    date: 'September 2026',
    kind: 'presentation',
    editorView: 'slides',
    subject: 'SmartEdu Hub Digital Marketing Plan — SOSTAC',
    website: 'www.smarteduhub.com',
  },
}
