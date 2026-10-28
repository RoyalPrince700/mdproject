/**
 * State-specific education context for the 35 proposals cloned from the Ekiti seed.
 * Ekiti keeps its own file.
 *
 * Copy recognises what the current administration is doing in 2025–2026.
 * It does not cite a previous government's programme, and it does not
 * describe a state by an out-of-school statistic. Programme names stay
 * with the state that runs them.
 *
 * Checked against public reporting, including: Abia smart schools (July 2026);
 * Adamawa teacher recruitment and model schools (January 2026); BayelsaPRIME
 * (technical working committee, June 2026); Benue free basic education and
 * BRACE-UP (February 2026); Cross River curriculum distribution (July 2026);
 * Delta UBEC counterpart and classrooms (August 2026); Edo SHINE Agenda;
 * Enugu Smart Green Schools; Gombe HOPE-EDU counterpart; JigawaUNITE and the
 * 2026 manpower plan; Kaduna basic-education commissioning and the 2025/2026
 * school census; Kano 2026 NECO and teacher recruitment; Katsina Building Your
 * Future (May 2026); Kebbi school rebuilding (February 2026); Kogi UBE guideline
 * 2025–2030; KwaraLEARN (still cited by the state in 2026); EKOEXCEL and the
 * Eko Learners’ Support Programme; Nasarawa 2026 education budget and Lafia
 * smart model schools; Niger classroom renewal (August 2026); Ondo federal
 * recognition (October 2026); Osun teacher recruitment and the 2026 NECO result;
 * Oyo teacher tablets (August 2025) and free education still in force; Plateau
 * HOPE-EDU and classroom renovation; Sokoto free basic education and integrated
 * Qur’anic models; Taraba free education and 2026 WAEC registration.
 * Osun copy does not cite Opon Imo. Edo copy does not cite EdoBEST.
 * Oyo copy does not cite BESDA.
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
      'We recognise Abia’s free and compulsory basic education from Primary 1 to JSS 3, the recruitment and retraining of teachers, and the smart-school rollout opened in July 2026 with Ogbo Central Smart School, Ubakala. The state has devoted about a fifth of its annual budget to education, and the smart schools are opening across the senatorial districts, with one digital campus planned for every Local Government Area. More than 30 schools in Abia have already adopted SmartEdu Hub.',
    coverParagraph:
      'We recognise Abia’s free and compulsory basic education from Primary 1 to JSS 3, the recruitment and retraining of teachers, and the smart-school rollout opened in July 2026 with Ogbo Central Smart School, Ubakala. The state has devoted about a fifth of its annual budget to education, and the smart schools are opening across the senatorial districts, with one digital campus planned for every Local Government Area. More than 30 schools in Abia have already adopted SmartEdu Hub. SmartEdu Hub gives that reform a daily system for enrolment, attendance, lessons, and SUBEB reporting.',
    summarySentence:
      'For Abia State, SmartEdu Hub connects free compulsory basic education and the 2026 smart-school rollout to enrolment, classroom tools, and a SUBEB view across all 17 LGAs, starting from schools in the state that already use the platform.',
    priorities: [
      'Support free, compulsory basic education from Primary 1 to JSS 3 with daily enrolment and attendance.',
      'Equip teachers in the new smart schools, beginning with Ubakala and the campuses opening across the senatorial districts.',
      'Hold one performance view across the Abia North, Central, and South senatorial districts.',
      'Give supervisors lesson notes and assessment records when they visit renovated classrooms.',
      'Use the schools already on SmartEdu Hub in Abia as the reference group for a wider rollout.',
    ],
    contributions: [
      'Digital enrolment, daily attendance, and parent alerts for the free-education cohort.',
      'Teacher training on iBooks, lesson notes, and classroom assessment, alongside the smart-school training already under way.',
      'A SUBEB dashboard filterable by school and LGA, from Aba South to Ohafia and Bende.',
      'Downloadable lesson notes and continuous-assessment records for ministry supervisors.',
      'A living pilot inside Abia, where more than 30 schools adopted SmartEdu Hub within three months of launch.',
    ],
    pilotPlace: 'Umuahia, Aba, and Ubakala, including schools already on SmartEdu Hub',
    rolloutNote:
      'The wider rollout should follow the smart schools as they open, and still serve both the Aba corridor and the northern LGAs around Ohafia and Bende.',
    conclusionSentence:
      'A state-wide adoption would give Abia one operating system for free compulsory education and the smart-school rollout, across all 17 Local Government Areas, with classrooms in the state already able to show how the platform behaves.',
    languages: 'English and Igbo',
    sectionLine:
      'Free compulsory basic education and the 2026 smart schools across Abia’s 17 LGAs',
  },

  adamawa: {
    letterBullet:
      'We recognise the Government of Adamawa State’s current investment in education: free basic and secondary education, public-examination support, 21 model basic schools prepared for use, the rehabilitation of 68 secondary schools, and a further 5,000 teachers whose recruitment process was concluded in 2026. Integrated Qur’anic centres are being linked to formal instruction in English and Mathematics. The Ministry supervises 21 Local Government Areas, from Yola and Numan to the Mubi axis.',
    coverParagraph:
      'We recognise the Government of Adamawa State’s current investment in education: free basic and secondary education, public-examination support, 21 model basic schools prepared for use, the rehabilitation of 68 secondary schools, and a further 5,000 teachers whose recruitment process was concluded in 2026. Integrated Qur’anic centres are being linked to formal instruction in English and Mathematics. The Ministry supervises 21 Local Government Areas, from Yola and Numan to the Mubi axis. SmartEdu Hub gives those new schools and that expanded teaching force a shared system for lessons, attendance, and SUBEB reporting.',
    summarySentence:
      'For Adamawa State, SmartEdu Hub supports the model schools, the rehabilitated secondary schools, and the teachers recruited in 2026, with one SUBEB record across all 21 LGAs.',
    priorities: [
      'Put lesson notes and continuous assessment in the hands of the teachers recruited in 2026.',
      'Give the 21 model basic schools and the rehabilitated secondary schools the same NERDC content.',
      'Keep Yola, Numan, and the Mubi axis equally visible to SUBEB.',
      'Carry learner records between integrated Qur’anic centres and formal schools.',
      'Prepare public-school candidates for the examinations the state already supports.',
    ],
    contributions: [
      'Digital enrolment, attendance, and parent alerts for free basic and secondary education.',
      'Offline NERDC iBooks and lesson notes for schools across the 21 LGAs.',
      'Teacher guides and refresher training for newly recruited staff.',
      'Transferable learner records between integrated centres and formal schools.',
      'An LGA dashboard for Yola North, Yola South, Numan, Mubi, and the rest of the state.',
    ],
    pilotPlace: 'Yola North, Yola South, and one LGA on the Mubi axis',
    rolloutNote:
      'Later phases should keep the southern LGAs around Numan and Guyuk on the same timetable as the Mubi axis.',
    conclusionSentence:
      'A state-wide adoption would give Adamawa a classroom and records system for the model schools, the rehabilitated secondary schools, and the teachers now being engaged, across all 21 Local Government Areas.',
    languages: 'English, Hausa, and Fulfulde',
    sectionLine:
      'Model schools, new teachers, and one SUBEB record across Adamawa’s 21 LGAs',
  },

  'akwa-ibom': {
    letterBullet:
      'We recognise Akwa Ibom’s long commitment to free and compulsory education from primary through secondary, including learning materials and public-examination support, across 31 Local Government Areas that run from Uyo to coastal communities such as Mbo, Eastern Obolo, and Ibeno. We were also glad that Happiness John of Joy Prime Model Secondary School in this state won the national first prize of the Accessible Summer Competition on SmartEdu Hub.',
    coverParagraph:
      'We recognise Akwa Ibom’s long commitment to free and compulsory education from primary through secondary, including learning materials and public-examination support, across 31 Local Government Areas that run from Uyo to coastal communities such as Mbo, Eastern Obolo, and Ibeno. We were also glad that Happiness John of Joy Prime Model Secondary School in this state won the national first prize of the Accessible Summer Competition on SmartEdu Hub. The same platform can help the Ministry see attendance, completed syllabuses, and examination readiness in both upland and riverine schools, and extend a standard the state is already proud of.',
    summarySentence:
      'For Akwa Ibom State, SmartEdu Hub turns a long-running free-education policy into attendance, lesson, and examination data across 31 LGAs, from Uyo to the coastal schools that supervisors reach with more difficulty.',
    priorities: [
      'Keep free primary and secondary education visible in daily attendance, lessons, and results.',
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
      'We recognise Anambra’s Smart Learn programme, the state’s own digital public-school investment across the 21 Local Government Areas, and the decision to make public education free from nursery through SS3. Anambra’s long reputation for strong examination performance is a strength any digital system should be ready to match.',
    coverParagraph:
      'We recognise Anambra’s Smart Learn programme, the state’s own digital public-school investment across the 21 Local Government Areas, and the decision to make public education free from nursery through SS3. Anambra’s long reputation for strong examination performance is a strength any digital system should be ready to match. SmartEdu Hub can sit with that investment as the learner content, continuous assessment, CBT practice, and SUBEB reporting layer for smart-school classrooms from Awka and Onitsha to the smaller towns.',
    summarySentence:
      'For Anambra State, SmartEdu Hub supplies NERDC content, examination practice, and school records for the Smart Learn schools and for the wider free-education system across all 21 LGAs.',
    priorities: [
      'Place syllabus-aligned content beside Smart Learn’s classrooms and devices.',
      'Keep free education from nursery to SS3 visible as attendance, results, and teacher activity.',
      'Match the examination standard families in Awka, Onitsha, and Nnewi already expect.',
      'Extend the same digital learning to every LGA, so the standard grows with Smart Learn.',
      'Give the Ministry one academic record across all 21 LGAs.',
    ],
    contributions: [
      'Interactive iBooks, videos, and an AI tutor that run inside a smart classroom.',
      'Attendance, results, and parent communication for the free nursery-to-SS3 policy.',
      'Timed CBT for WAEC, NECO, JAMB, BECE, and school mock examinations.',
      'The same content library for schools still waiting for the next smart-school batch.',
      'A SUBEB and ministry dashboard by school and LGA, from Onitsha North to Ihiala and Aguata.',
    ],
    pilotPlace: 'Smart Learn schools in Awka, Onitsha, and Nnewi, with at least one school in each senatorial district',
    rolloutNote:
      'The second wave should move with the smart schools as they open, so every senatorial district is on the same timetable.',
    conclusionSentence:
      'A state-wide adoption would give Anambra a learning and records system worthy of Smart Learn and of the free nursery-to-SS3 policy, across all 21 Local Government Areas.',
    languages: 'English and Igbo',
    sectionLine:
      'Content, assessment, and records for Smart Learn Anambra and free public education',
  },

  bauchi: {
    letterBullet:
      'We recognise the Government of Bauchi State’s investment in free, quality basic education: the rehabilitation and construction of schools, the recruitment of teachers into basic and senior secondary classrooms, and a clear place for integrated Qur’anic education beside the formal school. The Ministry supervises 20 Local Government Areas, from Bauchi metropolis and Azare to widely spread rural communities such as Alkaleri, Toro, and Darazo.',
    coverParagraph:
      'We recognise the Government of Bauchi State’s investment in free, quality basic education: the rehabilitation and construction of schools, the recruitment of teachers into basic and senior secondary classrooms, and a clear place for integrated Qur’anic education beside the formal school. The Ministry supervises 20 Local Government Areas, from Bauchi metropolis and Azare to widely spread rural communities such as Alkaleri, Toro, and Darazo. SmartEdu Hub helps the Ministry see enrolment, attendance, and learning across both formal schools and integrated Qur’anic centres.',
    summarySentence:
      'For Bauchi State, SmartEdu Hub gives SUBEB one view of formal schools and integrated Qur’anic centres, and gives teachers lesson tools across all 20 LGAs.',
    priorities: [
      'Support free, quality basic education with enrolment and daily attendance the Ministry can see.',
      'Keep girls’ participation and the move into junior secondary school visible and encouraged.',
      'Keep a shared record for learners in integrated Qur’anic and tsangaya centres and in formal schools.',
      'Reach rural LGAs such as Alkaleri, Toro, and Darazo with offline materials of the same standard as the capital.',
      'Give Bauchi SUBEB comparable data for Bauchi metropolis, Azare, and the rural LGAs.',
    ],
    contributions: [
      'Enrolment and attendance tools an LGEA can use during community enrolment.',
      'Parent communication that supports girls’ continuity into JSS.',
      'Learner records that a tsangaya centre and a formal school can both update.',
      'Offline iBooks, lesson notes, and quizzes for schools with weak power and connectivity.',
      'A dashboard split by LGA, so Azare, Misau, and Alkaleri stand beside the capital.',
    ],
    pilotPlace: 'Bauchi metropolis, Katagum (Azare), and one large rural LGA such as Alkaleri',
    rolloutNote:
      'Alkaleri and the other large rural LGAs need an offline-first deployment, with a different school density from Bauchi metropolis.',
    conclusionSentence:
      'A state-wide adoption would give Bauchi a way to teach and follow learners in formal schools and integrated Qur’anic centres across all 20 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Formal schools and integrated Qur’anic education across Bauchi’s 20 LGAs',
  },

  bayelsa: {
    letterBullet:
      'We recognise BayelsaPRIME, still the state’s primary-school reform in 2026, guiding public primary schools across the eight Local Government Areas, including communities reached by water. This proposal sits beside that programme. It adds junior secondary records, learner content, examination practice, and parent communication, so creek communities share the same learning standard as Yenagoa.',
    coverParagraph:
      'We recognise BayelsaPRIME, still the state’s primary-school reform in 2026, guiding public primary schools across the eight Local Government Areas, including communities reached by water. This proposal sits beside that programme. It adds junior secondary records, learner content, examination practice, and parent communication, so creek communities share the same learning standard as Yenagoa. SmartEdu Hub is the learning and school-management layer for the years and the functions around BayelsaPRIME.',
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
      'A live dashboard so a riverine school is visible to SUBEB without waiting for the next boat.',
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
      'We recognise the Government of Benue State’s decision, set out at the Basic Education Summit in February 2026, to make Basic 1 to Basic 9 free and compulsory, the recruitment of more than 9,700 teachers, and the BRACE-UP strategy to enrol, retain, and follow every child through basic education. The Ministry supervises 23 Local Government Areas across Makurdi, Gboko, Otukpo, and the Tiv, Idoma, and Igede communities.',
    coverParagraph:
      'We recognise the Government of Benue State’s decision, set out at the Basic Education Summit in February 2026, to make Basic 1 to Basic 9 free and compulsory, the recruitment of more than 9,700 teachers, and the BRACE-UP strategy to enrol, retain, and follow every child through basic education. The Ministry supervises 23 Local Government Areas across Makurdi, Gboko, Otukpo, and the Tiv, Idoma, and Igede communities. SmartEdu Hub is the daily enrolment, lesson, and SUBEB layer for that policy.',
    summarySentence:
      'For Benue State, SmartEdu Hub supports free and compulsory basic education, the teachers recruited by the current administration, and the BRACE-UP learner record across all 23 LGAs.',
    priorities: [
      'Support free and compulsory basic education with daily enrolment and attendance.',
      'Give the newly recruited teachers shared lesson notes and continuous assessment.',
      'Help BRACE-UP follow each learner from enrolment through completion.',
      'Cover Tiv, Idoma, and Igede communities with the same SUBEB standard.',
      'See all 23 LGAs clearly from Makurdi, Gboko, and Otukpo outward.',
    ],
    contributions: [
      'Digital enrolment, attendance, and parent alerts for the free basic-education cohort.',
      'Lesson notes, quizzes, and refresher training for the expanded teaching force.',
      'A learner record BRACE-UP teams and school heads can update together.',
      'One state dashboard covering Benue North-East, North-West, and Benue South.',
      'Offline use, so a school that reconnects later still syncs its attendance and results.',
    ],
    pilotPlace: 'Makurdi, Gboko, and Otukpo',
    rolloutNote:
      'Gboko and Otukpo should open in the same term as Makurdi, so the three education axes move together.',
    conclusionSentence:
      'A state-wide adoption would give Benue a classroom and learner record worthy of free basic education and of the teachers the state has recruited, across all 23 Local Government Areas.',
    languages: 'English, Tiv, and Idoma, configured as the Ministry requires',
    sectionLine:
      'Free basic education and BRACE-UP across Benue’s 23 LGAs',
  },

  borno: {
    letterBullet:
      'We recognise the mega-school programme that is placing modern classrooms, laboratories, and ICT facilities in communities across Borno’s 27 Local Government Areas, including schools commissioned in Maiduguri and new campuses under construction in the south. Teachers are being recruited to staff these schools, and integrated Qur’anic education remains part of the state’s learning life.',
    coverParagraph:
      'We recognise the mega-school programme that is placing modern classrooms, laboratories, and ICT facilities in communities across Borno’s 27 Local Government Areas, including schools commissioned in Maiduguri and new campuses under construction in the south. Teachers are being recruited to staff these schools, and integrated Qur’anic education remains part of the state’s learning life. SmartEdu Hub is the lesson, assessment, and records layer for that expanding school map.',
    summarySentence:
      'For Borno State, SmartEdu Hub puts NERDC content, teacher tools, and a SUBEB record into the mega schools, from Maiduguri and Jere across all 27 LGAs.',
    priorities: [
      'Place syllabus-aligned content and continuous assessment in the mega schools as they open.',
      'Support the large and growing school population in Maiduguri and Jere.',
      'Keep every LGA visible to SUBEB, from the capital to Biu and the southern communities.',
      'Give newly recruited teachers lesson notes, worked examples, and refresher training.',
      'Include learners in integrated Qur’anic settings in the state’s picture, with respect.',
    ],
    contributions: [
      'Enrolment, attendance, and parent alerts sized for large new campuses.',
      'Offline iBooks, lesson notes, and quizzes that travel with the teacher.',
      'A 27-LGA dashboard, so a school outside Maiduguri is as visible as one inside it.',
      'Teacher guides and common-mistake prompts tied to the NERDC syllabus.',
      'Learner profiles that a tsangaya centre and a formal school can share.',
    ],
    pilotPlace: 'Maiduguri, Jere, and one southern LGA such as Biu or Hawul',
    rolloutNote:
      'Southern LGAs receiving new mega schools should be on the rollout map from the first MOU, with offline kits packed before teams travel.',
    conclusionSentence:
      'A state-wide adoption would give Borno a learning and records system for the mega schools and the teachers now being engaged, across all 27 Local Government Areas.',
    languages: 'English, Hausa, and Kanuri',
    sectionLine:
      'Lesson content and school records for Borno’s mega schools across 27 LGAs',
  },

  'cross-river': {
    letterBullet:
      'We recognise the Government of Cross River State’s basic-education drive: revised curriculum materials and learning resources distributed in 2026 to 1,084 public primary schools, classrooms and school furniture delivered with UBEC support across the 18 Local Government Areas, consistent WAEC registration for public-school students, and the Senior Secondary Education Board Law of 2026. Calabar, the Bakassi coast, and the Obudu highlands can now be held to one standard.',
    coverParagraph:
      'We recognise the Government of Cross River State’s basic-education drive: revised curriculum materials and learning resources distributed in 2026 to 1,084 public primary schools, classrooms and school furniture delivered with UBEC support across the 18 Local Government Areas, consistent WAEC registration for public-school students, and the Senior Secondary Education Board Law of 2026. Calabar, the Bakassi coast, and the Obudu highlands can now be held to one standard. SmartEdu Hub is that shared layer, with offline content for the hills and the coast and a live dashboard for SUBEB in Calabar.',
    summarySentence:
      'For Cross River State, SmartEdu Hub extends the 2026 curriculum materials into daily lessons and gives Calabar, the Bakassi coast, and the Obudu highlands one SUBEB record across all 18 LGAs.',
    priorities: [
      'Hold Calabar schools and remote highland schools to the same curriculum standard.',
      'Serve Bakassi, Akpabuyo, and other coastal communities with offline materials.',
      'Give central LGAs such as Ikom, Boki, and Etung the same supervision record as Calabar.',
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
      'We recognise the Government of Delta State’s current basic-education investment: UBEC counterpart funding kept up to date, 174 new classrooms, 815 classrooms renovated, further classrooms under construction, and two additional model smart schools, alongside the SMART School at Orogun. More than 302,000 pupils are enrolled in public basic schools. Delta North around Asaba, Delta Central around Warri and Ughelli, and riverine Delta South are three proud school communities. There are 25 Local Government Areas.',
    coverParagraph:
      'We recognise the Government of Delta State’s current basic-education investment: UBEC counterpart funding kept up to date, 174 new classrooms, 815 classrooms renovated, further classrooms under construction, and two additional model smart schools, alongside the SMART School at Orogun. More than 302,000 pupils are enrolled in public basic schools. Delta North around Asaba, Delta Central around Warri and Ughelli, and riverine Delta South are three proud school communities. There are 25 Local Government Areas. SmartEdu Hub provides one record for all three, with offline content for schools reached by water and examination practice for the secondary-school corridors.',
    summarySentence:
      'For Delta State, SmartEdu Hub gives the new classrooms, the Orogun SMART School, and the Warri–Ughelli corridor one school record and the same NERDC content across all 25 LGAs.',
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
      'We recognise Ebonyi as a state where young people stay the course through senior secondary school, and where the current administration can match that participation with lesson quality, assessment, and closer supervision. Thirteen Local Government Areas, from Abakaliki and Afikpo to Ikwo and the rural communities, are a manageable map for one standard of teaching and one SUBEB dashboard.',
    coverParagraph:
      'We recognise Ebonyi as a state where young people stay the course through senior secondary school, and where the current administration can match that participation with lesson quality, assessment, and closer supervision. Thirteen Local Government Areas, from Abakaliki and Afikpo to Ikwo and the rural communities, are a manageable map for one standard of teaching and one SUBEB dashboard. SmartEdu Hub is built for that step: teacher lesson tools, continuous assessment, and a view from Abakaliki to Afikpo and the rural LGAs.',
    summarySentence:
      'For Ebonyi State, SmartEdu Hub raises lesson quality, examination practice, and rural supervision across all 13 LGAs, in a state where senior secondary participation is already a strength.',
    priorities: [
      'Match strong school participation with stronger learning in rural classrooms.',
      'Give teachers in Abakaliki, Afikpo, Ikwo, and Onueke the same lesson-note standard.',
      'Prepare more learners for WAEC, NECO, and JAMB, building on the enrolment the state already enjoys.',
      'Help SUBEB supervise Ebonyi North, Central, and South with the same indicators.',
      'Use continuous assessment to celebrate progress and to support the topics a class is still mastering.',
    ],
    contributions: [
      'NERDC iBooks, videos, and topic quizzes that show where a class is ready to go further.',
      'Shared lesson-note and assessment tools for urban and rural teachers.',
      'CBT practice for SSCE and JAMB, assigned by the subject teacher.',
      'A 13-LGA dashboard with the same fields in every zone.',
      'Revision aids tied to the topics a class is working through.',
    ],
    pilotPlace: 'Abakaliki, Afikpo, and Ikwo',
    rolloutNote:
      'Thirteen LGAs make a full rollout realistic in one academic year once the three-zone pilot is stable.',
    conclusionSentence:
      'A state-wide adoption would give Ebonyi a quality and supervision system worthy of the participation the state has already achieved, across all 13 Local Government Areas.',
    languages: 'English and Igbo',
    sectionLine:
      'Learning quality and rural supervision across Ebonyi’s 13 LGAs',
  },

  edo: {
    letterBullet:
      'We recognise the Government of Edo State’s education reset under the SHINE Agenda: a state of emergency on public schools declared in March 2025, the recruitment of 5,000 teachers, new and renovated public schools across the 18 Local Government Areas, the EDU-Rescue programme, and instructional materials provided for in the 2026 budget. A student of The Oasis Schools, Ekpoma, took national second prize in the Accessible Summer Competition on SmartEdu Hub.',
    coverParagraph:
      'We recognise the Government of Edo State’s education reset under the SHINE Agenda: a state of emergency on public schools declared in March 2025, the recruitment of 5,000 teachers, new and renovated public schools across the 18 Local Government Areas, the EDU-Rescue programme, and instructional materials provided for in the 2026 budget. A student of The Oasis Schools, Ekpoma, took national second prize in the Accessible Summer Competition on SmartEdu Hub, which gives Edo a local demonstration of the learner side of the platform. SmartEdu Hub adds learner content, examination practice, parent records, and secondary-school management for this reset.',
    summarySentence:
      'For Edo State, SmartEdu Hub supports the SHINE education reset with learner content, CBT practice, parent records, and secondary-school management across all 18 LGAs.',
    priorities: [
      'Give the 5,000 newly recruited teachers lesson notes and continuous assessment.',
      'Serve Benin City, the Esan axis around Ekpoma, and Edo North around Auchi with one record.',
      'Strengthen WAEC, NECO, and JAMB practice in a state with a deep secondary-school tradition.',
      'Support EDU-Rescue with enrolment, attendance, and learning records the Ministry can see.',
      'Give parents a window on attendance and results.',
    ],
    contributions: [
      'iBooks, AI tutor support, and CBT for learners in the renewed public schools.',
      'A dashboard for Edo South, Edo Central, and Edo North.',
      'Past questions and timed mocks for WAEC, NECO, JAMB, and BECE.',
      'Enrolment and attendance tools that sit comfortably with EDU-Rescue.',
      'A parent portal for attendance, results, and school announcements.',
    ],
    pilotPlace: 'Benin City, Ekpoma, and Auchi',
    rolloutNote:
      'Edo South, Central, and North should each have a pilot school cluster before the 18-LGA rollout.',
    conclusionSentence:
      'A state-wide adoption would give Edo a learner, parent, and secondary-school layer for the SHINE education reset, across all 18 Local Government Areas.',
    languages: 'English, Nigerian Pidgin, and the main Edo languages as the Ministry requires',
    sectionLine:
      'Learner content and secondary records for Edo’s SHINE education reset',
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
      'We recognise a compact state that can see all of its schools clearly. The Government of Gombe State has approved ₦6.1 billion as counterpart funding for HOPE-EDU, the basic-education programme running to 2030, so that qualified teachers can be recruited and trained and learning support can deepen. Eleven Local Government Areas make a full state view realistic: Gombe metropolis, the southern LGAs of Billiri, Kaltungo, and Shongom, and the northern LGAs of Dukku, Nafada, and Funakaye.',
    coverParagraph:
      'We recognise a compact state that can see all of its schools clearly. The Government of Gombe State has approved ₦6.1 billion as counterpart funding for HOPE-EDU, the basic-education programme running to 2030, so that qualified teachers can be recruited and trained and learning support can deepen. Eleven Local Government Areas make a full state view realistic: Gombe metropolis, the southern LGAs of Billiri, Kaltungo, and Shongom, and the northern LGAs of Dukku, Nafada, and Funakaye. SmartEdu Hub gives the Ministry one enrolment and learning record for all three settings, with offline content where power and network are weak.',
    summarySentence:
      'For Gombe State, SmartEdu Hub gives HOPE-EDU a classroom and SUBEB record, and holds one standard across the metropolis, the southern LGAs, and the northern LGAs, all 11 of them.',
    priorities: [
      'Support the teachers HOPE-EDU is recruiting with lesson notes and continuous assessment.',
      'Encourage girls through primary and into junior secondary school.',
      'Use the advantage of only 11 LGAs to aim for full visibility in one planned rollout.',
      'Give southern and northern LGAs the same content, each in the conditions of that zone.',
      'Link integrated Qur’anic schooling with the formal school record.',
    ],
    contributions: [
      'Enrolment the LGEA can keep current, child by child.',
      'Attendance and parent follow-up that supports girls’ continuity into JSS.',
      'A complete 11-LGA dashboard, small enough to review every month.',
      'Offline lesson packs for Dukku, Nafada, and Funakaye, and the same content in Billiri and Kaltungo.',
      'Shared learner records between tsangaya centres and formal schools.',
    ],
    pilotPlace: 'Gombe metropolis, Billiri, and Dukku',
    rolloutNote:
      'With 11 LGAs, the state can move from a three-site pilot to full coverage inside two academic sessions if training stays ahead of devices.',
    conclusionSentence:
      'A state-wide adoption would give Gombe, across all 11 Local Government Areas, a realistic path to see every public school and to support the teachers and learners HOPE-EDU is backing.',
    languages: 'English, Hausa, and Fulfulde',
    sectionLine:
      'A full 11-LGA view of classroom learning for Gombe’s HOPE-EDU years',
  },

  imo: {
    letterBullet:
      'We recognise Imo’s strong path through senior secondary school, the digitisation of the Ministry of Primary and Secondary Education, and the current digital-learning drive: a learning passport opened with a first phase of 100 schools, interactive boards already procured, and smart schools being established across the local governments. Families in Owerri, Orlu, and Okigwe judge schools by WAEC, NECO, and JAMB, and public schools are being equipped to meet that standard. There are 27 Local Government Areas.',
    coverParagraph:
      'We recognise Imo’s strong path through senior secondary school, the digitisation of the Ministry of Primary and Secondary Education, and the current digital-learning drive: a learning passport opened with a first phase of 100 schools, interactive boards already procured, and smart schools being established across the local governments. Families in Owerri, Orlu, and Okigwe judge schools by WAEC, NECO, and JAMB, and public schools are being equipped to meet that standard. There are 27 Local Government Areas. SmartEdu Hub gives those public schools the lesson quality, examination practice, and SUBEB data to match the expectation.',
    summarySentence:
      'For Imo State, SmartEdu Hub raises examination readiness for the new smart schools and gives SUBEB one view of public schools across Owerri, Orlu, and Okigwe, all 27 LGAs.',
    priorities: [
      'Match public-school lesson quality to a strong examination culture.',
      'Supervise 27 LGAs without losing Orlu or Okigwe inside Owerri’s numbers.',
      'Give public schools CBT practice worthy of Imo’s examination tradition.',
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
      'We recognise JigawaUNITE, the state’s programme for teaching, school infrastructure, and learning outcomes, and the 2026 basic-education manpower plan that follows an enrolment of more than 1.3 million pupils. The plan recruits and deploys teachers through 2028 so each Local Government Area has the staff its classrooms deserve. Integrated Qur’anic schooling sits respectfully beside the formal school, from Dutse, Hadejia, and Gumel out to the smaller rural LGAs.',
    coverParagraph:
      'We recognise JigawaUNITE, the state’s programme for teaching, school infrastructure, and learning outcomes, and the 2026 basic-education manpower plan that follows an enrolment of more than 1.3 million pupils. The plan recruits and deploys teachers through 2028 so each Local Government Area has the staff its classrooms deserve. Integrated Qur’anic schooling sits respectfully beside the formal school, from Dutse, Hadejia, and Gumel out to the smaller rural LGAs. SmartEdu Hub helps the Ministry see the primary-to-JSS journey, learner by learner.',
    summarySentence:
      'For Jigawa State, SmartEdu Hub supports JigawaUNITE and the 2026 teacher plan with rural attendance, lesson tools, and a SUBEB record across all 27 LGAs.',
    priorities: [
      'Give teachers recruited under the 2026 manpower plan shared lesson notes and assessment.',
      'Encourage the move from primary into junior secondary, especially for girls.',
      'Supervise 27 rural LGAs from Dutse with the same indicators in every zone.',
      'Connect integrated Qur’anic schools to the formal record.',
      'Keep learning materials usable where connectivity is limited.',
    ],
    contributions: [
      'Child-level enrolment the LGEA can update as new teachers and new classrooms come into use.',
      'Attendance alerts and JSS placement records that show who is continuing after primary.',
      'A 27-LGA dashboard grouped by Dutse, Hadejia, Gumel, Ringim, and Kazaure axes.',
      'Learner records shared by tsangaya centres and formal schools.',
      'Offline iBooks and quizzes for rural primary and junior secondary schools.',
    ],
    pilotPlace: 'Dutse, Hadejia, and Gumel',
    rolloutNote:
      'The remaining LGAs are rural and dispersed. Training of LGEA officers matters as much as school training.',
    conclusionSentence:
      'A state-wide adoption would give Jigawa a child-level view of enrolment and of the primary-to-JSS transition across all 27 Local Government Areas, in step with JigawaUNITE.',
    languages: 'English and Hausa',
    sectionLine:
      'JigawaUNITE, new teachers, and the primary-to-JSS journey across 27 LGAs',
  },

  kaduna: {
    letterBullet:
      'We recognise the Government of Kaduna State’s basic-education investment across all 23 Local Government Areas: 3,267 classrooms constructed or rehabilitated, 33,137 teachers, head teachers, and school support officers trained, a higher minimum wage for primary-school teachers, and bilingual education schools in Igabi, Zaria, Kubau, and Giwa. The 2025/2026 annual school census gives the Ministry a fresh picture of the metropolis, Zaria, and Southern Kaduna around Kafanchan and Kachia.',
    coverParagraph:
      'We recognise the Government of Kaduna State’s basic-education investment across all 23 Local Government Areas: 3,267 classrooms constructed or rehabilitated, 33,137 teachers, head teachers, and school support officers trained, a higher minimum wage for primary-school teachers, and bilingual education schools in Igabi, Zaria, Kubau, and Giwa. The 2025/2026 annual school census gives the Ministry a fresh picture of the metropolis, Zaria, and Southern Kaduna around Kafanchan and Kachia. SmartEdu Hub provides learner content, teacher tools, and a zonal dashboard for Kaduna North, Kaduna Central, and Kaduna South.',
    summarySentence:
      'For Kaduna State, SmartEdu Hub gives the renovated classrooms and the trained teaching force a zonal picture of learning and attendance across the metropolis, Zaria, and Southern Kaduna, all 23 LGAs.',
    priorities: [
      'Hold Kaduna metropolis, Zaria, and Southern Kaduna to one data standard.',
      'Put lesson notes and continuous assessment in the hands of the teachers already trained.',
      'Support the state’s school census with a live record that stays current after the count.',
      'Back girls’ participation with attendance the Ministry can celebrate.',
      'Give SUBEB filters for all 23 LGAs and the three senatorial districts.',
    ],
    contributions: [
      'Zone dashboards for Kaduna North, Central, and South.',
      'Lesson content for the new bilingual education schools and for every other public school.',
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
      'We recognise the Government of Kano State’s education investment and the result it is producing. Kano led the country in the 2026 NECO Senior School Certificate Examination, for the second consecutive year. The state has devoted about 30 per cent of its annual budget to education, recruited 16,000 teachers, and in 2026 spent more than ₦4.4 billion to sponsor candidates for the Senior School Certificate Examination. The Ministry supervises 44 Local Government Areas, the largest basic-education map in Nigeria, with girls’ education and integrated Qur’anic schooling as part of that ambition.',
    coverParagraph:
      'We recognise the Government of Kano State’s education investment and the result it is producing. Kano led the country in the 2026 NECO Senior School Certificate Examination, for the second consecutive year. The state has devoted about 30 per cent of its annual budget to education, recruited 16,000 teachers, and in 2026 spent more than ₦4.4 billion to sponsor candidates for the Senior School Certificate Examination. The Ministry supervises 44 Local Government Areas, the largest basic-education map in Nigeria, with girls’ education and integrated Qur’anic schooling as part of that ambition. SmartEdu Hub is proposed as the records, content, and SUBEB layer for a system of this scale.',
    summarySentence:
      'For Kano State, SmartEdu Hub gives the teachers recruited under the current administration, and the examination standard behind the 2026 NECO result, a scalable record across all 44 LGAs.',
    priorities: [
      'Supervise 44 LGAs without the rural ones disappearing inside Kano Municipal’s totals.',
      'Keep public-school examination practice at the standard behind Kano’s leading 2026 NECO result.',
      'Track girls’ attendance and the move into junior secondary school.',
      'Include integrated Qur’anic and tsangaya learners in the state’s picture.',
      'Keep content usable offline in rural LGAs far from the metropolis.',
    ],
    contributions: [
      'LGA and zone dashboards built for the largest LGA count in Nigeria.',
      'CBT practice for WAEC, NECO, JAMB, and BECE, beside the examinations the state already sponsors.',
      'Girls’ attendance and JSS transition reports.',
      'Shared records between formal schools and tsangaya centres.',
      'Offline NERDC materials and a Hausa-configurable interface.',
    ],
    pilotPlace: 'Kano Municipal, Nassarawa, and two rural LGAs in different zones',
    rolloutNote:
      'A 44-LGA rollout only works zone by zone, with LGEA officers trained before schools are switched on.',
    conclusionSentence:
      'A state-wide adoption would give Kano a school and learner record large enough for 44 Local Government Areas, worthy of the examination result and the teaching force the state is building.',
    languages: 'English and Hausa',
    sectionLine:
      'Examination practice and school records at Kano’s scale, across 44 LGAs',
  },

  katsina: {
    letterBullet:
      'We recognise the Government of Katsina State’s Building Your Future investment in education: more than ₦120 billion committed to the sector in three years, 170 junior secondary schools constructed, hundreds of schools rehabilitated, and more than 7,000 teachers recruited. Model smart secondary schools with robotics and artificial-intelligence facilities now stand in the three senatorial zones. In February 2026 the state approved 70 further secondary schools, and it is establishing teachers’ development centres and ICT centres so a child in a rural community has the same digital chance as a child in the city. The Ministry supervises 34 Local Government Areas, from Katsina metropolis to Daura and Funtua.',
    coverParagraph:
      'We recognise the Government of Katsina State’s Building Your Future investment in education: more than ₦120 billion committed to the sector in three years, 170 junior secondary schools constructed, hundreds of schools rehabilitated, and more than 7,000 teachers recruited. Model smart secondary schools with robotics and artificial-intelligence facilities now stand in the three senatorial zones. In February 2026 the state approved 70 further secondary schools, and it is establishing teachers’ development centres and ICT centres so a child in a rural community has the same digital chance as a child in the city. The Ministry supervises 34 Local Government Areas, from Katsina metropolis to Daura and Funtua. SmartEdu Hub is the lesson, examination, and SUBEB layer for that new school map.',
    summarySentence:
      'For Katsina State, SmartEdu Hub supports the new junior secondary schools, the model smart schools, and the teachers recruited under Building Your Future, across all 34 LGAs.',
    priorities: [
      'Put NERDC content and continuous assessment into the new junior secondary schools and the model smart schools.',
      'Serve the school population in Katsina metropolis, Daura, and Funtua on one record.',
      'Give the teachers recruited in the last exercise, and those still to be engaged, shared lesson notes.',
      'Encourage girls’ attendance and continuity with parent communication.',
      'Give SUBEB a 34-LGA view that keeps every senatorial zone equally visible.',
    ],
    contributions: [
      'iBooks, quizzes, and CBT sized for the new smart secondary schools.',
      'Full school management for urban and town schools.',
      'Lesson notes and refresher training aligned to the teachers’ development centres.',
      'Girls’ attendance tracking and parent notification.',
      'A 34-LGA dashboard split across the three senatorial zones.',
    ],
    pilotPlace: 'Katsina metropolis, Funtua, and one model smart school in a senatorial zone',
    rolloutNote:
      'Each senatorial zone should have a pilot cluster before the 34-LGA rollout, with offline kits for rural schools beside the new ICT centres.',
    conclusionSentence:
      'A state-wide adoption would give Katsina a learning and records system for the schools and teachers Building Your Future has put in place, across all 34 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'New schools, smart campuses, and a 34-LGA record for Katsina',
  },

  kebbi: {
    letterBullet:
      'We recognise the Government of Kebbi State’s school rebuilding programme: about 1,500 primary and secondary schools rehabilitated, more than 300 new schools constructed, and more than 200,000 textbooks, valued at ₦3 billion, procured for public primary schools. Four mega boarding schools for science and skills, each planned for about 2,000 students, are sited in Birnin Kebbi, Argungu, Yauri, and Zuru. Teachers may now serve longer, so experienced staff remain in class. There are 21 Local Government Areas.',
    coverParagraph:
      'We recognise the Government of Kebbi State’s school rebuilding programme: about 1,500 primary and secondary schools rehabilitated, more than 300 new schools constructed, and more than 200,000 textbooks, valued at ₦3 billion, procured for public primary schools. Four mega boarding schools for science and skills, each planned for about 2,000 students, are sited in Birnin Kebbi, Argungu, Yauri, and Zuru. Teachers may now serve longer, so experienced staff remain in class. There are 21 Local Government Areas. SmartEdu Hub gives those new and renewed schools a shared lesson, attendance, and SUBEB record.',
    summarySentence:
      'For Kebbi State, SmartEdu Hub supports the rebuilt schools, the new textbooks, and the four mega science schools with one record across all 21 LGAs.',
    priorities: [
      'Put digital lessons beside the new textbooks in rehabilitated primary schools.',
      'Reach Zuru, Yauri, and Argungu with the same visibility as Birnin Kebbi.',
      'Support the four mega boarding schools with science content and examination practice.',
      'Encourage girls’ enrolment and daily attendance.',
      'Give rural teachers offline lessons where the network cannot be assumed.',
    ],
    contributions: [
      'Enrolment and attendance that match the new classroom stock.',
      'Four-axis reporting: Birnin Kebbi, Argungu, Yauri, and Zuru.',
      'iBooks and CBT for the mega schools’ science and skills programmes.',
      'Attendance alerts that support girls’ continuity.',
      'Offline iBooks and teacher notes that sync later.',
    ],
    pilotPlace: 'Birnin Kebbi, Argungu, and Zuru',
    rolloutNote:
      'Yauri and the southern LGAs need their own deployment window. Distances make a single capital-based team too slow.',
    conclusionSentence:
      'A state-wide adoption would give Kebbi a classroom record for the schools it has rebuilt and the four mega campuses it is opening, across all 21 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Rebuilt schools and four mega campuses across Kebbi’s 21 LGAs',
  },

  kogi: {
    letterBullet:
      'We recognise Kogi’s own plan for the years ahead. The State Universal Basic Education Board’s guideline for UBE intervention funds, 2025 to 2030, records a state that performs well on national indices and sets a clear programme for Kogi East, Kogi Central, and Kogi West across 21 Local Government Areas. The 2026 budget keeps education among the state’s leading commitments. Girls’ education and nomadic learners are part of that plan, from Lokoja to Idah, Okene, and Kabba.',
    coverParagraph:
      'We recognise Kogi’s own plan for the years ahead. The State Universal Basic Education Board’s guideline for UBE intervention funds, 2025 to 2030, records a state that performs well on national indices and sets a clear programme for Kogi East, Kogi Central, and Kogi West across 21 Local Government Areas. The 2026 budget keeps education among the state’s leading commitments. Girls’ education and nomadic learners are part of that plan, from Lokoja to Idah, Okene, and Kabba. SmartEdu Hub is proposed as that three-zone record.',
    summarySentence:
      'For Kogi State, SmartEdu Hub gives the 2025–2030 UBE plan one dashboard for Kogi East, Central, and West, across all 21 LGAs.',
    priorities: [
      'Show learning and attendance separately for Igala, Ebira, and Okun communities.',
      'Carry the same lesson standard to riverine communities and to schools far from Lokoja.',
      'Support girls and nomadic learners with attendance the Ministry can see.',
      'Keep Lokoja, Idah, Okene, and Kabba equally visible.',
      'Give SUBEB a tool that matches the 2025–2030 UBE planning window.',
    ],
    contributions: [
      'Three-zone dashboards: East, Central, and West.',
      'School-level records for riverine communities and for every other zone.',
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
      'We recognise KwaraLEARN as the state’s technology-backed reform of public primary schools, still at the centre of basic education in 2026, alongside merit-based teacher recruitment and the 2026 teachers’ promotion exercise. Kwara also straddles several language communities, from Ilorin to the Yoruba south, the Nupe LGAs, and Baruten and Kaiama. This proposal adds the learner record, junior secondary, examination practice, and a parent window across all 16 Local Government Areas.',
    coverParagraph:
      'We recognise KwaraLEARN as the state’s technology-backed reform of public primary schools, still at the centre of basic education in 2026, alongside merit-based teacher recruitment and the 2026 teachers’ promotion exercise. Kwara also straddles several language communities, from Ilorin to the Yoruba south, the Nupe LGAs, and Baruten and Kaiama. This proposal adds the learner record, junior secondary, examination practice, and a parent window across all 16 Local Government Areas. SmartEdu Hub is offered for that surrounding layer, so primary reform and the rest of basic education can be read together.',
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
      'We recognise that Lagos already runs EKOEXCEL in all 1,009 public primary schools, and the Eko Learners’ Support Programme for public secondary schools preparing for WAEC and NECO, beside a free-education policy and six education districts. The useful addition is one system for secondary-school records, parent communication, NERDC learning content, and examination practice at the volume Lagos enters. The state administers this map through 20 Local Government Areas.',
    coverParagraph:
      'We recognise that Lagos already runs EKOEXCEL in all 1,009 public primary schools, and the Eko Learners’ Support Programme for public secondary schools preparing for WAEC and NECO, beside a free-education policy and six education districts. The useful addition is one system for secondary-school records, parent communication, NERDC learning content, and examination practice at the volume Lagos enters. The state administers this map through 20 Local Government Areas. SmartEdu Hub is proposed for that layer, from Ikeja, Mushin, and Alimosho to Ikorodu, Badagry, and Epe.',
    summarySentence:
      'For Lagos State, SmartEdu Hub adds secondary-school records, parent communication, and examination practice beside EKOEXCEL and the Eko Learners’ Support Programme, across 20 LGAs and six education districts.',
    priorities: [
      'Sit beside EKOEXCEL and the Eko Learners’ Support Programme, and cover public secondary schools at Lagos scale.',
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
      'A state-wide adoption would give Lagos a secondary, parent, and examination layer beside EKOEXCEL and the Eko Learners’ Support Programme, across all 20 Local Government Areas and the six education districts.',
    languages: 'English and Yoruba',
    sectionLine:
      'Secondary records and examination practice beside EKOEXCEL and Eko Learners, across six education districts',
  },

  nasarawa: {
    letterBullet:
      'We recognise the Government of Nasarawa State’s 2026 commitment to education, including an allocation of ₦94.25 billion and smart model schools under construction in Lafia. Karu and Keffi, on the Abuja corridor, carry a busy school population of their own, while Awe, Doma, Keana, and the other rural Local Government Areas complete a map of 13. Girls’ education and strong public schools in both the capital and the corridor are part of that investment.',
    coverParagraph:
      'We recognise the Government of Nasarawa State’s 2026 commitment to education, including an allocation of ₦94.25 billion and smart model schools under construction in Lafia. Karu and Keffi, on the Abuja corridor, carry a busy school population of their own, while Awe, Doma, Keana, and the other rural Local Government Areas complete a map of 13. Girls’ education and strong public schools in both the capital and the corridor are part of that investment. SmartEdu Hub is the attendance, learning, and SUBEB layer for both geographies.',
    summarySentence:
      'For Nasarawa State, SmartEdu Hub supports the Lafia smart model schools and gives Karu, Keffi, and the rural LGAs one learning record across all 13.',
    priorities: [
      'Place syllabus-aligned content in the smart model schools as they open in Lafia.',
      'Serve Karu and Keffi, where the Abuja corridor keeps classrooms full.',
      'Reach Awe, Doma, and Keana with offline content of the same standard.',
      'Cover all 13 LGAs, not only the capital and the corridor.',
      'Give SUBEB one dashboard for girls’ attendance and for every school.',
    ],
    contributions: [
      'iBooks, assessment, and attendance for the new model schools.',
      'School management for busy corridor schools in Karu and Keffi.',
      'Offline iBooks for Awe, Doma, Keana, and similar LGAs.',
      'A 13-LGA map that shows Lafia, the corridor, and the rural local governments together.',
      'Transition reports from primary into junior secondary.',
    ],
    pilotPlace: 'Lafia, Karu, and Awe',
    rolloutNote:
      'Keffi and Karu can move quickly. Awe, Doma, and Keana need offline kits and a longer training visit.',
    conclusionSentence:
      'A state-wide adoption would give Nasarawa a learning system for the smart model schools and a single record for the corridor and the rural LGAs, across all 13 Local Government Areas.',
    languages: 'English and Hausa, with other Nasarawa languages added as the Ministry requires',
    sectionLine:
      'Lafia’s smart model schools, the Abuja corridor, and Nasarawa’s rural LGAs',
  },

  niger: {
    letterBullet:
      'We recognise the Government of Niger State’s 2026 school-renewal work: more than 1,000 classrooms renovated and 120,000 chairs and tables supplied, with qualified teachers being engaged for the new learning environment. Niger is Nigeria’s largest state by land area, with 25 Local Government Areas and strong school centres in Minna, Bida, Suleja, and Kontagora. Communities in Bosso, Mokwa, and Shiroro are already among those receiving this investment.',
    coverParagraph:
      'We recognise the Government of Niger State’s 2026 school-renewal work: more than 1,000 classrooms renovated and 120,000 chairs and tables supplied, with qualified teachers being engaged for the new learning environment. Niger is Nigeria’s largest state by land area, with 25 Local Government Areas and strong school centres in Minna, Bida, Suleja, and Kontagora. Communities in Bosso, Mokwa, and Shiroro are already among those receiving this investment. SmartEdu Hub is the offline-ready learning and records system for those renewed classrooms.',
    summarySentence:
      'For Niger State, SmartEdu Hub supports the renovated classrooms and new furniture with lesson tools and a SUBEB record from Minna, Bida, and Suleja to Kontagora, across all 25 LGAs.',
    priorities: [
      'Pair the renovated classrooms with NERDC content and continuous assessment.',
      'Run one digital school system in Minna, Bida, Suleja, and Kontagora.',
      'Include rural and widely spaced communities, not only the town schools.',
      'Work offline across long distances and limited networks.',
      'Give SUBEB a 25-LGA view that keeps every zone visible.',
    ],
    contributions: [
      'Lesson notes and quizzes for the renewed classroom blocks.',
      'Full school management for the four urban anchors.',
      'Lightweight records for rural learning centres.',
      'Offline iBooks and attendance that sync when a school reconnects.',
      'A 25-LGA dashboard covering Minna, Bida, Suleja, Kontagora, and Shiroro.',
    ],
    pilotPlace: 'Minna, Bida, and Suleja, with Shiroro in the first expansion',
    rolloutNote:
      'Kontagora and the northern LGAs are too far from Minna to share one deployment team. They should be named in the first MOU.',
    conclusionSentence:
      'A state-wide adoption would give Niger a school record that fits the country’s largest state by area, across all 25 Local Government Areas, starting from the classrooms the state is already renewing.',
    languages: 'English, Hausa, Nupe, and Gbagyi, as the Ministry requires',
    sectionLine:
      'Renewed classrooms and one school record across Niger’s 25 LGAs',
  },

  ogun: {
    letterBullet:
      'We recognise Ogun’s place as the gateway state: 20 Local Government Areas, a heavy and ambitious school population along the Lagos corridor in Ado-Odo/Ota, Ifo, and Sagamu, and a proud school tradition in Egba, Ijebu, Remo, and Yewa. Families on the industrial corridor expect a high standard, and the public system is ready to meet it. The four divisions should be equally visible to the Ministry in Abeokuta.',
    coverParagraph:
      'We recognise Ogun’s place as the gateway state: 20 Local Government Areas, a heavy and ambitious school population along the Lagos corridor in Ado-Odo/Ota, Ifo, and Sagamu, and a proud school tradition in Egba, Ijebu, Remo, and Yewa. Families on the industrial corridor expect a high standard, and the public system is ready to meet it. The four divisions should be equally visible to the Ministry in Abeokuta. SmartEdu Hub gives public schools examination practice, parent communication, and a four-division dashboard.',
    summarySentence:
      'For Ogun State, SmartEdu Hub gives public schools on the Lagos corridor and in Yewa, Ijebu, Remo, and Egba the same lesson quality, examination practice, and SUBEB record across all 20 LGAs.',
    priorities: [
      'Give public schools examination practice worthy of the standard families on the Lagos corridor already expect.',
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
      'We recognise the Government of Ondo State’s education reforms, honoured by the Federal Government in October 2026: more than 2,100 teachers recruited in 2025, 43 classroom blocks constructed, 75 schools renovated, learning resources across the three senatorial districts, computer textbooks in all 18 Local Government Areas, and ₦633.9 million paid to register 23,048 public-school students for the 2026 WAEC. Tablets and artificial-intelligence tools are already entering public schools. Upland communities around Akure, Ondo, Owo, and Akoko, and the riverine LGAs of Ilaje and Ese-Odo, belong in that same standard.',
    coverParagraph:
      'We recognise the Government of Ondo State’s education reforms, honoured by the Federal Government in October 2026: more than 2,100 teachers recruited in 2025, 43 classroom blocks constructed, 75 schools renovated, learning resources across the three senatorial districts, computer textbooks in all 18 Local Government Areas, and ₦633.9 million paid to register 23,048 public-school students for the 2026 WAEC. Tablets and artificial-intelligence tools are already entering public schools. Upland communities around Akure, Ondo, Owo, and Akoko, and the riverine LGAs of Ilaje and Ese-Odo, belong in that same standard. SmartEdu Hub carries examination-level content for the upland schools and offline materials for the riverine ones, with a single SUBEB record.',
    summarySentence:
      'For Ondo State, SmartEdu Hub supports the teachers recruited in 2025 and the 2026 WAEC cohort, and serves both the upland schools and Ilaje and Ese-Odo across all 18 LGAs.',
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
      'We write as a company headquartered in Ibadan, inside the state this proposal serves. We recognise Oyo’s free public primary and secondary education, still fully in force, the training of 18,000 teachers and the handover of teaching tablets in August 2025, and the 2026 supply of Braille textbooks to special basic schools. Ibadan’s eleven local governments are a different assignment from Oke-Ogun, Ogbomoso, Oyo, and Ibarapa, across 33 Local Government Areas in all. A student of Oritamefa Baptist Model School, Ibadan, shared national third prize in the Accessible Summer Competition on SmartEdu Hub.',
    coverParagraph:
      'We write as a company headquartered in Ibadan, inside the state this proposal serves. We recognise Oyo’s free public primary and secondary education, still fully in force, the training of 18,000 teachers and the handover of teaching tablets in August 2025, and the 2026 supply of Braille textbooks to special basic schools. Ibadan’s eleven local governments are a different assignment from Oke-Ogun, Ogbomoso, Oyo, and Ibarapa, across 33 Local Government Areas in all. A student of Oritamefa Baptist Model School, Ibadan, shared national third prize in the Accessible Summer Competition on SmartEdu Hub. Because our head office is at Oke-Ado, implementation support for Oyo sits in the same city as the Ministry.',
    summarySentence:
      'For Oyo State, SmartEdu Hub — supported from our Ibadan head office — gives free public education a school record across Ibadan and the other zones, and extends the teacher training and tablets the state handed over in 2025, across all 33 LGAs.',
    priorities: [
      'Keep free public primary and secondary education visible in attendance, lessons, and results.',
      'See Ibadan’s LGAs separately from Oke-Ogun, Ogbomoso, Oyo, and Ibarapa.',
      'Give the teachers trained in 2025 a shared lesson-note and assessment routine on the tablets already in schools.',
      'Use a vendor whose implementation team is already based in Ibadan.',
      'Give public schools CBT practice at the standard families in Ibadan already expect.',
    ],
    contributions: [
      'Attendance, results, and parent communication behind the free-education policy.',
      'Zone dashboards for Ibadan, Oke-Ogun, Ogbomoso, Oyo, and Ibarapa.',
      'Lesson notes and quizzes that sit on the devices teachers already hold.',
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
      'We recognise the Government of Plateau State’s basic-education investment: more than 1,200 classrooms renovated across the 17 Local Government Areas in three years, 1,500 teachers recruited, and a commitment of more than ₦10 billion to basic education. That investment includes the HOPE-EDU distribution of teaching materials, buses for supervision, and digital devices for education officers. Jos has a strong school tradition, and the same materials and records can serve Shendam, Langtang, Pankshin, and the rest of the state.',
    coverParagraph:
      'We recognise the Government of Plateau State’s basic-education investment: more than 1,200 classrooms renovated across the 17 Local Government Areas in three years, 1,500 teachers recruited, and a commitment of more than ₦10 billion to basic education. That investment includes the HOPE-EDU distribution of teaching materials, buses for supervision, and digital devices for education officers. Jos has a strong school tradition, and the same materials and records can serve Shendam, Langtang, Pankshin, and the rest of the state. SmartEdu Hub is the lesson, examination, and SUBEB layer for those renewed classrooms.',
    summarySentence:
      'For Plateau State, SmartEdu Hub supports the renovated classrooms, the recruited teachers, and HOPE-EDU’s learning materials with one record from Jos across all 17 LGAs.',
    priorities: [
      'Keep Jos schools academically sharp, with proper examination practice.',
      'Give the 1,500 recruited teachers shared lesson notes and continuous assessment.',
      'Pair renovated classrooms in every LGA with the same NERDC content.',
      'Serve language communities beyond Jos with one curriculum standard.',
      'Give SUBEB a 17-LGA view from Jos to Shendam, Langtang, and Pankshin.',
    ],
    contributions: [
      'CBT and iBooks for schools in Jos North and Jos South.',
      'Lesson notes and refresher training for the expanded teaching force.',
      'Usage records that sit beside the new teaching and learning materials.',
      'Offline content for rural LGAs.',
      'A full 17-LGA dashboard.',
    ],
    pilotPlace: 'Jos North, Jos South, and Pankshin',
    rolloutNote:
      'Southern Plateau, including Shendam and Langtang, should be a named wave. Jos must not be the entire project.',
    conclusionSentence:
      'A state-wide adoption would give Plateau a learning system worthy of the classrooms and teachers the state is already funding, across all 17 Local Government Areas.',
    languages: 'English and Hausa, with other Plateau languages added as the Ministry requires',
    sectionLine:
      'Renovated classrooms, new teachers, and a 17-LGA record for Plateau',
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
      'We recognise the Government of Sokoto State’s basic-education reforms at the seat of the Caliphate: free and compulsory basic education, the removal of school levies, a widening network of early-childhood centres, and a partnership with the Sultanate Council to bring Qur’anic learning into integrated school models in communities such as Shuni, Gagi, Tambuwal, and Wamakko. Mega model schools are rising across the senatorial zones, teachers have been screened for those campuses, and the Digital Village Initiative opened in May 2025 is adding digital skills. There are 23 Local Government Areas.',
    coverParagraph:
      'We recognise the Government of Sokoto State’s basic-education reforms at the seat of the Caliphate: free and compulsory basic education, the removal of school levies, a widening network of early-childhood centres, and a partnership with the Sultanate Council to bring Qur’anic learning into integrated school models in communities such as Shuni, Gagi, Tambuwal, and Wamakko. Mega model schools are rising across the senatorial zones, teachers have been screened for those campuses, and the Digital Village Initiative opened in May 2025 is adding digital skills. There are 23 Local Government Areas. SmartEdu Hub is the records and learning system for that reform, treating integrated Qur’anic schooling as part of the state’s picture.',
    summarySentence:
      'For Sokoto State, SmartEdu Hub supports free basic education, the new mega schools, and integrated Qur’anic models with one SUBEB record across all 23 LGAs.',
    priorities: [
      'Support free and compulsory basic education with daily enrolment and attendance.',
      'Encourage girls’ enrolment and continuity with evidence the Ministry can share.',
      'Include tsangaya and integrated Qur’anic learners in the formal record, with the Sultanate’s model in view.',
      'Give the mega schools and Sokoto metropolis the same lesson standard as the rural LGAs.',
      'Work in Hausa, the language of the home and of much of the classroom.',
    ],
    contributions: [
      'Community enrolment lists the LGEA and the Ministry both hold.',
      'Girls’ attendance alerts and transition reports.',
      'Learner profiles a tsangaya centre and a formal school can share.',
      'A metropolis view and a rural view, covering all 23 LGAs.',
      'An interface configurable for English and Hausa, plus offline content.',
    ],
    pilotPlace: 'Sokoto metropolis, Wamakko, and one integrated-school community such as Shuni or Gagi',
    rolloutNote:
      'Tsangaya inclusion should be designed with the education authorities and the Sultanate together. Rural LGAs should receive offline kits in the same term as the metropolis pilot.',
    conclusionSentence:
      'A state-wide adoption would give Sokoto a respectful, child-level record of formal and integrated Qur’anic learning across all 23 Local Government Areas.',
    languages: 'English and Hausa',
    sectionLine:
      'Free basic education, mega schools, and integrated Qur’anic learning in Sokoto',
  },

  taraba: {
    letterBullet:
      'We recognise the Government of Taraba State’s free and compulsory education policy, which the administration has affirmed is here to stay. In 2026 the state released ₦1.39 billion to register 39,536 students for WAEC, alongside school feeding, and it is taking up its UBEC matching grant so facilities and materials reach every zone. Sixteen Local Government Areas run from Jalingo and Wukari to the Mambilla plateau in Sardauna. That diversity is a strength, and it deserves one record SUBEB can read from the capital.',
    coverParagraph:
      'We recognise the Government of Taraba State’s free and compulsory education policy, which the administration has affirmed is here to stay. In 2026 the state released ₦1.39 billion to register 39,536 students for WAEC, alongside school feeding, and it is taking up its UBEC matching grant so facilities and materials reach every zone. Sixteen Local Government Areas run from Jalingo and Wukari to the Mambilla plateau in Sardauna. That diversity is a strength, and it deserves one record SUBEB can read from the capital. SmartEdu Hub is proposed as that offline-first learning and records system.',
    summarySentence:
      'For Taraba State, SmartEdu Hub supports free education and the 2026 WAEC cohort with an offline-first school record from Jalingo and Wukari to the Mambilla plateau, across all 16 LGAs.',
    priorities: [
      'See Sardauna, Gashaka, Wukari, and Jalingo on one dashboard.',
      'Serve nomadic and scattered communities with lightweight records.',
      'Work offline for long periods and sync when a school reaches a network.',
      'Hold many language communities to one NERDC curriculum.',
      'Keep Sardauna, Gashaka, and Wukari as visible from Jalingo as the capital’s own schools.',
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
      'Sardauna needs its own highland deployment. The MOU should budget that visit separately from a day trip out of Jalingo.',
    conclusionSentence:
      'A state-wide adoption would give Taraba an offline school record that reaches from Jalingo to the Mambilla plateau, across all 16 Local Government Areas.',
    languages: 'English and Hausa, with other Taraba languages added as the Ministry requires',
    sectionLine:
      'Offline school records from Jalingo and Wukari to the Mambilla plateau',
  },

  yobe: {
    letterBullet:
      'We recognise the Government of Yobe State’s continued investment in classrooms and teachers, with Damaturu and Potiskum as strong anchors and Gashua and the northern Local Government Areas fully part of the same map. Seventeen LGAs can share one lesson standard, one attendance record, and one SUBEB view. Integrated Qur’anic learning sits beside the formal school, and girls’ participation is a priority the state can now make visible in every zone.',
    coverParagraph:
      'We recognise the Government of Yobe State’s continued investment in classrooms and teachers, with Damaturu and Potiskum as strong anchors and Gashua and the northern Local Government Areas fully part of the same map. Seventeen LGAs can share one lesson standard, one attendance record, and one SUBEB view. Integrated Qur’anic learning sits beside the formal school, and girls’ participation is a priority the state can now make visible in every zone. SmartEdu Hub offers that shared record, with teacher support and offline content beyond the two main towns.',
    summarySentence:
      'For Yobe State, SmartEdu Hub extends lesson quality and school records from Damaturu and Potiskum to Gashua and the northern LGAs, across all 17.',
    priorities: [
      'Give Damaturu and Potiskum a full digital school record the other LGAs can follow.',
      'Use the two main towns as training hubs for teachers serving farther afield.',
      'Reach Gashua and the northern LGAs with the same NERDC content, available offline.',
      'Encourage girls’ attendance and continuity into junior secondary school.',
      'Include integrated Qur’anic centres in the state’s picture.',
    ],
    contributions: [
      'Child-level enrolment for formal schools and learning centres.',
      'Teacher guides and worked examples that help every teacher cover the syllabus.',
      'Offline iBooks for LGAs beyond the two main towns.',
      'Girls’ attendance and transition reports.',
      'Shared records with tsangaya centres, visible across all 17 LGAs.',
    ],
    pilotPlace: 'Damaturu, Potiskum, and Bade (Gashua)',
    rolloutNote:
      'Northern LGAs should receive offline kits. Teacher training can stay concentrated in Damaturu and Potiskum and then travel.',
    conclusionSentence:
      'A state-wide adoption would give Yobe one learning and records system, anchored in Damaturu and Potiskum and usable in every Local Government Area.',
    languages: 'English, Hausa, and Kanuri',
    sectionLine:
      'One learning standard for Yobe, anchored in Damaturu and Potiskum',
  },

  zamfara: {
    letterBullet:
      'We recognise the Government of Zamfara State’s commitment to restoring confidence in public schools, with Gusau as a strong centre of teaching and a rehabilitation and learning-materials effort that reaches the other Local Government Areas. Fourteen LGAs are a manageable map for one lesson standard and one SUBEB record. Teachers, parents, and community leaders are the partners in that work, and girls’ participation can be encouraged with the same tools in every zone.',
    coverParagraph:
      'We recognise the Government of Zamfara State’s commitment to restoring confidence in public schools, with Gusau as a strong centre of teaching and a rehabilitation and learning-materials effort that reaches the other Local Government Areas. Fourteen LGAs are a manageable map for one lesson standard and one SUBEB record. Teachers, parents, and community leaders are the partners in that work, and girls’ participation can be encouraged with the same tools in every zone. SmartEdu Hub gives the Ministry that enrolment, lesson, and attendance record, including offline content for schools outside Gusau.',
    summarySentence:
      'For Zamfara State, SmartEdu Hub gives Gusau and the other 13 LGAs one lesson standard, one attendance record, and offline content where the network is limited.',
    priorities: [
      'Support rehabilitated schools with lesson notes and continuous assessment.',
      'Use Gusau as the training hub, then carry the same standard to the other LGAs.',
      'Show SUBEB attendance and learning for all 14 LGAs on one dashboard.',
      'Encourage girls’ enrolment and daily attendance.',
      'Work offline where a permanent connection cannot be assumed.',
    ],
    contributions: [
      'NERDC iBooks, quizzes, and teacher notes for renewed classrooms.',
      'Full school tools for Gusau schools, ready to replicate outward.',
      'A 14-LGA dashboard the Ministry can review every month.',
      'Girls’ enrolment and attendance tracking.',
      'Offline content packs that sync when a school reconnects.',
    ],
    pilotPlace: 'Gusau and two LGAs the Ministry names for the first expansion',
    rolloutNote:
      'Fourteen LGAs make a full data map realistic. The expansion beyond Gusau should move LGA by LGA, with offline kits in the first consignment.',
    conclusionSentence:
      'A state-wide adoption would give Zamfara a way to teach and follow learners in Gusau and across the other Local Government Areas, all 14 of them.',
    languages: 'English and Hausa',
    sectionLine:
      'Renewed public schools and one SUBEB record across Zamfara’s 14 LGAs',
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
    if (
      /out-of-school|out of school|unicef|edobest|besda|banditry|boko haram/i.test(
        blob,
      )
    ) {
      throw new Error(`${slug} still uses deficit wording this proposal set no longer carries`)
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
