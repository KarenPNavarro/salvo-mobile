export const colors = {
  mint: '#7DE1BD',
  violet: '#5131FE',
  indigo: '#1B0067',
  text: '#F1EEFF',
  textMuted: 'rgba(241,238,255,0.58)',
  textFaint: 'rgba(241,238,255,0.5)',
  amber: '#FFC46E',
  rose: '#FF8B9C',
  surfaceFill: 'rgba(255,255,255,0.055)',
  surfaceBorder: 'rgba(255,255,255,0.1)',
  track: 'rgba(255,255,255,0.09)',
  toggleOff: 'rgba(255,255,255,0.12)',

  // Alert-mode (red ground) palette
  alertText: '#FFFFFF',
  alertSurfaceFill: 'rgba(255,255,255,0.14)',
  alertSurfaceBorder: 'rgba(255,255,255,0.2)',
  alertTrack: 'rgba(255,255,255,0.18)',
};

export const gradients = {
  screen: ['#1B0067', '#150050', '#0F1D4A', '#123F52'] as const,
  screenLocations: [0, 0.46, 0.78, 1] as const,
  danger: ['#BE1839', '#D83A5B'] as const,
  alertGround: ['#BE1839', '#D83A5B'] as const,
  alertGroundLocations: [0, 1] as const,
};

export const radii = {
  card: 24,
  cardLg: 26,
  input: 20,
  button: 18,
  iconButton: 14,
  pill: 999,
};

export const spacing = {
  gutter: 22,
  cardGap: 12,
  cardInset: 18,
};

export const fonts = {
  heading: 'Poppins_600SemiBold',
  body: 'Mulish_300Light',
};

export const type = {
  screenTitle: { fontFamily: fonts.heading, fontSize: 28, letterSpacing: -0.56, color: colors.text },
  hero: { fontFamily: fonts.heading, fontSize: 30, color: colors.text },
  cardTitle: { fontFamily: fonts.heading, fontSize: 16, color: colors.text },
  body: { fontFamily: fonts.body, fontSize: 14.5, color: colors.text },
  meta: { fontFamily: fonts.body, fontSize: 12.5, color: colors.text, opacity: 0.54 },
  sectionLabel: { fontFamily: fonts.heading, fontSize: 11, letterSpacing: 1.5, color: colors.text, opacity: 0.38, textTransform: 'uppercase' as const },
};

export const shadow = {
  glowMint: {
    shadowColor: colors.mint,
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  glowDanger: {
    shadowColor: '#BE1839',
    shadowOpacity: 0.45,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
};
