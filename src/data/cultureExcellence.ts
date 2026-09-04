import type { PresentationState, Slide } from '../types/slide'

export const CULTURE_EXCELLENCE_DOCUMENT_ID =
  'culture-excellence-accountability'
export const CULTURE_EXCELLENCE_DOCUMENT_TITLE =
  'Culture of Excellence and Accountability at Work'
export const CULTURE_EXCELLENCE_SEED_REVISION = 1

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

export const CULTURE_EXCELLENCE_META: PresentationState['meta'] = {
  brand: '',
  author: '',
  degree: '',
  date: 'August 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Calibri',
  subject: 'Culture of Excellence and Accountability at Work',
}

export const cultureExcellenceSlides: Slide[] = [
  {
    id: 'culture-01',
    layout: 'title',
    title: 'Culture of Excellence and\nAccountability at Work',
    subtitle:
      'How high standards become daily habit — not a slogan on the wall',
    notes:
      'Workplace briefing. Export as DOCX from Document view, or switch to Slides and download PPTX.',
  },
  sectionSlide('culture-02', 'Purpose', '1. Purpose of this briefing', {
    subtitle: 'Why this document exists and who it is for',
  }),
  {
    id: 'culture-03',
    layout: 'bullets',
    chapter: '1. Purpose of this briefing',
    title: 'Purpose of this briefing',
    icon: 'Target',
    bullets: [
      'This briefing sets out what a culture of excellence and accountability looks like at work, why it matters, and how every person — from the front line to leadership — is expected to live it.',
      'Excellence is the standard of the work itself: quality, care, and follow-through. Accountability is the habit of owning outcomes, not only tasks. Together they turn good intentions into reliable results.',
      'The aim is practical. After reading this, a manager should be able to name expected behaviours, a team member should know what “good” looks like, and the organisation should have a shared language for praise, feedback, and correction.',
    ],
  },
  sectionSlide(
    'culture-04',
    'Why it matters',
    '2. Why excellence and accountability matter',
    { subtitle: 'Performance, trust, and reputation' },
  ),
  {
    id: 'culture-05',
    layout: 'framework',
    chapter: '2. Why excellence and accountability matter',
    title: 'Why this culture pays off',
    icon: 'TrendingUp',
    bullets: [
      'A workplace does not become excellent by accident. It becomes excellent when people can predict that work will be done well, on time, and owned when it is not.',
    ],
    frameworkBlocks: [
      {
        label: 'Customers and partners',
        text: 'They experience consistency. Promises match delivery. Reputation is earned in small, repeated acts — not in one campaign.',
        icon: 'Handshake',
      },
      {
        label: 'Colleagues',
        text: 'People can rely on one another. Handovers are clean. Nobody has to chase, cover, or redo work that should already have been finished.',
        icon: 'Users',
      },
      {
        label: 'The organisation',
        text: 'Waste falls. Rework falls. Decisions get faster because facts are trusted. High performers stay because the standard is fair and visible.',
        icon: 'Building2',
      },
      {
        label: 'The individual',
        text: 'Pride in craft grows. Feedback is about the work, not personality. Career progress rests on evidence, not noise.',
        icon: 'UserRound',
      },
    ],
  },
  sectionSlide('culture-06', 'What we mean', '3. Definitions', {
    subtitle: 'Excellence and accountability, in plain language',
  }),
  {
    id: 'culture-07',
    layout: 'twoColumn',
    chapter: '3. Definitions',
    title: 'Two ideas, one culture',
    icon: 'Scale',
    leftTitle: 'Excellence',
    leftBullets: [
      'Doing the work to a standard we would be proud to put our name on.',
      'Caring about quality, accuracy, and the last 10% — not only “done.”',
      'Improving the method, not just repeating last year’s version.',
      'Raising the bar when we know better, without waiting to be asked.',
    ],
    rightTitle: 'Accountability',
    rightBullets: [
      'Owning the outcome, not only the activity.',
      'Saying what you will do, by when, and reporting back without being chased.',
      'Surfacing problems early, with a proposed next step.',
      'Accepting consequences — praise and correction — as part of the job.',
    ],
  },
  {
    id: 'culture-08',
    layout: 'bullets',
    chapter: '3.1 How they reinforce each other',
    title: 'How they reinforce each other',
    icon: 'Network',
    bullets: [
      'Excellence without accountability becomes theatre: beautiful plans, weak follow-through. Accountability without excellence becomes busy-work: people own tasks that were never worth doing well.',
      'A healthy culture holds both. We set a clear standard, we assign a clear owner, and we review the result. If the result misses, we fix the work and the system — not the person first.',
      'The test is simple. Can a colleague, a customer, or a manager answer three questions: What was promised? Who owns it? Was it delivered to standard?',
    ],
  },
  sectionSlide(
    'culture-09',
    'Behaviours',
    '4. Behaviours we expect',
    { subtitle: 'What people actually do, every week' },
  ),
  {
    id: 'culture-10',
    layout: 'framework',
    chapter: '4. Behaviours we expect',
    title: 'Six everyday behaviours',
    icon: 'ListChecks',
    frameworkBlocks: [
      {
        label: '1. Own the outcome',
        text: 'Take the result as yours until it is handed over cleanly. Do not hide behind “I sent the email” if the job is still unfinished.',
        icon: 'CircleCheck',
      },
      {
        label: '2. Keep the promise',
        text: 'Deadlines are commitments. If a date will slip, say so early, with a new date and a reason — not after the due time has passed.',
        icon: 'ClipboardList',
      },
      {
        label: '3. Sweat the detail',
        text: 'Check names, numbers, files, and tone before work leaves your desk. Excellence is often the absence of small, avoidable errors.',
        icon: 'Search',
      },
      {
        label: '4. Speak up early',
        text: 'Raise a risk while there is still time to act. Silence that protects comfort is not loyalty; it is delayed failure.',
        icon: 'MessageCircle',
      },
      {
        label: '5. Help the next person',
        text: 'Leave work in a state a colleague can pick up. Document decisions. Close loops. Do not throw unfinished work over the wall.',
        icon: 'Handshake',
      },
      {
        label: '6. Learn in public',
        text: 'When something goes wrong, name what happened, what you will change, and what others should know. Hide nothing that others need.',
        icon: 'Lightbulb',
      },
    ],
  },
  sectionSlide(
    'culture-11',
    'Three levels',
    '5. Accountability at three levels',
    { subtitle: 'Self, team, and leadership' },
  ),
  {
    id: 'culture-12',
    layout: 'cards',
    chapter: '5.1 Personal accountability',
    title: 'Personal accountability',
    icon: 'UserRound',
    bullets: [
      'Know your role, your targets, and the standard of finish expected of you.',
      'Plan the week around commitments, not around whatever is loudest.',
      'Ask for clarity when an instruction is vague — do not guess and hope.',
      'Track your own work. Do not wait for a manager to discover a miss.',
      'Protect your name: if you cannot do it well, say so before you accept it.',
    ],
  },
  {
    id: 'culture-13',
    layout: 'cards',
    chapter: '5.2 Team accountability',
    title: 'Team accountability',
    icon: 'Users',
    bullets: [
      'Make ownership visible: one name per outcome, not “the team will handle it.”',
      'Review progress in the open so delays are seen while they can still be fixed.',
      'Challenge each other on quality. Kindness without candour is not support.',
      'Share context at handovers so the next person is not starting from zero.',
      'Celebrate the people who close loops, not only the people who speak most.',
    ],
  },
  {
    id: 'culture-14',
    layout: 'cards',
    chapter: '5.3 Leadership accountability',
    title: 'Leadership accountability',
    icon: 'ShieldCheck',
    bullets: [
      'Set the standard in writing and live it in public. People copy what leaders tolerate.',
      'Give people the tools, time, and authority that match the results you demand.',
      'Hold reviews that look at evidence, not personality or proximity to power.',
      'Protect those who raise problems in good faith. Punish concealment, not candour.',
      'Own the system: if the same miss repeats, the process — not only the person — is failing.',
    ],
  },
  sectionSlide(
    'culture-15',
    'What “good” looks like',
    '6. Excellence in daily work',
    { subtitle: 'A practical picture of the standard' },
  ),
  {
    id: 'culture-16',
    layout: 'twoColumn',
    chapter: '6. Excellence in daily work',
    title: 'From “busy” to “excellent”',
    icon: 'Sparkles',
    leftTitle: 'This is not excellence',
    leftBullets: [
      'Activity without a finished result.',
      'Work sent on time but full of errors.',
      'Blame shifting when a customer complains.',
      'Meetings that recap problems and assign no owner.',
      '“That is not my job” when the outcome is still open.',
    ],
    rightTitle: 'This is excellence',
    rightBullets: [
      'A clear brief, a named owner, and a due date.',
      'Work checked before it is shared.',
      'Problems raised with a proposed fix.',
      'Decisions recorded so others can act.',
      'The last mile completed — follow-up, filing, and close-out.',
    ],
  },
  sectionSlide(
    'culture-17',
    'Systems',
    '7. Systems that sustain the culture',
    { subtitle: 'Habits beat slogans' },
  ),
  {
    id: 'culture-18',
    layout: 'framework',
    chapter: '7. Systems that sustain the culture',
    title: 'Make the standard the easy path',
    icon: 'Layers',
    bullets: [
      'Culture is what people do when nobody is watching, and what the organisation rewards when everybody is watching. These systems keep excellence from depending on a few heroes.',
    ],
    frameworkBlocks: [
      {
        label: 'Clear goals',
        text: 'Every role has a small set of outcomes that matter. If everything is a priority, nothing is.',
        icon: 'Goal',
      },
      {
        label: 'Visible ownership',
        text: 'Projects, reports, and customer promises have one accountable owner, even when many people contribute.',
        icon: 'ClipboardList',
      },
      {
        label: 'Cadence',
        text: 'Weekly check-ins look at progress against the standard — not only at how busy people have been.',
        icon: 'BarChart3',
      },
      {
        label: 'Feedback',
        text: 'Praise is specific and public. Correction is timely, private where possible, and about the work.',
        icon: 'MessageCircle',
      },
      {
        label: 'Consequences',
        text: 'High standards are rewarded. Repeated misses, after support, have a real cost. Fairness is the point.',
        icon: 'Scale',
      },
      {
        label: 'Learning',
        text: 'After-action reviews on misses and wins. We change the checklist, the brief, or the handover — then we move on.',
        icon: 'Lightbulb',
      },
    ],
  },
  sectionSlide(
    'culture-19',
    'How we know',
    '8. How we measure it',
    { subtitle: 'Signs the culture is real' },
  ),
  {
    id: 'culture-20',
    layout: 'bullets',
    chapter: '8. How we measure it',
    title: 'Signs the culture is taking hold',
    icon: 'ChartLine',
    bullets: [
      'On-time delivery of commitments, with fewer last-minute surprises.',
      'Lower rework: fewer errors found by the next person, the customer, or the boss.',
      'Issues raised earlier in the cycle, with owners and dates attached.',
      'Handovers that a new colleague can follow without a private briefing.',
      'Performance conversations that cite evidence of quality and ownership, not only hours worked or volume of messages.',
      'Leaders and teams using the same language: standard, owner, date, result.',
    ],
  },
  sectionSlide(
    'culture-21',
    'What gets in the way',
    '9. Failure patterns to watch',
    { subtitle: 'How good cultures quietly die' },
  ),
  {
    id: 'culture-22',
    layout: 'framework',
    chapter: '9. Failure patterns to watch',
    title: 'Failure patterns to watch',
    icon: 'TriangleAlert',
    frameworkBlocks: [
      {
        label: 'Hero culture',
        text: 'The same few people rescue every deadline. The system never improves, and those people eventually leave or burn out.',
        icon: 'CircleAlert',
      },
      {
        label: 'Busy theatre',
        text: 'Long hours and full calendars are treated as proof of value. Output and quality are not inspected.',
        icon: 'TrendingDown',
      },
      {
        label: 'Blame after the fact',
        text: 'Problems stay hidden until they explode. Then the hunt is for a person, not for the gap in the process.',
        icon: 'Ban',
      },
      {
        label: 'Uneven standards',
        text: 'Favourites are excused. Newcomers are punished. People stop believing the culture is real.',
        icon: 'Scale',
      },
    ],
  },
  sectionSlide(
    'culture-23',
    'How we embed it',
    '10. How we embed it',
    { subtitle: 'From briefing to habit' },
  ),
  {
    id: 'culture-24',
    layout: 'bullets',
    chapter: '10. How we embed it',
    title: 'From briefing to habit',
    icon: 'ArrowRight',
    bullets: [
      'Leaders discuss this briefing with their teams within two weeks. The conversation should name two or three behaviours that matter most in that unit — not all six at once.',
      'Every recurring meeting should close with owners and dates. If a meeting produces no named next step, it has not done its job.',
      'Managers give one specific piece of excellence feedback and one accountability feedback each week. Vague praise (“good job”) does not teach the standard.',
      'New colleagues receive this briefing as part of induction, with examples from their actual role — a report, a customer call, a handover — not only the abstract language.',
      'Quarterly, each team reviews one miss and one win against this culture: what the standard was, who owned it, what happened, and what we will change.',
    ],
  },
  {
    id: 'culture-25',
    layout: 'closing',
    chapter: '11. Closing',
    title: 'The standard is the work',
    subtitle:
      'Excellence is what we ship. Accountability is who we are when it is hard.',
    notes:
      'Close with a personal commitment: one behaviour to strengthen this month, and one colleague to support.',
  },
]

export const cultureExcellenceDocument: PresentationState = {
  slides: cultureExcellenceSlides,
  currentIndex: 0,
  seedRevision: CULTURE_EXCELLENCE_SEED_REVISION,
  meta: CULTURE_EXCELLENCE_META,
}
