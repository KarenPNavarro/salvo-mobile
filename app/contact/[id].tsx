import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, ChatCircle, PencilSimple, Phone, Trash } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { IconButton } from '../../components/ui/IconButton';
import { Pill } from '../../components/ui/Pill';
import { Screen } from '../../components/ui/Screen';
import { Toggle } from '../../components/ui/Toggle';
import { colors, fonts, type } from '../../constants/theme';
import { useContacts } from '../../contexts/ContactsContext';

export default function ContactDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { getContact, updateContact, removeContact } = useContacts();
  const contact = getContact(id);

  if (!contact) {
    return (
      <Screen>
        <Text style={type.body}>Contact not found.</Text>
      </Screen>
    );
  }

  const handleRemove = () => {
    removeContact(contact.id);
    router.back();
  };

  return (
    <Screen scroll>
      <View style={styles.header}>
        <IconButton onPress={() => router.back()}>
          <ArrowLeft size={18} color={colors.text} />
        </IconButton>
        <IconButton onPress={() => {}}>
          <PencilSimple size={18} color={colors.text} />
        </IconButton>
      </View>

      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials(contact.name)}</Text>
        </View>
        <Text style={[type.hero, styles.name]}>{contact.name}</Text>
        <View style={styles.profileTags}>
          <Pill label={contact.status === 'Accepted' ? 'Active' : 'Pending'} tone={contact.status === 'Accepted' ? 'mint' : 'amber'} dot />
          <Text style={type.meta}>{contact.relationship}</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <Button
          label="Call"
          variant="outline-mint"
          icon={<Phone size={16} color={colors.mint} weight="fill" />}
          style={styles.actionButton}
        />
        <Button
          label="Message"
          variant="outline-neutral"
          icon={<ChatCircle size={16} color={colors.text} />}
          style={styles.actionButton}
        />
      </View>

      <Text style={type.sectionLabel}>Contact information</Text>
      <Card style={styles.infoCard}>
        <Text style={type.body}>{contact.phone}</Text>
        {contact.email && <Text style={[type.body, styles.infoGap]}>{contact.email}</Text>}
      </Card>

      <Text style={type.sectionLabel}>When an alert fires</Text>
      <Card style={styles.togglesCard}>
        <ToggleRow
          label="Auto-call after alert"
          value={contact.autoCall}
          onValueChange={(v) => updateContact(contact.id, { autoCall: v })}
        />
        <View style={styles.divider} />
        <ToggleRow
          label="Send location updates"
          value={contact.sendLocation}
          onValueChange={(v) => updateContact(contact.id, { sendLocation: v })}
        />
        <View style={styles.divider} />
        <ToggleRow
          label="Share live camera feed"
          value={contact.shareCamera}
          onValueChange={(v) => updateContact(contact.id, { shareCamera: v })}
        />
      </Card>

      <View style={styles.statsRow}>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{contact.alertsSent}</Text>
          <Text style={type.meta}>Alerts sent</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{contact.avgResponseSeconds}s</Text>
          <Text style={type.meta}>Avg response</Text>
        </Card>
      </View>

      <Button
        label="Remove contact"
        variant="ghost-danger"
        icon={<Trash size={16} color={colors.rose} />}
        onPress={handleRemove}
      />
    </Screen>
  );
}

function ToggleRow({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) {
  return (
    <View style={styles.toggleRow}>
      <Text style={type.body}>{label}</Text>
      <Toggle value={value} onValueChange={onValueChange} />
    </View>
  );
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  profile: { alignItems: 'center', marginBottom: 24 },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 26,
    backgroundColor: 'rgba(125,225,189,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  avatarText: { fontFamily: fonts.heading, fontSize: 26, color: colors.mint },
  name: { textAlign: 'center' },
  profileTags: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10 },
  actionsRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  actionButton: { flex: 1 },
  infoCard: { marginBottom: 20 },
  infoGap: { marginTop: 8 },
  togglesCard: { gap: 0, marginBottom: 20 },
  toggleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.08)' },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statCard: { flex: 1, alignItems: 'center', gap: 4 },
  statValue: { fontFamily: fonts.heading, fontSize: 26, color: colors.mint },
});
