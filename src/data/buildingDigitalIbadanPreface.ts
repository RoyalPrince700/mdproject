import type { PresentationState, Slide } from '../types/slide'

export const PREFACE_DOCUMENT_ID = 'building-digital-ibadan-preface'
export const PREFACE_DOCUMENT_TITLE = 'Preface'
export const PREFACE_SEED_REVISION = 3

export const PREFACE_META: PresentationState['meta'] = {
  brand: 'Reproduction Rights Society of Nigeria',
  author: 'Tosin Akeredolu',
  degree: 'B.A., MLIS',
  date: 'November 2026',
  kind: 'document',
  editorView: 'document',
  numberedSections: false,
  documentFont: 'Times New Roman',
  subject: 'Preface',
}

export const buildingDigitalIbadanPrefaceSlides: Slide[] = [
  {
    id: 'preface-cover',
    layout: 'title',
    title: 'Preface',
    subtitle:
      'Building Digital Ibadan: How Technology and Education Are Rewriting the Story of Communities Outside Lagos',
    notes:
      'Preface by Tosin Akeredolu for Adekunle Olayiwola’s manuscript. Open in Document view and download as DOCX.',
  },
  {
    id: 'preface-body',
    layout: 'bullets',
    title: 'Preface',
    icon: 'FileText',
    bullets: [
      'Some books celebrate change after it has happened. Building Digital Ibadan takes us to the place where change begins: the moment a person looks at a familiar problem, refuses to accept it as normal, and decides to do something about it. This is what makes the book timely and compelling. It is not simply the story of an organisation. It is a story about talent, unequal access, community responsibility, and the courage to build opportunity where people already live.',
      'Nigeria is moving rapidly into a digital age. Examinations are conducted on computers, businesses depend increasingly on technology, artificial intelligence is changing how people learn and work, and digital skills now influence access to education and employment. Yet this progress is not reaching every community at the same pace. Many young people have the intelligence and ambition to succeed but lack computers, reliable internet, practical training, guidance, and safe places to learn. Their potential is not the problem. The distance between their potential and their opportunities is.',
      'Adekunle Olayiwola brings that reality to life through the experience of Ona-Ara, Ibadan. He writes as a Computer Science graduate, a teacher, and the founder and executive director of ARA TECH. More importantly, he writes as someone who knows the community from within. He has visited its schools and tutorial centres, spoken with students and educators, observed the shortage of practical computer experience, and chosen to respond. His guiding idea, Building People Through Education and Technology, gives the book its heart.',
      'One of the book’s most important questions is also one of its simplest: must a young person leave home before meaningful opportunity can begin? For many Nigerians, places such as Lagos represent access, visibility, and possibility. This book does not argue against Lagos or against relocation. Instead, it widens our imagination. It asks what could happen if communities outside the major commercial centres also became places where young people could learn digital skills, prepare confidently for computer-based examinations, explore new careers, and create useful solutions.',
      'The question is urgent. A student may understand an examination subject and still struggle because the computer used to test that knowledge is unfamiliar. In some of the centres described in this book, many learners share only a few computers. Some candidates approach an important digital examination with very little practical experience. Through these stories, the digital divide stops being a distant expression and becomes something human. It is the anxious student facing a screen for the first time. It is the talented graduate who sees no clear path into a technology career. It is the school that understands the need but lacks the resources to respond.',
      'This is also a book about action. Readers will follow the birth of ARA TECH, its computer-based test awareness campaigns, school and tutorial centre visits, practical workshops, partnerships, and wider vision for digital literacy, artificial intelligence, and career readiness. The account shows how an idea moves from observation to service. It explains why trust matters, why founders must listen before building, and why community projects need people, clear responsibilities, dependable systems, and partnerships if they are to last.',
      'What makes the journey especially engaging is its honesty. We are shown not only the inspiring moments but also the difficulties behind them. Adekunle writes about funding much of the early outreach from his own resources, arriving early to speak with students, and organising a workshop for which one hundred people registered but only thirty attended. These details give the book credibility. They remind us that useful work is rarely built in perfect conditions. Progress often comes through small beginnings, disappointing results, careful reflection, and the decision to try again with greater understanding.',
      'For young people, this book offers encouragement without selling the false promise of easy success. It shows that a person’s environment may influence the starting point without having the final word. For teachers, parents, and school owners, it explains why digital preparation must involve practice as well as theory. For founders and community organisations, it provides lessons on identifying real needs, communicating a vision, building trust, learning from low participation, and growing within limited resources.',
      'Government officials and policymakers will find a clear reminder that purchasing equipment is not enough. Digital inclusion also requires electricity, connectivity, maintenance, trained educators, useful learning programmes, and repeated opportunities for students to practise. Businesses, philanthropists, and Nigerians in the diaspora will find practical ways to contribute through sponsorship, equipment, mentorship, professional knowledge, training, and lasting partnerships. The benefit of this book is that it does not leave responsibility with one group. It shows how different people can contribute to the same future.',
      'Although the story begins in Ona-Ara, its message reaches far beyond Ibadan. Communities across Nigeria and other developing societies face similar questions. How do we prepare young people for a digital world when access remains uneven? How do we turn local talent into local opportunity? How can a community begin with the resources it has without becoming satisfied with its present limitations? The lessons in these pages can help readers examine those questions in their own towns, schools, organisations, and institutions.',
      'From my work in publishing, copyright, and knowledge management, I understand the importance of preserving stories that can inform action. Community efforts are often forgotten because their founders are too busy doing the work to document what they have learned. Building Digital Ibadan gives this developing journey a voice. It records the decisions, sacrifices, relationships, setbacks, and hopes behind ARA TECH while offering a useful guide to others who want to build.',
      'This book deserves attention because it connects technology with people. It reminds us that digital development is not measured only by new software, impressive events, or the number of technology companies in a city. It is also measured by the student who can now approach an examination with confidence, the young person who discovers a new career path, the teacher who gains a better tool, and the community that begins to see itself as a place of possibility.',
      'Adekunle Olayiwola has not presented a finished success story. He has offered something more valuable: an honest invitation to take part in building one. I commend this book to students, educators, parents, founders, policymakers, business leaders, development partners, members of the diaspora, and every reader who believes that where a person begins should not determine how far that person can go.',
      'As you turn these pages, expect more than the account of one founder or one organisation. Expect to meet a question that may remain with you after the final chapter: what opportunity can I help build where I am?',
    ],
    footer:
      'Tosin Akeredolu, B.A., MLIS\nActing Executive Director\nReproduction Rights Society of Nigeria (REPRONIG)\nNovember 2026',
  },
]

export const buildingDigitalIbadanPreface: PresentationState = {
  slides: buildingDigitalIbadanPrefaceSlides,
  currentIndex: 0,
  seedRevision: PREFACE_SEED_REVISION,
  meta: PREFACE_META,
}
