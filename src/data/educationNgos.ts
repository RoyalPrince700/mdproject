export type EducationFocus =
  | 'teachers'
  | 'underserved'
  | 'youth-leadership'
  | 'systems'
  | 'enterprise-education'
  | 'girls-stem'
  | 'adolescent-girls'
  | 'girls-empowerment'
  | 'entrepreneurship'
  | 'accountability'
  | 'child-rights'
  | 'community-youth'
  | 'disability'
  | 'scholarships'
  | 'digital'
  | 'csr'
  | 'grantmaking'
  | 'humanitarian'
  | 'literacy'
  | 'innovation'

export interface EducationNgo {
  slug: string
  name: string
  shortName: string
  attention: string
  salutation: string
  website: string
  email: string
  phone: string
  address: string
  city: string
  category: string
  focus: EducationFocus
  about: string[]
  admiration: string
  priorities: string[]
  partnershipFit: string[]
  ask: string[]
  conclusion: string[]
  outreachAngle: string
  prizeAngle: string
}

export const EDUCATION_NGO_SEED_REVISION = 4
export const EDUCATION_NGO_DIRECTORY_ID = 'education-ngo-directory'
export const EDUCATION_NGO_DIRECTORY_TITLE =
  'Education NGOs and Organisations Directory — Top 50 Contacts'

export function ngoProposalId(slug: string) {
  return `smeh-ngo-${slug}`
}

export function ngoProposalTitle(org: EducationNgo) {
  return `SmartEdu Hub Proposal to ${org.shortName}`
}

export const EDUCATION_NGOS: EducationNgo[] = [
  {
    slug: 'teach-for-nigeria',
    name: 'Teach For Nigeria',
    shortName: 'Teach For Nigeria',
    attention: 'Partnerships Team',
    salutation: 'Partnerships Team',
    website: 'teachfornigeria.org',
    email: 'partnership@teachfornigeria.org; info@teachfornigeria.org',
    phone: '+234 909 860 0713',
    address: '3rd Floor, 35 Moloney Street, Obalende, Eti-Osa, Lagos',
    city: 'Lagos',
    category: 'Teacher quality',
    focus: 'teachers',
    about: [
      'Teach For Nigeria recruits and places outstanding graduates and young professionals as Fellows in underserved public and low-income schools, building classroom leadership while expanding learning opportunity for children in Lagos, Ogun, and partner communities.',
      'The organisation is part of the Teach For All network and invests in alumni who continue to influence education from classrooms, school leadership, policy, and social enterprise.',
      'Partnerships with schools, government, and supporters sit at the centre of how Teach For Nigeria scales teaching excellence and community impact.',
    ],
    admiration:
      'We have followed Teach For Nigeria’s work with deep respect. Placing committed Fellows in underserved classrooms, and growing an alumni community that stays in education, is one of the most practical answers to Nigeria’s learning crisis. Your partnership email and school placements show a clear theory of change: better teachers, better classrooms, better life chances.',
    priorities: [
      'Excellent teaching in underserved schools.',
      'Leadership development for Fellows and alumni.',
      'Learning outcomes for children in low-income communities.',
      'Partnerships that strengthen public education.',
      'Evidence of classroom and community impact.',
    ],
    partnershipFit: [
      'Teach For Nigeria already puts talent in front of learners who need it most. SmartEdu Hub competitions give those same learners a national stage — cash prizes, laptops, educational gifts, vacation trips, and rankings that make academic effort visible beyond a single classroom.',
      'Fellows and partner schools can use AI Books and the Accessible Publishers catalogue as daily teaching and revision tools, so competition preparation is curriculum-aligned rather than extra-curricular noise.',
      'A co-branded competition track for Teach For Nigeria partner schools would give Fellows a shared academic calendar, comparable performance data, and a story of excellence that supports recruitment, alumni pride, and donor reporting.',
    ],
    ask: [
      'We respectfully invite Teach For Nigeria to partner as a school-network sponsor of a SmartEdu Hub academic competition season for Fellows’ classrooms and partner schools.',
      'We would welcome a demonstration of AI Books and the Accessible Publishers catalogue, and agreement on a pilot with selected Lagos and Ogun placements.',
      'Sponsorship can be structured as prize support, device awards for outstanding learners, or licensed learning access for Fellow classrooms.',
    ],
    conclusion: [
      'Teach For Nigeria has shown that Nigeria’s learning gap is a leadership gap as much as a resource gap. SmartEdu Hub competitions, AI Books, and Accessible Publishers titles offer Fellows and their students a practical platform to compete, practise, and keep learning.',
      'We would be honoured to work with your partnerships team on a pilot that is worthy of the classrooms you serve.',
    ],
    outreachAngle:
      'Prioritise Teach For Nigeria partner schools and underserved placements so competition access follows the same equity logic as Fellowship placements.',
    prizeAngle:
      'Prize packages that honour classroom excellence — devices, books, and recognition that Fellows can celebrate with their students and communities.',
  },
  {
    slug: 'slum2school',
    name: 'Slum2School Africa',
    shortName: 'Slum2School Africa',
    attention: 'Executive Leadership and Partnerships',
    salutation: 'the Slum2School Africa team',
    website: 'slum2school.org',
    email: 'info@slum2school.org',
    phone: '+234 814 282 8750; +234 700 555 5566',
    address: '13b Babatope Bejide Crescent, Lekki Phase 1, Lagos',
    city: 'Lagos',
    category: 'Out-of-school and community learning',
    focus: 'underserved',
    about: [
      'Slum2School Africa is a youth-driven nonprofit that takes education, technology, and leadership support into underserved and informal communities, with a flagship presence in Lagos and growing African reach.',
      'The organisation combines community schools, digital learning, volunteering, and child sponsorship so that children who might otherwise remain out of school can learn with dignity.',
      'Technology and new-media programmes are used to close the digital divide for young people who are often last in line for quality learning tools.',
    ],
    admiration:
      'We admire Slum2School Africa’s insistence that a child’s postcode should not decide whether they learn. Your community schools, volunteer movement, and digital-learning work have made education visible in places that formal systems still struggle to reach — and you have done it with the energy of young Nigerians leading other young Nigerians.',
    priorities: [
      'Education access for children in informal settlements.',
      'Digital learning and technology inclusion.',
      'Child sponsorship and community school support.',
      'Youth leadership and volunteering.',
      'Dignity and safety for learners at the margins.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions can give Slum2School learners the same public recognition that children in well-resourced schools take for granted — prizes, rankings, and a national academic story.',
      'AI Books and Accessible Publishers titles can travel with your digital-learning programmes, giving sponsored children curriculum-aligned textbooks and an intelligent tutor even where libraries are scarce.',
      'A Slum2School-branded competition category would let donors see a closed loop: community access, platform learning, competition performance, and continued study.',
    ],
    ask: [
      'We invite Slum2School Africa to co-design a SmartEdu Hub competition and learning-access pilot for community-school and digitally supported learners.',
      'We would welcome a working session on how AI Books and Accessible Publishers content can sit inside your existing digital-learning stack.',
      'Sponsorship may cover prizes, device awards, or platform licences for Slum2School cohorts.',
    ],
    conclusion: [
      'Slum2School Africa has already proved that talent is abundant in underserved communities. SmartEdu Hub offers a Nigerian-built way to reward that talent nationally and to keep learning going after prize day.',
      'We would be honoured to walk with your team on a partnership that is community-first and evidence-led.',
    ],
    outreachAngle:
      'Design eligibility and outreach so children in informal settlements and community schools are first in line, not an afterthought.',
    prizeAngle:
      'Prizes that mix recognition with tools — laptops, educational gifts, and continued AI Books access rather than one-off trophies alone.',
  },
  {
    slug: 'leap-africa',
    name: 'LEAP Africa',
    shortName: 'LEAP Africa',
    attention: 'Partnerships and Programmes',
    salutation: 'the LEAP Africa team',
    website: 'leapafrica.org',
    email: 'info@leapafrica.org',
    phone: '+234 1 270 6542',
    address: '13 Omorinre Johnson Street, Off Admiralty Way, Lekki Phase 1, Lagos',
    city: 'Lagos',
    category: 'Youth leadership',
    focus: 'youth-leadership',
    about: [
      'LEAP Africa develops leadership, ethics, and civic capacity in young Africans through fellowships, school programmes, employability, and entrepreneurship interventions.',
      'Founded in 2002 and headquartered in Lagos, the organisation works across education, employability, and leadership pipelines that connect secondary-school values to adult public leadership.',
      'Partners in the private sector, philanthropy, and schools have used LEAP programmes to raise a generation that is effective, accountable, and professional.',
    ],
    admiration:
      'We have long respected LEAP Africa’s work at the intersection of character, leadership, and education. Your school and youth programmes treat leadership as something that can be taught — and that conviction sits close to our own belief that academic excellence should be paired with purpose.',
    priorities: [
      'Youth leadership and ethical public service.',
      'School-based leadership and values education.',
      'Employability and entrepreneurship pathways.',
      'Accountability and civic responsibility.',
      'Partnerships that scale youth development.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions give LEAP’s school and youth networks a high-visibility academic arena that rewards discipline, preparation, and excellence — the same habits your leadership curriculum builds.',
      'AI Books and Accessible Publishers titles can support LEAP-linked schools with curriculum content and independent study tools between leadership sessions.',
      'A LEAP-sponsored competition season can be framed as leadership-in-practice: young people competing fairly, preparing rigorously, and seeing effort recognised nationally.',
    ],
    ask: [
      'We invite LEAP Africa to sponsor or co-host a SmartEdu Hub academic competition season for partner schools and youth cohorts.',
      'We would welcome a joint design session so branding, prize philosophy, and reporting match LEAP’s leadership narrative.',
      'A flexible model is available: title sponsorship, prize endowment, or learning-access packages for LEAP partner schools.',
    ],
    conclusion: [
      'LEAP Africa has spent two decades proving that Africa’s future depends on how we form young leaders. SmartEdu Hub competitions and learning tools can make academic excellence part of that formation story.',
      'We would be honoured to partner with you on a pilot that is worthy of your alumni and school networks.',
    ],
    outreachAngle:
      'Invite LEAP partner schools and youth programme alumni networks so competition participation extends existing leadership communities.',
    prizeAngle:
      'Recognition packages that celebrate both academic performance and leadership character — including learning tools that continue after the ceremony.',
  },
  {
    slug: 'tep-centre',
    name: 'The Education Partnership Centre (TEP Centre)',
    shortName: 'TEP Centre',
    attention: 'Executive Leadership',
    salutation: 'the TEP Centre team',
    website: 'tepcentre.com',
    email: 'info@tepcentre.com',
    phone: '+234 809 111 5403',
    address: '6a Emmanuel Shonibare Street, Ilupeju, Lagos',
    city: 'Lagos',
    category: 'Education systems and partnerships',
    focus: 'systems',
    about: [
      'TEP Centre is Nigeria’s pioneer education partnership consultancy, designing, implementing, and evaluating education programmes across public, private, and non-profit sectors.',
      'The organisation is known for evidence, measurement, and multi-stakeholder delivery — including work that has informed national conversations on learning outcomes and education reform.',
      'TEP Centre’s strength is turning partnerships into implementable programmes with accountability for results.',
    ],
    admiration:
      'We respect TEP Centre’s reputation for serious education partnership work — research, design, implementation, and evaluation rather than slogans. In a sector that often promises more than it measures, TEP Centre has modelled how private, public, and philanthropic actors can work together with evidence.',
    priorities: [
      'Evidence-based education programme design.',
      'Public–private–philanthropic partnership quality.',
      'Learning-outcome measurement and evaluation.',
      'Implementation support for education reforms.',
      'Accountability to learners and funders.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions, AI Books, and school analytics give TEP Centre a live implementation vehicle — not a concept note — through which partners can see participation, practice, and performance.',
      'Because Accessible Publishers Limited is ISO 9001 certified and builds SmartEdu Hub internally, programme design can be tied to documented quality processes and repeatable delivery.',
      'A TEP-advised pilot could be independently framed with baselines, indicators, and an impact brief that meets the standard of evaluation TEP Centre is known for.',
    ],
    ask: [
      'We invite TEP Centre to explore a technical or implementing partnership around a SmartEdu Hub competition-and-learning pilot with selected school networks.',
      'We would welcome TEP Centre’s advice on indicators, evaluation design, and partner governance.',
      'The commercial or grant structure can follow TEP Centre’s usual partnership models.',
    ],
    conclusion: [
      'TEP Centre’s value is making education partnerships real. SmartEdu Hub can supply the digital classroom layer — competitions, AI Books, and curriculum titles — against which those partnerships can be measured.',
      'We would be honoured to work with your team on a rigorous, learner-centred pilot.',
    ],
    outreachAngle:
      'Select school networks where TEP Centre already has implementation relationships, so the pilot rides existing trust rather than creating a parallel project.',
    prizeAngle:
      'Prize and recognition design that can be evaluated — clear eligibility, transparent scoring, and documented learning-access follow-through.',
  },
  {
    slug: 'junior-achievement-nigeria',
    name: 'Junior Achievement Nigeria',
    shortName: 'Junior Achievement Nigeria',
    attention: 'Partnerships Team',
    salutation: 'the Junior Achievement Nigeria team',
    website: 'ja-nigeria.org',
    email: 'info@ja-nigeria.org',
    phone: '+234 908 291 0305; partnerships +234 906 596 3106',
    address: 'Lagos, Nigeria',
    city: 'Lagos',
    category: 'Enterprise and financial education',
    focus: 'enterprise-education',
    about: [
      'Junior Achievement Nigeria delivers experiential programmes in financial literacy, work readiness, and entrepreneurship for young people in schools and communities.',
      'As part of the global JA network, the organisation connects volunteers from business with classrooms so students practise the skills the economy actually rewards.',
      'Partnerships with companies and schools are the engine of JA Nigeria’s reach.',
    ],
    admiration:
      'We admire Junior Achievement Nigeria’s practical approach to youth education: financial literacy, work readiness, and entrepreneurship taught through doing, not only through lectures. That is close to how we think about SmartEdu Hub — tools students actually use, competitions they can win, and content that prepares them for exams and for life.',
    priorities: [
      'Financial literacy for young people.',
      'Work readiness and career exposure.',
      'Entrepreneurship education in schools.',
      'Volunteer and corporate classroom partnerships.',
      'Measurable youth economic empowerment.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions can sit beside JA programmes as an academic excellence track — rewarding the same discipline, teamwork, and goal orientation JA builds in enterprise clubs.',
      'AI Books and Accessible Publishers titles strengthen the school foundation on which JA’s financial and entrepreneurship modules rest.',
      'A JA Nigeria-sponsored category could blend academic prizes with enterprise recognition, giving corporate partners a dual CSI story: classroom excellence and future-ready skills.',
    ],
    ask: [
      'We invite Junior Achievement Nigeria to co-sponsor a SmartEdu Hub competition season for JA partner schools.',
      'We would welcome a partnership conversation with your programmes and corporate-volunteer teams.',
      'Sponsorship can cover prizes, learning licences, or a co-branded enterprise-and-academics challenge.',
    ],
    conclusion: [
      'JA Nigeria has shown that young people learn economics by practising it. SmartEdu Hub can add a national academic competition and daily learning layer that makes that practice more powerful.',
      'We would be honoured to design a pilot with your partnerships team.',
    ],
    outreachAngle:
      'Focus first on schools already in the JA Nigeria network so volunteers, teachers, and learners recognise the partnership immediately.',
    prizeAngle:
      'Mix academic prizes with tools that support JA’s work-readiness story — devices, books, and public recognition of both scholarship and enterprise.',
  },
  {
    slug: 'wtec',
    name: 'Women’s Technology Empowerment Centre (W.TEC)',
    shortName: 'W.TEC',
    attention: 'Executive Director and Partnerships',
    salutation: 'the W.TEC team',
    website: 'wteconline.org',
    email: 'info@wteconline.org',
    phone: '+234 818 870 9251',
    address: 'Lagos, Nigeria',
    city: 'Lagos',
    category: 'Girls in STEM',
    focus: 'girls-stem',
    about: [
      'W.TEC works to increase Nigerian girls’ and women’s participation in technology through camps, clubs, training, and public advocacy.',
      'Programmes such as W.TEC Camp have become a recognised pathway for girls to encounter STEM with confidence, mentorship, and community.',
      'The organisation relies on partners and scholarships to keep technology education accessible beyond families who can already pay.',
    ],
    admiration:
      'We have followed W.TEC’s work with admiration. For years you have insisted that Nigerian girls belong in technology — not as a slogan, but through camps, clubs, and sustained training. That is the same equity logic we want SmartEdu Hub competitions and AI Books to serve: girls visible in excellence, not only in enrolment statistics.',
    priorities: [
      'Girls’ participation in STEM and technology.',
      'Hands-on camps, clubs, and digital skills.',
      'Mentorship and female role models in tech.',
      'Affordable access through scholarships and partners.',
      'Gender equality in Nigeria’s digital future.',
    ],
    partnershipFit: [
      'A W.TEC-aligned SmartEdu Hub competition track can spotlight girls’ academic and STEM excellence nationally, with prizes and rankings that make girls’ achievement public.',
      'AI Books and Accessible Publishers titles give camp and club alumnae a year-round study companion, so STEM inspiration is followed by curriculum mastery.',
      'Sponsors who already support W.TEC Camp can add a measurable classroom layer — competitions, usage, and learning outcomes — to their girls-in-tech story.',
    ],
    ask: [
      'We invite W.TEC to partner on a girls-focused SmartEdu Hub competition season and learning-access package for camp and club participants.',
      'We would welcome a demonstration of AI Books and a discussion of scholarship-linked licences for girls who could not otherwise afford digital learning.',
      'A flexible model can combine prize sponsorship with subsidised platform access.',
    ],
    conclusion: [
      'W.TEC has already opened technology’s door for thousands of Nigerian girls. SmartEdu Hub can help those girls compete, revise, and keep learning long after camp ends.',
      'We would be honoured to build that bridge with you.',
    ],
    outreachAngle:
      'Prioritise W.TEC camp, club, and scholarship alumnae, and design communications that make girls’ participation the headline rather than a footnote.',
    prizeAngle:
      'Prizes and devices that reduce the cost of continued STEM and academic learning for girls, including AI Books access after the competition.',
  },
  {
    slug: 'education-as-a-vaccine',
    name: 'Education as a Vaccine (EVA)',
    shortName: 'Education as a Vaccine',
    attention: 'Executive Leadership',
    salutation: 'the Education as a Vaccine team',
    website: 'evanigeria.org',
    email: 'eva@evanigeria.org',
    phone: '+234 909 628 9694',
    address: 'Abuja, Nigeria',
    city: 'Abuja',
    category: 'Adolescent girls and youth',
    focus: 'adolescent-girls',
    about: [
      'Education as a Vaccine works with adolescents and young people in Nigeria on education, sexual and reproductive health, and youth participation, with a strong focus on girls.',
      'The organisation treats education as protective infrastructure — a vaccine against poverty, early marriage, and lost opportunity.',
      'Programmes combine advocacy, service delivery, and youth-led voice so that adolescent girls are not only beneficiaries but agents.',
    ],
    admiration:
      'We respect Education as a Vaccine’s conviction that schooling is protective — that an educated girl is harder to ignore, harder to marry off early, and better placed to choose her future. Your adolescent-centred programmes in Nigeria have kept girls’ education tied to dignity and health, not only to test scores.',
    priorities: [
      'Adolescent girls’ education and agency.',
      'Youth participation and voice.',
      'Protection through schooling and information.',
      'Community and policy advocacy.',
      'Partnerships that keep girls in learning.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions can create public, positive recognition for adolescent learners — especially girls — at an age when motivation and peer influence are decisive.',
      'AI Books and Accessible Publishers titles support the academic continuity that EVA’s wider adolescent programmes need if girls are to stay in school and succeed.',
      'A co-designed outreach track can report girls’ participation, completion, and learning engagement as part of EVA’s education-as-protection narrative.',
    ],
    ask: [
      'We invite Education as a Vaccine to partner on a SmartEdu Hub competition and learning-access pilot for adolescent cohorts in your programme geographies.',
      'We would welcome alignment on safeguarding, girls’ participation design, and impact reporting.',
      'Sponsorship or programme integration can be sized to a pilot LGA or school cluster.',
    ],
    conclusion: [
      'EVA has long argued that education is a vaccine. SmartEdu Hub competitions and digital books are a practical booster — motivation, practice, and curriculum access for the adolescents you serve.',
      'We would be honoured to explore a safeguarding-aware pilot with your team.',
    ],
    outreachAngle:
      'Build girls’ participation targets, safe communication, and community consent into competition design from the first week — not as a later add-on.',
    prizeAngle:
      'Recognition that motivates girls to stay in school — including devices and AI Books access that reduce the cost of continued learning.',
  },
  {
    slug: 'girls-power-initiative',
    name: 'Girls’ Power Initiative (GPI)',
    shortName: 'Girls’ Power Initiative',
    attention: 'National Headquarters, Benin City',
    salutation: 'the Girls’ Power Initiative team',
    website: 'gpinigeria.org',
    email: 'gpibenin@gpinigeria.org; gpiabuja@gpinigeria.org.ng',
    phone: '+234 807 304 2499; Abuja +234 814 622 5654',
    address: '67 New Road, Off Amadasun Street, Upper Ekewan Road, Ugbiyoko, Benin City',
    city: 'Benin City',
    category: 'Girls’ rights and education',
    focus: 'girls-empowerment',
    about: [
      'Girls’ Power Initiative is a Nigerian feminist youth organisation, founded in 1993, that educates girls and young women on rights, leadership, sexual health, and social justice.',
      'National headquarters in Benin City are complemented by offices in Calabar, Yenagoa, Asaba, Uyo, and Abuja.',
      'GPI’s education work treats knowledge as power — in the classroom, in the community, and in public life.',
    ],
    admiration:
      'We honour Girls’ Power Initiative’s three decades of work with Nigerian girls. You have taught that education is not only literacy and exams; it is the power to understand one’s rights and to take up space in society. That courage is exactly the spirit we want national academic competitions to amplify.',
    priorities: [
      'Girls’ education, rights, and leadership.',
      'Youth-centred sexuality and life-skills education.',
      'State and community presence across southern Nigeria and Abuja.',
      'Feminist organising and girl-led voice.',
      'Safe, informed pathways through adolescence.',
    ],
    partnershipFit: [
      'A GPI-aligned SmartEdu Hub competition can celebrate girls’ academic excellence in the same states where GPI already has trust and offices.',
      'AI Books and Accessible Publishers titles give GPI-linked learners curriculum tools that sit beside life-skills and rights education.',
      'Public rankings and prizes can be designed to spotlight girls without exposing them to unsafe visibility — with GPI’s safeguarding guidance.',
    ],
    ask: [
      'We invite Girls’ Power Initiative to partner on a girls-centred SmartEdu Hub competition and learning pilot in selected GPI states.',
      'We would welcome GPI’s guidance on girl-safe communications, consent, and community engagement.',
      'A phased pilot can begin with one or two GPI locations and expand with evidence.',
    ],
    conclusion: [
      'GPI has spent thirty years building girls’ power through knowledge. SmartEdu Hub can add a national academic stage and daily digital books to that mission.',
      'We would be honoured to follow GPI’s lead on how girls should be seen, celebrated, and protected in such a partnership.',
    ],
    outreachAngle:
      'Work through GPI state offices so outreach is girl-led, locally trusted, and safeguarding-first.',
    prizeAngle:
      'Prizes and public recognition designed with GPI so celebration never comes at the cost of girls’ safety or dignity.',
  },
  {
    slug: 'fate-foundation',
    name: 'Fate Foundation',
    shortName: 'Fate Foundation',
    attention: 'Partnerships Team',
    salutation: 'the Fate Foundation team',
    website: 'fatefoundation.org',
    email: 'info@fatefoundation.org',
    phone: '+234 701 130 5444',
    address: 'Lagos, Nigeria',
    city: 'Lagos',
    category: 'Entrepreneurship education',
    focus: 'entrepreneurship',
    about: [
      'Fate Foundation exists to foster wealth creation by promoting business and entrepreneurial development among Nigerians, including youth and emerging founders.',
      'Programmes combine training, mentoring, and enterprise support so that education is connected to livelihoods.',
      'The Foundation’s work sits at the junction of skills, entrepreneurship, and national productivity.',
    ],
    admiration:
      'We respect Fate Foundation’s long investment in Nigerian enterprise education. You have treated entrepreneurship as a learnable discipline — and you have stayed with young founders beyond motivational events. That seriousness about skills-to-livelihoods is a natural partner for a platform that rewards academic excellence and independent learning.',
    priorities: [
      'Entrepreneurship education and mentoring.',
      'Youth enterprise and wealth creation.',
      'Practical skills linked to livelihoods.',
      'Founder support beyond one-off training.',
      'Partnerships that grow Nigeria’s enterprise pipeline.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions can feed Fate’s pipeline: academically ambitious young people who also need digital learning tools and public recognition.',
      'AI Books and Accessible Publishers titles strengthen the school and exam foundation that future founders still need.',
      'A Fate-sponsored challenge can pair academic excellence with an enterprise brief for older secondary or youth cohorts.',
    ],
    ask: [
      'We invite Fate Foundation to sponsor a SmartEdu Hub competition season or a combined academics-and-enterprise challenge.',
      'We would welcome a session on how AI Books could support Fate-linked youth and school partners.',
      'Sponsorship can be prize-led, access-led, or both.',
    ],
    conclusion: [
      'Fate Foundation has shown that Nigeria’s prosperity depends on educated, enterprising young people. SmartEdu Hub can help those young people compete, study, and stay curious.',
      'We would be honoured to design a pilot with your team.',
    ],
    outreachAngle:
      'Invite Fate programme alumni networks and partner schools so the competition feels like a continuation of enterprise education, not a disconnected contest.',
    prizeAngle:
      'Prizes that include learning tools and, where appropriate, enterprise-relevant recognition alongside academic awards.',
  },
  {
    slug: 'connected-development',
    name: 'Connected Development (CODE)',
    shortName: 'Connected Development',
    attention: 'Executive Leadership',
    salutation: 'the Connected Development team',
    website: 'connecteddevelopment.org',
    email: 'info@connecteddevelopment.org',
    phone: 'See connecteddevelopment.org',
    address: 'Abuja, Nigeria',
    city: 'Abuja',
    category: 'Accountability and education governance',
    focus: 'accountability',
    about: [
      'Connected Development (CODE) is a Nigerian NGO known for community-led accountability, including tracking public resources in education, health, and environment through programmes such as Follow The Money.',
      'CODE equips citizens, especially young people, to demand that education budgets become classrooms, books, and teachers rather than disappearing lines in a ledger.',
      'Data, media, and community organising are CODE’s tools for making government education promises visible.',
    ],
    admiration:
      'We have followed Connected Development’s Follow The Money work with respect. You have shown that education reform is not only about new platforms; it is about whether public money actually reaches learners. That accountability ethic is one we share: SmartEdu Hub is built to report participation, practice, and outcomes — not only to announce launches.',
    priorities: [
      'Community accountability for education spending.',
      'Youth civic participation and data use.',
      'Transparency in public service delivery.',
      'Media and citizen evidence for reform.',
      'Education resources that reach the classroom.',
    ],
    partnershipFit: [
      'SmartEdu Hub analytics can complement CODE’s accountability work by showing what learners actually do once schools have tools — attendance to content, practice tests, competition performance.',
      'Competitions create a public, positive story of student excellence in communities where CODE already organises around education rights.',
      'AI Books and Accessible Publishers titles are concrete learning resources whose deployment can be tracked, which fits CODE’s evidence culture.',
    ],
    ask: [
      'We invite Connected Development to explore a partnership in which SmartEdu Hub competitions and learning access are piloted in communities where CODE already tracks education delivery.',
      'We would welcome a conversation about open, ethical reporting of participation and learning engagement.',
      'A pilot can be scoped to a small set of schools or LGAs with clear public feedback loops.',
    ],
    conclusion: [
      'CODE has taught Nigeria to follow the money. SmartEdu Hub can help communities also follow the learning — with competitions, digital books, and usable data.',
      'We would be honoured to build a transparent pilot with your team.',
    ],
    outreachAngle:
      'Start in communities where CODE already has Follow The Money or education-accountability relationships, so the platform is an additional public good, not a parallel NGO project.',
    prizeAngle:
      'Transparent prize rules and published results, so recognition itself models the accountability CODE demands of public education.',
  },
  {
    slug: 'one-african-child',
    name: 'One African Child',
    shortName: 'One African Child',
    attention: 'Partnerships Team',
    salutation: 'the One African Child team',
    website: 'oneafricanchild.org',
    email: 'info@oneafricanchild.org',
    phone: '+234 703 844 7254',
    address: 'Lagos, Nigeria',
    city: 'Lagos',
    category: 'Child rights and global citizenship',
    focus: 'child-rights',
    about: [
      'One African Child educates children and young people on global citizenship, the Sustainable Development Goals, and child rights through school and community programmes.',
      'The organisation treats every African child as a rights-holder whose learning should include voice, leadership, and knowledge of the world they will inherit.',
      'Workshops, clubs, and campaigns connect classroom learning to SDG 4 and related development goals.',
    ],
    admiration:
      'We admire One African Child’s insistence that African children are not only future workers but present citizens. Teaching the SDGs, rights, and global citizenship in Nigerian schools is a form of education that expands dignity — the same expansion we want SmartEdu Hub competitions to make visible through academic excellence.',
    priorities: [
      'Child rights and student voice.',
      'Global citizenship and SDG education.',
      'School clubs and youth campaigns.',
      'Inclusive learning for African children.',
      'Partnerships that keep SDG 4 practical.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions can be framed as an SDG 4 vehicle: inclusive quality education made public through prizes, rankings, and learner stories.',
      'AI Books and Accessible Publishers titles give One African Child partner schools the curriculum backbone that global-citizenship clubs need if advocacy is not to replace literacy and numeracy.',
      'A co-branded season can report both academic participation and civic-learning activities for donor and school audiences.',
    ],
    ask: [
      'We invite One African Child to co-host a SmartEdu Hub competition season with an SDG 4 and child-rights narrative.',
      'We would welcome a pilot in partner schools where global-citizenship clubs already exist.',
      'Sponsorship can cover prizes, learning access, or joint communications.',
    ],
    conclusion: [
      'One African Child has shown that education is also citizenship. SmartEdu Hub can add national academic recognition and daily digital study tools to that mission.',
      'We would be honoured to build an SDG-aligned pilot with your team.',
    ],
    outreachAngle:
      'Use existing school clubs and child-rights networks so competition outreach is student-informed and rights-based.',
    prizeAngle:
      'Recognition that celebrates academic excellence and global-citizenship leadership together.',
  },
  {
    slug: 'ovie-brume-foundation',
    name: 'Ovie Brume Foundation',
    shortName: 'Ovie Brume Foundation',
    attention: 'Executive Leadership',
    salutation: 'the Ovie Brume Foundation team',
    website: 'oviebrumefoundation.org',
    email: 'info@oviebrumefoundation.org',
    phone: '+234 1 270 2326',
    address: '29A Gafar Animashaun Street, off Ajose Adeogun, Victoria Island, Lagos',
    city: 'Lagos',
    category: 'Community youth education',
    focus: 'community-youth',
    about: [
      'The Ovie Brume Foundation provides free educational, social, and recreational programmes for young people, including scholarships for high-performing students who cannot meet the cost of schooling.',
      'Its Lagos centre is a trusted community space where learning, sport, and youth development meet.',
      'The Foundation’s scholarship work targets excellence that would otherwise be lost to poverty.',
    ],
    admiration:
      'We respect the Ovie Brume Foundation’s quiet, local fidelity to young people in Lagos — free programmes, a real centre, and scholarships for students whose grades outrun their family income. That combination of community presence and academic support is rare and precious.',
    priorities: [
      'Free educational programmes for young people.',
      'Scholarships for high-performing, low-income students.',
      'A safe community learning and recreation space.',
      'Holistic youth development.',
      'Lagos-rooted, long-term community care.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions can give Foundation scholars and centre users a national academic arena, while scholarships continue to remove cost barriers.',
      'AI Books and Accessible Publishers titles can extend the Foundation’s educational programmes into daily, curriculum-aligned study.',
      'Prize support can be designed to complement existing scholarships rather than duplicate them.',
    ],
    ask: [
      'We invite the Ovie Brume Foundation to partner on competition access and digital learning for centre users and scholars.',
      'We would welcome a visit-based demonstration of SmartEdu Hub at your Victoria Island centre or our Ibadan office.',
      'A modest pilot can begin with current scholarship recipients and after-school learners.',
    ],
    conclusion: [
      'The Ovie Brume Foundation already invests in the whole child. SmartEdu Hub can add national recognition and AI-supported study to that investment.',
      'We would be honoured to serve your scholars and centre community.',
    ],
    outreachAngle:
      'Start with current scholars and centre regulars so the partnership is felt by the young people you already know by name.',
    prizeAngle:
      'Prizes that reduce further education costs — devices, books, and continued platform access alongside any existing scholarship support.',
  },
  {
    slug: 'albino-foundation',
    name: 'The Albino Foundation',
    shortName: 'The Albino Foundation',
    attention: 'Executive Leadership',
    salutation: 'the Albino Foundation team',
    website: 'albinofoundation.org',
    email: 'info@albinofoundation.org',
    phone: '+234 817 157 6797',
    address: 'Suite 22A, O’neal Centre, Ebitu Ukiwe Street, Jabi, Abuja',
    city: 'Abuja',
    category: 'Inclusive education and disability rights',
    focus: 'disability',
    about: [
      'The Albino Foundation advocates for the rights, health, education, and social inclusion of persons with albinism and other persons with disabilities across Nigeria.',
      'Education access is central: learners with albinism often face discrimination, poor classroom visibility, and missing reasonable accommodations.',
      'The Foundation works with government and partners to make schooling safer and more inclusive.',
    ],
    admiration:
      'We honour The Albino Foundation’s national advocacy for persons with albinism — including the fight for education that does not punish a child for how they see, or how they are seen. Inclusive quality education is not complete while those learners remain at the edge of the classroom.',
    priorities: [
      'Education access for persons with albinism.',
      'Reasonable accommodation in schools.',
      'Rights, health, and social inclusion.',
      'National advocacy with state reach.',
      'Partnerships that reduce discrimination in learning.',
    ],
    partnershipFit: [
      'SmartEdu Hub’s digital books and AI tutor can support learners who need adjustable text, repeated explanation, and self-paced revision — practical accommodations beyond the chalkboard.',
      'An inclusive competition design can create categories or support rules so learners with albinism and other disabilities are not excluded by format.',
      'Impact reporting can specifically track inclusive participation, which strengthens the Foundation’s advocacy evidence.',
    ],
    ask: [
      'We invite The Albino Foundation to advise and partner on an inclusive SmartEdu Hub competition and learning-access pilot.',
      'We would welcome your guidance on accessibility, classroom accommodation, and dignified communications.',
      'A pilot can include partner schools and Foundation education beneficiaries.',
    ],
    conclusion: [
      'The Albino Foundation has made inclusion a national education issue. SmartEdu Hub can supply digital learning tools and a competition design that tries to match that standard.',
      'We would be honoured to follow your lead on accessibility.',
    ],
    outreachAngle:
      'Co-design eligibility, exam-format accommodations, and communications with the Foundation so inclusion is operational, not decorative.',
    prizeAngle:
      'Recognition and learning tools chosen with accessibility in mind — including digital content that learners can enlarge, replay, and review independently.',
  },
  {
    slug: 'down-syndrome-foundation',
    name: 'Down Syndrome Foundation Nigeria',
    shortName: 'Down Syndrome Foundation Nigeria',
    attention: 'Lagos Head Office',
    salutation: 'the Down Syndrome Foundation Nigeria team',
    website: 'downsyndrome.org.ng',
    email: 'hello@downsyndrome.org.ng',
    phone: '+234 803 228 5545; +234 913 712 1182',
    address: '1 Alafara Oje Crescent, Alamutu Estate, Iju, Fagba, Lagos',
    city: 'Lagos',
    category: 'Inclusive education',
    focus: 'disability',
    about: [
      'Down Syndrome Foundation Nigeria supports persons with Down syndrome and intellectual disabilities through family, education, health, and inclusion programmes, with centres in Lagos, Abuja, and Ibadan.',
      'The Foundation works so that learners with intellectual disabilities are not excluded from education and community life.',
      'Parents, caregivers, and schools are part of a network that insists on dignity and opportunity.',
    ],
    admiration:
      'We respect Down Syndrome Foundation Nigeria’s long, practical care for persons with Down syndrome and intellectual disabilities. Your centres in Lagos, Abuja, and Ibadan show that inclusion is a daily practice of families and educators, not a once-a-year campaign.',
    priorities: [
      'Education and inclusion for persons with Down syndrome.',
      'Family and caregiver support.',
      'Centres in Lagos, Abuja, and Ibadan.',
      'Dignity in schooling and community life.',
      'Partnerships that make classrooms more welcoming.',
    ],
    partnershipFit: [
      'SmartEdu Hub content and AI Books can be explored as supplementary, self-paced resources where teachers and families want extra explanation and revision support.',
      'Competition design can include inclusive recognition pathways so excellence is not defined only by a single high-stakes format.',
      'Accessible Publishers’ experience with curriculum materials can be discussed with the Foundation’s education team for appropriate use.',
    ],
    ask: [
      'We invite Down Syndrome Foundation Nigeria to a careful, educator-led conversation on how SmartEdu Hub tools might support families and partner schools.',
      'We would not impose a one-size academic contest; we would co-design any recognition or learning-access model with your specialists.',
      'A small Ibadan–Lagos learning-access pilot may be the right first step, given our Ibadan base and your centres.',
    ],
    conclusion: [
      'Inclusion fails when platforms ignore difference. We want any partnership with Down Syndrome Foundation Nigeria to be paced by your expertise and by learners’ needs.',
      'We would be honoured to listen first, then build only what is useful.',
    ],
    outreachAngle:
      'Work through Foundation centres and families; keep participation voluntary, specialist-guided, and free of public pressure.',
    prizeAngle:
      'If recognition is used at all, let it be inclusive celebration and learning tools — never a ranking model that humiliates difference.',
  },
  {
    slug: 'irede-foundation',
    name: 'The Irede Foundation',
    shortName: 'The Irede Foundation',
    attention: 'Partnerships Team',
    salutation: 'the Irede Foundation team',
    website: 'theirdefoundation.org',
    email: 'hello@theirdefoundation.org',
    phone: 'See theirdefoundation.org',
    address: 'Abuja, Nigeria',
    city: 'Abuja',
    category: 'Disability inclusion and education',
    focus: 'disability',
    about: [
      'The Irede Foundation supports children with congenital or acquired limb loss through prosthetic care, education access, caregiver education, and community support.',
      'The organisation works so that limb difference does not become a sentence to exclusion from school or public life.',
      'Education and awareness sit beside clinical and prosthetic services.',
    ],
    admiration:
      'We admire The Irede Foundation’s work for children with limb loss — restoring mobility, fighting stigma, and insisting that those children belong in school. Education without inclusion is incomplete; your work makes that truth physical and personal.',
    priorities: [
      'Education access for children with limb loss.',
      'Prosthetic and mobility support.',
      'Caregiver and community education.',
      'Stigma reduction in schools.',
      'Equal opportunity beyond medical care.',
    ],
    partnershipFit: [
      'SmartEdu Hub can give Irede beneficiaries digital learning continuity when hospital visits, rehabilitation, or mobility barriers interrupt ordinary school attendance.',
      'An inclusive competition invitation can celebrate academic effort among children who are too often seen only through their disability.',
      'AI Books offer self-paced study that does not depend on always being physically first in a crowded classroom.',
    ],
    ask: [
      'We invite The Irede Foundation to explore learning-access and optional competition participation for education beneficiaries.',
      'We would welcome your advice on dignified storytelling and school outreach.',
      'A small cohort pilot can be designed around current education-support families.',
    ],
    conclusion: [
      'Irede has already changed what is possible for children with limb loss. SmartEdu Hub can add study tools and, where appropriate, public academic recognition.',
      'We would be honoured to partner at the pace of the children you serve.',
    ],
    outreachAngle:
      'Invite families through the Foundation; never require public display of disability as a condition of participation.',
    prizeAngle:
      'Learning tools and recognition that emphasise ability, with logistics that respect mobility and clinic schedules.',
  },
  {
    slug: 'tony-elumelu-foundation',
    name: 'The Tony Elumelu Foundation',
    shortName: 'Tony Elumelu Foundation',
    attention: 'Programme Partnerships',
    salutation: 'the Tony Elumelu Foundation team',
    website: 'tonyelumelufoundation.org',
    email: 'enquiries@tonyelumelufoundation.org; info@tonyelumelufoundation.org',
    phone: '+234 1 277 4641',
    address: 'Heirs Place, 1 MacGregor Road, Ikoyi, Lagos',
    city: 'Lagos',
    category: 'Entrepreneurship and youth opportunity',
    focus: 'entrepreneurship',
    about: [
      'The Tony Elumelu Foundation is a leading African philanthropy empowering entrepreneurs through training, seed capital, mentoring, and networks across the continent.',
      'Education and human capital sit underneath TEF’s entrepreneurship mission: founders still need literacy, numeracy, digital skills, and the confidence that excellence is possible.',
      'Headquartered at Heirs Place, Ikoyi, TEF’s programmes are among the most visible youth-opportunity platforms in Africa.',
    ],
    admiration:
      'We have followed the Tony Elumelu Foundation’s pan-African entrepreneurship programme with respect. You have made a generation of young Africans believe that their ideas can be capitalised and mentored. Underneath every founder, however, is a learner — and Nigeria still needs stronger school-to-skills pathways if entrepreneurship is not to rest on a thin academic base.',
    priorities: [
      'Youth entrepreneurship and job creation.',
      'Training, mentoring, and seed capital.',
      'African human-capital development.',
      'Networks that outlast a single programme cycle.',
      'Education as a foundation for enterprise.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions can identify and celebrate academic excellence in the same youth generation TEF later supports as founders.',
      'AI Books and Accessible Publishers titles strengthen the school layer that still determines who can complete secondary education and compete for opportunity.',
      'A TEF-aligned CSI or foundation partnership could brand a national competition season as a pipeline into enterprise mindsets — discipline, ranking, public performance, and continuous learning.',
    ],
    ask: [
      'We invite the Tony Elumelu Foundation to consider SmartEdu Hub national competitions as a youth-education partnership alongside entrepreneurship programming.',
      'We would welcome a presentation at Heirs Place on AI Books, competitions, and measurable school impact.',
      'A pilot season can be scoped with clear branding and an impact brief for TEF stakeholders.',
    ],
    conclusion: [
      'TEF has shown that African youth can build enterprises. SmartEdu Hub can help more of those youth first build the academic and digital-learning habits that make enterprise durable.',
      'We would be honoured to explore a partnership with your programmes team.',
    ],
    outreachAngle:
      'A national school competition with optional TEF alumni-volunteer judging or mentoring would connect classroom excellence to Africa’s best-known entrepreneurship network.',
    prizeAngle:
      'High-visibility prizes and devices that match TEF’s youth-empowerment brand, plus continued AI Books access after the season.',
  },
  {
    slug: 'aliko-dangote-foundation',
    name: 'Aliko Dangote Foundation',
    shortName: 'Aliko Dangote Foundation',
    attention: 'Education and Human Capital',
    salutation: 'the Aliko Dangote Foundation team',
    website: 'dangote.com/foundation',
    email: 'communications@dangote.com',
    phone: '+234 1 448 0815',
    address: 'Union Marble House, 1 Alfred Rewane Road, Ikoyi, Lagos',
    city: 'Lagos',
    category: 'Large-scale philanthropy',
    focus: 'grantmaking',
    about: [
      'Aliko Dangote Foundation is among the largest private foundations in sub-Saharan Africa, with programmes in nutrition, health, education, economic empowerment, and disaster relief.',
      'Education sits inside a wraparound human-capital agenda: children who are nourished and healthy still need quality learning to escape poverty.',
      'The Foundation’s scale allows national partnerships rather than boutique pilots alone.',
    ],
    admiration:
      'We respect the Aliko Dangote Foundation’s scale and its focus on child nutrition, health, and education as connected investments. Nigeria’s learning crisis will not be solved by content alone, but neither will it be solved without curriculum-aligned tools and motivation to excel. We believe SmartEdu Hub can be a delivery layer for the education side of that human-capital agenda.',
    priorities: [
      'Child nutrition, health, and education as one agenda.',
      'National-scale philanthropy in Nigeria and Africa.',
      'Economic empowerment and human capital.',
      'Partnerships with government and implementing organisations.',
      'Measurable improvement in children’s life chances.',
    ],
    partnershipFit: [
      'A Foundation-sponsored SmartEdu Hub competition season can be a visible education asset alongside nutrition and health programmes — motivating learners in the same communities where ADF already invests.',
      'AI Books and Accessible Publishers titles provide curriculum learning at scale, with ISO 9001-backed production and digital delivery.',
      'Usage and competition data can support the Foundation’s need for reportable education outcomes.',
    ],
    ask: [
      'We invite the Aliko Dangote Foundation to consider title sponsorship of SmartEdu Hub national academic competitions and learning access for selected school cohorts.',
      'We would welcome an introductory presentation to the education and communications teams.',
      'A first season can be national in story and focused in school selection, with a clear impact brief.',
    ],
    conclusion: [
      'The Dangote Foundation already invests in whether Nigerian children survive and thrive. SmartEdu Hub competitions and digital books invest in whether they can also excel.',
      'We would be honoured to submit a detailed implementation note following an initial meeting.',
    ],
    outreachAngle:
      'Align school selection with geographies where the Foundation already has nutrition, health, or education relationships.',
    prizeAngle:
      'National-scale prizes and devices worthy of the Foundation’s name, with learning access that continues after media coverage ends.',
  },
  {
    slug: 'ty-danjuma-foundation',
    name: 'TY Danjuma Foundation',
    shortName: 'TY Danjuma Foundation',
    attention: 'Grants and Education Portfolio',
    salutation: 'the TY Danjuma Foundation team',
    website: 'tydanjumafoundation.org',
    email: 'info@tydanjumafoundation.org',
    phone: 'See tydanjumafoundation.org',
    address: '35 Fandriana Close, off Oda Crescent, Wuse II, Abuja',
    city: 'Abuja',
    category: 'Grantmaking for health and education',
    focus: 'grantmaking',
    about: [
      'TY Danjuma Foundation is an independent Nigerian philanthropic grantmaker supporting health and education interventions delivered by NGOs and community organisations.',
      'Established in 2009, it operates from Abuja with particular community-fund attention to Taraba and Edo, while supporting work nationwide.',
      'The Foundation’s model is partnership through Nigerian implementing organisations rather than only direct service.',
    ],
    admiration:
      'We respect the TY Danjuma Foundation’s grantmaking discipline: health and education through Nigerian NGOs, with community funds that take resources closer to Taraba and Edo. That preference for implementers who already know their communities is how durable education work is done.',
    priorities: [
      'Education and health grantmaking in Nigeria.',
      'Support for NGOs and community organisations.',
      'Community funds in Taraba and Edo.',
      'Culturally relevant, partnership-based delivery.',
      'Improved quality of life for disadvantaged Nigerians.',
    ],
    partnershipFit: [
      'SmartEdu Hub can be proposed as a toolset that TYDF grantees in education could adopt — competitions, AI Books, and curriculum titles with reporting.',
      'A Foundation-supported pilot in Edo or Taraba would honour the community-fund geography while generating a national-quality academic competition story.',
      'ISO 9001 certification and in-house technology give grantmakers a partner with documented processes.',
    ],
    ask: [
      'We invite the TY Danjuma Foundation to consider Accessible Publishers Limited / SmartEdu Hub as an education implementing partner or as a platform for education grantees.',
      'We would welcome guidance on the appropriate grant window and whether a direct partnership or a grantee consortium is preferred.',
      'A Taraba or Edo learning-and-competition pilot can be scoped to Foundation priorities.',
    ],
    conclusion: [
      'TY Danjuma Foundation already knows that education funding works best through serious implementers. We offer SmartEdu Hub as a Nigerian-built, quality-managed education platform for that purpose.',
      'We would be honoured to discuss eligibility and design with your grants team.',
    ],
    outreachAngle:
      'Prefer schools and NGO partners in Edo and Taraba for a first community-fund-aligned season, with a path to other states.',
    prizeAngle:
      'Prize and access packages sized for community schools, with transparent reporting suitable for a grant file.',
  },
  {
    slug: 'oando-foundation',
    name: 'Oando Foundation',
    shortName: 'Oando Foundation',
    attention: 'Education Programmes',
    salutation: 'the Oando Foundation team',
    website: 'oandofoundation.org',
    email: 'info@oandofoundation.org',
    phone: '+234 201 448 4700',
    address: 'The Wings Complex, 17a Ozumba Mbadiwe, Victoria Island, Lagos',
    city: 'Lagos',
    category: 'Adopt-a-school and education CSI',
    focus: 'csr',
    about: [
      'Oando Foundation is a philanthropic organisation focused on improving access to quality education in Nigerian public schools, including adopted schools, infrastructure, teacher support, and learning resources.',
      'The Foundation’s education CSI is among the more structured corporate-foundation school programmes in the country.',
      'Partnerships aim at sustainable improvement in the public-school system rather than one-off donations.',
    ],
    admiration:
      'We have followed Oando Foundation’s adopted-school and public-education work with respect. You have treated basic education as a long-term CSI commitment — infrastructure, teachers, and learners — rather than a calendar of photo opportunities. SmartEdu Hub is designed for exactly that kind of school relationship: tools that stay after the launch.',
    priorities: [
      'Quality education in Nigerian public schools.',
      'Adopted-school and community education support.',
      'Teacher and learning-resource improvement.',
      'Sustainable CSI rather than one-off gifts.',
      'Measurable learner outcomes.',
    ],
    partnershipFit: [
      'SmartEdu Hub can be deployed in Oando Foundation adopted schools as the digital learning and competition layer on top of existing school support.',
      'AI Books and Accessible Publishers titles supply curriculum content; competitions supply motivation and a public excellence story for CSI reporting.',
      'Dashboards can give the Foundation participation and practice data across adopted schools.',
    ],
    ask: [
      'We invite Oando Foundation to pilot SmartEdu Hub competitions and AI Books in a cluster of adopted schools.',
      'We would welcome a technical session at The Wings Complex on implementation, teacher onboarding, and impact reporting.',
      'A one-session pilot can be expanded if the Foundation is satisfied with evidence.',
    ],
    conclusion: [
      'Oando Foundation already walks with public schools. SmartEdu Hub can walk with those same schools into national competitions and daily digital study.',
      'We would be honoured to submit a school-cluster implementation plan.',
    ],
    outreachAngle:
      'Begin with currently adopted schools so the partnership deepens an existing CSI footprint.',
    prizeAngle:
      'Inter-school prizes among Foundation schools, plus learner devices and continued catalogue access.',
  },
  {
    slug: 'jim-ovia-foundation',
    name: 'Jim Ovia Foundation',
    shortName: 'Jim Ovia Foundation',
    attention: 'Scholarships and Education',
    salutation: 'the Jim Ovia Foundation team',
    website: 'jimoviafoundation.org',
    email: 'enquiry@jimoviafoundation.org',
    phone: 'Email only for scholarship enquiries (no application phone line)',
    address: 'Nigeria',
    city: 'Lagos',
    category: 'Scholarships',
    focus: 'scholarships',
    about: [
      'The Jim Ovia Foundation is best known for the Jim Ovia Scholars Programme, supporting Nigerian students through scholarships administered online.',
      'The Foundation’s education philanthropy is built around access to higher education for scholars who meet academic and process requirements.',
      'All scholarship enquiries are directed to email; applications are not taken by phone or walk-in.',
    ],
    admiration:
      'We respect the Jim Ovia Foundation’s scholarship discipline — a clear, online, no-fee process that has opened higher education to many Nigerian students. Scholarships change who can enter university; school-level competitions and digital books can change who is ready to compete for those scholarships in the first place.',
    priorities: [
      'Scholarships for Nigerian students.',
      'Transparent, online application processes.',
      'Academic excellence as a public good.',
      'Education philanthropy at scale.',
      'Human-capital development.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions can strengthen the secondary-school pipeline that feeds scholarship ambition — rankings, prizes, and serious exam-practice tools.',
      'AI Books, past questions, and CBT practice on the platform directly support the academic readiness scholarships assume.',
      'A Foundation-branded competition could be positioned as a “scholars pipeline” initiative without interfering with the existing online scholarship process.',
    ],
    ask: [
      'We invite the Jim Ovia Foundation to consider sponsoring a SmartEdu Hub academic competition season as a pipeline into scholarship-ready excellence.',
      'We would communicate with the Foundation only through the published enquiry channel and would not solicit walk-in applications.',
      'A partnership can be limited to competition branding and learning access, fully separate from scholar selection.',
    ],
    conclusion: [
      'Scholarships reward preparation. SmartEdu Hub competitions and AI Books are a Nigerian-built way to multiply that preparation in secondary schools.',
      'We would be honoured to correspond via enquiry@jimoviafoundation.org.',
    ],
    outreachAngle:
      'National secondary-school outreach, with clear public language that SmartEdu Hub is not a Jim Ovia scholarship application portal.',
    prizeAngle:
      'Academic prizes and learning tools that help more students become scholarship-ready, without claiming to award Jim Ovia scholarships.',
  },
  {
    slug: 'mtn-foundation',
    name: 'MTN Foundation',
    shortName: 'MTN Foundation',
    attention: 'Education and CSI',
    salutation: 'the MTN Foundation team',
    website: 'mtn.ng/foundation',
    email: 'mtnfoundation@mtn.com',
    phone: 'Via mtn.ng/foundation',
    address: 'MTN Plaza, Falomo, Ikoyi, Lagos',
    city: 'Lagos',
    category: 'Digital education CSI',
    focus: 'digital',
    about: [
      'MTN Foundation is the corporate philanthropy arm of MTN Nigeria, with a long-running education portfolio including scholarships, school support, and digital-skills initiatives.',
      'Connectivity and digital inclusion are natural extensions of MTN’s business into CSI — and education is one of the Foundation’s most visible public commitments.',
      'Programmes have reached public schools, scholars, and communities nationwide.',
    ],
    admiration:
      'We have followed MTN Foundation’s education and digital-inclusion work with respect. Few Nigerian CSI programmes have the network footprint to make digital learning real in public schools. SmartEdu Hub is an indigenous platform that can put curriculum, competitions, and AI tutoring on the kind of connected infrastructure MTN already cares about.',
    priorities: [
      'Education CSI and scholarships.',
      'Digital inclusion and connectivity for learning.',
      'Public-school and community reach.',
      'Youth skills for a digital economy.',
      'National-scale, reportable impact.',
    ],
    partnershipFit: [
      'A SmartEdu Hub competition season sponsored by MTN Foundation would combine national visibility with a digital-learning product students can use on phones and school devices.',
      'AI Books and CBT practice align with digital-skills and education CSI, not only with connectivity as an end in itself.',
      'Impact dashboards can support Foundation reporting on learners reached, practice completed, and competition outcomes.',
    ],
    ask: [
      'We invite MTN Foundation to consider title or category sponsorship of SmartEdu Hub national academic competitions, with learning access for participating schools.',
      'We would welcome a CSI/education presentation on platform capabilities, data protection, and school implementation.',
      'A pilot network of schools can be agreed against Foundation geography and budget cycles.',
    ],
    conclusion: [
      'MTN Foundation already connects Nigeria. SmartEdu Hub can help more of those connections carry curriculum, competition, and tutoring.',
      'We would be honoured to prepare a CSI partnership note for your education team.',
    ],
    outreachAngle:
      'Prioritise public schools in communities where MTN Foundation already has education or digital-skills footprints.',
    prizeAngle:
      'Devices, data-friendly learning access, and national recognition consistent with a telecom education CSI brand.',
  },
  {
    slug: 'airtel-africa-foundation',
    name: 'Airtel Africa Foundation',
    shortName: 'Airtel Africa Foundation',
    attention: 'Education and Digital Inclusion',
    salutation: 'the Airtel Africa Foundation team',
    website: 'airtelafricafoundation.org',
    email: 'info@airtelafricafoundation.org',
    phone: 'Via airtelafricafoundation.org',
    address: 'Airtel Africa / Nigeria operations',
    city: 'Lagos',
    category: 'Digital inclusion and education',
    focus: 'digital',
    about: [
      'Airtel Africa Foundation is the philanthropic arm of Airtel Africa, with pillars that include education, digital inclusion, financial inclusion, and environmental protection across African markets.',
      'Education and digital inclusion are especially relevant in Nigeria, where connectivity still does not automatically mean learning.',
      'The Foundation’s continental mandate favours programmes that can be told as African youth opportunity, not only as a single-country donation.',
    ],
    admiration:
      'We respect Airtel Africa Foundation’s continental framing of education and digital inclusion. Connectivity is necessary; learning content, tutoring, and motivation are what turn megabytes into marks. SmartEdu Hub is built in Nigeria for that second half of the digital-education problem.',
    priorities: [
      'Education as a Foundation pillar.',
      'Digital inclusion for African youth.',
      'Financial inclusion and opportunity.',
      'Programmes with multi-country storytelling potential.',
      'Measurable learner reach.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions offer a high-visibility education story that matches a pan-African telecom foundation brand.',
      'AI Books on a digital platform are a natural pairing with digital-inclusion CSI.',
      'A Nigeria pilot can be documented as a model for other Airtel Africa markets if the Foundation wishes.',
    ],
    ask: [
      'We invite Airtel Africa Foundation to sponsor a Nigeria academic competition season on SmartEdu Hub, with AI Books access for participating learners.',
      'We would welcome an introductory meeting with the Foundation and, where appropriate, Airtel Nigeria CSI colleagues.',
      'Impact reporting can be designed for both Nigeria stakeholders and continental Foundation communications.',
    ],
    conclusion: [
      'Airtel Africa Foundation is positioned to make digital inclusion mean digital learning. SmartEdu Hub can be the curriculum and competition layer of that promise in Nigeria.',
      'We would be honoured to present a Nigeria pilot.',
    ],
    outreachAngle:
      'School selection can emphasise underserved learners for whom connectivity without content would still leave a learning gap.',
    prizeAngle:
      'Devices, recognition, and continued digital-book access that dramatise education-plus-inclusion.',
  },
  {
    slug: 'nlng',
    name: 'Nigeria LNG Limited (NLNG) — Education and CSR',
    shortName: 'NLNG',
    attention: 'CSR and Education',
    salutation: 'the NLNG CSR team',
    website: 'nigerialng.com',
    email: 'contact@nlng.com',
    phone: '+234 803 907 4000; +234 803 905 5000',
    address: 'NLNG Road, Eastern By-Pass, Port Harcourt, Rivers State',
    city: 'Port Harcourt',
    category: 'Corporate education CSR',
    focus: 'csr',
    about: [
      'Nigeria LNG Limited runs substantial education CSR, including university support, prizes, and community education in the Niger Delta, alongside its core gas business.',
      'NLNG’s education investments are among the most recognised corporate contributions to Nigerian tertiary and community learning.',
      'Head office in Port Harcourt anchors a company that already treats education as part of its social licence.',
    ],
    admiration:
      'We respect NLNG’s long education CSR — from community schools to university endowments and prizes. Few Nigerian corporates have made learning so central to their public contribution. SmartEdu Hub offers a basic-and-secondary digital layer that can sit beneath those tertiary investments: competitions, AI Books, and curriculum titles for the students who must still pass WAEC and JAMB before they ever reach an NLNG-supported university seat.',
    priorities: [
      'Education CSR in the Niger Delta and nationally.',
      'University and community learning support.',
      'Prizes that make academic excellence public.',
      'Social investment tied to operational communities.',
      'Human-capital development for Nigeria.',
    ],
    partnershipFit: [
      'A SmartEdu Hub competition season can extend NLNG’s prize culture downward into secondary schools, with Port Harcourt and operational communities as a natural first geography.',
      'AI Books and past-question CBT support the exam pipeline into the tertiary opportunities NLNG already funds.',
      'CSR reporting can include participation, practice, and prize outcomes.',
    ],
    ask: [
      'We invite NLNG to consider sponsorship of SmartEdu Hub academic competitions and learning access for selected Rivers and national school cohorts.',
      'We would welcome a CSR presentation in Port Harcourt or Lagos.',
      'A community-school plus excellence-prize model can be designed to fit existing NLNG education themes.',
    ],
    conclusion: [
      'NLNG already rewards and enables higher learning. SmartEdu Hub can help more Niger Delta and Nigerian students become ready for those opportunities.',
      'We would be honoured to discuss a CSR partnership with your team.',
    ],
    outreachAngle:
      'Prioritise operational and host communities, then a national excellence track if CSR strategy allows.',
    prizeAngle:
      'Prestigious prizes consistent with NLNG’s education-award tradition, plus devices and AI Books for continued study.',
  },
  {
    slug: 'access-holdings',
    name: 'Access Holdings / Access Bank Education CSI',
    shortName: 'Access Holdings',
    attention: 'Sustainability and CSI',
    salutation: 'the Access Holdings CSI team',
    website: 'accessholdings.com',
    email: 'sustainability@accessbankplc.com',
    phone: 'Via Access Bank branches / accessbankplc.com',
    address: 'Lagos, Nigeria',
    city: 'Lagos',
    category: 'Bank education CSI',
    focus: 'csr',
    about: [
      'Access Holdings and Access Bank maintain sustainability and CSI programmes that include education, community development, and financial inclusion.',
      'As one of Africa’s largest banking groups, Access can convene schools, scholars, and digital channels at national scale.',
      'Education CSI is a natural complement to financial-literacy and youth-opportunity work.',
    ],
    admiration:
      'We respect Access Holdings’ continental banking footprint and its sustainability commitments. A bank that already speaks to millions of Nigerian families can also sponsor a national academic competition that those families understand: prizes, books, and a fair ranking of effort.',
    priorities: [
      'Education and community CSI.',
      'Financial inclusion and youth opportunity.',
      'National brand with school and family reach.',
      'Sustainability reporting and measurable social investment.',
      'Partnerships that are implementable, not only announced.',
    ],
    partnershipFit: [
      'SmartEdu Hub competitions offer Access a youth-facing education vehicle with branding, school reach, and outcome data.',
      'AI Books and Accessible Publishers titles are a tangible “books plus digital” CSI story.',
      'A co-branded season can sit beside existing financial-literacy and scholarship efforts without replacing them.',
    ],
    ask: [
      'We invite Access Holdings / Access Bank CSI to sponsor a SmartEdu Hub national competition season and learning-access package.',
      'We would welcome a sustainability/CSI presentation of the platform, quality systems, and reporting.',
      'A pilot can be national in communications and clustered in school implementation.',
    ],
    conclusion: [
      'Access already finances opportunity. SmartEdu Hub can help more young customers-to-be earn academic opportunity in public.',
      'We would be honoured to work with your CSI team on a clean, reportable partnership.',
    ],
    outreachAngle:
      'School clusters can be aligned to markets where Access already has strong community presence.',
    prizeAngle:
      'Named prizes, devices, and continued learning access suitable for a major African bank’s education CSI.',
  },
  {
    slug: 'zenith-bank',
    name: 'Zenith Bank Plc — Education CSR',
    shortName: 'Zenith Bank',
    attention: 'CSR / Corporate Communications',
    salutation: 'the Zenith Bank CSR team',
    website: 'zenithbank.com',
    email: 'csr@zenithbank.com; enquiry@zenithbank.com',
    phone: '+234 1 278 7000',
    address: 'Zenith Heights, Plot 84/87 Ajose Adeogun Street, Victoria Island, Lagos',
    city: 'Lagos',
    category: 'Bank education CSR',
    focus: 'csr',
    about: [
      'Zenith Bank is a leading Nigerian bank with a substantial CSR tradition, including education, health, and community support.',
      'Education donations, school support, and youth programmes have been part of Zenith’s public contribution for many years.',
      'The bank’s brand is associated with professionalism and national scale.',
    ],
    admiration:
      'We respect Zenith Bank’s long CSR presence in Nigerian education. Your customers include the parents of the students SmartEdu Hub already serves in partner schools. A competition-sponsorship partnership would let Zenith attach its name to academic excellence that is scored, ranked, and followed by real study tools.',
    priorities: [
      'Education and community CSR.',
      'Youth opportunity and national brand leadership.',
      'Support for schools and scholars.',
      'Professional, large-scale partnerships.',
      'Visible, accountable social investment.',
    ],
    partnershipFit: [
      'Title sponsorship of a SmartEdu Hub season gives Zenith a structured education CSR product: launch, competition, prizes, report.',
      'AI Books and catalogue access mean the CSR continues in the classroom after prize day.',
      'ISO 9001-certified delivery from Accessible Publishers Limited reduces implementation risk.',
    ],
    ask: [
      'We invite Zenith Bank CSR to sponsor SmartEdu Hub national academic competitions and participant learning access.',
      'We would welcome a presentation to corporate communications and CSR.',
      'Branding, prize design, and reporting can be aligned to Zenith’s education CSR language.',
    ],
    conclusion: [
      'Zenith Bank already invests in Nigerian communities. SmartEdu Hub can turn part of that investment into a national academic competition with lasting digital learning.',
      'We would be honoured to discuss a season partnership.',
    ],
    outreachAngle:
      'National school participation with optional emphasis on communities where Zenith already supports education.',
    prizeAngle:
      'Flagship cash and device prizes consistent with a tier-1 bank, plus AI Books for all participants in the sponsored cohort.',
  },
  {
    slug: 'yaradua-foundation',
    name: 'Shehu Musa Yar’Adua Foundation',
    shortName: 'Yar’Adua Foundation',
    attention: 'Programmes and Partnerships',
    salutation: 'the Yar’Adua Foundation team',
    website: 'yaraduacentre.org',
    email: 'info@yaraduafoundation.org',
    phone: 'Via yaraduacentre.org',
    address: '1 Memorial Drive, Abuja',
    city: 'Abuja',
    category: 'Civic education and public leadership',
    focus: 'youth-leadership',
    about: [
      'The Shehu Musa Yar’Adua Foundation promotes national development, public policy dialogue, and civic values through the Yar’Adua Centre in Abuja and related programmes.',
      'Education, memory, and leadership are part of how the Foundation invests in Nigeria’s public square.',
      'The Centre is a recognised convening space for policy, civil society, and youth engagement.',
    ],
    admiration:
      'We respect the Yar’Adua Foundation’s role as a civic institution — a place where Nigeria’s public memory and public future are discussed with seriousness. Civic education needs literate, confident young people. Academic competitions and digital books are not a substitute for civic formation, but they are a foundation for it.',
    priorities: [
      'Civic education and public leadership.',
      'National dialogue and policy engagement.',
      'Youth participation in public life.',
      'Education as part of national development.',
      'Partnerships with integrity and public purpose.',
    ],
    partnershipFit: [
      'A Foundation-associated academic competition can be framed as excellence in service of national development — not celebrity, but competence.',
      'AI Books and curriculum titles support the basic learning without which civic education is rhetoric.',
      'Abuja convening power can host a finals or policy conversation on digital learning and public schools.',
    ],
    ask: [
      'We invite the Yar’Adua Foundation to explore hosting or sponsoring a SmartEdu Hub excellence conversation and school competition track.',
      'We would welcome a meeting at the Yar’Adua Centre.',
      'The partnership can be convening, prize sponsorship, or learning access for selected schools.',
    ],
    conclusion: [
      'The Yar’Adua Foundation already invests in how Nigeria thinks. SmartEdu Hub invests in how Nigerian students learn. Those two investments belong together.',
      'We would be honoured to present SmartEdu Hub to your programmes team.',
    ],
    outreachAngle:
      'Schools and youth groups already in civic-education networks, plus a national academic track.',
    prizeAngle:
      'Recognition that links academic excellence to public service values, with learning tools that continue after the event.',
  },
  {
    slug: 'ford-foundation',
    name: 'Ford Foundation — West Africa',
    shortName: 'Ford Foundation West Africa',
    attention: 'West Africa Office, Lagos',
    salutation: 'the Ford Foundation West Africa team',
    website: 'fordfoundation.org',
    email: 'west.africa@fordfoundation.org',
    phone: '+234 1 277 7100',
    address: 'Lagos, Nigeria (West Africa office)',
    city: 'Lagos',
    category: 'Social justice philanthropy',
    focus: 'grantmaking',
    about: [
      'Ford Foundation’s West Africa office supports social justice, civic engagement, and related fields, including work that touches education equity and opportunity.',
      'The Foundation is a grantmaker to organisations, not typically a direct school operator.',
      'Education-adjacent investments often sit inside inequality, civic space, and opportunity agendas.',
    ],
    admiration:
      'We respect Ford Foundation’s West Africa work on inequality and civic opportunity. Quality education remains one of the most powerful equalisers in Nigeria — and one of the most unequally distributed. We approach Ford not as a CSI sponsor in the corporate sense, but as a potential ally for an indigenous, quality-managed learning platform that can be used by grantees and school networks committed to equity.',
    priorities: [
      'Reducing inequality and expanding opportunity.',
      'Support for civil-society implementers.',
      'Education equity as a social-justice issue.',
      'Civic voice and accountable institutions.',
      'Grantmaking rather than direct service alone.',
    ],
    partnershipFit: [
      'SmartEdu Hub can be offered as infrastructure for education-equity grantees: competitions and AI Books in underserved school networks, with data for learning and advocacy.',
      'Accessible Publishers Limited’s indigenous ownership and ISO 9001 system may matter to a funder concerned with local capacity.',
      'A demonstration with a Ford-supported education or youth organisation could be a lower-risk first step than a standalone grant.',
    ],
    ask: [
      'We invite Ford Foundation West Africa to an exploratory conversation on whether SmartEdu Hub is relevant to current education-equity or youth grantees.',
      'We would not assume a direct grant; we are open to technical partnership via existing grantees.',
      'A short concept note can be prepared after guidance on strategy fit.',
    ],
    conclusion: [
      'Ford’s West Africa office already invests in a fairer region. Learning tools that reach underserved Nigerian schools are one practical expression of that investment.',
      'We would be honoured to take advice from your team on fit and process.',
    ],
    outreachAngle:
      'Work through education and youth grantees so the platform serves equity strategies already funded, rather than creating a parallel project.',
    prizeAngle:
      'If competitions are used, design them for underserved learners and public evidence of equity — not only elite school branding.',
  },
  {
    slug: 'macarthur-foundation',
    name: 'MacArthur Foundation — Nigeria',
    shortName: 'MacArthur Foundation Nigeria',
    attention: 'Nigeria Office',
    salutation: 'the MacArthur Foundation Nigeria team',
    website: 'macfound.org',
    email: 'info-ng@macfound.org',
    phone: '+234 9 903 6600',
    address: 'Abuja, Nigeria',
    city: 'Abuja',
    category: 'Accountability and education philanthropy',
    focus: 'accountability',
    about: [
      'The John D. and Catherine T. MacArthur Foundation’s Nigeria office has invested in accountability, anti-corruption, and related public-interest fields, including intersections with education governance.',
      'The Foundation is a grantmaker; education work is typically through Nigerian organisations and reforms rather than school branding.',
      'Evidence, institutions, and accountability culture matter more than events.',
    ],
    admiration:
      'We respect MacArthur’s Nigeria programme for taking accountability seriously — including in how public systems deliver (or fail to deliver) education. We do not present SmartEdu Hub as a substitute for governance reform. We present it as a transparent classroom layer: competitions with published rules, learning content with editorial standards, and usage data that can support honest conversation about what students actually do.',
    priorities: [
      'Accountability and public-interest reform.',
      'Nigerian implementing partners.',
      'Evidence over publicity.',
      'Education governance where it intersects on-strategy work.',
      'Institutional, not theatrical, change.',
    ],
    partnershipFit: [
      'If MacArthur-supported education or accountability partners need a digital learning and assessment environment, SmartEdu Hub is an indigenous option with documented quality processes.',
      'Competition scoring and content QA can be opened to review, consistent with an evidence culture.',
      'A grantee-led pilot would keep MacArthur in its proper grantmaking role.',
    ],
    ask: [
      'We invite MacArthur Foundation Nigeria to advise whether any current grantee strategy would benefit from a SmartEdu Hub demonstration.',
      'We seek fit, not a forced education earmark.',
      'A technical briefing can be provided without a public campaign.',
    ],
    conclusion: [
      'Accountability needs tools as well as laws. Where those tools are digital learning systems, we offer a Nigerian-built, auditable platform.',
      'We would be honoured to be directed to the right programme officers or grantees — or told that the fit is weak.',
    ],
    outreachAngle:
      'Only through on-strategy grantees; no mass-school branding in MacArthur’s name unless the Foundation requests it.',
    prizeAngle:
      'If used, transparent scoring and published methodology — recognition as evidence, not spectacle.',
  },
  {
    slug: 'mastercard-foundation',
    name: 'Mastercard Foundation',
    shortName: 'Mastercard Foundation',
    attention: 'Africa Education and Young Africa Works',
    salutation: 'the Mastercard Foundation team',
    website: 'mastercardfdn.org',
    email: 'Via mastercardfdn.org/contact',
    phone: 'Via mastercardfdn.org',
    address: 'Africa programmes (Nigeria-relevant education and youth work)',
    city: 'Africa / Nigeria programmes',
    category: 'Youth opportunity philanthropy',
    focus: 'scholarships',
    about: [
      'Mastercard Foundation is one of the world’s largest foundations focused on education and financial inclusion, with major African programmes including scholarships and Young Africa Works.',
      'The Foundation’s education work emphasises access, quality, and pathways into dignified work for young people.',
      'Nigeria is a relevant geography for youth-opportunity programming at continental scale.',
    ],
    admiration:
      'We respect the Mastercard Foundation’s continental bet on African young people — scholarships, skills, and work. Secondary-school learning quality is still the bottleneck for many of those pathways in Nigeria. SmartEdu Hub competitions, AI Books, and exam practice are a locally built way to raise that floor.',
    priorities: [
      'Education and skills for African youth.',
      'Scholarships and tertiary pathways.',
      'Dignified work and Young Africa Works.',
      'Financial inclusion as opportunity infrastructure.',
      'Partnerships that can operate at scale.',
    ],
    partnershipFit: [
      'A Nigeria secondary-school competition and AI Books programme could be positioned as pipeline strengthening for later scholarship and skills programmes.',
      'Platform analytics support the Foundation’s preference for measurable reach.',
      'Accessible Publishers Limited offers curriculum alignment that generic global content often lacks in Nigerian classrooms.',
    ],
    ask: [
      'We invite Mastercard Foundation to consider a Nigeria learning-and-competition partnership, or to connect us to implementing partners already in their education portfolio.',
      'We would welcome guidance on the correct programme window and due-diligence path.',
      'A concept note can be tailored once we know whether secondary digital learning is in scope.',
    ],
    conclusion: [
      'Mastercard Foundation already invests in African futures. SmartEdu Hub can help more Nigerian students become ready for those futures while they are still in school.',
      'We would be honoured to follow your partnership process.',
    ],
    outreachAngle:
      'Design for scale and inclusion — public schools, girls, and underserved states — consistent with Foundation equity language.',
    prizeAngle:
      'Prizes matter less than learning access at Foundation scale; we would emphasise licences, tutoring, and exam readiness alongside recognition.',
  },
  {
    slug: 'save-the-children',
    name: 'Save the Children Nigeria',
    shortName: 'Save the Children Nigeria',
    attention: 'Education and Partnerships',
    salutation: 'the Save the Children Nigeria team',
    website: 'savethechildren.net/nigeria',
    email: 'nigeria.feedback@savethechildren.org; info.nigeria@savethechildren.org',
    phone: '+234 800 225 5724',
    address: 'Plot 512, Cadastral Zone B09, Kado District, Abuja',
    city: 'Abuja',
    category: 'Child rights and education',
    focus: 'humanitarian',
    about: [
      'Save the Children has worked in Nigeria since 2001 so that children survive, learn, and are protected, with programmes across many states and a mix of humanitarian and development work.',
      'Education in emergencies, return to school, and child protection are central where conflict and poverty interrupt learning.',
      'The national office in Abuja coordinates a large country programme with community and government partners.',
    ],
    admiration:
      'We have followed Save the Children’s Nigeria education and protection work with deep respect — including the insistence that children who have missed school can return, and that learning is a right even in hardship. The Cuppy Foundation’s own partnership history with Save the Children is one reason we take this conversation seriously: education philanthropy is strongest when it is child-centred and accountable.',
    priorities: [
      'Children’s right to learn and be protected.',
      'Education in development and humanitarian settings.',
      'Return-to-school and out-of-school children.',
      'State-level programme delivery.',
      'Evidence and child safeguarding.',
    ],
    partnershipFit: [
      'SmartEdu Hub can support learning continuity — AI Books, practice tests, and teacher-visible progress — in development school programmes where connectivity and devices allow.',
      'Competitions, if used, would be designed with Save the Children’s safeguarding rules, never as a publicity risk to children in fragile contexts.',
      'Accessible Publishers curriculum titles offer Nigerian content rather than generic imports.',
    ],
    ask: [
      'We invite Save the Children Nigeria to a technical conversation on whether SmartEdu Hub is appropriate for any current education programme sites.',
      'We will follow Save the Children’s partnership and safeguarding procedures, including child-safe communications.',
      'A small, non-humanitarian-first pilot in stable school sites may be more appropriate than an emergency deployment.',
    ],
    conclusion: [
      'Save the Children already keeps learning on the agenda in difficult places. We offer a Nigerian digital-learning and competition platform only where it is safe, useful, and invited.',
      'We would be honoured to be assessed against your education and safeguarding standards.',
    ],
    outreachAngle:
      'No child-facing media without Save the Children clearance; prefer stable school sites for any competition element.',
    prizeAngle:
      'If prizes are appropriate at all, keep them modest, local, and safeguarding-compliant — learning access matters more than spectacle.',
  },
  {
    slug: 'unicef-nigeria',
    name: 'UNICEF Nigeria',
    shortName: 'UNICEF Nigeria',
    attention: 'Education Section',
    salutation: 'the UNICEF Nigeria Education team',
    website: 'unicef.org/nigeria',
    email: 'nigeria@unicef.org',
    phone: '+234 803 659 0421',
    address: 'United Nations House, Plot 617/618, Diplomatic Drive, CBD, Abuja',
    city: 'Abuja',
    category: 'UN education',
    focus: 'systems',
    about: [
      'UNICEF Nigeria works with government and partners so that children survive, learn, and are protected, including a major education portfolio on access, quality, and systems.',
      'Offices in Abuja, Lagos, Kano, Enugu, and Maiduguri reflect both development and humanitarian education needs.',
      'UNICEF does not typically “sponsor competitions” as CSI; it convenes, funds, and advises at system level.',
    ],
    admiration:
      'We respect UNICEF Nigeria’s leadership on children’s right to learn — including out-of-school children, girls’ education, and system strengthening with government. We approach UNICEF as a possible technical interlocutor and implementing-partner connector, not as a corporate title sponsor.',
    priorities: [
      'Every child’s right to education.',
      'System strengthening with government.',
      'Girls and out-of-school children.',
      'Humanitarian and development education.',
      'Evidence, standards, and child safeguarding.',
    ],
    partnershipFit: [
      'SmartEdu Hub could be demonstrated as a Nigerian digital public-goods candidate: curriculum-aligned books, CBT practice, and school analytics.',
      'Competition features would be secondary to learning access unless UNICEF education specialists see a safe motivational use.',
      'ISO 9001 and in-house development may matter for due diligence on local vendors.',
    ],
    ask: [
      'We invite UNICEF Nigeria Education to a briefing on SmartEdu Hub and Accessible Publishers’ curriculum digitalisation.',
      'We seek advice on whether any state or implementing-partner programme could use the platform.',
      'We will follow UN vendor and partnership rules rather than informal sponsorship language.',
    ],
    conclusion: [
      'UNICEF’s mandate is children, not vendors. We present SmartEdu Hub only as a tool that might help more Nigerian children learn, if specialists agree.',
      'We would be honoured to be referred to the correct education officers.',
    ],
    outreachAngle:
      'Any school use would be government- and UNICEF-partner-led; no UNICEF logo on competitions without written authorisation.',
    prizeAngle:
      'Learning access and system usefulness first; public prizes only if education specialists judge them safe and additional.',
  },
  {
    slug: 'unesco-abuja',
    name: 'UNESCO Abuja Office',
    shortName: 'UNESCO Abuja',
    attention: 'Education Programme',
    salutation: 'the UNESCO Abuja Education team',
    website: 'unesco.org',
    email: 'abuja@unesco.org',
    phone: 'Via UNESCO Abuja office',
    address: 'Plot 617/618, Diplomatic Drive, Central Business District, Abuja',
    city: 'Abuja',
    category: 'UN SDG 4',
    focus: 'systems',
    about: [
      'UNESCO’s Abuja presence supports education, culture, and science in Nigeria, including SDG 4 — inclusive and equitable quality education.',
      'The organisation convenes government, educators, and partners around curriculum, literacy, and education policy.',
      'UNESCO partnerships are typically programmatic and government-facing rather than commercial CSI.',
    ],
    admiration:
      'We respect UNESCO’s stewardship of SDG 4 and its work with Nigerian education institutions. SmartEdu Hub was designed against that same goal: inclusive quality learning, with competitions as motivation and AI Books as daily access to curriculum.',
    priorities: [
      'SDG 4 — inclusive quality education.',
      'Literacy, curriculum, and teacher issues.',
      'Culture and knowledge as public goods.',
      'Government-facing education partnership.',
      'International standards with local implementation.',
    ],
    partnershipFit: [
      'A demonstration of indigenous digital textbooks plus national academic competitions could illustrate a private-sector contribution to SDG 4.',
      'Accessible Publishers’ editorial process is relevant to UNESCO’s concern for quality content.',
      'Any association would follow UNESCO’s partnership and logo rules strictly.',
    ],
    ask: [
      'We invite UNESCO Abuja to a technical demonstration of SmartEdu Hub as a Nigerian SDG 4 delivery tool.',
      'We ask for guidance on appropriate partnership categories (if any), not for an informal endorsement.',
      'A written concept can be provided for internal review.',
    ],
    conclusion: [
      'SDG 4 will be met in classrooms. We offer a classroom platform built in Nigeria, and we will respect UNESCO’s processes.',
      'We would be honoured to brief your education programme officers.',
    ],
    outreachAngle:
      'Government and school partners only with UNESCO advice; no public UNESCO branding without authorisation.',
    prizeAngle:
      'If competitions are discussed, frame them as learner motivation under SDG 4, not as UNESCO-named commercial events.',
  },
  {
    slug: 'british-council',
    name: 'British Council Nigeria',
    shortName: 'British Council Nigeria',
    attention: 'Education and Skills',
    salutation: 'the British Council Nigeria team',
    website: 'britishcouncil.org.ng',
    email: 'info.nigeria@ng.britishcouncil.org; eduk.enquiries@ng.britishcouncil.org',
    phone: '+234 201 460 3090',
    address: 'Lagos and Abuja offices, Nigeria',
    city: 'Lagos',
    category: 'Skills, English, and education',
    focus: 'teachers',
    about: [
      'British Council Nigeria supports English, education, skills, examinations, and cultural relations, connecting Nigerian learners and institutions to UK and global opportunity.',
      'Schools, exams, and teacher development are long-standing pillars of the Council’s work in Nigeria.',
      'Partnerships are typically institutional, with clear procurement and brand rules.',
    ],
    admiration:
      'We respect the British Council’s decades of education and English work in Nigeria — exams, teacher development, and skills that still shape how many families define opportunity. SmartEdu Hub is a Nigerian complement: local curriculum, AI tutoring, and national competitions that can sit beside, not against, international exam pathways.',
    priorities: [
      'English, skills, and education quality.',
      'Examinations and international opportunity.',
      'Teacher development and school partnerships.',
      'Cultural relations and youth programmes.',
      'Institutional partnership standards.',
    ],
    partnershipFit: [
      'SmartEdu Hub CBT and past-question practice can support exam readiness while AI Books cover Nigerian curriculum titles.',
      'A schools competition could be discussed as a youth-skills or education-engagement activity if it meets Council programme criteria.',
      'Quality assurance (ISO 9001) and editorial process are relevant to the Council’s standards culture.',
    ],
    ask: [
      'We invite British Council Nigeria Education/Skills to a demonstration of SmartEdu Hub.',
      'We will follow supplier and partnership procedures, including facilities and programme contacts as published.',
      'Collaboration might be content, teacher training, or a schools challenge — to be defined by the Council, not by us.',
    ],
    conclusion: [
      'The British Council already raises standards and opens doors. SmartEdu Hub can help more Nigerian schools practise at a higher standard every day.',
      'We would be honoured to be assessed through the proper partnership channel.',
    ],
    outreachAngle:
      'School partners already in Council networks, if the Council wishes; otherwise a standalone Nigerian competition with optional Council advice.',
    prizeAngle:
      'If a challenge is jointly designed, prizes should emphasise learning and skills, consistent with Council youth programmes.',
  },
  {
    slug: 'street-child',
    name: 'Street Child Nigeria',
    shortName: 'Street Child Nigeria',
    attention: 'Education Programme',
    salutation: 'the Street Child Nigeria team',
    website: 'street-child.org',
    email: 'info@street-child.org',
    phone: '+44 20 7614 7696 (international); Nigeria programme via website',
    address: 'Maiduguri, Borno State, with Abuja presence',
    city: 'Maiduguri',
    category: 'Education in emergencies',
    focus: 'humanitarian',
    about: [
      'Street Child works so that children are safe, in school, and learning, with a substantial Nigeria programme focused on the Northeast and other vulnerable contexts.',
      'Education in emergencies, community teachers, and return-to-learning are core methods.',
      'The organisation is operational in difficult security and access environments.',
    ],
    admiration:
      'We honour Street Child’s work to get children in Northeast Nigeria and other fragile settings back into learning. That is among the hardest education work in the country. We will not pretend a national prize competition is always appropriate there. We offer digital books and practice tools only where Street Child judges connectivity, safety, and pedagogy to be right.',
    priorities: [
      'Children safe, in school, and learning.',
      'Education in emergencies in the Northeast.',
      'Community and catch-up education models.',
      'Protection alongside learning.',
      'Operational partnerships that do no harm.',
    ],
    partnershipFit: [
      'Where devices and connectivity exist, AI Books and simplified curriculum content could support catch-up learning.',
      'Competition features would be optional and likely inappropriate in active emergency sites.',
      'Accessible Publishers can discuss print-plus-digital packs if digital-only delivery is unrealistic.',
    ],
    ask: [
      'We invite Street Child Nigeria to advise whether any education site could use SmartEdu Hub content or a light learning-access package.',
      'We defer entirely on security, safeguarding, and communications.',
      'A content-only partnership may be more suitable than a branded competition.',
    ],
    conclusion: [
      'Street Child already does the hardest mile. We will only add tools if they shorten that mile for teachers and children.',
      'We would be honoured to listen to your education leads before proposing a design.',
    ],
    outreachAngle:
      'No public ranking of children in humanitarian settings; outreach only through Street Child staff.',
    prizeAngle:
      'Prefer learning materials over prizes; if recognition is used, keep it local, safe, and teacher-led.',
  },
  {
    slug: 'plan-international',
    name: 'Plan International Nigeria',
    shortName: 'Plan International Nigeria',
    attention: 'Education and Girls’ Equality',
    salutation: 'the Plan International Nigeria team',
    website: 'plan-international.org/nigeria',
    email: 'Via plan-international.org/nigeria (Abuja office)',
    phone: 'Abuja office via plan-international.org/nigeria',
    address: 'No. 49 Anthony Enahoro Street, Utako District, Abuja',
    city: 'Abuja',
    category: 'Girls’ equality and education',
    focus: 'girls-empowerment',
    about: [
      'Plan International has operated in Nigeria since 2014 to advance children’s rights and equality for girls, including education in development and crisis-affected contexts.',
      'School safety, girls’ education, and youth empowerment are recurring programme themes.',
      'The Abuja office leads a country programme with strong girls’ equality branding.',
    ],
    admiration:
      'We respect Plan International Nigeria’s focus on girls’ equality and the right to learn in safety. Attacks on schools and the squeeze on girls’ education make that mandate urgent. A partnership with SmartEdu Hub would have to put girls’ safety and participation at the centre, not merely add “girls” to a poster.',
    priorities: [
      'Equality for girls and children’s rights.',
      'Safe education access.',
      'Youth empowerment and voice.',
      'Programmes in development and crisis settings.',
      'Accountability to children and communities.',
    ],
    partnershipFit: [
      'A girls-participation competition track, with Plan’s safeguarding, could make girls’ academic excellence public in programme areas where it is safe to do so.',
      'AI Books support continued learning when mobility or school disruption interrupts ordinary attendance.',
      'Reporting can disaggregate girls’ participation and learning engagement.',
    ],
    ask: [
      'We invite Plan International Nigeria to explore a girls-centred learning-access and optional competition pilot in selected programme LGAs.',
      'We will adopt Plan’s safeguarding and communications protocols.',
      'A joint design workshop is the right first step.',
    ],
    conclusion: [
      'Plan already organises for girls’ equality. SmartEdu Hub can add curriculum tools and, where safe, public academic recognition.',
      'We would be honoured to be guided by your education and safeguarding leads.',
    ],
    outreachAngle:
      'Girl-safe communications, community consent, and no exposure of children in insecure locations.',
    prizeAngle:
      'Recognition designed with Plan so it motivates girls without increasing risk.',
  },
  {
    slug: 'camfed',
    name: 'CAMFED (Campaign for Female Education)',
    shortName: 'CAMFED',
    attention: 'Partnerships',
    salutation: 'the CAMFED team',
    website: 'camfed.org',
    email: 'info@camfed.org',
    phone: 'Via camfed.org/contact-us',
    address: 'International programmes; African country offices',
    city: 'International / Africa',
    category: 'Rural girls’ education',
    focus: 'girls-empowerment',
    about: [
      'CAMFED supports girls’ education in rural African communities through a model of school support, alumnae networks (CAMA), and community structures that keep girls in school.',
      'The organisation is one of the world’s best-known girls’ education movements, with a strong evidence and alumnae culture.',
      'Nigeria conversations would follow CAMFED’s country and partnership rules.',
    ],
    admiration:
      'We honour CAMFED’s proof that rural girls stay in school when communities, alumnae, and resources wrap around them. That wraparound is the gold standard. SmartEdu Hub would only be useful if it served that model — digital books and practice for CAMFED-supported learners — rather than a disconnected national contest.',
    priorities: [
      'Rural girls completing school.',
      'Community and alumnae (CAMA) support.',
      'Education as a pathway out of poverty.',
      'Evidence and girl-centred design.',
      'Partnerships that do not extract girls’ stories cheaply.',
    ],
    partnershipFit: [
      'AI Books and Accessible Publishers titles could support study for CAMFED-supported learners where devices and language of instruction fit.',
      'Any competition would need CAMFED’s girl-safeguarding and community permission.',
      'Alumnae mentors could, if CAMFED wished, be part of academic support around the platform.',
    ],
    ask: [
      'We invite CAMFED to advise whether a Nigeria or regional learning-access conversation is in scope.',
      'We will not claim a CAMFED partnership in public without written agreement.',
      'A content-and-access pilot is more likely than title sponsorship.',
    ],
    conclusion: [
      'CAMFED already knows how to keep girls in school. We offer tools only if they help those girls learn more, not if they only help us look aligned.',
      'We would be honoured to be directed to the correct partnership office.',
    ],
    outreachAngle:
      'Only through CAMFED structures; no direct recruitment of girls for marketing.',
    prizeAngle:
      'If recognition is used, let alumnae and community committees shape it; prefer learning resources as the core gift.',
  },
  {
    slug: 'actionaid',
    name: 'ActionAid Nigeria',
    shortName: 'ActionAid Nigeria',
    attention: 'Education and Youth',
    salutation: 'the ActionAid Nigeria team',
    website: 'actionaid.org/nigeria',
    email: 'mail.nigeria@actionaid.org',
    phone: 'Via actionaid.org/nigeria',
    address: 'Abuja, Nigeria (Gwarinpa / FCT operations)',
    city: 'Abuja',
    category: 'Social justice and education',
    focus: 'accountability',
    about: [
      'ActionAid Nigeria works on poverty, women’s rights, education, and civic accountability, treating education as a public right that communities can demand.',
      'School governance, girls’ education, and public-resource accountability often sit together in ActionAid’s education work.',
      'The organisation is part of a global federation with strong social-justice language.',
    ],
    admiration:
      'We respect ActionAid Nigeria’s rights-based education work — communities demanding that public education actually function. SmartEdu Hub is a private-sector platform; we do not pretend it replaces public duty. We do offer tools that schools and communities can use while they continue to demand better public systems.',
    priorities: [
      'Education as a right, not a favour.',
      'Girls’ education and women’s rights.',
      'Community accountability for public services.',
      'Youth and civic participation.',
      'Partnerships consistent with social justice.',
    ],
    partnershipFit: [
      'In ActionAid-supported communities, SmartEdu Hub could be a supplementary learning layer if schools request it and data practices are acceptable.',
      'Competitions can be framed as community celebration of learning, with transparent rules.',
      'Reporting should be shareable with community structures, not only with donors.',
    ],
    ask: [
      'We invite ActionAid Nigeria to consider whether any education community programme could use SmartEdu Hub content or a competition event.',
      'We are open to being told the fit is weak if a private platform conflicts with campaign strategy.',
      'A community-consented pilot is the only model we would pursue.',
    ],
    conclusion: [
      'ActionAid already organises for education justice. We will only add a platform where communities want it.',
      'We would be honoured to have an honest fit conversation with your education team.',
    ],
    outreachAngle:
      'Community consent first; no extractive storytelling of poor schools for a corporate-looking launch.',
    prizeAngle:
      'Local, transparent recognition; learning access as the main public good.',
  },
  {
    slug: 'mercy-corps',
    name: 'Mercy Corps Nigeria',
    shortName: 'Mercy Corps Nigeria',
    attention: 'Education and Youth Programmes',
    salutation: 'the Mercy Corps Nigeria team',
    website: 'mercycorps.org',
    email: 'ng-info@mercycorps.org',
    phone: 'Via mercycorps.org (Nigeria)',
    address: 'Abuja and field offices, Nigeria',
    city: 'Abuja',
    category: 'Humanitarian youth and education',
    focus: 'humanitarian',
    about: [
      'Mercy Corps Nigeria implements humanitarian and development programmes, including youth, livelihoods, and education-adjacent work in fragile contexts.',
      'Adolescent learning and opportunity often sit beside economic recovery and peacebuilding.',
      'Field security and do-no-harm rules govern any digital or public activity.',
    ],
    admiration:
      'We respect Mercy Corps’ operational work with Nigerian youth in difficult markets and humanitarian settings. Education here is often catch-up, skills, and stability — not a national TV quiz. Any SmartEdu Hub conversation must start from that reality.',
    priorities: [
      'Youth opportunity in fragile contexts.',
      'Learning and livelihoods together.',
      'Do-no-harm and field security.',
      'Adolescent-centred programming.',
      'Evidence for humanitarian and development donors.',
    ],
    partnershipFit: [
      'Where Mercy Corps youth or education programmes have devices, AI Books and practice tools could support catch-up academics.',
      'Competition mechanics are optional and likely limited to stable sites.',
      'Data protection and offline-friendly approaches would need joint design.',
    ],
    ask: [
      'We invite Mercy Corps Nigeria to a fit discussion with education/youth leads.',
      'We can provide a technical note on platform, data, and implementation burden.',
      'We accept that humanitarian procurement rules may not allow a simple sponsorship.',
    ],
    conclusion: [
      'Mercy Corps already meets youth where the shock is. We offer classroom tools only if they reduce that shock for learners.',
      'We would be honoured to be assessed against your programme standards.',
    ],
    outreachAngle:
      'Field-office decision on whether any public competition is acceptable; default to learning access only.',
    prizeAngle:
      'Prefer skills and learning resources; avoid high-profile prizes in insecure locations.',
  },
  {
    slug: 'irc-nigeria',
    name: 'International Rescue Committee (IRC) Nigeria',
    shortName: 'IRC Nigeria',
    attention: 'Education Technical Team',
    salutation: 'the IRC Nigeria Education team',
    website: 'rescue.org',
    email: 'Via rescue.org/country/nigeria',
    phone: 'Via rescue.org Nigeria page',
    address: 'Abuja and Northeast field offices',
    city: 'Abuja',
    category: 'Humanitarian education',
    focus: 'humanitarian',
    about: [
      'The International Rescue Committee’s Nigeria programme includes humanitarian education, child protection, and related services for conflict-affected communities, especially in the Northeast.',
      'IRC education work emphasises safe learning spaces, teacher support, and social-emotional as well as academic learning.',
      'Vendor and partnership processes are those of a major humanitarian INGO.',
    ],
    admiration:
      'We honour IRC’s education-in-emergencies work in Nigeria. Children in those programmes need safety first, then learning. We will not market a national competition into a humanitarian classroom. We can discuss whether curriculum-aligned digital or print content could support IRC education teams where conditions allow.',
    priorities: [
      'Safe learning in humanitarian settings.',
      'Teacher support and learning spaces.',
      'Child protection alongside education.',
      'Evidence-based education in emergencies.',
      'Partnerships that pass humanitarian due diligence.',
    ],
    partnershipFit: [
      'Content licensing or teacher-facing resources may fit better than student competitions.',
      'AI Books could be relevant in more stable urban programme sites with devices.',
      'Accessible Publishers can discuss print materials if connectivity is the constraint.',
    ],
    ask: [
      'We invite IRC Nigeria Education to a technical briefing, following IRC partnership channels.',
      'We do not request IRC branding for commercial competitions.',
      'A content-review conversation may be the right first step.',
    ],
    conclusion: [
      'IRC’s standard is humanitarian usefulness. We will meet that standard or step back.',
      'We would be honoured to share materials for specialist review.',
    ],
    outreachAngle:
      'No public ranking of humanitarian learners; communications only through IRC.',
    prizeAngle:
      'Not the primary offer; learning resources and teacher tools come first.',
  },
  {
    slug: 'malala-fund',
    name: 'Malala Fund',
    shortName: 'Malala Fund',
    attention: 'Partnerships and Nigeria Education',
    salutation: 'the Malala Fund team',
    website: 'malala.org',
    email: 'info@malala.org',
    phone: 'Via malala.org',
    address: 'International; Nigeria education advocacy partners',
    city: 'International',
    category: 'Girls’ education advocacy',
    focus: 'girls-empowerment',
    about: [
      'Malala Fund works so that girls everywhere can learn for twelve years and lead without fear, including through education advocacy and support to local education champions.',
      'Nigeria is a relevant country for girls’ education advocacy given out-of-school numbers and security threats to schooling.',
      'The Fund typically supports advocates and systems, not commercial product launches.',
    ],
    admiration:
      'We honour Malala Fund’s global insistence that girls’ education is non-negotiable. Nigeria’s out-of-school girls are not an abstract statistic to you. We would only propose SmartEdu Hub where it helps girls learn and stay in school — and we would accept that advocacy organisations may prefer policy partners to platform vendors.',
    priorities: [
      'Twelve years of free, safe, quality education for girls.',
      'Support to local education champions.',
      'Advocacy against barriers to girls’ schooling.',
      'Girl-centred storytelling with consent.',
      'System change, not only gadgets.',
    ],
    partnershipFit: [
      'If Malala Fund partners in Nigeria need digital learning tools for girls’ secondary completion, AI Books and practice tests are a concrete offer.',
      'A girls’ academic recognition event could be designed with advocate partners, not as a Malala-branded commercial show.',
      'Data on girls’ participation could support advocacy if ethics allow.',
    ],
    ask: [
      'We invite Malala Fund to share this proposal with Nigeria education partners if the fit is real, or to decline if it is not.',
      'We do not seek to use Malala’s name in marketing without agreement.',
      'A girls’ learning-access pilot with a local champion organisation is the preferred path.',
    ],
    conclusion: [
      'Malala Fund already changed the world’s language on girls’ education. We offer Nigerian classroom tools only if they serve that language in practice.',
      'We would be honoured to be introduced to the right local partners — or to be told no.',
    ],
    outreachAngle:
      'Through local girls’ education organisations; girl-safe media rules.',
    prizeAngle:
      'Recognition that centres girls’ achievement and continued schooling, not celebrity association.',
  },
  {
    slug: 'global-partnership-education',
    name: 'Global Partnership for Education (GPE)',
    shortName: 'Global Partnership for Education',
    attention: 'Nigeria / Partner Country Engagement',
    salutation: 'the Global Partnership for Education team',
    website: 'globalpartnership.org',
    email: 'information@globalpartnership.org',
    phone: 'Via globalpartnership.org',
    address: 'Washington / partner-country processes',
    city: 'International',
    category: 'Education system finance',
    focus: 'systems',
    about: [
      'GPE is a global fund and partnership that supports developing-country education systems, working through government-led plans and coordinating agencies.',
      'Nigeria’s relationship with GPE, where active, is system-level — grants, compact, and sector dialogue — not school-by-school CSI.',
      'Private-sector engagement exists but follows GPE’s partnership rules.',
    ],
    admiration:
      'We respect GPE’s role as the largest global fund dedicated to education in developing countries. We understand that SmartEdu Hub would not replace a sector plan. We present it as a possible implementing technology for Nigerian states already pursuing digital learning and assessment under a government-led agenda.',
    priorities: [
      'System-wide education results.',
      'Government-led sector plans.',
      'Equity, including girls and marginalised learners.',
      'Coordinated partner finance.',
      'Accountability for learning outcomes.',
    ],
    partnershipFit: [
      'If a Nigerian state or federal process needs a digital learning and assessment platform, SmartEdu Hub is an indigenous option already in schools.',
      'Competitions are a motivational layer; the deeper offer is AI Books, CBT, and school management.',
      'Quality management (ISO 9001) is relevant to procurement conversations.',
    ],
    ask: [
      'We invite GPE to note Accessible Publishers Limited / SmartEdu Hub as a Nigerian private-sector education implementer for any relevant partner-country dialogue.',
      'We do not request a GPE grant as a first step; we request correct routing to country processes.',
      'A technical capability statement can be provided.',
    ],
    conclusion: [
      'GPE finances systems. We build classroom software and content. Those layers meet when government wants digital learning that works.',
      'We would be honoured to be directed to the proper Nigeria partnership channel.',
    ],
    outreachAngle:
      'Government and coordinating-agency pathways only; no claim of GPE endorsement.',
    prizeAngle:
      'Not GPE’s instrument; we would not brand school prizes as GPE-funded unless a grant explicitly said so.',
  },
  {
    slug: 'education-above-all',
    name: 'Education Above All / Educate A Child',
    shortName: 'Education Above All',
    attention: 'Educate A Child Partnerships',
    salutation: 'the Education Above All team',
    website: 'educationaboveall.org',
    email: 'info@eaa.org.qa',
    phone: 'Via educationaboveall.org',
    address: 'Doha, Qatar (global programmes)',
    city: 'Doha',
    category: 'Out-of-school children',
    focus: 'underserved',
    about: [
      'Education Above All, including the Educate A Child programme, funds partners to enrol and retain out-of-school children in quality learning.',
      'The model is partnership with implementing organisations that can find, enrol, and keep children in school at scale.',
      'Nigeria’s out-of-school challenge makes EAA a relevant, if highly structured, interlocutor.',
    ],
    admiration:
      'We respect Education Above All’s focus on the children who are not in school at all — the group most of the education industry never sees. SmartEdu Hub is currently strongest for schools that already exist. We would only be a useful partner if EAA implementers in Nigeria wanted digital or print learning support for newly enrolled children, not if they needed a prize show for children already in elite schools.',
    priorities: [
      'Enrolment and retention of out-of-school children.',
      'Quality learning after enrolment.',
      'Implementing-partner delivery at scale.',
      'Equity for the hardest-to-reach.',
      'Accountable partnership contracts.',
    ],
    partnershipFit: [
      'AI Books and simplified curriculum pathways could support newly enrolled learners if partners provide devices or blended print.',
      'Competitions might be introduced only after enrolment is stable, as a retention motivator.',
      'Accessible Publishers print capacity may matter as much as the digital platform.',
    ],
    ask: [
      'We invite Education Above All / Educate A Child to consider whether Nigerian implementing partners could use Accessible Publishers content and SmartEdu Hub.',
      'We can work as a technical partner to an EAA grantee rather than as a prime.',
      'A capability note on print-plus-digital delivery can be supplied.',
    ],
    conclusion: [
      'EAA’s mission begins with the child who is out of school. We will only propose tools that help that child stay and learn.',
      'We would be honoured to be introduced to relevant Nigeria implementers.',
    ],
    outreachAngle:
      'Through EAA implementing partners; no direct recruitment that confuses enrolment campaigns with product marketing.',
    prizeAngle:
      'Retention and learning materials first; competitions only as a later, partner-approved motivator.',
  },
  {
    slug: 'worldreader',
    name: 'Worldreader',
    shortName: 'Worldreader',
    attention: 'Partnerships',
    salutation: 'the Worldreader team',
    website: 'worldreader.org',
    email: 'info@worldreader.org',
    phone: 'Via worldreader.org',
    address: 'Global digital-reading programmes (Africa-inclusive)',
    city: 'International',
    category: 'Digital reading',
    focus: 'literacy',
    about: [
      'Worldreader exists to create a world of readers, using digital books and reading programmes especially for children and families with limited access to paper libraries.',
      'The organisation’s expertise is reading behaviour, book access, and mobile reading — close cousins to AI Books on SmartEdu Hub.',
      'Partnerships often involve publishers, mobile operators, and education organisations.',
    ],
    admiration:
      'We admire Worldreader’s single-minded focus on reading. Nigeria still has a book-access problem; digital reading is part of the answer if the titles are right. Accessible Publishers Limited is a Nigerian publisher with a catalogue and a platform. A conversation about complementary — not competing — reading ecosystems could serve learners.',
    priorities: [
      'Reading access for underserved children.',
      'Digital books and reading habit formation.',
      'Publisher and mobile partnerships.',
      'Evidence on reading behaviour.',
      'Literacy as the base of all learning.',
    ],
    partnershipFit: [
      'SmartEdu Hub AI Books add tutoring on top of digital texts; Worldreader brings reading-programme science and reach.',
      'A content or distribution partnership could put Nigerian curriculum titles in more hands.',
      'Competitions could include a reading track if Worldreader saw fit.',
    ],
    ask: [
      'We invite Worldreader to a publisher-to-literacy-organisation conversation on Nigeria.',
      'We are open to content licensing, joint reading challenges, or simply mutual referral.',
      'A catalogue sample and platform walkthrough can be provided.',
    ],
    conclusion: [
      'The world needs more readers; Nigeria needs more Nigerian books in those readers’ hands. We would rather collaborate than duplicate.',
      'We would be honoured to exchange programme notes with your partnerships team.',
    ],
    outreachAngle:
      'Reading programmes and school partners already in Worldreader networks, if a joint activity is agreed.',
    prizeAngle:
      'Reading milestones and book access as prizes; academic competitions as an optional extra.',
  },
  {
    slug: 'book-aid',
    name: 'Book Aid International',
    shortName: 'Book Aid International',
    attention: 'Africa Programmes',
    salutation: 'the Book Aid International team',
    website: 'bookaid.org',
    email: 'info@bookaid.org',
    phone: '+44 20 7733 3577',
    address: 'London, United Kingdom (Nigeria library partners)',
    city: 'London',
    category: 'Libraries and book access',
    focus: 'literacy',
    about: [
      'Book Aid International provides books and supports libraries in Africa and beyond, working with in-country library and education partners.',
      'The organisation’s theory of change is that libraries and books remain essential even in a digital age.',
      'Nigerian libraries and schools have historically been part of book-aid ecosystems.',
    ],
    admiration:
      'We respect Book Aid International’s fidelity to libraries and printed books. As a Nigerian publisher, Accessible Publishers Limited shares that fidelity — and also builds digital AI Books for schools that cannot wait for a full library. Print and digital should reinforce each other.',
    priorities: [
      'Books and functioning libraries.',
      'Reading for pleasure and study.',
      'In-country library partnerships.',
      'Equity of book access.',
      'Publisher collaboration.',
    ],
    partnershipFit: [
      'Accessible Publishers titles could complement donated international books with Nigerian curriculum content.',
      'SmartEdu Hub could give library-linked schools a digital layer while shelves are still being built.',
      'A reading-and-competition season could celebrate both library use and platform practice.',
    ],
    ask: [
      'We invite Book Aid International to discuss Nigeria library and school partners who might want local curriculum titles plus SmartEdu Hub access.',
      'We can supply publisher information and sample lists.',
      'A joint reading campaign is optional; content partnership may be enough.',
    ],
    conclusion: [
      'Libraries and digital platforms are not enemies. We would like Nigerian children to have both.',
      'We would be honoured to speak with your Africa programmes team.',
    ],
    outreachAngle:
      'Through Nigerian library partners Book Aid already trusts.',
    prizeAngle:
      'Book parcels, reading recognition, and digital access together — not gadgets instead of books.',
  },
  {
    slug: 'sightsavers',
    name: 'Sightsavers Nigeria',
    shortName: 'Sightsavers Nigeria',
    attention: 'Inclusive Education',
    salutation: 'the Sightsavers Nigeria team',
    website: 'sightsavers.org',
    email: 'ask-nigeria@sightsavers.org',
    phone: 'Via sightsavers.org/nigeria',
    address: 'Nigeria country programme',
    city: 'Nigeria',
    category: 'Inclusive education and eye health',
    focus: 'disability',
    about: [
      'Sightsavers works on eye health and inclusive education, including support so that children with visual impairment can learn in mainstream and specialist settings.',
      'Nigeria programmes combine health and education inclusion.',
      'Accessibility of learning materials is a core technical issue.',
    ],
    admiration:
      'We respect Sightsavers’ work so that children who cannot see well are not excluded from school. Inclusive education fails when digital platforms assume every learner can see a default screen. We want advice, not just a logo, on how SmartEdu Hub and AI Books should work for learners with visual impairment.',
    priorities: [
      'Inclusive education for children with visual impairment.',
      'Eye health and school-age vision.',
      'Accessible learning materials.',
      'Mainstream and specialist school support.',
      'Partnerships that change classroom practice.',
    ],
    partnershipFit: [
      'Technical advice on accessible digital text, magnification, and alternative formats would make any partnership real.',
      'An inclusive competition protocol could be co-designed so format does not exclude.',
      'Print large-text or accessible-format publishing is within Accessible Publishers’ broader production world and can be discussed.',
    ],
    ask: [
      'We invite Sightsavers Nigeria inclusive-education specialists to review SmartEdu Hub accessibility and advise a joint pilot.',
      'We are prepared to hear that the platform is not yet good enough — and to improve it.',
      'A small school-partner pilot with accessibility metrics is the honest first step.',
    ],
    conclusion: [
      'Sightsavers already knows what inclusion requires. We would rather be corrected than launch an inaccessible competition in the name of inclusion.',
      'We would be honoured to put the product in front of your specialists.',
    ],
    outreachAngle:
      'Through inclusive-education partner schools; communications that do not tokenise disability.',
    prizeAngle:
      'Accessible recognition and learning tools; scoring accommodations agreed in advance.',
  },
  {
    slug: 'universal-learning-solutions',
    name: 'Universal Learning Solutions',
    shortName: 'Universal Learning Solutions',
    attention: 'Nigeria Programmes',
    salutation: 'the Universal Learning Solutions team',
    website: 'universallearningsolutions.org',
    email: 'info@universallearningsolutions.org',
    phone: 'Via universallearningsolutions.org',
    address: 'United Kingdom / Nigeria early-literacy programmes',
    city: 'International / Nigeria',
    category: 'Early-grade literacy',
    focus: 'literacy',
    about: [
      'Universal Learning Solutions is known for early-grade literacy programmes, including Jolly Phonics-related teacher training and materials in Nigeria and other countries.',
      'The organisation’s focus is whether children actually learn to read in the first years of school.',
      'Teacher training and structured pedagogy sit at the centre of the model.',
    ],
    admiration:
      'We respect Universal Learning Solutions’ focus on the reading foundation — the years when Nigeria’s learning crisis is still reversible. SmartEdu Hub and AI Books are stronger in later primary and secondary, but a literacy partner at the base of the system is exactly who should help us sequence content so competitions do not skip over children who cannot yet read.',
    priorities: [
      'Early-grade reading.',
      'Teacher training in structured literacy.',
      'Materials that teachers can actually use.',
      'Nigeria classroom realities.',
      'Evidence of reading gains.',
    ],
    partnershipFit: [
      'A sequenced pathway from phonics and early reading into Accessible Publishers titles and later SmartEdu Hub competitions would be pedagogically honest.',
      'Teacher-training partners could introduce platform use only after reading foundations are in place.',
      'Joint messaging can resist the temptation to “digitise” classrooms that still need phonics.',
    ],
    ask: [
      'We invite Universal Learning Solutions to a pedagogy conversation on how SmartEdu Hub should relate to early-grade literacy in Nigeria.',
      'We are open to content alignment, teacher-training add-ons, or a simple non-compete-and-refer relationship.',
      'A joint note for states that buy both literacy training and digital platforms could reduce confusion for schools.',
    ],
    conclusion: [
      'Children cannot compete academically if they cannot read. We would rather partner with literacy specialists than pretend otherwise.',
      'We would be honoured to align our secondary-and-upper-primary tools with your early-grade work.',
    ],
    outreachAngle:
      'Schools already in ULS teacher-training networks, only if ULS agrees the digital layer is timely.',
    prizeAngle:
      'Reading progress recognition in early grades; academic competitions reserved for learners ready for them.',
  },
  {
    slug: 'wellbeing-foundation-africa',
    name: 'Wellbeing Foundation Africa',
    shortName: 'Wellbeing Foundation Africa',
    attention: 'Partnerships',
    salutation: 'the Wellbeing Foundation Africa team',
    website: 'wbfafrica.org',
    email: 'info@wbfafrica.org',
    phone: 'Via wbfafrica.org',
    address: 'Lagos and Abuja, Nigeria',
    city: 'Lagos',
    category: 'Maternal, newborn, child, and education advocacy',
    focus: 'child-rights',
    about: [
      'Wellbeing Foundation Africa, associated with Her Excellency Toyin Saraki, works on maternal, newborn, and child wellbeing, including health education and advocacy that touches girls’ and children’s life chances.',
      'Education of mothers and girls sits beside clinical and policy work.',
      'The Foundation convenes high-level advocacy with community programmes.',
    ],
    admiration:
      'We respect Wellbeing Foundation Africa’s insistence that a child’s chance to learn begins before school — with the survival and education of mothers and the protection of newborns and girls. Academic competitions are downstream of that work. Where the Foundation sees education access as the next step, SmartEdu Hub can supply tools.',
    priorities: [
      'Maternal, newborn, and child wellbeing.',
      'Health education and girls’ life chances.',
      'Advocacy with community programmes.',
      'Education as part of a child’s right to thrive.',
      'Partnerships with public-health seriousness.',
    ],
    partnershipFit: [
      'Health-education content and girls’ continued schooling can be supported with AI Books and school competitions where the Foundation has education relationships.',
      'A Foundation-associated excellence event could highlight girls who stayed in school — with safeguarding.',
      'Reporting can connect education participation to the Foundation’s child-wellbeing narrative without over-claiming health outcomes.',
    ],
    ask: [
      'We invite Wellbeing Foundation Africa to explore an education-access partnership for school-age children in programme communities.',
      'We would welcome a briefing for the partnerships team.',
      'Scope can be a girls’ learning-and-competition season or content access only.',
    ],
    conclusion: [
      'Children who survive must also learn. We offer a Nigerian platform for that second duty, in service of the Foundation’s first.',
      'We would be honoured to work under your advocacy and community standards.',
    ],
    outreachAngle:
      'Communities already in WBFA networks; mother-and-girl-safe communications.',
    prizeAngle:
      'Girls’ academic recognition and continued learning access, designed with the Foundation.',
  },
  {
    slug: 'centre-for-girls-education',
    name: 'Centre for Girls Education (CGE)',
    shortName: 'Centre for Girls Education',
    attention: 'Executive Leadership',
    salutation: 'the Centre for Girls Education team',
    website: 'cgeafrica.org',
    email: 'info@cgeafrica.org',
    phone: 'Via cgeafrica.org',
    address: 'Zaria, Kaduna State, Nigeria',
    city: 'Zaria',
    category: 'Northern girls’ education',
    focus: 'girls-empowerment',
    about: [
      'Centre for Girls Education works in Northern Nigeria so that adolescent girls can stay in school, delay early marriage, and learn in community-supported models, including the well-known girls’ learning centres around Zaria.',
      'The organisation’s evidence and community trust in Kaduna and neighbouring contexts are hard-won.',
      'Mentors, families, and Islamic and community leaders are part of the model, not obstacles to be ignored.',
    ],
    admiration:
      'We honour Centre for Girls Education’s work with Northern Nigerian girls — learning centres, mentors, and a serious response to early marriage and school dropout. National competitions designed in Lagos will fail those girls unless they are rebuilt with CGE. We would rather be taught by you than arrive with a generic sponsorship deck.',
    priorities: [
      'Adolescent girls’ schooling in Northern Nigeria.',
      'Community- and mentor-based learning centres.',
      'Delaying early marriage through education.',
      'Local trust with families and leaders.',
      'Evidence of girls’ learning and retention.',
    ],
    partnershipFit: [
      'AI Books and curriculum titles could support learning-centre study if language, devices, and chaperoning work.',
      'Any competition would need CGE’s design: possibly centre-based, girls-only, without unsafe travel or publicity.',
      'Accessible Publishers can discuss Hausa/English materials where relevant.',
    ],
    ask: [
      'We invite Centre for Girls Education to tell us whether SmartEdu Hub content is usable in learning centres.',
      'We will not run a public mixed competition in CGE communities without your design and consent.',
      'A content-and-mentor pilot is the likely first step.',
    ],
    conclusion: [
      'CGE already holds the trust that national platforms do not. We will follow that trust or we will stay away.',
      'We would be honoured to visit, listen, and only then propose tools.',
    ],
    outreachAngle:
      'Mentors and centre structures only; no external media of girls without CGE control.',
    prizeAngle:
      'In-centre recognition and learning materials; avoid prize models that require girls to travel unsafely.',
  },
  {
    slug: 'cchub',
    name: 'Co-Creation Hub (CcHUB)',
    shortName: 'CcHUB',
    attention: 'Education / Social Innovation',
    salutation: 'the CcHUB team',
    website: 'cchub.africa',
    email: 'hello@cchub.africa',
    phone: '+234 1 295 0555',
    address: '294 Herbert Macaulay Way, Sabo Yaba, Lagos',
    city: 'Lagos',
    category: 'Innovation and education technology',
    focus: 'innovation',
    about: [
      'CcHUB is Nigeria’s best-known social innovation and technology cluster, supporting startups, public-interest tech, and programmes that include education and civic innovation.',
      'The Yaba campus convenes founders, government, and development partners around African technology solutions.',
      'Education-tech conversations at CcHUB are about whether products actually work in African systems.',
    ],
    admiration:
      'We respect CcHUB’s role as the place where Nigerian tech is expected to be honest about users, government, and scale. SmartEdu Hub is an indigenous education platform from a publisher, not from a typical startup garage — and that is a strength (curriculum, print, schools) as well as a difference. We would value CcHUB as a critical friend and possible programme partner, not only as a venue.',
    priorities: [
      'African technology that solves real problems.',
      'Education and civic innovation.',
      'Founder and government convening.',
      'Honest product-market fit in African systems.',
      'Partnerships between tech and institutions.',
    ],
    partnershipFit: [
      'A CcHUB-hosted demonstration or education-tech clinic could put SmartEdu Hub in front of schools, states, and funders who already trust the Hub.',
      'Competitions and AI Books are a concrete product, not a slide-deck startup.',
      'Joint challenges with Hub education programmes could recruit schools into a season.',
    ],
    ask: [
      'We invite CcHUB to explore a demo day, school challenge partnership, or introduction to education-tech programmes.',
      'We would welcome critical product feedback from the Hub’s education community.',
      'Sponsorship of a SmartEdu Hub season could be co-branded with Hub education initiatives if fit is strong.',
    ],
    conclusion: [
      'CcHUB already gathers the people who will decide whether Nigerian edtech is serious. We would like SmartEdu Hub tested in that light.',
      'We would be honoured to present at Yaba and to listen to the critique.',
    ],
    outreachAngle:
      'Hub education community, partner schools, and state innovation programmes.',
    prizeAngle:
      'Innovation-and-academics recognition — devices, rankings, and public demo of AI Books — consistent with a tech-hub audience.',
  },
  {
    slug: 'stella-okoli-foundation',
    name: 'Stella Okoli Foundation',
    shortName: 'Stella Okoli Foundation',
    attention: 'Trustees and Programmes',
    salutation: 'the Stella Okoli Foundation team',
    website: 'emzorpharma.com',
    email: 'info@emzorpharma.com',
    phone: 'Via Emzor / Foundation public channels',
    address: 'Lagos, Nigeria',
    city: 'Lagos',
    category: 'Family philanthropy and community education',
    focus: 'community-youth',
    about: [
      'The Stella Okoli Foundation, associated with the legacy of Dr Stella Okoli and Emzor, has supported education, community, and humanitarian causes in Nigeria, including scholarships and school-related giving.',
      'Family philanthropy here is closely tied to community roots and to a well-known Nigerian enterprise.',
      'Education giving typically emphasises access and community uplift rather than national media events.',
    ],
    admiration:
      'We respect the Stella Okoli Foundation’s community education philanthropy — scholarships and school support rooted in a Nigerian enterprise story that families already know. SmartEdu Hub can turn that generosity into a structured academic season: competitions, books, and tutoring, with the Foundation’s name on excellence rather than only on a donation list.',
    priorities: [
      'Community education and scholarships.',
      'School support rooted in Nigerian enterprise philanthropy.',
      'Access for learners who cannot pay.',
      'Dignity in giving.',
      'Partnerships that can be explained to families and alumni.',
    ],
    partnershipFit: [
      'A Foundation-sponsored competition cluster in communities already receiving scholarships or school support would deepen, not replace, existing giving.',
      'AI Books give scholars a daily study tool between school terms.',
      'Reporting can be family-foundation scale: names of schools, numbers of learners, stories with consent.',
    ],
    ask: [
      'We invite the Stella Okoli Foundation to sponsor a SmartEdu Hub learning-and-competition package for scholars and partner schools.',
      'We would welcome a conversation through Emzor/Foundation public contact channels.',
      'A modest community pilot is a respectful first season.',
    ],
    conclusion: [
      'The Foundation already invests in education as community care. SmartEdu Hub can help those same learners compete and keep studying.',
      'We would be honoured to design a small, dignified pilot.',
    ],
    outreachAngle:
      'Current scholars and partner schools first, so the Foundation’s existing beneficiaries feel the upgrade.',
    prizeAngle:
      'Scholar-friendly prizes and continued AI Books access, with communications that match a family foundation’s tone.',
  },
]

