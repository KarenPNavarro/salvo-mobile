import type { ReactNode } from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { colors, radii } from '../../constants/theme';

type IconButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  variant?: 'surface' | 'violet' | 'alert';
  size?: number;
  style?: ViewStyle;
};

export function IconButton({ children, onPress, variant = 'surface', size = 44, style }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={({ pressed }) => [
        styles.base,
        { width: size, height: size, borderRadius: radii.iconButton },
        variantStyle(variant),
        pressed && styles.pressed,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}

function variantStyle(variant: NonNullable<IconButtonProps['variant']>): ViewStyle {
  switch (variant) {
    case 'violet':
      return { backgroundColor: colors.violet };
    case 'alert':
      return { backgroundColor: colors.alertSurfaceFill, borderWidth: 1, borderColor: colors.alertSurfaceBorder };
    case 'surface':
    default:
      return { backgroundColor: colors.surfaceFill, borderWidth: 1, borderColor: colors.surfaceBorder };
  }
}

const styles = StyleSheet.create({
  base: { alignItems: 'center', justifyContent: 'center' },
  pressed: { opacity: 0.7 },
});
