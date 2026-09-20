import { DEFENSE_THEME } from '../theme/defenseTheme'
import type { PresentationState, Slide } from '../types/slide'

export const DEFENSE_QA_DOCUMENT_ID = 'defense-qa-document'
export const DEFENSE_QA_DOCUMENT_TITLE =
  'Defense Panel Q&A — Critical Questions (Professor Level)'

export const DEFENSE_QA_SLIDES_ID = 'defense-qa-slides'
export const DEFENSE_QA_SLIDES_TITLE =
  'Defense Panel Q&A Slides — Critical Questions'

export const DEFENSE_QA_DOCUMENT_REVISION = 4
export const DEFENSE_QA_SLIDES_REVISION = 4

interface QaItem {
  id: string
  category: string
  question: string
  answer: string[]
  source: string
}

/**
 * Sixteen committee-level questions drawn from tensions inside this proposal.
 * Quality over volume: each item is a pushback a professor who has read
 * Chapters One–Three would actually raise.
 */
const QA_ITEMS: QaItem[] = [
  {
    id: 'qa-01',
    category: '1. Problem, Gap & Contribution',
    question:
      'Your problem says executives have not strategically integrated IT. Chapter Two then reports pockets of digital titles, social media, SEO, OkadaBooks, and hybrid print–digital practice. Is the problem overstated?',
    answer: [
      'The problem is not that Nigerian publishers have zero technology. Many already use WhatsApp, websites, social media, email, and in some cases e-books or platforms such as OkadaBooks.',
      'The problem is that this use is usually shallow. Tools are used for publicity and informal talk, not as a planned system for managing schools, libraries, bookstores, and government buyers as B2B accounts.',
      'Chapter One is clear on this: even where digital tools exist, they substitute for customer relationship management and structured procurement engagement. That is why I use the word “strategically integrated,” not “adopted.”',
      'Ifeduba (2020) showed low digital-publishing readiness. Afolabi and Zolkepli (2023b, 2023c) showed social media and weak big-data practice. Those studies count tools. They do not show mature CRM, partner systems, or firms that can compete inside digital procurement portals.',
      'Chapter Two also admits pockets of success. I do not hide them. I treat them as exceptions that the study must explain: why some firms experiment while most still sell through visits, calls, and personal networks.',
      'So the problem is not overstated if it is read correctly. The gap is between having digital tools and using them as B2B marketing strategy. That gap is what the two research questions explore.',
    ],
    source:
      'Chapter One — Problem Statement (lines 115–117); Problem Background (line 111); Chapter Two — Exceptions and Emerging Successes (lines 262–265)',
  },
  {
    id: 'qa-02',
    category: '1. Problem, Gap & Contribution',
    question:
      'Ayawei et al. (2023) already applied TOE to Nigerian B2B SMEs. Ifeduba surveyed 109 publishers. Why is a six-case qualitative study a doctoral contribution and not a smaller repeat?',
    answer: [
      'Ayawei et al. (2023) used TOE in a quantitative two-country study of B2B SMEs. That work is useful. It tells us which factors carry more weight in Nigeria versus South Africa. It does not tell us how a publishing executive thinks when a school buyer, piracy, and a weak power supply sit in the same decision.',
      'Publishing is not a generic SME. The product is intellectual and cultural, not a simple physical good. The main buyers are institutions. Sales cycles are long and rest on relationships. What works for general e-commerce SMEs cannot be copied straight into this industry. That is the contextual gap in Chapter Two.',
      'Ifeduba (2020) surveyed 109 Nigerian publishing firms on digital-publishing readiness. That is a map of how common tools are. A survey can show a low score. It cannot explain why an executive still refuses a portal, or why another executive uses WhatsApp as if it were a CRM system.',
      'My contribution is the missing “why” and “how.” I study bounded firms as cases. I listen to executives, then I check what the firm publishes about itself, then I check what the institutional market actually requires.',
      'I also add two lenses Ayawei did not use for this industry: relationship marketing (trust and commitment) and institutional theory (rules, norms, and shared beliefs). Together they explain not only adoption, but whether IT helps or hurts the B2B relationship.',
      'Six qualitative cases are smaller in number, but deeper in explanation. Doctoral value here is not a bigger sample. It is a clearer account of executive reasoning inside this specific industry.',
    ],
    source:
      'Chapter Two — Contextual Gap (lines 246–247); Methodological Gap (lines 248–249); Explanatory Gap (lines 250–253); Significance (line 145)',
  },
  {
    id: 'qa-03',
    category: '1. Problem, Gap & Contribution',
    question:
      'Your applied-knowledge gap promises a move from diagnosis to solution. Your purpose only explores perceptions. How does a perception study produce solutions a publisher can use?',
    answer: [
      'I agree that “explore perceptions” can sound soft. The purpose uses that language because this is qualitative work: I cannot honestly promise a tested software package before data exist.',
      'The applied gap in Chapter Two is still real. Past studies name cost, skills, piracy, and infrastructure. They rarely show what publishers actually tried, what happened, and what they would do next time.',
      'The interview protocol is built for that. Question 5 asks for a specific occasion when a digital tool shaped a sales decision. Question 12 asks how the firm responded to challenges and with what results. Question 13 asks what one change would make IT more useful. That is practice, not only feeling.',
      'A publisher MD can use the findings as peer lessons: which integration steps similar firms attempted, where they stalled, and how they protected client trust while trying digital tools.',
      'I will not claim a randomised intervention or a guaranteed return on CRM spend. I will claim transferable, context-based guidance. In qualitative case research, that is the honest form of “solution.”',
      'Chapter Four and Five will turn those accounts into clear implications for publishers and for policy. The perception study is the method. The usable output is the pattern of what worked, what failed, and why.',
    ],
    source:
      'Chapter Two — Applied Knowledge Gap (lines 254–261); Appendix A (lines 414–427); Significance — Practice (line 146)',
  },
  {
    id: 'qa-04',
    category: '1. Problem, Gap & Contribution',
    question:
      'RQ1 only asks how executives describe IT’s role. That is a description question. Where is the doctoral-level analytic claim?',
    answer: [
      'RQ1 is written as a “how do they describe” question because qualitative work must start from the participants’ own words. That does not mean the dissertation stops at description.',
      'The doctoral claim is in the analysis, not in the wording of RQ1. I will interpret those descriptions through TOE, through trust and commitment, and through the three institutional pillars. The question opens the door. The frameworks do the thinking.',
      'RQ2 then asks what challenges executives face when they try to integrate IT. That is not a complaint list. Chapter Two already says the real gap is how technology, organisation, and environment combine — for example, how fear of piracy changes spending and then blocks an e-commerce platform.',
      'The analytic plan is set in Chapter Three: first a story of each firm, then comparison across firms, using replication logic. I will look for where the three TOE contexts meet inside one case, not three separate buckets.',
      'So the doctoral product is explanation: why IT plays the role it does in B2B marketing in this industry, and which combinations of conditions stall integration. Chapter Four will present that argument with evidence, not a catalogue of quotations.',
    ],
    source:
      'Chapter One — Research Questions (lines 126–129); Chapter Two — How This Study Addresses the Gap (line 261); Chapter Three — Data Analysis (lines 299–301)',
  },
  {
    id: 'qa-05',
    category: '2. Theory',
    question:
      'You stack TOE, relationship marketing, and institutional theory. Show us this is one design, not three decorative lenses.',
    answer: [
      'I am not building three separate studies. I am using three tools that answer three different parts of one problem.',
      'TOE is the main frame. It asks: given this technology, this firm, and this market, why does adoption and use stall or move? That matches the problem of low strategic IT integration.',
      'Relationship marketing is needed because Nigerian book sales to schools and bookstores run on trust and long-term commitment. TOE can say a tool was adopted. It cannot by itself say whether that tool helped or hurt the client relationship. Morgan and Hunt (1994) put trust and commitment at the centre of B2B exchange. That is why interview question 6 exists.',
      'Institutional theory is needed because TOE’s “environment” box is wide. Scott (1995) splits environment into three pillars I can actually observe: regulative (Copyright Act 2022, NCC, procurement rules), normative (Nigerian Publishers Association and trade practice), and cultural-cognitive (the shared belief that books are properly sold through personal relationships and physical inspection).',
      'Weerakkody et al. (2009) already argued that institutional theory often needs to be combined with other models. Table 1 in Chapter Two shows how each pillar becomes interview and document questions. That is operational design, not decoration.',
      'In short: TOE organises the decision. Relationship marketing explains the B2B outcome. Institutional theory specifies the outside pressure. RQ1 uses TOE plus trust. RQ2 uses all three TOE contexts plus the three pillars.',
    ],
    source:
      'Chapter Two — Integration of the Three Frameworks (lines 183–184); Table 1 (lines 196–201); Theoretical Framework (lines 173–182)',
  },
  {
    id: 'qa-06',
    category: '2. Theory',
    question:
      'Vial (2019) and Kraus et al. (2022) argue that digital transformation makes the adoption-versus-use split obsolete. Why is a 1990 adoption framework still your main theory?',
    answer: [
      'Vial and Kraus are right about firms that have already rebuilt processes around digital infrastructure. That is the third wave of the literature I review in Chapter Two.',
      'Nigerian book publishing is not in that wave. The local evidence shows shallow use, low digital-publishing readiness, and weak analytics. The problem is incomplete integration, not a firm that has already transformed and now needs a new theory of continuous change.',
      'TOE still fits this stage. It was built to explain why a firm adopts and uses an innovation under technological, organisational, and environmental conditions. That is exactly the problem on the table.',
      'I do not use TOE as a 1990 checklist of “adopt or not.” Later TOE work already looks at how deeply e-business is used after first adoption (Zhu and Kraemer, 2005). Awa et al. (2017) also warn that the three contexts must be treated as related, not as three separate lists. My analysis plan follows that warning.',
      'If the cases later show true transformation — new processes, new relationships, new industry structure — I will say so and I will use the digital-transformation literature to interpret it. I will not force a transformation story onto a sector that the evidence currently describes as stalled and hybrid.',
    ],
    source:
      'Chapter Two — opening literature phases (lines 164–165); TOE Framework (lines 173–175); Technological Context (lines 222–223)',
  },
  {
    id: 'qa-07',
    category: '2. Theory',
    question:
      'Ayawei et al. found internal organizational factors were not statistically significant. If environment swamps the firm, why interview executives about leadership, skills, and resources?',
    answer: [
      'Ayawei et al. (2023) found that internal organisational factors were not statistically significant in explaining IT adoption, which suggests the outside environment may overpower the firm. That is an important quantitative signal. It is not the end of the question.',
      'A survey can show that “organisation” did not reach significance. It cannot show how an executive lives that pressure: as fate, as something to work around, or as a reason to stay with personal selling.',
      'Chapter Two already records a second reading. Kalmykov (2024) and Olofinlua (2021) show hybrid print-and-digital practice in hard conditions. Some publishers do not freeze. They mix old and new methods. Interviews are the right tool to see when that agency appears and when it does not.',
      'I still ask about leadership, skills, and money because those are how environment enters the firm. Piracy is outside. The decision to stop spending on a platform is inside. The study needs both.',
      'If the cases later show that environment explains almost everything and executive choice explains almost nothing, I will report that. It would extend Ayawei with a qualitative mechanism. It would not be a failed study.',
      'Maximum variation by firm size and digital-adoption level is there so I can see whether some firms still act despite the same hostile environment.',
    ],
    source:
      'Chapter Two — Explanatory Gap (lines 252–253); Environmental Context (lines 234–235); Organizational Context (line 229)',
  },
  {
    id: 'qa-08',
    category: '2. Theory',
    question:
      'Uguru & Umobong want DRM to fight piracy. Afolabi & Zolkepli say DRM scares legitimate B2B partners. How will your analysis treat a technology that both protects and damages the relationship?',
    answer: [
      'This contradiction is one reason the study exists. I do not assume that more technology is always better for B2B marketing.',
      'Uguru and Umobong (2022) treat piracy as a legal and technical failure, so stronger digital rights management looks like the fix. Afolabi and Zolkepli (2023c) show the other side: in a low-trust setting, the same lock can frighten legitimate schools, bookstores, and distributors who feel watched or blocked.',
      'In simple terms: the tool that protects the book can also damage the relationship that sells the book. That is a lived problem for Nigerian publishers, not a side note.',
      'Relationship marketing is in the design so that harm to trust is a possible finding, not a leftover. Morgan and Hunt (1994) put trust and commitment at the centre of B2B exchange. If a digital control reduces trust, the “successful” technology has failed as marketing strategy.',
      'The instruments follow that logic. Appendix A question 6 asks how digital tools affect client trust. Question 11 asks about piracy, regulation, and the wider environment. Document review also notes piracy response and relationship signals.',
      'In analysis I will keep both readings open. I will not force DRM into “good” or “bad.” I will show how executives judge which technologies are safe enough to use with institutional clients.',
    ],
    source:
      'Chapter Two — Critical Synthesis (line 243); Relationship Marketing Theory (lines 176–178); Appendix A Q6 and Q11 (lines 417, 423)',
  },
  {
    id: 'qa-09',
    category: '3. Design & Evidence',
    question:
      'You vary cases by segment, size, and digital adoption — three axes, about six firms. Can six cases actually carry maximum variation, or will you under-sample one axis?',
    answer: [
      'Six firms cannot fill a full three-by-three-by-three grid. I do not claim a factorial experiment. Maximum variation here means contrast, not every cell filled.',
      'The three axes come from the literature and from TOE. Segment matters because educational, academic, and general-interest firms face different buyers. Size matters because resources shape what IT a firm can buy and staff. Adoption level matters because a fully analogue firm and a platform user will talk about IT in different ways.',
      'I will recruit for spread across those axes and then report, in thick description, where the sample is strong and where it is thin. Readers can then judge transferability. That is more honest than pretending six cases cover every combination.',
      'The trade-off is deliberate. Two or three executives in each firm give me a check inside the case. A sample of 30 firms with one short interview each would be wider and much thinner. This study needs depth because the questions are about reasoning, not counts.',
      'If one axis is weakly covered after recruitment, I will say so as a limitation and, if needed, add a case rather than hide the gap. The sample range is already written as flexible for that reason.',
    ],
    source:
      'Chapter Three — Target Population and Sampling (lines 280, 284); Delimitations (lines 304–305)',
  },
  {
    id: 'qa-10',
    category: '3. Design & Evidence',
    question:
      'You match external procurement records to cases by market segment, not by named buyer. How is that triangulation of a specific firm rather than general industry context?',
    answer: [
      'I cannot match records to a named school or a named procurement officer. Appendix C forbids that because it would identify people and, in some cases, expose commercial detail. Matching by market segment is an ethical choice, not a shortcut.',
      'Triangulation is still about the firm. For each case I ask: in this segment, what do tenders, vendor lists, and agency rules require of a supplier? Then I ask: do this firm’s interviews and its own documents show that it can meet those requirements?',
      'Appendix C is built for that comparison. Items 9 and 10 keep two things apart: first, a plain description of the requirement; second, whether the matched case shows the capability. I do not judge the firm at the moment I copy the tender. That stops me mixing description with opinion too early.',
      'So the external record is not “general Nigeria context.” It is the institutional door this type of publisher must walk through. The case-level finding is the gap between that door and what the firm actually does and says.',
      'I accept the limit: I will not observe a live negotiation with that exact buyer. Chapter Three names this. I reduce it by asking for recent specific episodes in interviews and by testing those stories against both classes of documents.',
    ],
    source:
      'Chapter Three — Sampling of external records (lines 282–283); Appendix C (lines 445–458); Limitations (line 307)',
  },
  {
    id: 'qa-11',
    category: '3. Design & Evidence',
    question:
      'You say coding is inductive, yet TOE domains already structure the interview guide and “inform” analysis. Is this theory-driven coding dressed as induction?',
    answer: [
      'This is a fair tension. The interview guide is organised with TOE in mind, and Chapter Three says coding is inductive but theoretically informed. I need to be clear about what that means in practice.',
      'A sensitizing frame is not a closed codebook. TOE tells me not to forget technology, organisation, and environment. It does not tell me the theme names in advance. Codes can fall outside the three boxes. If they do, they stay in the analysis.',
      'Braun and Clarke (2021) allow theory to inform reflexive thematic analysis without turning it into a tick-list. That is the approach I state: cover the whole dataset first, then use TOE as an organising lens, not as a prison.',
      'The test of honesty is the explanatory gap I claimed. If I only produce three separate lists — tech problems, staff problems, piracy problems — I have failed my own design. After coding, I must look for meeting points inside one case: for example, piracy fear (environment) changing the IT budget (organisation) and blocking a platform (technology).',
      'The audit trail will show codes that did not fit TOE, theme changes, and why. Peer debriefing is there to catch me if I start forcing every quote into T, O, or E.',
    ],
    source:
      'Chapter Three — Data Analysis (lines 299–301); Instrumentation (line 290); Chapter Two — Explanatory Gap (line 261)',
  },
  {
    id: 'qa-12',
    category: '3. Design & Evidence',
    question:
      'The case is the firm, but data come from two or three executives. Whose perception becomes “the firm’s” strategy if they disagree?',
    answer: [
      'The case is the publishing firm as a bounded organisation. The people I interview are not the case. They are informants inside the case. That distinction matters when they disagree.',
      'Disagreement is evidence. A managing director, a sales director, and an IT lead often see the same WhatsApp group or the same website in different ways. One may call it strategy. Another may call it a workaround. Averaging them into one “firm voice” would hide the organisational fact I am trying to study.',
      'Within-case analysis will report where accounts meet and where they split. Then I will check both against firm-produced documents: catalogues, websites, platform descriptions. Documents show how the organisation presents itself, which may support one executive more than another.',
      'External procurement records add a third check: not “who is right,” but whether the firm, as an organisation, can meet what the market requires.',
      'The case narrative will therefore say: these people agreed on X; they split on Y; the documents support Z. That is a stronger picture of strategy than a single interview treated as the whole firm.',
    ],
    source:
      'Chapter Three — Sampling (line 280); Data Analysis (line 301); Appendix B corroboration notes (line 442)',
  },
  {
    id: 'qa-13',
    category: '4. Positionality & Rival Readings',
    question:
      'You name Accessible Publishers in the environmental chapter and you are a visible industry leader. How do we trust case selection and interpretation are not about your firm or your view of “proper” IT?',
    answer: [
      'The mention of Accessible Publishers in Chapter Two is an industry example of competing with street piracy in cities such as Ibadan, Lagos, and Onitsha. It is not listed as a case in this proposal. I will not treat my own organisation as a hidden sample without IRB and committee disclosure.',
      'I am a visible industry leader. That helps access and language. It also creates risk: people may tell me what they think I want to hear, or they may fear criticising practices linked to my network. Chapter Three names this as positionality and as a limitation. I do not deny it.',
      'Ethical controls are practical. I will not recruit anyone over whom I hold formal authority. Gatekeepers may open the door; they may not watch who says yes. Each firm gives written site permission. People and firms get codes, not names.',
      'Analytic controls are also practical. Before each interview I will write my assumptions about that firm and role. Before coding I will read those notes again. I keep an audit trail of coding decisions. I use peer debriefing so another reader can challenge my first interpretation.',
      'Case selection follows maximum variation — segment, size, and digital adoption — not “firms I already know well.” If a case comes through my network, I will record that in the audit trail so the committee can see the path.',
      'The aim is simple: industry knowledge should help me understand the talk. It should not decide the findings before the data speak.',
    ],
    source:
      'Chapter Two — Environmental Context (line 232); Chapter Three — Positionality (lines 314–315); Ethical Considerations (lines 286–287)',
  },
  {
    id: 'qa-14',
    category: '4. Positionality & Rival Readings',
    question:
      'Adam (2021) treats informal book networks as an institutional achievement. Shercliff (2015) treats them as failure. If IT bypasses those networks, does it create value or destroy it?',
    answer: [
      'The literature does not agree, and I will not pick a winner before I talk to executives. That disagreement is a reason for qualitative cases, not a problem to sweep aside.',
      'Adam (2021), writing on the Kano book market, treats informal networks as a working institution: reputation, repeated exchange, and inherited norms that actually move books. Shercliff (2015) sees informality more as a sign that the formal trade is weak. Olofinlua (2021) sits in the middle: digital platforms can formalise some ties without wiping them out.',
      'This matters for IT. If informal networks are the real market institution, a digital system that skips the bookseller, the distributor, or the trusted middle person can cut access and break trust. Then “modern” IT would destroy value.',
      'If informal networks are mainly a symptom of weak formal channels, then digital systems that make orders, payment, and records clearer can create value. Then IT is repair, not attack.',
      'No study I reviewed asked publishing executives how they themselves see that trade-off. That is what this study adds. Interview questions on how they reach institutional clients, how digital tools change trust, and what they would change, are designed to hear their reading, not mine.',
      'Analysis will keep both readings open until the data decide, including differences by segment — for example educational publishing versus more informal general-interest channels.',
    ],
    source:
      'Chapter Two — Historical Overview (lines 215–216, 220); Relationship Marketing (line 214)',
  },
  {
    id: 'qa-15',
    category: '4. Positionality & Rival Readings',
    question:
      'Eze et al. say the barrier is staff skill. Barkley & Jokonya say the barrier is executive resistance to losing gatekeeper control. How will you tell those apart in interviews with the executives themselves?',
    answer: [
      'This is a known split in the literature I review. Eze et al. (2020) and others put the block in staff skill. Barkley and Jokonya (2024) put the block in the executive tier: digital systems can look like a threat to control and to the old gatekeeper role. Sadiq et al. (2022) add a third picture: firms buy hardware and software, but daily work stays paper-based. Tools exist; use does not.',
      'If I only interview senior executives, I may hear “my staff cannot do this.” That may be true. It may also be a convenient story. I have to design against that.',
      'Appendix A question 10 splits the organisational side on purpose: skills, finance, leadership, and staff attitudes are separate probes, not one lump called “organisation.” Question 8 asks for challenges in their own words first, so I do not put the skill story in their mouth.',
      'Two or three people per firm give a second voice. Where a digital or IT director exists, that person can confirm or contradict the MD’s account of “no skills.”',
      'Documents help again. If a firm already paid for a platform that sits unused, the story is less “we could not afford training” and more leadership, culture, or a tool that did not fit the relationship. That is the stagnation pattern Sadiq et al. described.',
      'Cross-case comparison by size may also help. Skill shortages may dominate in smaller houses. Leadership resistance may show more clearly in larger houses. If the two stay mixed in real life, I will say they operate together. That is still a useful finding for practice.',
    ],
    source:
      'Chapter Two — Critical Synthesis (lines 241–243); Appendix A Q10 (line 422); Organizational Context (lines 227–229)',
  },
  {
    id: 'qa-16',
    category: '4. Positionality & Rival Readings',
    question:
      'What finding would force you to revise the problem statement? If you cannot name disconfirming evidence, you are confirming a story you already believe.',
    answer: [
      'I can name disconfirming evidence. If I could not, the committee would be right to say I am only confirming a story I already believe.',
      'First: if most case firms show integrated CRM, digital procurement participation, and structured account systems in interviews and in documents, then the problem statement is too broad. I would have to narrow it to a lagging segment, not “the industry.”',
      'Second: if external procurement records from 2015 onward still show mostly analogue buying — paper tenders, personal vendor lists, little digital registration — then my claim that institutional procurement is digitizing is too strong and must be reduced.',
      'Third: if executives, with document support, show that digital tools steadily raise trust with schools, libraries, and bookstores, then the caution that IT may harm relationships must be revised. Relationship marketing would then read as “tools support trust,” not “tools may threaten trust.”',
      'Fourth: if TOE factors never meet in the cases — if technology, organisation, and environment stay separate stories — then my explanatory-gap claim is weak and I must say so.',
      'Confirmability in Chapter Three requires that I look for these patterns, keep memos on negative cases, and ask about failures as well as success. I will not protect the problem statement from the data.',
    ],
    source:
      'Chapter Three — Confirmability (line 313); Problem Statement (lines 115–117); Technological Context (lines 223–224)',
  },
]

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

function qaDocumentSlide(item: QaItem): Slide {
  return {
    id: item.id,
    layout: 'bullets',
    chapter: item.category,
    title: item.question,
    icon: 'CircleHelp',
    bullets: [
      ...item.answer.map((line) => `Answer: ${line}`),
      `Where in project: ${item.source}`,
    ],
  }
}

function qaPresentationSlide(item: QaItem): Slide {
  return {
    id: `slide-${item.id}`,
    layout: 'bullets',
    chapter: item.category,
    title: item.question,
    icon: 'MessageCircle',
    bullets: item.answer,
    footer: `Source: ${item.source}`,
    notes: `${item.question}\n\n${item.answer.join(' ')}\n\nReference: ${item.source}`,
  }
}

const categories = [...new Set(QA_ITEMS.map((item) => item.category))]

function buildDocumentSlides(): Slide[] {
  const slides: Slide[] = [
    {
      id: 'qa-doc-title',
      layout: 'title',
      title: 'Defense Panel Q&A — Critical Questions',
      subtitle:
        '16 professor-level probes drawn from this proposal\nIT in B2B Marketing — Nigerian Book Publishing',
      footer: `${DEFENSE_THEME.candidate} · ${DEFENSE_THEME.university} · ${DEFENSE_THEME.date}`,
      notes:
        'Quality over volume. Each question presses a tension inside Chapters One to Three.',
    },
    {
      id: 'qa-doc-intro',
      layout: 'bullets',
      chapter: 'How to use this guide',
      title: 'How to Use This Guide',
      icon: 'BookOpen',
      bullets: [
        '16 questions only. Each one is a likely committee pushback on this study, not a summary of the proposal.',
        'The four groups: problem and contribution; theory; design and evidence; positionality and rival readings.',
        'Answers are full and in simple English so you can speak to the panel without sounding thin. Each item still points to the chapter in project.md.',
        'Practice each answer in full. Use simple English. Point to the chapter if the panel asks where this is written.',
      ],
    },
  ]

  for (const category of categories) {
    const items = QA_ITEMS.filter((item) => item.category === category)
    slides.push(
      sectionSlide(`qa-doc-sec-${items[0].id}`, category.replace(/^\d+\.\s*/, ''), category, {
        subtitle: `${items.length} questions`,
      }),
    )
    slides.push(...items.map(qaDocumentSlide))
  }

  return slides
}

function buildPresentationSlides(): Slide[] {
  const slides: Slide[] = [
    {
      id: 'qa-slide-title',
      layout: 'title',
      title: 'Defense Panel Q&A — Critical Questions',
      subtitle:
        '16 Professor-Level Probes & Answers\nPreliminary Doctoral Defense Preparation',
      footer: `${DEFENSE_THEME.candidate} · DBA Preliminary Defense · ${DEFENSE_THEME.date}`,
      notes:
        'Sixteen questions drawn from tensions in this proposal. Footer shows where the answer lives in the dissertation.',
    },
    {
      id: 'qa-slide-roadmap',
      layout: 'cards',
      chapter: 'Overview',
      title: 'What This Panel Will Test',
      bullets: [
        'Problem vs pockets of digital success already in the literature',
        'Three theories as one design, not decoration',
        'Six cases, three variation axes, and document triangulation',
        'Insider status, rival readings, and what would disconfirm the problem',
      ],
      notes: 'Four groups of four questions, all grounded in project.md.',
    },
  ]

  for (const category of categories) {
    const items = QA_ITEMS.filter((item) => item.category === category)
    slides.push(
      sectionSlide(`qa-slide-sec-${items[0].id}`, category.replace(/^\d+\.\s*/, ''), category, {
        subtitle: `${items.length} questions`,
      }),
    )
    slides.push(...items.map(qaPresentationSlide))
  }

  slides.push({
    id: 'qa-slide-closing',
    layout: 'closing',
    title: 'Defend the Tensions',
    subtitle:
      'The hard questions are already in your chapters. Answer them in plain language and point to the page.',
    footer: `${DEFENSE_THEME.candidate} · Westcliff University · ${DEFENSE_THEME.date}`,
    notes: 'Invite questions. Pause before answering.',
  })

  return slides
}

export const DEFENSE_QA_DOCUMENT_META: PresentationState['meta'] = {
  brand: DEFENSE_THEME.university,
  author: DEFENSE_THEME.candidate,
  degree: DEFENSE_THEME.degree,
  date: DEFENSE_THEME.date,
  kind: 'document',
  editorView: 'document',
  documentFont: 'Arial',
  subject: 'Defense Panel Q&A — Critical Questions',
}

export const DEFENSE_QA_SLIDES_META: PresentationState['meta'] = {
  brand: DEFENSE_THEME.university,
  author: DEFENSE_THEME.candidate,
  degree: DEFENSE_THEME.degree,
  date: DEFENSE_THEME.date,
  kind: 'presentation',
}

export const defenseQaDocument: PresentationState = {
  slides: buildDocumentSlides(),
  currentIndex: 0,
  seedRevision: DEFENSE_QA_DOCUMENT_REVISION,
  meta: DEFENSE_QA_DOCUMENT_META,
}

export const defenseQaSlides: PresentationState = {
  slides: buildPresentationSlides(),
  currentIndex: 0,
  seedRevision: DEFENSE_QA_SLIDES_REVISION,
  meta: DEFENSE_QA_SLIDES_META,
}
