import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function ContactsScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Emergency Contacts</Text>
      <Text style={styles.subtitle}>Add up to 5 trusted contacts who will receive your alerts</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/add-contact')}>
        <Text style={styles.addIcon}>+</Text>
        <Text style={styles.addText}>Add Emergency Contact</Text>
      </TouchableOpacity>
      <Text style={styles.note}>⚠  Your contacts will need to accept your invitation before they can receive emergency alerts.</Text>
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/pair-device')}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067' },
  content: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  backButton: { marginBottom: 24 },
  backArrow: { color: '#ffffff', fontSize: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32, lineHeight: 24 },
  addButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, gap: 12, marginBottom: 16 },
  addIcon: { color: '#7de1bd', fontSize: 24, fontWeight: 'bold' },
  addText: { color: '#ffffff', fontSize: 16, fontWeight: '500' },
  note: { color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 20, marginBottom: 40 },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center' },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
});