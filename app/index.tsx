import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo */}
      <View style={styles.logo}>
        <Text style={styles.logoText}>ō</Text>
      </View>

      {/* Headline */}
      <Text style={styles.title}>Welcome to Salvō</Text>
      <Text style={styles.subtitle}>
        Stay connected with loved ones and get help when you need it most.
      </Text>

      {/* Feature bullets */}
      <View style={styles.features}>
        <View style={styles.featureRow}>
          <Text style={styles.featureIcon}>🔔</Text>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Instant Alerts</Text>
            <Text style={styles.featureDesc}>
              Send emergency alerts to your trusted contacts instantly
            </Text>
          </View>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureIcon}>📍</Text>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Live Location</Text>
            <Text style={styles.featureDesc}>
              Share your real-time location with emergency contacts
            </Text>
          </View>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureIcon}>⌚</Text>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Wearable Device</Text>
            <Text style={styles.featureDesc}>
              Connect your Salvō device for hands-free emergency alerts
            </Text>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.primaryButtonText}>Get Started →</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.secondaryButtonText}>
          I already have an account
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b0067',
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#5131fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logoText: {
    color: '#7de1bd',
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7de1bd',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 40,
    lineHeight: 24,
  },
  features: {
    flex: 1,
    gap: 16,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },
  featureIcon: {
    fontSize: 22,
    marginTop: 2,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 4,
  },
  featureDesc: {
    color: '#ffffff',
    opacity: 0.7,
    fontSize: 13,
    lineHeight: 18,
  },
  primaryButton: {
    backgroundColor: '#7de1bd',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#1b0067',
    fontSize: 17,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: '#ffffff',
    opacity: 0.7,
    fontSize: 14,
    textAlign: 'center',
  },
});