/**
 * Westcliff University DBA Doctoral Defense Slide Deck Theme
 */
export const DEFENSE_THEME = {
  university: 'WESTCLIFF UNIVERSITY',
  degree: 'Doctor of Business Administration',
  candidate: 'Gbadega Adedapo',
  date: 'August 2026',

  colors: {
    primaryDark: '#0A192F',
    accentGold: '#C5A059',
    secondaryBlue: '#1E3A8A',
    bgLight: '#FFFFFF',
    textDark: '#0F172A',
    textMuted: '#475569',
    border: '#E2E8F0',
    cardBg: '#FFFFFF',
  },

  typography: {
    fontFamilyHeader: "'Cinzel', 'Georgia', serif",
    fontFamilyBody: "'Inter', 'Helvetica Neue', sans-serif",
    fontSize: {
      slideTitle: '2.25rem',
      subtitle: '1.25rem',
      sectionHeader: '1.5rem',
      bodyText: '1.05rem',
      caption: '0.875rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      relaxed: 1.6,
    },
  },
} as const

function hex(color: string): string {
  return color.replace('#', '').toUpperCase()
}

/** Hex without # for pptxgenjs / docx. */
export const PPT_COLORS = {
  navy: hex(DEFENSE_THEME.colors.primaryDark),
  gold: hex(DEFENSE_THEME.colors.accentGold),
  secondary: hex(DEFENSE_THEME.colors.secondaryBlue),
  muted: hex(DEFENSE_THEME.colors.textMuted),
  white: hex(DEFENSE_THEME.colors.cardBg),
  bgLight: hex(DEFENSE_THEME.colors.bgLight),
  border: hex(DEFENSE_THEME.colors.border),
  textDark: hex(DEFENSE_THEME.colors.textDark),
} as const

/** Office-safe fallbacks of Cinzel / Inter. */
export const PPT_FONTS = {
  header: 'Georgia',
  body: 'Calibri',
} as const

export const CHART_COLORS = [
  DEFENSE_THEME.colors.primaryDark,
  DEFENSE_THEME.colors.secondaryBlue,
  DEFENSE_THEME.colors.accentGold,
  '#334155',
  DEFENSE_THEME.colors.textMuted,
]
