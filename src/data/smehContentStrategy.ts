import type { PresentationState, Slide } from '../types/slide'

export const SMEH_CONTENT_STRATEGY_ID = 'smeh-content-strategy'
export const SMEH_CONTENT_STRATEGY_TITLE = 'Content strategy'
export const SMEH_CONTENT_STRATEGY_REVISION = 3

export const SMEH_CONTENT_STRATEGY_META: PresentationState['meta'] = {
  brand: 'SmartEdu Hub',
  author: '',
  degree: 'Digital Marketing Training — Content Strategy',
  date: 'October 2026',
  kind: 'document',
  editorView: 'document',
  numberedSections: false,
  documentFont: 'Calibri',
  subject: 'Content strategy',
}

export const smehContentStrategySlides: Slide[] = [
  {
    id: 'kw-01',
    layout: 'title',
    title: 'Content strategy',
    subtitle: 'SmartEdu Hub primary keywords and search intent',
  },
  {
    id: 'kw-02',
    layout: 'twoColumn',
    title: 'Primary keywords',
    leftTitle: 'Part of the brief',
    rightTitle: 'What I decided',
    leftBullets: [
      'Primary keywords for School operations',
      'Primary keywords for teachers and students',
      'Primary keywords for Exam preparation',
      'Primary keywords for parent, competitions and brands',
    ],
    rightBullets: [
      'school management system, school administration software, school attendance system, school result management, school fees management',
      'learning management system, AI books, digital school library, online assignments for schools',
      'CBT practice questions, JAMB preparation, WAEC preparation, NECO preparation, BECE preparation, NCEE preparation, past questions, exam bodies in Nigeria',
      'parent portal for schools, academic competition for students, SmartEdu Hub',
    ],
  },
  {
    id: 'kw-03',
    layout: 'twoColumn',
    title: 'Search intent',
    leftTitle: 'Part of the brief',
    rightTitle: 'Search intent',
    leftBullets: [
      'Primary keywords for School operations',
      'Primary keywords for teachers and students',
      'Primary keywords for Exam preparation',
      'Primary keywords for parent, competitions and brands',
    ],
    rightBullets: [
      'Commercial',
      'Commercial: learning management system. Informational: AI books, digital school library, online assignments for schools',
      'Informational',
      'Commercial: parent portal for schools. Informational: academic competition for students. Navigational: SmartEdu Hub',
    ],
  },
  {
    id: 'kw-04',
    layout: 'twoColumn',
    title: 'Target audience',
    leftTitle: 'Part of the brief',
    rightTitle: 'Buyer persona',
    leftBullets: [
      'Primary keywords for School operations',
      'Primary keywords for teachers and students',
      'Primary keywords for Exam preparation',
      'Primary keywords for parent, competitions and brands',
    ],
    rightBullets: [
      'Alhaja Bello, proprietor, 45–60. She owns a private school. She buys the school management system. She needs enrolment, attendance, results, and fees in one place.',
      'Chioma, teacher, 28–40. She teaches a senior subject. She uses the learning management system, AI books, the digital library, and online assignments. Her students use the same materials.',
      'Tunde, student, 16, SS2–SS3. He searches CBT practice questions, past questions, and JAMB, WAEC, and NECO preparation. Mrs Adewale, his parent, pays. A parent of a younger child searches BECE and NCEE preparation.',
      'Mrs Adewale, parent, 38–48. She has a child in secondary school. She wants a parent portal for attendance, results, and fees. She registers her JSS child for an academic competition. A search for SmartEdu Hub is someone who already knows the name.',
    ],
  },
]

export const smehContentStrategy: PresentationState = {
  slides: smehContentStrategySlides,
  currentIndex: 0,
  seedRevision: SMEH_CONTENT_STRATEGY_REVISION,
  meta: SMEH_CONTENT_STRATEGY_META,
}
