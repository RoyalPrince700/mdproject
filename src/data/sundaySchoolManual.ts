import manualMarkdown from '../../sundayschool.md?raw'
import type { PresentationState, Slide } from '../types/slide'

export const SUNDAY_SCHOOL_MANUAL_ID = 'translated-sunday-school-manual'
export const SUNDAY_SCHOOL_MANUAL_TITLE =
  'Translated Sunday School Manual'
export const SUNDAY_SCHOOL_MANUAL_REVISION = 2

type Lesson = {
  no: number
  title: string
  marker: string
  page?: string
}

const LESSONS: Lesson[] = [
  { no: 1, title: 'Character', marker: 'CHARACTER' },
  {
    no: 2,
    title: 'Manifestation of Evil Character in the Lives of Predecessors',
    marker: 'MANIFESTATION OF EVIL CHARACTER IN THE LIVES OF PREDECESSORS',
    page: '1',
  },
  {
    no: 3,
    title: "Being a Partaker of God's Divine Nature",
    marker: "BEING A PARTAKER OF GOD'S DIVINE NATURE",
    page: '3',
  },
  {
    no: 4,
    title: 'Moses, the Servant of God Who Had Likeness to Jesus',
    marker: 'MOSES THE SERVANT OF GOD WHO HAD LIKENESS TO JESUS',
    page: '5',
  },
  {
    no: 5,
    title: 'Love in the Church of God',
    marker: 'LOVE IN THE CHURCH OF GOD',
    page: '7',
  },
  {
    no: 6,
    title: 'Knowing Jesus and the Power of His Resurrection',
    marker: 'KNOWING JESUS AND THE POWER OF HIS RESURRECTION',
    page: '8',
  },
  {
    no: 7,
    title: 'The Position of Jesus in the Trinity',
    marker: 'THE POSITION OF JESUS IN THE TRINITY',
    page: '10',
  },
  {
    no: 8,
    title: 'Jesus Rides a Donkey into Jerusalem',
    marker: 'JESUS RIDES A DONKEY INTO JERUSALEM',
    page: '12',
  },
  {
    no: 9,
    title: 'The Resurrection of Jesus Christ',
    marker: 'THE RESURRECTION OF JESUS CHRIST',
    page: '15',
  },
  {
    no: 10,
    title: 'Partaking in the Suffering of Jesus',
    marker: 'PARTAKING IN THE SUFFERING OF JESUS',
    page: '17',
  },
  {
    no: 11,
    title: 'The Power in the Blood of Jesus',
    marker: 'THE POWER IN THE BLOOD OF JESUS',
    page: '19',
  },
  {
    no: 12,
    title: 'Crucified with Christ',
    marker: 'I AM CRUCIFIED WITH CHRIST',
    page: '21',
  },
  {
    no: 13,
    title: "Partaking of the Lord's Supper",
    marker: "EATING THE LORD'S SUPPER",
    page: '23',
  },
  {
    no: 14,
    title: 'The Church of God and What We Should Know About It',
    marker: 'THE CHURCH OF GOD AND WHAT YOU SHOULD KNOW ABOUT IT',
    page: '24',
  },
  {
    no: 15,
    title: 'The Old Testament Church',
    marker: 'THE OLD TESTAMENTS CHURCH',
    page: '26',
  },
  {
    no: 16,
    title: 'The New Testament Church',
    marker: 'THE NEW TESTAMENT CHURCH',
    page: '27',
  },
  {
    no: 17,
    title: 'The Church of God and the Holy Spirit',
    marker: 'THE CHURCH OF GOD AND THE HOLY SPIRIT',
    page: '29',
  },
  {
    no: 18,
    title: 'Do Not Be Unequally Yoked with Unbelievers',
    marker: 'DO NOT BE UNEQUALLY YOKED WITH UNBELIEVERS',
    page: '31',
  },
  {
    no: 19,
    title: 'Comparing Ancient Faith with Modern-Day Faith',
    marker: 'COMPARING ANCIENT FAITH WITH MODERN-DAY FAITH',
    page: '34',
  },
  {
    no: 20,
    title: "Tithes and Offerings: The Secret of a Believer's Blessing",
    marker: "TITHES AND SECRET OFFERINGS: THE SECRET OF A BELIEVER'S BLESSING",
    page: '35',
  },
  {
    no: 21,
    title: 'Having a Long Life on Earth',
    marker: 'HAVING A LONG LIFE ON EARTH',
    page: '37',
  },
  {
    no: 22,
    title: 'Lesson on Water Baptism',
    marker: 'LESSON ON WATER BAPTISM',
    page: '39',
  },
  {
    no: 23,
    title: 'Christian and Church Growth',
    marker: 'CHRISTIAN AND CHURCH GROWTH',
    page: '42',
  },
  {
    no: 24,
    title: 'Benefits of Holy Spirit Baptism in the Life of a Believer',
    marker: 'BENEFITS OF HOLY SPIRIT BAPTISM IN THE LIFE OF A BELIEVER',
    page: '44',
  },
  {
    no: 25,
    title: 'Fullness of the Power of the Holy Spirit',
    marker: 'FULLNESS OF THE POWER OF THE HOLY SPIRIT',
    page: '46',
  },
  {
    no: 26,
    title: 'Gifts of the Holy Spirit for the Growth of the Church',
    marker: 'GIFTS OF THE HOLY SPIRIT FOR THE GROWTH OF THE CHURCH AND THE CHURCH OF GOD',
    page: '48',
  },
  {
    no: 27,
    title: 'Gifts of Grace: The Gift of Dreams',
    marker: 'GIFTS OF GRACE: THE GIFT OF DREAMS',
    page: '50',
  },
  {
    no: 28,
    title: 'Inherent Talent: The Gift of Singing and Poetry',
    marker: 'INHERENT TALENT: THE GIFT OF SINGING AND POETRY',
    page: '51',
  },
  {
    no: 29,
    title: 'Gifts of Leadership, Guidance, and Overseeing',
    marker: 'GIFTS OF LEADERSHIP, GUIDANCE, AND OVERSEENG',
    page: '53',
  },
  {
    no: 30,
    title: 'Managing and Controlling Spiritual Gifts in the Church',
    marker: 'MANAGING AND CONTROLLING SPIRITUAL GIFTS IN THE CHURCH',
    page: '55',
  },
  {
    no: 31,
    title: 'How a Believer Should Conduct Themselves in the Church of God',
    marker: 'HOW A BELIEVER SHOULD CONDUCT THEMSELVES IN THE CHURCH OF GOD',
    page: '56',
  },
  {
    no: 32,
    title: 'Bearing the Fruit of the Spirit: Love, the First Fruit',
    marker: 'LOVE: THE FIRST FRUIT OF THE SPIRIT',
    page: '57',
  },
  {
    no: 33,
    title: 'Bearing the Fruit of Love',
    marker: 'LESSON ON THE FRUIT OF THE SPIRIT (2)',
    page: '59',
  },
  {
    no: 34,
    title: 'Joy: The Second Fruit of the Spirit',
    marker: 'JOY: THE SECOND FRUIT OF THE SPIRIT',
    page: '63',
  },
  {
    no: 35,
    title: 'Peace: The Third Fruit of the Spirit',
    marker: 'PEACE: THE THIRD FRUIT OF THE SPIRIT',
    page: '65',
  },
  {
    no: 36,
    title: 'Patience: The Fourth Fruit of the Spirit',
    marker: 'PATIENCE: THE FOURTH FRUIT OF THE SPIRIT',
    page: '67',
  },
  {
    no: 37,
    title: 'Gentleness: The Fifth Fruit of the Spirit',
    marker: 'GENTLENESS: THE FIFTH FRUIT OF THE SPIRIT',
    page: '68',
  },
  {
    no: 38,
    title: 'Goodness: The Sixth Fruit of the Spirit',
    marker: 'GOODNESS: THE SIXTH FRUIT OF THE SPIRIT',
    page: '69',
  },
  {
    no: 39,
    title: 'Faith/Faithfulness: The Seventh Fruit of the Spirit',
    marker: 'FAITH / FAITHFULNESS: THE SEVENTH FRUIT OF THE SPIRIT',
    page: '70',
  },
  {
    no: 40,
    title: 'Meekness: The Eighth Fruit of the Spirit',
    marker: 'MEEKNESS: THE EIGHTH FRUIT OF THE SPIRIT',
    page: '72',
  },
  {
    no: 41,
    title: 'Temperance/Self-Control: The Ninth Fruit of the Spirit',
    marker: 'TEMPERANCE / SELF-CONTROL: THE NINTH FRUIT OF THE SPIRIT',
    page: '73',
  },
  {
    no: 42,
    title: 'Soul Winning Among the Needy (Poor)',
    marker: 'SOUL WINNING AMONG THE NEEDY (POOR)',
    page: '74',
  },
  {
    no: 43,
    title: 'Soul Winning Among Professionals and Prominent People in Society',
    marker: 'SOUL WINNING AMONG PROFESSIONALS AND PROMINENT PEOPLE IN SOCIETY',
    page: '76',
  },
  {
    no: 44,
    title: 'Soul Winning Among Youths',
    marker: 'SOUL WINNING AMONG YOUTHS',
    page: '78',
  },
  {
    no: 45,
    title: 'Soul Winning Among Children',
    marker: 'SOUL WINNING AMONG CHILDREN',
    page: '80',
  },
  {
    no: 46,
    title: 'A Determination of Heart to Serve God to the End',
    marker: 'A DETERMINATION OF HEART TO SERVE GOD TO THE END',
    page: '82',
  },
  {
    no: 47,
    title: 'Caring for the Servants of God in the Church',
    marker: 'CARING FOR THE SERVANTS OF GOD IN THE CHURCH',
    page: '84',
  },
  { no: 48, title: 'Godly Sorrow', marker: 'GODLY SORROW', page: '87' },
  { no: 49, title: 'True Worshipper', marker: 'TRUE WORSHIPPER', page: '89' },
  {
    no: 50,
    title: 'A Christian Preserving Their Honor',
    marker: 'A CHRISTIAN PRESERVING THEIR HONOR',
    page: '91',
  },
  {
    no: 51,
    title: 'A Christian at Their Daily Place of Work',
    marker: 'A CHRISTIAN AT HIS DAILY PLACE OF WORK',
    page: '93',
  },
  {
    no: 52,
    title: 'Steps to Becoming Successful Through Breakthrough Work',
    marker: 'STEPS TO BECOMING SUCCESSFUL THROUGH BREAKTHROUGH WORK',
    page: '95',
  },
  {
    no: 53,
    title: "How a Believer Can Become Wealthy and Use Wealth According to God's Word",
    marker: "HOW A BELIEVER CAN BECOME WEALTHY AND WAYS TO USE WEALTH IN ACCORDANCE WITH GOD'S WORD",
    page: '97',
  },
  { no: 54, title: 'Becoming Free from Curses', marker: 'BECOMING FREE FROM CURSES', page: '99' },
  {
    no: 55,
    title: 'Keeping Quiet Time as a Child of God',
    marker: 'KEEPING QUIET TIME AS A CHILD OF GOD',
    page: '101',
  },
  {
    no: 56,
    title: 'Ways People Pray Improperly',
    marker: 'WAYS PEOPLE PRAY IMPROPERLY',
    page: '103',
  },
  {
    no: 57,
    title: 'The Work That a Righteous Prayer Does with Great Power',
    marker: 'THE WORK THAT A RIGHTEOUS PRAYER DOES WITH GREAT POWER',
    page: '105',
  },
  { no: 58, title: 'Prayer of Sorrow (Groaning Prayer)', marker: 'PRAYER OF SORROW', page: '107' },
  { no: 59, title: 'Midnight Prayer', marker: 'MIDNIGHT PRAYER', page: '109' },
  { no: 60, title: 'Mountain Prayer', marker: 'MOUNTAIN PRAYER', page: '110' },
  { no: 61, title: 'Benefits of Mountain Prayer', marker: 'BENEFITS OF MOUNTAIN PRAYER', page: '111' },
  {
    no: 62,
    title: 'Prayer of Intercession or Standing in the Gap',
    marker: 'PRAYER OF INTERCESSION OR STANDING IN THE GAP',
    page: '112',
  },
  {
    no: 63,
    title: "God's Call for Intercessors",
    marker: "GOD'S CALL FOR INTERCESSORS",
    page: '113',
  },
  {
    no: 64,
    title: 'Church Unity and Its Benefits',
    marker: 'CHURCH UNITY AND ITS BENEFITS',
    page: '114',
  },
  {
    no: 65,
    title: 'Prayer to Block Destructive Enemies',
    marker: 'PRAYER TO BLOCK DESTRUCTIVE ENEMIES',
    page: '116',
  },
]

function normalizeBibleReferences(text: string) {
  return text
    .replace(/\bOrin Dafidi\b\.?/gi, 'Psalms')
    .replace(/\bOrin\b\.?/gi, 'Psalms')
    .replace(/\bOwe\b\.?/gi, 'Prov.')
    .replace(/\bOnid\b\.?/gi, 'Dan.')
    .replace(/\bEks\b\.?/gi, 'Exod.')
    .replace(/\bIse\b\.?/gi, 'Acts')
    .replace(/\bEfe\b\.?/gi, 'Eph.')
    .replace(/\bJak\b\.?/gi, 'Jas.')
    .replace(/\bIjoh\b\.?/gi, '1 John')
    .replace(/\bZak\b\.?/gi, 'Zech.')
    .replace(/\bMik\b\.?/gi, 'Mic.')
    .replace(/\bMat\b\.?/gi, 'Matt.')
    .replace(/\bJoh\b\.?/gi, 'John')
    .replace(/\bJh\b\.?/gi, 'John')
    .replace(/\b1Oba\b\.?/gi, '1 Kings')
    .replace(/\b2Oba\b\.?/gi, '2 Kings')
    .replace(/\b1Kron\b\.?/gi, '1 Chron.')
    .replace(/\b2Kron\b\.?/gi, '2 Chron.')
    .replace(/\b1Sam\b\.?/gi, '1 Sam.')
    .replace(/\b2Sam\b\.?/gi, '2 Sam.')
    .replace(/\b1Joh\b\.?/gi, '1 John')
    .replace(/\b2Kor\b\.?/gi, '2 Cor.')
}

function cleanWholeText(text: string) {
  return normalizeBibleReferences(text)
    .replace(/\r\n/g, '\n')
    .replace(/Here is the English (?:transcription and )?translation of the text from the image:?\n?/gi, '')
    .replace(/Here is the English transcription and translation of the text from the image, organized by sections:?\n?/gi, '')
    .replace(/Page Number:\s*\d+/gi, '')
    .replace(/\((ADURA|IBEERE|IPE|APERE|OLORUN|AWON|ISOKAN|ANFANI|ALAGBAWI)[^)]+\)/gi, '')
    .replace(/6:13-ati igbagbore 18/g, '6:13-18')
    .replace(/dinku, aare kii mu\./gi, '')
    .replace(/Wo oro re ninu awon ese wonyi/gi, 'Consider the word in these verses:')
    .replace(/O si ti mba Olorun soro bi ore si ore/gi, 'He also spoke with God as a friend speaks with a friend')
}

function cleanLine(line: string) {
  const trimmed = normalizeBibleReferences(line)
    .replace(/^\s*[•o]\s*/, '')
    .replace(/^\s*[-–]\s*/, '')
    .replace(/\s+/g, ' ')
    .trim()

  if (!trimmed) return ''
  if (/^(?:\d+|[ivxlcdm]+)$/i.test(trimmed)) return ''
  if (/^Page Number:/i.test(trimmed)) return ''
  if (/^Here is the English/i.test(trimmed)) return ''
  if (/^QUESTIONS FOR ANSWERS$/i.test(trimmed)) return 'Questions for Discussion'
  if (/^QUESTIONS TO ANSWER$/i.test(trimmed)) return 'Questions for Discussion'
  if (/^QUESTION TIME$/i.test(trimmed)) return 'Questions for Discussion'

  if (trimmed.startsWith('Is there a child of God who prays and does not go past the ceiling')) {
    return 'If a child of God prays and the prayer seems not to rise, the believer should examine possible hindrances such as sin, wrong motives, unforgiveness, consulting agents of Satan, or praying outside the will of God. God still hears prayer, but the believer must repent, return to God, and stand on His word (Isa. 43:24-25; 45:2-7; 33:1-3; 49:24-26; Prov. 28:13-14; John 9:31; Jer. 33:1-3; John 14:14; 16:23-24; 2 Cor. 1:20; 1 John 5:14-15).'
  }

  if (trimmed.startsWith('A prayer that goes past the mountain top with just the mouth')) {
    return 'Prayer is not powerful merely because it is loud or emotional. If the heart is full of unrighteousness, lies, idolatry, hypocrisy, adultery, hatred, or violence against innocent people, God does not delight in such prayer (Isa. 59:1-6; 1:12-18; Prov. 1:24-28; 2 Tim. 2:19; Ps. 66:18; Jas. 4:1-4). The effective prayer is the prayer of a righteous person whose heart is aligned with God. God hears such prayer, changes stories for good, and brings light into dark situations (Isa. 66:2; Ps. 37:25-34; 92:12-15; 112:4-10; Prov. 10:27-32; Isa. 65:24; 1 John 5:14-15).'
  }

  if (trimmed.startsWith('That Moses split the red sea')) {
    return 'Moses, by faith, led Israel through the Red Sea, brought water from the rock, and stood before God on behalf of the people. He also spoke with God as a friend speaks with a friend (Heb. 11:24-29; Num. 16:1-6, 15-33).'
  }

  if (trimmed.startsWith('In this world, different creatures exist with the intent')) {
    return 'Destructive enemies are forces and people the devil uses to oppose faith, resist the work of God, weaken believers, and attack the progress of the church. They operate through darkness, conspiracy, intimidation, falsehood, and spiritual opposition. Prayer and fasting, joined with the unity of believers who have the Spirit of God, can defeat their works.'
  }

  return trimmed
}

function isBibleReferenceLine(line: string) {
  if (/^(Memory Verse|Bible Readings|Scripture References|Anchor|Hymn):/i.test(line)) {
    return true
  }

  const bibleBook =
    /\b(?:Gen|Exod|Lev|Num|Deut|Josh|Judg|Ruth|1 Sam|2 Sam|1 Kings|2 Kings|1 Chron|2 Chron|Ezra|Neh|Esth|Job|Ps|Psalm|Psalms|Prov|Eccl|Isa|Jer|Lam|Ezek|Dan|Hos|Joel|Amos|Obad|Jon|Mic|Nah|Hab|Zeph|Hag|Zech|Mal|Matt|Mk|Mark|Lk|Luke|John|Acts|Rom|1 Cor|2 Cor|Gal|Eph|Phil|Col|1 Thess|2 Thess|1 Tim|2 Tim|Tit|Philem|Heb|Jas|James|1 Pet|2 Pet|1 John|2 John|3 John|Jude|Rev)\.?\b/i
  const hasReference = bibleBook.test(line) && /\d/.test(line)
  const wordCount = line.split(/\s+/).length
  return hasReference && wordCount <= 24
}

function isSubheadingLine(line: string) {
  if (line.length > 110) return false
  if (/^\d+[.)]/.test(line)) return false
  const letters = line.replace(/[^A-Za-z]/g, '')
  if (letters.length < 5) return false
  return line === line.toUpperCase()
}

function formatManualLine(line: string) {
  if (isBibleReferenceLine(line) || isSubheadingLine(line)) {
    return `**${line}**`
  }
  return line
}

function lessonContent(source: string, lesson: Lesson, next?: Lesson) {
  const start = source.indexOf(lesson.marker)
  if (start < 0) return ['Content marker not found in the source manual.']
  const nextStart = next ? source.indexOf(next.marker, start + lesson.marker.length) : -1
  const raw = source.slice(start, nextStart > start ? nextStart : undefined)
  const withoutTitle = raw.replace(lesson.marker, '')
  const lines = withoutTitle
    .split('\n')
    .map(cleanLine)
    .filter(Boolean)
    .map(formatManualLine)

  return lines.length ? lines : ['No lesson body was found in the source manual.']
}

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size))
  }
  return chunks
}

function contentsSlides(): Slide[] {
  return chunk(LESSONS, 33).map((items, index) => ({
    id: `ssm-contents-${index + 1}`,
    layout: 'twoColumn',
    chapter: 'Contents',
    title: index === 0 ? 'Contents' : `Contents (${index + 1})`,
    subtitle: 'Corrected English table of contents with original page references',
    leftTitle: 'Lesson',
    rightTitle: 'Page',
    leftBullets: items.map((lesson) => `${lesson.no}. ${lesson.title}`),
    rightBullets: items.map((lesson) => lesson.page ?? ''),
  }))
}

function buildLessonSlides(): Slide[] {
  const source = cleanWholeText(manualMarkdown)
  return LESSONS.map((lesson, index) => ({
    id: `ssm-lesson-${lesson.no.toString().padStart(2, '0')}`,
    layout: 'bullets',
    chapter: `Lesson ${lesson.no}`,
    title: lesson.title,
    bullets: lessonContent(source, lesson, LESSONS[index + 1]),
  }))
}

export const sundaySchoolManual: PresentationState = {
  currentIndex: 0,
  seedRevision: SUNDAY_SCHOOL_MANUAL_REVISION,
  meta: {
    brand: '',
    author: '',
    degree: 'Sunday School Manual',
    date: 'November 2026',
    kind: 'document',
    editorView: 'document',
    numberedSections: false,
    documentFont: 'Calibri',
    language: 'en',
    subject: SUNDAY_SCHOOL_MANUAL_TITLE,
  },
  slides: [
    {
      id: 'ssm-title',
      layout: 'title',
      title: 'Translated Sunday School Manual',
      subtitle:
        'English transcription, corrected from the Yoruba manual and cleaned for DOCX export',
      notes:
        'Each lesson is structured as a separate document section so DOCX export starts each lesson on a new page.',
    },
    ...contentsSlides(),
    ...buildLessonSlides(),
  ],
}
