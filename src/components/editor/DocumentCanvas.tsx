import { watermarkUrl } from '../../lib/documentWatermark'
import {
  isSmehProposal,
  letterParagraphs,
  proposalBodySlides,
  proposalSectionNumber,
  sectionBullets,
  sectionTableRows,
} from '../../lib/documentSections'
import { resolveTwoColumnContent } from '../../lib/slideLayout'
import { resolveDocumentFont } from '../../theme/documentTheme'
import type { PresentationState, Slide } from '../../types/slide'

interface Props {
  state: PresentationState
  activeId?: string
  onSelect: (id: string) => void
}

function DocTable({
  headers,
  rows,
  variant = 'blue',
}: {
  headers: [string, string]
  rows: Array<[string, string]>
  variant?: 'blue' | 'orange'
}) {
  if (!rows.length) return null
  return (
    <table className={`doc-table doc-table--${variant}`}>
      <thead>
        <tr>
          <th>{headers[0]}</th>
          <th>{headers[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([left, right], index) => (
          <tr key={index}>
            <td>{left}</td>
            <td>{right}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function SectionBlock({
  slide,
  slides,
  activeId,
  onSelect,
}: {
  slide: Slide
  slides: Slide[]
  activeId?: string
  onSelect: (id: string) => void
}) {
  const sectionNumber = proposalSectionNumber(slides, slide.id)
  const tableRows = sectionTableRows(slide)
  const bullets = sectionBullets(slide)
  const columns = slide.layout === 'twoColumn' ? resolveTwoColumnContent(slide) : null
  const tableHeaders: [string, string] = columns
    ? [columns.leftTitle || 'Item', columns.rightTitle || 'Detail']
    : slide.layout === 'framework' || (slide.frameworkBlocks?.length ?? 0) > 0
      ? ['Item', 'Detail']
      : ['Column 1', 'Column 2']
  const isActive = activeId === slide.id

  return (
    <section
      id={`doc-${slide.id}`}
      className={`doc-section doc-page-sheet${isActive ? ' doc-section--active' : ''}`}
      onClick={() => onSelect(slide.id)}
    >
      <h2 className="doc-section__heading">
        {sectionNumber}. {slide.title.replace(/\n/g, ' ')}
      </h2>
      {slide.subtitle?.trim() ? (
        <p className="doc-section__subtitle">{slide.subtitle}</p>
      ) : null}
      {tableRows.length ? (
        <DocTable
          headers={tableHeaders}
          rows={tableRows}
          variant={slide.layout === 'twoColumn' ? 'orange' : 'blue'}
        />
      ) : null}
      {bullets.length ? (
        <div className="doc-copy">
          {bullets.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : null}
      {slide.footer?.trim() ? (
        <div className="doc-signoff">
          {slide.footer
            .split('\n')
            .map((line) => line.trim())
            .filter(Boolean)
            .map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </div>
      ) : null}
    </section>
  )
}

export function DocumentCanvas({ state, activeId, onSelect }: Props) {
  const { meta, slides } = state
  const font = resolveDocumentFont(meta)
  const smehProposal = isSmehProposal(meta.kind)
  const titleSlide = slides.find((slide) => slide.layout === 'title')
  const subject =
    meta.subject?.trim() ||
    titleSlide?.title.replace(/\n/g, ' ').trim() ||
    (smehProposal ? 'Proposal' : 'Document')
  const letter = smehProposal ? letterParagraphs(state) : []
  const bodySlides = proposalBodySlides(slides)

  return (
    <article
      className={`doc-page${smehProposal ? '' : ' doc-page--plain'}`}
      style={{
        fontFamily: `"${font}", sans-serif`,
        ...(smehProposal
          ? { ['--doc-watermark' as string]: `url(${watermarkUrl})` }
          : {}),
      }}
    >
      <section
        id="doc-__cover"
        className={`doc-cover doc-page-sheet${activeId === '__cover' ? ' doc-section--active' : ''}${smehProposal ? '' : ' doc-cover--plain'}`}
        onClick={() => onSelect('__cover')}
      >
        {smehProposal ? (
          <>
            <div className="doc-cover__banner">
              <p className="doc-cover__brand">SMART EDU HUB</p>
              <p className="doc-cover__tagline">
                SmartEduHub Accessible Digital Platform (SMEH)
              </p>
              <p className="doc-cover__site">{meta.website || 'www.smarteduhub.ng'}</p>
            </div>
            <div className="doc-cover__body">
              <p className="doc-cover__proposal-label">PROPOSAL FOR</p>
              <h1 className="doc-cover__title">{subject.toUpperCase()}</h1>
              <p className="doc-cover__subtitle">
                (Learning Management &amp; School Management System)
              </p>
              <div className="doc-cover__parties">
                <div>
                  <p className="doc-cover__party-label">SUBMITTED TO</p>
                  <p>{meta.recipient}</p>
                  <p>{meta.recipientOrg}</p>
                  <p>{meta.recipientAddress}</p>
                </div>
                <div>
                  <p className="doc-cover__party-label">SUBMITTED BY</p>
                  <p>{meta.brand}</p>
                  <p>Date: {meta.date}</p>
                </div>
              </div>
            </div>
            <div className="doc-cover__footer-band" />
          </>
        ) : (
          <div className="doc-cover__body doc-cover__body--plain">
            <h1 className="doc-cover__title doc-cover__title--plain">{subject}</h1>
            {titleSlide?.subtitle?.trim() ? (
              <p className="doc-cover__subtitle">{titleSlide.subtitle}</p>
            ) : null}
            <p className="doc-cover__plain-meta">
              {[meta.brand, meta.author, meta.date].filter(Boolean).join(' · ')}
            </p>
          </div>
        )}
      </section>

      {letter.length ? (
        <section
          id="doc-__letter"
          className={`doc-letter doc-page-sheet${activeId === '__letter' ? ' doc-section--active' : ''}`}
          onClick={() => onSelect('__letter')}
        >
          <p className="doc-letter__date">{meta.letterDate || meta.date}</p>
          <p>{meta.recipient},</p>
          <p>{meta.recipientOrg}</p>
          <p>{meta.recipientAddress}</p>
          <p className="doc-letter__salutation">Dear Sir,</p>
          <p className="doc-letter__subject">{subject.toUpperCase()}</p>
          {letter.map((paragraph, index) => (
            <p key={index} className="doc-letter__paragraph">
              {paragraph}
            </p>
          ))}
          {(meta.signOff ?? []).map((line, index) => (
            <p
              key={index}
              className={
                line.startsWith('Yours') ? 'doc-letter__signoff' : undefined
              }
            >
              {line}
            </p>
          ))}
        </section>
      ) : null}

      {bodySlides.map((slide) => (
        <SectionBlock
          key={slide.id}
          slide={slide}
          slides={slides}
          activeId={activeId}
          onSelect={onSelect}
        />
      ))}

    </article>
  )
}
