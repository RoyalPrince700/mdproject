import type { PresentationState, Slide } from '../types/slide'

export const DM_CLASS1_DOCUMENT_ID = 'dm-class-1-introduction'
export const DM_CLASS1_DOCUMENT_TITLE =
  'Digital Marketing Class 1 — Introduction to Digital Marketing'
export const DM_CLASS1_SEED_REVISION = 4

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

export const DM_CLASS1_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: '',
  degree: 'Digital Marketing Training — Class 1',
  date: 'September 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Calibri',
  subject: 'Digital Marketing Class 1 — Introduction to Digital Marketing',
}

export const dmClass1Slides: Slide[] = [
  {
    id: 'dm1-01',
    layout: 'title',
    title: 'Digital Marketing\nClass 1 Study Guide',
    subtitle:
      'Introduction to Digital Marketing — channels, SEO, frameworks, and campaign planning',
    notes:
      'Class 1 study guide for revision and download. Open in Document view and export as DOCX.',
  },
  sectionSlide('dm1-02', 'About this guide', '1. About this guide', {
    subtitle: 'Course context, terminology, and how to use this document',
  }),
  {
    id: 'dm1-03',
    layout: 'bullets',
    chapter: '1. About this guide',
    title: 'Purpose of this study guide',
    icon: 'BookOpen',
    bullets: [
      'This document is the Class 1 study guide for practical digital marketing (DM) training at Accessible Publishers Limited. It is written for revision, class activities, and campaign planning.',
      'Training is expert-led and fast-paced. The company chose to develop an in-house Chief Digital Marketer rather than hire an external digital marketer. Apply every concept here to real brands in the group.',
      'Throughout this course, **DM means Digital Marketing** — not “direct message.”',
      'By the end of Class 1 you should be able to combine traditional and digital channels, choose media by budget, diagnose weak results with CRO, run ads with RACE, present to leadership with SOSTAC, and plan a campaign from the customer problem through to top-of-mind awareness.',
    ],
  },
  {
    id: 'dm1-04',
    layout: 'framework',
    chapter: '1. About this guide',
    title: 'Accessible Publishers group — brands you will market',
    icon: 'Building2',
    bullets: [
      'Every class activity and campaign plan should connect to at least one real product in the group. These are the organisations this training is preparing you to market.',
    ],
    frameworkBlocks: [
      {
        label: 'Accessible Publishers Limited',
        text: 'Mother company — educational publishing, printing, and digital learning, based in Ibadan.',
        icon: 'BookOpen',
      },
      {
        label: 'SmartEdu Hub',
        text: 'School Management System (SMS) plus Learning Management System (LMS), including exam bodies such as PQ on the platform.',
        icon: 'GraduationCap',
      },
      {
        label: 'Smipay',
        text: 'Fintech subsidiary — wallets, payments, and related financial services.',
        icon: 'Wallet',
      },
      {
        label: 'Oxygen FM Ibadan',
        text: 'Radio station — mass reach and local audience engagement in Ibadan.',
        icon: 'Mic',
      },
      {
        label: 'Best Technology',
        text: 'Software and website development — B2B and project-based services.',
        icon: 'Laptop',
      },
    ],
  },
  sectionSlide(
    'dm1-05',
    'Traditional vs digital',
    '2. Traditional marketing vs digital marketing',
    { subtitle: 'Definitions, examples, and when to combine both' },
  ),
  {
    id: 'dm1-06',
    layout: 'twoColumn',
    chapter: '2. Traditional marketing vs digital marketing',
    title: 'Two families of marketing',
    icon: 'GitBranch',
    bullets: [
      'Traditional marketing and digital marketing are different toolkits, not competing philosophies. Each is strong at a different job.',
    ],
    leftTitle: 'Traditional marketing',
    leftBullets: [
      'Uses offline, physical channels to reach people where they live, work, and move.',
      'Billboards and large-format outdoor signage.',
      'Lamp-post banners and street placements.',
      'Flyers, posters, radio, television, print, and event activations.',
      'Strong for mass awareness and local presence.',
    ],
    rightTitle: 'Digital marketing (DM)',
    rightBullets: [
      'Uses online channels to reach, engage, convert, and retain audiences.',
      'Search engines (Google, Bing), social media, email, websites, and apps.',
      'Paid digital ads (Meta, Google, LinkedIn, TikTok, and partner networks).',
      'Content marketing, influencers, SEO, and analytics.',
      'Strong for targeting, measurement, and journey-based campaigns.',
    ],
  },
  {
    id: 'dm1-07',
    layout: 'bullets',
    chapter: '2. Traditional marketing vs digital marketing',
    title: 'How traditional and digital work together',
    icon: 'Network',
    bullets: [
      'Traditional and digital marketing are **not rivals**. The strongest campaigns often **combine both**, based on audience, budget, and objective.',
      '**Fintech launch (Smipay):** billboards and lamp-post banners for mass awareness in key cities, combined with Meta ads for targeted app downloads and sign-ups.',
      '**School platform (SmartEdu Hub):** radio on Oxygen FM Ibadan for broad local reach, plus Instagram and Facebook ads aimed at SS2–SS3 students and parents.',
      '**Publishing (Accessible Publishers):** print and event presence at school fairs, plus content marketing and SEO driving traffic to SmartEdu Hub.',
      '**Tutor rule:** choose channels because they fit the audience and the goal — not because one type of marketing is automatically “better.”',
    ],
  },
  sectionSlide('dm1-08', 'DM channels', '3. What digital marketing includes', {
    subtitle: 'Paid, organic, and earned channels, with budget guidance',
  }),
  {
    id: 'dm1-09',
    layout: 'framework',
    chapter: '3. What digital marketing includes',
    title: 'Paid and organic channels',
    icon: 'Share2',
    bullets: [
      'Digital marketing is a mix of paid, owned, and earned activity. Budget is a primary decision factor. The tutor emphasised that channel choice must match what the campaign can actually afford.',
    ],
    frameworkBlocks: [
      {
        label: 'Google Ads',
        text: 'Among the most expensive channels, especially for competitive keywords and top search rankings. Use mainly when **the budget is high**.',
        icon: 'Search',
      },
      {
        label: 'Meta Ads (Facebook / Instagram)',
        text: 'More affordable than Google for most campaigns. The tutor’s **default choice** when the budget is moderate or tight.',
        icon: 'Share2',
      },
      {
        label: 'LinkedIn Ads',
        text: 'Also expensive. Best when the audience is professional or B2B — school owners, HR, or corporate buyers.',
        icon: 'Handshake',
      },
      {
        label: 'TikTok Ads',
        text: 'Growing channel — strong for youth-led products, students, creators, and entertainment.',
        icon: 'Smartphone',
      },
      {
        label: 'X (formerly Twitter)',
        text: 'Often works through partner ad networks and agencies. Google can serve ads on X in some setups.',
        icon: 'MessageCircle',
      },
    ],
  },
  {
    id: 'dm1-10',
    layout: 'twoColumn',
    chapter: '3. What digital marketing includes',
    title: 'Content marketing and influencer marketing',
    icon: 'Users',
    bullets: [
      'Paid ads are only part of digital marketing. Content and trusted voices build belief before the click, and they support SEO as well as conversion.',
    ],
    leftTitle: 'Content marketing',
    leftBullets: [
      'Create useful content — blogs, guides, case studies, videos, and newsletters — **before** asking people to buy or sign up.',
      'Builds trust, improves SEO, and supports every stage of the customer journey.',
      'Examples: “How schools use an SMS to track fees,” and “Five ways PQ exam prep helps SS3 students.”',
      'A long-term investment that makes paid ads work harder.',
    ],
    rightTitle: 'Influencer marketing',
    rightBullets: [
      'Partner with people the audience already trusts — educators, finance creators, campus voices, and radio personalities.',
      'Especially powerful in Nigeria, where social proof accelerates adoption.',
      'SmartEdu Hub: a teacher demonstrating PQ prep on the LMS.',
      'Smipay: a finance creator explaining secure mobile payments.',
    ],
  },
  sectionSlide('dm1-11', 'SEO', '4. Search Engine Optimisation (SEO)', {
    subtitle: 'Google, Bing, on-page work, off-page work, backlinks, and blogs',
  }),
  {
    id: 'dm1-12',
    layout: 'bullets',
    chapter: '4. Search Engine Optimisation (SEO)',
    title: 'What SEO is',
    icon: 'Search',
    bullets: [
      'SEO is the practice of improving visibility in **organic (unpaid)** search results. It is a long-term channel: it supports awareness, credibility, and lower-cost traffic over time.',
      'Optimise for **Google** (dominant in most markets, including Nigeria) and **Bing (Microsoft)** (secondary, but still relevant — some corporate and desktop users rely on it).',
      'Strong SEO also makes paid campaigns more efficient, because landing pages, content, and authority are already working.',
    ],
  },
  {
    id: 'dm1-13',
    layout: 'framework',
    chapter: '4. Search Engine Optimisation (SEO)',
    title: 'Core SEO elements',
    icon: 'Layers',
    frameworkBlocks: [
      {
        label: 'On-page SEO',
        text: 'Titles, headings, keyword use, page speed, mobile experience, and a clear site structure.',
        icon: 'FileText',
      },
      {
        label: 'Off-page SEO',
        text: 'Activity outside your own site that builds reputation, referral traffic, and authority.',
        icon: 'Globe',
      },
      {
        label: 'Backlinks',
        text: 'Links from reputable external sites to yours — signals of trust and authority to search engines.',
        icon: 'Network',
      },
      {
        label: 'Blogs and content',
        text: 'Regular, useful articles that answer what the audience searches for. They support keywords and earn backlinks.',
        icon: 'NotebookPen',
      },
    ],
  },
  {
    id: 'dm1-14',
    layout: 'bullets',
    chapter: '4. Search Engine Optimisation (SEO)',
    title: 'Off-page SEO for Nigerian tech and fintech',
    icon: 'Globe',
    bullets: [
      'When the product is **fintech or technology** (for example Smipay), media outreach is part of off-page SEO, not a separate extra.',
      'Priority publications from class: **TechCabal**, **TechPoint**, and **NairaMetrics**.',
      'A feature or review on these platforms can deliver referral traffic, brand credibility, and valuable backlinks.',
      'Combine that coverage with a strong landing page and, later, Meta retargeting for readers who do not convert on the first visit.',
    ],
  },
  sectionSlide('dm1-15', 'CRO', '5. Conversion Rate Optimisation (CRO)', {
    subtitle: 'Diagnosing underperforming ads and landing pages',
  }),
  {
    id: 'dm1-16',
    layout: 'framework',
    chapter: '5. Conversion Rate Optimisation (CRO)',
    title: 'When ads run but results are poor',
    icon: 'CircleAlert',
    bullets: [
      'If an ad gets clicks but few sign-ups, purchases, or enquiries, **do not only change the creative**. Diagnose the full path from click to completed action. That discipline is CRO. Traffic that does not convert is wasted budget.',
    ],
    frameworkBlocks: [
      {
        label: 'Broken link',
        text: 'Is the destination URL correct and working on both mobile and desktop?',
        icon: 'Ban',
      },
      {
        label: 'Slow website',
        text: 'Does the page load quickly on mobile networks? Slow sites kill conversions.',
        icon: 'TrendingDown',
      },
      {
        label: 'Weak landing page',
        text: 'Does the page match the ad message? Is the call-to-action (CTA) clear and easy to find?',
        icon: 'Monitor',
      },
      {
        label: 'Wrong strategy',
        text: 'Are we targeting the wrong audience, the wrong objective, or the wrong channel for this offer?',
        icon: 'Target',
      },
      {
        label: 'Weak offer',
        text: 'Is the value proposition unclear, uncompetitive, or not compelling enough?',
        icon: 'BadgeDollarSign',
      },
    ],
  },
  sectionSlide('dm1-17', 'Purpose of DM', '6. The purpose of digital marketing', {
    subtitle: 'A journey with an end goal — not traffic alone',
  }),
  {
    id: 'dm1-18',
    layout: 'bullets',
    chapter: '6. The purpose of digital marketing',
    title: 'Moving people through a journey',
    icon: 'GitBranch',
    bullets: [
      'Digital marketing is **not only about driving traffic**. Traffic without a destination wastes budget.',
      'The tutor’s framing: **DM moves people through a journey that has an end goal.**',
      '**Awareness** — they learn that the product or campaign exists.',
      '**Interest / action** — they click, register, download, or enquire.',
      '**Conversion** — they pay, subscribe, onboard, or become a customer.',
      '**Engagement / retention** — they return, keep using the product, and refer others.',
      'Every campaign must define the end goal first, then choose channels and messages for each stage.',
    ],
  },
  sectionSlide('dm1-19', 'RACE', '7. RACE framework', {
    subtitle: 'The tutor’s day-to-day campaign stack',
  }),
  {
    id: 'dm1-20',
    layout: 'framework',
    chapter: '7. RACE framework',
    title: 'RACE explained',
    icon: 'Goal',
    bullets: [
      'RACE is the framework the tutor uses most often because it is practical for running ads. Each letter is a stage of the customer journey and, when budget allows, its own ad set.',
    ],
    frameworkBlocks: [
      {
        label: 'R — Reach',
        text: 'Create awareness. Let people know the product or campaign exists. Typical ad objectives: brand awareness and video views.',
        icon: 'Search',
      },
      {
        label: 'A — Act',
        text: 'Prompt a useful action — register, click, sign up, enquire, or download. Move the audience from knowing to doing.',
        icon: 'Target',
      },
      {
        label: 'C — Conversion',
        text: 'Turn interest into a measurable outcome — purchase, subscription, completed lead, or school onboarding.',
        icon: 'Wallet',
      },
      {
        label: 'E — Engage',
        text: 'Retain and re-engage converted users so they keep visiting, using, and recommending the product.',
        icon: 'Handshake',
      },
    ],
  },
  {
    id: 'dm1-21',
    layout: 'twoColumn',
    chapter: '7. RACE framework',
    title: 'How the tutor structures ad sets',
    icon: 'Layers',
    bullets: [
      'Do not copy a four-set structure onto a small budget. Keep the funnel logic, and combine stages when money is tight.',
    ],
    leftTitle: 'High budget — 4 ad sets',
    leftBullets: [
      'Ad set 1: **Reach** — awareness-only creative.',
      'Ad set 2: **Act** — action-focused creative (register, sign up, enquire).',
      'Ad set 3: **Conversion** — optimise for people who complete the main goal.',
      'Ad set 4: **Engage** — retention, reminders, and upsell.',
    ],
    rightTitle: 'Tight budget — 3 ad sets',
    rightBullets: [
      'Ad set 1: **Reach + Act combined** — creative that introduces the product **and** invites immediate action.',
      'Ad set 2: **Conversion** — drive the main business outcome.',
      'Ad set 3: **Engage** — keep converted users active.',
      'This preserves funnel logic without spreading a small budget too thin.',
    ],
  },
  sectionSlide('dm1-22', 'SOSTAC', '8. SOSTAC framework', {
    subtitle: 'For Managing Director and executive presentations',
  }),
  {
    id: 'dm1-23',
    layout: 'framework',
    chapter: '8. SOSTAC framework',
    title: 'SOSTAC explained',
    icon: 'Presentation',
    bullets: [
      'Use **SOSTAC** when presenting to the **Managing Director or senior leadership**. It covers what executives need: context, goals, plan, execution, and measurement.',
    ],
    frameworkBlocks: [
      {
        label: 'S — Situation analysis',
        text: 'Where we are now: market, competitors, current performance, SWOT, audience insights, and constraints.',
        icon: 'Map',
      },
      {
        label: 'O — Objectives',
        text: 'What the campaign must achieve — SMART goals tied to the problem the product solves.',
        icon: 'Target',
      },
      {
        label: 'S — Strategy',
        text: 'High-level approach: which segments, channels, positioning, and customer journey we will use.',
        icon: 'Crosshair',
      },
      {
        label: 'T — Tactics',
        text: 'Specific tools and activities: Meta ads, Google, influencers, SEO, email, landing pages, and radio.',
        icon: 'Puzzle',
      },
      {
        label: 'A — Action',
        text: 'Who does what, timeline, budget allocation, creative production, and launch checklist.',
        icon: 'ListChecks',
      },
      {
        label: 'C — Control',
        text: 'KPIs, reporting cadence, optimisation rules, CRO checks, and retargeting decisions.',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'dm1-24',
    layout: 'bullets',
    chapter: '8. SOSTAC framework',
    title: 'RACE versus SOSTAC — when to use which',
    icon: 'GitBranch',
    bullets: [
      '**RACE** — day-to-day campaign planning and ad-set structure. Fast, practical, and operator-friendly.',
      '**SOSTAC** — formal proposals, board reviews, and MD presentations. It shows strategic thinking from context through to measurement.',
      'In practice: **plan and run with RACE; document and present with SOSTAC.**',
    ],
  },
  sectionSlide('dm1-25', 'Retargeting', '9. Retargeting', {
    subtitle: 'When and why to retarget warm audiences',
  }),
  {
    id: 'dm1-26',
    layout: 'bullets',
    chapter: '9. Retargeting',
    title: 'Retargeting after awareness and conversion',
    icon: 'ArrowRight',
    bullets: [
      'After roughly **two months** of running awareness and conversion campaigns, begin **retargeting**.',
      'Retargeting shows ads again to people who already interacted — visited the site, watched a video, engaged with an ad, or started sign-up but did not finish.',
      'These audiences already know the brand, so **cost per conversion is often lower** than for cold audiences.',
      'Retargeting supports the **Conversion** and **Engage** stages in RACE.',
      'Example: show SmartEdu Hub PQ prep ads to people who watched most of an awareness video but have not registered.',
    ],
  },
  sectionSlide(
    'dm1-27',
    'Campaign planning',
    '10. Campaign thought process',
    { subtitle: 'The tutor’s step-by-step approach for any brand in the group' },
  ),
  {
    id: 'dm1-28',
    layout: 'bullets',
    chapter: '10. Campaign thought process',
    title: 'Six steps before you run any campaign',
    icon: 'ClipboardList',
    bullets: [
      'Do not start with “we have an app” or “we should run ads.” Follow this sequence for every brand in the group.',
      '**Step 1 — Know the problem the product solves.** State the customer problem in plain language. SmartEdu Hub solves fragmented school administration, weak learning delivery, and exam-preparation gaps — not “we have a platform.”',
      '**Step 2 — Identify the target audience.** Who must change behaviour? Students, parents, school owners, bursars, teachers, listeners, or merchants — it depends on the offer.',
      '**Step 3 — Build buyer personas.** Write detailed profiles with messaging and channel choices for each segment (see the next section). Create as many personas as each product line needs.',
      '**Step 4 — Competitor audit.** What do they have that we do not? What are they doing better? If a competitor posts six times a day and we post twice, close the visibility gap with more frequency or stronger content — do not copy blindly.',
      '**Step 5 — Demographics.** Age, gender, location, income, device use, and language must match the persona and the channel. A mismatch wastes spend.',
      '**Step 6 — Top-of-mind awareness.** Build consistent presence across channels so that when someone thinks of the category, your brand comes to mind first.',
    ],
  },
  {
    id: 'dm1-29',
    layout: 'framework',
    chapter: '10. Campaign thought process',
    title: 'Buyer persona examples — SmartEdu Hub',
    icon: 'UserRound',
    bullets: [
      'A buyer persona is a detailed profile of a segment you will speak to with specific messaging and channels. Create as many as needed for each product line (LMS, SMS, PQ exam bodies, Smipay, Oxygen FM, and so on).',
    ],
    frameworkBlocks: [
      {
        label: 'Persona 1 — Student',
        text: 'Age 15 and above, SS2–SS3, exam-focused, mobile-first. Channel: Meta (Instagram and Facebook). Message: PQ prep, results, and learning on the go.',
        icon: 'GraduationCap',
      },
      {
        label: 'Persona 2 — Parent',
        text: 'Often women with children in secondary school; cares about results and school quality. Channels: Meta, WhatsApp groups, and radio (Oxygen FM).',
        icon: 'Users',
      },
      {
        label: 'Persona 3 — School admin',
        text: 'Proprietor, principal, or bursar — needs SMS for fees, reports, and operations. Channels: LinkedIn, email, direct sales, and events.',
        icon: 'Building2',
      },
    ],
  },
  {
    id: 'dm1-30',
    layout: 'bullets',
    chapter: '10. Campaign thought process',
    title: 'Top-of-mind awareness',
    icon: 'Lightbulb',
    bullets: [
      '**Top-of-mind awareness** means that when someone thinks of the category, your brand comes to mind first.',
      'It is built through consistent, repeated presence: ads, content, influencers, radio, retargeting, and PR.',
      'The goal is that the audience **keeps seeing you** — not once, but across the journey.',
      'For the Accessible group, a parent might hear Oxygen FM, see a SmartEdu Hub Instagram ad, read a TechCabal story about Smipay, and later be retargeted. Those touches should reinforce one ecosystem, not five disconnected brands.',
    ],
  },
  sectionSlide('dm1-31', 'Budget guide', '11. Budget and channel cheat sheet', {
    subtitle: 'Quick reference from Class 1',
  }),
  {
    id: 'dm1-32',
    layout: 'framework',
    chapter: '11. Budget and channel cheat sheet',
    title: 'Channel selection by budget',
    icon: 'Wallet',
    bullets: [
      'Use this table as a first filter. Audience and objective still matter, but budget decides whether an expensive channel is even on the list.',
    ],
    frameworkBlocks: [
      {
        label: 'Google Ads',
        text: 'High budget only — expensive keywords and competitive rankings.',
        icon: 'Search',
      },
      {
        label: 'Meta Ads',
        text: 'Default for moderate and tight budgets.',
        icon: 'Share2',
      },
      {
        label: 'LinkedIn Ads',
        text: 'Expensive — use for B2B when the audience justifies the cost.',
        icon: 'Handshake',
      },
      {
        label: 'TikTok Ads',
        text: 'Youth-led products and student audiences.',
        icon: 'Smartphone',
      },
      {
        label: 'Traditional (outdoor, radio)',
        text: 'Combine with digital for mass reach and local presence.',
        icon: 'Mic',
      },
      {
        label: 'SEO, content, and PR',
        text: 'Long-term foundation; supports all paid channels.',
        icon: 'NotebookPen',
      },
    ],
  },
  sectionSlide('dm1-33', 'Revision', '12. Class 1 key takeaways', {
    subtitle: 'Summary for revision and class activities',
  }),
  {
    id: 'dm1-34',
    layout: 'bullets',
    chapter: '12. Class 1 key takeaways',
    title: 'What to remember',
    icon: 'CircleCheck',
    bullets: [
      '**DM means Digital Marketing** in every context in this course.',
      'Traditional and digital marketing work best together when audience and budget require both.',
      'Google Ads and LinkedIn Ads are expensive; **Meta is the tutor’s affordable default**.',
      'SEO covers **Google and Bing**. Off-page work for fintech and tech includes **TechCabal, TechPoint, and NairaMetrics**.',
      'When ads underperform, use **CRO** on the full path — link, speed, landing page, strategy, and offer — not only the creative.',
      'Digital marketing moves people through a journey: awareness → action → conversion → engagement.',
      'Use **RACE** to run campaigns. Use **SOSTAC** to present to the MD.',
      'High budget: four RACE ad sets. Tight budget: three (Reach + Act combined, then Conversion, then Engage).',
      'Begin retargeting after about **two months** of awareness and conversion work.',
      'Campaign planning order: **problem → audience → personas → competitors → demographics → top of mind**.',
    ],
  },
  {
    id: 'dm1-35',
    layout: 'framework',
    chapter: '12. Class 1 key takeaways',
    title: 'Sample campaign angles by brand',
    icon: 'Lightbulb',
    bullets: [
      'Use these starting points when a class activity asks for a campaign example. Adapt the message to the persona and the budget.',
    ],
    frameworkBlocks: [
      {
        label: 'SmartEdu Hub',
        text: 'LMS and SMS for schools; PQ exam-prep ads for SS2–SS3 students on Meta.',
        icon: 'GraduationCap',
      },
      {
        label: 'Smipay',
        text: 'TechCabal / TechPoint / NairaMetrics coverage plus Meta ads for app adoption.',
        icon: 'Wallet',
      },
      {
        label: 'Oxygen FM Ibadan',
        text: 'Radio reach plus social engagement for the Ibadan audience.',
        icon: 'Mic',
      },
      {
        label: 'Best Technology',
        text: 'LinkedIn plus case-study content for B2B software and website clients.',
        icon: 'Laptop',
      },
      {
        label: 'Accessible Publishers',
        text: 'Educational publishing offer with a SmartEdu Hub subscription cross-sell.',
        icon: 'BookOpen',
      },
    ],
  },
]

export const dmClass1Document: PresentationState = {
  slides: dmClass1Slides,
  currentIndex: 0,
  seedRevision: DM_CLASS1_SEED_REVISION,
  meta: DM_CLASS1_META,
}
