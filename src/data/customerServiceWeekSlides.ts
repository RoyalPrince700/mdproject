import type { PresentationState, Slide } from '../types/slide'

export const CUSTOMER_SERVICE_WEEK_SLIDES_ID = 'customer-service-week-2026-slides'
export const CUSTOMER_SERVICE_WEEK_SLIDES_TITLE =
  'More Than Just Selling Books — Customer Service Week 2026'
export const CUSTOMER_SERVICE_WEEK_SLIDES_REVISION = 2

export const customerServiceWeekSlides: Slide[] = [
  {
    id: 'csw-title',
    layout: 'title',
    title: 'More Than Just Selling Books',
    subtitle:
      'Going the Extra Mile to create positive, memorable customer experiences',
    footer:
      'Tosin Akeredolu · Customer Relationship Manager\nKnowledge Sharing Session · 8 October 2026',
    notes:
      'Open with the week, then the argument. We are inside Customer Service Week, 5–9 October 2026, and the official theme is The Extra Mile. This session has one claim: a correct book is the minimum; the experience is what the customer remembers and repeats. Promise a short argument and three questions at the end. Do not read the title aloud twice. Optional line, then move on: the 1992 presidential proclamation was signed on 8 October. We are speaking on 8 October as well.',
  },
  {
    id: 'csw-week',
    layout: 'bullets',
    chapter: 'The week',
    title: 'A worldwide week, and our theme',
    icon: 'Globe',
    bullets: [
      'Customer Service Week is held each year in the first full week of October. In 2026, that is 5–9 October.',
      'The official programme dates the celebration from 1987. In 1992 the U.S. Congress proclaimed it, and President George H.W. Bush issued the proclamation.',
      'It is marked by organisations in all 50 U.S. states and in more than 60 countries.',
      'The official 2026 theme is The Extra Mile: go a little further for every customer, and keep the habit after this week.',
      'Accessible Publishers Limited is marking the week here, with the people who serve our schools, families, and partners.',
    ],
    notes:
      'Source is the official Customer Service Week programme at CSWeek.com, sponsored by the Customer Service Group since 1991. If asked about 1984: some accounts trace the idea to the International Customer Service Association in 1984; the official programme dates the week itself from 1987. Use 1987 on the slide. The 1992 proclamation covered 4–10 October 1992 and was signed on 8 October 1992. “More than 60 countries” is the programme’s own report of participation, not a figure we counted ourselves. Do not show or redraw the official logo; it is a trademark. Land on the last bullet: this is our week, not a poster we noticed.',
  },
  {
    id: 'csw-argument',
    layout: 'twoColumn',
    chapter: 'The argument',
    title: 'The invoice closes a sale',
    subtitle: 'The experience opens the next one.',
    icon: 'Scale',
    leftTitle: 'Selling the book',
    leftBullets: [
      'The right title, the right class, and the right quantity.',
      'A clear price, and a date we actually keep.',
      'This is what a publisher owes. It is the floor.',
    ],
    rightTitle: 'Creating the experience',
    rightBullets: [
      'The customer feels understood, and knows what will happen next.',
      'The difficult part is made easy before they have to chase it.',
      'They leave confident enough to return, and to recommend us.',
    ],
    notes:
      'Hold the room on the word floor. Accuracy is not the extra mile; it is the entrance. Praise teams that get orders right, then raise the standard. A school that receives the correct cartons and still feels ignored has been sold to, and has not been served. Ask, lightly: which of our recent orders would the customer describe with the left column only?',
  },
  {
    id: 'csw-memory',
    layout: 'framework',
    chapter: 'The memory',
    title: 'What a customer actually remembers',
    icon: 'Lightbulb',
    frameworkBlocks: [
      {
        label: 'The peak and the end',
        author: 'Daniel Kahneman',
        text: 'People judge an experience by its most intense moment and by how it ends, not by the average of every step.',
        icon: 'Sparkles',
      },
      {
        label: 'Customer effort',
        author: 'Dixon, Freeman and Toman, 2010',
        text: 'Loyalty rises when the hard part becomes easy. A pleasant surprise is welcome. Ease is what brings them back.',
        icon: 'ListChecks',
      },
      {
        label: 'The story retold',
        author: 'The customer’s own account',
        text: 'A proprietor, parent, or partner repeats how they were treated. That retelling is the reputation we live with.',
        icon: 'MessageCircle',
      },
    ],
    notes:
      'Use these as findings, not decorations. Peak-end: Daniel Kahneman and colleagues showed that people remember the most intense point and the ending, and neglect duration. Cite it as Kahneman’s peak-end rule if asked. Effort: Matthew Dixon, Karen Freeman, and Nicholas Toman, “Stop Trying to Delight Your Customers,” Harvard Business Review, July–August 2010. Their evidence was from service interactions. The transferable point is ours: reducing effort predicts loyalty more reliably than added delight. Do not invent a percentage. Close the slide with a publishing translation: the peak may be the moment we solve a shortage; the end may be the call after delivery. Both are designed, or both are accidental.',
  },
  {
    id: 'csw-standard',
    layout: 'framework',
    chapter: 'The standard',
    title: 'Four tests of the extra mile',
    icon: 'Target',
    frameworkBlocks: [
      {
        label: 'Accurate',
        text: 'The title, the class, the quantity, and the date are right the first time.',
        icon: 'CircleCheck',
      },
      {
        label: 'Easy',
        text: 'We remove a step the customer would otherwise have had to carry.',
        icon: 'ListChecks',
      },
      {
        label: 'Personal',
        text: 'A school, a parent, or a bookseller is addressed by name, and by the real need.',
        icon: 'UserRound',
      },
      {
        label: 'Lasting',
        text: 'They still feel well served after the books are open in the classroom.',
        icon: 'Library',
      },
    ],
    notes:
      'This is the slide to slow down on. Call it a standard: four tests anyone can apply when no one senior is watching. A gesture that fails the tests is hospitality, not excellence. Accurate without easy is a correct order that exhausted the customer. Personal without accurate is warmth that still sent the wrong book. Lasting is the test most publishers skip, because the invoice has already been raised. Invite the room to score one recent interaction against all four. Excellence here is judgment, applied repeatedly.',
  },
  {
    id: 'csw-customers',
    layout: 'framework',
    chapter: 'Our customers',
    title: 'What further looks like for them',
    icon: 'Users',
    frameworkBlocks: [
      {
        label: 'Schools and teachers',
        text: 'Confirm class, scheme, and quantity before term, and name who calls if the plan changes.',
        icon: 'GraduationCap',
      },
      {
        label: 'Parents and learners',
        text: 'Give a clear answer, and a format the reader can use: print, audio, e-book, or braille.',
        icon: 'BookOpen',
      },
      {
        label: 'Booksellers and distributors',
        text: 'Keep supply reliable, and say early when a title is short, before the school discovers it.',
        icon: 'Store',
      },
      {
        label: 'Ministries and partners',
        text: 'Be precise, protect their time, and finish the follow-up without being asked again.',
        icon: 'Landmark',
      },
    ],
    notes:
      'Stay inside customers we actually serve. Do not invent a case study. If you give one example, use a pattern the room will recognise: a JSS list confirmed before resumption; a parent who needs a title in a format the child can use; a bookseller told about a short title on Thursday rather than on Monday morning at the school gate; a ministry or partner who receives the document once, complete. Accessible already publishes across print, audio, e-book, and braille. The extra mile is making that access real for the person in front of us. A book the reader cannot use has not been delivered.',
  },
  {
    id: 'csw-moments',
    layout: 'bullets',
    chapter: 'The moments',
    title: 'Where the memory is decided',
    icon: 'GitBranch',
    bullets: [
      'First reply. Answer the real need, not only the sentence that was sent.',
      'Recommendation. Match the book to the class, the scheme, and the learner.',
      'Handover. Name the quantity, the date, and the owner. Say early if it will change.',
      'Last contact. Close with a follow-up, a named person, or a specific recovery.',
    ],
    notes:
      'Tie this back to peak-end without repeating the theory. Any of these four can become the peak. The promise — quantity, date, and owner — sits inside the handover, because a date that is never said is not a promise. The last contact is the ending, so it carries more memory than we usually allow. A perfect delivery followed by silence still ends weakly. A shortage handled early, with a named owner and a revised date, can end strongly. Ask the room which of the four we currently leave to whoever happens to pick up the phone.',
  },
  {
    id: 'csw-discipline',
    layout: 'twoColumn',
    chapter: 'The discipline',
    title: 'Excellence has a shape',
    icon: 'ShieldCheck',
    leftTitle: 'What meets the standard',
    leftBullets: [
      'A practice the next officer can repeat.',
      'The next question, answered before it is asked.',
      'A recovery that is clearer than the failure.',
      'The customer’s time, treated as carefully as the stock.',
    ],
    rightTitle: 'What fails the standard',
    rightBullets: [
      'A discount that conceals a weak process.',
      'One heroic save that nobody else can copy.',
      'Agreement, when the honest answer is a better book.',
      'Warm language sitting on top of an inaccurate order.',
    ],
    notes:
      'This is the slide that protects the idea from becoming soft. Going further is not breaking the process, and it is not a price cut. Heroics are a warning that the system failed. The honest “no” can be the extra mile when the requested book is wrong for the class. If you want a same-week reference, use it verbally: the Institute of Customer Service in the United Kingdom marks Thursday 8 October 2026 as Service Culture to Improve Productivity. That is a separate national programme. The useful point is the same. A service culture should make the work cleaner and the output higher. It should not add ceremony.',
  },
  {
    id: 'csw-proof',
    layout: 'bullets',
    chapter: 'The proof',
    title: 'How we will know we did it',
    icon: 'ClipboardList',
    bullets: [
      'The first answer was complete. The customer did not have to ask again.',
      'A failure was recovered promptly, in specific terms, by a named person.',
      'A proprietor would recommend us to another school without being asked.',
      'Before Friday, each team removes one recurring customer effort.',
    ],
    notes:
      'Do not announce a dashboard we do not have. These are tests a supervisor can use on Monday. The fourth bullet is the only assignment from this session. Make it concrete before you leave the room: one effort per team, named, with an owner, gone before Friday 9 October, which is the last day of the week. If the room is quiet, offer examples: a second call to confirm a title already on the order; a delivery window we never specify; a parent sent to three people for one question. Also leave one useful thing behind when you can: a follow-up, a reading note, or a direct contact. Removing effort is the extra mile. Adding a speech is not.',
  },
  {
    id: 'csw-close',
    layout: 'framework',
    chapter: 'Close',
    title: 'The book leaves us. The experience stays.',
    icon: 'Quote',
    frameworkBlocks: [
      {
        label: 'The work',
        text: 'Where are we still leaving the customer to carry work that belongs to us?',
        icon: 'ListChecks',
      },
      {
        label: 'The memory',
        text: 'Which peak, or which ending, are we still leaving to chance?',
        icon: 'Sparkles',
      },
      {
        label: 'This week',
        text: 'What one recurring effort will your team remove before Friday?',
        icon: 'Goal',
      },
    ],
    notes:
      'Stop presenting and let the room answer, starting with the third question so the session ends in a commitment. If time is short, take one answer from sales, one from warehouse or distribution, and one from the office that handles schools and parents. Thank them for the work they already do. The week exists to honour the people who serve customers. Then restate the line on the slide, once: the book leaves us; the experience stays. Close there.',
  },
]

export const customerServiceWeekPresentation: PresentationState = {
  slides: customerServiceWeekSlides,
  currentIndex: 0,
  seedRevision: CUSTOMER_SERVICE_WEEK_SLIDES_REVISION,
  meta: {
    brand: 'Accessible Publishers Limited',
    author: 'Tosin Akeredolu',
    degree: 'Customer Relationship Manager',
    date: '8 October 2026',
    kind: 'presentation',
    editorView: 'slides',
    subject:
      'More Than Just Selling Books: Going the Extra Mile to Create Positive, Memorable Customer Experiences',
    website: 'www.accessiblepublishers.com',
  },
}
