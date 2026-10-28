import type { PresentationState, Slide } from '../types/slide'

export const DM_ONPAGE_SEO_TITLES_ID = 'dm-onpage-seo-titles'
export const DM_ONPAGE_SEO_TITLES_TITLE =
  'On-Page SEO Assignment — SmartEdu Hub Title Tags'
export const DM_ONPAGE_SEO_TITLES_REVISION = 13

export const DM_ONPAGE_SEO_TITLES_META: PresentationState['meta'] = {
  brand: 'Accessible Publishers Limited',
  author: '',
  degree: 'Digital Marketing Training — On-Page SEO',
  date: 'October 2026',
  kind: 'document',
  editorView: 'document',
  numberedSections: false,
  documentFont: 'Calibri',
  subject: 'On-Page SEO Assignment — Titles, Meta Descriptions and H1s',
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
    title: 'On-Page SEO Assignment\nTitles, Meta Descriptions and H1s',
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
    }
  })
}
