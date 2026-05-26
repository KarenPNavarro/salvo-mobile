import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function ScanningScreen() {
  const router = useRouter();
  const [found, setFound] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Pair Device</Text>
      <Text style={styles.subtitle}>Make sure your Salvō device is turned on and nearby</Text>

      {/* BLE scan animation */}
      <View style={styles.scanArea}>
        <View style={styles.outerRing}>
          <View style={styles.innerRing}>
            <View style={styles.centerDot}>
              <Text style={styles.bluetoothIcon}>⌁</Text>
            </View>
          </View>
        </View>
        <Text style={styles.scanningText}>
          {found ? 'Device found!' : 'Searching for devices...'}
        </Text>
      </View>

      {/* Available devices */}
      <Text style={styles.availableLabel}>Available Devices</Text>
      <TouchableOpacity
        style={styles.deviceRow}
        onPress={() => setFound(true)}
      >
        <Text style={styles.deviceIcon}>📡</Text>
        <View>
          <Text style={styles.deviceName}>SALVO_001</Text>
          <Text style={styles.deviceStatus}>
            {found ? 'Ready to pair' : 'Tap to select'}
          </Text>
        </View>
      </TouchableOpacity>

      {found && (
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/device-paired')}
        >
          <Text style={styles.primaryButtonText}>Pair Device</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cancelText}>Cancel</Text>
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
  scanArea: { alignItems: 'center', marginBottom: 40 },
  outerRing: { width: 200, height: 200, borderRadius: 100, borderWidth: 1, borderColor: 'rgba(125,225,189,0.2)', alignItems: 'center', justifyContent: 'center' },
  innerRing: { width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: 'rgba(125,225,189,0.4)', alignItems: 'center', justifyContent: 'center' },
  centerDot: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(125,225,189,0.2)', alignItems: 'center', justifyContent: 'center' },
  bluetoothIcon: { fontSize: 36, color: '#7de1bd' },
  scanningText: { color: 'rgba(255,255,255,0.6)', fontSize: 14, marginTop: 16 },
  availableLabel: { color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 12, letterSpacing: 1 },
  deviceRow: { flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, marginBottom: 24 },
  deviceIcon: { fontSize: 24 },
  deviceName: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  deviceStatus: { color: 'rgba(255,255,255,0.5)', fontSize: 13 },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center', marginBottom: 16 },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
  cancelText: { color: 'rgba(255,255,255,0.5)', fontSize: 14, textAlign: 'center' },
});