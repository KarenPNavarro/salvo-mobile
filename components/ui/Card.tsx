import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { colors, radii, spacing } from '../../constants/theme';

type CardProps = {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  large?: boolean;
  alert?: boolean;
};

export function Card({ children, style, large = false, alert = false }: CardProps) {
  return (
    <View
      style={[
        styles.base,
        { borderRadius: large ? radii.cardLg : radii.card },
        alert && styles.alert,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.surfaceFill,
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
    padding: spacing.cardInset,
  },
  alert: {
    backgroundColor: colors.alertSurfaceFill,
    borderColor: colors.alertSurfaceBorder,
  },
});
