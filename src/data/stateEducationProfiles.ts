/**
 * State-specific education context for the 35 proposals cloned from the Ekiti seed.
 * Ekiti keeps its own file. Facts used here were checked against public sources:
 * UNICEF education fact sheets (MICS) and the Nov 2024 BAY-states note;
 * official pages for EdoBEST 2.0, EKOEXCEL, KwaraLEARN, and BayelsaPRIME;
 * Enugu Smart Green Schools, Anambra Smart Learn, Abia free basic education,
 * Oyo BESDA AF-TESS, Nasarawa AGILE, and the Kogi SUBEB UBE guideline 2025–2030.
 * Osun: State Government releases on the Imole Teachers Corps (30 July 2025, 1,750),
 * the 2026 teachers’ recruitment (22 March 2026: 1,241 — 660 SUBEB, 526 TESCOM,
 * 55 education officers), and the 2026 NECO result (29 September 2026: 5th nationally,
 * 74.31 per cent). Osun copy does not cite Opon Imo or any earlier administration’s programme.
 * Programme names stay with the state that runs them.
 */

export type StateEducationProfile = {
  /** Opening recognition in the letter slide. */
  letterBullet: string
  /** Cover-letter paragraph: recognition plus how SmartEdu Hub fits. */
  coverParagraph: string
  /** Replaces the generic "For {State}, it offers..." sentence. */
  summarySentence: string
  priorities: string[]
  contributions: string[]
  /** Noun phrase after "a first pilot in". */
  pilotPlace: string
  rolloutNote: string
  conclusionSentence: string
  /** Completes "configurable to support ...". */
  languages: string
  sectionLine: string
}

export const STATE_EDUCATION_PROFILES: Record<string, StateEducationProfile> = {
  abia: {
    letterBullet:
      'We recognise the Ministry’s work to make basic education free and compulsory from Primary 1 to JSS 3, to renovate public schools across all 17 Local Government Areas, and to prepare teachers for smart schools in Umuahia, Aba, and Ohafia.',
    coverParagraph:
      'We recognise the Ministry’s work to make basic education free and compulsory from Primary 1 to JSS 3, to renovate public schools across all 17 Local Government Areas, and to prepare teachers for smart schools in Umuahia, Aba, and Ohafia. SmartEdu Hub gives that reform a daily system for enrolment, attendance, lessons, and SUBEB reporting, building on schools in Abia that have already adopted the platform.',
    summarySentence:
      'For Abia State, SmartEdu Hub connects free compulsory basic education and the smart-school programme to enrolment, classroom tools, and a SUBEB view across all 17 LGAs, starting from schools in the state that already use the platform.',
    priorities: [
      'See whether free, compulsory basic education from Primary 1 to JSS 3 is filling classrooms.',
      'Support teachers moving into renovated and smart schools in Umuahia, Aba, Isiala Ngwa, and Ohafia.',
      'Hold one performance view across the Abia North, Central, and South senatorial districts.',
      'Give supervisors lesson notes and assessment records when they visit new classrooms.',
      'Use the schools already on SmartEdu Hub in Abia as the reference group for a wider rollout.',
    ],
    contributions: [
      'Digital enrolment, daily attendance, and parent alerts for the free-education cohort.',
      'Teacher training on iBooks, lesson notes, and classroom assessment, alongside the smart-school training already under way.',
      'A SUBEB dashboard filterable by school and LGA, from Aba South to Ohafia and Bende.',
      'Downloadable lesson notes and continuous-assessment records for ministry supervisors.',
      'A living pilot inside Abia, where more than 30 schools adopted SmartEdu Hub within three months of launch.',
    ],
    pilotPlace: 'Umuahia, Aba, and Ohafia, including schools already on SmartEdu Hub',
    rolloutNote:
      'The wider rollout has to serve both the Aba commercial corridor and the northern LGAs around Ohafia and Bende.',
    conclusionSentence:
      'A state-wide adoption would give Abia one operating system for free compulsory education and the smart-school programme, across all 17 Local Government Areas, with classrooms in the state already able to show how the platform behaves.',
    languages: 'English and Igbo',
    sectionLine:
      'Free compulsory basic education and smart schools across Abia’s 17 LGAs',
  },

  adamawa: {
    letterBullet:
      'We recognise the Ministry’s work in a state that shares the north-east learning crisis with Borno and Yobe. In November 2024 UNICEF reported about two million out-of-school children across the three states, with more than half of displaced children not in school. Adamawa’s own task is to keep Yola, Numan, and the southern LGAs learning while absorbing displaced learners, especially along the Mubi axis.',
    coverParagraph:
      'We recognise the Ministry’s work in a state that shares the north-east learning crisis with Borno and Yobe. In November 2024 UNICEF reported about two million out-of-school children across the three states, with more than half of displaced children not in school. Adamawa’s own task is to keep Yola, Numan, and the southern LGAs learning while absorbing displaced learners, especially along the Mubi axis. SmartEdu Hub offers offline catch-up content, learner records that survive a transfer, and a SUBEB view of which schools are actually being reached.',
    summarySentence:
      'For Adamawa State, SmartEdu Hub is a catch-up and records system for schools in Yola and Numan and for displaced learners arriving from harder-hit LGAs, with offline content and attendance the Ministry can see across all 21 LGAs.',
    priorities: [
      'Enrol and keep displaced children who have settled in Yola, Mubi, and host communities.',
      'Protect learning time in functioning schools across the southern LGAs around Numan and Demsa.',
      'Support teachers where qualified staff are scarce, a problem UNICEF has flagged across the north-east.',
      'Carry learner records when a child moves between an IDP setting and a formal school.',
      'Give SUBEB a true picture of the 21 LGAs, including those officers cannot visit every week.',
    ],
    contributions: [
      'Simple digital enrolment and attendance that host schools can open for newly arrived learners.',
      'Offline NERDC iBooks and lesson notes so southern and central schools keep teaching through power cuts.',
      'Teacher guides, worked examples, and refresher training that help a thin teaching force cover the syllabus.',
      'Transferable learner records, so a child is not re-registered as a stranger in the next school.',
      'An LGA dashboard for Yola North, Yola South, Mubi, and the rest of the state.',
    ],
    pilotPlace: 'Yola North, Yola South, and one LGA on the Mubi axis hosting displaced learners',
    rolloutNote:
      'Later phases need a different plan for the Mubi corridor than for Numan, Guyuk, and the southern LGAs.',
    conclusionSentence:
      'A state-wide adoption would give Adamawa a way to hold displaced and host-community learners in one record, and to keep ordinary schools in Yola and the south teaching with materials that work offline, across all 21 Local Government Areas.',
    languages: 'English, Hausa, and Fulfulde',
    sectionLine:
      'Learning continuity for host schools and displaced learners across Adamawa’s 21 LGAs',
  },

  'akwa-ibom': {
    letterBullet:
      'We recognise Akwa Ibom’s long commitment to free and compulsory education from primary through secondary, including learning materials and public-examination support, across 31 Local Government Areas that run from Uyo to coastal communities such as Mbo, Eastern Obolo, and Ibeno. We were also glad that Happiness John of Joy Prime Model Secondary School in this state won the national first prize of the Accessible Summer Competition on SmartEdu Hub.',
    coverParagraph:
      'We recognise Akwa Ibom’s long commitment to free and compulsory education from primary through secondary, including learning materials and public-examination support, across 31 Local Government Areas that run from Uyo to coastal communities such as Mbo, Eastern Obolo, and Ibeno. We were also glad that Happiness John of Joy Prime Model Secondary School in this state won the national first prize of the Accessible Summer Competition on SmartEdu Hub. The same platform can help the Ministry see whether free education is producing attendance, completed syllabuses, and examination readiness in both upland and riverine schools.',
    summarySentence:
      'For Akwa Ibom State, SmartEdu Hub turns a long-running free-education policy into attendance, lesson, and examination data across 31 LGAs, from Uyo to the coastal schools that supervisors reach with more difficulty.',
    priorities: [
      'Show that free primary and secondary education is producing attendance, not only enrolment.',
      'Reach coastal and riverine LGAs such as Mbo, Eastern Obolo, Ibeno, and Oron with the same learning materials as Uyo.',
      'Prepare candidates for WAEC, NECO, and JAMB in a state that already pays public examination support.',
      'Give SUBEB one view of 31 LGAs, one of the largest LGA maps in the federation.',
      'Build on local proof: a student of Joy Prime Model Secondary School won the national SmartEdu Hub competition.',
    ],
    contributions: [
      'Daily attendance, parent alerts, and termly learner records behind the free-education policy.',
      'Offline iBooks and lesson packs that riverine schools can use when the network drops.',
      'CBT practice for WAEC, NECO, JAMB, BECE, and the state placement examinations.',
      'A dashboard filterable by LGA, so Uyo, Eket, Ikot Ekpene, and the coastal belt are visible together.',
      'A public, in-state result on the same platform: first prize in the Accessible Summer Competition.',
    ],
    pilotPlace: 'Uyo, Eket, and Ikot Ekpene, plus one coastal LGA',
    rolloutNote:
      'The full map has 31 LGAs, so the rollout should move by senatorial district and keep a separate plan for schools reached by water.',
    conclusionSentence:
      'A state-wide adoption would give Akwa Ibom a way to manage free education across all 31 Local Government Areas, with the same standard of content in Uyo and in the coastal schools, and with examination practice attached to the support the state already provides.',
    languages: 'English and Ibibio, with room for the other languages of the state',
    sectionLine:
      'Free primary-to-secondary education across Akwa Ibom’s 31 LGAs, upland and coastal',
  },

  anambra: {
    letterBullet:
      'We recognise Anambra’s Smart Learn programme, already piloted in 22 public schools across the 21 Local Government Areas, and the state’s decision to make public education free from nursery through SS3. Anambra also has a long reputation for strong examination performance, which raises the standard any digital system must meet.',
    coverParagraph:
      'We recognise Anambra’s Smart Learn programme, already piloted in 22 public schools across the 21 Local Government Areas, and the state’s decision to make public education free from nursery through SS3. Anambra also has a long reputation for strong examination performance, which raises the standard any digital system must meet. SmartEdu Hub can sit with that investment as the learner content, continuous assessment, CBT practice, and SUBEB reporting layer for smart-school classrooms from Awka and Onitsha to the smaller towns.',
    summarySentence:
      'For Anambra State, SmartEdu Hub supplies NERDC content, examination practice, and school records for the Smart Learn schools and for the wider free-education system across all 21 LGAs.',
    priorities: [
      'Fill Smart Learn classrooms with syllabus-aligned content, not only devices and connectivity.',
      'Keep free education from nursery to SS3 visible as attendance, results, and teacher activity.',
      'Match the examination standard families in Awka, Onitsha, and Nnewi already expect.',
      'Extend the same digital learning to LGAs outside the first 22 smart-school sites.',
      'Give the Ministry one academic record across all 21 LGAs.',
    ],
    contributions: [
      'Interactive iBooks, videos, and an AI tutor that run inside a smart classroom.',
      'Attendance, results, and parent communication for the free nursery-to-SS3 policy.',
      'Timed CBT for WAEC, NECO, JAMB, BECE, and school mock examinations.',
      'The same content library for schools still waiting for the next smart-school batch.',
      'A SUBEB and ministry dashboard by school and LGA, from Onitsha North to Ihiala and Aguata.',
    ],
    pilotPlace: 'the 22 Smart Learn schools, with at least one school in each senatorial district',
    rolloutNote:
      'The second wave should cover LGAs that were not in the first smart-school batch, so the digital standard does not stop at 22 campuses.',
    conclusionSentence:
      'A state-wide adoption would give Anambra a learning and records system worthy of Smart Learn and of the free nursery-to-SS3 policy, across all 21 Local Government Areas.',
    languages: 'English and Igbo',
    sectionLine:
      'Content, assessment, and records for Smart Learn Anambra and free public education',
  },

  bauchi: {
    letterBullet:
      'We recognise the scale of the task before the Ministry. UNICEF education fact sheets place Bauchi among the states where more than half of primary-school-age children are out of school. The work in front of SUBEB is to bring those children in, to link formal schools with integrated Qur’anic and tsangaya centres, and to supervise widely scattered rural communities across 20 Local Government Areas.',
    coverParagraph:
      'We recognise the scale of the task before the Ministry. UNICEF education fact sheets place Bauchi among the states where more than half of primary-school-age children are out of school. The work in front of SUBEB is to bring those children in, to link formal schools with integrated Qur’anic and tsangaya centres, and to supervise widely scattered rural communities across 20 Local Government Areas. SmartEdu Hub helps the Ministry see who is enrolled, who is attending, and who is learning, including children moving between tsangaya centres and formal classrooms.',
    summarySentence:
      'For Bauchi State, SmartEdu Hub is a practical system for finding out-of-school children, supporting girls into junior secondary school, and giving SUBEB a view of formal schools and integrated Qur’anic centres across all 20 LGAs.',
    priorities: [
      'Reduce the out-of-school population, which UNICEF places above half of primary-age children.',
      'Support girls to enter and stay through junior secondary school.',
      'Keep a record of learners in integrated Qur’anic and tsangaya centres as well as formal schools.',
      'Reach rural LGAs such as Alkaleri, Toro, and Darazo with offline materials.',
      'Give Bauchi SUBEB comparable data for Bauchi metropolis, Azare, and the rural LGAs.',
    ],
    contributions: [
      'Community and school enrolment tools that make an out-of-school child visible to the LGEA.',
      'Attendance tracking and parent communication aimed at girls’ retention into JSS.',
      'Learner records that a tsangaya centre and a formal school can both update.',
      'Offline iBooks, lesson notes, and quizzes for schools with weak power and connectivity.',
      'A dashboard split by LGA, so Azare, Misau, and Alkaleri are not hidden behind the capital.',
    ],
    pilotPlace: 'Bauchi metropolis, Katagum (Azare), and one large rural LGA such as Alkaleri',
    rolloutNote:
      'Alkaleri and the other large rural LGAs need an offline-first deployment, with a different school density from Bauchi metropolis.',
    conclusionSentence:
      'A state-wide adoption would give Bauchi a way to count, teach, and follow learners in formal schools and integrated Qur’anic centres across all 20 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Out-of-school children, girls’ transition, and tsangaya integration across Bauchi’s 20 LGAs',
  },

  bayelsa: {
    letterBullet:
      'We recognise BayelsaPRIME as the state’s primary-school reform, built for all public primary schools across the eight Local Government Areas, in a state where many communities are reached by water. This proposal sits beside that programme. It adds junior secondary records, learner content, examination practice, and parent communication, especially for creek communities where an officer cannot pass every week.',
    coverParagraph:
      'We recognise BayelsaPRIME as the state’s primary-school reform, built for all public primary schools across the eight Local Government Areas, in a state where many communities are reached by water. This proposal sits beside that programme. It adds junior secondary records, learner content, examination practice, and parent communication, especially for creek communities where an officer cannot pass every week. SmartEdu Hub is the learning and school-management layer for the years and the functions around BayelsaPRIME.',
    summarySentence:
      'For Bayelsa State, SmartEdu Hub sits beside BayelsaPRIME and extends digital learning, examination practice, and school records into junior secondary and into riverine LGAs across all eight local governments.',
    priorities: [
      'Keep BayelsaPRIME’s primary reform intact while covering junior secondary on the same map.',
      'Reach Southern Ijaw, Ekeremor, Brass, and Nembe with materials that work offline.',
      'Give SUBEB a weekly picture of schools that supervisors visit by boat.',
      'Prepare JSS students for BECE in small schools far from Yenagoa.',
      'Use one learner record from primary into junior secondary.',
    ],
    contributions: [
      'Junior-secondary iBooks, assessment, and records that complement BayelsaPRIME in primary schools.',
      'Offline content packs for creek and riverine schools.',
      'A live dashboard so a closed school in a riverine LGA is visible without a physical visit.',
      'BECE and basic-education CBT practice assigned by the class teacher.',
      'A learner record that follows the child from primary into JSS inside the same state system.',
    ],
    pilotPlace:
      'Yenagoa and one riverine LGA, beside schools already in BayelsaPRIME',
    rolloutNote:
      'Eight LGAs sounds small until the creeks are counted. Southern Ijaw alone needs its own deployment plan.',
    conclusionSentence:
      'A state-wide adoption would give Bayelsa a junior-secondary and learner-content layer beside BayelsaPRIME, covering all eight Local Government Areas, including the communities reached by water.',
    languages: 'English and Nigerian Pidgin, with room for Ijaw as the Ministry requires',
    sectionLine:
      'A junior-secondary and records layer beside BayelsaPRIME, including the creeks',
  },

  benue: {
    letterBullet:
      'We recognise the Ministry’s effort to keep schools open in Makurdi, Gboko, and Otukpo while restoring learning in LGAs where conflict has closed classrooms or turned them into shelters for displaced families, including communities in Guma, Logo, Agatu, Kwande, and Gwer West. Children in Benue need a record that survives that movement, and teachers need materials they can use when a term is interrupted.',
    coverParagraph:
      'We recognise the Ministry’s effort to keep schools open in Makurdi, Gboko, and Otukpo while restoring learning in LGAs where conflict has closed classrooms or turned them into shelters for displaced families, including communities in Guma, Logo, Agatu, Kwande, and Gwer West. Children in Benue need a record that survives that movement, and teachers need materials they can use when a term is interrupted. SmartEdu Hub is offered as that continuity layer for all 23 Local Government Areas.',
    summarySentence:
      'For Benue State, SmartEdu Hub keeps learner records and catch-up lessons available for children moving between displaced communities and open schools in Makurdi, Gboko, and Otukpo, across all 23 LGAs.',
    priorities: [
      'Restore learning in LGAs where schools have been closed or used as shelters.',
      'Keep a continuous record for children moving between camps, host communities, and town schools.',
      'Support teachers in Makurdi, Gboko, and Otukpo who have absorbed extra learners.',
      'Cover Tiv, Idoma, and Igede communities with the same SUBEB standard.',
      'See all 23 LGAs, including those officers cannot safely visit on a fixed round.',
    ],
    contributions: [
      'Catch-up iBooks and short assessments for learners who have missed terms.',
      'Transferable enrolment and attendance records between host schools and home LGAs.',
      'Lesson notes and class tools for teachers handling overcrowded town schools.',
      'One state dashboard covering Benue North-East, North-West, and Benue South.',
      'Offline use, so a school that reconnects later still syncs its attendance and results.',
    ],
    pilotPlace: 'Makurdi, Gboko, and one LGA hosting displaced learners',
    rolloutNote:
      'Gboko and Otukpo should not wait for every riverine or conflict-affected LGA to be fully open. Parallel tracks will be needed.',
    conclusionSentence:
      'A state-wide adoption would give Benue a way to keep teaching and to keep track of children across all 23 Local Government Areas, including those whose schools have been interrupted.',
    languages: 'English, Tiv, and Idoma, configured as the Ministry requires',
    sectionLine:
      'Learning continuity for open schools and displaced communities across Benue’s 23 LGAs',
  },

  borno: {
    letterBullet:
      'We recognise the Ministry’s work to restore learning in the state most affected by attacks on education. UNICEF’s November 2024 note on Borno, Adamawa, and Yobe reported about two million out-of-school children across the three states, more than half of displaced children out of school, and fewer than three in ten schools with teachers who meet the minimum qualification. In Borno that burden is heaviest in Maiduguri and Jere, where enrolment has concentrated, and in northern LGAs that remain hard to reach.',
    coverParagraph:
      'We recognise the Ministry’s work to restore learning in the state most affected by attacks on education. UNICEF’s November 2024 note on Borno, Adamawa, and Yobe reported about two million out-of-school children across the three states, more than half of displaced children out of school, and fewer than three in ten schools with teachers who meet the minimum qualification. In Borno that burden is heaviest in Maiduguri and Jere, where enrolment has concentrated, and in northern LGAs that remain hard to reach. SmartEdu Hub is offered as an offline catch-up and records system for all 27 Local Government Areas, respectful of integrated Qur’anic schooling and of the teachers carrying more than a normal load.',
    summarySentence:
      'For Borno State, SmartEdu Hub supports catch-up learning and learner records in Maiduguri and Jere, and gives SUBEB a way to follow schools in harder-to-reach LGAs, across a system of 27 LGAs still recovering from attacks on education.',
    priorities: [
      'Bring displaced and out-of-school children into a record the Ministry can trust.',
      'Support the large school population now concentrated in Maiduguri and Jere.',
      'Keep a line of sight to northern and eastern LGAs that officers cannot visit routinely.',
      'Help teachers who are below the qualification standard to deliver the NERDC syllabus.',
      'Include learners in integrated Qur’anic and tsangaya settings in the state’s picture.',
    ],
    contributions: [
      'Rapid enrolment and attendance for camp, host-community, and formal schools.',
      'Offline iBooks, lesson notes, and short quizzes sized for overcrowded urban schools.',
      'A dashboard that still shows a silent LGA, so absence of data is itself a signal.',
      'Worked examples, common-mistake prompts, and teacher guides that travel with the lesson.',
      'Learner profiles that a tsangaya centre and a formal school can share.',
    ],
    pilotPlace: 'Maiduguri, Jere, and one southern LGA such as Biu where schools are functioning',
    rolloutNote:
      'Northern LGAs that are still hard to reach need offline kits and a security-aware schedule, separate from the Maiduguri rollout.',
    conclusionSentence:
      'A state-wide adoption would give Borno an offline learning and records system for Maiduguri, Jere, and the LGAs still being restored, across all 27 Local Government Areas.',
    languages: 'English, Hausa, and Kanuri',
    sectionLine:
      'Catch-up learning and school records for Borno’s recovery across 27 LGAs',
  },

  'cross-river': {
    letterBullet:
      'We recognise the range the Ministry has to cover: urban schools in Calabar, coastal communities in Bakassi and Akpabuyo, and highland schools toward Obudu and Obanliku, plus the forested central LGAs. Calabar, the coast, and the highlands each need a supervision plan of their own. The state needs learning materials and school records that travel to places an officer reaches only occasionally.',
    coverParagraph:
      'We recognise the range the Ministry has to cover: urban schools in Calabar, coastal communities in Bakassi and Akpabuyo, and highland schools toward Obudu and Obanliku, plus the forested central LGAs. Calabar, the coast, and the highlands each need a supervision plan of their own. The state needs learning materials and school records that travel to places an officer reaches only occasionally. SmartEdu Hub is that shared layer, with offline content for the hills and the coast and a live dashboard for SUBEB in Calabar.',
    summarySentence:
      'For Cross River State, SmartEdu Hub gives Calabar, the Bakassi coast, and the Obudu highlands the same NERDC content and a single SUBEB record across all 18 LGAs.',
    priorities: [
      'Hold Calabar schools and remote highland schools to the same curriculum standard.',
      'Serve Bakassi, Akpabuyo, and other coastal communities with offline materials.',
      'Reduce the supervision gap in central LGAs such as Ikom, Boki, and Etung.',
      'Prepare learners for BECE and SSCE wherever the school sits.',
      'Give the Ministry one map of all 18 LGAs.',
    ],
    contributions: [
      'The same iBooks and lesson notes in a Calabar classroom and an Obanliku classroom.',
      'Offline downloads for coastal and highland schools with weak connectivity.',
      'LGEA-level dashboards so a missed visit does not mean a missing report.',
      'CBT practice for BECE, WAEC, NECO, and JAMB.',
      'A state view from Calabar Municipality to Obudu, Yala, and Ogoja.',
    ],
    pilotPlace: 'Calabar Municipality, Akpabuyo, and Obudu',
    rolloutNote:
      'The highland LGAs and Bakassi should be scheduled on their own, with offline kits packed before deployment teams travel.',
    conclusionSentence:
      'A state-wide adoption would give Cross River one curriculum system and one school record from Calabar to the coast and the highlands, across all 18 Local Government Areas.',
    languages: 'English and Nigerian Pidgin, with other Cross River languages added as the Ministry requires',
    sectionLine:
      'One learning standard for Calabar, the coast, and the Obudu highlands',
  },

  delta: {
    letterBullet:
      'We recognise that Delta’s 25 Local Government Areas do not share one school reality. Delta North around Asaba, Delta Central around Warri and Ughelli, and the riverine schools of Delta South are supervised under different conditions of language, access, and school size. The Ministry needs a system that can read all three districts on one dashboard.',
    coverParagraph:
      'We recognise that Delta’s 25 Local Government Areas do not share one school reality. Delta North around Asaba, Delta Central around Warri and Ughelli, and the riverine schools of Delta South are supervised under different conditions of language, access, and school size. The Ministry needs a system that can read all three districts on one dashboard. SmartEdu Hub provides that common record, with offline content for schools reached by water and examination practice for the dense secondary-school corridors.',
    summarySentence:
      'For Delta State, SmartEdu Hub gives Asaba, the Warri–Ughelli corridor, and riverine Delta South one school record and the same NERDC content across all 25 LGAs.',
    priorities: [
      'See Delta North, Central, and South on one SUBEB dashboard.',
      'Reach Burutu, Bomadi, Patani, and other riverine schools with offline materials.',
      'Serve the heavy secondary-school population in Warri, Uvwie, and Asaba.',
      'Keep learner records comparable across Urhobo, Igbo, Ijaw, Isoko, and Itsekiri communities.',
      'Prepare candidates for WAEC, NECO, and JAMB at the volume Delta already enters.',
    ],
    contributions: [
      'Zone and LGA filters for all 25 local governments.',
      'Offline iBooks and attendance that sync when a riverine school reconnects.',
      'CBT, report cards, and parent communication for large urban secondary schools.',
      'One learner profile standard, whichever language community the school serves.',
      'Past-question practice for WAEC, NECO, JAMB, and BECE.',
    ],
    pilotPlace: 'Asaba, Warri South, and one riverine LGA such as Burutu or Bomadi',
    rolloutNote:
      'Each senatorial district should have its own deployment lead, with Delta South planned around water transport.',
    conclusionSentence:
      'A state-wide adoption would give Delta a single education record for Asaba, the central corridor, and the riverine south, across all 25 Local Government Areas.',
    languages: 'English and the main languages of Delta North, Central, and South, as the Ministry specifies',
    sectionLine:
      'One school record for Delta North, Central, and the riverine south',
  },

  ebonyi: {
    letterBullet:
      'We recognise that Ebonyi’s binding education task is quality, because access is already comparatively strong. UNICEF education fact sheets place Ebonyi among the states with the lowest senior-secondary out-of-school rates in Nigeria. The opportunity is to raise lesson quality, assessment, and supervision in rural classrooms across the 13 Local Government Areas so that attendance becomes learning.',
    coverParagraph:
      'We recognise that Ebonyi’s binding education task is quality, because access is already comparatively strong. UNICEF education fact sheets place Ebonyi among the states with the lowest senior-secondary out-of-school rates in Nigeria. The opportunity is to raise lesson quality, assessment, and supervision in rural classrooms across the 13 Local Government Areas so that attendance becomes learning. SmartEdu Hub is built for that step: teacher lesson tools, continuous assessment, and a SUBEB view from Abakaliki to Afikpo and the rural LGAs.',
    summarySentence:
      'For Ebonyi State, where senior-secondary attendance is already among the strongest in Nigeria, SmartEdu Hub raises lesson quality, assessment, and rural supervision across all 13 LGAs.',
    priorities: [
      'Turn strong attendance into stronger learning outcomes in rural schools.',
      'Give teachers in Abakaliki, Afikpo, Ikwo, and Onueke the same lesson-note standard.',
      'Prepare more learners for WAEC, NECO, and JAMB, not only for enrolment.',
      'Help SUBEB supervise Ebonyi North, Central, and South with the same indicators.',
      'Use continuous assessment data to find the topics rural classes are missing.',
    ],
    contributions: [
      'NERDC iBooks, videos, and topic quizzes that show where a class is stuck.',
      'Shared lesson-note and assessment tools for urban and rural teachers.',
      'CBT practice for SSCE and JAMB, assigned by the subject teacher.',
      'A 13-LGA dashboard with the same fields in every zone.',
      'Common-mistake prompts and revision aids tied to the topics learners fail.',
    ],
    pilotPlace: 'Abakaliki, Afikpo, and Ikwo',
    rolloutNote:
      'Thirteen LGAs make a full rollout realistic in one academic year once the three-zone pilot is stable.',
    conclusionSentence:
      'A state-wide adoption would give Ebonyi a quality and supervision system worthy of the attendance the state has already achieved, across all 13 Local Government Areas.',
    languages: 'English and Igbo',
    sectionLine:
      'Learning quality and rural supervision across Ebonyi’s 13 LGAs',
  },

  edo: {
    letterBullet:
      'We recognise EdoBEST 2.0 as the centre of Edo’s 2024–2027 basic education plan, covering access, equity, teacher support, and learning outcomes, including out-of-school and displaced children. This proposal sits beside that reform. It adds learner-facing content, examination practice, parent records, and secondary-school management across the 18 Local Government Areas. A student of The Oasis Schools, Ekpoma, took national second prize in the Accessible Summer Competition on SmartEdu Hub.',
    coverParagraph:
      'We recognise EdoBEST 2.0 as the centre of Edo’s 2024–2027 basic education plan, covering access, equity, teacher support, and learning outcomes, including out-of-school and displaced children. This proposal sits beside that reform. It adds learner-facing content, examination practice, parent records, and secondary-school management across the 18 Local Government Areas. A student of The Oasis Schools, Ekpoma, took national second prize in the Accessible Summer Competition on SmartEdu Hub, which gives Edo a local demonstration of the learner side of the platform.',
    summarySentence:
      'For Edo State, SmartEdu Hub sits beside EdoBEST 2.0 and adds learner content, CBT practice, parent records, and secondary-school management across all 18 LGAs.',
    priorities: [
      'Keep EdoBEST 2.0 as the primary-school reform and cover the learner and secondary layers around it.',
      'Serve Benin City, the Esan axis around Ekpoma, and Edo North around Auchi with one record.',
      'Strengthen WAEC, NECO, and JAMB practice in a state with a deep secondary-school tradition.',
      'Include out-of-school and displaced children in the same data the strategic plan already names.',
      'Give parents a window on attendance and results.',
    ],
    contributions: [
      'iBooks, AI tutor support, and CBT that learners use alongside the EdoBEST classroom.',
      'A dashboard for Edo South, Edo Central, and Edo North.',
      'Past questions and timed mocks for WAEC, NECO, JAMB, and BECE.',
      'Enrolment tools the Ministry can use for children still outside school.',
      'A parent portal for attendance, results, and school announcements.',
    ],
    pilotPlace: 'Benin City, Ekpoma, and Auchi',
    rolloutNote:
      'Edo South, Central, and North should each have a pilot school cluster before the 18-LGA rollout.',
    conclusionSentence:
      'A state-wide adoption would give Edo a learner, parent, and secondary-school layer beside EdoBEST 2.0, across all 18 Local Government Areas.',
    languages: 'English, Nigerian Pidgin, and the main Edo languages as the Ministry requires',
    sectionLine:
      'Learner content and secondary records beside EdoBEST 2.0',
  },

  enugu: {
    letterBullet:
      'We recognise the Smart Green Schools programme as Enugu’s signature education investment: hundreds of new school environments, built around technology, e-libraries, and a ward-level plan reported as 260 schools, with learning materials placed in children’s hands. Buildings and devices still need a daily learning, assessment, and school-management system. That is the role we are proposing for SmartEdu Hub across the 17 Local Government Areas.',
    coverParagraph:
      'We recognise the Smart Green Schools programme as Enugu’s signature education investment: hundreds of new school environments, built around technology, e-libraries, and a ward-level plan reported as 260 schools, with learning materials placed in children’s hands. Buildings and devices still need a daily learning, assessment, and school-management system. That is the role we are proposing for SmartEdu Hub across the 17 Local Government Areas: NERDC content, teacher workflow, continuous assessment, and a SUBEB dashboard from Enugu metropolis to Nsukka, Awgu, and Nkanu.',
    summarySentence:
      'For Enugu State, SmartEdu Hub is the daily learning and school-management system for the Smart Green Schools, covering content, assessment, and SUBEB reporting across all 17 LGAs.',
    priorities: [
      'Put syllabus-aligned content into Smart Green School classrooms as they open.',
      'Give every new school the same attendance, assessment, and parent-communication routine.',
      'Train teachers to use digital lesson tools, not only new buildings.',
      'Hold Nsukka, Enugu East, and the southern LGAs to the same data standard.',
      'Let the Ministry see adoption ward by ward as the 260-school plan comes into use.',
    ],
    contributions: [
      'NERDC iBooks, videos, and an AI tutor sized for a connected classroom.',
      'Attendance, report cards, and parent messaging from day one of occupation.',
      'Teacher training and downloadable lesson notes for supervisors.',
      'A 17-LGA dashboard covering Enugu, Nsukka, Oji River, and Nkanu.',
      'School-level adoption data the Ministry can review each quarter of the rollout.',
    ],
    pilotPlace: 'the first Smart Green Schools to open in Enugu metropolis, Nsukka, and one southern LGA',
    rolloutNote:
      'The rollout should follow the order in which Smart Green Schools are handed over, so software arrives with the building.',
    conclusionSentence:
      'A state-wide adoption would give Enugu’s Smart Green Schools a learning, assessment, and management system across all 17 Local Government Areas.',
    languages: 'English and Igbo',
    sectionLine:
      'The learning and management layer for Enugu’s Smart Green Schools',
  },

  gombe: {
    letterBullet:
      'We recognise a compact state with a large learning gap. UNICEF education fact sheets place Gombe among the states where more than half of primary-school-age children are out of school. Eleven Local Government Areas make a focused reform possible, but Gombe metropolis, the southern LGAs of Billiri, Kaltungo, and Shongom, and the northern LGAs of Dukku, Nafada, and Funakaye are not the same classroom.',
    coverParagraph:
      'We recognise a compact state with a large learning gap. UNICEF education fact sheets place Gombe among the states where more than half of primary-school-age children are out of school. Eleven Local Government Areas make a focused reform possible, but Gombe metropolis, the southern LGAs of Billiri, Kaltungo, and Shongom, and the northern LGAs of Dukku, Nafada, and Funakaye are not the same classroom. SmartEdu Hub gives the Ministry one enrolment and learning record for all three settings, with offline content where power and network are weak.',
    summarySentence:
      'For Gombe State, SmartEdu Hub helps SUBEB find and teach out-of-school children and hold one standard across the metropolis, the southern LGAs, and the northern LGAs, all 11 of them.',
    priorities: [
      'Reduce a primary out-of-school rate that UNICEF places above 50 per cent.',
      'Support girls through primary and into junior secondary school.',
      'Use the advantage of only 11 LGAs to aim for full visibility, not a partial pilot that stalls.',
      'Respect the different conditions in southern and northern LGAs.',
      'Link integrated Qur’anic schooling with the formal school record.',
    ],
    contributions: [
      'Enrolment drives the LGEA can track child by child.',
      'Attendance and parent follow-up aimed at girls’ retention.',
      'A complete 11-LGA dashboard, small enough to review every month.',
      'Offline lesson packs for Dukku, Nafada, and Funakaye, and the same content in Billiri and Kaltungo.',
      'Shared learner records between tsangaya centres and formal schools.',
    ],
    pilotPlace: 'Gombe metropolis, Billiri, and Dukku',
    rolloutNote:
      'With 11 LGAs, the state can move from a three-site pilot to full coverage inside two academic sessions if training stays ahead of devices.',
    conclusionSentence:
      'A state-wide adoption would give Gombe, across all 11 Local Government Areas, a realistic path to see every public school and to bring out-of-school children into a record the Ministry controls.',
    languages: 'English, Hausa, and Fulfulde',
    sectionLine:
      'A full 11-LGA view of out-of-school children and classroom learning in Gombe',
  },

  imo: {
    letterBullet:
      'We recognise Imo as a state where most children already reach senior secondary school. UNICEF education fact sheets place Imo with Ebonyi at the lowest senior-secondary out-of-school rates in Nigeria. The pressure on the Ministry is different: 27 Local Government Areas, three strong zones in Owerri, Orlu, and Okigwe, a large private-school sector, and families who judge public schools by WAEC, NECO, and JAMB results.',
    coverParagraph:
      'We recognise Imo as a state where most children already reach senior secondary school. UNICEF education fact sheets place Imo with Ebonyi at the lowest senior-secondary out-of-school rates in Nigeria. The pressure on the Ministry is different: 27 Local Government Areas, three strong zones in Owerri, Orlu, and Okigwe, a large private-school sector, and families who judge public schools by WAEC, NECO, and JAMB results. SmartEdu Hub gives public schools the lesson quality, examination practice, and SUBEB data to meet that expectation.',
    summarySentence:
      'For Imo State, SmartEdu Hub raises examination readiness and gives SUBEB one view of public schools across Owerri, Orlu, and Okigwe, all 27 LGAs, in a state where attendance is already high.',
    priorities: [
      'Match public-school lesson quality to a strong examination culture.',
      'Supervise 27 LGAs without losing Orlu or Okigwe inside Owerri’s numbers.',
      'Give public schools CBT practice that private-school families already buy outside.',
      'Track teacher use of lesson notes and continuous assessment.',
      'Keep parents of public-school learners informed of attendance and results.',
    ],
    contributions: [
      'iBooks, worked solutions, and topic tests aligned to WAEC, NECO, and JAMB.',
      'A three-zone dashboard: Owerri, Orlu, and Okigwe, down to LGA and school.',
      'A CBT environment schools can run without sending learners to outside centres.',
      'Lesson-note and assessment reports for SUBEB supervisors.',
      'A parent portal for results, attendance, and announcements.',
    ],
    pilotPlace: 'Owerri Municipal, Orlu, and Okigwe',
    rolloutNote:
      'Twenty-seven LGAs need a zone-by-zone rollout, with Orlu and Okigwe starting in the same term as Owerri.',
    conclusionSentence:
      'A state-wide adoption would give Imo’s public schools a shared examination and supervision system across all 27 Local Government Areas.',
    languages: 'English and Igbo',
    sectionLine:
      'Examination readiness and a three-zone SUBEB view across Imo’s 27 LGAs',
  },

  jigawa: {
    letterBullet:
      'We recognise two facts that should shape any proposal to Jigawa. UNICEF, citing the 2021 Multiple Indicator Cluster Survey, estimated about 338,000 out-of-school children in the state. UNICEF education fact sheets also place Jigawa among the states where more than half of junior-secondary-age children are out of school. Children, especially girls, also have to stay into JSS across 27 largely rural Local Government Areas.',
    coverParagraph:
      'We recognise two facts that should shape any proposal to Jigawa. UNICEF, citing the 2021 Multiple Indicator Cluster Survey, estimated about 338,000 out-of-school children in the state. UNICEF education fact sheets also place Jigawa among the states where more than half of junior-secondary-age children are out of school. Children, especially girls, also have to stay into JSS across 27 largely rural Local Government Areas. SmartEdu Hub helps the Ministry see that transition, learner by learner, from Dutse, Hadejia, Gumel, Ringim, and Birnin Kudu out to the smaller LGAs.',
    summarySentence:
      'For Jigawa State, SmartEdu Hub tracks the primary-to-JSS transition for a large out-of-school population and gives SUBEB rural attendance and learning data across all 27 LGAs.',
    priorities: [
      'Account for an out-of-school population UNICEF has put at about 338,000.',
      'Lift junior-secondary participation, especially for girls.',
      'Supervise 27 rural LGAs from Dutse without relying only on paper returns.',
      'Connect integrated Qur’anic schools to the formal record.',
      'Keep learning materials usable where connectivity is poor.',
    ],
    contributions: [
      'Child-level enrolment the LGEA can update during community drives.',
      'Attendance alerts and JSS placement records that show who dropped off after primary.',
      'A 27-LGA dashboard grouped by Dutse, Hadejia, Gumel, Ringim, and Kazaure axes.',
      'Learner records shared by tsangaya centres and formal schools.',
      'Offline iBooks and quizzes for rural primary and junior secondary schools.',
    ],
    pilotPlace: 'Dutse, Hadejia, and Gumel',
    rolloutNote:
      'The remaining LGAs are rural and dispersed. Training of LGEA officers matters as much as school training.',
    conclusionSentence:
      'A state-wide adoption would give Jigawa a child-level view of enrolment and of the primary-to-JSS transition across all 27 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Out-of-school children and the primary-to-JSS transition across Jigawa’s 27 LGAs',
  },

  kaduna: {
    letterBullet:
      'We recognise Kaduna’s size and its internal differences. The state has 23 Local Government Areas, a long-running interest in teacher supply and school data, and school communities that do not look alike: the Kaduna metropolis, Zaria, and Southern Kaduna around Kafanchan and Kachia. In some LGAs, insecurity has also interrupted the school year. The Ministry needs one record that can still be read when a zone is harder to visit.',
    coverParagraph:
      'We recognise Kaduna’s size and its internal differences. The state has 23 Local Government Areas, a long-running interest in teacher supply and school data, and school communities that do not look alike: the Kaduna metropolis, Zaria, and Southern Kaduna around Kafanchan and Kachia. In some LGAs, insecurity has also interrupted the school year. The Ministry needs one record that can still be read when a zone is harder to visit. SmartEdu Hub provides learner content, teacher tools, and a zonal dashboard for Kaduna North, Kaduna Central, and Kaduna South.',
    summarySentence:
      'For Kaduna State, SmartEdu Hub gives the Ministry a zonal picture of learning and attendance across the metropolis, Zaria, and Southern Kaduna, all 23 LGAs, including schools whose year has been interrupted.',
    priorities: [
      'Hold Kaduna metropolis, Zaria, and Southern Kaduna to one data standard.',
      'Keep learner records current where insecurity has interrupted schooling.',
      'Support the state’s existing emphasis on teachers and school information.',
      'Back girls’ participation with attendance evidence, not only policy statements.',
      'Give SUBEB filters for all 23 LGAs and the three senatorial districts.',
    ],
    contributions: [
      'Zone dashboards for Kaduna North, Central, and South.',
      'Catch-up content and transferable records for learners returning after a closure.',
      'Lesson-note, attendance, and teacher-activity reports SUBEB can audit.',
      'Girls’ attendance and transition indicators at school and LGA level.',
      'Offline sync for schools with unreliable power.',
    ],
    pilotPlace: 'Kaduna metropolis, Zaria, and Kafanchan',
    rolloutNote:
      'Each senatorial district needs its own cluster. Southern Kaduna should not be scheduled as an afterthought to the capital.',
    conclusionSentence:
      'A state-wide adoption would give Kaduna one learning and supervision system for the metropolis, Zaria, and Southern Kaduna, across all 23 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'One zonal record for Kaduna metropolis, Zaria, and Southern Kaduna',
  },

  kano: {
    letterBullet:
      'We recognise that Kano runs the largest basic-education map any Nigerian state ministry has to supervise: 44 Local Government Areas, a huge enrolled population, and a very large number of children still outside school. UNICEF, citing the 2021 Multiple Indicator Cluster Survey, estimated close to one million out-of-school children in Kano, about 32 per cent of primary-age children. Integrated Qur’anic schooling, girls’ transition, and the gap between the metropolis and rural LGAs sit at the centre of the Ministry’s work.',
    coverParagraph:
      'We recognise that Kano runs the largest basic-education map any Nigerian state ministry has to supervise: 44 Local Government Areas, a huge enrolled population, and a very large number of children still outside school. UNICEF, citing the 2021 Multiple Indicator Cluster Survey, estimated close to one million out-of-school children in Kano, about 32 per cent of primary-age children. Integrated Qur’anic schooling, girls’ transition, and the gap between the metropolis and rural LGAs sit at the centre of the Ministry’s work. SmartEdu Hub is proposed as the records, content, and SUBEB visibility layer for a system of this scale.',
    summarySentence:
      'For Kano State, SmartEdu Hub gives SUBEB a scalable record of enrolled and out-of-school learners across 44 LGAs, with Hausa-ready configuration, girls’ attendance, and a link between formal schools and integrated Qur’anic centres.',
    priorities: [
      'Supervise 44 LGAs without the rural ones disappearing inside Kano Municipal’s totals.',
      'Account for an out-of-school population UNICEF has put close to one million.',
      'Track girls’ attendance and transition into junior secondary school.',
      'Include integrated Qur’anic and tsangaya learners in the state picture.',
      'Keep content usable offline in rural LGAs far from the metropolis.',
    ],
    contributions: [
      'LGA and zone dashboards built for the largest LGA count in Nigeria.',
      'Community enrolment that an LGEA can run and the Ministry can audit.',
      'Girls’ attendance, absence alerts, and JSS transition reports.',
      'Shared records between formal schools and tsangaya centres.',
      'Offline NERDC materials and a Hausa-configurable interface.',
    ],
    pilotPlace: 'Kano Municipal, Nassarawa, and two rural LGAs in different zones',
    rolloutNote:
      'A 44-LGA rollout only works zone by zone, with LGEA officers trained before schools are switched on.',
    conclusionSentence:
      'A state-wide adoption would give Kano a school and learner record large enough for 44 Local Government Areas, including out-of-school children and integrated Qur’anic centres.',
    languages: 'English and Hausa',
    sectionLine:
      'School records at Kano’s scale: 44 LGAs, out-of-school children, and tsangaya centres',
  },

  katsina: {
    letterBullet:
      'We recognise a double pressure on the Ministry. UNICEF, citing the 2021 Multiple Indicator Cluster Survey, estimated about 536,000 out-of-school children in Katsina. A UNICEF-supported study has also documented prolonged school closures in frontline LGAs, including Batsari, Faskari, and Kankara. The state still has to run ordinary schooling in Katsina metropolis, Daura, and Funtua, across 34 Local Government Areas.',
    coverParagraph:
      'We recognise a double pressure on the Ministry. UNICEF, citing the 2021 Multiple Indicator Cluster Survey, estimated about 536,000 out-of-school children in Katsina. A UNICEF-supported study has also documented prolonged school closures in frontline LGAs, including Batsari, Faskari, and Kankara. The state still has to run ordinary schooling in Katsina metropolis, Daura, and Funtua, across 34 Local Government Areas. SmartEdu Hub offers catch-up content and records for communities whose schools were interrupted, and a normal digital school system for the towns where classrooms are open.',
    summarySentence:
      'For Katsina State, SmartEdu Hub supports both the open schools in Katsina, Daura, and Funtua and the LGAs where closures have pushed children out of class, across all 34 LGAs.',
    priorities: [
      'Keep learning available where schools in Batsari, Faskari, Kankara, and similar LGAs have closed for long periods.',
      'Serve the large in-school population in Katsina metropolis, Daura, and Funtua.',
      'Account for an out-of-school population estimated at about 536,000.',
      'Support girls’ return and retention after interruptions.',
      'Give SUBEB a 34-LGA view that distinguishes open, partial, and closed schools.',
    ],
    contributions: [
      'Offline catch-up packs and short assessments for interrupted communities.',
      'Full school management for open urban and town schools.',
      'Child-level enrolment for out-of-school drives.',
      'Girls’ attendance tracking and parent notification.',
      'A school-status dashboard: open, partial, or closed, by LGA.',
    ],
    pilotPlace: 'Katsina metropolis, Funtua, and one safer cluster serving learners from closed frontline schools',
    rolloutNote:
      'Frontline LGAs should be added only on the security advice of the state, with offline kits rather than an assumption of daily connectivity.',
    conclusionSentence:
      'A state-wide adoption would give Katsina a way to keep records and learning going for open schools and for children displaced by school closures, across all 34 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Open schools and interrupted LGAs across Katsina’s 34 local governments',
  },

  kebbi: {
    letterBullet:
      'We recognise that Kebbi is one of the states where access itself is still the main education problem. UNICEF education fact sheets place Kebbi among the states where more than half of primary-school-age children are out of school. The Ministry’s map runs from Birnin Kebbi and Argungu to Yauri and Zuru, 21 Local Government Areas, many of them rural, with nomadic communities and long distances between schools.',
    coverParagraph:
      'We recognise that Kebbi is one of the states where access itself is still the main education problem. UNICEF education fact sheets place Kebbi among the states where more than half of primary-school-age children are out of school. The Ministry’s map runs from Birnin Kebbi and Argungu to Yauri and Zuru, 21 Local Government Areas, many of them rural, with nomadic communities and long distances between schools. SmartEdu Hub helps the state record children who are outside, support girls to stay, and give rural teachers offline materials.',
    summarySentence:
      'For Kebbi State, SmartEdu Hub supports the drive to bring out-of-school children into class and to keep rural and nomadic communities visible across all 21 LGAs.',
    priorities: [
      'Reduce a primary out-of-school rate that UNICEF places above half of school-age children.',
      'Reach Zuru, Yauri, and Argungu with the same visibility as Birnin Kebbi.',
      'Include nomadic and scattered rural settlements in the school record.',
      'Support girls’ enrolment and daily attendance.',
      'Give teachers offline lessons where the network cannot be assumed.',
    ],
    contributions: [
      'Community enrolment and an LGEA list of children still outside school.',
      'Four-axis reporting: Birnin Kebbi, Argungu, Yauri, and Zuru.',
      'Lightweight records for nomadic and rural learning centres.',
      'Attendance alerts focused on girls’ retention.',
      'Offline iBooks and teacher notes that sync later.',
    ],
    pilotPlace: 'Birnin Kebbi, Argungu, and Zuru',
    rolloutNote:
      'Yauri and the southern LGAs need their own deployment window. Distances make a single capital-based team too slow.',
    conclusionSentence:
      'A state-wide adoption would give Kebbi a child-level record of who is in school and who is still outside, across all 21 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Out-of-school children and rural schools across Kebbi’s 21 LGAs',
  },

  kogi: {
    letterBullet:
      'We recognise Kogi’s own reading of its education map. The State Universal Basic Education Board’s guideline for UBE intervention funds, 2025 to 2030, says the state performs relatively well on national indices while inequalities remain inside the state, especially in riverine, low-income, and underserved communities, and it sets out support for girls, nomadic learners, and other vulnerable children. Any useful platform has to read Kogi East, Kogi Central, and Kogi West separately across 21 Local Government Areas.',
    coverParagraph:
      'We recognise Kogi’s own reading of its education map. The State Universal Basic Education Board’s guideline for UBE intervention funds, 2025 to 2030, says the state performs relatively well on national indices while inequalities remain inside the state, especially in riverine, low-income, and underserved communities, and it sets out support for girls, nomadic learners, and other vulnerable children. Any useful platform has to read Kogi East, Kogi Central, and Kogi West separately across 21 Local Government Areas. SmartEdu Hub is proposed as that three-zone record, from Lokoja to Idah, Okene, and Kabba.',
    summarySentence:
      'For Kogi State, SmartEdu Hub makes the intra-state gap visible: one dashboard for Kogi East, Central, and West, with extra attention to riverine and underserved communities across all 21 LGAs.',
    priorities: [
      'Show learning and attendance separately for Igala, Ebira, and Okun communities.',
      'Target riverine and low-income communities the SUBEB guideline already flags.',
      'Support girls, nomadic learners, and other vulnerable groups with actual attendance data.',
      'Keep Lokoja from standing in for Idah, Okene, or Kabba.',
      'Give SUBEB a tool that matches the 2025–2030 UBE planning window.',
    ],
    contributions: [
      'Three-zone dashboards: East, Central, and West.',
      'School-level flags for riverine and underserved communities.',
      'Attendance and transition reports for girls and nomadic learners.',
      'The same iBooks and CBT in Lokoja, Idah, Okene, and Kabba.',
      'Quarterly exports SUBEB can use in UBE planning and review.',
    ],
    pilotPlace: 'Lokoja, Idah, and Okene',
    rolloutNote:
      'Kogi West, including Kabba and the Okun LGAs, should be in the second wave at the latest, so the confluence capital does not become the whole project.',
    conclusionSentence:
      'A state-wide adoption would give Kogi the three-zone visibility its own UBE plan calls for, across all 21 Local Government Areas.',
    languages: 'English, Igala, Ebira, and Yoruba, as the Ministry requires',
    sectionLine:
      'Three-zone visibility for Kogi East, Central, and West',
  },

  kwara: {
    letterBullet:
      'We recognise KwaraLEARN as the state’s technology-backed reform of public primary schools. This proposal sits beside that work. Kwara also straddles several language communities, from Ilorin to the Yoruba south, the Nupe LGAs, and Baruten and Kaiama. The Ministry’s next visibility gap is the learner record, junior secondary, examination practice, and a parent window across all 16 Local Government Areas.',
    coverParagraph:
      'We recognise KwaraLEARN as the state’s technology-backed reform of public primary schools. This proposal sits beside that work. Kwara also straddles several language communities, from Ilorin to the Yoruba south, the Nupe LGAs, and Baruten and Kaiama. The Ministry’s next visibility gap is the learner record, junior secondary, examination practice, and a parent window across all 16 Local Government Areas. SmartEdu Hub is offered for that surrounding layer, so primary reform and the rest of basic education can be read together.',
    summarySentence:
      'For Kwara State, SmartEdu Hub sits beside KwaraLEARN and adds learner content, junior-secondary records, and parent communication across all 16 LGAs and the state’s language communities.',
    priorities: [
      'Complement KwaraLEARN in primary schools with learner content and a continuing record into JSS.',
      'Cover Ilorin, the southern LGAs, Edu and Patigi, and Baruten with one SUBEB view.',
      'Prepare public-school learners for BECE and SSCE.',
      'Give parents attendance and result access.',
      'Configure the interface for the languages schools actually use.',
    ],
    contributions: [
      'iBooks, quizzes, and CBT that learners use alongside the KwaraLEARN classroom.',
      'A 16-LGA dashboard split by Ilorin, Kwara South, and Kwara North.',
      'BECE, WAEC, and NECO practice inside the school.',
      'A parent portal for attendance, results, and notices.',
      'An interface configurable for English, Yoruba, Hausa, Nupe, and Baatonum.',
    ],
    pilotPlace: 'Ilorin, Offa, and Patigi',
    rolloutNote:
      'Kwara North should be piloted in the same term as Ilorin, because distance and language make a later “phase two” easy to delay.',
    conclusionSentence:
      'A state-wide adoption would give Kwara a learner and junior-secondary layer beside KwaraLEARN, across all 16 Local Government Areas.',
    languages: 'English, Yoruba, Hausa, Nupe, and Baatonum',
    sectionLine:
      'Learner records and junior secondary beside KwaraLEARN',
  },

  lagos: {
    letterBullet:
      'We recognise that Lagos already runs EKOEXCEL in public primary schools and supervises basic and secondary education across 20 Local Government Areas and six education districts. The useful addition is a single system for secondary-school records, parent communication, NERDC learning content, and WAEC, NECO, and JAMB practice at the volume Lagos enters, beside the primary reform already in place.',
    coverParagraph:
      'We recognise that Lagos already runs EKOEXCEL in public primary schools and supervises basic and secondary education across 20 Local Government Areas and six education districts. The useful addition is a single system for secondary-school records, parent communication, NERDC learning content, and WAEC, NECO, and JAMB practice at the volume Lagos enters, beside the primary reform already in place. SmartEdu Hub is proposed for that layer, from Ikeja, Mushin, and Alimosho to Ikorodu, Badagry, and Epe.',
    summarySentence:
      'For Lagos State, SmartEdu Hub adds secondary-school management, parent communication, and examination practice beside EKOEXCEL, across 20 LGAs and six education districts.',
    priorities: [
      'Sit beside EKOEXCEL and cover public secondary schools at Lagos scale.',
      'Give all six education districts the same record format.',
      'Carry WAEC, NECO, and JAMB practice for one of the country’s largest candidate pools.',
      'Keep parents informed in a system where distance and traffic already limit school visits.',
      'Offer the Ministry a filter by LGA and education district, using the 20 constitutional LGAs.',
    ],
    contributions: [
      'Secondary school management, results, and learner records beside the primary programme.',
      'District and LGA dashboards for Districts I to VI.',
      'CBT for WAEC, NECO, JAMB, BECE, and school mocks.',
      'A parent portal for attendance, results, and announcements.',
      'Reporting on the 20 LGAs the state uses for education administration.',
    ],
    pilotPlace: 'Education District VI (Ikeja) and Education District V (Badagry axis)',
    rolloutNote:
      'Lagos should roll out by education district. A school-by-school scatter will be impossible to support at this density.',
    conclusionSentence:
      'A state-wide adoption would give Lagos a secondary, parent, and examination layer beside EKOEXCEL, across all 20 Local Government Areas and the six education districts.',
    languages: 'English and Yoruba',
    sectionLine:
      'Secondary records and examination practice beside EKOEXCEL, across six education districts',
  },

  nasarawa: {
    letterBullet:
      'We recognise two education geographies inside Nasarawa’s 13 Local Government Areas. The Adolescent Girls Initiative for Learning and Empowerment is already supporting more than 20,000 out-of-school girls with conditional cash transfers in Awe, Doma, Lafia, Wamba, Kokona, Keana, and Nasarawa. At the same time, Karu and Keffi sit on the Abuja corridor, with a different school population and a different set of pressures. Girls who have been brought back to school still need to learn, attend, and stay visible.',
    coverParagraph:
      'We recognise two education geographies inside Nasarawa’s 13 Local Government Areas. The Adolescent Girls Initiative for Learning and Empowerment is already supporting more than 20,000 out-of-school girls with conditional cash transfers in Awe, Doma, Lafia, Wamba, Kokona, Keana, and Nasarawa. At the same time, Karu and Keffi sit on the Abuja corridor, with a different school population and a different set of pressures. Girls who have been brought back to school still need to learn, attend, and stay visible. SmartEdu Hub is the attendance, learning, and SUBEB layer that can sit under both geographies.',
    summarySentence:
      'For Nasarawa State, SmartEdu Hub helps the Ministry see whether girls supported back into school are attending and learning, and it covers both the AGILE LGAs and the Abuja-corridor LGAs of Karu and Keffi.',
    priorities: [
      'Keep girls re-enrolled under AGILE visible through attendance and results.',
      'Serve Lafia together with Karu and Keffi, which face capital-corridor pressure.',
      'Reach southern and western LGAs such as Awe, Doma, and Keana with offline content.',
      'Cover all 13 LGAs, not only the seven in the cash-transfer programme.',
      'Give SUBEB one girl-child and whole-school dashboard.',
    ],
    contributions: [
      'Attendance and learning records for girls the state has spent money to return to school.',
      'School management for busy corridor schools in Karu and Keffi.',
      'Offline iBooks for Awe, Doma, Keana, and similar LGAs.',
      'A 13-LGA map that shows both AGILE and non-AGILE local governments.',
      'Transition reports from primary into junior secondary.',
    ],
    pilotPlace: 'Lafia, Karu, and Awe',
    rolloutNote:
      'Keffi and Karu can move quickly. Awe, Doma, and Keana need offline kits and a longer training visit.',
    conclusionSentence:
      'A state-wide adoption would give Nasarawa a way to protect the gains of girls’ re-enrolment and to supervise both the corridor and the rural LGAs, across all 13 Local Government Areas.',
    languages: 'English and Hausa, with other Nasarawa languages added as the Ministry requires',
    sectionLine:
      'Attendance and learning for Nasarawa’s girls, corridor schools, and rural LGAs',
  },

  niger: {
    letterBullet:
      'We recognise that distance and insecurity shape schooling in Niger more than in most states. Niger is Nigeria’s largest state by land area, with 25 Local Government Areas and very different school economies in Minna, Bida, Suleja, and Kontagora. A UNICEF study carried out with the Niger State Ministry of Basic and Secondary Education found that insecurity shut 114 schools between 2020 and 2025, concentrated in Shiroro, Munya, and Rafi, of which 29 had reopened at the time of the study.',
    coverParagraph:
      'We recognise that distance and insecurity shape schooling in Niger more than in most states. Niger is Nigeria’s largest state by land area, with 25 Local Government Areas and very different school economies in Minna, Bida, Suleja, and Kontagora. A UNICEF study carried out with the Niger State Ministry of Basic and Secondary Education found that insecurity shut 114 schools between 2020 and 2025, concentrated in Shiroro, Munya, and Rafi, of which 29 had reopened at the time of the study. SmartEdu Hub is proposed as an offline learning and records system for open schools, and as a catch-up record for communities whose schools were shut.',
    summarySentence:
      'For Niger State, SmartEdu Hub keeps learning and learner records available across a very large land area, including schools in Shiroro, Munya, and Rafi affected by closure, and the open systems in Minna, Bida, Suleja, and Kontagora.',
    priorities: [
      'Support learners from the 114 schools the joint UNICEF study found closed, and from the 29 that had reopened.',
      'Run a normal digital school system in Minna, Bida, Suleja, and Kontagora.',
      'Cover nomadic centres and sparse rural communities, not only town schools.',
      'Work offline across long distances and weak networks.',
      'Give SUBEB a 25-LGA view that shows which schools are open.',
    ],
    contributions: [
      'Catch-up content and re-entry records for learners from closed schools.',
      'Full school management for the four urban anchors.',
      'Lightweight tools for nomadic and rural learning centres.',
      'Offline iBooks and attendance that sync when a school reconnects.',
      'An open, reopened, or closed status on the state dashboard.',
    ],
    pilotPlace: 'Minna, Bida, and Suleja, with a records pilot for learners from Shiroro',
    rolloutNote:
      'Kontagora and the northern LGAs are too far from Minna to share one deployment team. Shiroro, Munya, and Rafi should follow state security guidance.',
    conclusionSentence:
      'A state-wide adoption would give Niger a school record that fits the country’s largest state by area, across all 25 Local Government Areas, including communities whose schools were closed.',
    languages: 'English, Hausa, Nupe, and Gbagyi, as the Ministry requires',
    sectionLine:
      'Learning continuity across Niger’s distances, including LGAs affected by school closures',
  },

  ogun: {
    letterBullet:
      'We recognise Ogun’s position as the gateway state: 20 Local Government Areas, a heavy school population along the Lagos corridor in Ado-Odo/Ota, Ifo, and Sagamu, and a different rural reality in Yewa and parts of Ijebu. Families in the industrial corridor compare public schools with a dense private sector. Egba, Ijebu, Remo, and Yewa need to be visible separately to the Ministry in Abeokuta.',
    coverParagraph:
      'We recognise Ogun’s position as the gateway state: 20 Local Government Areas, a heavy school population along the Lagos corridor in Ado-Odo/Ota, Ifo, and Sagamu, and a different rural reality in Yewa and parts of Ijebu. Families in the industrial corridor compare public schools with a dense private sector. Egba, Ijebu, Remo, and Yewa need to be visible separately to the Ministry in Abeokuta. SmartEdu Hub gives public schools examination practice, parent communication, and a four-division dashboard.',
    summarySentence:
      'For Ogun State, SmartEdu Hub gives public schools on the Lagos corridor and in Yewa, Ijebu, Remo, and Egba the same lesson quality, examination practice, and SUBEB record across all 20 LGAs.',
    priorities: [
      'Raise public-school examination practice where private schools set the local standard.',
      'See Egba, Ijebu, Remo, and Yewa as four pictures, not one Abeokuta average.',
      'Serve crowded corridor schools in Ado-Odo/Ota, Ifo, and Sagamu.',
      'Reach rural Yewa schools with offline materials.',
      'Keep parents in the corridor informed without requiring a weekday visit to school.',
    ],
    contributions: [
      'CBT for WAEC, NECO, JAMB, and BECE inside the public school.',
      'A four-division dashboard for all 20 LGAs.',
      'Class, attendance, and results tools sized for large urban schools.',
      'Offline iBooks for Yewa and other rural communities.',
      'A parent portal for results, attendance, and fees information.',
    ],
    pilotPlace: 'Abeokuta, Ado-Odo/Ota, and Imeko-Afon or Yewa North',
    rolloutNote:
      'The Lagos-corridor LGAs and the Yewa LGAs should be piloted together so the project is not captured by the border towns alone.',
    conclusionSentence:
      'A state-wide adoption would give Ogun a public-school learning and records system for all four divisions, across all 20 Local Government Areas.',
    languages: 'English and Yoruba',
    sectionLine:
      'Public-school quality for Egba, Ijebu, Remo, Yewa, and the Lagos corridor',
  },

  ondo: {
    letterBullet:
      'We recognise Ondo’s long secondary-school tradition and the split geography the Ministry actually manages. Upland LGAs around Akure, Ondo, Owo, and Akoko are not the same assignment as the riverine LGAs of Ilaje and Ese-Odo, where schools are reached by water. Eighteen Local Government Areas, a strong grammar-school culture, and creek communities belong in one state system.',
    coverParagraph:
      'We recognise Ondo’s long secondary-school tradition and the split geography the Ministry actually manages. Upland LGAs around Akure, Ondo, Owo, and Akoko are not the same assignment as the riverine LGAs of Ilaje and Ese-Odo, where schools are reached by water. Eighteen Local Government Areas, a strong grammar-school culture, and creek communities belong in one state system. SmartEdu Hub carries examination-level content for the upland schools and offline materials for the riverine ones, with a single SUBEB record.',
    summarySentence:
      'For Ondo State, SmartEdu Hub serves the upland secondary-school tradition and the riverine schools of Ilaje and Ese-Odo with the same curriculum record across all 18 LGAs.',
    priorities: [
      'Match digital content to a state that takes secondary examinations seriously.',
      'Reach Ilaje and Ese-Odo with offline lessons and a record that does not depend on a weekly visit.',
      'Keep Akure, Ondo, and the Akoko LGAs on one dashboard.',
      'Support teachers with lesson notes supervisors can check.',
      'Give parents in both geographies access to attendance and results.',
    ],
    contributions: [
      'iBooks and CBT for BECE, WAEC, NECO, and JAMB.',
      'Offline packs and delayed sync for riverine schools.',
      'An 18-LGA dashboard split between upland and riverine zones.',
      'Downloadable lesson notes and assessment records.',
      'A parent portal that works on ordinary phones.',
    ],
    pilotPlace: 'Akure, Ondo, and Ilaje',
    rolloutNote:
      'Ilaje and Ese-Odo need a water-transport plan and offline kits. They should be named in the first MOU, not added after the upland rollout.',
    conclusionSentence:
      'A state-wide adoption would give Ondo one learning standard for its upland schools and its riverine schools, across all 18 Local Government Areas.',
    languages: 'English and Yoruba, with riverine languages added as the Ministry requires',
    sectionLine:
      'Upland secondary schools and the riverine LGAs of Ilaje and Ese-Odo',
  },

  osun: {
    letterBullet:
      'We recognise the Government of Osun State’s current work on basic education: 1,241 teachers employed in the 2026 recruitment, the Imole Teachers Corps already in classrooms, rehabilitated public schools, and a 2026 NECO result that placed Osun fifth nationally, with 74.31 per cent of candidates recording five credits including English and Mathematics. The state supervises 30 Local Government Areas across the Osogbo, Ife, Ijesha, and Iwo axes. SmartEdu Hub is the lesson, assessment, and SUBEB layer for that teaching workforce.',
    coverParagraph:
      'We recognise the Government of Osun State’s current work on basic education. In March 2026 the state employed 1,241 teachers in the first batch of its recruitment exercise, 660 through SUBEB, 526 through TESCOM, and 55 education officers, following the deployment of 1,750 Imole Teachers Corps members, with NCE and degree qualifications, into primary and secondary schools. Public schools have been rehabilitated across the state, and the 2025 UBEC/SUBEB intervention is supplying classrooms, furniture, and ICT equipment. In the 2026 NECO Senior School Certificate Examination, Osun placed fifth nationally, with 74.31 per cent of candidates recording at least five credits including English Language and Mathematics, and the state has held a single-digit national ranking through 2024, 2025, and 2026. The Ministry supervises 30 Local Government Areas across the Osogbo, Ife, Ijesha, and Iwo axes. SmartEdu Hub gives these teachers NERDC-aligned lesson notes and continuous assessment, gives students practice for BECE, WAEC, NECO, and JAMB, and gives SUBEB one dashboard across all 30 LGAs.',
    summarySentence:
      'For Osun State, SmartEdu Hub supports the teachers recruited in 2026 and the Imole Teachers Corps, extends examination practice behind the state’s fifth-place 2026 NECO result, and gives SUBEB one record across all 30 LGAs.',
    priorities: [
      'Give the teachers recruited in 2026, and corps members already in class, lesson notes and continuous assessment.',
      'Keep public-school examination practice at the standard behind Osun’s fifth-place 2026 NECO result.',
      'Supervise all 30 LGAs so Osogbo, Ife, Ijesha, and Iwo stay equally visible.',
      'Pair SUBEB’s new classrooms and ICT equipment with a curriculum and a usage record.',
      'Show parents and SUBEB which schools are active in class each month.',
    ],
    contributions: [
      'Lesson notes, quizzes, and refresher training for newly recruited teachers and corps members.',
      'iBooks and CBT practice for BECE, WAEC, NECO, and JAMB.',
      'A 30-LGA dashboard with zone views for Osogbo, Ife, Ijesha, and Iwo.',
      'NERDC content that can be updated for schools receiving SUBEB ICT equipment.',
      'Monthly usage reports for the Ministry and SUBEB.',
    ],
    pilotPlace: 'Osogbo, Ile-Ife, and Iwo',
    rolloutNote:
      'Thirty LGAs reward a zonal rollout. Ijesha schools should be in the first expansion after the three-town pilot.',
    conclusionSentence:
      'A state-wide adoption would give Osun a classroom and reporting system for the teachers and schools the state is already strengthening, across all 30 Local Government Areas.',
    languages: 'English and Yoruba',
    sectionLine:
      'Teachers, examinations, and a SUBEB record for Osun’s 30 LGAs',
  },

  oyo: {
    letterBullet:
      'We write as a company headquartered in Ibadan, inside the state this proposal serves. We recognise Oyo’s free public primary and secondary education, the scale of 33 Local Government Areas, and the BESDA Additional Financing programme aimed at children still out of school. Ibadan’s eleven local governments are a different assignment from Oke-Ogun, Ogbomoso, Oyo, and Ibarapa. A student of Oritamefa Baptist Model School, Ibadan, shared national third prize in the Accessible Summer Competition on SmartEdu Hub.',
    coverParagraph:
      'We write as a company headquartered in Ibadan, inside the state this proposal serves. We recognise Oyo’s free public primary and secondary education, the scale of 33 Local Government Areas, and the BESDA Additional Financing programme aimed at children still out of school. Ibadan’s eleven local governments are a different assignment from Oke-Ogun, Ogbomoso, Oyo, and Ibarapa. A student of Oritamefa Baptist Model School, Ibadan, shared national third prize in the Accessible Summer Competition on SmartEdu Hub. Because our head office is at Oke-Ado, implementation support for Oyo sits in the same city as the Ministry.',
    summarySentence:
      'For Oyo State, SmartEdu Hub — supported from our Ibadan head office — gives free public education a school record across Ibadan and the rural zones, and supports the state’s out-of-school work under BESDA, across all 33 LGAs.',
    priorities: [
      'Show what free public primary and secondary education is producing in attendance and results.',
      'See Ibadan’s LGAs separately from Oke-Ogun, Ogbomoso, Oyo, and Ibarapa.',
      'Support BESDA’s aim of reducing the number of out-of-school children.',
      'Use a vendor whose implementation team is already based in Ibadan.',
      'Give public schools CBT practice at the standard families in Ibadan already know from private schools.',
    ],
    contributions: [
      'Attendance, results, and parent communication behind the free-education policy.',
      'Zone dashboards for Ibadan, Oke-Ogun, Ogbomoso, Oyo, and Ibarapa.',
      'Enrolment tools an LGEA can use on an out-of-school drive.',
      'On-the-ground support from The Knowledge Hub, Oke-Ado, Ibadan.',
      'WAEC, NECO, JAMB, and BECE practice on the same platform a local student has already competed on.',
    ],
    pilotPlace: 'two Ibadan LGAs, Ogbomoso, and one Oke-Ogun LGA',
    rolloutNote:
      'Ibadan can move quickly because support staff are in the city. Oke-Ogun needs overnight deployment visits and offline kits.',
    conclusionSentence:
      'A state-wide adoption would give Oyo a school-management and learning system for free public education across all 33 Local Government Areas, supported from Ibadan.',
    languages: 'English and Yoruba',
    sectionLine:
      'Free public education across Ibadan, Oke-Ogun, Ogbomoso, Oyo, and Ibarapa',
  },

  plateau: {
    letterBullet:
      'We recognise Plateau’s mix of a strong school tradition in Jos and an interrupted school year in LGAs affected by communal conflict, including communities in Barkin Ladi, Riyom, Bassa, and Mangu. The Ministry has to keep urban schools in Jos North and Jos South performing, and keep a record of children in places where the term was broken. Seventeen Local Government Areas cover a wide set of language communities.',
    coverParagraph:
      'We recognise Plateau’s mix of a strong school tradition in Jos and an interrupted school year in LGAs affected by communal conflict, including communities in Barkin Ladi, Riyom, Bassa, and Mangu. The Ministry has to keep urban schools in Jos North and Jos South performing, and keep a record of children in places where the term was broken. Seventeen Local Government Areas cover a wide set of language communities. SmartEdu Hub offers examination-level content for Jos and catch-up records for the LGAs where schooling was interrupted.',
    summarySentence:
      'For Plateau State, SmartEdu Hub supports high-expectation schools in Jos and learning continuity in LGAs where conflict has broken the school year, across all 17 LGAs.',
    priorities: [
      'Keep Jos schools academically sharp, with proper examination practice.',
      'Restore records and catch-up lessons where the school year was interrupted.',
      'Cover Barkin Ladi, Riyom, Bassa, and Mangu with a status the Ministry can see.',
      'Serve language communities beyond Jos with the same NERDC standard.',
      'Give SUBEB a 17-LGA view from Jos to Shendam, Langtang, and Pankshin.',
    ],
    contributions: [
      'CBT and iBooks for schools in Jos North and Jos South.',
      'Catch-up modules and transferable learner records.',
      'A school-status flag so a closed or partial school is visible.',
      'Offline content for rural LGAs.',
      'A full 17-LGA dashboard.',
    ],
    pilotPlace: 'Jos North, Jos South, and one LGA where schooling has been interrupted',
    rolloutNote:
      'Southern Plateau, including Shendam and Langtang, should be a named wave. Jos must not be the entire project.',
    conclusionSentence:
      'A state-wide adoption would give Plateau a way to protect learning in Jos and to restore it where the school year was broken, across all 17 Local Government Areas.',
    languages: 'English and Hausa, with other Plateau languages added as the Ministry requires',
    sectionLine:
      'Jos schools and learning continuity in conflict-affected LGAs',
  },

  rivers: {
    letterBullet:
      'We recognise the split the Ministry lives with every week. Port Harcourt and Obio/Akpor carry a dense mix of public and private secondary schools. Riverine LGAs such as Bonny, Andoni, and Opobo/Nkoro are supervised under different conditions of access. There are 23 Local Government Areas in all. A student of Teko School in Rivers State shared national third prize in the Accessible Summer Competition on SmartEdu Hub.',
    coverParagraph:
      'We recognise the split the Ministry lives with every week. Port Harcourt and Obio/Akpor carry a dense mix of public and private secondary schools. Riverine LGAs such as Bonny, Andoni, and Opobo/Nkoro are supervised under different conditions of access. There are 23 Local Government Areas in all. A student of Teko School in Rivers State shared national third prize in the Accessible Summer Competition on SmartEdu Hub. SmartEdu Hub can give public schools in the capital the examination practice families already seek privately, and give riverine schools offline content plus a record the Ministry can read from Port Harcourt.',
    summarySentence:
      'For Rivers State, SmartEdu Hub gives public schools in Port Harcourt examination-level tools and gives riverine LGAs an offline learning record, across all 23 LGAs.',
    priorities: [
      'Bring public secondary schools closer to the examination practice common in Port Harcourt’s private schools.',
      'Reach Bonny, Andoni, Opobo/Nkoro, and other riverine LGAs with offline materials.',
      'Hold all 23 LGAs on one SUBEB dashboard.',
      'Use a platform a Rivers student has already competed on at national level.',
      'Keep parents informed in both the metropolis and the riverine LGAs.',
    ],
    contributions: [
      'WAEC, NECO, JAMB, and BECE practice inside public schools.',
      'Offline iBooks and delayed sync for schools reached by water.',
      'A 23-LGA dashboard split between the metropolis and the riverine belt.',
      'Local proof from Teko School’s national result on this platform.',
      'A parent portal for attendance, results, and announcements.',
    ],
    pilotPlace: 'Port Harcourt, Obio/Akpor, and Bonny',
    rolloutNote:
      'Bonny, Andoni, and the Kalabari LGAs need a marine logistics plan in the MOU. They should not inherit a city deployment timetable.',
    conclusionSentence:
      'A state-wide adoption would give Rivers one public-school standard for Port Harcourt and the riverine LGAs, across all 23 Local Government Areas.',
    languages: 'English and Nigerian Pidgin, with Ikwerre and other Rivers languages as the Ministry requires',
    sectionLine:
      'Public-school examination practice in Port Harcourt and offline learning in the riverine LGAs',
  },

  sokoto: {
    letterBullet:
      'We recognise the education task at the seat of the Caliphate. UNICEF education fact sheets place Sokoto among the states where more than half of primary-school-age children are out of school. Girls’ participation, and a respectful link between formal schools and Qur’anic and tsangaya centres, are central to any serious basic-education plan across the 23 Local Government Areas. Rural LGAs where banditry has disrupted schooling need a different track from Sokoto metropolis.',
    coverParagraph:
      'We recognise the education task at the seat of the Caliphate. UNICEF education fact sheets place Sokoto among the states where more than half of primary-school-age children are out of school. Girls’ participation, and a respectful link between formal schools and Qur’anic and tsangaya centres, are central to any serious basic-education plan across the 23 Local Government Areas. Rural LGAs where banditry has disrupted schooling need a different track from Sokoto metropolis. SmartEdu Hub is offered as a records and learning system that includes both tracks, and that treats integrated Qur’anic schooling as part of the state’s picture.',
    summarySentence:
      'For Sokoto State, SmartEdu Hub helps the Ministry record out-of-school children, follow girls’ attendance, and include integrated Qur’anic centres, across all 23 LGAs.',
    priorities: [
      'Reduce a primary out-of-school rate that UNICEF places above 50 per cent.',
      'Raise girls’ enrolment and daily attendance with evidence.',
      'Include tsangaya and integrated Qur’anic learners in the formal record.',
      'Keep Sokoto metropolis and disrupted rural LGAs on separate, visible tracks.',
      'Work in Hausa, the language of the home and of much of the classroom.',
    ],
    contributions: [
      'Community enrolment lists the LGEA and the Ministry both hold.',
      'Girls’ attendance alerts and transition reports.',
      'Learner profiles a tsangaya centre and a formal school can share.',
      'A metropolis view and a rural view, covering all 23 LGAs.',
      'An interface configurable for English and Hausa, plus offline content.',
    ],
    pilotPlace: 'Sokoto metropolis and two rural LGAs the Ministry considers safe to start',
    rolloutNote:
      'Rural expansion should follow the state’s security guidance. Tsangaya inclusion should be designed with the education and religious authorities together.',
    conclusionSentence:
      'A state-wide adoption would give Sokoto a respectful, child-level record of formal and integrated Qur’anic learning across all 23 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Out-of-school children, girls’ attendance, and tsangaya integration in Sokoto',
  },

  taraba: {
    letterBullet:
      'We recognise Taraba as one of Nigeria’s most diverse states, and one of the hardest to supervise from a single capital. Sixteen Local Government Areas run from Jalingo and Wukari to the Mambilla plateau in Sardauna, with scattered settlements, nomadic communities, and long distances. The state needs learning materials and school records that work with weak power, many languages, and long distances from Jalingo.',
    coverParagraph:
      'We recognise Taraba as one of Nigeria’s most diverse states, and one of the hardest to supervise from a single capital. Sixteen Local Government Areas run from Jalingo and Wukari to the Mambilla plateau in Sardauna, with scattered settlements, nomadic communities, and long distances. The state needs learning materials and school records that work with weak power, many languages, and long distances from Jalingo. SmartEdu Hub is proposed as an offline-first learning and records system, so SUBEB in Jalingo can still see Sardauna, Gashaka, and Wukari.',
    summarySentence:
      'For Taraba State, SmartEdu Hub is an offline-first school record for a widely scattered and highly diverse state, from Jalingo and Wukari to the Mambilla plateau, across all 16 LGAs.',
    priorities: [
      'See Sardauna, Gashaka, Wukari, and Jalingo on one dashboard.',
      'Serve nomadic and scattered communities with lightweight records.',
      'Work offline for long periods and sync when a school reaches a network.',
      'Hold many language communities to one NERDC curriculum.',
      'Cut the supervision gap created by distance.',
    ],
    contributions: [
      'LGA dashboards that still display a school which has not synced this week.',
      'Simple enrolment and attendance for nomadic centres.',
      'Offline iBooks, lesson notes, and quizzes.',
      'The same curriculum content in every zone, with languages configured as the Ministry requires.',
      'Quarterly review packs a Jalingo team can use without touring every LGA first.',
    ],
    pilotPlace: 'Jalingo, Wukari, and Sardauna',
    rolloutNote:
      'Sardauna cannot be served from a day trip out of Jalingo. The MOU should budget a highland deployment separately.',
    conclusionSentence:
      'A state-wide adoption would give Taraba an offline school record that reaches from Jalingo to the Mambilla plateau, across all 16 Local Government Areas.',
    languages: 'English and Hausa, with other Taraba languages added as the Ministry requires',
    sectionLine:
      'Offline school records from Jalingo and Wukari to the Mambilla plateau',
  },

  yobe: {
    letterBullet:
      'We recognise Yobe’s place in the same north-east recovery as Borno and Adamawa. UNICEF reported in November 2024 about two million out-of-school children across the three states, and placed Yobe among the states where more than half of primary-age and junior-secondary-age children are out of school. The state’s practical anchors are Damaturu and Potiskum, with Gashua and the northern LGAs still carrying the marks of damaged schooling. There are 17 Local Government Areas.',
    coverParagraph:
      'We recognise Yobe’s place in the same north-east recovery as Borno and Adamawa. UNICEF reported in November 2024 about two million out-of-school children across the three states, and placed Yobe among the states where more than half of primary-age and junior-secondary-age children are out of school. The state’s practical anchors are Damaturu and Potiskum, with Gashua and the northern LGAs still carrying the marks of damaged schooling. There are 17 Local Government Areas. SmartEdu Hub offers catch-up content, teacher support where qualified staff are few, and a SUBEB record that includes girls and integrated Qur’anic learners.',
    summarySentence:
      'For Yobe State, SmartEdu Hub supports catch-up learning from Damaturu and Potiskum outward, in a state UNICEF places among those with more than half of primary-age children out of school.',
    priorities: [
      'Bring out-of-school children into a record, at primary and junior secondary.',
      'Use Damaturu and Potiskum as training hubs for a thinner teaching force.',
      'Reach Gashua and the northern LGAs with offline materials.',
      'Track girls’ return to school.',
      'Include integrated Qur’anic centres in the state’s count.',
    ],
    contributions: [
      'Child-level enrolment for formal schools and learning centres.',
      'Teacher guides and worked examples that help under-qualified staff cover the syllabus.',
      'Offline iBooks for LGAs beyond the two main towns.',
      'Girls’ attendance and transition reports.',
      'Shared records with tsangaya centres, visible across all 17 LGAs.',
    ],
    pilotPlace: 'Damaturu, Potiskum, and Bade (Gashua)',
    rolloutNote:
      'Northern LGAs should receive offline kits. Teacher training can stay concentrated in Damaturu and Potiskum and then travel.',
    conclusionSentence:
      'A state-wide adoption would give Yobe a catch-up and records system anchored in Damaturu and Potiskum and usable in the LGAs still recovering, across all 17 Local Government Areas.',
    languages: 'English, Hausa, and Kanuri',
    sectionLine:
      'Catch-up learning for Yobe, anchored in Damaturu and Potiskum',
  },

  zamfara: {
    letterBullet:
      'We recognise the conditions under which the Ministry is trying to run basic education. UNICEF education fact sheets place Zamfara among the states where more than half of primary-school-age children are out of school. Prolonged school closures in volatile LGAs, including communities in Maradun, Shinkafi, and Birnin Magaji, have pushed more children out. Gusau has become the place where many of those children can still be taught. There are 14 Local Government Areas.',
    coverParagraph:
      'We recognise the conditions under which the Ministry is trying to run basic education. UNICEF education fact sheets place Zamfara among the states where more than half of primary-school-age children are out of school. Prolonged school closures in volatile LGAs, including communities in Maradun, Shinkafi, and Birnin Magaji, have pushed more children out. Gusau has become the place where many of those children can still be taught. There are 14 Local Government Areas. SmartEdu Hub is offered as catch-up learning and a learner record for Gusau and for communities whose schools have been closed, with offline materials and a dashboard that shows which schools are open.',
    summarySentence:
      'For Zamfara State, SmartEdu Hub keeps learning and learner records alive in Gusau and in LGAs where schools have been closed for long periods, across all 14 LGAs.',
    priorities: [
      'Teach and register children who have lost years of schooling.',
      'Use Gusau as a working hub while volatile LGAs remain unsafe.',
      'Show SUBEB which schools are open, partial, or closed.',
      'Support girls’ return where families have kept daughters at home.',
      'Work offline, and avoid assuming a team can visit every LGA on a calendar.',
    ],
    contributions: [
      'Short catch-up modules and placement checks for over-age learners.',
      'Full school tools for Gusau schools absorbing extra children.',
      'A school-status dashboard for all 14 LGAs.',
      'Girls’ enrolment and attendance tracking.',
      'Offline content packs that do not depend on a permanent connection.',
    ],
    pilotPlace: 'Gusau, plus a records desk for learners who have left closed schools in volatile LGAs',
    rolloutNote:
      'Expansion beyond Gusau should follow the state’s security advice. Fourteen LGAs make a full data map realistic even where physical rollout is staged.',
    conclusionSentence:
      'A state-wide adoption would give Zamfara a way to teach and count children in Gusau and in LGAs where schools have been closed, across all 14 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Catch-up learning for Gusau and for LGAs where schools have been closed',
  },
}

const EXCLUSIVE_PHRASES: Record<string, string> = {
  EdoBEST: 'edo',
  EKOEXCEL: 'lagos',
  KwaraLEARN: 'kwara',
  BayelsaPRIME: 'bayelsa',
  'Smart Green': 'enugu',
  'Smart Learn': 'anambra',
  BESDA: 'oyo',
  'Joy Prime': 'akwa-ibom',
  'Oasis Schools': 'edo',
  'Teko School': 'rivers',
  Oritamefa: 'oyo',
  Shiroro: 'niger',
}

export function assertStateEducationProfiles(slugs: string[]) {
  const missing = slugs.filter((slug) => !STATE_EDUCATION_PROFILES[slug])
  if (missing.length) {
    throw new Error(`Missing state education profiles: ${missing.join(', ')}`)
  }
  const extra = Object.keys(STATE_EDUCATION_PROFILES).filter(
    (slug) => !slugs.includes(slug),
  )
  if (extra.length) {
    throw new Error(`Unexpected state education profiles: ${extra.join(', ')}`)
  }
  for (const slug of slugs) {
    const profile = STATE_EDUCATION_PROFILES[slug]
    if (profile.priorities.length !== 5 || profile.contributions.length !== 5) {
      throw new Error(`${slug} needs 5 priorities and 5 contributions`)
    }
    const blob = JSON.stringify(profile)
    if (blob.includes('Ekiti')) {
      throw new Error(`${slug} profile still mentions Ekiti`)
    }
    if (/opon imo/i.test(blob)) {
      throw new Error(`${slug} still cites Opon Imo`)
    }
    for (const [phrase, owner] of Object.entries(EXCLUSIVE_PHRASES)) {
      if (blob.includes(phrase) && owner !== slug) {
        throw new Error(`${slug} contains ${phrase}, which belongs to ${owner}`)
      }
    }
  }
  const letters = slugs.map((slug) => STATE_EDUCATION_PROFILES[slug].letterBullet)
  if (new Set(letters).size !== letters.length) {
    throw new Error('Two states share the same recognition paragraph')
  }
}
