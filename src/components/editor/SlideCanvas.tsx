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
}: {
  slide: Slide
  centered?: boolean
}) {
  return (
    <>
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

export function SlideCanvas({ slide, meta }: Props) {
  const className = `slide slide--${slide.layout}`

  const logo = <SlideLogo variant="light" />

  if (slide.layout === 'title') {
    return (
      <article className={className}>
        {logo}
        <div className="slide__hero">
          <div className="slide__brand">{meta.brand}</div>
          <p className="slide__eyebrow">
            Preliminary Doctoral Defense · Chapters One to Three
          </p>
          {slide.icon ? (
            <SlideIcon name={slide.icon} className="slide__icon" size={40} />
          ) : null}
          <h1 className="slide__title">{slide.title}</h1>
          {slide.subtitle ? (
            <p className="slide__subtitle">{slide.subtitle}</p>
          ) : null}
          <div className="slide__rule" aria-hidden="true" />
          <div className="slide__meta">
            <span>{meta.author}</span>
            <span>
              {meta.degree} · College of Business Administration
            </span>
            <span>{meta.date}</span>
          </div>
        </div>
        {slide.footer ? (
          <footer className="slide__footer slide__footer--center">
            {slide.footer}
          </footer>
        ) : null}
      </article>
    )
  }

  if (slide.layout === 'section' || slide.layout === 'closing') {
    return (
      <article className={className}>
        {logo}
        <div className="slide__hero">
          <SlideHeading slide={slide} centered />
        </div>
        {slide.footer ? (
          <footer className="slide__footer slide__footer--center">
            {slide.footer}
          </footer>
        ) : null}
      </article>
    )
  }

  if (slide.layout === 'twoColumn') {
    const columns = resolveTwoColumnContent(slide)
    const density = getColumnDensity([
      ...columns.leftBullets,
      ...columns.rightBullets,
    ])
    return (
      <article className={className}>
        {logo}
        <SlideHeading slide={slide} />
        <div className="slide__columns">
          <div className="slide__col">
            {columns.leftTitle ? <h3>{columns.leftTitle}</h3> : null}
            <BulletList items={columns.leftBullets} density={density} />
          </div>
          <div className="slide__col">
            {columns.rightTitle ? <h3>{columns.rightTitle}</h3> : null}
            <BulletList items={columns.rightBullets} density={density} />
          </div>
        </div>
        {slide.footer ? <footer className="slide__footer">{slide.footer}</footer> : null}
      </article>
    )
  }

  if (slide.layout === 'framework') {
    const blockTexts = (slide.frameworkBlocks ?? []).map((b) => b.text)
    const density = getContentDensity(blockTexts)
    return (
      <article className={className}>
        {logo}
        <SlideHeading slide={slide} />
        <div className={`slide__blocks slide__blocks--${density}`}>
          {(slide.frameworkBlocks ?? []).map((block, i) => (
            <div className="slide__block" key={i}>
              <div className="slide__block-label">
                {block.icon ? (
                  <SlideIcon
                    name={block.icon}
                    className="slide__block-icon"
                    size={22}
                  />
                ) : null}
                {block.label}
              </div>
              <p className="slide__block-text">{block.text}</p>
            </div>
          ))}
        </div>
        {slide.footer ? <footer className="slide__footer">{slide.footer}</footer> : null}
      </article>
    )
  }

  if (slide.layout === 'chart') {
    const sideBullets = (slide.bullets ?? []).filter((b) => b.trim())
    return (
      <article className={className}>
        {logo}
        <SlideHeading slide={slide} />
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
              extraClass="slide__list--compact"
              density={getColumnDensity(
                sideBullets.map((item) => parseBulletItem(item).text),
              )}
            />
          ) : null}
        </div>
        {slide.footer ? <footer className="slide__footer">{slide.footer}</footer> : null}
      </article>
    )
  }

  const bullets = (slide.bullets ?? []).filter((item) => item.trim())
  return (
    <article className={className}>
      {logo}
      <SlideHeading slide={slide} />
      <BulletList items={bullets} />
      {slide.footer ? <footer className="slide__footer">{slide.footer}</footer> : null}
    </article>
  )
}
