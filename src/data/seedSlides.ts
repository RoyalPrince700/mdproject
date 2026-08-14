import type { PresentationState, Slide } from '../types/slide'

export const PRESENTATION_META = {
  brand: 'Westcliff University',
  author: 'Gbadega Adedapo',
  degree: 'Doctor of Business Administration',
  date: 'August 2026',
}

function sectionSlide(
  id: string,
  title: string,
  subtitle: string,
  icon?: string,
): Slide {
  return {
    id,
    layout: 'section',
    title,
    subtitle,
    icon,
    notes: `I now move to ${title}, from ${subtitle}.`,
  }
}

/**
 * Slide content uses verbatim wording from project.md (selected sentences /
 * clauses). Structure follows the guide.md speaking plan.
 * Section title slides precede each content topic.
 */
export const seedSlides: Slide[] = [
  {
    id: 'slide-01',
    layout: 'title',
    title:
      'The Role of Information Technology Use in B2B Marketing Strategies',
    subtitle:
      'A Qualitative Multiple-Case Study of the Nigerian Book Publishing Industry',
    icon: 'BookOpen',
    footer: 'Preliminary Defense · College of Business Administration',
    notes:
      'Good morning, Chair and members of the committee. My name is Gbadega Adedapo. I am presenting my preliminary defense for the Doctor of Business Administration at Westcliff University, College of Business Administration. The title of this study is The Role of Information Technology Use in B2B Marketing Strategies: A Qualitative Multiple-Case Study of the Nigerian Book Publishing Industry. Thank you for your time and guidance.',
  },
  {
    id: 'slide-02',
    layout: 'bullets',
    title: 'Defense Roadmap',
    subtitle: 'Chapters One to Three',
    icon: 'ListChecks',
    bullets: [
      '[BookOpen] Introduction and problem background',
      '[TriangleAlert] Problem statement, purpose of the study, and research questions',
      '[Layers] Theoretical framework',
      '[Puzzle] Gap in the literature',
      '[GitBranch] Research method and design, data collection, and data analysis',
      '[Shield] Ethics, trustworthiness, significance, and closing',
    ],
    notes:
      'This defense covers Chapters One to Three. I will begin with the introduction and problem background, then the problem statement, purpose of the study, and research questions. I will then present the theoretical framework and the gap in the literature. After that I will cover research method and design, data collection, and data analysis. I will close with ethics, trustworthiness, significance of the study, and the invitation for discussion.',
  },
  sectionSlide('section-introduction', 'Introduction', 'Chapter One', 'BookOpen'),
  {
    id: 'slide-03',
    layout: 'bullets',
    title: 'Introduction',
    subtitle: 'Chapter One',
    icon: 'Globe',
    bullets: [
      '[Globe] Information technology (IT) has transformed the publishing business across the globe, especially in the field of business-to-business (B2B) marketing where personal, paper-based sales and distribution processes are being replaced by digital channels (Kalmykov, 2024; Söilen, 2024).',
      "[Phone] However, the use of IT in publisher's B2B marketing in Nigeria has been inconsistent and superficial: while Nigeria has been improving mobile and internet infrastructure and has enacted some national digital policies, the majority of book publishers still rely on personal visits, telephone calls, and informal networks for accessing the institutions on which they rely for their revenues (Afolabi & Zolkepli, 2023c; International Trade Administration, 2024; Owolabi, 2024).",
      '[Search] The study focused on the role of IT in B2B marketing strategies and the problems of incorporating IT into B2B marketing strategies, the contrast between the global digital imperative, and local practice in marketing.',
    ],
    notes:
      'Information technology has transformed publishing worldwide, especially in B2B marketing, where personal, paper-based sales and distribution are being replaced by digital channels. In Nigeria, however, IT use in publishers’ B2B marketing has been inconsistent and superficial. Although mobile and internet infrastructure have improved and some national digital policies are in place, most book publishers still rely on personal visits, telephone calls, and informal networks to reach the institutions that generate their revenue. This study focuses on the role of IT in B2B marketing strategies, the problems of incorporating IT into those strategies, and the contrast between the global digital imperative and local marketing practice.',
  },
  sectionSlide('section-problem-background', 'Problem Background', 'Chapter One', 'CircleAlert'),
  {
    id: 'slide-04',
    layout: 'bullets',
    title: 'Problem Background',
    subtitle: 'Four challenges — Chapter One',
    icon: 'CircleAlert',
    bullets: [
      '[Laptop] The shallow application of IT in B2B marketing is the first challenge for the Nigerian book publishing industry. Even where digital tools have been adopted, publishers tend to use them informally for communication and general visibility rather than as a structured system of client management.',
      '[Ban] The second is book piracy, which diminishes the value of publisher revenues, which would otherwise be spent on technology and market development.',
      '[WifiOff] A last issue is the lack of infrastructure that hampers digitally supported marketing, especially in nonurban areas: unreliable electricity, poor connectivity, and high costs of data and equipment (Sadiq et al., 2022).',
      '[Wallet] The fourth is the digital skills deficit and financial problems within publishing companies. Access to affordable credit… is limited in the small and medium enterprises (SMEs) of Nigeria that constitute the bulk of the publishing industry (Effiom & Edet, 2022; Owolabi, 2024).',
    ],
    notes:
      'Chapter One organizes the problem background around four challenges. The first is the shallow application of IT in B2B marketing. Even where digital tools have been adopted, publishers tend to use them informally for communication and visibility rather than as a structured system of client management. The second is book piracy, which reduces publisher revenues that would otherwise be spent on technology and market development. The third is infrastructure that hampers digitally supported marketing, especially outside urban areas: unreliable electricity, poor connectivity, and high costs of data and equipment. The fourth is the digital skills deficit and financial constraints within publishing companies. Access to affordable credit is limited among the SMEs that make up most of the Nigerian publishing industry.',
  },
  sectionSlide('section-problem-statement', 'Problem Statement', 'Chapter One', 'TriangleAlert'),
  {
    id: 'slide-05',
    layout: 'bullets',
    title: 'Problem Statement',
    subtitle: 'Chapter One',
    icon: 'TriangleAlert',
    bullets: [
      '[TriangleAlert] The specific problem being explored is that executives of Nigerian book publishing companies have not successfully applied IT in their B2B marketing strategies, continuing instead to rely on traditional analogue marketing approaches grounded in personal relationships with institutional buyers.',
      '[TrendingDown] The negative effect of this problem is that publishers lose visibility and standing within institutional procurement processes that are increasingly digitized, which slows and destabilizes the sales pipelines on which their revenues depend and constrains their ability to compete for the largest institutional contracts.',
      "[Handshake] The cause of this problem goes back to the industry's overreliance on personal selling to schools, bookstores and libraries… and has remained in place despite the digitalization of the industry's procurement and customer relationship (Kalmykov, 2024; Owolabi, 2024).",
      '[BarChart3] Researches on the industry revealed low readiness in digital publishing, lack of big data and analytics practice, and the tendency to use digital channels for publicity instead of to manage digital B2B accounts (Afolabi & Zolkepli, 2023b; Afolabi & Zolkepli, 2023c; Ifeduba, 2020).',
    ],
    notes:
      'The specific problem is that executives of Nigerian book publishing companies have not successfully applied IT in their B2B marketing strategies. They continue to rely on traditional analogue marketing grounded in personal relationships with institutional buyers. The negative effect is that publishers lose visibility and standing in institutional procurement processes that are increasingly digitized. That slows and destabilizes the sales pipelines on which their revenues depend and constrains their ability to compete for the largest institutional contracts. The cause is the industry’s overreliance on personal selling to schools, bookstores, and libraries, which has remained in place despite the digitalization of procurement and customer relationships. Research on the industry has shown low readiness in digital publishing, little use of big data and analytics, and a tendency to use digital channels for publicity rather than to manage digital B2B accounts.',
  },
  sectionSlide('section-purpose', 'Purpose and Research Questions', 'Chapter One', 'Target'),
  {
    id: 'slide-06',
    layout: 'bullets',
    title: 'Purpose of the Study',
    subtitle: 'Chapter One',
    icon: 'Target',
    bullets: [
      '[Target] The purpose of this qualitative multiple case study is to explore how publishing executives of book publishing firms in Nigeria perceive the role of information technology in shaping business-to-business marketing strategies and the challenges they experience when integrating IT into those strategies.',
      '[Goal] The overarching goal of the study is to generate context-based understanding that may guide technological, organizational, and environmental decisions related to IT use in B2B marketing within the Nigerian book publishing industry, potentially informing the strategic direction of publishing companies and policymakers.',
    ],
    notes:
      'The purpose of this qualitative multiple case study is to explore how publishing executives of book publishing firms in Nigeria perceive the role of information technology in shaping B2B marketing strategies, and the challenges they experience when integrating IT into those strategies. The overarching goal is to generate context-based understanding that may guide technological, organizational, and environmental decisions related to IT use in B2B marketing in this industry, and that may inform publishers and policymakers.',
  },
  {
    id: 'slide-06b',
    layout: 'bullets',
    title: 'Research Questions',
    subtitle: 'Chapter One',
    icon: 'CircleHelp',
    bullets: [
      '[CircleHelp] Research Question 1: How do publishing executives of book publishing firms in Nigeria describe the role of information technology in their business-to-business marketing strategies?',
      '[CircleHelp] Research Question 2: What challenges do publishing executives of book publishing firms in Nigeria experience when integrating information technology into business-to-business marketing strategies?',
      '[Info] Because the study is qualitative, no hypotheses were formulated or tested; the focus was on processes, meanings, and the contextual conditions that shape organizational behavior (Hennink & Kaiser, 2022; Tracy, 2010).',
    ],
    notes:
      'There are two research questions. First: How do publishing executives of book publishing firms in Nigeria describe the role of information technology in their business-to-business marketing strategies? Second: What challenges do publishing executives of book publishing firms in Nigeria experience when integrating information technology into business-to-business marketing strategies? Because the study is qualitative, no hypotheses were formulated or tested. The focus is on processes, meanings, and the contextual conditions that shape organizational behavior.',
  },
  sectionSlide('section-framework', 'Theoretical Framework', 'Chapter One', 'Layers'),
  {
    id: 'slide-07',
    layout: 'framework',
    title: 'Theoretical Framework',
    subtitle: 'Chapter One',
    icon: 'Layers',
    frameworkBlocks: [
      {
        label: 'TOE',
        icon: 'Laptop',
        text: 'The key theoretical basis of this research is the technology-organization-environment (TOE) model of technological innovation developed by Tornatzky and Fleischer (1990). The use and adoption of technological innovation within a firm depend on three contexts that interact with one another: technological, organizational, and environmental.',
      },
      {
        label: 'Relationship Marketing',
        icon: 'Handshake',
        text: 'The study is supplemented by relationship marketing theory, introduced by Morgan and Hunt (1994). Trust and relationship commitment are the central mediating variables of successful inter-firm exchange.',
      },
      {
        label: 'Institutional Theory',
        icon: 'Landmark',
        text: 'The study is also enriched by institutional theory, as presented by Scott (1995). Three institutional strands—the regulative, the normative, and the cultural-cognitive—guide the form of organizational behavior.',
      },
    ],
    notes:
      'The primary theoretical basis is the technology-organization-environment model developed by Tornatzky and Fleischer in 1990. Under TOE, the use and adoption of technological innovation depend on three interacting contexts: technological, organizational, and environmental. The study is supplemented by relationship marketing theory, introduced by Morgan and Hunt in 1994, in which trust and relationship commitment are the central mediating variables of successful inter-firm exchange. The study is also enriched by institutional theory as presented by Scott in 1995. Three institutional strands—the regulative, the normative, and the cultural-cognitive—guide the form of organizational behavior.',
  },
  sectionSlide('section-four-drivers', 'Four Drivers', 'Problem Background · Chapter One', 'BarChart3'),
  {
    id: 'slide-08',
    layout: 'chart',
    title: 'Problem Background — Four Drivers',
    subtitle: 'Visual of the four challenges named in Chapter One',
    icon: 'BarChart3',
    chartType: 'bar',
    chartData: [
      { name: 'Shallow IT', value: 4 },
      { name: 'Piracy', value: 4 },
      { name: 'Infrastructure', value: 4 },
      { name: 'Skills / Finance', value: 4 },
    ],
    chartCaption:
      'Chapter One organized the problem background around four specific problems: superficial IT use in B2B marketing, piracy, infrastructure deficits, and financing and skills constraints',
    bullets: [
      '[Smartphone] Social media substitutes for customer relationship management, and messaging applications substitute for structured procurement engagement (Afolabi & Zolkepli, 2023b, 2023c).',
      "[Ban] Nigeria's piracy has thrived in the face of poor enforcement, high costs of books, and poor technological protection of content (Ahmadu, 2017; Nwogu, 2014).",
      '[WifiOff] Unreliable electricity, poor connectivity, and high costs of data and equipment (Sadiq et al., 2022).',
      '[Users] A lack of digital skills and managerial experience with new technologies hinders the translation of experimentation into strategic adoption (Eze et al., 2020; Sadiq et al., 2022).',
    ],
    notes:
      'These four drivers sit behind the problem, and they carry equal weight in the Chapter One account. Shallow IT use means social media substitutes for customer relationship management, and messaging applications substitute for structured procurement engagement. Piracy has thrived because of poor enforcement, high book costs, and weak technological protection of content. Infrastructure constraints include unreliable electricity, poor connectivity, and high costs of data and equipment. Skills and finance constraints matter because a lack of digital skills and managerial experience with new technologies hinders the translation of experimentation into strategic adoption.',
  },
  sectionSlide('section-literature', 'Literature Review', 'Chapter Two', 'Library'),
  {
    id: 'slide-09',
    layout: 'bullets',
    title: 'Literature Review — Key Findings',
    subtitle: 'Chapter Two',
    icon: 'Library',
    bullets: [
      '[Handshake] Nigerian book publishing business has been a relational industry between the publishers and the customers, as the relationship between book publishers and the schools and bookstores/ libraries was based on personal relationship, market norms that were inherited and a need assessing based demand (Adam, 2021; Okwilagwe, 2001).',
      '[Database] Digital technologies have started to restructure intermediation, self-publishing and marketing communication, while big data and analytics were hardly seen in publications operations (Afolabi & Zolkepli, 2023a, 2023b, 2023c; Olofinlua, 2021).',
      '[Globe] In line with the technological dimension, the global digital transformation scholarship revealed strategic opportunity, and the Nigerian evidences represented that digital tools are superficially used for publicity.',
      '[Building2] In the organizational context, financing constraints, digital skills shortage, leadership disposition were found to be important internal conditions (Effiom & Edet, 2022; Eze et al., 2020; Sadiq et al., 2022).',
      '[Landmark] In the environmental context, the systemic constraints of digital B2B strategy were identified as piracy, poor infrastructures and gaps in regulations (Ahmadu, 2017; Nwogu, 2014; Uguru & Umobong, 2022).',
    ],
    notes:
      'The literature shows that Nigerian book publishing has been a relational industry. Relationships between publishers and schools, bookstores, and libraries have been based on personal ties, inherited market norms, and needs-based demand. Digital technologies have begun to restructure intermediation, self-publishing, and marketing communication, but big data and analytics are hardly seen in publishing operations. In the technological dimension, global scholarship points to strategic opportunity, while Nigerian evidence shows that digital tools are used superficially for publicity. In the organizational context, financing constraints, digital skills shortages, and leadership disposition are important internal conditions. In the environmental context, piracy, poor infrastructure, and regulatory gaps are systemic constraints on digital B2B strategy.',
  },
  sectionSlide('section-gaps', 'Gap in the Literature', 'Chapter Two', 'Puzzle'),
  {
    id: 'slide-10',
    layout: 'chart',
    title: 'Gap in the Literature',
    subtitle: 'Four major gaps — Chapter Two',
    icon: 'Puzzle',
    chartType: 'pie',
    chartData: [
      { name: 'Contextual', value: 25 },
      { name: 'Methodological', value: 25 },
      { name: 'Explanatory', value: 25 },
      { name: 'Applied', value: 25 },
    ],
    chartCaption:
      'It can therefore be seen that there are four major gaps in the current research literature.',
    bullets: [
      '[MapPin] Contextual Gap: Why Publishing Is Not Just Another SME — Most of the existing studies on digital technology adoption in Nigeria have been conducted on SMEs in general, not on the publishing industry specifically (Ayawei et al., 2023; Effiom & Edet, 2022).',
      '[ClipboardList] The Methodological Gap: The Limits of Surveys in Explaining “Why” — Most of the studies have been based on quantitative surveys… but they cannot provide a comprehensive explanation of why and how these two interrelations occur.',
      '[Layers] The Explanatory Gap: Untangling the TOE Interactions — research on these relations is sparse in the literature, especially in contexts that are specific to the publishing industry.',
      '[Lightbulb] The Applied Knowledge Gap: From Diagnosis to Solution — there is currently more a diagnosis than a cure in research.',
    ],
    notes:
      'There are four major gaps in the current literature, shown here as equal parts of the problem this study addresses. The contextual gap is that most Nigerian digital-adoption studies examine SMEs in general, not publishing specifically. Publishing is not just another SME. The methodological gap is that most studies are quantitative surveys. They cannot fully explain why and how these interrelations occur. The explanatory gap is that research on how TOE factors interact is sparse, especially in publishing. The applied knowledge gap is that current research is more diagnosis than cure. This study is designed to address those four gaps.',
  },
  sectionSlide('section-method', 'Research Method and Design', 'Chapter Three', 'GitBranch'),
  {
    id: 'slide-11',
    layout: 'bullets',
    title: 'Research Method and Design',
    subtitle: 'Chapter Three',
    icon: 'GitBranch',
    bullets: [
      '[Search] This study will employ a qualitative approach. Qualitative methodology is suitable when the purpose of the research is to explore executives\' perceptions, meanings, and contextual explanations, rather than to measure variables or test hypotheses (Braun & Clarke, 2021; Hennink & Kaiser, 2022).',
      '[Building2] The research design will be a multiple case study. A multiple case study is suitable because the phenomenon of interest—IT-enabled B2B marketing, exists within the real-world conditions of individual publishing firms, and because comparison across firms will allow patterns to be identified in the analysis while preserving the context of each single case (Priya, 2021; Rashid et al., 2019).',
      '[Landmark] Participating publishing firms will form bounded cases based on their operation within the Nigerian book publishing market and their involvement in B2B marketing relationships with institutional buyers.',
      '[FileText] To support triangulation of the evidence base, three data sources will be used: semi-structured interviews, firm-produced organizational documents, and externally produced procurement and industry records (Bowen, 2009; Rashid et al., 2019).',
    ],
    notes:
      'This study will employ a qualitative approach because the purpose is to explore executives’ perceptions, meanings, and contextual explanations, not to measure variables or test hypotheses. The design will be a multiple case study. IT-enabled B2B marketing exists within the real-world conditions of individual publishing firms, and comparison across firms will allow patterns to be identified while preserving the context of each case. Participating firms will form bounded cases based on their operation in the Nigerian book publishing market and their B2B relationships with institutional buyers. Three data sources will be used for triangulation: semi-structured interviews, firm-produced organizational documents, and externally produced procurement and industry records.',
  },
  sectionSlide('section-sampling', 'Data Collection and Sampling', 'Chapter Three', 'Users'),
  {
    id: 'slide-12',
    layout: 'chart',
    title: 'Data Collection and Sampling',
    subtitle: 'Chapter Three',
    icon: 'Users',
    chartType: 'bar',
    chartData: [
      { name: 'Executives', value: 15 },
      { name: 'Firm docs', value: 30 },
      { name: 'External records', value: 24 },
    ],
    chartCaption:
      'Proposed ranges: 12 to 18 executives; 24 to 36 documents; 18 to 30 records (chart shows midpoints)',
    bullets: [
      '[Users] The proposed sample size is 12 to 18 executives across approximately six organizational cases, based on the saturation and information power principles (Hennink & Kaiser, 2022; Malterud et al., 2016; Saunders et al., 2018).',
      '[FileText] The proposed sample size is four to six documents per case, for a total sample size of 24 to 36 documents.',
      '[ClipboardList] The proposed sample size is three to five records per case, or approximately 18 to 30 records in total.',
      '[Layers] Cases will be selected using a maximum variation purposive logic (Palinkas et al., 2015).',
      '[NotebookPen] Two distinct classes of archival document are used in preference to direct observation of B2B marketing operations.',
    ],
    notes:
      'I will collect evidence from three sources. The proposed sample is 12 to 18 executives across approximately six organizational cases, based on saturation and information power. I propose four to six firm-produced documents per case, for a total of 24 to 36 documents, and three to five external records per case, or about 18 to 30 records in total. The chart shows the midpoints of those ranges: 15 executives, 30 firm documents, and 24 external records. Cases will be selected using a maximum variation purposive logic. Two distinct classes of archival document will be used in preference to direct observation of B2B marketing operations.',
  },
  sectionSlide('section-ethics', 'Ethical Considerations', 'Chapter Three', 'Shield'),
  {
    id: 'slide-13',
    layout: 'bullets',
    title: 'Ethical Considerations',
    subtitle: 'Chapter Three',
    icon: 'Shield',
    bullets: [
      '[ShieldCheck] No human subjects can be recruited for research or data collection nor will I collect data without the IRB approval and completion of all Human Subjects training requirements.',
      '[FileText] All participants will give written informed consent before taking part.',
      '[Building2] Written site permission will be obtained from each participating publishing organization before recruitment within that organization.',
      '[UserRound] Confidentiality is stressed and achieved by using pseudonyms for participants, case codes for organizations, and by omitting identifying information from transcripts, documents, field notes, and reports.',
      '[Lock] All digital materials will be kept in an encrypted, password-protected system accessible only to me, and all physical materials will be kept in a locked cabinet.',
      '[ClipboardList] In compliance with doctoral record-keeping requirements, all data will be retained for a minimum of 3 years after completion of the degree and then destroyed through secure deletion of electronic files and shredding of paper records.',
    ],
    notes:
      'No human subjects will be recruited and no data will be collected without IRB approval and completion of all Human Subjects training requirements. All participants will give written informed consent before taking part. Written site permission will be obtained from each participating publishing organization before recruitment within that organization. Confidentiality will be protected through pseudonyms for participants, case codes for organizations, and by omitting identifying information from transcripts, documents, field notes, and reports. Digital materials will be kept in an encrypted, password-protected system accessible only to me, and physical materials will be kept in a locked cabinet. All data will be retained for a minimum of three years after completion of the degree and then destroyed through secure deletion of electronic files and shredding of paper records.',
  },
  sectionSlide('section-analysis', 'Data Analysis', 'Chapter Three', 'ListChecks'),
  {
    id: 'slide-14',
    layout: 'framework',
    title: 'Data Analysis',
    subtitle: 'Chapter Three',
    icon: 'ListChecks',
    frameworkBlocks: [
      {
        label: 'Procedure',
        icon: 'ListChecks',
        text: 'All three data sources will be analyzed using the six-phase thematic analysis procedure of Braun and Clarke (2006), supported by the reflexive refinements the authors later articulated (Braun & Clarke, 2021).',
      },
      {
        label: 'Within → Across',
        icon: 'Layers',
        text: 'Analysis will proceed within each case before cross-case synthesis, and NVivo software will support coding, memoing, and an audit trail (Nowell et al., 2017).',
      },
      {
        label: 'Triangulation',
        icon: 'Network',
        text: 'Applying the same thematic procedure to interviews, firm-produced documents, and external procurement records will permit triangulation of themes across the three data sources (Bowen, 2009).',
      },
    ],
    notes:
      'All three data sources will be analyzed using Braun and Clarke’s six-phase thematic analysis procedure, with the reflexive refinements they later articulated. Analysis will proceed within each case before cross-case synthesis, and NVivo will support coding, memoing, and an audit trail. Applying the same thematic procedure to interviews, firm-produced documents, and external procurement records will permit triangulation of themes across the three data sources.',
  },
  sectionSlide('section-trustworthiness', 'Trustworthiness and Positionality', 'Chapter Three', 'ShieldCheck'),
  {
    id: 'slide-15',
    layout: 'twoColumn',
    title: 'Trustworthiness and Researcher Positionality',
    subtitle: 'Chapter Three',
    icon: 'ShieldCheck',
    leftTitle: 'Trustworthiness',
    leftBullets: [
      '[Scale] In this study the four traditional qualitative research criteria, credibility, transferability, dependability and confirmability, as described by Lincoln and Guba (1985) and Nowell et al. (2017), are presented as indicators of trustworthiness.',
      '[Network] Evidence will be triangulated across interviews, firm-produced documents, and external procurement records.',
      '[ClipboardList] I will keep a documented audit trail of methodological and analytic decisions, protocol changes and coding development.',
      '[NotebookPen] I will employ reflexive journaling and memoing, record explicit evidence for each interpretation, look for disconfirming elements and negative cases.',
    ],
    rightTitle: 'Researcher Positionality',
    rightBullets: [
      '[UserRound] I have leadership experience and professional visibility in the Nigerian publishing industry.',
      '[CircleAlert] This insider role carries methodological advantages but also the potential for pre-existing assumptions to bias data analysis.',
      '[NotebookPen] I will address this risk by keeping a systematic reflexive journal throughout data collection and analysis.',
      '[Shield] These reflexive practices are designed to ensure that my industry background contributes contextual sensitivity rather than reducing interpretive openness (Berger, 2015; Tracy, 2010).',
    ],
    notes:
      'Trustworthiness will be assessed using Lincoln and Guba’s four criteria: credibility, transferability, dependability, and confirmability. Evidence will be triangulated across interviews, firm-produced documents, and external procurement records. I will keep a documented audit trail of methodological and analytic decisions, protocol changes, and coding development. I will also use reflexive journaling and memoing, record explicit evidence for each interpretation, and look for disconfirming elements and negative cases. On positionality: I have leadership experience and professional visibility in the Nigerian publishing industry. That insider role carries methodological advantages, but also the risk that pre-existing assumptions could bias analysis. I will address that risk by keeping a systematic reflexive journal throughout data collection and analysis, so that my industry background contributes contextual sensitivity rather than reducing interpretive openness.',
  },
  sectionSlide('section-significance', 'Significance of the Study', 'Chapter One', 'Sparkles'),
  {
    id: 'slide-16',
    layout: 'framework',
    title: 'Significance of the Study',
    subtitle: 'Chapter One',
    icon: 'Sparkles',
    frameworkBlocks: [
      {
        label: 'Scholarship',
        icon: 'GraduationCap',
        text: 'This study may contribute to the scholarly field of technology adoption and B2B marketing in emerging economies. The findings of the study may provide explanatory depth to the existing literature on the interaction of technology, organization, and environment in a specialized creative industry.',
      },
      {
        label: 'Practice',
        icon: 'Store',
        text: 'The results could help Nigerian publishers, especially SMEs which make up the bulk of the industry, make informed decisions on technology investment based on the results of similar firms\' executives on the actual returns of various technologies.',
      },
      {
        label: 'Policy / Society',
        icon: 'Landmark',
        text: 'Evidence on specific infrastructure, financing, and skills gaps could inform the interventions of government institutions such as the Nigerian Copyright Commission and the agencies responsible for national digital economy policy. To the extent that a more digitally capable publishing sector improves the distribution of educational materials, the findings may support literacy, education, and the wider national development agenda (Owolabi, 2024).',
      },
    ],
    notes:
      'This study may contribute to scholarship on technology adoption and B2B marketing in emerging economies by providing explanatory depth on how technology, organization, and environment interact in a specialized creative industry. In practice, the results could help Nigerian publishers, especially SMEs, make more informed technology-investment decisions based on how similar firms’ executives assess the actual returns of various technologies. For policy and society, evidence on infrastructure, financing, and skills gaps could inform interventions by institutions such as the Nigerian Copyright Commission and agencies responsible for national digital economy policy. To the extent that a more digitally capable publishing sector improves the distribution of educational materials, the findings may support literacy, education, and the wider national development agenda.',
  },
  sectionSlide('section-scope', 'Scope and Delimitations', 'Chapter Three', 'Crosshair'),
  {
    id: 'slide-17',
    layout: 'bullets',
    title: 'Scope and Delimitations',
    subtitle: 'Chapter Three',
    icon: 'Crosshair',
    bullets: [
      '[MapPin] This study is bounded to executives of book publishing firms operating within Nigeria and to their perceptions and experiences of IT use in B2B marketing strategies.',
      '[Ban] The study does not extend to consumer-facing (B2C) marketing, to publishing firms outside Nigeria, or to a technical evaluation of specific IT systems; instead, it focuses on the organizational and strategic experience of publishing executives.',
      '[BookOpen] The study is delimited to book publishing firms within Nigeria and not other creative firms, because the study problem and the literature are focused specifically on the publishing sector.',
      '[Handshake] It is limited to B2B marketing strategy because institutional buyers form the revenue base of the problem set.',
      '[Target] These boundaries were selected to maintain alignment between the problem, purpose, and research questions and to keep the study feasible within the doctoral timeframe.',
    ],
    notes:
      'This study is bounded to executives of book publishing firms operating within Nigeria and to their perceptions and experiences of IT use in B2B marketing strategies. It does not extend to consumer-facing B2C marketing, to publishing firms outside Nigeria, or to a technical evaluation of specific IT systems. It focuses on the organizational and strategic experience of publishing executives. It is delimited to book publishing firms within Nigeria, not other creative firms, because the problem and the literature are focused specifically on publishing. It is limited to B2B marketing strategy because institutional buyers form the revenue base of the problem set. These boundaries were selected to keep the problem, purpose, and research questions aligned and to keep the study feasible within the doctoral timeframe.',
  },
  {
    id: 'slide-18',
    layout: 'closing',
    title: 'Questions & Discussion',
    subtitle:
      'The purpose of this qualitative multiple case study is to explore how publishing executives of book publishing firms in Nigeria perceive the role of information technology in shaping business-to-business marketing strategies and the challenges they experience when integrating IT into those strategies.',
    icon: 'MessageCircle',
    footer:
      'Gbadega Adedapo · Westcliff University · DBA Preliminary Defense · August 2026',
    notes:
      'The purpose of this qualitative multiple case study is to explore how publishing executives of book publishing firms in Nigeria perceive the role of information technology in shaping business-to-business marketing strategies and the challenges they experience when integrating IT into those strategies. I welcome the committee’s questions and recommendations.',
  },
]

export const SEED_REVISION = 9

export const seedPresentation: PresentationState = {
  slides: seedSlides,
  currentIndex: 0,
  seedRevision: SEED_REVISION,
  meta: PRESENTATION_META,
}
