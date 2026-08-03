import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function DeviceScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Device</Text>
      <View style={styles.card}>
        <View style={styles.deviceHeader}>
          <View style={styles.deviceIconBox}>
            <Text style={styles.deviceIcon}>📡</Text>
          </View>
          <View>
            <Text style={styles.deviceName}>SALVO_001</Text>
            <Text style={styles.deviceConnected}>Connected</Text>
          </View>
        </View>
        <View style={styles.divider}/>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Status</Text>
          <Text style={styles.infoValueGreen}>Connected</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Battery Level</Text>
          <Text style={styles.infoValue}>100%</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Signal Strength</Text>
          <Text style={styles.infoValue}>Strong</Text>
        </View>
        <View style={styles.divider}/>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Firmware</Text>
          <Text style={styles.infoValue}>v1.0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 },
  card: { backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 20 },
  deviceHeader: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 20 },
  deviceIconBox: { width: 52, height: 52, borderRadius: 14, backgroundColor: 'rgba(125,225,189,0.15)', alignItems: 'center', justifyContent: 'center' },
  deviceIcon: { fontSize: 24 },
  deviceName: { color: '#ffffff', fontSize: 18, fontWeight: '600' },
  deviceConnected: { color: '#7de1bd', fontSize: 14 },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)', marginVertical: 16 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  infoLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 15 },
  infoValue: { color: '#ffffff', fontSize: 15, fontWeight: '500' },
  infoValueGreen: { color: '#7de1bd', fontSize: 15, fontWeight: '500' },
});
