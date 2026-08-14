import {
  getColumnDensity,
  getContentDensity,
  type ContentDensity,
} from '../../lib/contentDensity'
import { parseBulletItem } from '../../lib/slideIcons'
import { resolveTwoColumnContent } from '../../lib/slideLayout'
import type { PresentationState, Slide } from '../../types/slide'
import { SlideIcon } from '../icons/SlideIcon'
import { SlideChart } from './SlideChart'
import { SlideLogo } from './SlideLogo'

interface Props {
  slide: Slide
  meta: PresentationState['meta']
  index?: number
  total?: number
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
}: {
  slide: Slide
  centered?: boolean
  dark?: boolean
}) {
  return (
    <>
      {slide.chapter ? (
        <div className={`slide__chapter${dark ? ' slide__chapter--dark' : ''}`}>
          {slide.chapter}
        </div>
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
        <h1 className="slide__title">{slide.title}</h1>
      </div>
      {slide.subtitle ? <p className="slide__subtitle">{slide.subtitle}</p> : null}
    </>
  )
}

function ContentHeader({ slide }: { slide: Slide }) {
  return (
    <header className="slide__header">
      <SlideHeading slide={slide} />
    </header>
  )
}

function DeckFooter({
  index,
  total,
  dark = false,
  extra,
}: {
  index?: number
  total?: number
  dark?: boolean
  extra?: string
}) {
  const number =
    typeof index === 'number' && typeof total === 'number'
      ? `Slide ${index + 1} of ${total}`
      : extra
  return (
    <footer className={`slide__deck-footer${dark ? ' slide__deck-footer--dark' : ''}`}>
      <span>WESTCLIFF UNIVERSITY · Doctoral Defense</span>
      <span>{number ?? extra ?? ''}</span>
    </footer>
  )
}

function ColumnHeading({ title }: { title: string }) {
  const parsed = parseBulletItem(title)
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
}: {
  items: string[]
  extraClass?: string
  density?: ContentDensity
}) {
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

export function SlideCanvas({ slide, meta, index, total }: Props) {
  const className = `slide slide--${slide.layout}`
  const logo = <SlideLogo variant="light" />

  if (slide.layout === 'title') {
    return (
      <article className={className}>
        {logo}
        <div className="slide__hero">
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
          <div className="slide__rule" aria-hidden="true" />
          <div className="slide__meta">
            <span>
              {meta.author} · {meta.degree}
            </span>
            <span>
              Preliminary Doctoral Defense · Chapters One to Three | {meta.date}
            </span>
          </div>
        </div>
      </article>
    )
  }

  if (slide.layout === 'section') {
    return (
      <article className={className}>
        {logo}
        <div className="slide__hero">
          <SlideHeading slide={slide} centered />
        </div>
        <DeckFooter index={index} total={total} />
      </article>
    )
  }

  if (slide.layout === 'closing') {
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} />
        {slide.subtitle ? (
          <div className="slide__quote">{slide.subtitle}</div>
        ) : null}
        {slide.footer ? (
          <p className="slide__closing-meta">{slide.footer}</p>
        ) : null}
        <DeckFooter index={index} total={total} />
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
        <ContentHeader slide={slide} />
        <div
          className={
            paired ? 'slide__columns slide__columns--paired' : 'slide__columns'
          }
        >
          <div className="slide__col slide__col--card">
            {columns.leftTitle ? (
              <ColumnHeading title={columns.leftTitle} />
            ) : null}
            <BulletList items={columns.leftBullets} density={density} />
          </div>
          <div className="slide__col slide__col--card">
            {columns.rightTitle ? (
              <ColumnHeading title={columns.rightTitle} />
            ) : null}
            <BulletList items={columns.rightBullets} density={density} />
          </div>
        </div>
        <DeckFooter index={index} total={total} extra={slide.footer} />
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
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} />
        <div
          className={`slide__blocks slide__blocks--${density} slide__blocks--count-${count}`}
        >
          {blocks.map((block, i) => (
            <div className="slide__block" key={i}>
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
            </div>
          ))}
        </div>
        {note ? (
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
        ) : null}
        <DeckFooter index={index} total={total} extra={slide.footer} />
      </article>
    )
  }

  if (slide.layout === 'chart') {
    const sideBullets = (slide.bullets ?? []).filter((b) => b.trim())
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} />
        <div
          className={
            sideBullets.length
              ? 'slide__chart-row'
              : 'slide__chart-row slide__chart-row--solo'
          }
        >
          <div className="slide__chart-panel">
            <SlideChart
              type={slide.chartType ?? 'bar'}
              data={slide.chartData ?? []}
            />
            {slide.chartCaption ? (
              <p className="slide__chart-caption">{slide.chartCaption}</p>
            ) : null}
          </div>
          {sideBullets.length ? (
            <BulletList
              items={sideBullets}
              extraClass={`slide__list--compact slide__list--count-${sideBullets.length}`}
              density={getColumnDensity(
                sideBullets.map((item) => parseBulletItem(item).text),
              )}
            />
          ) : null}
        </div>
        <DeckFooter index={index} total={total} extra={slide.footer} />
      </article>
    )
  }

  const bullets = (slide.bullets ?? []).filter((item) => item.trim())
  const density = getContentDensity(
    bullets.map((item) => parseBulletItem(item).text),
  )

  if (slide.layout === 'cards') {
    return (
      <article className={className}>
        {logo}
        <ContentHeader slide={slide} />
        <div className={`slide__cards slide__cards--${density} slide__cards--count-${bullets.length}`}>
          {bullets.map((item, i) => (
            <div className="slide__card-item" key={i}>
              {parseBulletItem(item).text}
            </div>
          ))}
        </div>
        <DeckFooter index={index} total={total} extra={slide.footer} />
      </article>
    )
  }

  return (
    <article className={className}>
      {logo}
      <ContentHeader slide={slide} />
      <BulletList items={bullets} />
      <DeckFooter index={index} total={total} extra={slide.footer} />
    </article>
  )
}
