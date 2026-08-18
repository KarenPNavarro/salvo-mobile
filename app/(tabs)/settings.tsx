import { LinearGradient } from 'expo-linear-gradient';
import {
  BellRinging,
  CaretRight,
  ClockCountdown,
  Eye,
  Fingerprint,
  ClockCounterClockwise,
  Lifebuoy,
  Bell,
  MapTrifold,
} from 'phosphor-react-native';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Screen } from '../../components/ui/Screen';
import { Toggle } from '../../components/ui/Toggle';
import { colors, fonts, radii, spacing, type } from '../../constants/theme';

export default function SettingsScreen() {
  const [sirenOn, setSirenOn] = useState(true);

  return (
    <Screen scroll contentStyle={styles.content}>
      <Text style={type.screenTitle}>Settings</Text>

      <LinearGradient
        colors={['rgba(81,49,254,0.35)', 'rgba(27,0,103,0.15)']}
        style={styles.profileCard}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={type.cardTitle}>John Doe</Text>
          <Text style={type.meta}>john@example.com</Text>
        </View>
        <View style={styles.proTag}>
          <Text style={styles.proTagText}>Pro</Text>
        </View>
      </LinearGradient>

      <Section label="Emergency">
        <Row icon={<ClockCountdown size={18} color={colors.mint} />} label="Alert countdown" value="10s" />
        <Divider />
        <Row icon={<MapTrifold size={18} color={colors.mint} />} label="Safe zones" value="2 saved" />
        <Divider />
        <ToggleRow
          icon={<BellRinging size={18} color={colors.mint} />}
          label="Siren on activation"
          value={sirenOn}
          onValueChange={setSirenOn}
        />
      </Section>

      <Section label="Privacy & security">
        <Row icon={<Fingerprint size={18} color={colors.mint} />} label="Face ID & passcode" />
        <Divider />
        <Row icon={<Eye size={18} color={colors.mint} />} label="Location sharing" value="Alerts only" />
        <Divider />
        <Row icon={<ClockCounterClockwise size={18} color={colors.mint} />} label="Alert history" />
      </Section>

      <Section label="General">
        <Row icon={<Bell size={18} color={colors.mint} />} label="Notifications" />
        <Divider />
        <Row icon={<Lifebuoy size={18} color={colors.mint} />} label="Help & support" />
      </Section>
    </Screen>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={[type.sectionLabel, styles.sectionLabel]}>{label}</Text>
      <View style={styles.sectionCard}>{children}</View>
    </View>
  );
}

function Row({ icon, label, value }: { icon: ReactNode; label: string; value?: string }) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      {icon}
      <Text style={[type.body, styles.rowLabel]}>{label}</Text>
      {value && <Text style={type.meta}>{value}</Text>}
      <CaretRight size={16} color="rgba(255,255,255,0.3)" />
    </TouchableOpacity>
  );
}

function ToggleRow({
  icon,
  label,
  value,
  onValueChange,
}: {
  icon: ReactNode;
  label: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      {icon}
      <Text style={[type.body, styles.rowLabel]}>{label}</Text>
      <Toggle value={value} onValueChange={onValueChange} />
    </View>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: spacing.gutter, paddingTop: 8, paddingBottom: 24 },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderRadius: radii.cardLg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    padding: spacing.cardInset,
    marginTop: 18,
    marginBottom: 24,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontFamily: fonts.heading, fontSize: 18, color: colors.text },
  profileInfo: { flex: 1, gap: 2 },
  proTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: radii.pill, backgroundColor: 'rgba(125,225,189,0.2)' },
  proTagText: { fontFamily: fonts.heading, fontSize: 11, color: colors.mint },
  section: { marginBottom: 20 },
  sectionLabel: { marginBottom: 10, marginLeft: 2 },
  sectionCard: {
    backgroundColor: colors.surfaceFill,
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
    borderRadius: radii.card,
    overflow: 'hidden',
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: spacing.cardInset, paddingVertical: 15 },
  rowLabel: { flex: 1 },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.08)', marginLeft: spacing.cardInset },
});
