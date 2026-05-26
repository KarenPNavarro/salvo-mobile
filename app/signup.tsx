import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function SignUpScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to get started with Salvō</Text>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="John Doe" placeholderTextColor="rgba(255,255,255,0.3)" autoCapitalize="words"/>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="john@example.com" placeholderTextColor="rgba(255,255,255,0.3)" keyboardType="email-address" autoCapitalize="none"/>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="+1 (555) 000-0000" placeholderTextColor="rgba(255,255,255,0.3)" keyboardType="phone-pad"/>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="••••••••" placeholderTextColor="rgba(255,255,255,0.3)" secureTextEntry/>
        </View>
      </View>
      <Text style={styles.terms}>
        By continuing you agree to Salvō's <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
      </Text>
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/permissions')}>
        <Text style={styles.primaryButtonText}>Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b0067' },
  content: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  backButton: { marginBottom: 24 },
  backArrow: { color: '#ffffff', fontSize: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 40 },
  form: { gap: 20, marginBottom: 24 },
  inputGroup: { gap: 8 },
  label: { color: '#ffffff', fontSize: 14, fontWeight: '500' },
  input: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 16, color: '#ffffff', fontSize: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  terms: { color: 'rgba(255,255,255,0.5)', fontSize: 13, textAlign: 'center', marginBottom: 32, lineHeight: 20 },
  link: { color: '#7de1bd', textDecorationLine: 'underline' },
  primaryButton: { backgroundColor: '#7de1bd', borderRadius: 14, paddingVertical: 18, alignItems: 'center' },
  primaryButtonText: { color: '#1b0067', fontSize: 17, fontWeight: '700' },
});