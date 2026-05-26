import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function PairDeviceScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Connect Your Device</Text>
      <Text style={styles.subtitle}>Pair your Salvō device for hands-free emergency alerts</Text>
      <View style={styles.steps}>
        <View style={styles.step}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>1</Text>
          </View>
          <Text style={styles.stepText}>Press and hold your Salvō device button for 3 seconds until the LED blinks blue.</Text>
        </View>
        <View style={styles.step}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>2</Text>
          </View>
          <Text style={styles.stepText}>Enable Bluetooth — make sure Bluetooth is enabled on your phone.</Text>
        </View>
        <View style={styles.step}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>3</Text>
          </View>
          <Text style={styles.stepText}>Tap the button below to search for your Salvō device.</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/scanning')}>
        <Text style={styles.primaryButtonText}>Search for Device</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.skipText}>Skip / Pair Later</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  backButton: { marginBottom: 24 },
  backArrow: { color: '#ffffff', fontSize: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 40, lineHeight: 24 },
  steps: { flex: 1, gap: 24 },
  step: { flexDirection: 'row', gap: 16, alignItems: 'flex-start' },
  stepNumber: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#7de1bd', alignItems: 'center', justifyContent: 'center' },
  stepNumberText: { color: '#1b0067', fontWeight: 'bold', fontSize: 16 },
  stepText: { flex: 1, color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 22 },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center', marginBottom: 16 },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
  skipText: { color: 'rgba(255,255,255,0.5)', fontSize: 14, textAlign: 'center' },
});
