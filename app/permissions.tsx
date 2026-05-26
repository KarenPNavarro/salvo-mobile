import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function PermissionsScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Permissions</Text>
      <Text style={styles.subtitle}>Salvō needs a few permissions to keep you safe</Text>
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/face-id')}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  backButton: { marginBottom: 24 },
  backArrow: { color: '#ffffff', fontSize: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32 },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center', marginTop: 24 },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
});