import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function FaceIDScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <View style={styles.iconBox}>
        <Text style={styles.iconText}>🔐</Text>
      </View>
      <Text style={styles.title}>Set Up Face ID</Text>
      <Text style={styles.subtitle}>Use Face ID to quickly cancel false alarms and secure your account</Text>
      <View style={styles.bullets}>
        <Text style={styles.bullet}>✓  Cancel emergency alerts with just a glance</Text>
        <Text style={styles.bullet}>✓  Quick and secure authentication</Text>
        <Text style={styles.bullet}>✓  Works even in emergencies</Text>
      </View>
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/contacts')}>
        <Text style={styles.primaryButtonText}>Set Up Face ID</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/contacts')}>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40, alignItems: 'center' },
  backButton: { alignSelf: 'flex-start', marginBottom: 40 },
  backArrow: { color: '#ffffff', fontSize: 24 },
  iconBox: { width: 100, height: 100, borderRadius: 24, backgroundColor: 'rgba(125,225,189,0.15)', alignItems: 'center', justifyContent: 'center', marginBottom: 32 },
  iconText: { fontSize: 48 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 15, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: 40, lineHeight: 22 },
  bullets: { alignSelf: 'stretch', gap: 16, marginBottom: 48 },
  bullet: { color: '#ffffff', fontSize: 15, opacity: 0.8 },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center', alignSelf: 'stretch', marginBottom: 16 },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
  skipText: { color: 'rgba(255,255,255,0.5)', fontSize: 14 },
});