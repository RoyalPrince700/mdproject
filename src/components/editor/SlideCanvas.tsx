import {
  getColumnDensity,
  getContentDensity,
  type ContentDensity,
} from '../../lib/contentDensity'
import { parseBulletItem } from '../../lib/slideIcons'
import { resolveTwoColumnContent, titleBylineLines } from '../../lib/slideLayout'
import type { FrameworkBlock, PresentationState, Slide } from '../../types/slide'
import { SlideIcon } from '../icons/SlideIcon'
import { EditableBulletList } from './EditableBulletList'
import { EditableText } from './EditableText'
import { SlideChart } from './SlideChart'
import { SlideLogo } from './SlideLogo'

interface Props {
  slide: Slide
  meta: PresentationState['meta']
  index?: number
  total?: number
  editable?: boolean
  onChange?: (patch: Partial<Slide>) => void
}

function listClass(
  items: string[],
  extra = '',
  densityOverride?: ContentDensity,
) {
  const density =
    densityOverride ??
    getContentDensity(items.map((item) => parseBulletItem(item).text))
  return ['slide__list', `slide__list--${density}`, extra]
    .filter(Boolean)
    .join(' ')
}

function SlideHeading({
  slide,
  centered = false,
  dark = false,
  editable,
  onChange,
}: {
  slide: Slide
  centered?: boolean
  dark?: boolean
  editable?: boolean
  onChange?: (patch: Partial<Slide>) => void
}) {
  return (
    <>
      {slide.chapter || editable ? (
        editable && onChange ? (
          <EditableText
            className={`slide__chapter${dark ? ' slide__chapter--dark' : ''}`}
            value={slide.chapter ?? ''}
            onChange={(chapter) => onChange({ chapter })}
            tag="div"
            placeholder="Chapter tag"
          />
        ) : slide.chapter ? (
          <div className={`slide__chapter${dark ? ' slide__chapter--dark' : ''}`}>
            {slide.chapter}
          </div>
        ) : null
      ) : null}
      <div
        className={
          centered ? 'slide__heading slide__heading--center' : 'slide__heading'
        }
      >
        {slide.icon ? (
          <SlideIcon
            name={slide.icon}
            className="slide__icon"
            size={centered ? 40 : 32}
          />
        ) : null}
        {editable && onChange ? (
          <EditableText
            className="slide__title"
            value={slide.title}
            onChange={(title) => onChange({ title })}
            tag="h1"
            multiline
            placeholder="Title"
          />
        ) : (
          <h1 className="slide__title">{slide.title}</h1>
        )}
      </div>
      {slide.subtitle || editable ? (
        editable && onChange ? (
          <EditableText
            className="slide__subtitle"
            value={slide.subtitle ?? ''}
            onChange={(subtitle) => onChange({ subtitle })}
            tag="p"
            multiline
            placeholder="Subtitle"
          />
        ) : slide.subtitle ? (
          <p className="slide__subtitle">{slide.subtitle}</p>
        ) : null
      ) : null}
    </>
  )
}

function ContentHeader({
  slide,
  editable,
  onChange,
}: {
  slide: Slide
  editable?: boolean
  onChange?: (patch: Partial<Slide>) => void
}) {
  return (
    <header className="slide__header">
      <SlideHeading slide={slide} editable={editable} onChange={onChange} />
    </header>
  )
}

function DeckFooter({
  index,
  total,
  dark = false,
  extra,
  label,
  editable,
  onFooterChange,
}: {
  index?: number
  total?: number
  dark?: boolean
  extra?: string
  label: string
  editable?: boolean
  onFooterChange?: (footer: string) => void
}) {
  const number =
    typeof index === 'number' && typeof total === 'number'
      ? `Slide ${index + 1} of ${total}`
      : extra
  return (
    <footer className={`slide__deck-footer${dark ? ' slide__deck-footer--dark' : ''}`}>
      <span>{label}</span>
      {editable && onFooterChange ? (
        <EditableText
          value={extra ?? number ?? ''}
          onChange={onFooterChange}
          tag="span"
          placeholder="Footer"
        />
      ) : (
        <span>{number ?? extra ?? ''}</span>
      )}
    </footer>
  )
}

function ColumnHeading({
  title,
  editable,
  onChange,
}: {
  title: string
  editable?: boolean
  onChange?: (title: string) => void
}) {
  const parsed = parseBulletItem(title)
  if (editable && onChange) {
    return (
      <EditableText
        className="slide__col-heading"
        value={parsed.text}
        onChange={onChange}
        tag="h3"
        placeholder="Column title"
      />
    )
  }
  return (
    <h3 className="slide__col-heading">
      {parsed.icon ? (
        <span className="slide__col-icon">
          <SlideIcon name={parsed.icon} size={15} />
        </span>
      ) : null}
      <span>{parsed.text}</span>
    </h3>
  )
}

function BulletList({
  items,
  extraClass = '',
  density,
  editable,
  onChange,
}: {
  items: string[]
  extraClass?: string
  density?: ContentDensity
  editable?: boolean
  onChange?: (items: string[]) => void
}) {
  if (editable && onChange) {
    return (
      <EditableBulletList
        items={items.length ? items : ['']}
        onChange={onChange}
        extraClass={extraClass}
        density={density}
      />
    )
  }
  return (
    <ul className={listClass(items, extraClass, density)}>
      {items.map((item, i) => {
        const parsed = parseBulletItem(item)
        return (
          <li key={i} className={parsed.icon ? 'has-icon' : undefined}>
            {parsed.icon ? (
              <SlideIcon
                name={parsed.icon}
                className="slide__bullet-icon"
                size={18}
              />
            ) : null}
            <span>{parsed.text}</span>
          </li>
        )
      })}
    </ul>
  )
}

function FrameworkBlockEditor({
  block,
  onChange,
}: {
  block: FrameworkBlock
  onChange: (block: FrameworkBlock) => void
}) {
  return (
    <>
      <EditableText
        className="slide__block-label"
        value={block.label}
        onChange={(label) => onChange({ ...block, label })}
        tag="div"
        placeholder="Label"
      />
      <EditableText
        className="slide__block-author"
        value={block.author ?? ''}
        onChange={(author) => onChange({ ...block, author })}
        tag="p"
        placeholder="Author (optional)"
      />
      <EditableText
        className="slide__block-text"
        value={block.text}
        onChange={(text) => onChange({ ...block, text })}
        tag="p"
        multiline
        placeholder="Description"
      />
    </>
  )
}

export function SlideCanvas({
  slide,
  meta,
  index,
  total,
  editable = false,
  onChange,
}: Props) {
  const className = `slide slide--${slide.layout}${editable ? ' slide--editable' : ''}`
  const canEdit = editable && !!onChange
  const edit = canEdit ? onChange : undefined
  const applyPatch = (patch: Partial<Slide>) => {
    edit?.(patch)
  }
  const footerLabel =
    meta.kind === 'proposal'
      ? `${meta.brand} · Proposal`
      : meta.kind === 'document'
        ? `${meta.brand} · Document`
        : 'WESTCLIFF UNIVERSITY · Doctoral Preliminary Defense'
  const logo =
    meta.kind === 'proposal' ? (
      <div className="slide-logo slide-logo--text" aria-label={meta.brand}>
        SmartEdu Hub
      </div>
    ) : meta.kind === 'document' ? (
      <div className="slide-logo slide-logo--text" aria-label={meta.brand}>
        {meta.brand || 'Document'}
      </div>
    ) : (
      <SlideLogo variant="light" />
    )

  if (slide.layout === 'title') {
    const byline = titleBylineLines(slide, meta)
    return (
      <article className={className}>
        {logo}
        <div className="slide__hero">
          {canEdit ? (
            <>
              <EditableText
                className="slide__title"
                value={slide.title}
                onChange={(title) => applyPatch({ title })}
                tag="h1"
                multiline
                placeholder="Presentation title"
              />
              <EditableText
                className="slide__subtitle"
                value={slide.subtitle ?? ''}
                onChange={(subtitle) => applyPatch({ subtitle })}
                tag="p"
                multiline
                placeholder="Subtitle"
              />
            </>
          ) : (
            <>
              <h1 className="slide__title">
                {slide.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {i > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </h1>
              {slide.subtitle ? (
                <p className="slide__subtitle">{slide.subtitle}</p>
              ) : null}
            </>
          )}
          <div className="slide__rule" aria-hidden="true" />
          {byline.length ? (
            <div className="slide__meta">
              {byline.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    )
  }

  if (slide.layout === 'section') {
    return (
      <article className={className}>
        {logo}
        <div className="slide__hero">
          <SlideHeading slide={slide} centered editable={canEdit} onChange={edit} />
        </div>
        <DeckFooter index={index} total={total} label={footerLabel} />
      </article>
    )
  }

  if (slide.layout === 'closing') {
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} editable={canEdit} onChange={edit} />
        {slide.subtitle || canEdit ? (
          canEdit ? (
            <EditableText
              className="slide__quote"
              value={slide.subtitle ?? ''}
              onChange={(subtitle) => applyPatch({ subtitle })}
              tag="div"
              multiline
              placeholder="Closing quote"
            />
          ) : (
            <div className="slide__quote">{slide.subtitle}</div>
          )
        ) : null}
        {slide.footer || canEdit ? (
          canEdit ? (
            <EditableText
              className="slide__closing-meta"
              value={slide.footer ?? ''}
              onChange={(footer) => applyPatch({ footer })}
              tag="p"
              multiline
              placeholder="Closing details"
            />
          ) : (
            <p className="slide__closing-meta">{slide.footer}</p>
          )
        ) : null}
        <DeckFooter index={index} total={total} label={footerLabel} />
      </article>
    )
  }

  if (slide.layout === 'twoColumn') {
    const columns = resolveTwoColumnContent(slide)
    const density = getColumnDensity([
      ...columns.leftBullets,
      ...columns.rightBullets,
    ])
    const paired =
      columns.leftBullets.length === 1 && columns.rightBullets.length === 1
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} editable={canEdit} onChange={edit} />
        <div
          className={
            paired ? 'slide__columns slide__columns--paired' : 'slide__columns'
          }
        >
          <div className="slide__col slide__col--card">
            {columns.leftTitle || canEdit ? (
              <ColumnHeading
                title={columns.leftTitle ?? ''}
                editable={canEdit}
                onChange={(leftTitle) => applyPatch({ leftTitle })}
              />
            ) : null}
            <BulletList
              items={columns.leftBullets.length ? columns.leftBullets : ['']}
              density={density}
              editable={canEdit}
              onChange={(leftBullets) => applyPatch({ leftBullets })}
            />
          </div>
          <div className="slide__col slide__col--card">
            {columns.rightTitle || canEdit ? (
              <ColumnHeading
                title={columns.rightTitle ?? ''}
                editable={canEdit}
                onChange={(rightTitle) => applyPatch({ rightTitle })}
              />
            ) : null}
            <BulletList
              items={columns.rightBullets.length ? columns.rightBullets : ['']}
              density={density}
              editable={canEdit}
              onChange={(rightBullets) => applyPatch({ rightBullets })}
            />
          </div>
        </div>
        <DeckFooter
          index={index}
          total={total}
          extra={slide.footer}
          label={footerLabel}
          editable={canEdit}
          onFooterChange={(footer) => applyPatch({ footer })}
        />
      </article>
    )
  }

  if (slide.layout === 'framework') {
    const blocks = slide.frameworkBlocks ?? []
    const blockTexts = blocks.map((b) => b.text)
    const density = getContentDensity(blockTexts)
    const count = Math.min(Math.max(blocks.length, 1), 6)
    const noteItems = (slide.bullets ?? []).map((item) => item.trim()).filter(Boolean)
    const note = noteItems.length ? parseBulletItem(noteItems[0]) : null
    const noteText = noteItems.map((item) => parseBulletItem(item).text).join(' ')
    const iconSize = count === 4 ? 22 : 24
    const displayBlocks =
      blocks.length > 0
        ? blocks
        : [{ label: 'Label', text: 'Description', author: undefined, icon: undefined }]
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} editable={canEdit} onChange={edit} />
        <div
          className={`slide__blocks slide__blocks--${density} slide__blocks--count-${count}`}
        >
          {displayBlocks.map((block, i) => (
            <div className="slide__block" key={i}>
              {canEdit ? (
                <FrameworkBlockEditor
                  block={block}
                  onChange={(next) => {
                    const nextBlocks = [...displayBlocks]
                    nextBlocks[i] = next
                    applyPatch({ frameworkBlocks: nextBlocks })
                  }}
                />
              ) : (
                <>
                  <div className="slide__block-label">
                    {block.icon ? (
                      <SlideIcon
                        name={block.icon}
                        className="slide__block-icon"
                        size={iconSize}
                      />
                    ) : null}
                    {block.label}
                  </div>
                  {block.author ? (
                    <p className="slide__block-author">{block.author}</p>
                  ) : null}
                  <p className="slide__block-text">{block.text}</p>
                </>
              )}
            </div>
          ))}
        </div>
        {note || canEdit ? (
          canEdit ? (
            <EditableText
              className="slide__card-note"
              value={noteText}
              onChange={(text) => applyPatch({ bullets: text ? [text] : [] })}
              tag="div"
              multiline
              placeholder="Optional note"
            />
          ) : note ? (
            <div className="slide__card-note">
              {note.icon ? (
                <SlideIcon
                  name={note.icon}
                  className="slide__card-note-icon"
                  size={16}
                />
              ) : null}
              <span>{noteText}</span>
            </div>
          ) : null
        ) : null}
        <DeckFooter
          index={index}
          total={total}
          extra={slide.footer}
          label={footerLabel}
          editable={canEdit}
          onFooterChange={(footer) => applyPatch({ footer })}
        />
      </article>
    )
  }

  if (slide.layout === 'chart') {
    const sideBullets = (slide.bullets ?? []).filter((b) => b.trim())
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} editable={canEdit} onChange={edit} />
        <div
          className={
            sideBullets.length || canEdit
              ? 'slide__chart-row'
              : 'slide__chart-row slide__chart-row--solo'
          }
        >
          <div className="slide__chart-panel">
            <SlideChart
              type={slide.chartType ?? 'bar'}
              data={slide.chartData ?? []}
            />
            {slide.chartCaption || canEdit ? (
              canEdit ? (
                <EditableText
                  className="slide__chart-caption"
                  value={slide.chartCaption ?? ''}
                  onChange={(chartCaption) => applyPatch({ chartCaption })}
                  tag="p"
                  placeholder="Chart caption"
                />
              ) : (
                <p className="slide__chart-caption">{slide.chartCaption}</p>
              )
            ) : null}
          </div>
          {sideBullets.length || canEdit ? (
            <BulletList
              items={sideBullets.length ? sideBullets : ['']}
              extraClass={`slide__list--compact slide__list--count-${Math.max(sideBullets.length, 1)}`}
              density={getColumnDensity(
                sideBullets.map((item) => parseBulletItem(item).text),
              )}
              editable={canEdit}
              onChange={(bullets) => applyPatch({ bullets })}
            />
          ) : null}
        </div>
        <DeckFooter
          index={index}
          total={total}
          extra={slide.footer}
          label={footerLabel}
          editable={canEdit}
          onFooterChange={(footer) => applyPatch({ footer })}
        />
      </article>
    )
  }

  const bullets = (slide.bullets ?? []).filter((item) => item.trim())
  const density = getContentDensity(
    bullets.map((item) => parseBulletItem(item).text),
  )

  if (slide.layout === 'cards') {
    const cardItems = bullets.length ? bullets : canEdit ? [''] : []
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} editable={canEdit} onChange={edit} />
        <div className={`slide__cards slide__cards--${density} slide__cards--count-${Math.max(cardItems.length, 1)}`}>
          {cardItems.map((item, i) =>
            canEdit ? (
              <EditableText
                key={i}
                className="slide__card-item"
                value={parseBulletItem(item).text}
                onChange={(text) => {
                  const next = [...(slide.bullets ?? cardItems)]
                  next[i] = text
                  applyPatch({ bullets: next })
                }}
                tag="div"
                multiline
                placeholder="Card text"
              />
            ) : (
              <div className="slide__card-item" key={i}>
                {parseBulletItem(item).text}
              </div>
            ),
          )}
        </div>
        <DeckFooter
          index={index}
          total={total}
          extra={slide.footer}
          label={footerLabel}
          editable={canEdit}
          onFooterChange={(footer) => applyPatch({ footer })}
        />
      </article>
    )
  }

  return (
    <article className={className}>
      {logo}
      <ContentHeader slide={slide} editable={canEdit} onChange={edit} />
      <BulletList
        items={bullets.length ? bullets : canEdit ? [''] : []}
        editable={canEdit}
        onChange={(next) => applyPatch({ bullets: next })}
      />
      <DeckFooter
        index={index}
        total={total}
        extra={slide.footer}
        label={footerLabel}
        editable={canEdit}
        onFooterChange={(footer) => applyPatch({ footer })}
      />
    </article>
  )
}
