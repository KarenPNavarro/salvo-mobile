import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function InvitationSentScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.iconBox}>
        <Text style={styles.iconText}>👤</Text>
      </View>
      <Text style={styles.title}>Invitation Sent!</Text>
      <Text style={styles.subtitle}>
        Your contact will receive your invitation via SMS. They'll show up in your contacts once they accept.
      </Text>
      <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/add-contact')}>
        <Text style={styles.secondaryButtonText}>Add Another Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/pair-device')}>
        <Text style={styles.primaryButtonText}>Continue to App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40, alignItems: 'center', justifyContent: 'center' },
  iconBox: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'rgba(255,255,255,0.08)', alignItems: 'center', justifyContent: 'center', marginBottom: 32 },
  iconText: { fontSize: 48 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 16, textAlign: 'center' },
  subtitle: { fontSize: 15, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: 48, lineHeight: 22 },
  secondaryButton: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 14, paddingVertical: 18, alignItems: 'center', alignSelf: 'stretch', marginBottom: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)' },
  secondaryButtonText: { color: '#ffffff', fontSize: 17, fontWeight: '600' },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center', alignSelf: 'stretch' },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
});