import type { PresentationState, Slide } from '../types/slide'

export const TRIFONE_REFUND_DOCUMENT_ID = 'trifone-power-bank-refund-letter'
export const TRIFONE_REFUND_DOCUMENT_TITLE =
  'Trifone Power Bank Refund Request Letter'
export const TRIFONE_REFUND_SEED_REVISION = 1

export const TRIFONE_REFUND_META: PresentationState['meta'] = {
  brand: '',
  author: 'Ologundudu Joseph Adesunkanmi',
  degree: '',
  date: 'August 2026',
  letterDate: '27th August 2026',
  kind: 'document',
  editorView: 'document',
  documentFont: 'Arial',
  recipient: 'The Head',
  recipientOrg: 'Trifone',
  subject: 'Request for Refund of ₦13,000 — Power Bank (Product Unavailable)',
}

export const trifoneRefundLetterSlides: Slide[] = [
  {
    id: 'trifone-01',
    layout: 'title',
    title: 'Request for Refund — Power Bank',
    subtitle: 'Trifone · ₦13,000 · Payment dated 1 July 2026',
    notes: 'Plain refund request letter to the Head of Trifone.',
  },
  {
    id: 'trifone-02',
    layout: 'bullets',
    chapter: 'Letter',
    title: 'Refund Request Letter',
    icon: 'FileText',
    bullets: [
      '27th August 2026',
      '',
      'The Head,',
      'Trifone,',
      '',
      'Dear Sir/Madam,',
      '',
      'SUBJECT: REQUEST FOR REFUND OF ₦13,000 — POWER BANK (PRODUCT UNAVAILABLE)',
      '',
      'I write to respectfully request a refund of the sum of Thirteen Thousand Naira (₦13,000), which I paid on 1st July 2026 for the purchase of a power bank.',
      '',
      'The payment was made to Mr. Adejare Adeyinka, who received the funds on behalf of Trifone. To date, the power bank has not been supplied to me as a result of the unavailability of the product.',
      '',
      'In view of the above, I kindly request that the full amount of ₦13,000 be refunded to me at your earliest convenience.',
      '',
      'Thank you for your prompt attention to this matter.',
      '',
      'Yours faithfully,',
      '',
      'Ologundudu Joseph Adesunkanmi',
      '',
      '_________________________',
      '(Signature)',
      '',
      'Acknowledged by:',
      '',
      'Adejare Adeyinka',
      '(Payment Recipient)',
      '',
      '_________________________',
      '(Signature)',
    ],
    notes:
      'Edit dates, amounts, or names here. Export as DOCX from the toolbar when ready.',
  },
]

export const trifoneRefundLetter: PresentationState = {
  slides: trifoneRefundLetterSlides,
  currentIndex: 0,
  seedRevision: TRIFONE_REFUND_SEED_REVISION,
  meta: TRIFONE_REFUND_META,
}
