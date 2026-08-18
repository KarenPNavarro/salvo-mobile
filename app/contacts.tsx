import { useRouter } from 'expo-router';
import { ArrowLeft, Users } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { IconButton } from '../components/ui/IconButton';
import { Screen } from '../components/ui/Screen';
import { colors, fonts, spacing, type } from '../constants/theme';

export default function EmergencyContactsEmptyScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View style={styles.header}>
        <IconButton onPress={() => router.back()}>
          <ArrowLeft size={18} color={colors.text} />
        </IconButton>
      </View>

      <Text style={type.screenTitle}>Emergency contacts</Text>
      <Text style={[type.body, styles.subtitle]}>
        Add up to 5 trusted people. When an alert fires, they get your location, live audio and a call.
      </Text>

      <View style={styles.illustration}>
        <View style={[styles.square, styles.squareTopRight]} />
        <View style={[styles.square, styles.squareBottomLeft]} />
        <View style={styles.dashedRingOuter}>
          <View style={styles.dashedRingInner}>
            <Users size={30} color={colors.mint} weight="fill" />
          </View>
        </View>
      </View>

      <Text style={[type.cardTitle, styles.emptyTitle]}>No one is listening yet</Text>
      <Text style={[type.meta, styles.emptyMeta]}>
        Your ring works alone, but alerts reach further with people behind them.
      </Text>

      <View style={styles.spacer} />

      <View style={styles.noteCard}>
        <Text style={styles.noteText}>
          Contacts must accept the invitation before they can receive alerts.
        </Text>
      </View>

      <Button
        label="Add emergency contact"
        variant="violet"
        onPress={() => router.push('/add-contact')}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { marginBottom: 24 },
  subtitle: { marginTop: 10, lineHeight: 21 },
  illustration: {
    alignSelf: 'center',
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  dashedRingOuter: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: 'rgba(125,225,189,0.18)',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashedRingInner: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 1.5,
    borderColor: 'rgba(125,225,189,0.3)',
    borderStyle: 'dashed',
    backgroundColor: 'rgba(125,225,189,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    transform: [{ rotate: '18deg' }],
  },
  squareTopRight: { top: 6, right: 10 },
  squareBottomLeft: { bottom: 14, left: 4 },
  emptyTitle: { textAlign: 'center' },
  emptyMeta: { textAlign: 'center', marginTop: 6, paddingHorizontal: 12 },
  spacer: { flex: 1 },
  noteCard: {
    backgroundColor: colors.surfaceFill,
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
  },
  noteText: { fontFamily: fonts.body, fontSize: 12.5, color: colors.textMuted, lineHeight: 18 },
});
