import type { PresentationState, Slide } from '../types/slide'

export const ASC_NAPPS_INVITATION_DOCUMENT_ID =
  'accessible-summer-napps-invitation-letter'
export const ASC_NAPPS_INVITATION_DOCUMENT_TITLE =
  'NAPPS Oyo Invitation: Accessible Summer Competition Award Presentation'
export const ASC_NAPPS_INVITATION_SEED_REVISION = 4

export const ASC_NAPPS_INVITATION_META: PresentationState['meta'] = {
  brand: '',
  author: 'Gbadega Adedapo',
  degree: 'MD/CEO',
  date: 'September 2026',
  letterDate: '15th September 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'The Chairman',
  recipientOrg:
    'National Association of Proprietors of Private Schools (NAPPS), Oyo State',
  subject:
    'Invitation to Award Presentation for Accessible Summer Competition Winners',
}

export const ascNappsInvitationLetterSlides: Slide[] = [
  {
    id: 'asc-napps-01',
    layout: 'title',
    title: 'Invitation to Award Presentation',
    subtitle:
      'Accessible Publishers Limited, Accessible Summer Competition, 18 September 2026',
    notes:
      'Plain invitation letter to the NAPPS Oyo State Chairman. Export as DOCX from Document view.',
  },
  {
    id: 'asc-napps-02',
    layout: 'bullets',
    chapter: 'Letter',
    title: 'Invitation Letter',
    icon: 'FileText',
    bullets: [
      'Accessible Publishers Limited',
      'The Knowledge Hub, 121/123, Obafemi Awolowo Way',
      'Oke-Ado, Ibadan, Oyo State',
      'www.accessiblepublishers.com',
      '',
      '15th September 2026',
      '',
      'The Chairman,',
      'National Association of Proprietors of Private Schools (NAPPS),',
      'Oyo State.',
      '',
      'Dear Sir,',
      '',
      'SUBJECT: INVITATION TO AWARD PRESENTATION FOR ACCESSIBLE SUMMER COMPETITION WINNERS',
      '',
      'I write to invite you to the presentation of awards and prizes to the winners of the Accessible Summer Competition.',
      '',
      'Accessible Publishers Limited is an indigenous Nigerian educational publishing company, established in 1996 and headquartered in Ibadan. In marking our thirtieth anniversary, we hosted the Accessible Summer Competition, a national academic programme for Junior Secondary School students, delivered through our SmartEdu Hub digital learning platform. The competition was open to JSS 1 to JSS 3 students across Nigeria, free of charge, with over ₦2.2 million in prizes. The programme has now been concluded, and the awards ceremony will formally recognise the winning students.',
      '',
      'Given your leadership of NAPPS in Oyo State and the important role your members play in private education, we consider your presence at this ceremony both appropriate and valuable. Students from member schools may have participated in the competition, and your attendance would further encourage young learners who have competed with dedication.',
      '',
      'The award presentation will hold as follows:',
      '',
      'Date: Thursday, 18th September 2026',
      'Time: 12:00 noon',
      'Venue: The Knowledge Hub, beside Dove Filling Station, Oke Ado, Ibadan, Oyo State.',
      '',
      'We would be honoured to receive you, together with members of your executive, at this event. Kindly confirm your availability through the contact details below.',
      '',
      'For Further Enquiries:',
      '',
      'Akeredolu Tosin S.',
      'Principal Executive Assistant to the MD/CEO',
      'Phone: +234 803 057 7613',
      'Email: officeofthemd@accessiblepublishers.com',
      '',
      'We thank you for your continued support of quality education in Oyo State, and we look forward to welcoming you.',
      '',
      'Yours faithfully,',
      '',
      '_________________________',
      '(Signature)',
      '',
      'Gbadega Adedapo',
      'MD/CEO',
      'Accessible Publishers Limited',
    ],
    notes:
      'Edit names, dates, or venue details here. Export as DOCX from the toolbar when ready.',
  },
]

export const ascNappsInvitationLetter: PresentationState = {
  slides: ascNappsInvitationLetterSlides,
  currentIndex: 0,
  seedRevision: ASC_NAPPS_INVITATION_SEED_REVISION,
  meta: ASC_NAPPS_INVITATION_META,
}
