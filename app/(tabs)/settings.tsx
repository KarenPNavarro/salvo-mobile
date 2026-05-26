import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function SettingsScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="light" />
      <Text style={styles.title}>Settings</Text>
      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>J</Text>
        </View>
        <View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john@example.com</Text>
        </View>
      </View>
      <Text style={styles.sectionLabel}>ACCOUNT</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Edit Profile</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Update Password</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionLabel}>EMERGENCY</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Alert Countdown</Text>
          <Text style={styles.rowValue}>10 seconds</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Safe Zones</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionLabel}>PRIVACY & SECURITY</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Face ID & Passcode</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Location Sharing</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>History</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionLabel}>GENERAL</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Notifications</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Help & Support</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>About Salvō</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067' },
  content: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 },
  profileRow: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 32 },
  avatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: 'rgba(125,225,189,0.15)', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#7de1bd', fontSize: 22, fontWeight: 'bold' },
  profileName: { color: '#ffffff', fontSize: 18, fontWeight: '600' },
  profileEmail: { color: 'rgba(255,255,255,0.5)', fontSize: 14 },
  sectionLabel: { color: 'rgba(255,255,255,0.3)', fontSize: 11, letterSpacing: 1, marginBottom: 8, marginTop: 16 },
  section: { backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  rowText: { color: '#ffffff', fontSize: 15 },
  rowValue: { color: 'rgba(255,255,255,0.5)', fontSize: 14 },
  arrow: { color: 'rgba(255,255,255,0.3)', fontSize: 20 },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.08)', marginHorizontal: 16 },
  logoutButton: { marginTop: 24, backgroundColor: 'rgba(192,57,43,0.2)', borderRadius: 14, paddingVertical: 18, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(192,57,43,0.4)' },
  logoutText: { color: '#C0392B', fontSize: 17, fontWeight: '600' },
});