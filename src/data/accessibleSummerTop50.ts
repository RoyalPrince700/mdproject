import type { PresentationState, Slide } from '../types/slide'

export const ACCESSIBLE_SUMMER_DOCUMENT_ID = 'accessible-summer-top50-document'
export const ACCESSIBLE_SUMMER_DOCUMENT_TITLE =
  'Accessible Summer Competition — Top 50 Finalists'

export const ACCESSIBLE_SUMMER_SLIDES_ID = 'accessible-summer-top50-slides'
export const ACCESSIBLE_SUMMER_SLIDES_TITLE =
  'Accessible Summer Competition — Top 50 Announcement Slides'

export const ACCESSIBLE_SUMMER_DOCUMENT_REVISION = 1
export const ACCESSIBLE_SUMMER_SLIDES_REVISION = 4

export const ACCESSIBLE_SUMMER_BLUE = '#0137b3'

const PLACEHOLDER_NAME = 'Royal prince'
const PLACEHOLDER_STATE = 'Oyo State'
const PLACEHOLDER_SCHOOL = 'Royal prince college'
const PLACEHOLDER_SCORE = '40/50'
const PLACEHOLDER_COMPLETION_TIME = '30mins:20secs'
const SPONSOR = 'Accessible Publishers Limited'
const PLATFORM = 'SmartEdu Hub'
const FOOTER = `${SPONSOR} · ${PLATFORM}`

function ordinal(rank: number): string {
  if (rank % 100 >= 11 && rank % 100 <= 13) return `${rank}th`
  switch (rank % 10) {
    case 1:
      return `${rank}st`
    case 2:
      return `${rank}nd`
    case 3:
      return `${rank}rd`
    default:
      return `${rank}th`
  }
}

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

function finalistSlide(rank: number): Slide {
  return {
    id: `asc-finalist-${rank}`,
    layout: 'finalist',
    title: `${ordinal(rank)} Place`,
    subtitle: PLACEHOLDER_NAME,
    state: PLACEHOLDER_STATE,
    school: PLACEHOLDER_SCHOOL,
    score: PLACEHOLDER_SCORE,
    completionTime: PLACEHOLDER_COMPLETION_TIME,
    chapter: 'Top 50 Finalists',
    notes: `Announce ${ordinal(rank)} place finalist. Replace placeholder name, score, time, state, and school before presenting.`,
  }
}

function buildDocumentSlides(): Slide[] {
  const top50Bullets = Array.from({ length: 50 }, (_, index) => {
    const rank = 50 - index
    return `${ordinal(rank)} — ${PLACEHOLDER_NAME} · ${PLACEHOLDER_STATE} · ${PLACEHOLDER_SCHOOL}`
  })

  return [
    {
      id: 'asc-doc-title',
      layout: 'title',
      title: 'Accessible Summer Competition\nTop 50 Finalists',
      subtitle:
        'Read deeply. Think sharply. Compete proudly.\nCelebrating Accessible Publishers @30',
      footer: FOOTER,
      notes:
        'Announcement document. Export as DOCX from Document view, or open the companion slide deck for PPTX.',
    },
    sectionSlide('asc-doc-about', 'About the competition', '1. About the competition', {
      subtitle: 'A national stage for Nigeria’s most dedicated Junior Secondary students',
    }),
    {
      id: 'asc-doc-about-body',
      layout: 'bullets',
      chapter: '1. About the competition',
      title: 'About this competition',
      icon: 'BookOpen',
      bullets: [
        'In celebration of Accessible Publishers @30, we proudly present the Accessible Summer Competition — Read deeply. Think sharply. Compete proudly.',
        'The Accessible Summer Competition is proudly presented by Accessible Publishers Limited, a Nigerian educational publisher that has championed reading, learning, and academic excellence for progressive minds since 1996.',
        'For a company built on great books and serious scholarship, this competition is a natural extension of that mission: a stage where Nigeria’s most dedicated Junior Secondary students can test what they know, sharpen how they think, and be rewarded for taking their studies seriously.',
        'Open to all JSS 1–JSS 3 students and free to enter, it invites young learners who love books and take pride in their work to compete for a share of over ₦2.2 million in prizes.',
        'From the very first question to the Gold Stage final, every sitting is proctored and evidence-reviewed, so results are earned fairly, and winning here truly means something.',
        'Between registration and exam day, participants get a full practice season to read widely, work through past questions, and build genuine exam confidence. It rewards the habits that matter most: consistent reading, careful thinking, and honest effort.',
      ],
    },
    sectionSlide('asc-doc-who', 'Who competes', '2. Who competes', {
      subtitle: 'Junior Secondary students across Nigeria',
    }),
    {
      id: 'asc-doc-who-body',
      layout: 'framework',
      chapter: '2. Who competes',
      title: 'Who competes',
      icon: 'GraduationCap',
      frameworkBlocks: [
        {
          label: 'JSS 1',
          text: 'Junior Secondary School Year 1 students who love books and take pride in their work.',
          icon: 'Users',
        },
        {
          label: 'JSS 2',
          text: 'Junior Secondary School Year 2 students ready to test what they know and sharpen how they think.',
          icon: 'Users',
        },
        {
          label: 'JSS 3',
          text: 'Junior Secondary School Year 3 students competing for a share of over ₦2.2 million in prizes.',
          icon: 'Users',
        },
        {
          label: 'Platform',
          text: `${PLATFORM} — the digital platform powering registration, practice, and competition delivery.`,
          icon: 'Monitor',
        },
      ],
    },
    sectionSlide('asc-doc-top50', 'Top 50 finalists', '3. Top 50 finalists', {
      subtitle: 'Replace placeholder names with the confirmed finalists before publishing',
    }),
    {
      id: 'asc-doc-top50-intro',
      layout: 'bullets',
      chapter: '3. Top 50 finalists',
      title: 'Announcing the Top 50',
      icon: 'Goal',
      bullets: [
        'These fifty students have earned their place among the strongest performers in the Accessible Summer Competition.',
        'Each name below is a placeholder — edit “Royal prince”, state, and school with the confirmed finalist details before export or public release.',
        'The list runs from 50th place to 1st place, matching the announcement slide deck order.',
        `Sponsored by ${SPONSOR}. Platform: ${PLATFORM}.`,
      ],
    },
    {
      id: 'asc-doc-top50-list',
      layout: 'cards',
      chapter: '3. Top 50 finalists',
      title: 'Top 50 — finalist names',
      icon: 'CircleCheck',
      bullets: top50Bullets,
      notes: 'Edit each placeholder name in the editor before downloading DOCX.',
    },
    {
      id: 'asc-doc-closing',
      layout: 'closing',
      chapter: '4. Closing',
      title: 'Congratulations to the Top 50',
      subtitle:
        'Read deeply. Think sharply. Compete proudly.\nAccessible Publishers @30',
      footer: FOOTER,
    },
  ]
}

function buildPresentationSlides(): Slide[] {
  const finalistSlides = Array.from({ length: 50 }, (_, index) =>
    finalistSlide(50 - index),
  )

  return [
    {
      id: 'asc-slide-title',
      layout: 'title',
      title: 'Accessible Summer Competition\nTop 50 Finalists',
      subtitle:
        'Read deeply. Think sharply. Compete proudly.\nCelebrating Accessible Publishers @30',
      footer: FOOTER,
      notes:
        'Opening slide. Announce the Top 50 finalists of the Accessible Summer Competition.',
    },
    {
      id: 'asc-slide-intro',
      layout: 'bullets',
      chapter: 'Before we begin',
      title: 'Top 50 Consolation Prize Winners',
      icon: 'Goal',
      bullets: [
        'This list is for the Top 50 consolation prize winners in the Accessible Summer Competition.',
        'Each student announced here wins ₦10,000 as a consolation prize.',
        'This is not the runners-up announcement. Students who placed 1st, 2nd, or 3rd are not on this list.',
        'We will still announce the Top 3 runners-up separately.',
      ],
      notes:
        'Explain the consolation prize before reading the Top 50 list from 50th place to 1st place.',
    },
    sectionSlide('asc-slide-finalists', 'Top 50 finalists', 'Finalist announcements', {
      subtitle: 'From 50th place to 1st place',
      notes: 'Each slide announces one finalist. Edit placeholder names before presenting.',
    }),
    ...finalistSlides,
    {
      id: 'asc-slide-closing',
      layout: 'closing',
      title: 'Congratulations!',
      subtitle:
        'To every finalist — and to every student who read, practised, and competed with pride.\nAccessible Publishers Limited · SmartEdu Hub',
      footer: FOOTER,
      notes: 'Close the announcement. Invite applause for all Top 50 finalists.',
    },
  ]
}

export const ACCESSIBLE_SUMMER_DOCUMENT_META: PresentationState['meta'] = {
  brand: SPONSOR,
  author: PLATFORM,
  degree: '',
  date: 'August 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Calibri',
  subject: 'Accessible Summer Competition — Top 50 Finalists',
  website: 'www.smarteduhub.ng',
}

export const ACCESSIBLE_SUMMER_SLIDES_META: PresentationState['meta'] = {
  brand: SPONSOR,
  author: PLATFORM,
  degree: '',
  date: 'August 2026',
  kind: 'presentation',
  website: 'www.smarteduhub.ng',
}

export const accessibleSummerDocument: PresentationState = {
  slides: buildDocumentSlides(),
  currentIndex: 0,
  seedRevision: ACCESSIBLE_SUMMER_DOCUMENT_REVISION,
  meta: ACCESSIBLE_SUMMER_DOCUMENT_META,
}

export const accessibleSummerSlides: PresentationState = {
  slides: buildPresentationSlides(),
  currentIndex: 0,
  seedRevision: ACCESSIBLE_SUMMER_SLIDES_REVISION,
  meta: ACCESSIBLE_SUMMER_SLIDES_META,
}
