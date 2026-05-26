import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function DevicePairedScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.iconBox}>
        <Text style={styles.checkmark}>✓</Text>
      </View>
      <Text style={styles.title}>Device Paired!</Text>
      <Text style={styles.subtitle}>
        Your Salvō device is now connected and ready to use.
      </Text>
      <View style={styles.deviceCard}>
        <Text style={styles.deviceName}>SALVO_001</Text>
        <Text style={styles.deviceInfo}>Firmware v1.0  ·  Battery 100%</Text>
      </View>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push('/(tabs)/home')}
      >
        <Text style={styles.primaryButtonText}>Continue to App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40, alignItems: 'center', justifyContent: 'center' },
  iconBox: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'rgba(125,225,189,0.15)', alignItems: 'center', justifyContent: 'center', marginBottom: 32 },
  checkmark: { fontSize: 48, color: '#7de1bd' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 15, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: 32, lineHeight: 22 },
  deviceCard: { backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, alignItems: 'center', alignSelf: 'stretch', marginBottom: 48 },
  deviceName: { color: '#ffffff', fontSize: 18, fontWeight: '600', marginBottom: 4 },
  deviceInfo: { color: 'rgba(255,255,255,0.5)', fontSize: 14 },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center', alignSelf: 'stretch' },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
});
