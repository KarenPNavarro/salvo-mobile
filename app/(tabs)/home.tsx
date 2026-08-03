import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.brand}>Salvō</Text>
      <Text style={styles.tagline}>You're protected</Text>
      <View style={styles.deviceCard}>
        <View style={styles.deviceCardLeft}>
          <Text style={styles.deviceCardIcon}>📡</Text>
          <View>
            <Text style={styles.deviceCardName}>SALVO_001</Text>
            <Text style={styles.deviceCardStatus}>Connected</Text>
            <Text style={styles.deviceCardSignal}>Signal: Strong</Text>
          </View>
        </View>
        <Text style={styles.battery}>100%</Text>
      </View>
      <Text style={styles.hint}>Press button on device to activate</Text>
      <Text style={styles.hintSub}>Emergency mode will activate instantly</Text>
      <TouchableOpacity
        style={styles.alarmButton}
        onPress={() => router.push('/emergency-alert')}
      >
        <Text style={styles.alarmButtonText}>Test Emergency Mode</Text>
      </TouchableOpacity>
      <View style={styles.statusRow}>
        <View style={styles.statusCard}>
          <Text style={styles.statusIcon}>📍</Text>
          <Text style={styles.statusLabel}>Location</Text>
          <Text style={styles.statusValue}>GPS active</Text>
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusIcon}>📷</Text>
          <Text style={styles.statusLabel}>Recording</Text>
          <Text style={styles.statusValue}>Auto-record ready</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 20 },
  brand: { fontSize: 32, fontWeight: 'bold', color: '#7de1bd', marginBottom: 4 },
  tagline: { fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 24 },
  deviceCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, marginBottom: 24 },
  deviceCardLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  deviceCardIcon: { fontSize: 24 },
  deviceCardName: { color: '#ffffff', fontWeight: '600', fontSize: 16 },
  deviceCardStatus: { color: '#7de1bd', fontSize: 13 },
  deviceCardSignal: { color: 'rgba(255,255,255,0.5)', fontSize: 13 },
  battery: { color: '#7de1bd', fontSize: 16, fontWeight: '600' },
  hint: { color: 'rgba(255,255,255,0.7)', fontSize: 15, textAlign: 'center', marginBottom: 4 },
  hintSub: { color: 'rgba(255,255,255,0.4)', fontSize: 13, textAlign: 'center', marginBottom: 24 },
  alarmButton: { backgroundColor: '#C0392B', borderRadius: 14, paddingVertical: 20, alignItems: 'center', marginBottom: 24 },
  alarmButtonText: { color: '#ffffff', fontSize: 17, fontWeight: '700' },
  statusRow: { flexDirection: 'row', gap: 12 },
  statusCard: { flex: 1, backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 16, alignItems: 'center', gap: 4 },
  statusIcon: { fontSize: 24 },
  statusLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 12 },
  statusValue: { color: '#ffffff', fontSize: 13, fontWeight: '500', textAlign: 'center' },
});
