import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

export default function EmergencyActiveScreen() {
  const router = useRouter();
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.recordingBadge}>
          <View style={styles.recordingDot} />
          <Text style={styles.recordingText}>LIVE</Text>
        </View>
        <Text style={styles.timer}>{formatTime(elapsed)}</Text>
      </View>

      {/* Camera placeholder */}
      <View style={styles.cameraView}>
        <Text style={styles.cameraIcon}>📷</Text>
        <Text style={styles.cameraLabel}>Camera Recording Active</Text>
        <Text style={styles.cameraSubLabel}>
          Evidence is being recorded and stored securely
        </Text>
      </View>

      {/* Status cards */}
      <View style={styles.statusRow}>
        <View style={styles.statusCard}>
          <Text style={styles.statusIcon}>📍</Text>
          <Text style={styles.statusLabel}>Location</Text>
          <Text style={styles.statusValue}>Streaming</Text>
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusIcon}>🎤</Text>
          <Text style={styles.statusLabel}>Audio</Text>
          <Text style={styles.statusValue}>Recording</Text>
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusIcon}>👥</Text>
          <Text style={styles.statusLabel}>Contacts</Text>
          <Text style={styles.statusValue}>Notified</Text>
        </View>
      </View>

      {/* Contacts alerted */}
      <View style={styles.alertedBox}>
        <Text style={styles.alertedTitle}>Emergency contacts alerted</Text>
        <View style={styles.contactsList}>
          <Text style={styles.contactItem}>✓  Sara Johnson</Text>
          <Text style={styles.contactItem}>✓  Emily Davis</Text>
          <Text style={styles.contactItem}>⏳  John Smith</Text>
        </View>
      </View>

      {/* End alert button */}
      <TouchableOpacity
        style={styles.endButton}
        onPress={() => router.replace('/(tabs)/home')}
      >
        <Text style={styles.endButtonText}>End Alert</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Ending the alert will stop recording and notify your contacts
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  recordingBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#C0392B', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, gap: 6 },
  recordingDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ffffff' },
  recordingText: { color: '#ffffff', fontWeight: '700', fontSize: 13 },
  timer: { color: '#ffffff', fontSize: 24, fontWeight: '700' },
  cameraView: { height: 200, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#C0392B', gap: 8 },
  cameraIcon: { fontSize: 48 },
  cameraLabel: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  cameraSubLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 12, textAlign: 'center', paddingHorizontal: 24 },
  statusRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  statusCard: { flex: 1, backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 12, padding: 12, alignItems: 'center', gap: 4 },
  statusIcon: { fontSize: 20 },
  statusLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 11 },
  statusValue: { color: '#7de1bd', fontSize: 12, fontWeight: '600' },
  alertedBox: { backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 16, marginBottom: 24, flex: 1 },
  alertedTitle: { color: '#ffffff', fontWeight: '600', fontSize: 15, marginBottom: 12 },
  contactsList: { gap: 10 },
  contactItem: { color: 'rgba(255,255,255,0.8)', fontSize: 14 },
  endButton: { backgroundColor: '#C0392B', borderRadius: 14, paddingVertical: 18, alignItems: 'center', marginBottom: 12 },
  endButtonText: { color: '#ffffff', fontSize: 17, fontWeight: '700' },
  note: { color: 'rgba(255,255,255,0.4)', fontSize: 12, textAlign: 'center' },
});
