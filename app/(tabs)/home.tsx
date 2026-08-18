import { useRouter } from 'expo-router';
import { Bell, HandTap, MapPin, ShieldCheck, VideoCamera } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { IconButton } from '../../components/ui/IconButton';
import { Pill } from '../../components/ui/Pill';
import { ProgressRing } from '../../components/ui/ProgressRing';
import { PulseRings } from '../../components/ui/PulseRings';
import { Screen } from '../../components/ui/Screen';
import { colors, fonts, spacing, type } from '../../constants/theme';
import { useContacts } from '../../contexts/ContactsContext';
import { useDevice } from '../../contexts/DeviceContext';

const USER_NAME = 'Jordan';
const LIVE_SINCE = '7:02 AM';

export default function HomeScreen() {
  const router = useRouter();
  const device = useDevice();
  const { contacts } = useContacts();
  const standbyCount = contacts.filter((c) => c.status === 'Accepted').length;

  return (
    <Screen scroll contentStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Salvō</Text>
        <IconButton onPress={() => {}}>
          <Bell size={20} color={colors.text} />
        </IconButton>
      </View>

      <Pill label="PROTECTED" tone="mint" dot style={styles.statusPill} />

      <Text style={[type.hero, styles.hero]}>You're covered,{'\n'}{USER_NAME}</Text>
      <Text style={[type.meta, styles.heroMeta]}>
        Live since {LIVE_SINCE} · {standbyCount} contacts on standby
      </Text>

      <Card style={styles.deviceCard}>
        <View style={styles.deviceRow}>
          <ProgressRing size={64} strokeWidth={7} progress={device.battery / 100}>
            <Text style={styles.batteryPct}>{device.battery}%</Text>
            <Text style={styles.batteryLabel}>BATT</Text>
          </ProgressRing>
          <View style={styles.deviceInfo}>
            <Text style={type.cardTitle}>{device.name}</Text>
            <Text style={styles.connected}>Connected</Text>
          </View>
        </View>
        <View style={styles.pillRow}>
          <Pill label="Paired" tone="mint" dot />
          <Pill label="Signal strong" tone="mint" />
        </View>
      </Card>

      <View style={styles.activateWrap}>
        <View style={styles.activateAnchor}>
          <View style={styles.pulseOverlay}>
            <PulseRings size={72} color={colors.mint} />
          </View>
          <View style={styles.activateButton}>
            <HandTap size={26} color={colors.mint} weight="fill" />
          </View>
        </View>
        <Text style={[type.cardTitle, styles.activateTitle]}>Pull the ring to activate</Text>
        <Text style={[type.meta, styles.activateMeta]}>
          Emergency mode fires instantly — no phone needed
        </Text>
      </View>

      <Button
        label="Test emergency mode"
        variant="danger"
        icon={<ShieldCheck size={18} color="#FFFFFF" weight="fill" />}
        onPress={() => router.push('/emergency-alert')}
        style={styles.emergencyButton}
      />

      <View style={styles.tilesRow}>
        <Card style={styles.tile}>
          <MapPin size={22} color={colors.mint} />
          <Text style={type.cardTitle}>Location</Text>
          <Text style={type.meta}>GPS tracking active</Text>
        </Card>
        <Card style={styles.tile}>
          <VideoCamera size={22} color={colors.mint} />
          <Text style={type.cardTitle}>Recording</Text>
          <Text style={type.meta}>Auto-record ready</Text>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 8 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 },
  logo: { fontFamily: fonts.heading, fontSize: 22, color: colors.mint },
  statusPill: { marginBottom: 14 },
  hero: { lineHeight: 36 },
  heroMeta: { marginTop: 8, marginBottom: 18 },
  deviceCard: { marginBottom: 22, gap: 16 },
  deviceRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  batteryPct: { fontFamily: fonts.heading, fontSize: 15, color: colors.mint },
  batteryLabel: { fontFamily: fonts.heading, fontSize: 8, color: colors.textFaint, letterSpacing: 0.5 },
  deviceInfo: { gap: 2 },
  connected: { fontFamily: fonts.body, fontSize: 13, color: colors.mint },
  pillRow: { flexDirection: 'row', gap: 8 },
  activateWrap: { alignItems: 'center', marginBottom: 22, paddingVertical: 8 },
  activateAnchor: { width: 72, height: 72, alignItems: 'center', justifyContent: 'center' },
  pulseOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  activateButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(125,225,189,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(125,225,189,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activateTitle: { marginTop: 16 },
  activateMeta: { marginTop: 4, textAlign: 'center' },
  emergencyButton: { marginBottom: 18 },
  tilesRow: { flexDirection: 'row', gap: spacing.cardGap },
  tile: { flex: 1, gap: 6 },
});
