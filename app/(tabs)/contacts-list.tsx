import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const contacts = [
  { id: '1', name: 'Sara Johnson', relationship: 'Family', status: 'Accepted' },
  { id: '2', name: 'John Smith', relationship: 'Friend', status: 'Pending' },
  { id: '3', name: 'Emily Davis', relationship: 'Partner', status: 'Accepted' },
];

export default function ContactsListScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>Contacts</Text>
        <TouchableOpacity
          onPress={() => router.push('/add-contact')}
          style={styles.addButton}
        >
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {contacts.map((contact) => (
          <View key={contact.id} style={styles.contactRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{contact.name[0]}</Text>
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactRel}>{contact.relationship}</Text>
            </View>
            <Text style={[styles.status, contact.status === 'Accepted' ? styles.accepted : styles.pending]}>
              {contact.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ffffff' },
  addButton: { width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(125,225,189,0.15)', alignItems: 'center', justifyContent: 'center' },
  addIcon: { color: '#7de1bd', fontSize: 24, fontWeight: 'bold' },
  contactRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 16, marginBottom: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(125,225,189,0.15)', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  avatarText: { color: '#7de1bd', fontSize: 18, fontWeight: 'bold' },
  contactInfo: { flex: 1 },
  contactName: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  contactRel: { color: 'rgba(255,255,255,0.5)', fontSize: 13 },
  status: { fontSize: 13, fontWeight: '500' },
  accepted: { color: '#7de1bd' },
  pending: { color: 'rgba(255,255,255,0.4)' },
});