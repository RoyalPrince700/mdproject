import type { PresentationState, Slide } from '../types/slide'

export const LOYALTY_FRAMEWORK_DOCUMENT_ID = 'apl-loyalty-reward-framework'
export const LOYALTY_FRAMEWORK_DOCUMENT_TITLE =
  'Accessible Publishers — School Loyalty Reward Framework'
export const LOYALTY_FRAMEWORK_SEED_REVISION = 3

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

export const LOYALTY_FRAMEWORK_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'August 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Arial',
  subject: 'School Loyalty Reward Framework',
}

export const loyaltyRewardFrameworkSlides: Slide[] = [
  {
    id: 'loyalty-01',
    layout: 'title',
    title: 'Accessible Publishers —\nSchool Loyalty Reward Framework',
    subtitle:
      'Data-driven loyalty rewards from historical school book-purchase records',
    footer: 'Accessible Publishers Limited · August 2026',
    notes:
      'Internal framework for MD decision on school loyalty earn rules, gift ladder, and budget.',
  },
  sectionSlide('loyalty-02', 'Framework Overview', 'School Loyalty Programme', {
    subtitle: 'Earn rules, gift ladder, and budget planning',
  }),
  {
    id: 'loyalty-03',
    layout: 'bullets',
    chapter: '1. Executive Summary',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'We have built a data-driven loyalty reward framework from historical school book-purchase records. The model answers three practical questions for programme design and budgeting.',
      'How should schools earn points? Default: 1 point per ₦1,000 of verified revenue.',
      'What should they receive? A five-range gift ladder aligned to spend bands — from jotter & pen at the entry level to phone / TV at strategic accounts.',
      'What will it cost? Today the planning default is ₦30 per point (3% of sales if every point were redeemed). We are evaluating a move to ₦10 per point (1% of sales).',
    ],
    frameworkBlocks: [
      {
        label: 'Loyalty Points',
        text: 'Loyalty points are awarded upon successful payment, not based on the number or value of orders placed. Points will only be credited to the user’s account once payment for the order has been successfully completed.',
        icon: 'BadgeDollarSign',
      },
      {
        label: 'Returns Policy',
        text: 'A return rate of up to 5% is considered acceptable and will not attract any charge. However, where returns exceed the 5% acceptable threshold, a 2.5% charge will be applied to the total value of the returned items. For example, if the total value of returned items is ₦100,000 after exceeding the 5% threshold, a charge of ₦2,500 will apply.',
        icon: 'Scale',
      },
    ],
  },
  sectionSlide('loyalty-04', 'How the Framework Works', '2. Reward Mechanics', {
    subtitle: 'Earn rule and gift cost per point',
  }),
  {
    id: 'loyalty-05',
    layout: 'framework',
    chapter: '2.1 Earn Rule',
    title: 'Earn Rule',
    icon: 'DollarSign',
    frameworkBlocks: [
      {
        label: 'Naira per point',
        text: '₦1,000 — Every ₦1,000 of book spend earns 1 point (rounded down).',
        icon: 'BadgeDollarSign',
      },
      {
        label: '₦50,000 spend',
        text: '50 points',
        icon: 'TrendingUp',
      },
      {
        label: '₦260,000 spend (median school)',
        text: '260 points',
        icon: 'TrendingUp',
      },
      {
        label: '₦500,000 spend',
        text: '500 points',
        icon: 'TrendingUp',
      },
      {
        label: '₦1,000,000 spend',
        text: '1,000 points',
        icon: 'TrendingUp',
      },
      {
        label: '₦5,000,000 spend',
        text: '5,000 points',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    id: 'loyalty-06',
    layout: 'framework',
    chapter: '2.2 Gift Cost per Point',
    title: 'Gift Cost per Point (Budget Lever)',
    icon: 'Wallet',
    bullets: [
      'Gift cost per point is the assumed planning cost of fulfilling one redeemed point. It is not warehouse or procurement cost; it is the number we use to estimate total gift budget.',
    ],
    frameworkBlocks: [
      {
        label: 'Low (range floor)',
        text: '₦20 per point · 2.0% of spend (if all points redeemed)',
        icon: 'TrendingDown',
      },
      {
        label: 'Current planning default',
        text: '₦30 per point · 3.0% of spend (if all points redeemed)',
        icon: 'CircleCheck',
      },
      {
        label: 'Proposed',
        text: '₦10 per point · 1.0% of spend (if all points redeemed)',
        icon: 'Sparkles',
      },
      {
        label: 'High (range ceiling)',
        text: '₦50 per point · 5.0% of spend (if all points redeemed)',
        icon: 'TrendingUp',
      },
    ],
  },
  sectionSlide('loyalty-07', 'Segments & Tiers', '3. Customer Segmentation', {
    subtitle: 'Spend bands mapped to five loyalty tiers',
  }),
  {
    id: 'loyalty-08',
    layout: 'framework',
    chapter: '3. Customer Segments and Loyalty Tiers',
    title: 'Customer Segments and Loyalty Tiers',
    icon: 'Users',
    bullets: [
      'Schools are grouped by total spend so rewards match commercial importance. Segments roll up into five named tiers.',
    ],
    frameworkBlocks: [
      {
        label: 'Occasional · Bronze',
        text: '₦0 – ₦49,999 · Low earn; keep cost of rewards tiny',
        icon: 'UserRound',
      },
      {
        label: 'Small · Bronze',
        text: '₦50,000 – ₦199,999 · Entry tier',
        icon: 'UserRound',
      },
      {
        label: 'Core · Silver',
        text: '₦200,000 – ₦499,999 · Volume segment; median school (₦260k) sits here',
        icon: 'Users',
      },
      {
        label: 'Strong · Gold',
        text: '₦500,000 – ₦999,999 · Solid repeat buyers; grow into key accounts',
        icon: 'TrendingUp',
      },
      {
        label: 'Key account · Platinum',
        text: '₦1,000,000 – ₦4,999,999 · Half of revenue — protect and reward',
        icon: 'BadgeDollarSign',
      },
      {
        label: 'Strategic · Diamond',
        text: '₦5,000,000+ · White-glove treatment; not the same gift as a ₦50k buyer',
        icon: 'Sparkles',
      },
    ],
  },
  sectionSlide('loyalty-09', 'Gift Ladder', '4. Reward Catalogue', {
    subtitle: 'Five point bands with suggested gifts (Nigeria)',
  }),
  {
    id: 'loyalty-10',
    layout: 'framework',
    chapter: '4.1 At Current Planning Default — ₦30 per Point',
    title: 'Gift Ladder at ₦30 per Point',
    icon: 'Boxes',
    bullets: [
      'Each range defines minimum points to qualify. Customers sit in one exclusive band (50–249 pts, 250–499 pts, etc.).',
    ],
    frameworkBlocks: [
      {
        label: '50 – 249 pts · ₦50k–₦249k',
        text: 'Gift value ₦1,500 (50 pts) · Branded jotter + pen · exercise-book pack · desk notepad',
        icon: 'Boxes',
      },
      {
        label: '250 – 499 pts · ₦250k–₦499k',
        text: 'Gift value ₦7,500 (250 pts) · Lunch flask · umbrella · 10,000mAh power bank · quality diary + pen',
        icon: 'Boxes',
      },
      {
        label: '500 – 999 pts · ₦500k–₦999k',
        text: 'Gift value ₦15,000 (500 pts) · Electric kettle · sandwich maker · rechargeable fan · school backpack',
        icon: 'Boxes',
      },
      {
        label: '1,000 – 4,999 pts · ₦1m–₦4.99M',
        text: 'Gift value ₦30,000 (1,000 pts) · Table blender · standing fan · rice cooker · pressing iron + kettle',
        icon: 'Boxes',
      },
      {
        label: '5,000+ pts · ₦5m+',
        text: 'Gift value ₦150,000 (5,000 pts) · Android phone (Infinix/Tecno) · 32″ LED TV · small fridge · microwave',
        icon: 'Boxes',
      },
    ],
  },
  {
    id: 'loyalty-11',
    layout: 'framework',
    chapter: '4.2 At Proposed Rate — ₦10 per Point (1%)',
    title: 'Gift Ladder at ₦10 per Point',
    icon: 'Boxes',
    frameworkBlocks: [
      {
        label: '50 – 249 pts · ₦50k',
        text: 'Gift value ₦500 (50 pts) · Entry gift stays symbolic; protects budget on long tail',
        icon: 'Boxes',
      },
      {
        label: '250 – 499 pts · ₦250k',
        text: 'Gift value ₦2,500 (250 pts) · Still meaningful for median school',
        icon: 'Boxes',
      },
      {
        label: '500 – 999 pts · ₦500k',
        text: 'Gift value ₦5,000 (500 pts) · Mid-tier household / school items',
        icon: 'Boxes',
      },
      {
        label: '1,000 – 4,999 pts · ₦1m',
        text: 'Gift value ₦10,000 (1,000 pts) · Recognises key accounts without over-spending',
        icon: 'Boxes',
      },
      {
        label: '5,000+ pts · ₦5m',
        text: 'Gift value ₦50,000 (5,000 pts) · Strategic tier remains differentiated',
        icon: 'Boxes',
      },
    ],
  },
  sectionSlide('loyalty-12', 'Budget Impact', '5. Full-Data Snapshot', {
    subtitle: '2,151 customers · ₦1,260,066,623 total spend',
  }),
  {
    id: 'loyalty-13',
    layout: 'chart',
    chapter: '5. Budget Impact',
    title: 'Budget Impact (Full-Data Snapshot)',
    icon: 'BarChart3',
    bullets: [
      'Using 2,151 customers and ₦1,260,066,623 total spend (1,260,066 would-be points at ₦1,000/pt).',
    ],
    chartType: 'bar',
    chartData: [
      { name: '₦20/pt (2%)', value: 25.2 },
      { name: '₦30/pt (3%)', value: 37.8 },
      { name: '₦10/pt (1%)', value: 12.6 },
      { name: '₦50/pt (5%)', value: 63.0 },
    ],
    chartCaption:
      'Estimated gift budget at 100% redemption (₦ millions)',
  },
  {
    id: 'loyalty-14',
    layout: 'framework',
    chapter: '5. Budget Impact',
    title: 'Budget Scenarios Summary',
    icon: 'PieChart',
    frameworkBlocks: [
      {
        label: '₦20 (range low)',
        text: 'Est. gift budget ₦25.2m · 2.0% of sales',
        icon: 'PieChart',
      },
      {
        label: '₦30 (current default)',
        text: 'Est. gift budget ₦37.8m · 3.0% of sales',
        icon: 'PieChart',
      },
      {
        label: '₦10 (proposed)',
        text: 'Est. gift budget ₦12.6m · 1.0% of sales',
        icon: 'PieChart',
      },
      {
        label: '₦50 (range high)',
        text: 'Est. gift budget ₦63.0m · 5.0% of sales',
        icon: 'PieChart',
      },
    ],
  },
  sectionSlide('loyalty-15', 'MD Decision', '6. Recommendation', {
    subtitle: 'Current defaults vs proposed changes',
  }),
  {
    id: 'loyalty-16',
    layout: 'twoColumn',
    chapter: '6. Recommendation for MD Decision',
    title: 'Recommendation for MD Decision',
    icon: 'CircleCheck',
    leftTitle: 'Current',
    leftBullets: [
      'Earn rate: 1 pt / ₦1,000',
      'Gift cost / point: ₦30 (3%)',
      'Gift range (sensitivity): ₦20 – ₦50',
      'Gift ladder structure: 5 rungs (50 → 5,000 pts)',
    ],
    rightTitle: 'Proposal',
    rightBullets: [
      'Earn rate: Keep — simple, already understood in the preview',
      'Gift cost / point: ₦10 (1%) — lower burn, still funds a clear ladder',
      'Gift range (sensitivity): Keep for best / worst-case budgeting',
      'Gift ladder structure: Keep — aligns with natural spend clusters',
    ],
    footer:
      'Accessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way, Oke-Ado, Ibadan\nwww.accessiblepublishers.com',
  },
]

export const loyaltyRewardFramework: PresentationState = {
  slides: loyaltyRewardFrameworkSlides,
  currentIndex: 0,
  seedRevision: LOYALTY_FRAMEWORK_SEED_REVISION,
  meta: LOYALTY_FRAMEWORK_META,
}
