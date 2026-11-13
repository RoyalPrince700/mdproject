import type { CSSProperties } from 'react'
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
import {
  groupCvDisplay,
  isCvHeaderSlide,
  isCvRoleLine,
  parseCvRoleLine,
  slideHasCvEntries,
} from '../../lib/cvLayout'
import { resolveTwoColumnContent } from '../../lib/slideLayout'
import {
  DEFAULT_PROPOSAL_SENDER_ADDRESS,
  DEFAULT_PROPOSAL_SENDER_ORG,
  proposalSenderLines,
  resolveDocumentFont,
  smehCoverCssVars,
} from '../../theme/documentTheme'
import type { PresentationMeta, PresentationState, Slide } from '../../types/slide'
import { EditableText } from './EditableText'
import { InlineFormattedText } from './InlineFormattedText'

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
  headers: string[]
  rows: string[][]
  variant?: 'blue' | 'orange'
  editable?: boolean
  onCellChange?: (rowIndex: number, col: number, value: string) => void
}) {
  if (!rows.length && !editable) return null
  const columnCount = Math.max(headers.length, rows[0]?.length ?? 0, 2)
  const displayRows = rows.length
    ? rows
    : editable
      ? [Array.from({ length: columnCount }, () => '')]
      : []

  return (
    <table
      className={`doc-table doc-table--${variant}${
        columnCount === 3 ? ' doc-table--cols-3' : ''
      }`}
    >
      <thead>
        <tr>
          {Array.from({ length: columnCount }, (_, index) => (
            <th key={index}>{headers[index] ?? ''}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {displayRows.map((row, index) => (
          <tr key={index}>
            {Array.from({ length: columnCount }, (_, col) => {
              const value = row[col] ?? ''
              return (
                <td key={col}>
                  {editable && onCellChange ? (
                    <EditableText
                      value={value}
                      onChange={(next) => onCellChange(index, col, next)}
                      tag="span"
                      placeholder="—"
                    />
                  ) : (
                    <InlineFormattedText text={value} />
                  )}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function CvBulletEditor({
  bullets,
  slideId,
  onSelect,
  onSlideChange,
  header = false,
}: {
  bullets: string[]
  slideId: string
  onSelect: (id: string) => void
  onSlideChange: (slideId: string, patch: Partial<Slide>) => void
  header?: boolean
}) {
  const lines = bullets.length ? bullets : ['']
  const setLine = (index: number, text: string) => {
    const next = [...lines]
    next[index] = text
    onSlideChange(slideId, { bullets: next })
  }

  if (header) {
    return (
      <div className="cv-edit-list">
        {lines.map((item, index) => (
          <EditableText
            key={index}
            className="cv-contact"
            value={item}
            onChange={(text) => setLine(index, text)}
            onFocusSelect={() => onSelect(slideId)}
            tag="p"
            placeholder="Address | email | phone"
          />
        ))}
      </div>
    )
  }

  if (!lines.some((item) => isCvRoleLine(item))) {
    if (lines.length === 1) {
      return (
        <EditableText
          className="cv-profile"
          value={lines[0]}
          onChange={(text) => setLine(0, text)}
          onFocusSelect={() => onSelect(slideId)}
          tag="p"
          multiline
          placeholder="Profile"
        />
      )
    }
    return (
      <ul className="cv-list">
        {lines.map((item, index) => (
          <li key={index}>
            <EditableText
              value={item}
              onChange={(text) => setLine(index, text)}
              onFocusSelect={() => onSelect(slideId)}
              tag="span"
              placeholder="Skill"
            />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="cv-entries">
      {lines.map((item, index) => {
        const role = parseCvRoleLine(item)
        if (role) {
          return (
            <p key={index} className="cv-role">
              <EditableText
                value={role.role}
                onChange={(nextRole) =>
                  setLine(
                    index,
                    role.dates ? `**${nextRole}** | ${role.dates}` : `**${nextRole}**`,
                  )
                }
                onFocusSelect={() => onSelect(slideId)}
                tag="span"
                placeholder="Role or qualification"
              />
              <EditableText
                className="cv-dates"
                value={role.dates ?? ''}
                onChange={(dates) => setLine(index, `**${role.role}** | ${dates}`)}
                onFocusSelect={() => onSelect(slideId)}
                tag="span"
                placeholder="Dates"
              />
            </p>
          )
        }
        if (index > 0 && isCvRoleLine(lines[index - 1] ?? '')) {
          return (
            <EditableText
              key={index}
              className="cv-org"
              value={item}
              onChange={(text) => setLine(index, text)}
              onFocusSelect={() => onSelect(slideId)}
              tag="p"
              placeholder="Organisation"
            />
          )
        }
        return (
          <ul key={index} className="cv-list">
            <li>
              <EditableText
                value={item}
                onChange={(text) => setLine(index, text)}
                onFocusSelect={() => onSelect(slideId)}
                tag="span"
                placeholder="Duty or detail"
              />
            </li>
          </ul>
        )
      })}
    </div>
  )
}

function CvSectionBlock({
  slide,
  slides,
  activeId,
  onSelect,
  editable,
  onSlideChange,
}: {
  slide: Slide
  slides: Slide[]
  activeId?: string
  onSelect: (id: string) => void
  editable?: boolean
  onSlideChange?: (slideId: string, patch: Partial<Slide>) => void
}) {
  const index = slides.findIndex((item) => item.id === slide.id)
  const isActive = activeId === slide.id
  const canEdit = editable && !!onSlideChange
  const bullets = sectionBullets(slide)
  const header = isCvHeaderSlide(slide, index)

  return (
    <section
      id={`doc-${slide.id}`}
      className={`doc-section cv-section${isActive ? ' doc-section--active' : ''}${
        canEdit ? ' doc-section--editable' : ''
      }${header ? ' cv-section--header' : ''}`}
      onClick={() => onSelect(slide.id)}
    >
      {header ? (
        <>
          {canEdit ? (
            <EditableText
              className="cv-name"
              value={slide.title}
              onChange={(title) => onSlideChange(slide.id, { title })}
              onFocusSelect={() => onSelect(slide.id)}
              tag="h1"
              placeholder="Full name"
            />
          ) : (
            <h1 className="cv-name">{slide.title}</h1>
          )}
          {canEdit ? (
            <CvBulletEditor
              bullets={bullets}
              slideId={slide.id}
              onSelect={onSelect}
              onSlideChange={onSlideChange}
              header
            />
          ) : (
            bullets.map((line) => (
              <p key={line} className="cv-contact">
                {line}
              </p>
            ))
          )}
        </>
      ) : (
        <>
          <h2 className="cv-heading">
            {canEdit ? (
              <EditableText
                value={slide.title.replace(/\n/g, ' ')}
                onChange={(title) => onSlideChange(slide.id, { title })}
                onFocusSelect={() => onSelect(slide.id)}
                tag="span"
                placeholder="Section heading"
              />
            ) : (
              slide.title.replace(/\n/g, ' ')
            )}
          </h2>
          {canEdit ? (
            <CvBulletEditor
              bullets={bullets}
              slideId={slide.id}
              onSelect={onSelect}
              onSlideChange={onSlideChange}
            />
          ) : slideHasCvEntries(slide) ? (
            <div className="cv-entries">
              {groupCvDisplay(bullets).map((block, lineIndex) => {
                if (block.kind === 'role') {
                  return (
                    <p key={lineIndex} className="cv-role">
                      <span>{block.role}</span>
                      {block.dates ? <span className="cv-dates">{block.dates}</span> : null}
                    </p>
                  )
                }
                if (block.kind === 'org') {
                  return (
                    <p key={lineIndex} className="cv-org">
                      {block.text}
                    </p>
                  )
                }
                return (
                  <ul key={lineIndex} className="cv-list">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              })}
            </div>
          ) : bullets.length === 1 ? (
            <p className="cv-profile">{bullets[0]}</p>
          ) : (
            <ul className="cv-list">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
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
  numbered = true,
}: {
  slide: Slide
  slides: Slide[]
  activeId?: string
  onSelect: (id: string) => void
  showCornerLogos?: boolean
  editable?: boolean
  onSlideChange?: (slideId: string, patch: Partial<Slide>) => void
  numbered?: boolean
}) {
  const sectionNumber = proposalSectionNumber(slides, slide.id)
  const tableRows = sectionTableRows(slide)
  const bullets = sectionBullets(slide)
  const columns = slide.layout === 'twoColumn' ? resolveTwoColumnContent(slide) : null
  const hasMiddle = Boolean(slide.middleTitle?.trim() || slide.middleBullets?.length)
  const tableHeaders: string[] = columns
    ? hasMiddle
      ? [
          columns.leftTitle || 'Page',
          slide.middleTitle || 'Current title',
          columns.rightTitle || 'Recommended title',
        ]
      : [columns.leftTitle || 'Item', columns.rightTitle || 'Detail']
    : slide.layout === 'framework' || (slide.frameworkBlocks?.length ?? 0) > 0
      ? ['Item', 'Detail']
      : ['Column 1', 'Column 2']
  const isActive = activeId === slide.id
  const canEdit = editable && !!onSlideChange

  const handleTableCell = (rowIndex: number, col: number, value: string) => {
    if (!onSlideChange) return

    if (slide.layout === 'twoColumn') {
      const left = columns?.leftBullets.map((b) => b.replace(/^\[[^\]]+\]\s*/, '')) ?? []
      const middle = (slide.middleBullets ?? []).map((b) => b.replace(/^\[[^\]]+\]\s*/, ''))
      const right = columns?.rightBullets.map((b) => b.replace(/^\[[^\]]+\]\s*/, '')) ?? []
      while (left.length <= rowIndex) left.push('')
      while (right.length <= rowIndex) right.push('')
      if (hasMiddle) {
        while (middle.length <= rowIndex) middle.push('')
        if (col === 0) left[rowIndex] = value
        else if (col === 1) middle[rowIndex] = value
        else right[rowIndex] = value
        onSlideChange(slide.id, {
          leftBullets: left,
          middleBullets: middle,
          rightBullets: right,
        })
        return
      }
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
        {numbered ? `${sectionNumber}. ` : null}
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
      {slide.imageSrc ? (
        <figure className="doc-figure">
          <img src={slide.imageSrc} alt={slide.imageAlt || ''} />
        </figure>
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
              <p key={index}>
                <InlineFormattedText text={item} />
              </p>
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
      className={`doc-page${smehBranding ? '' : ' doc-page--plain'}${
        meta.documentLayout === 'cv' ? ' doc-page--cv' : ''
      }${canEdit ? ' doc-page--editable' : ''}`}
      style={{
        fontFamily: `"${font}", sans-serif`,
        ...(smehBranding
          ? { ['--doc-watermark' as string]: `url(${watermarkUrl})` }
          : {}),
      }}
    >
      {!meta.omitCoverPage ? (
      <section
        id="doc-__cover"
        className={`doc-cover doc-page-sheet${activeId === '__cover' ? ' doc-section--active' : ''}${smehProposal ? ' doc-cover--smeh' : ' doc-cover--plain'}`}
        style={smehProposal ? (smehCoverCssVars() as CSSProperties) : undefined}
        onClick={() => onSelect('__cover')}
      >
        {smehBranding ? <ProposalCornerLogos /> : null}
        {smehProposal ? (
          <>
            <div className="doc-cover__banner">
              <p className="doc-cover__brand">SMART EDU HUB</p>
              <p className="doc-cover__tagline">
                Smart Edu Hub Accessible Digital Platform (SMEH)
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
                        className="doc-cover__party-text"
                        value={meta.recipient ?? ''}
                        onChange={(recipient) => onMetaChange({ recipient })}
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        placeholder="Recipient name"
                      />
                      <EditableText
                        className="doc-cover__party-text"
                        value={meta.recipientOrg ?? ''}
                        onChange={(recipientOrg) => onMetaChange({ recipientOrg })}
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        placeholder="Organisation"
                      />
                      <EditableText
                        className="doc-cover__party-text"
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
                      <p className="doc-cover__party-text">{meta.recipient}</p>
                      <p className="doc-cover__party-text">{meta.recipientOrg}</p>
                      <p className="doc-cover__party-text">{meta.recipientAddress}</p>
                    </>
                  )}
                </div>
                <div>
                  <p className="doc-cover__party-label">SUBMITTED BY</p>
                  {canEdit ? (
                    <>
                      <EditableText
                        className="doc-cover__party-text"
                        value={meta.brand || DEFAULT_PROPOSAL_SENDER_ORG}
                        onChange={(brand) => onMetaChange({ brand })}
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        placeholder="Organisation"
                      />
                      <EditableText
                        className="doc-cover__party-text"
                        value={
                          meta.senderAddress || DEFAULT_PROPOSAL_SENDER_ADDRESS
                        }
                        onChange={(senderAddress) => onMetaChange({ senderAddress })}
                        onFocusSelect={() => onSelect('__cover')}
                        tag="p"
                        multiline
                        placeholder="Address"
                      />
                    </>
                  ) : (
                    proposalSenderLines(meta).map((line) => (
                      <p key={line} className="doc-cover__party-text">
                        {line}
                      </p>
                    ))
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
      ) : null}

      {smehProposal && (letter.length || (canEdit && onLetterChange)) ? (
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
              <EditableText
                className="doc-letter__salutation"
                value={meta.salutation?.trim() || 'Dear Sir,'}
                onChange={(salutation) => onMetaChange({ salutation })}
                onFocusSelect={() => onSelect('__letter')}
                tag="p"
              />
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
                  className={
                    line.startsWith('Yours') ||
                    line.startsWith('Respectfully') ||
                    line.startsWith('For Further')
                      ? 'doc-letter__signoff'
                      : undefined
                  }
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
              <p className="doc-letter__salutation">
                {meta.salutation?.trim() || 'Dear Sir,'}
              </p>
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
                    line.startsWith('Yours') ||
                    line.startsWith('Respectfully') ||
                    line.startsWith('For Further')
                      ? 'doc-letter__signoff'
                      : undefined
                  }
                >
                  {line}
                </p>
              ))}
            </>
          )}
        </section>
      ) : null}

      {bodySlides.map((slide) =>
        meta.documentLayout === 'cv' ? (
          <CvSectionBlock
            key={slide.id}
            slide={slide}
            slides={slides}
            activeId={activeId}
            onSelect={onSelect}
            editable={canEdit}
            onSlideChange={onSlideChange}
          />
        ) : (
          <SectionBlock
            key={slide.id}
            slide={slide}
            slides={slides}
            activeId={activeId}
            onSelect={onSelect}
            showCornerLogos={smehBranding}
            editable={canEdit}
            onSlideChange={onSlideChange}
            numbered={meta.numberedSections !== false}
          />
        ),
      )}
    </article>
  )
}
