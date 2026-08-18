import { ArrowsClockwise, CaretRight, CellSignalFull, MagnifyingGlass } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Pill } from '../../components/ui/Pill';
import { ProgressRing } from '../../components/ui/ProgressRing';
import { Screen } from '../../components/ui/Screen';
import { colors, fonts, spacing, type } from '../../constants/theme';
import { useDevice } from '../../contexts/DeviceContext';

export default function DeviceScreen() {
  const device = useDevice();

  return (
    <Screen scroll contentStyle={styles.container}>
      <View style={styles.header}>
        <Text style={type.screenTitle}>Device</Text>
        <Pill label="Connected" tone="mint" dot />
      </View>

      <Card large style={styles.heroCard}>
        <ProgressRing size={150} strokeWidth={12} progress={device.battery / 100}>
          <Text style={styles.batteryPct}>{device.battery}%</Text>
          <Text style={styles.batteryLabel}>BATTERY</Text>
        </ProgressRing>
        <Text style={[type.cardTitle, styles.deviceName]}>{device.name}</Text>
        <Text style={type.meta}>
          Size {device.size} · {device.color} · about {device.daysLeft} days of charge left
        </Text>
      </Card>

      <Card style={styles.infoCard}>
        <Row label="Connection" value="Stable" valueColor={colors.mint} />
        <Divider />
        <Row label="Signal strength" value={`${device.signalDbm} dBm`} />
        <Divider />
        <Row label="Last sync" value={device.lastSyncMinutesAgo === 0 ? 'Just now' : `${device.lastSyncMinutesAgo} min ago`} />
      </Card>

      <View style={styles.actionsRow}>
        <Button
          label="Find ring"
          variant="outline-mint"
          icon={<MagnifyingGlass size={17} color={colors.mint} />}
          style={styles.actionButton}
        />
        <Button
          label="Re-pair"
          variant="outline-neutral"
          icon={<ArrowsClockwise size={17} color={colors.text} />}
          style={styles.actionButton}
        />
      </View>

      <Card style={styles.firmwareCard}>
        <View style={styles.firmwareRow}>
          <CellSignalFull size={22} color={colors.mint} />
          <View style={styles.firmwareInfo}>
            <Text style={type.cardTitle}>Firmware {device.firmwareVersion}</Text>
            <Text style={type.meta}>{device.firmwareUpToDate ? 'Up to date' : 'Update available'}</Text>
          </View>
          <CaretRight size={18} color="rgba(255,255,255,0.3)" />
        </View>
      </Card>
    </Screen>
  );
}

function Row({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <View style={styles.row}>
      <Text style={type.body}>{label}</Text>
      <Text style={[type.body, valueColor ? { color: valueColor } : null]}>{value}</Text>
    </View>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  container: { paddingTop: 8 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  heroCard: { alignItems: 'center', gap: 6, marginBottom: spacing.cardGap, paddingVertical: 28 },
  batteryPct: { fontFamily: fonts.heading, fontSize: 30, color: colors.mint },
  batteryLabel: { fontFamily: fonts.heading, fontSize: 10, color: colors.textFaint, letterSpacing: 1, marginTop: 2 },
  deviceName: { marginTop: 18 },
  infoCard: { marginBottom: spacing.cardGap, gap: 0 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.08)' },
  actionsRow: { flexDirection: 'row', gap: spacing.cardGap, marginBottom: spacing.cardGap },
  actionButton: { flex: 1 },
  firmwareCard: {},
  firmwareRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  firmwareInfo: { flex: 1 },
});
