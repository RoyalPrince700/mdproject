import { useState } from 'react'
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

export function SlideFields({ slide, canDelete, onChange, onDelete }: Props) {
  const [collapsed, setCollapsed] = useState(false)
  const [notesExpanded, setNotesExpanded] = useState(false)

  return (
    <aside
      className={`fields-pane${collapsed ? ' is-collapsed' : ''}${
        notesExpanded ? ' is-notes-expanded' : ''
      }`}
    >
      <div className="fields-pane__header">
        <h2>{notesExpanded && !collapsed ? 'Speaker notes' : 'Edit slide'}</h2>
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

      {slide.layout === 'bullets' || slide.layout === 'chart' ? (
        <div className="field">
          <label htmlFor="bullets">
            {slide.layout === 'chart' ? 'Side bullets (one per line)' : 'Bullets (one per line)'}
          </label>
          <textarea
            id="bullets"
            className="tall"
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
          <div className="field">
            <label htmlFor="chartData">Chart data (Name | Value — one per line)</label>
            <textarea
              id="chartData"
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
          <div className="field">
            <label htmlFor="leftBullets">Left bullets (one per line)</label>
            <textarea
              id="leftBullets"
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
          <div className="field">
            <label htmlFor="rightBullets">Right bullets (one per line)</label>
            <textarea
              id="rightBullets"
              value={(slide.rightBullets ?? []).join('\n')}
              onChange={(e) => onChange({ rightBullets: linesToList(e.target.value) })}
            />
          </div>
        </>
      ) : null}

      {slide.layout === 'framework' ? (
        <div className="field">
          <label htmlFor="framework">
            Framework blocks (Label | Text | Icon — one block per line)
          </label>
          <textarea
            id="framework"
            className="tall"
            value={(slide.frameworkBlocks ?? [])
              .map((b) =>
                b.icon ? `${b.label} | ${b.text} | ${b.icon}` : `${b.label} | ${b.text}`,
              )
              .join('\n')}
            onChange={(e) => {
              const frameworkBlocks = e.target.value
                .split('\n')
                .map((line) => line.trim())
                .filter(Boolean)
                .map((line) => {
                  const parts = line.split('|').map((part) => part.trim())
                  const label = parts[0] || 'Label'
                  const maybeIcon = parts.length >= 3 ? parts[parts.length - 1] : ''
                  const icon = isSlideIconName(maybeIcon) ? maybeIcon : undefined
                  const textParts = icon ? parts.slice(1, -1) : parts.slice(1)
                  return {
                    label,
                    text: textParts.join(' | ') || 'Description',
                    icon,
                  }
                })
              onChange({ frameworkBlocks })
            }}
          />
          <p className="field__hint">
            Optional third column is an icon name, e.g. Technology | … | Laptop
          </p>
        </div>
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
            onClick={() => setNotesExpanded((isExpanded) => !isExpanded)}
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
