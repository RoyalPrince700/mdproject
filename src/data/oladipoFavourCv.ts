import type { PresentationState, Slide } from '../types/slide'

export const OLADIPO_FAVOUR_CV_ID = 'oladipo-favour-agriculture-cv'
export const OLADIPO_FAVOUR_CV_TITLE =
  'Oladipo Favour Oluwasemilore — Agriculture CV'
export const OLADIPO_FAVOUR_CV_SEED_REVISION = 2

export const OLADIPO_FAVOUR_CV_META: PresentationState['meta'] = {
  brand: '',
  author: 'Oladipo Favour Oluwasemilore',
  degree: 'B.Agric, Agricultural Science',
  date: 'November 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Calibri',
  numberedSections: false,
  omitCoverPage: true,
  documentLayout: 'cv',
  subject: 'Oladipo Favour Oluwasemilore CV',
}

export const oladipoFavourCvSlides: Slide[] = [
  {
    id: 'oladipo-cv-01',
    layout: 'bullets',
    chapter: 'Header',
    title: 'OLADIPO FAVOUR OLUWASEMILORE',
    bullets: [
      'Gaa-Akanbi, Along Agbabiaka Road, Ilorin, Kwara State, Nigeria  |  oladipofavour20@gmail.com  |  +234 (0) 813 422 3434',
    ],
  },
  {
    id: 'oladipo-cv-02',
    layout: 'bullets',
    title: 'Personal profile',
    bullets: [
      'Agricultural Science graduate (B.Agric, University of Ilorin, Second Class Lower) seeking a livestock, poultry, aquaculture, or farm operations role. Practical experience from National Youth Service in a local government Agricultural Department, covering rabbit production, fish farming, and broiler management. Industrial training at the Nigerian Stored Products Research Institute, with undergraduate research on poultry-based compost and soil fungi.',
    ],
  },
  {
    id: 'oladipo-cv-03',
    layout: 'bullets',
    title: 'Education',
    bullets: [
      '**University of Ilorin** | November 2018 – October 2023',
      'Bachelor of Agriculture (B.Agric) — Agricultural Science, Second Class Lower Division',
      'Undergraduate research project: Effect of poultry-based compost on fungal population in selected Unilorin soils.',
      'Completed Community Based Experience and Services (COBES) as part of the degree.',
    ],
  },
  {
    id: 'oladipo-cv-04',
    layout: 'bullets',
    title: 'Relevant experience',
    bullets: [
      '**Corps Member, Agricultural Department** | May 2025 – March 2026',
      'Ido Local Government — National Youth Service Corps (NYSC)',
      'Supported livestock activities in the Agricultural Department.',
      'Managed and maintained a rabbitry unit, including feeding, housing, and health monitoring of rabbits.',
      'Took part in fish farming operations: pond preparation, feeding, water quality management, and harvesting.',
      'Assisted in broiler poultry production, including feeding schedules, vaccination support, and flock management.',
      'Worked with colleagues to improve farm productivity and maintain hygiene standards.',
      '**Industrial Trainee (SIWES)** | March 2023 – May 2023',
      'Nigerian Stored Products Research Institute (NSPRI)',
      'Completed the Students’ Industrial Work Experience Scheme at the Institute, which works on the storage and protection of agricultural produce.',
    ],
  },
  {
    id: 'oladipo-cv-05',
    layout: 'bullets',
    title: 'Additional experience',
    bullets: [
      '**Founder** | December 2024 – Present',
      'Dara’s Luxe',
      'Founded and managed a fashion accessories brand.',
      'Handled customer relations, sales, and order management.',
      'Created promotional materials using Canva.',
      'Managed enquiries through social media and WhatsApp Business.',
      '**Community Manager** | August 2025 – October 2025',
      'Testmancer',
      'Managed and moderated online communities and responded to enquiries.',
      'Created and managed social media content and supported brand visibility.',
      'Monitored audience responses and passed on feedback to improve content.',
    ],
  },
  {
    id: 'oladipo-cv-06',
    layout: 'bullets',
    title: 'Skills',
    bullets: [
      'Rabbit production: feeding, housing, and health monitoring',
      'Fish farming: pond preparation, feeding, water quality, and harvesting',
      'Broiler poultry: feeding schedules, vaccination support, and flock management',
      'Farm hygiene and teamwork on livestock units',
      'Awareness of poultry-based compost and soil fungi (undergraduate project)',
      'Post-harvest agriculture (SIWES, Nigerian Stored Products Research Institute)',
      'Communication, customer relations, teamwork, and problem-solving',
      'Canva, social media, and WhatsApp Business',
    ],
  },
  {
    id: 'oladipo-cv-07',
    layout: 'bullets',
    title: 'Training',
    bullets: [
      '**Community Management Training Program** | September 2024',
      '**Social Media Marketing** | February 2026',
    ],
  },
  {
    id: 'oladipo-cv-08',
    layout: 'bullets',
    title: 'Referees',
    bullets: ['Available on request.'],
  },
]

export const oladipoFavourCv: PresentationState = {
  slides: oladipoFavourCvSlides,
  currentIndex: 0,
  seedRevision: OLADIPO_FAVOUR_CV_SEED_REVISION,
  meta: OLADIPO_FAVOUR_CV_META,
}
