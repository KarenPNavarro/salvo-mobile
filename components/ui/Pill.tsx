import { StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { colors, fonts, radii } from '../../constants/theme';

export type PillTone = 'mint' | 'amber' | 'rose' | 'neutral';

type PillProps = {
  label: string;
  tone?: PillTone;
  dot?: boolean;
  style?: ViewStyle;
};

const toneColor: Record<PillTone, string> = {
  mint: colors.mint,
  amber: colors.amber,
  rose: colors.rose,
  neutral: colors.text,
};

export function Pill({ label, tone = 'neutral', dot = false, style }: PillProps) {
  const tint = toneColor[tone];
  return (
    <View style={[styles.base, { borderColor: withAlpha(tint, 0.28) }, style]}>
      {dot && <View style={[styles.dot, { backgroundColor: tint }]} />}
      <Text style={[styles.label, { color: tint }]}>{label}</Text>
    </View>
  );
}

function withAlpha(hex: string, alpha: number) {
  if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.pill,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  dot: { width: 6, height: 6, borderRadius: 3 },
  label: { fontFamily: fonts.heading, fontSize: 11.5, letterSpacing: 0.2 },
});
