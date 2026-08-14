import { useEffect, useState } from 'react'
import {
  Maximize2,
  Minimize2,
  PanelRightClose,
  PanelRightOpen,
} from 'lucide-react'
import { SLIDE_ICON_OPTIONS, isSlideIconName } from '../../lib/slideIcons'
import { adaptSlideToLayout } from '../../lib/slideLayout'
import {
  SLIDE_LAYOUTS,
  type ChartType,
  type FrameworkBlock,
  type Slide,
  type SlideLayout,
} from '../../types/slide'
import { SlideIcon } from '../icons/SlideIcon'

interface Props {
  slide: Slide
  canDelete: boolean
  onChange: (patch: Partial<Slide>) => void
  onDelete: () => void
}

function linesToList(value: string): string[] {
  return value.split('\n')
}

function serializeFrameworkBlocks(blocks?: FrameworkBlock[]): string {
  return (blocks ?? [])
    .map((b) => {
      const head = b.author ? `${b.label} — ${b.author}` : b.label
      return b.icon ? `${head} | ${b.text} | ${b.icon}` : `${head} | ${b.text}`
    })
    .join('\n')
}

function parseFrameworkBlocks(value: string): FrameworkBlock[] {
  return value
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const parts = line.split('|').map((part) => part.trim())
      const rawLabel = parts[0] || ''
      const [labelPart, authorPart] = rawLabel.split(' — ')
      const maybeIcon = parts.length >= 3 ? parts[parts.length - 1] : ''
      const icon = isSlideIconName(maybeIcon) ? maybeIcon : undefined
      const textParts = icon ? parts.slice(1, -1) : parts.slice(1)
      return {
        label: labelPart,
        author: authorPart || undefined,
        text: textParts.join(' | '),
        icon,
      }
    })
}

function ExpandFieldButton({
  expanded,
  expandLabel,
  collapseLabel,
  onToggle,
}: {
  expanded: boolean
  expandLabel: string
  collapseLabel: string
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      className="field__expand"
      aria-label={expanded ? collapseLabel : expandLabel}
      aria-expanded={expanded}
      title={expanded ? collapseLabel : expandLabel}
      onClick={onToggle}
    >
      {expanded ? (
        <Minimize2 size={16} strokeWidth={1.8} aria-hidden="true" />
      ) : (
        <Maximize2 size={16} strokeWidth={1.8} aria-hidden="true" />
      )}
      {expanded ? 'Collapse' : 'Expand'}
    </button>
  )
}

function FrameworkCardsField({
  blocks,
  onChange,
}: {
  blocks?: FrameworkBlock[]
  onChange: (blocks: FrameworkBlock[]) => void
}) {
  const [draft, setDraft] = useState(() => serializeFrameworkBlocks(blocks))

  return (
    <textarea
      id="framework"
      className="tall body-textarea"
      value={draft}
      onChange={(e) => {
        const next = e.target.value
        setDraft(next)
        onChange(parseFrameworkBlocks(next))
      }}
    />
  )
}

export function SlideFields({ slide, canDelete, onChange, onDelete }: Props) {
  const [collapsed, setCollapsed] = useState(false)
  const [notesExpanded, setNotesExpanded] = useState(false)
  const [bodyExpanded, setBodyExpanded] = useState(false)

  const hasBodyEditor =
    slide.layout === 'title' ||
    slide.layout === 'bullets' ||
    slide.layout === 'cards' ||
    slide.layout === 'chart' ||
    slide.layout === 'twoColumn' ||
    slide.layout === 'framework'

  useEffect(() => {
    if (!hasBodyEditor) setBodyExpanded(false)
  }, [hasBodyEditor])

  const paneTitle = notesExpanded
    ? 'Speaker notes'
    : bodyExpanded
      ? 'Edit text'
      : 'Edit slide'

  const toggleNotes = () => {
    setNotesExpanded((open) => {
      if (!open) setBodyExpanded(false)
      return !open
    })
  }

  const toggleBody = () => {
    setBodyExpanded((open) => {
      if (!open) setNotesExpanded(false)
      return !open
    })
  }

  return (
    <aside
      className={`fields-pane${collapsed ? ' is-collapsed' : ''}${
        notesExpanded ? ' is-notes-expanded' : ''
      }${bodyExpanded ? ' is-body-expanded' : ''}`}
    >
      <div className="fields-pane__header">
        <h2>{(notesExpanded || bodyExpanded) && !collapsed ? paneTitle : 'Edit slide'}</h2>
        <button
          type="button"
          className="fields-pane__toggle"
          aria-label={collapsed ? 'Open edit panel' : 'Collapse edit panel'}
          aria-expanded={!collapsed}
          title={collapsed ? 'Open edit panel' : 'Collapse edit panel'}
          onClick={() => setCollapsed((isCollapsed) => !isCollapsed)}
        >
          {collapsed ? (
            <PanelRightOpen size={18} strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <PanelRightClose size={18} strokeWidth={1.8} aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="field">
        <label htmlFor="layout">Layout</label>
        <select
          id="layout"
          value={slide.layout}
          onChange={(e) =>
            onChange(
              adaptSlideToLayout(slide, e.target.value as SlideLayout),
            )
          }
        >
          {SLIDE_LAYOUTS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={slide.title}
          onChange={(e) => onChange({ title: e.target.value })}
        />
      </div>

      <div className="field">
        <label htmlFor="subtitle">Subtitle</label>
        <input
          id="subtitle"
          value={slide.subtitle ?? ''}
          onChange={(e) => onChange({ subtitle: e.target.value })}
        />
      </div>

      <div className="field">
        <label htmlFor="icon">Slide icon</label>
        <div className="icon-field">
          <span className="icon-field__preview">
            <SlideIcon name={slide.icon} size={18} />
          </span>
          <select
            id="icon"
            value={slide.icon ?? ''}
            onChange={(e) =>
              onChange({ icon: e.target.value || undefined })
            }
          >
            <option value="">None</option>
            {SLIDE_ICON_OPTIONS.map((opt) => (
              <option key={opt.name} value={opt.name}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="chapter">Chapter tag</label>
        <input
          id="chapter"
          value={slide.chapter ?? ''}
          onChange={(e) => onChange({ chapter: e.target.value })}
        />
      </div>

      {slide.layout === 'bullets' || slide.layout === 'cards' || slide.layout === 'chart' ? (
        <div className="field field--body">
          <div className="field__label-row">
            <label htmlFor="bullets">
              {slide.layout === 'chart'
                ? 'Side bullets (one per line)'
                : slide.layout === 'cards'
                  ? 'Cards (one per line)'
                  : 'Bullets (one per line)'}
            </label>
            <ExpandFieldButton
              expanded={bodyExpanded}
              expandLabel="Expand text editor"
              collapseLabel="Collapse text editor"
              onToggle={toggleBody}
            />
          </div>
          <textarea
            id="bullets"
            className="tall body-textarea"
            value={(slide.bullets ?? []).join('\n')}
            onChange={(e) => onChange({ bullets: linesToList(e.target.value) })}
          />
          <p className="field__hint">
            Optional icon prefix: [TriangleAlert] Your point
          </p>
        </div>
      ) : null}

      {slide.layout === 'chart' ? (
        <>
          <div className="field">
            <label htmlFor="chartType">Chart type</label>
            <select
              id="chartType"
              value={slide.chartType ?? 'bar'}
              onChange={(e) =>
                onChange({ chartType: e.target.value as ChartType })
              }
            >
              <option value="bar">Bar</option>
              <option value="pie">Pie</option>
            </select>
          </div>
          <div className="field field--body">
            <div className="field__label-row">
              <label htmlFor="chartData">Chart data (Name | Value — one per line)</label>
              <ExpandFieldButton
                expanded={bodyExpanded}
                expandLabel="Expand text editor"
                collapseLabel="Collapse text editor"
                onToggle={toggleBody}
              />
            </div>
            <textarea
              id="chartData"
              className="body-textarea"
              value={(slide.chartData ?? [])
                .map((d) => `${d.name} | ${d.value}`)
                .join('\n')}
              onChange={(e) => {
                const chartData = e.target.value
                  .split('\n')
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line) => {
                    const [name, ...rest] = line.split('|')
                    const value = Number(rest.join('|').trim())
                    return {
                      name: (name ?? '').trim() || 'Item',
                      value: Number.isFinite(value) ? value : 0,
                    }
                  })
                onChange({ chartData })
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="chartCaption">Chart caption</label>
            <input
              id="chartCaption"
              value={slide.chartCaption ?? ''}
              onChange={(e) => onChange({ chartCaption: e.target.value })}
            />
          </div>
        </>
      ) : null}

      {slide.layout === 'twoColumn' ? (
        <>
          <div className="field">
            <label htmlFor="leftTitle">Left column title</label>
            <input
              id="leftTitle"
              value={slide.leftTitle ?? ''}
              onChange={(e) => onChange({ leftTitle: e.target.value })}
            />
          </div>
          <div className="field field--body">
            <div className="field__label-row">
              <label htmlFor="leftBullets">Left bullets (one per line)</label>
              <ExpandFieldButton
                expanded={bodyExpanded}
                expandLabel="Expand text editor"
                collapseLabel="Collapse text editor"
                onToggle={toggleBody}
              />
            </div>
            <textarea
              id="leftBullets"
              className="body-textarea"
              value={(slide.leftBullets ?? []).join('\n')}
              onChange={(e) => onChange({ leftBullets: linesToList(e.target.value) })}
            />
            <p className="field__hint">
              Optional icon prefix: [Laptop] Your point
            </p>
          </div>
          <div className="field">
            <label htmlFor="rightTitle">Right column title</label>
            <input
              id="rightTitle"
              value={slide.rightTitle ?? ''}
              onChange={(e) => onChange({ rightTitle: e.target.value })}
            />
          </div>
          <div className="field field--body">
            <div className="field__label-row">
              <label htmlFor="rightBullets">Right bullets (one per line)</label>
              <ExpandFieldButton
                expanded={bodyExpanded}
                expandLabel="Expand text editor"
                collapseLabel="Collapse text editor"
                onToggle={toggleBody}
              />
            </div>
            <textarea
              id="rightBullets"
              className="body-textarea"
              value={(slide.rightBullets ?? []).join('\n')}
              onChange={(e) => onChange({ rightBullets: linesToList(e.target.value) })}
            />
          </div>
        </>
      ) : null}

      {slide.layout === 'framework' ? (
        <>
          <div className="field field--body">
            <div className="field__label-row">
              <label htmlFor="framework">
                Cards (Label | Text | Icon — one card per line)
              </label>
              <ExpandFieldButton
                expanded={bodyExpanded}
                expandLabel="Expand text editor"
                collapseLabel="Collapse text editor"
                onToggle={toggleBody}
              />
            </div>
            <FrameworkCardsField
              key={slide.id}
              blocks={slide.frameworkBlocks}
              onChange={(frameworkBlocks) => onChange({ frameworkBlocks })}
            />
            <p className="field__hint">
              Two cards sit side by side; three in a row; four in a 2×2 grid.
              Optional author: TOE — Tornatzky & Fleischer (1990) | …
            </p>
          </div>
        </>
      ) : null}

      <div className="field">
        <label htmlFor="footer">Footer</label>
        <input
          id="footer"
          value={slide.footer ?? ''}
          onChange={(e) => onChange({ footer: e.target.value })}
        />
      </div>

      <div className="field field--notes">
        <div className="field__label-row">
          <label htmlFor="notes">Speaker notes</label>
          <button
            type="button"
            className="field__expand"
            aria-label={notesExpanded ? 'Collapse speaker notes' : 'Expand speaker notes'}
            aria-expanded={notesExpanded}
            title={notesExpanded ? 'Collapse notes' : 'Expand notes to fill the panel'}
            onClick={toggleNotes}
          >
            {notesExpanded ? (
              <Minimize2 size={16} strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Maximize2 size={16} strokeWidth={1.8} aria-hidden="true" />
            )}
            {notesExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
        <textarea
          id="notes"
          className="notes-textarea"
          value={slide.notes ?? ''}
          onChange={(e) => onChange({ notes: e.target.value })}
        />
      </div>

      <div className="fields-actions">
        <button
          type="button"
          className="btn btn--danger"
          disabled={!canDelete}
          onClick={onDelete}
        >
          Delete slide
        </button>
      </div>
    </aside>
  )
}
