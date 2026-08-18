import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { colors, fonts, gradients, radii, shadow } from '../../constants/theme';

export type ButtonVariant =
  | 'violet'
  | 'mint'
  | 'danger'
  | 'outline-mint'
  | 'outline-neutral'
  | 'ghost-danger'
  | 'alert-white';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  icon?: ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
};

export function Button({ label, onPress, variant = 'violet', icon, disabled, style }: ButtonProps) {
  const content = (
    <View style={styles.row}>
      {icon}
      <Text style={[styles.label, textColorForVariant(variant)]}>{label}</Text>
    </View>
  );

  if (variant === 'danger') {
    return (
      <Pressable onPress={onPress} disabled={disabled} style={({ pressed }) => [pressed && styles.pressed, style]}>
        <LinearGradient colors={gradients.danger} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.base, shadow.glowDanger]}>
          {content}
        </LinearGradient>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variantStyle(variant),
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      {content}
    </Pressable>
  );
}

function variantStyle(variant: ButtonVariant): ViewStyle {
  switch (variant) {
    case 'violet':
      return { backgroundColor: colors.violet };
    case 'mint':
      return { backgroundColor: colors.mint };
    case 'outline-mint':
      return { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: colors.mint };
    case 'outline-neutral':
      return { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: colors.surfaceBorder };
    case 'ghost-danger':
      return { backgroundColor: 'transparent' };
    case 'alert-white':
      return { backgroundColor: '#FFFFFF' };
    default:
      return {};
  }
}

function textColorForVariant(variant: ButtonVariant) {
  switch (variant) {
    case 'mint':
      return { color: '#0D0033' };
    case 'outline-mint':
      return { color: colors.mint };
    case 'outline-neutral':
      return { color: colors.text };
    case 'ghost-danger':
      return { color: colors.rose };
    case 'alert-white':
      return { color: '#BE1839' };
    case 'violet':
    case 'danger':
    default:
      return { color: '#FFFFFF' };
  }
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radii.button,
    paddingVertical: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  label: { fontFamily: fonts.heading, fontSize: 16 },
  disabled: { opacity: 0.5 },
  pressed: { opacity: 0.82 },
});
