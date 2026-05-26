import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function AddContactScreen() {
  const router = useRouter();
  const [relationship, setRelationship] = useState('Family');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Add Contact</Text>
      <Text style={styles.subtitle}>Invite a trusted one to be your emergency contact</Text>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Jane Doe" placeholderTextColor="rgba(255,255,255,0.3)" autoCapitalize="words"/>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="+1 (555) 000-0000" placeholderTextColor="rgba(255,255,255,0.3)" keyboardType="phone-pad"/>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email (optional)</Text>
          <TextInput style={styles.input} placeholder="jane@example.com" placeholderTextColor="rgba(255,255,255,0.3)" keyboardType="email-address" autoCapitalize="none"/>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Relationship</Text>
          <View style={styles.relationshipRow}>
            {['Family', 'Friend', 'Partner', 'Other'].map((rel) => (
              <TouchableOpacity
                key={rel}
                style={[styles.relButton, relationship === rel && styles.relButtonActive]}
                onPress={() => setRelationship(rel)}
              >
                <Text style={[styles.relText, relationship === rel && styles.relTextActive]}>{rel}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/invitation-sent')}>
        <Text style={styles.primaryButtonText}>Send Invitation</Text>
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
  subtitle: { fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32 },
  form: { gap: 20, marginBottom: 32 },
  inputGroup: { gap: 8 },
  label: { color: '#ffffff', fontSize: 14, fontWeight: '500' },
  input: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 16, color: '#ffffff', fontSize: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  relationshipRow: { flexDirection: 'row', gap: 8 },
  relButton: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  relButtonActive: { backgroundColor: '#7de1bd', borderColor: '#7de1bd' },
  relText: { color: 'rgba(255,255,255,0.6)', fontSize: 14 },
  relTextActive: { color: '#1b0067', fontWeight: '600' },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center' },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
});