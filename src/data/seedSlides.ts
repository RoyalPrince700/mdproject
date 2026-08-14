import { DEFENSE_THEME } from '../theme/defenseTheme'
import type { PresentationState, Slide } from '../types/slide'

export const PRESENTATION_META = {
  brand: 'Westcliff University',
  author: DEFENSE_THEME.candidate,
  degree: DEFENSE_THEME.degree,
  date: DEFENSE_THEME.date,
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

function cardSlide(
  id: string,
  title: string,
  chapter: string,
  bullets: string[],
  extra?: { subtitle?: string; notes?: string },
): Slide {
  return {
    id,
    layout: 'cards',
    title,
    chapter,
    subtitle: extra?.subtitle,
    bullets,
    notes: extra?.notes,
  }
}

/**
 * Verbatim slide content from slidedeck.md (slides 1–34).
 * Layouts follow the SlideRenderer types in that file.
 */
export const seedSlides: Slide[] = [
  {
    id: 'slide-01',
    layout: 'title',
    title:
      'The Role of Information Technology Use\nin B2B Marketing Strategies',
    subtitle:
      'A Qualitative Multiple-Case Study of the Nigerian Book Publishing Industry',
    footer: 'Preliminary Doctoral Defense · Chapters One to Three',
    notes:
      'Good morning, Chair, committee members, and faculty. My name is Gbadega Adedapo. I am a Doctor of Business Administration candidate at Westcliff University. Thank you for the opportunity to present this preliminary doctoral defense of Chapters One to Three. The dissertation is titled The Role of Information Technology Use in B2B Marketing Strategies: A Qualitative Multiple-Case Study of the Nigerian Book Publishing Industry.',
  },
  cardSlide(
    'slide-02',
    'Defense Roadmap',
    'Preliminary Defense',
    [
      'Introduction and problem background',
      'Problem statement, purpose of the study, and research questions',
      'Theoretical framework',
      'Gap in the literature',
      'Research method and design, data collection, and data analysis',
      'Ethics, trustworthiness, significance, and closing',
    ],
    {
      subtitle: 'Chapters One to Three',
      notes:
        'This defense covers Chapters One to Three. I will begin with the introduction and problem background, then present the problem statement, the purpose of the study, and the research questions. I will then set out the theoretical framework and the gap in the literature. After that I will explain the research method and design, data collection, and data analysis. I will close with ethics, trustworthiness, the significance of the study, and an invitation for questions.',
    },
  ),
  sectionSlide('slide-03', 'Introduction', 'Chapter One', {
    notes:
      'I begin with Chapter One, the introduction to the study.',
  }),
  cardSlide('slide-04', 'Introduction', 'Chapter One', [
    'Information technology (IT) has transformed the publishing business across the globe, especially in the field of business-to-business (B2B) marketing where personal, paper-based sales and distribution processes are being replaced by digital channels (Kalmykov, 2024; Söilen, 2024).',
    "However, the use of IT in publisher's B2B marketing in Nigeria has been inconsistent and superficial: while Nigeria has been improving mobile and internet infrastructure and has enacted some national digital policies, the majority of book publishers still rely on personal visits, telephone calls, and informal networks for accessing the institutions on which they rely for their revenues (Afolabi & Zolkepli, 2023c; International Trade Administration, 2024; Owolabi, 2024).",
    'The study focused on the role of IT in B2B marketing strategies and the problems of incorporating IT into B2B marketing strategies, the contrast between the global digital imperative, and local practice in marketing.',
  ], {
    notes:
      "Information technology has transformed the publishing business across the globe, especially in B2B marketing, where personal, paper-based sales and distribution processes are being replaced by digital channels. In Nigeria, however, the use of IT in publishers' B2B marketing has been inconsistent and superficial. Although mobile and internet infrastructure have improved and some national digital policies are in place, most book publishers still rely on personal visits, telephone calls, and informal networks to reach the institutions that generate their revenues. This study focuses on the role of IT in B2B marketing strategies and the problems of incorporating IT into those strategies. It examines the contrast between the global digital imperative and local marketing practice.",
  }),
  sectionSlide('slide-05', 'Problem Background', 'Chapter One', {
    notes:
      'I now turn to the problem background. Chapter One organizes this around four challenges facing the Nigerian book publishing industry.',
  }),
  {
    id: 'slide-06',
    layout: 'framework',
    title: 'Problem Background',
    subtitle: 'Four challenges — Chapter One',
    chapter: 'Chapter One',
    frameworkBlocks: [
      {
        label: '1. SHALLOW APPLICATION',
        icon: 'Laptop',
        text: 'The shallow application of IT in B2B marketing is the first challenge for the Nigerian book publishing industry. Even where digital tools have been adopted, publishers tend to use them informally for communication and general visibility rather than as a structured system of client management.',
      },
      {
        label: '2. BOOK PIRACY',
        icon: 'Ban',
        text: 'The second is book piracy, which diminishes the value of publisher revenues, which would otherwise be spent on technology and market development.',
      },
      {
        label: '3. INFRASTRUCTURE DEFICIT',
        icon: 'WifiOff',
        text: 'A last issue is the lack of infrastructure that hampers digitally supported marketing, especially in nonurban areas: unreliable electricity, poor connectivity, and high costs of data and equipment (Sadiq et al., 2022).',
      },
      {
        label: '4. DIGITAL SKILLS & FINANCE',
        icon: 'Wallet',
        text: 'The fourth is the digital skills deficit and financial problems within publishing companies. Access to affordable credit… is limited in the small and medium enterprises (SMEs) of Nigeria that constitute the bulk of the publishing industry (Effiom & Edet, 2022; Owolabi, 2024).',
      },
    ],
    notes:
      'Four challenges shape this problem. The first is shallow application of IT. Even where digital tools have been adopted, publishers tend to use them informally for communication and general visibility rather than as a structured system of client management. The second is book piracy, which reduces publisher revenues that would otherwise be spent on technology and market development. The third is the infrastructure deficit. Unreliable electricity, poor connectivity, and high costs of data and equipment hamper digitally supported marketing, especially in nonurban areas. The fourth is the digital skills deficit and financial constraints within publishing companies. Access to affordable credit is limited among the small and medium enterprises that constitute the bulk of the Nigerian publishing industry.',
  },
  sectionSlide('slide-07', 'Problem Statement', 'Chapter One', {
    notes: 'This brings me to the specific problem statement.',
  }),
  cardSlide('slide-08', 'Problem Statement', 'Chapter One', [
    'The specific problem being explored is that executives of Nigerian book publishing companies have not successfully applied IT in their B2B marketing strategies, continuing instead to rely on traditional analogue marketing approaches grounded in personal relationships with institutional buyers.',
    'The negative effect of this problem is that publishers lose visibility and standing within institutional procurement processes that are increasingly digitized, which slows and destabilizes the sales pipelines on which their revenues depend and constrains their ability to compete for the largest institutional contracts.',
    "The cause of this problem goes back to the industry's overreliance on personal selling to schools, bookstores and libraries… and has remained in place despite the digitalization of the industry's procurement and customer relationship (Kalmykov, 2024; Owolabi, 2024).",
    'Researches on the industry revealed low readiness in digital publishing, lack of big data and analytics practice, and the tendency to use digital channels for publicity instead of to manage digital B2B accounts (Afolabi & Zolkepli, 2023b; Afolabi & Zolkepli, 2023c; Ifeduba, 2020).',
  ], {
    notes:
      "The specific problem is that executives of Nigerian book publishing companies have not successfully applied IT in their B2B marketing strategies. They continue instead to rely on traditional analogue marketing approaches grounded in personal relationships with institutional buyers. The negative effect is that publishers lose visibility and standing within institutional procurement processes that are increasingly digitized. This slows and destabilizes the sales pipelines on which their revenues depend and constrains their ability to compete for the largest institutional contracts. The cause of this problem is the industry's overreliance on personal selling to schools, bookstores, and libraries, a pattern that has remained in place despite the digitalization of procurement and customer relationship processes. Research on the industry has revealed low readiness in digital publishing, limited use of big data and analytics, and a tendency to use digital channels for publicity rather than to manage digital B2B accounts.",
  }),
  sectionSlide('slide-09', 'Purpose and Research Questions', 'Chapter One', {
    notes:
      'I now present the purpose of the study and the research questions that follow from it.',
  }),
  {
    id: 'slide-10',
    layout: 'twoColumn',
    title: 'Purpose of the Study',
    chapter: 'Chapter One',
    leftTitle: '[Target] Primary Purpose',
    leftBullets: [
      'The purpose of this qualitative multiple case study is to explore how publishing executives of book publishing firms in Nigeria perceive the role of information technology in shaping business-to-business marketing strategies and the challenges they experience when integrating IT into those strategies.',
    ],
    rightTitle: '[Goal] Overarching Goal',
    rightBullets: [
      'The overarching goal of the study is to generate context-based understanding that may guide technological, organizational, and environmental decisions related to IT use in B2B marketing within the Nigerian book publishing industry, potentially informing the strategic direction of publishing companies and policymakers.',
    ],
    notes:
      'The purpose of this qualitative multiple case study is to explore how publishing executives of book publishing firms in Nigeria perceive the role of information technology in shaping business-to-business marketing strategies, and the challenges they experience when integrating IT into those strategies. The overarching goal is to generate context-based understanding that may guide technological, organizational, and environmental decisions related to IT use in B2B marketing within the Nigerian book publishing industry. That understanding may also inform the strategic direction of publishing companies and policymakers.',
  },
  cardSlide('slide-11', 'Research Questions', 'Chapter One', [
    'Research Question 1: How do publishing executives of book publishing firms in Nigeria describe the role of information technology in their business-to-business marketing strategies?',
    'Research Question 2: What challenges do publishing executives of book publishing firms in Nigeria experience when integrating information technology into business-to-business marketing strategies?',
    'Because the study is qualitative, no hypotheses were formulated or tested; the focus was on processes, meanings, and the contextual conditions that shape organizational behavior (Hennink & Kaiser, 2022; Tracy, 2010).',
  ], {
    notes:
      'The study is guided by two research questions. Research Question 1 asks: How do publishing executives of book publishing firms in Nigeria describe the role of information technology in their business-to-business marketing strategies? Research Question 2 asks: What challenges do publishing executives of book publishing firms in Nigeria experience when integrating information technology into business-to-business marketing strategies? Because the study is qualitative, no hypotheses were formulated or tested. The focus is on processes, meanings, and the contextual conditions that shape organizational behavior.',
  }),
  sectionSlide('slide-12', 'Theoretical Framework', 'Chapter One', {
    notes:
      'I now turn to the theoretical framework that guides the study.',
  }),
  {
    id: 'slide-13',
    layout: 'framework',
    title: 'Theoretical Framework',
    chapter: 'Chapter One',
    frameworkBlocks: [
      {
        label: 'Technology-Organization-Environment (TOE)',
        author: 'Tornatzky & Fleischer (1990)',
        text: 'The key theoretical basis of this research is the technology-organization-environment (TOE) model of technological innovation developed by Tornatzky and Fleischer (1990). The use and adoption of technological innovation within a firm depend on three contexts that interact with one another: technological, organizational, and environmental.',
      },
      {
        label: 'Relationship Marketing Theory',
        author: 'Morgan & Hunt (1994)',
        text: 'The study is supplemented by relationship marketing theory, introduced by Morgan and Hunt (1994). Trust and relationship commitment are the central mediating variables of successful inter-firm exchange.',
      },
      {
        label: 'Institutional Theory',
        author: 'Scott (1995)',
        text: 'The study is also enriched by institutional theory, as presented by Scott (1995). Three institutional strands—the regulative, the normative, and the cultural-cognitive—guide the form of organizational behavior.',
      },
    ],
    notes:
      'The primary theoretical basis is the technology-organization-environment model of technological innovation developed by Tornatzky and Fleischer in 1990. TOE holds that the use and adoption of technological innovation within a firm depend on three contexts that interact with one another: technological, organizational, and environmental. The study is supplemented by relationship marketing theory, introduced by Morgan and Hunt in 1994. Trust and relationship commitment are the central mediating variables of successful inter-firm exchange, which is important because Nigerian publishing B2B sales are relationship-based. The study is also enriched by institutional theory, as presented by Scott in 1995. Three institutional strands—the regulative, the normative, and the cultural-cognitive—guide the form of organizational behavior and help specify the external pressures on adoption.',
  },
  sectionSlide('slide-14', 'Four Drivers', 'Chapter One', {
    subtitle: 'Problem Background · Chapter One',
    notes:
      'Before moving to the literature, I return to the four drivers of the problem, now shown together as a visual.',
  }),
  {
    id: 'slide-15',
    layout: 'chart',
    title: 'Problem Background — Four Drivers',
    subtitle: 'Visual of the four challenges named in Chapter One',
    chapter: 'Chapter One',
    chartCaption:
      'Chapter One organized the problem background around four specific problems: superficial IT use in B2B marketing, piracy, infrastructure deficits, and financing and skills constraints',
    chartType: 'bar',
    chartData: [
      { name: 'Shallow IT', value: 4 },
      { name: 'Piracy', value: 4 },
      { name: 'Infrastructure', value: 4 },
      { name: 'Skills / Finance', value: 4 },
    ],
    bullets: [
      'Social media substitutes for customer relationship management, and messaging applications substitute for structured procurement engagement (Afolabi & Zolkepli, 2023b, 2023c).',
      "Nigeria's piracy has thrived in the face of poor enforcement, high costs of books, and poor technological protection of content (Ahmadu, 2017; Nwogu, 2014).",
      'Unreliable electricity, poor connectivity, and high costs of data and equipment (Sadiq et al., 2022).',
      'A lack of digital skills and managerial experience with new technologies hinders the translation of experimentation into strategic adoption (Eze et al., 2020; Sadiq et al., 2022).',
    ],
    notes:
      'Chapter One organized the problem background around four specific problems of equal weight: shallow IT use in B2B marketing, piracy, infrastructure deficits, and financing and skills constraints. Social media often substitutes for customer relationship management, and messaging applications substitute for structured procurement engagement. Piracy has thrived in the face of poor enforcement, high costs of books, and poor technological protection of content. Digitally supported marketing is further constrained by unreliable electricity, poor connectivity, and high costs of data and equipment. A lack of digital skills and managerial experience with new technologies also hinders the translation of experimentation into strategic adoption.',
  },
  sectionSlide('slide-16', 'Literature Review', 'Chapter Two', {
    notes: 'I now move to Chapter Two, the literature review.',
  }),
  cardSlide('slide-17', 'Literature Review — Key Findings', 'Chapter Two', [
    'Nigerian book publishing business has been a relational industry between the publishers and the customers, as the relationship between book publishers and the schools and bookstores/ libraries was based on personal relationship, market norms that were inherited and a need assessing based demand (Adam, 2021; Okwilagwe, 2001).',
    'Digital technologies have started to restructure intermediation, self-publishing and marketing communication, while big data and analytics were hardly seen in publications operations (Afolabi & Zolkepli, 2023a, 2023b, 2023c; Olofinlua, 2021).',
    'In line with the technological dimension, the global digital transformation scholarship revealed strategic opportunity, and the Nigerian evidences represented that digital tools are superficially used for publicity.',
    'In the organizational context, financing constraints, digital skills shortage, leadership disposition were found to be important internal conditions (Effiom & Edet, 2022; Eze et al., 2020; Sadiq et al., 2022).',
    'In the environmental context, the systemic constraints of digital B2B strategy were identified as piracy, poor infrastructures and gaps in regulations (Ahmadu, 2017; Nwogu, 2014; Uguru & Umobong, 2022).',
  ], {
    notes:
      'The literature shows that Nigerian book publishing has been a relational industry. Relationships between publishers and schools, bookstores, and libraries have been based on personal ties, inherited market norms, and need-based demand. Digital technologies have begun to restructure intermediation, self-publishing, and marketing communication, but big data and analytics are hardly seen in publishing operations. In the technological dimension, global digital transformation scholarship points to strategic opportunity, while Nigerian evidence shows that digital tools are used superficially for publicity. In the organizational context, financing constraints, digital skills shortages, and leadership disposition are important internal conditions. In the environmental context, piracy, poor infrastructure, and regulatory gaps are the systemic constraints on digital B2B strategy.',
  }),
  sectionSlide('slide-18', 'Gap in the Literature', 'Chapter Two', {
    notes:
      'These findings lead to four major gaps in the current research literature.',
  }),
  {
    id: 'slide-19',
    layout: 'chart',
    title: 'Gap in the Literature',
    subtitle: 'Four major gaps — Chapter Two',
    chapter: 'Chapter Two',
    chartCaption:
      'It can therefore be seen that there are four major gaps in the current research literature.',
    chartType: 'pie',
    chartData: [
      { name: 'Contextual', value: 25 },
      { name: 'Methodological', value: 25 },
      { name: 'Explanatory', value: 25 },
      { name: 'Applied', value: 25 },
    ],
    bullets: [
      'Contextual Gap: Why Publishing Is Not Just Another SME — Most of the existing studies on digital technology adoption in Nigeria have been conducted on SMEs in general, not on the publishing industry specifically (Ayawei et al., 2023; Effiom & Edet, 2022).',
      'The Methodological Gap: The Limits of Surveys in Explaining “Why” — Most of the studies have been based on quantitative surveys… but they cannot provide a comprehensive explanation of why and how these two interrelations occur.',
      'The Explanatory Gap: Untangling the TOE Interactions — research on these relations is sparse in the literature, especially in contexts that are specific to the publishing industry.',
      'The Applied Knowledge Gap: From Diagnosis to Solution — there is currently more a diagnosis than a cure in research.',
    ],
    notes:
      'There are four major gaps. The contextual gap is that most studies of digital technology adoption in Nigeria have been conducted on SMEs in general, not on the publishing industry specifically. Publishing is not just another SME sector. The methodological gap is that most studies have used quantitative surveys. Surveys can map adoption, but they cannot comprehensively explain why and how these interrelations occur. The explanatory gap is that research on how TOE factors interact remains sparse, especially in publishing-specific contexts. The applied knowledge gap is that the literature currently offers more diagnosis than cure. There is limited evidence on what firms actually do to move from partial adoption to strategic integration.',
  },
  sectionSlide('slide-20', 'Research Method and Design', 'Chapter Three', {
    notes:
      'I now turn to Chapter Three, the research method and design.',
  }),
  cardSlide('slide-21', 'Research Method and Design', 'Chapter Three', [
    "This study will employ a qualitative approach. Qualitative methodology is suitable when the purpose of the research is to explore executives' perceptions, meanings, and contextual explanations, rather than to measure variables or test hypotheses (Braun & Clarke, 2021; Hennink & Kaiser, 2022).",
    'The research design will be a multiple case study. A multiple case study is suitable because the phenomenon of interest—IT-enabled B2B marketing, exists within the real-world conditions of individual publishing firms, and because comparison across firms will allow patterns to be identified in the analysis while preserving the context of each single case (Priya, 2021; Rashid et al., 2019).',
    'Participating publishing firms will form bounded cases based on their operation within the Nigerian book publishing market and their involvement in B2B marketing relationships with institutional buyers.',
    'To support triangulation of the evidence base, three data sources will be used: semi-structured interviews, firm-produced organizational documents, and externally produced procurement and industry records (Bowen, 2009; Rashid et al., 2019).',
  ], {
    notes:
      "This study will employ a qualitative approach. Qualitative methodology is suitable because the purpose is to explore executives' perceptions, meanings, and contextual explanations, rather than to measure variables or test hypotheses. The research design will be a multiple case study. That design is suitable because IT-enabled B2B marketing exists within the real-world conditions of individual publishing firms, and because comparison across firms will allow patterns to be identified while preserving the context of each case. Participating publishing firms will form bounded cases based on their operation within the Nigerian book publishing market and their involvement in B2B marketing relationships with institutional buyers. To support triangulation, three data sources will be used: semi-structured interviews, firm-produced organizational documents, and externally produced procurement and industry records.",
  }),
  sectionSlide('slide-22', 'Data Collection and Sampling', 'Chapter Three', {
    notes: 'I now outline data collection and sampling.',
  }),
  {
    id: 'slide-23',
    layout: 'chart',
    title: 'Data Collection and Sampling',
    chapter: 'Chapter Three',
    subtitle:
      'Proposed ranges: 12 to 18 executives; 24 to 36 documents; 18 to 30 records (chart shows midpoints)',
    chartType: 'bar',
    chartData: [
      { name: 'Executives', value: 15 },
      { name: 'Firm docs', value: 30 },
      { name: 'External records', value: 24 },
    ],
    bullets: [
      'The proposed sample size is 12 to 18 executives across approximately six organizational cases, based on the saturation and information power principles (Hennink & Kaiser, 2022; Malterud et al., 2016; Saunders et al., 2018).',
      'The proposed sample size is four to six documents per case, for a total sample size of 24 to 36 documents.',
      'The proposed sample size is three to five records per case, or approximately 18 to 30 records in total.',
      'Cases will be selected using a maximum variation purposive logic (Palinkas et al., 2015).',
      'Two distinct classes of archival document are used in preference to direct observation of B2B marketing operations.',
    ],
    notes:
      'The proposed sample is 12 to 18 executives across approximately six organizational cases, based on the saturation and information power principles. I also propose four to six firm-produced documents per case, for a total of 24 to 36 documents, and three to five external records per case, or approximately 18 to 30 records in total. The chart shows the midpoints of these ranges. Cases will be selected using a maximum variation purposive logic so that firms vary in ways that support comparison. Two distinct classes of archival document are used in preference to direct observation of B2B marketing operations.',
  },
  sectionSlide('slide-24', 'Ethical Considerations', 'Chapter Three', {
    notes: 'I now address ethical considerations.',
  }),
  cardSlide('slide-25', 'Ethical Considerations', 'Chapter Three', [
    'No human subjects can be recruited for research or data collection nor will I collect data without the IRB approval and completion of all Human Subjects training requirements.',
    'All participants will give written informed consent before taking part.',
    'Written site permission will be obtained from each participating publishing organization before recruitment within that organization.',
    'Confidentiality is stressed and achieved by using pseudonyms for participants, case codes for organizations, and by omitting identifying information from transcripts, documents, field notes, and reports.',
    'All digital materials will be kept in an encrypted, password-protected system accessible only to me, and all physical materials will be kept in a locked cabinet.',
    'In compliance with doctoral record-keeping requirements, all data will be retained for a minimum of 3 years after completion of the degree and then destroyed through secure deletion of electronic files and shredding of paper records.',
  ], {
    notes:
      'No human subjects will be recruited and no data will be collected without IRB approval and completion of all Human Subjects training requirements. All participants will give written informed consent before taking part. Written site permission will be obtained from each participating publishing organization before recruitment within that organization. Confidentiality will be protected by using pseudonyms for participants, case codes for organizations, and by omitting identifying information from transcripts, documents, field notes, and reports. All digital materials will be kept in an encrypted, password-protected system accessible only to me, and all physical materials will be kept in a locked cabinet. In compliance with doctoral record-keeping requirements, all data will be retained for a minimum of three years after completion of the degree and then destroyed through secure deletion of electronic files and shredding of paper records.',
  }),
  sectionSlide('slide-26', 'Data Analysis', 'Chapter Three', {
    notes: 'I now turn to data analysis.',
  }),
  {
    id: 'slide-27',
    layout: 'framework',
    title: 'Data Analysis',
    chapter: 'Chapter Three',
    frameworkBlocks: [
      {
        label: 'Procedure',
        text: 'All three data sources will be analyzed using the six-phase thematic analysis procedure of Braun and Clarke (2006), supported by the reflexive refinements the authors later articulated (Braun & Clarke, 2021).',
      },
      {
        label: 'Within → Across',
        text: 'Analysis will proceed within each case before cross-case synthesis, and NVivo software will support coding, memoing, and an audit trail (Nowell et al., 2017).',
      },
      {
        label: 'Triangulation',
        text: 'Applying the same thematic procedure to interviews, firm-produced documents, and external procurement records will permit triangulation of themes across the three data sources (Bowen, 2009).',
      },
    ],
    notes:
      'All three data sources will be analyzed using the six-phase thematic analysis procedure of Braun and Clarke, supported by the reflexive refinements they later articulated. Analysis will proceed within each case before cross-case synthesis. NVivo software will support coding, memoing, and an audit trail. Applying the same thematic procedure to interviews, firm-produced documents, and external procurement records will permit triangulation of themes across the three data sources.',
  },
  sectionSlide('slide-28', 'Trustworthiness and Positionality', 'Chapter Three', {
    notes: 'I now address trustworthiness and researcher positionality.',
  }),
  {
    id: 'slide-29',
    layout: 'twoColumn',
    title: 'Trustworthiness and Researcher Positionality',
    chapter: 'Chapter Three',
    leftTitle: 'Trustworthiness',
    leftBullets: [
      'In this study the four traditional qualitative research criteria, credibility, transferability, dependability and confirmability, as described by Lincoln and Guba (1985) and Nowell et al. (2017), are presented as indicators of trustworthiness.',
      'Evidence will be triangulated across interviews, firm-produced documents, and external procurement records.',
      'I will keep a documented audit trail of methodological and analytic decisions, protocol changes and coding development.',
      'I will employ reflexive journaling and memoing, record explicit evidence for each interpretation, look for disconfirming elements and negative cases.',
    ],
    rightTitle: 'Researcher Positionality',
    rightBullets: [
      'I have leadership experience and professional visibility in the Nigerian publishing industry.',
      'This insider role carries methodological advantages but also the potential for pre-existing assumptions to bias data analysis.',
      'I will address this risk by keeping a systematic reflexive journal throughout data collection and analysis.',
      'These reflexive practices are designed to ensure that my industry background contributes contextual sensitivity rather than reducing interpretive openness (Berger, 2015; Tracy, 2010).',
    ],
    notes:
      'Trustworthiness will be assessed using the four traditional qualitative criteria described by Lincoln and Guba and by Nowell and colleagues: credibility, transferability, dependability, and confirmability. Evidence will be triangulated across interviews, firm-produced documents, and external procurement records. I will keep a documented audit trail of methodological and analytic decisions, protocol changes, and coding development. I will employ reflexive journaling and memoing, record explicit evidence for each interpretation, and look for disconfirming elements and negative cases. On positionality, I have leadership experience and professional visibility in the Nigerian publishing industry. This insider role carries methodological advantages but also the potential for pre-existing assumptions to bias analysis. I will address this risk by keeping a systematic reflexive journal throughout data collection and analysis, so that my industry background contributes contextual sensitivity rather than reducing interpretive openness.',
  },
  sectionSlide('slide-30', 'Significance of the Study', 'Chapter One', {
    notes: 'I now turn to the significance of the study.',
  }),
  {
    id: 'slide-31',
    layout: 'framework',
    title: 'Significance of the Study',
    chapter: 'Chapter One',
    frameworkBlocks: [
      {
        label: 'Scholarship',
        text: 'This study may contribute to the scholarly field of technology adoption and B2B marketing in emerging economies. The findings of the study may provide explanatory depth to the existing literature on the interaction of technology, organization, and environment in a specialized creative industry.',
      },
      {
        label: 'Practice',
        text: "The results could help Nigerian publishers, especially SMEs which make up the bulk of the industry, make informed decisions on technology investment based on the results of similar firms' executives on the actual returns of various technologies.",
      },
      {
        label: 'Policy / Society',
        text: 'Evidence on specific infrastructure, financing, and skills gaps could inform the interventions of government institutions such as the Nigerian Copyright Commission and the agencies responsible for national digital economy policy. To the extent that a more digitally capable publishing sector improves the distribution of educational materials, the findings may support literacy, education, and the wider national development agenda (Owolabi, 2024).',
      },
    ],
    notes:
      'The study may contribute in three ways. For scholarship, it may contribute to the field of technology adoption and B2B marketing in emerging economies by providing explanatory depth on how technology, organization, and environment interact in a specialized creative industry. For practice, the results could help Nigerian publishers, especially the SMEs that make up the bulk of the industry, make more informed technology-investment decisions based on how executives in similar firms understand the returns of various technologies. For policy and society, evidence on specific infrastructure, financing, and skills gaps could inform the interventions of government institutions such as the Nigerian Copyright Commission and the agencies responsible for national digital economy policy. To the extent that a more digitally capable publishing sector improves the distribution of educational materials, the findings may support literacy, education, and the wider national development agenda.',
  },
  sectionSlide('slide-32', 'Scope and Delimitations', 'Chapter Three', {
    notes:
      'I close the proposal content with the scope and delimitations of the study.',
  }),
  cardSlide('slide-33', 'Scope and Delimitations', 'Chapter Three', [
    'This study is bounded to executives of book publishing firms operating within Nigeria and to their perceptions and experiences of IT use in B2B marketing strategies.',
    'The study does not extend to consumer-facing (B2C) marketing, to publishing firms outside Nigeria, or to a technical evaluation of specific IT systems; instead, it focuses on the organizational and strategic experience of publishing executives.',
    'The study is delimited to book publishing firms within Nigeria and not other creative firms, because the study problem and the literature are focused specifically on the publishing sector.',
    'It is limited to B2B marketing strategy because institutional buyers form the revenue base of the problem set.',
    'These boundaries were selected to maintain alignment between the problem, purpose, and research questions and to keep the study feasible within the doctoral timeframe.',
  ], {
    notes:
      'This study is bounded to executives of book publishing firms operating within Nigeria and to their perceptions and experiences of IT use in B2B marketing strategies. The study does not extend to consumer-facing B2C marketing, to publishing firms outside Nigeria, or to a technical evaluation of specific IT systems. Instead, it focuses on the organizational and strategic experience of publishing executives. It is delimited to book publishing firms within Nigeria and not other creative firms, because the study problem and the literature are focused specifically on the publishing sector. It is limited to B2B marketing strategy because institutional buyers form the revenue base of the problem. These boundaries were selected to maintain alignment between the problem, purpose, and research questions, and to keep the study feasible within the doctoral timeframe.',
  }),
  {
    id: 'slide-34',
    layout: 'closing',
    title: 'Questions & Discussion',
    subtitle:
      'The purpose of this qualitative multiple case study is to explore how publishing executives of book publishing firms in Nigeria perceive the role of information technology in shaping business-to-business marketing strategies and the challenges they experience when integrating IT into those strategies.',
    footer:
      'Gbadega Adedapo · Westcliff University · DBA Preliminary Defense · August 2026',
    notes:
      'The purpose of this qualitative multiple case study is to explore how publishing executives of book publishing firms in Nigeria perceive the role of information technology in shaping business-to-business marketing strategies and the challenges they experience when integrating IT into those strategies. The study is designed to contribute applied knowledge that can help Nigerian publishing executives move from isolated digital activity toward more coherent IT-enabled B2B marketing strategy. I respectfully welcome your questions and recommendations for strengthening the study before data collection.',
  },
]

export const SEED_REVISION = 17

export const seedPresentation: PresentationState = {
  slides: seedSlides,
  currentIndex: 0,
  seedRevision: SEED_REVISION,
  meta: PRESENTATION_META,
}
