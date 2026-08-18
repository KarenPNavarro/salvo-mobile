import { useRouter } from 'expo-router';
import { CaretRight, Plus, UserPlus } from 'phosphor-react-native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from '../../components/ui/IconButton';
import { Screen } from '../../components/ui/Screen';
import { colors, fonts, radii, spacing, type } from '../../constants/theme';
import { useContacts, type Contact } from '../../contexts/ContactsContext';

export default function ContactsListScreen() {
  const router = useRouter();
  const { contacts, maxContacts } = useContacts();

  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={type.screenTitle}>Contacts</Text>
          <Text style={[type.meta, styles.subtitle]}>
            {contacts.length} of {maxContacts} trusted contacts
          </Text>
        </View>
        <IconButton variant="violet" onPress={() => router.push('/add-contact')}>
          <Plus size={20} color="#FFFFFF" weight="bold" />
        </IconButton>
      </View>

      <View style={styles.capacityBar}>
        {Array.from({ length: maxContacts }).map((_, i) => (
          <View
            key={i}
            style={[styles.capacitySegment, i < contacts.length && styles.capacitySegmentFilled]}
          />
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} onPress={() => router.push(`/contact/${contact.id}`)} />
        ))}

        {contacts.length < maxContacts && (
          <TouchableOpacity
            style={styles.addRow}
            onPress={() => router.push('/add-contact')}
            activeOpacity={0.75}
          >
            <UserPlus size={18} color={colors.mint} />
            <Text style={styles.addRowText}>Add a contact</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </Screen>
  );
}

function ContactRow({ contact, onPress }: { contact: Contact; onPress: () => void }) {
  const accepted = contact.status === 'Accepted';
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.75}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials(contact.name)}</Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={type.cardTitle}>{contact.name}</Text>
        <Text style={type.meta}>
          {contact.relationship} · {contact.phone}
        </Text>
      </View>
      <Text style={[styles.statusText, accepted ? styles.statusAccepted : styles.statusPending]}>
        {contact.status}
      </Text>
      <CaretRight size={16} color="rgba(255,255,255,0.3)" />
    </TouchableOpacity>
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
  container: { paddingTop: 8 },
  header: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 },
  subtitle: { marginTop: 4 },
  capacityBar: { flexDirection: 'row', gap: 6, marginBottom: 20 },
  capacitySegment: { flex: 1, height: 4, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.09)' },
  capacitySegmentFilled: { backgroundColor: colors.mint },
  list: { gap: spacing.cardGap, paddingBottom: 24 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.surfaceFill,
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
    borderRadius: radii.card,
    padding: spacing.cardInset,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(125,225,189,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontFamily: fonts.heading, fontSize: 15, color: colors.mint },
  rowInfo: { flex: 1, gap: 2 },
  statusText: { fontFamily: fonts.heading, fontSize: 11.5 },
  statusAccepted: { color: colors.mint },
  statusPending: { color: colors.amber },
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(125,225,189,0.3)',
    borderStyle: 'dashed',
    borderRadius: radii.card,
    paddingVertical: 18,
  },
  addRowText: { fontFamily: fonts.heading, fontSize: 14.5, color: colors.mint },
});
