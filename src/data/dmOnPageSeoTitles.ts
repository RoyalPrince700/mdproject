import type { PresentationState, Slide } from '../types/slide'

export const DM_ONPAGE_SEO_TITLES_ID = 'dm-onpage-seo-titles'
export const DM_ONPAGE_SEO_TITLES_TITLE =
  'On-Page SEO Assignment — SmartEdu Hub Title Tags'
export const DM_ONPAGE_SEO_TITLES_REVISION = 15

export const DM_ONPAGE_SEO_TITLES_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: '',
  degree: 'Digital Marketing Training — On-Page SEO',
  date: 'October 2026',
  kind: 'document',
  editorView: 'document',
  numberedSections: false,
  documentFont: 'Calibri',
  subject:
    'On-Page SEO Assignment — Titles, Meta Descriptions, H1s and SEOptimer Audit',
}

const pages: { url: string; current: string; recommended: string }[] = [
  {
    url: 'https://www.smarteduhub.ng/',
    current: 'SmartEdu Hub - Your School Management Solution',
    recommended: 'Smart Edu Hub - Best school management system in Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/about',
    current: 'SmartEdu Hub - About Smart Edu Hub',
    recommended: 'Smart Edu Hub - School and learning platform in Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/teachers',
    current: 'SmartEdu Hub - For Teachers',
    recommended: 'Smart Edu Hub - Grading and result management for teachers',
  },
  {
    url: 'https://www.smarteduhub.ng/parents',
    current: 'SmartEdu Hub - For Parents',
    recommended: 'Smart Edu Hub - Parent portal for results and school fees',
  },
  {
    url: 'https://www.smarteduhub.ng/students',
    current: 'SmartEdu Hub - For Students',
    recommended: 'Smart Edu Hub - Assignments, AI tutor and exam practice',
  },
  {
    url: 'https://www.smarteduhub.ng/careers',
    current: 'SmartEdu Hub - Careers at Smart Edu Hub',
    recommended: 'Smart Edu Hub - Education technology careers in Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions',
    current: 'SmartEdu Hub - Academic Competitions',
    recommended: 'Smart Edu Hub - Free student academic competitions Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/accessible-summer-competition',
    current: 'Accessible Summer Competition · SmartEdu Hub Competitions',
    recommended: 'Smart Edu Hub - JSS Accessible Summer Competition Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/register',
    current: 'SmartEdu Hub - Academic Competitions',
    recommended: 'Smart Edu Hub - Register for a free student competition',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/login',
    current: 'SmartEdu Hub - Academic Competitions',
    recommended: 'Smart Edu Hub - Log in to your competition account',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/school/login',
    current: 'SmartEdu Hub - School portal — SmartEdu Hub Competitions',
    recommended: 'Smart Edu Hub - School portal login for competitions',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/verify',
    current: 'Verify a certificate · SmartEdu Hub Competitions',
    recommended: 'Smart Edu Hub - Verify a competition certificate online',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/stories',
    current: 'News & stories · SmartEdu Hub Competitions',
    recommended: 'Smart Edu Hub - Academic competition results and stories',
  },
  {
    url: 'https://www.smarteduhub.ng/resources',
    current: 'SmartEdu Hub - Resources',
    recommended: 'Smart Edu Hub - School management guides and tutorials',
  },
  {
    url: 'https://www.smarteduhub.ng/resources/faq',
    current: 'SmartEdu Hub - FAQ - Smart Edu Hub',
    recommended: 'Smart Edu Hub - FAQ on school management and exam prep',
  },
  {
    url: 'https://www.smarteduhub.ng/resources/blogs',
    current: 'SmartEdu Hub - Blog - Smart Edu Hub',
    recommended: 'Smart Edu Hub - Blog on school management and learning',
  },
  {
    url: 'https://www.smarteduhub.ng/resources/news',
    current: 'SmartEdu Hub - News & Updates - Smart Edu Hub',
    recommended: 'Smart Edu Hub - School software news and updates',
  },
  {
    url: 'https://www.smarteduhub.ng/events',
    current: 'SmartEdu Hub - SmartEdu Hub - Events',
    recommended: 'Smart Edu Hub - Education events for Nigerian schools',
  },
  {
    url: 'https://www.smarteduhub.ng/support',
    current: 'SmartEdu Hub - Support',
    recommended: 'Smart Edu Hub - Help with our school management system',
  },
  {
    url: 'https://www.smarteduhub.ng/privacy-policy',
    current: 'SmartEdu Hub - Privacy Policy',
    recommended: 'Smart Edu Hub - Privacy policy for schools and learners',
  },
  {
    url: 'https://www.smarteduhub.ng/cookies-policy',
    current: 'SmartEdu Hub - Cookies Policy',
    recommended: 'Smart Edu Hub - Cookies policy for website visitors',
  },
  {
    url: 'https://www.smarteduhub.ng/terms-conditions',
    current: 'SmartEdu Hub - Terms & Conditions',
    recommended: 'Smart Edu Hub - Terms and conditions of use',
  },
  {
    url: 'https://www.smarteduhub.ng/delete-account',
    current: 'SmartEdu Hub - Delete your account',
    recommended: 'Smart Edu Hub - Delete your account',
  },
]

const metaSchool: { url: string; current: string; recommended: string }[] = [
  {
    url: 'https://www.smarteduhub.ng/',
    current:
      "Transform your institution with SmartEdu Hub's all-in-one school management platform — and learn on your own for free. Individual learners can register in the mobile app for WAEC, JAMB, NECO, BECE and NCEE past questions, AI books and video lessons.",
    recommended:
      'Best school management system in Nigeria for results, fees and learning, with free WAEC, JAMB, NECO, BECE and NCEE practice, AI books and video lessons.',
  },
  {
    url: 'https://www.smarteduhub.ng/about',
    current:
      'Smart Edu Hub (SMeH) is an all-in-one education platform that helps schools manage better and helps students learn smarter — powered by Accessible Publishers Limited. Discover our story, mission, vision and the full SMeH ecosystem.',
    recommended:
      'Smart Edu Hub is a school and learning platform in Nigeria for school management, exam practice, AI books and competitions, from Accessible Publishers Limited.',
  },
  {
    url: 'https://www.smarteduhub.ng/teachers',
    current:
      'Simplify classroom management, create engaging lessons, track student progress, and collaborate effectively. SmartEdu Hub provides teachers with powerful tools to enhance teaching and learning.',
    recommended:
      'Grading and result management for teachers. Mark faster, track each class and spend less time on the paperwork around results.',
  },
  {
    url: 'https://www.smarteduhub.ng/parents',
    current:
      "Stay connected with your child's education journey. Track progress, communicate with teachers, view attendance, and support your child's learning with SmartEdu Hub's parent portal.",
    recommended:
      'Parent portal for results and school fees. See grades, attendance and what your child owes in one Smart Edu Hub login.',
  },
  {
    url: 'https://www.smarteduhub.ng/students',
    current:
      'Access your courses, submit assignments, track grades, and engage with interactive learning tools. SmartEdu Hub empowers students to take control of their education journey.',
    recommended:
      'Assignments, AI tutor and exam practice in one student portal. Submit work, get help on a topic and revise for WAEC, JAMB and NECO.',
  },
  {
    url: 'https://www.smarteduhub.ng/careers',
    current:
      'Smart Edu Hub is not currently hiring. There are no open roles at this time, but you can introduce yourself so we can reach out first when a position opens.',
    recommended:
      'Education technology careers in Nigeria at Smart Edu Hub. No open roles today. Introduce yourself and we will contact you when a position opens.',
  },
]

const metaCompetitions: { url: string; current: string; recommended: string }[] = [
  {
    url: 'https://www.smarteduhub.ng/competitions',
    current:
      "Nigeria's home for national academic competitions. Register free in under a minute, practise with instant feedback, sit a secure online exam and win real prizes.",
    recommended:
      'Free student academic competitions in Nigeria. Register in under a minute, practise with instant feedback, sit a secure exam and win real prizes.',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/accessible-summer-competition',
    current: 'Where progressive minds read, think, and compete.',
    recommended:
      'JSS Accessible Summer Competition Nigeria for JSS 1 to JSS 3. Free to enter, with a practice season and prizes from Accessible Publishers Limited.',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/register',
    current:
      'National academic competitions for Nigerian students. Register in under a minute, practise for weeks and compete to win — all from your phone.',
    recommended:
      'Register for a free student competition. Create your Smart Edu Hub account in under a minute, then practise and sit the exam from your phone.',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/login',
    current:
      'National academic competitions for Nigerian students. Register in under a minute, practise for weeks and compete to win — all from your phone.',
    recommended:
      'Log in to your competition account to practise, sit your exam and view your Smart Edu Hub competition result.',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/school/login',
    current:
      'Enrol your students into national academic competitions, hand out their Competition IDs, and track your cohort — all from one place.',
    recommended:
      'School portal login for competitions. Enrol students, share Competition IDs and track how your cohort is performing.',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/verify',
    current:
      'Confirm the authenticity of any SmartEdu Hub competition certificate in seconds using its unique code or serial number.',
    recommended:
      'Verify a competition certificate online. Enter the code or serial number to confirm a Smart Edu Hub certificate is genuine.',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/stories',
    current:
      'Competition news, announcements, blog posts, winner stories and student, school and teacher spotlights from SmartEdu Hub.',
    recommended:
      'Academic competition results and stories from Smart Edu Hub, including winner news and spotlights for students, schools and teachers.',
  },
]

const metaRest: { url: string; current: string; recommended: string }[] = [
  {
    url: 'https://www.smarteduhub.ng/resources/faq',
    current:
      'Answers about Smart Edu Hub: how schools run their institution on the platform, how individual learners register free in the mobile app, exam preparation for WAEC, JAMB, NECO, BECE and NCEE, AI features, security and billing.',
    recommended:
      'FAQ on school management and exam prep: how a school starts on Smart Edu Hub, and how learners practise for WAEC, JAMB, NECO, BECE and NCEE.',
  },
  {
    url: 'https://www.smarteduhub.ng/resources/news',
    current:
      'Product updates and announcements from Smart Edu Hub, the all-in-one education platform powered by Accessible Publishers Limited.',
    recommended:
      'School software news and updates from Smart Edu Hub, including product releases and announcements from Accessible Publishers Limited.',
  },
  {
    url: 'https://www.smarteduhub.ng/events',
    current:
      "Join SmartEdu Hub's upcoming events, webinars, and workshops. Connect with educators, explore new features, and learn best practices for digital education.",
    recommended:
      'Education events for Nigerian schools, including Smart Edu Hub webinars and workshops for educators and school leaders.',
  },
  {
    url: 'https://www.smarteduhub.ng/support',
    current:
      'Get help and support for SmartEdu Hub. Access FAQs, contact our support team, live chat, and find resources to help you get the most out of your school management platform.',
    recommended:
      'Help with our school management system by live chat, email or the knowledge base. The Smart Edu Hub team replies within 24 hours.',
  },
  {
    url: 'https://www.smarteduhub.ng/privacy-policy',
    current:
      'Learn how SmartEdu Hub collects, uses, and protects your personal information. Our commitment to data privacy and security for educational institutions.',
    recommended:
      'Privacy policy for schools and learners. Read how Smart Edu Hub collects, uses and protects personal information.',
  },
  {
    url: 'https://www.smarteduhub.ng/cookies-policy',
    current:
      'Understand how SmartEdu Hub uses cookies and similar technologies to enhance your experience and improve our services.',
    recommended:
      'Cookies policy for website visitors. See how Smart Edu Hub uses cookies and similar technologies on this site.',
  },
  {
    url: 'https://www.smarteduhub.ng/delete-account',
    current:
      'Request deletion of your Smart Edu Hub account and the personal data linked to it. No app or sign-in needed.',
    recommended:
      'Delete your account and the personal data linked to it. No app or sign-in is needed on Smart Edu Hub.',
  },
]

function metaTable(
  id: string,
  title: string,
  rows: { url: string; current: string; recommended: string }[],
): Slide {
  return {
    id,
    layout: 'twoColumn',
    title,
    leftTitle: 'Page',
    middleTitle: 'Current meta description',
    rightTitle: 'Recommended meta description',
    leftBullets: rows.map((row) => row.url),
    middleBullets: rows.map((row) => row.current),
    rightBullets: rows.map(
      (row) => `${row.recommended} (${row.recommended.length} characters)`,
    ),
  }
}

function h1Table(
  id: string,
  title: string,
  rows: { url: string; current: string; recommended: string }[],
): Slide {
  return {
    id,
    layout: 'twoColumn',
    title,
    leftTitle: 'Page',
    middleTitle: 'Current H1',
    rightTitle: 'Recommended H1',
    leftBullets: rows.map((row) => row.url),
    middleBullets: rows.map((row) => row.current),
    rightBullets: rows.map((row) => row.recommended),
  }
}

const h1School: { url: string; current: string; recommended: string }[] = [
  {
    url: 'https://www.smarteduhub.ng/',
    current: 'Run your whole school from one intelligent platform.',
    recommended: 'The best school management system in Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/about',
    current: 'Transforming education through smarter solutions.',
    recommended: 'One school and learning platform in Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/teachers',
    current: 'Teaching Made Simple, Impact Amplified',
    recommended: 'Grading and result management for teachers',
  },
  {
    url: 'https://www.smarteduhub.ng/parents',
    current: "Stay Connected to Your Child's Learning Journey",
    recommended: 'A parent portal for results and school fees',
  },
  {
    url: 'https://www.smarteduhub.ng/students',
    current: 'Learn Smarter, Not Harder',
    recommended: 'Assignments, an AI tutor and exam practice',
  },
  {
    url: 'https://www.smarteduhub.ng/careers',
    current: "We're not hiring at the moment — but we'd still like to meet you.",
    recommended: 'Education technology careers in Nigeria',
  },
]

const h1Competitions: { url: string; current: string; recommended: string }[] = [
  {
    url: 'https://www.smarteduhub.ng/competitions',
    current: 'Compete with the brightest students in Nigeria.',
    recommended: 'Free student academic competitions in Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/accessible-summer-competition',
    current: 'Accessible Summer Competition',
    recommended: 'The JSS Accessible Summer Competition, Nigeria',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/school/login',
    current: 'Bring your whole school to the competition.',
    recommended: 'Your school portal login for competitions',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/verify',
    current: 'Verify a certificate',
    recommended: 'Verify a competition certificate online',
  },
  {
    url: 'https://www.smarteduhub.ng/competitions/stories',
    current: 'From the competitions hub',
    recommended: 'Academic competition results and stories',
  },
]

const h1Rest: { url: string; current: string; recommended: string }[] = [
  {
    url: 'https://www.smarteduhub.ng/resources',
    current: 'Resources',
    recommended: 'School management guides and tutorials',
  },
  {
    url: 'https://www.smarteduhub.ng/resources/faq',
    current: 'Questions, answered properly.',
    recommended: 'FAQ on school management and exam prep',
  },
  {
    url: 'https://www.smarteduhub.ng/resources/blogs',
    current: 'Notes on teaching, learning and the technology between them.',
    recommended: 'A blog on school management and learning',
  },
  {
    url: 'https://www.smarteduhub.ng/resources/news',
    current: "What's new at Smart Edu Hub.",
    recommended: 'School software news and updates',
  },
  {
    url: 'https://www.smarteduhub.ng/events',
    current: 'EVENT',
    recommended: 'Education events for Nigerian schools',
  },
  {
    url: 'https://www.smarteduhub.ng/support',
    current: 'Our team is on standby to answer your questions?',
    recommended: 'Help with our school management system',
  },
  {
    url: 'https://www.smarteduhub.ng/privacy-policy',
    current: 'Privacy Policy',
    recommended: 'Privacy policy for schools and learners',
  },
  {
    url: 'https://www.smarteduhub.ng/cookies-policy',
    current: 'Cookies Policy',
    recommended: 'Cookies policy for website visitors',
  },
  {
    url: 'https://www.smarteduhub.ng/terms-conditions',
    current: 'Terms and Conditions',
    recommended: 'Our terms and conditions of use',
  },
  {
    url: 'https://www.smarteduhub.ng/delete-account',
    current:
      'Delete your Smart Edu Hub account New design — this page is fully on the design system',
    recommended: 'Delete your Smart Edu Hub account',
  },
]

function titleTable(
  id: string,
  title: string,
  rows: typeof pages,
): Slide {
  return {
    id,
    layout: 'twoColumn',
    title,
    leftTitle: 'Page',
    middleTitle: 'Current title',
    rightTitle: 'Recommended title',
    leftBullets: rows.map((page) => page.url),
    middleBullets: rows.map((page) => page.current),
    rightBullets: rows.map(
      (page) => `${page.recommended} (${page.recommended.length} characters)`,
    ),
  }
}

export const dmOnPageSeoTitlesSlides: Slide[] = [
  {
    id: 'seo-title-cover',
    layout: 'title',
    title: 'On-Page SEO Assignment\nTitles, Meta Descriptions, H1s and SEOptimer Audit',
    subtitle: 'www.smarteduhub.ng',
  },
  titleTable('seo-title-11', 'School pages — titles to use', pages.slice(0, 6)),
  titleTable('seo-title-13', 'Competition pages — titles to use', pages.slice(6, 13)),
  titleTable('seo-title-15', 'Resources and help — titles to use', pages.slice(13, 19)),
  titleTable('seo-title-17', 'Policies and account — titles to use', pages.slice(19)),
  metaTable('seo-meta-school', 'Meta descriptions to update — school pages', metaSchool),
  metaTable('seo-meta-comp', 'Meta descriptions to update — competitions', metaCompetitions),
  metaTable('seo-meta-rest', 'Meta descriptions to update — resources, help and policies', metaRest),
  h1Table('seo-h1-school', 'H1 text to update — school pages', h1School),
  h1Table('seo-h1-comp', 'H1 text to update — competitions', h1Competitions),
  h1Table('seo-h1-rest', 'H1 text to update — resources, help and policies', h1Rest),
  {
    id: 'seo-audit-overview',
    layout: 'twoColumn',
    title: 'SEOptimer homepage overview',
    subtitle:
      'Homepage audit of www.smarteduhub.ng. Report generated 31 October 2026, 10:47 UTC.',
    imageSrc: '/audits/seoptimer-homepage-overview.png',
    imageAlt:
      'SEOptimer overview for www.smarteduhub.ng showing an overall grade of B minus, 18 recommendations, and grades for on-page SEO, GEO, links, usability and performance.',
    leftTitle: 'Area',
    rightTitle: 'Grade',
    leftBullets: [
      'Overall',
      'On-page SEO',
      'Generative engine optimisation',
      'Links',
      'Usability',
      'Performance',
    ],
    rightBullets: ['B−', 'A−', 'A+', 'F', 'F', 'B+'],
    bullets: [
      'SEOptimer scored the homepage B− and listed 18 recommendations. This grade is for the homepage only. The tool listed other pages for review, but this export does not give those pages their own scores.',
      'On-page SEO and generative engine optimisation scored well. Links and usability failed. Performance was B+.',
      'Keyword rankings, the full AI-content analysis, and the Google Business Profile check were locked on the free report, so they are not included here.',
    ],
  },
  {
    id: 'seo-audit-recs',
    layout: 'twoColumn',
    title: 'SEOptimer recommendations',
    subtitle: 'Eighteen items, in the priority order the tool assigned.',
    leftTitle: 'Priority',
    middleTitle: 'Area',
    rightTitle: 'Recommendation',
    leftBullets: [
      'High',
      'Medium',
      'Medium',
      'Medium',
      'Medium',
      'Medium',
      'Low',
      'Low',
      'Low',
      'Low',
      'Low',
      'Low',
      'Low',
      'Low',
      'Low',
      'Low',
      'Low',
      'Low',
    ],
    middleBullets: [
      'Links',
      'Usability',
      'On-page SEO',
      'On-page SEO',
      'On-page SEO',
      'Performance',
      'On-page SEO',
      'Links',
      'Usability',
      'Usability',
      'Usability',
      'Other',
      'Other',
      'On-page SEO',
      'Other',
      'Other',
      'GEO',
      'Performance',
    ],
    rightBullets: [
      'Execute a link building strategy',
      'Optimise for Core Web Vitals',
      'Increase the length of the title tag',
      'Reduce the length of the meta description',
      'Add a canonical tag',
      'Improve site load speed',
      'Add alt attributes to all images',
      'Improve link anchor text',
      'Optimise for mobile PageSpeed Insights',
      'Defer render-blocking resources',
      'Optimise for desktop PageSpeed Insights',
      'Add an SPF mail record',
      'Add Local Business schema',
      'Implement an analytics tracking tool',
      'Create and link an Instagram profile',
      'Create and link a YouTube channel',
      'Implement an llms.txt file',
      'Remove inline styles',
    ],
  },
  {
    id: 'seo-audit-onpage',
    layout: 'twoColumn',
    title: 'On-page SEO result',
    subtitle: 'Grade A−. The tool says the homepage is mostly optimised.',
    leftTitle: 'Check',
    rightTitle: 'Result',
    leftBullets: [
      'Title tag',
      'Meta description',
      'H1',
      'H2 to H6',
      'Language',
      'Amount of content',
      'Image alt text',
      'Canonical tag',
      'HTTPS',
      'Robots and indexing',
      'XML sitemap',
      'Schema',
      'Analytics',
    ],
    rightBullets: [
      'Present. “SmartEdu Hub - Your School Management Solution” is 46 characters. The tool wants 50 to 60.',
      'Present, at 249 characters. The tool wants 120 to 160.',
      'Present.',
      'H2 appears 8 times, H3 appears 20 times, and H4 appears 4 times. H5 and H6 are unused. No skipped levels or empty headings.',
      'English is declared. The page does not use hreflang.',
      '1,134 words. The tool calls this a good amount of text.',
      '9 images on the page. 1 is missing alt text.',
      'Not declared.',
      'SSL is on, and the page redirects to HTTPS.',
      'robots.txt is present. The homepage is crawlable. It does not use a noindex tag or a noindex header.',
      'An XML sitemap is present. The tool shows https://smarteduhub.ng//sitemap.xml.',
      'JSON-LD is present, including EducationalOrganization. No Local Business schema.',
      'No website analytics tool was detected. A Facebook Pixel is installed.',
    ],
    bullets: [
      'The terms the tool counted most often were school (17), questions (8), students (6) and book (6). It says those terms are spread across the title, description and headings. The homepage keyword in this assignment, “best school management system in Nigeria”, is not the phrase the tool counted.',
      'For generative engine optimisation the grade is A+. Rendered content is 15%, which the tool treats as easier for a language model to read. robots.txt allows the major AI crawlers. No llms.txt file was found.',
    ],
  },
  {
    id: 'seo-audit-links',
    layout: 'twoColumn',
    title: 'Links result',
    subtitle: 'Grade F. The tool calls the backlink activity reasonably weak.',
    leftTitle: 'Measure',
    rightTitle: 'Result',
    leftBullets: [
      'Total backlinks',
      'Referring domains',
      'Dofollow backlinks',
      'Nofollow backlinks',
      'Edu and gov backlinks',
      'IPs and subnets',
      'Homepage, HTTPS',
      'Homepage, HTTP',
      'Accessible Summer Competition',
      'Anchor text found',
      'Referring domains',
      'On-page links',
    ],
    rightBullets: [
      '5',
      '2',
      '5',
      '0',
      '0',
      '1 IP and 1 subnet',
      '2 backlinks',
      '2 backlinks',
      '1 backlink',
      'Get Smart (1) and Download (1)',
      '2 domains, both .com. Countries reported: United States 1, Other 1.',
      '44 links: 35 internal, 9 external follow, 0 nofollow. About 20% point off the site.',
    ],
    bullets: [
      'Two internal links have missing or unclear anchor text. The URLs themselves are readable. Link building is the only high-priority recommendation.',
    ],
  },
  {
    id: 'seo-audit-usability',
    layout: 'twoColumn',
    title: 'Usability and Core Web Vitals',
    subtitle: 'Grade F. The homepage failed the Core Web Vitals assessment.',
    leftTitle: 'Measure',
    rightTitle: 'Result',
    leftBullets: [
      'Device mix',
      'Viewport',
      'Largest Contentful Paint',
      'Interaction to Next Paint',
      'Cumulative Layout Shift',
      'Mobile lab LCP',
      'Mobile lab speed index',
      'Desktop lab LCP',
      'Desktop lab speed index',
    ],
    rightBullets: [
      'Chrome’s sample, which excludes iPhones and iPads: 100% mobile, 0% desktop, 0% tablet.',
      'Set to the device width, so the page can resize.',
      '9.0 seconds. Good is 2.5 seconds or less.',
      '829 milliseconds. Good is 200 milliseconds or less.',
      '0.04. Good is 0.1 or less, so this one passes.',
      '10.1 seconds. First Contentful Paint is 1.7 seconds.',
      '6 seconds. Time to interactive is 10.2 seconds.',
      '2.2 seconds. First Contentful Paint is 0.4 seconds.',
      '1.9 seconds. Time to interactive is 2.3 seconds.',
    ],
    bullets: [
      'The mobile test was run from US servers. The largest listed savings are cache lifetimes (1.8 seconds), render-blocking requests (0.7 seconds), multiple redirects (0.6 seconds) and unused JavaScript (0.45 seconds).',
      'On desktop the listed savings are smaller: multiple redirects (0.16 seconds) and cache lifetimes (0.15 seconds). Images have explicit dimensions. Render-blocking resources are still present. There is no Flash and there are no iframes. A favicon is specified.',
    ],
  },
  {
    id: 'seo-audit-performance',
    layout: 'twoColumn',
    title: 'Performance result',
    subtitle: 'Grade B+. The page loads slowly, but the file size is reasonably low.',
    leftTitle: 'Measure',
    rightTitle: 'Result',
    leftBullets: [
      'Server response',
      'All page content loaded',
      'All scripts complete',
      'Download size',
      'HTML',
      'CSS',
      'JavaScript',
      'Images',
      'Other',
      'Compression',
      'Files requested',
    ],
    rightBullets: [
      '0.902 seconds',
      '2.2 seconds',
      '3.1 seconds',
      '1.45 MB',
      '0.04 MB',
      '0.07 MB',
      '0.65 MB',
      '0.51 MB',
      '0.18 MB',
      '66% compressed, from 4.23 MB',
      '64 objects: 1 HTML, 43 JavaScript, 2 CSS, 2 images, 16 other',
    ],
    bullets: [
      'Images look optimised, JavaScript and CSS are minified, and the site uses HTTP/2 or newer. No JavaScript errors and no deprecated HTML were found. This part of the report also says static files use efficient cache lifetimes.',
      'PageSpeed still lists cache lifetimes as a saving, so the two checks do not describe caching in the same way. Inline styles are still in the page, and the tool flags those as a low-priority performance item.',
    ],
  },
  {
    id: 'seo-audit-social',
    layout: 'bullets',
    title: 'Social, email and technology',
    bullets: [
      'Facebook, X and LinkedIn are linked: facebook.com/smarteduhub, twitter.com/smarteduhub and linkedin.com/company/smarteduhub. Open Graph tags and X cards are present. Instagram and YouTube are not linked.',
      'A Facebook Pixel is installed. The pixel ID reported is 1009485858545091.',
      'No SPF record was found. A DMARC record is present: v=DMARC1; p=none.',
      'The tool identified Facebook Pixel, HSTS, HTTP/3, Next.js, NextAuth.js, Node.js, React and Webpack. The server IP is 46.62.229.243. The DNS servers reported are solar.dns-parking.com and lunar.dns-parking.com. The page charset is UTF-8.',
      'Pages listed for a later review, without their own scores in this export: about, careers, competitions, the Accessible Summer Competition, cookies policy, events, new-school-onboarding, parents, privacy policy, resources, blogs and FAQ. new-school-onboarding was not in the 23-page Screaming Frog HTML list.',
    ],
  },
  {
    id: 'seo-pagespeed-mobile',
    layout: 'twoColumn',
    title: 'PageSpeed Insights — mobile',
    subtitle:
      'https://www.smarteduhub.ng/ on 31 October 2026. The top row is real Chrome mobile users over the last 28 days.',
    imageSrc: '/audits/pagespeed-mobile.png',
    imageAlt:
      'PageSpeed Insights mobile result for www.smarteduhub.ng showing LCP 9 seconds, INP 828 milliseconds, CLS 0.04, FCP 5.4 seconds and TTFB 2.9 seconds.',
    leftTitle: 'Metric',
    rightTitle: 'Field result',
    leftBullets: [
      'Largest Contentful Paint',
      'Interaction to Next Paint',
      'Cumulative Layout Shift',
      'First Contentful Paint',
      'Time to First Byte',
    ],
    rightBullets: [
      '9 seconds. Poor. Good is 2.5 seconds or less.',
      '828 milliseconds. Poor. Good is 200 milliseconds or less.',
      '0.04. Good. The pass mark is 0.1 or less.',
      '5.4 seconds. Poor.',
      '2.9 seconds. Poor.',
    ],
    bullets: [
      'This is the same Core Web Vitals failure SEOptimer reported. Loading and response fail. Layout shift passes.',
      'The lab scores under the field data are Performance 58, Accessibility 92, Best Practices 100, SEO 92, and Agentic Browsing 1 out of 2. The performance score is a lab estimate, not the real-user result.',
    ],
  },
  {
    id: 'seo-pagespeed-desktop',
    layout: 'twoColumn',
    title: 'PageSpeed Insights — desktop',
    subtitle:
      'Same homepage. Report from 31 October 2026, 11:52 AM. Real-user desktop data was not available.',
    imageSrc: '/audits/pagespeed-desktop.png',
    imageAlt:
      'PageSpeed Insights desktop result for www.smarteduhub.ng showing a lab performance score of 89, with no real-user desktop data.',
    leftTitle: 'Lab score',
    rightTitle: 'Result',
    leftBullets: [
      'Performance',
      'Accessibility',
      'Best Practices',
      'SEO',
      'Agentic Browsing',
    ],
    rightBullets: ['89', '92', '100', '92', '1 out of 2'],
    bullets: [
      'PageSpeed shows “No Data” for real desktop users, so there is no desktop field result for LCP, INP or CLS. The 89 is a lab estimate. It is stronger than the mobile lab score of 58, and it still sits below 90.',
    ],
  },
  {
    id: 'seo-audit-fit',
    layout: 'bullets',
    title: 'How this audit fits the updates already in this report',
    bullets: [
      'The recommended homepage title is 56 characters, inside the 50 to 60 range SEOptimer asked for. The live title is 46.',
      'The recommended homepage meta description is 152 characters, inside the 120 to 160 range. The live description is 249.',
      'The homepage has no canonical tag. The canonical address already set for it in the Excel sheet is https://smarteduhub.ng/.',
      'robots.txt and sitemap.xml are available, which this audit also found. The homepage robots meta is index, follow, matching the noindex test on this page.',
      'The failed grades are links and usability. PageSpeed Insights confirms the speed problem on mobile: real users wait 9 seconds for the largest content and 828 milliseconds for the page to respond. Layout shift passes. Those speed results sit outside the title, meta description and H1 updates.',
    ],
  },
]

export const dmOnPageSeoTitles: PresentationState = {
  slides: dmOnPageSeoTitlesSlides,
  currentIndex: 0,
  seedRevision: DM_ONPAGE_SEO_TITLES_REVISION,
  meta: DM_ONPAGE_SEO_TITLES_META,
}

/** Meta descriptions that already contain the keyword, so they stay as they are. */
const keptMetaByUrl: Record<string, string> = {
  'https://www.smarteduhub.ng/resources':
    'Access educational guides, tutorials, documentation, and best practices for SmartEdu Hub. Everything you need to maximize your school management platform.',
  'https://www.smarteduhub.ng/resources/blogs':
    'Insights on school management, exam preparation and learning technology from the Smart Edu Hub team.',
  'https://www.smarteduhub.ng/terms-conditions':
    'Read the terms and conditions for using SmartEdu Hub. Understand your rights, responsibilities, and our service agreement.',
}

/**
 * Screaming Frog HTML export, 31 October 2026.
 * Crawled means Screaming Frog fetched the URL. Indexable means the page is
 * technically allowed in an index. It is not confirmation from Google.
 */
const crawlAuditByUrl: Record<string, { indexLabel: 'Non-indexable'; indexStatus: string }> = {
  'https://www.smarteduhub.ng/competitions/school/login': {
    indexLabel: 'Non-indexable',
    indexStatus: 'noindex',
  },
  'https://www.smarteduhub.ng/competitions/login': {
    indexLabel: 'Non-indexable',
    indexStatus: 'Redirected',
  },
  'https://www.smarteduhub.ng/competitions/register': {
    indexLabel: 'Non-indexable',
    indexStatus: 'Redirected',
  },
}

/** Live HTML check, 31 October 2026. The school login is the only exception. */
const robotsMetaByUrl: Record<string, string> = {
  'https://www.smarteduhub.ng/competitions/school/login': 'noindex, nofollow',
}

export type OnPageSeoRow = {
  url: string
  currentTitle: string
  recommendedTitle: string
  recommendedTitleCharacters: number
  currentMeta: string
  recommendedMeta: string
  recommendedMetaCharacters: number
  metaChange: 'Update' | 'Keep'
  currentH1: string
  recommendedH1: string
  h1Change: 'Update' | 'No H1'
  crawled: 'Crawled'
  indexLabel: 'Indexable' | 'Non-indexable'
  indexStatus: string
  robotsMeta: string
  currentCanonical: 'Not declared'
  canonicalAddress: string
}

/** Sitemap host. www and non-www both respond, so each page needs one preferred address. */
const CANONICAL_ORIGIN = 'https://smarteduhub.ng'

function canonicalAddress(url: string): string {
  const path = new URL(url).pathname
  if (path === '/') return `${CANONICAL_ORIGIN}/`
  return `${CANONICAL_ORIGIN}${path.replace(/\/+$/, '')}`
}

export function buildOnPageSeoRows(): OnPageSeoRow[] {
  const metaByUrl = new Map(
    [...metaSchool, ...metaCompetitions, ...metaRest].map((row) => [row.url, row]),
  )
  const h1ByUrl = new Map(
    [...h1School, ...h1Competitions, ...h1Rest].map((row) => [row.url, row]),
  )
  return pages.map((page) => {
    const meta = metaByUrl.get(page.url)
    const h1 = h1ByUrl.get(page.url)
    const currentMeta = meta?.current ?? keptMetaByUrl[page.url] ?? ''
    const recommendedMeta = meta?.recommended ?? currentMeta
    const audit = crawlAuditByUrl[page.url]
    return {
      url: page.url,
      currentTitle: page.current,
      recommendedTitle: page.recommended,
      recommendedTitleCharacters: page.recommended.length,
      currentMeta,
      recommendedMeta,
      recommendedMetaCharacters: recommendedMeta.length,
      metaChange: meta ? 'Update' : 'Keep',
      currentH1: h1?.current ?? '',
      recommendedH1: h1?.recommended ?? '',
      h1Change: h1 ? 'Update' : 'No H1',
      crawled: 'Crawled',
      indexLabel: audit?.indexLabel ?? 'Indexable',
      indexStatus: audit?.indexStatus ?? 'Indexable',
      robotsMeta: robotsMetaByUrl[page.url] ?? 'index, follow',
      currentCanonical: 'Not declared',
      canonicalAddress: canonicalAddress(page.url),
    }
  })
}
