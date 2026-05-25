import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function VerifyPhoneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Verify Phone</Text>
      <Text style={styles.subtitle}>
        We sent a 6-digit code to your phone number. Enter it below to continue.
      </Text>

      <TextInput
        style={styles.codeInput}
        placeholder="000000"
        placeholderTextColor="rgba(255,255,255,0.2)"
        keyboardType="number-pad"
        maxLength={6}
        textAlign="center"
      />

      <TouchableOpacity style={styles.resendRow}>
        <Text style={styles.resendText}>
          Didn't receive a code?{' '}
          <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b0067',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 24,
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 48,
    lineHeight: 24,
  },
  codeInput: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    paddingVertical: 20,
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    marginBottom: 24,
  },
  resendRow: {
    alignItems: 'center',
    marginBottom: 40,
  },
  resendText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
  },
  resendLink: {
    color: '#7de1bd',
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#7de1bd',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#1b0067',
    fontSize: 17,
    fontWeight: '700',
  },
});
