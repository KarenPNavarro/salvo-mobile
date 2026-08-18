import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, gradients, spacing } from '../../constants/theme';

type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  contentStyle?: ViewStyle;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  alert?: boolean;
};

export function Screen({ children, scroll = false, contentStyle, edges = ['top'], alert = false }: ScreenProps) {
  const gradientColors = alert ? gradients.alertGround : gradients.screen;
  const locations = alert ? gradients.alertGroundLocations : gradients.screenLocations;

  return (
    <LinearGradient colors={gradientColors} locations={locations} style={styles.fill}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea} edges={edges}>
        {scroll ? (
          <ScrollView
            contentContainerStyle={[styles.content, contentStyle]}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.content, styles.noScroll, contentStyle]}>{children}</View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1, backgroundColor: colors.indigo },
  safeArea: { flex: 1 },
  content: { paddingHorizontal: spacing.gutter, paddingBottom: 24 },
  noScroll: { flex: 1 },
});
