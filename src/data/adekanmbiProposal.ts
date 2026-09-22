import type { PresentationState, Slide } from '../types/slide'

export const ADEKANMBI_DOCUMENT_ID = 'smeh-adekanmbi-proposal'
export const ADEKANMBI_DOCUMENT_TITLE =
  'SmartEdu Hub Proposal to Hon. Bimbo Adekanmbi (APM Oyo Governorship Candidate)'
export const ADEKANMBI_SEED_REVISION = 1

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

export const ADEKANMBI_PROPOSAL_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'September 2026',
  letterDate: '22nd September 2026',
  kind: 'proposal',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'Hon. Abimbola “Bimbo” Adekanmbi',
  recipientOrg:
    'Governorship Candidate, Allied Peoples Movement (APM), Oyo State',
  recipientAddress: 'Ibadan, Oyo State, Nigeria',
  subject:
    'Proposal for Strategic Sponsorship of SmartEdu Hub — Aligning with Your Vision for Digital Elevation, Specialised Learning Tracks, and Intellectual Capital Development in Oyo State',
  website: 'www.smarteduhub.ng',
  senderAddress:
    '121/123, The Knowledge Hub,\nObafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State.',
  coverLetter: [
    'We respectfully write to thank you for honouring Accessible Publishers Limited with your recent visit to our headquarters and subsidiaries in Ibadan, and to formally invite you to sponsor SmartEdu Hub — our indigenous AI-powered Learning Management and School Management platform — as a practical vehicle for the education, digital economy, and youth-productivity agenda you have outlined for Oyo State.',
    'Your presence across our ecosystem meant a great deal to our team. You toured our head office and met our staff; you visited our press and saw the sophisticated machines through which we print educational materials for Nigerian schools; you engaged Best Technology, the software and web-development subsidiary that builds SmartEdu Hub; you visited Smipay, our fintech company; you spent time at Oxygen FM Ibadan, our radio station; and you experienced Best in Print Academy and Consult. Across every stop, your interest, questions, and encouragement strengthened our conviction that Oyo’s next chapter must connect education, technology, enterprise, and media into one production-ready system.',
    'We were especially moved by your observation that Accessible Publishers Limited is already implementing aspects of your manifesto. That remark captures precisely why we are writing. Your publicly stated priorities — capacity building and digital elevation; specialised learning tracks that cultivate technological literacy, problem-solving, and vocational proficiency from an early age; a digitally driven economy powered by intellectual capital; data-driven approaches to education and out-of-school children; and the digitisation of secondary education through tools such as e-lesson notes — are the same outcomes SmartEdu Hub was built to deliver at classroom, school, and state scale.',
    'Accessible Publishers Limited is an indigenous, award-winning Nigerian education company established in 1996 and headquartered here in Ibadan. We were recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025, and we are ISO 9001 certified. SmartEdu Hub is developed in-house by Best Technology, in close collaboration with our Editorial, Learning and Development, Media, Marketing, Distribution, and Administration teams.',
    'Only days ago, on 18th September 2026, we held the prize-giving ceremony for the Accessible Summer Competition — a national academic contest hosted on SmartEdu Hub in celebration of Accessible Publishers @30. We flew in our winners from across Nigeria. First prize went to Happiness John, a JSS 1 student of Joy Prime Model Secondary School, Akwa Ibom, who received ₦1,000,000. Second prize went to Agaga-Oamen Dave-Wisdom of The Oasis Schools, Ekpoma, Edo State (₦500,000). There was a tie for third prize between Daniel Barry Monsigia of Teko School, Rivers State, and Okunoye Mojolaoluwa Deborah of Oritamefa Baptist Model School, Ibadan, each receiving ₦250,000. That Ibadan third-place winner is living proof that Oyo learners can compete — and win — on a national digital stage.',
    'This proposal therefore asks you to sponsor SmartEdu Hub as a flagship education-technology partnership: to deepen platform reach in Oyo schools, strengthen competition and learning pathways for students, support teacher digital capacity, and give your vision for intellectual capital and digital elevation a ready-made, measurable delivery engine.',
    'We would be honoured to present SmartEdu Hub again in formal session, agree a sponsorship package, and begin implementation that turns your manifesto commitments into classroom practice across Oyo State.',
  ],
  signOff: [
    'Yours faithfully,',
    'Gbadega Adedapo',
    'MD/CEO',
    'For: Accessible Publishers Limited',
  ],
}

export const adekanmbiProposalSlides: Slide[] = [
  {
    id: 'adek-01',
    layout: 'title',
    title:
      'Proposal for Strategic Sponsorship of\nSmartEdu Hub Digital Solutions',
    subtitle:
      'Partnership with Hon. Bimbo Adekanmbi to advance digital elevation, specialised learning tracks, and intellectual capital development in Oyo State',
    footer:
      'Submitted to Hon. Abimbola “Bimbo” Adekanmbi\nGovernorship Candidate, Allied Peoples Movement (APM), Oyo State\nAccessible Publishers Limited · September 2026',
    notes:
      'Lead with gratitude for the visit, manifesto alignment, and a clear ask: sponsor SmartEdu Hub.',
  },
  {
    id: 'adek-02',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction',
    icon: 'Handshake',
    bullets: [
      'We respectfully write to thank you for honouring Accessible Publishers Limited with your recent visit to our headquarters and subsidiaries in Ibadan, and to formally invite you to sponsor SmartEdu Hub — our indigenous AI-powered Learning Management and School Management platform — as a practical vehicle for the education, digital economy, and youth-productivity agenda you have outlined for Oyo State.',
      'Your presence across our ecosystem meant a great deal to our team. You toured our head office and met our staff; visited our press and sophisticated printing machines; engaged Best Technology (builders of SmartEdu Hub); visited Smipay; spent time at Oxygen FM Ibadan; and experienced Best in Print Academy and Consult.',
      'We were especially moved by your observation that Accessible Publishers Limited is already implementing aspects of your manifesto. That remark is the heart of this proposal.',
    ],
    notes:
      'These paragraphs become the opening letter in the Word download.',
  },
  {
    id: 'adek-02b',
    layout: 'bullets',
    chapter: 'Cover Letter',
    title: 'Letter of Introduction (continued)',
    icon: 'FileText',
    bullets: [
      'Your priorities — capacity building and digital elevation; specialised learning tracks; intellectual capital; data-driven education; and digitisation of secondary schooling — are the outcomes SmartEdu Hub was built to deliver.',
      'Accessible Publishers Limited, established in 1996 and headquartered in Ibadan, was recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year 2025 and is ISO 9001 certified. SmartEdu Hub is developed in-house by Best Technology.',
      'On 18th September 2026 we celebrated the Accessible Summer Competition prize-giving on SmartEdu Hub, flying in national winners including an Oyo third-place champion from Oritamefa Baptist Model School, Ibadan.',
      'We invite you to sponsor SmartEdu Hub and would be honoured to agree a formal sponsorship package that turns manifesto commitments into classroom practice across Oyo State.',
    ],
  },
  sectionSlide('adek-03', 'The Proposal', 'SmartEdu Hub × Hon. Bimbo Adekanmbi', {
    subtitle: 'Visit. Alignment. Sponsorship. Impact.',
  }),
  {
    id: 'adek-04',
    layout: 'bullets',
    chapter: '1. Executive Summary',
    title: 'Executive Summary',
    icon: 'Target',
    bullets: [
      'SmartEdu Hub is Nigeria’s all-in-one AI-powered school management and digital learning platform — combining interactive curriculum content (AI Books / iBooks), CBT and past-question practice, school administration, teacher tools, competitions, and real-time performance data in one secure environment.',
      'Following your visit to Accessible Publishers Limited and our subsidiaries, and your recognition that our work already mirrors your manifesto, we propose that you sponsor SmartEdu Hub as a strategic education-technology partnership for Oyo State’s learners, teachers, and schools.',
      'Sponsorship would accelerate: (i) platform adoption in Oyo schools; (ii) national and state-facing academic competitions that reward excellence; (iii) teacher digital capacity and e-lesson support; and (iv) data dashboards that make education outcomes measurable — aligning directly with your commitments on digital elevation, specialised learning tracks, intellectual capital, and data-driven governance.',
    ],
  },
  {
    id: 'adek-05',
    layout: 'bullets',
    chapter: '2. About the Recipient',
    title: 'About Hon. Bimbo Adekanmbi',
    icon: 'ShieldCheck',
    bullets: [
      'Hon. Abimbola “Bimbo” Adekanmbi is the Allied Peoples Movement (APM) governorship candidate for the 2027 Oyo State election. A Fellow of the Association of Chartered Certified Accountants (ACCA), he previously served as Deputy Chief of Staff and Commissioner for Finance in Oyo State, and has chaired the Community Social Development Agency (CSDA).',
      'His professional formation spans banking, public-sector reform, and international financial systems work, including experience with UK local authorities. He is widely associated with problem-solving in complex public projects — from fiscal reforms and salary-process automation to interventions that kept major development programmes on course.',
      'His emerging platform for Oyo emphasises continuity where Governor Seyi Makinde has raised the bar (including education and workers’ welfare), while advancing a distinct next phase: moving the state from a consumption-heavy posture toward a production-driven economy powered by youth, technology, agriculture, and intellectual capital.',
      'Publicly, he has identified capacity building and digital elevation as cross-cutting drivers of governance; pledged specialised learning tracks that integrate practical problem-solving, technological literacy, and vocational proficiency from an early age; dedicated manifesto space to the digital economy and innovation for educational access; and promised digitisation of secondary education, including e-lesson notes and better use of school facilities.',
    ],
  },
  {
    id: 'adek-06',
    layout: 'framework',
    chapter: '3. Your Visit',
    title: 'What You Saw — And Why It Matters',
    icon: 'Building2',
    bullets: [
      'Your walkthrough of the Accessible group was not a courtesy tour alone. It was a first-hand inspection of an indigenous Oyo-based ecosystem that already connects publishing, printing, software, fintech, media, and skills — the same blend of intellectual capital and productive capacity your manifesto seeks to scale statewide.',
    ],
    frameworkBlocks: [
      {
        label: 'Head office & people',
        text: 'You met the staff who run publishing, learning, and operations from The Knowledge Hub in Oke-Ado — the human capital behind three decades of educational service.',
        icon: 'Users',
      },
      {
        label: 'Press & production',
        text: 'At our press, you saw the sophisticated machines through which curriculum materials are printed at quality and scale — evidence that Accessible is a production company, not only a content brand.',
        icon: 'Monitor',
      },
      {
        label: 'Best Technology',
        text: 'You engaged the software and web-development subsidiary that designs and builds SmartEdu Hub — the digital engine of our education transformation work.',
        icon: 'Laptop',
      },
      {
        label: 'Smipay',
        text: 'You visited our fintech subsidiary and saw how payments and digital financial infrastructure sit alongside education delivery in a modern ecosystem.',
        icon: 'Sparkles',
      },
      {
        label: 'Oxygen FM Ibadan',
        text: 'At our radio station you experienced the media arm through which education, civic information, and community engagement reach homes across the state.',
        icon: 'Presentation',
      },
      {
        label: 'Best in Print Academy & Consult',
        text: 'You saw our academy and consulting work — skills, print excellence, and professional development that turn knowledge into employable capability.',
        icon: 'GraduationCap',
      },
    ],
  },
  {
    id: 'adek-07',
    layout: 'bullets',
    chapter: '3. Your Visit',
    title: '“You Are Already Implementing My Manifesto”',
    icon: 'Lightbulb',
    bullets: [
      'Your statement after touring our facilities — that Accessible Publishers Limited is already implementing your manifesto — is the strategic foundation of this proposal. We take it as both affirmation and assignment.',
      'What you saw is a living model of the Oyo you describe: indigenous intellectual capital; technology built locally; production capacity in print and software; youth-facing skills pathways; media that informs the public; and a digital learning platform that prepares students not merely to seek jobs, but to compete, create, and contribute.',
      'Sponsoring SmartEdu Hub allows you to scale that model beyond our campus — into classrooms, competitions, teacher practice, and measurable learning outcomes across Oyo State.',
    ],
  },
  {
    id: 'adek-08',
    layout: 'framework',
    chapter: '4. Manifesto Alignment',
    title: 'How SmartEdu Hub Delivers Your Agenda',
    icon: 'Goal',
    frameworkBlocks: [
      {
        label: 'Digital elevation',
        text: 'SmartEdu Hub digitises learning and school operations — AI Books, assessments, records, and dashboards — matching your call for digital elevation across education and related sectors.',
        icon: 'Sparkles',
      },
      {
        label: 'Specialised learning tracks',
        text: 'Interactive content, CBT pathways, competition tiers, and skills-linked practice support solutions-driven learning — technological literacy and problem-solving from the junior secondary years upward.',
        icon: 'GitBranch',
      },
      {
        label: 'Intellectual capital',
        text: 'Built in Ibadan by Best Technology and grounded in Accessible’s publishing expertise, the platform turns Oyo’s knowledge economy into daily classroom infrastructure.',
        icon: 'Landmark',
      },
      {
        label: 'Data-driven education',
        text: 'Real-time performance data for learners, teachers, and administrators supports the evidence-based approach you advocate for out-of-school children, school improvement, and programme targeting.',
        icon: 'BarChart3',
      },
      {
        label: 'E-lesson & teacher capacity',
        text: 'Lesson planning tools, AI-assisted teaching support, and professional resources reinforce your pledge to digitise secondary education and keep teachers competitive.',
        icon: 'ClipboardList',
      },
      {
        label: 'Youth as wealth creators',
        text: 'Competitions, exam readiness, and digital fluency prepare young people for a production economy — participants in the digital marketplace, not only beneficiaries of programmes.',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    id: 'adek-09',
    layout: 'twoColumn',
    chapter: '4. Manifesto Alignment',
    title: 'Your Commitments · Our Delivery Layer',
    icon: 'Handshake',
    leftTitle: 'Your stated priorities',
    leftBullets: [
      'Capacity building and digital elevation.',
      'Specialised learning tracks from an early age.',
      'Digitally driven economy via intellectual capital.',
      'Data-driven solutions for education access.',
      'Digitisation of secondary education / e-lesson notes.',
      'Public–private partnerships that move fast on solid proposals.',
      'Continuity and deepening of education gains in Oyo.',
    ],
    rightTitle: 'What SmartEdu Hub provides',
    rightBullets: [
      'LMS + SMS in one indigenous platform.',
      'AI Books, CBT, and curriculum-aligned practice.',
      'National academic competitions with prizes.',
      'Teacher tools and e-lesson support.',
      'Analytics for schools and programme sponsors.',
      'In-house build, train, and support by Best Technology.',
      'An Ibadan-based partner already on the ground.',
    ],
  },
  {
    id: 'adek-10',
    layout: 'bullets',
    chapter: '5. About Accessible Publishers',
    title: 'About Accessible Publishers Limited',
    icon: 'Building2',
    bullets: [
      'Accessible Publishers Limited is an indigenous Nigerian education company headquartered in Ibadan and established in 1996. For thirty years we have served schools through curriculum-aligned publishing, printing, teacher support, and technology-enabled learning.',
      'Our group includes Best Technology (software and websites; builders of SmartEdu Hub), Smipay (fintech), Oxygen FM Ibadan (radio), and Best in Print Academy and Consult — the full ecosystem you inspected during your visit.',
      'In 2025 we were recognised as Nigeria’s Most Innovative Educational Publishing Company of the Year. We are ISO 9001 certified. We have delivered a related digital education solution for Abia State, and more than 30 schools adopted SmartEdu Hub within three months of launch.',
      'SmartEdu Hub is developed internally — giving us control over curriculum alignment, localisation, implementation, support, and continuous improvement.',
    ],
  },
  {
    id: 'adek-10b',
    layout: 'framework',
    chapter: '5. About Accessible Publishers',
    title: 'ISO Certification and Quality Assurance',
    icon: 'ShieldCheck',
    frameworkBlocks: [
      {
        label: 'ISO 9001 certified',
        text: 'Our quality management system ensures work is planned, documented, reviewed, and improved against an internationally recognised standard.',
        icon: 'CircleCheck',
      },
      {
        label: 'Editorial and curriculum QA',
        text: 'Titles and digital content pass structured review for accuracy, age-appropriateness, and curriculum alignment before they reach learners.',
        icon: 'BookOpen',
      },
      {
        label: 'Production and digital assurance',
        text: 'Print production and SmartEdu Hub features are tested before release. Competition scoring, learner data, and support follow documented controls.',
        icon: 'Monitor',
      },
      {
        label: 'Sponsor accountability',
        text: 'Sponsorship delivery — licences, training, competitions, and reporting — runs with clear ownership, traceable processes, and continuous improvement.',
        icon: 'ClipboardList',
      },
    ],
  },
  {
    id: 'adek-11',
    layout: 'framework',
    chapter: '6. SmartEdu Hub Offer',
    title: 'What SmartEdu Hub Delivers',
    icon: 'Layers',
    frameworkBlocks: [
      {
        label: 'AI Books / iBooks',
        text: 'Curriculum-aligned interactive digital textbooks with an in-built AI tutor — summaries, explanations, flashcards, and independent study support.',
        icon: 'BookOpen',
      },
      {
        label: 'CBT environment',
        text: 'Past-question practice for WAEC, NECO, JAMB, BECE, and NCEE, with timed mocks and feedback that turn mistakes into learning.',
        icon: 'ListChecks',
      },
      {
        label: 'School Management System',
        text: 'Student records, attendance, examinations, parent communication, finance, and reporting — paperless administration for modern schools.',
        icon: 'Monitor',
      },
      {
        label: 'Teacher digital tools',
        text: 'Lesson planning, question banks, suggested videos, and AI-assisted classroom support — practical digitisation of secondary teaching.',
        icon: 'NotebookPen',
      },
      {
        label: 'Academic competitions',
        text: 'Proctored national contests with cash prizes, recognition, and rankings — proving that excellence can be measured and rewarded at scale.',
        icon: 'Goal',
      },
      {
        label: 'Analytics for sponsors',
        text: 'Participation, engagement, and performance reporting so sponsorship impact is visible — consistent with data-driven governance.',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'adek-12',
    layout: 'bullets',
    chapter: '7. Accessible Summer Competition',
    title: 'Proof of Concept: Accessible Summer Competition',
    icon: 'Goal',
    bullets: [
      'In celebration of Accessible Publishers @30, we presented the Accessible Summer Competition on SmartEdu Hub — open free to JSS 1–JSS 3 students nationwide, with over ₦2.2 million in prizes. Registration, practice, and the Gold Stage final were hosted digitally with proctoring and evidence review so results were earned fairly.',
      'The competition is more than a contest: between registration and exam day, students received a full practice season to read widely, work through questions, and build genuine exam confidence — rewarding consistent reading, careful thinking, and honest effort.',
      'This is specialised, solutions-driven learning in action: technological literacy, academic competition, and measurable excellence — the habits your specialised learning tracks seek to cultivate from an early age.',
    ],
  },
  {
    id: 'adek-13',
    layout: 'framework',
    chapter: '7. Accessible Summer Competition',
    title: 'Prize-Giving Day — 18th September 2026',
    icon: 'GraduationCap',
    bullets: [
      'On 18th September 2026 we held the prize-giving ceremony and flew in our winners from across Nigeria — demonstrating that SmartEdu Hub can convene national academic excellence and celebrate it with dignity.',
    ],
    frameworkBlocks: [
      {
        label: '1st — ₦1,000,000',
        text: 'Happiness John, JSS 1, Joy Prime Model Secondary School, Akwa Ibom State.',
        icon: 'Target',
      },
      {
        label: '2nd — ₦500,000',
        text: 'Agaga-Oamen Dave-Wisdom, The Oasis Schools, Ekpoma, Edo State.',
        icon: 'Target',
      },
      {
        label: '3rd (tie) — ₦250,000',
        text: 'Daniel Barry Monsigia, Teko School, Rivers State.',
        icon: 'Target',
      },
      {
        label: '3rd (tie) — ₦250,000',
        text: 'Okunoye Mojolaoluwa Deborah, Oritamefa Baptist Model School, Ibadan, Oyo State — an Oyo champion on a national stage.',
        icon: 'Landmark',
      },
    ],
  },
  {
    id: 'adek-14',
    layout: 'bullets',
    chapter: '7. Accessible Summer Competition',
    title: 'Why the Competition Matters for Your Vision',
    icon: 'TrendingUp',
    bullets: [
      'It proves SmartEdu Hub can run large-scale, fair, digitally administered academic contests with national reach and local pride — including an Oyo winner from Ibadan.',
      'It shows how digital platforms reward intellectual capital: young people who read, practise, and compete are recognised with life-changing prizes and public celebration.',
      'It is a ready template for an Oyo-focused or Oyo-branded competition season under your sponsorship — expanding access, measuring outcomes, and making excellence visible statewide.',
      'Combined with AI Books, CBT, and school management, competitions become one pillar of a fuller education-technology programme rather than a one-off event.',
    ],
  },
  {
    id: 'adek-15',
    layout: 'framework',
    chapter: '8. Proposed Sponsorship Scope',
    title: 'Proposed Sponsorship Scope',
    icon: 'GitBranch',
    frameworkBlocks: [
      {
        label: '1. Platform sponsorship',
        text: 'Title or strategic sponsorship of SmartEdu Hub for Oyo-facing deployment — licences for selected public and partner schools, with co-branded recognition aligned to your education and digital economy agenda.',
        icon: 'Laptop',
      },
      {
        label: '2. Competition underwriting',
        text: 'Sponsor the next SmartEdu Hub academic competition cycle (state or national track), including prizes, logistics for finalists, and a high-visibility prize-giving that celebrates Oyo learners.',
        icon: 'Goal',
      },
      {
        label: '3. Teacher digital capacity',
        text: 'Fund teacher onboarding and e-lesson / digital classroom training so digitisation of secondary education is lived practice, not only policy language.',
        icon: 'Users',
      },
      {
        label: '4. Data and impact reporting',
        text: 'Quarterly dashboards on adoption, engagement, assessment practice, and competition outcomes — supporting data-driven decision-making.',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'adek-16',
    layout: 'twoColumn',
    chapter: '9. Mutual Benefits',
    title: 'Mutual Benefits',
    icon: 'Sparkles',
    leftTitle: 'Benefits to your agenda',
    leftBullets: [
      'A ready delivery engine for digital elevation in education.',
      'Visible association with an indigenous Ibadan success story.',
      'Competitions and school adoption that make manifesto promises tangible.',
      'Data to target support and demonstrate results.',
      'Partnership with a group you have already inspected and endorsed.',
    ],
    rightTitle: 'Benefits to SmartEdu Hub / Accessible',
    rightBullets: [
      'Sponsorship scale for school licences and competitions.',
      'Stronger Oyo footprint for an Oyo-headquartered company.',
      'Deeper teacher and learner adoption.',
      'A flagship public–private education partnership model.',
      'Momentum from visit goodwill to formal programme delivery.',
    ],
  },
  {
    id: 'adek-17',
    layout: 'framework',
    chapter: '10. Implementation',
    title: 'Implementation Pathway',
    icon: 'ClipboardList',
    frameworkBlocks: [
      {
        label: 'Phase 1 — Align',
        text: 'Formal presentation of sponsorship options; agree schools cohort, competition track, branding, and budget envelope.',
        icon: 'Presentation',
      },
      {
        label: 'Phase 2 — Activate',
        text: 'Onboard pilot schools; train teachers; activate AI Books, CBT, and SMS modules; announce competition calendar.',
        icon: 'Users',
      },
      {
        label: 'Phase 3 — Compete & learn',
        text: 'Run practice season and finals; publish engagement metrics; celebrate winners with dignity and statewide visibility.',
        icon: 'Goal',
      },
      {
        label: 'Phase 4 — Scale',
        text: 'Review outcomes; expand licences across additional LGAs; deepen teacher programmes; plan the next competition cycle.',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    id: 'adek-18',
    layout: 'bullets',
    chapter: '11. The Ask',
    title: 'Request to Hon. Bimbo Adekanmbi',
    icon: 'Mail',
    bullets: [
      'We respectfully invite you to sponsor SmartEdu Hub as a strategic partner for digital learning, school management, teacher capacity, and academic competitions in Oyo State.',
      'We welcome a working session to present package options — platform sponsorship, competition underwriting, teacher digital training, or a combined flagship programme — and to decide with the speed and clarity you have said solid proposals deserve.',
      'Having already walked our press floor, met our technologists, visited Smipay and Oxygen FM, and seen Best in Print Academy and Consult, you know the substance behind this ask. We are ready to move from impressed visitor to committed sponsor — and from manifesto language to measurable classroom outcomes.',
    ],
  },
  {
    id: 'adek-19',
    layout: 'bullets',
    chapter: '12. Conclusion',
    title: 'Conclusion',
    icon: 'Handshake',
    bullets: [
      'Oyo’s future, as you have articulated it, will be won by intellectual capital, digital elevation, and young people equipped to produce — not only to consume. SmartEdu Hub is already doing that work from Ibadan, on a platform built by Best Technology and powered by thirty years of Accessible Publishers’ educational mission.',
      'Your visit confirmed the fit. Your words — that we are already implementing your manifesto — gave us the mandate to propose sponsorship. The Accessible Summer Competition, crowned on 18th September 2026 with winners from across Nigeria including Oyo, proved the model works.',
      'We would be honoured to partner with you so that SmartEdu Hub becomes a visible, data-rich expression of your education and digital economy vision for the people of Oyo State.',
    ],
    footer:
      'Respectfully submitted by:\nAccessible Publishers Limited\nThe Knowledge Hub, 121/123, Obafemi Awolowo Way,\nOke-Ado, Ibadan\nSmartEduHub Accessible Digital Platform Team (SMEH)\nwww.smarteduhub.ng\nwww.accessiblepublishers.com',
    notes:
      'Close with conclusion and institutional submission block.',
  },
]

export const adekanmbiProposal: PresentationState = {
  slides: adekanmbiProposalSlides,
  currentIndex: 0,
  seedRevision: ADEKANMBI_SEED_REVISION,
  meta: ADEKANMBI_PROPOSAL_META,
}
