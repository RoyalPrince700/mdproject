import { accessibleLogoUrl, watermarkUrl } from '../../lib/documentWatermark'
import {
  hasSmehBranding,
  isSmehProposal,
  letterParagraphs,
  proposalBodySlides,
  proposalSectionNumber,
  sectionBullets,
  sectionTableRows,
} from '../../lib/documentSections'
import { resolveTwoColumnContent } from '../../lib/slideLayout'
import { resolveDocumentFont } from '../../theme/documentTheme'
import type { PresentationMeta, PresentationState, Slide } from '../../types/slide'
import { EditableText } from './EditableText'

interface Props {
  state: PresentationState
  documentId?: string
  activeId?: string
  onSelect: (id: string) => void
  editable?: boolean
  onMetaChange?: (patch: Partial<PresentationMeta>) => void
  onSlideChange?: (slideId: string, patch: Partial<Slide>) => void
  onLetterChange?: (paragraphs: string[]) => void
}

function ProposalCornerLogos() {
  return (
    <div className="doc-corner-logos" aria-hidden="true">
      <img className="doc-corner-logo" src={accessibleLogoUrl} alt="" />
    </div>
  )
}

function DocTable({
  headers,
  rows,
  variant = 'blue',
  editable,
  onCellChange,
}: {
  headers: [string, string]
  rows: Array<[string, string]>
  variant?: 'blue' | 'orange'
  editable?: boolean
  onCellChange?: (rowIndex: number, col: 0 | 1, value: string) => void
}) {
  if (!rows.length && !editable) return null
  const displayRows = rows.length ? rows : editable ? [['', '']] : []

  return (
    <table className={`doc-table doc-table--${variant}`}>
      <thead>
        <tr>
          <th>{headers[0]}</th>
          <th>{headers[1]}</th>
        </tr>
      </thead>
      <tbody>
        {displayRows.map(([left, right], index) => (
          <tr key={index}>
            <td>
              {editable && onCellChange ? (
                <EditableText
                  value={left}
                  onChange={(value) => onCellChange(index, 0, value)}
                  tag="span"
                  placeholder="—"
                />
              ) : (
                left
              )}
            </td>
            <td>
              {editable && onCellChange ? (
                <EditableText
                  value={right}
                  onChange={(value) => onCellChange(index, 1, value)}
                  tag="span"
                  placeholder="—"
                />
              ) : (
                right
              )}
            </td>
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
  showCornerLogos,
  editable,
  onSlideChange,
}: {
  slide: Slide
  slides: Slide[]
  activeId?: string
  onSelect: (id: string) => void
  showCornerLogos?: boolean
  editable?: boolean
  onSlideChange?: (slideId: string, patch: Partial<Slide>) => void
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
  const canEdit = editable && !!onSlideChange

  const handleTableCell = (rowIndex: number, col: 0 | 1, value: string) => {
    if (!onSlideChange) return

    if (slide.layout === 'twoColumn') {
      const left = columns?.leftBullets.map((b) => b.replace(/^\[[^\]]+\]\s*/, '')) ?? []
      const right = columns?.rightBullets.map((b) => b.replace(/^\[[^\]]+\]\s*/, '')) ?? []
      while (left.length <= rowIndex) left.push('')
      while (right.length <= rowIndex) right.push('')
      if (col === 0) left[rowIndex] = value
      else right[rowIndex] = value
      onSlideChange(slide.id, { leftBullets: left, rightBullets: right })
      return
    }

    if (slide.layout === 'framework' || (slide.frameworkBlocks?.length ?? 0) > 0) {
      const blocks = [...(slide.frameworkBlocks ?? [{ label: '', text: '' }])]
      while (blocks.length <= rowIndex) blocks.push({ label: '', text: '' })
      if (col === 0) blocks[rowIndex] = { ...blocks[rowIndex], label: value }
      else blocks[rowIndex] = { ...blocks[rowIndex], text: value }
      onSlideChange(slide.id, { frameworkBlocks: blocks })
    }
  }

  const displayBullets = bullets.length ? bullets : canEdit ? [''] : []

  return (
    <section
      id={`doc-${slide.id}`}
      className={`doc-section doc-page-sheet${isActive ? ' doc-section--active' : ''}${
        canEdit ? ' doc-section--editable' : ''
      }`}
      onClick={() => onSelect(slide.id)}
    >
      {showCornerLogos ? <ProposalCornerLogos /> : null}
      <h2 className="doc-section__heading">
        {sectionNumber}.{' '}
        {canEdit ? (
          <EditableText
            value={slide.title.replace(/\n/g, ' ')}
            onChange={(title) => onSlideChange(slide.id, { title })}
            onFocusSelect={() => onSelect(slide.id)}
            tag="span"
            placeholder="Section title"
          />
        ) : (
          slide.title.replace(/\n/g, ' ')
        )}
      </h2>
      {slide.subtitle?.trim() || canEdit ? (
        canEdit ? (
          <EditableText
            className="doc-section__subtitle"
            value={slide.subtitle ?? ''}
            onChange={(subtitle) => onSlideChange(slide.id, { subtitle })}
            onFocusSelect={() => onSelect(slide.id)}
            tag="p"
            multiline
            placeholder="Section subtitle"
          />
        ) : (
          <p className="doc-section__subtitle">{slide.subtitle}</p>
        )
      ) : null}
      {tableRows.length || (canEdit && (slide.layout === 'twoColumn' || slide.layout === 'framework')) ? (
        <DocTable
          headers={tableHeaders}
          rows={tableRows}
          variant={slide.layout === 'twoColumn' ? 'orange' : 'blue'}
          editable={canEdit}
          onCellChange={handleTableCell}
        />
      ) : null}
      {displayBullets.length ? (
        <div className="doc-copy">
          {displayBullets.map((item, index) =>
            canEdit ? (
              <EditableText
                key={index}
                value={item}
                onChange={(text) => {
                  const next = [...displayBullets]
                  next[index] = text
                  onSlideChange(slide.id, { bullets: next })
                }}
                onFocusSelect={() => onSelect(slide.id)}
                tag="p"
                multiline
                placeholder="Paragraph"
              />
            ) : (
              <p key={index}>{item}</p>
            ),
          )}
        </div>
      ) : null}
      {slide.footer?.trim() || canEdit ? (
        <div className="doc-signoff">
          {canEdit ? (
            <EditableText
              value={slide.footer ?? ''}
              onChange={(footer) => onSlideChange(slide.id, { footer })}
              onFocusSelect={() => onSelect(slide.id)}
              tag="p"
              multiline
              placeholder="Sign-off / footer"
            />
          ) : (
            slide.footer
              ?.split('\n')
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, index) => <p key={index}>{line}</p>)
          )}
        </div>
      ) : null}
    </section>
  )
}

export function DocumentCanvas({
  state,
  documentId,
  activeId,
  onSelect,
  editable = false,
  onMetaChange,
  onSlideChange,
  onLetterChange,
}: Props) {
  const { meta, slides } = state
  const font = resolveDocumentFont(meta)
  const smehProposal = isSmehProposal(meta.kind)
  const smehBranding = hasSmehBranding(state, documentId)
  const titleSlide = slides.find((slide) => slide.layout === 'title')
  const subject =
    meta.subject?.trim() ||
    titleSlide?.title.replace(/\n/g, ' ').trim() ||
    (smehProposal ? 'Proposal' : 'Document')
  const letter = smehProposal ? letterParagraphs(state) : []
  const bodySlides = proposalBodySlides(slides)
  const canEdit = editable && !!onMetaChange && !!onSlideChange

  return (
    <article
      className={`doc-page${smehBranding ? '' : ' doc-page--plain'}${canEdit ? ' doc-page--editable' : ''}`}
      style={{
        fontFamily: `"${font}", sans-serif`,
        ...(smehBranding
          ? { ['--doc-watermark' as string]: `url(${watermarkUrl})` }
          : {}),
      }}
    >
      <section
        id="doc-__cover"
        className={`doc-cover doc-page-sheet${activeId === '__cover' ? ' doc-section--active' : ''}${smehProposal ? '' : ' doc-cover--plain'}`}
        onClick={() => onSelect('__cover')}
      >
        {smehBranding ? <ProposalCornerLogos /> : null}
        {smehProposal ? (
          <>
            <div className="doc-cover__banner">
              <p className="doc-cover__brand">SMART EDU HUB</p>
              <p className="doc-cover__tagline">
                SmartEduHub Accessible Digital Platform (SMEH)
              </p>
              {canEdit ? (
                <EditableText
                  className="doc-cover__site"
                  value={meta.website || 'www.smarteduhub.ng'}
                  onChange={(website) => onMetaChange({ website })}
                  onFocusSelect={() => onSelect('__cover')}
                  tag="p"
                />
              ) : (
                <p className="doc-cover__site">{meta.website || 'www.smarteduhub.ng'}</p>
              )}
            </div>
            <div className="doc-cover__body">
              <p className="doc-cover__proposal-label">PROPOSAL FOR</p>
              {canEdit ? (
                <EditableText
                  className="doc-cover__title"
                  value={subject.toUpperCase()}
                  onChange={(value) => onMetaChange({ subject: value })}
                  onFocusSelect={() => onSelect('__cover')}
                  tag="h1"
                  multiline
                />
              ) : (
                <h1 className="doc-cover__title">{subject.toUpperCase()}</h1>
              )}
              <p className="doc-cover__subtitle">
                (Learning Management &amp; School Management System)
              </p>
              <div className="doc-cover__parties">
                <div>
                  <p className="doc-cover__party-label">SUBMITTED TO</p>
                  {canEdit ? (
                    <>
                      <EditableText
                        value={meta.recipient ?? ''}
                        onChange={(recipient) => onMetaChange({ recipient })}
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        placeholder="Recipient name"
                      />
                      <EditableText
                        value={meta.recipientOrg ?? ''}
                        onChange={(recipientOrg) => onMetaChange({ recipientOrg })}
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        placeholder="Organisation"
                      />
                      <EditableText
                        value={meta.recipientAddress ?? ''}
                        onChange={(recipientAddress) =>
                          onMetaChange({ recipientAddress })
                        }
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        multiline
                        placeholder="Address"
                      />
                    </>
                  ) : (
                    <>
                      <p>{meta.recipient}</p>
                      <p>{meta.recipientOrg}</p>
                      <p>{meta.recipientAddress}</p>
                    </>
                  )}
                </div>
                <div>
                  <p className="doc-cover__party-label">SUBMITTED BY</p>
                  {canEdit ? (
                    <>
                      <EditableText
                        value={meta.brand}
                        onChange={(brand) => onMetaChange({ brand })}
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        placeholder="Organisation"
                      />
                      <EditableText
                        value={meta.date}
                        onChange={(date) => onMetaChange({ date })}
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        placeholder="Date"
                      />
                    </>
                  ) : (
                    <>
                      <p>{meta.brand}</p>
                      <p>Date: {meta.date}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="doc-cover__footer-band" />
          </>
        ) : (
          <div className="doc-cover__body doc-cover__body--plain">
            {canEdit ? (
              <>
                <EditableText
                  className="doc-cover__title doc-cover__title--plain"
                  value={subject}
                  onChange={(value) => {
                    onMetaChange({ subject: value })
                    if (titleSlide) {
                      onSlideChange(titleSlide.id, { title: value })
                    }
                  }}
                  onFocusSelect={() => onSelect('__cover')}
                  tag="h1"
                  multiline
                />
                {titleSlide ? (
                  <EditableText
                    className="doc-cover__subtitle"
                    value={titleSlide.subtitle ?? ''}
                    onChange={(subtitle) =>
                      onSlideChange(titleSlide.id, { subtitle })
                    }
                    onFocusSelect={() => onSelect('__cover')}
                    tag="p"
                    multiline
                    placeholder="Subtitle"
                  />
                ) : null}
                <div className="doc-cover__plain-meta">
                  <EditableText
                    value={meta.brand}
                    onChange={(brand) => onMetaChange({ brand })}
                    onFocusSelect={() => onSelect('__cover')}
                    tag="span"
                    placeholder="Organisation"
                  />
                  <span aria-hidden="true"> · </span>
                  <EditableText
                    value={meta.author}
                    onChange={(author) => onMetaChange({ author })}
                    onFocusSelect={() => onSelect('__cover')}
                    tag="span"
                    placeholder="Author"
                  />
                  <span aria-hidden="true"> · </span>
                  <EditableText
                    value={meta.date}
                    onChange={(date) => onMetaChange({ date })}
                    onFocusSelect={() => onSelect('__cover')}
                    tag="span"
                    placeholder="Date"
                  />
                </div>
              </>
            ) : (
              <>
                <h1 className="doc-cover__title doc-cover__title--plain">{subject}</h1>
                {titleSlide?.subtitle?.trim() ? (
                  <p className="doc-cover__subtitle">{titleSlide.subtitle}</p>
                ) : null}
                <p className="doc-cover__plain-meta">
                  {[meta.brand, meta.author, meta.date].filter(Boolean).join(' · ')}
                </p>
              </>
            )}
          </div>
        )}
      </section>

      {letter.length || (canEdit && onLetterChange) ? (
        <section
          id="doc-__letter"
          className={`doc-letter doc-page-sheet${activeId === '__letter' ? ' doc-section--active' : ''}`}
          onClick={() => onSelect('__letter')}
        >
          {smehBranding ? <ProposalCornerLogos /> : null}
          {canEdit ? (
            <>
              <EditableText
                className="doc-letter__date"
                value={meta.letterDate || meta.date}
                onChange={(letterDate) => onMetaChange({ letterDate })}
                onFocusSelect={() => onSelect('__letter')}
                tag="p"
              />
              <EditableText
                value={`${meta.recipient ?? ''},`}
                onChange={(recipient) => onMetaChange({ recipient })}
                onFocusSelect={() => onSelect('__letter')}
                tag="p"
              />
              <EditableText
                value={meta.recipientOrg ?? ''}
                onChange={(recipientOrg) => onMetaChange({ recipientOrg })}
                onFocusSelect={() => onSelect('__letter')}
                tag="p"
              />
              <EditableText
                value={meta.recipientAddress ?? ''}
                onChange={(recipientAddress) => onMetaChange({ recipientAddress })}
                onFocusSelect={() => onSelect('__letter')}
                tag="p"
                multiline
              />
              <p className="doc-letter__salutation">Dear Sir,</p>
              <EditableText
                className="doc-letter__subject"
                value={subject.toUpperCase()}
                onChange={(value) => onMetaChange({ subject: value })}
                onFocusSelect={() => onSelect('__letter')}
                tag="p"
              />
              {(letter.length ? letter : ['']).map((paragraph, index) => (
                <EditableText
                  key={index}
                  className="doc-letter__paragraph"
                  value={paragraph}
                  onChange={(text) => {
                    const next = letter.length ? [...letter] : ['']
                    next[index] = text
                    onLetterChange?.(next)
                  }}
                  onFocusSelect={() => onSelect('__letter')}
                  tag="p"
                  multiline
                  placeholder="Letter paragraph"
                />
              ))}
              {(meta.signOff ?? ['Yours faithfully,', meta.author]).map((line, index) => (
                <EditableText
                  key={index}
                  className={line.startsWith('Yours') ? 'doc-letter__signoff' : undefined}
                  value={line}
                  onChange={(text) => {
                    const next = [...(meta.signOff ?? ['Yours faithfully,', meta.author])]
                    next[index] = text
                    onMetaChange({ signOff: next })
                  }}
                  onFocusSelect={() => onSelect('__letter')}
                  tag="p"
                />
              ))}
            </>
          ) : (
            <>
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
            </>
          )}
        </section>
      ) : null}

      {bodySlides.map((slide) => (
        <SectionBlock
          key={slide.id}
          slide={slide}
          slides={slides}
          activeId={activeId}
          onSelect={onSelect}
          showCornerLogos={smehBranding}
          editable={canEdit}
          onSlideChange={onSlideChange}
        />
      ))}
    </article>
  )
}
