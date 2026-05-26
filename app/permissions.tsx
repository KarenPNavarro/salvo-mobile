import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function PermissionsScreen() {
  const router = useRouter();
  const [permissions, setPermissions] = useState({
    activity: false,
    location: false,
    notifications: false,
    camera: false,
    microphone: false,
  });

  const toggle = (key: keyof typeof permissions) => {
    setPermissions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const permissionsList = [
    {
      key: 'activity',
      icon: '📊',
      title: 'Activity Recognition',
      desc: 'Improves battery efficiency when obtaining your location.',
    },
    {
      key: 'location',
      icon: '📍',
      title: 'Location Services',
      desc: 'Enables alert notifications and location sharing with trusted contacts.',
    },
    {
      key: 'notifications',
      icon: '🔔',
      title: 'Notifications',
      desc: 'Receive alerts and updates from Salvō.',
    },
    {
      key: 'camera',
      icon: '📷',
      title: 'Camera Access',
      desc: 'Record video evidence during emergency alerts.',
    },
    {
      key: 'microphone',
      icon: '🎤',
      title: 'Microphone',
      desc: 'Record audio for your alerts.',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Permissions</Text>
      <Text style={styles.subtitle}>
        Salvō needs a few permissions to keep you safe
      </Text>

      {/* Permissions list */}
      <View style={styles.list}>
        {permissionsList.map((item) => (
          <View key={item.key} style={styles.permissionRow}>
            <View style={styles.permissionLeft}>
              <View style={styles.iconBox}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <View style={styles.permissionText}>
                <Text style={styles.permissionTitle}>{item.title}</Text>
                <TouchableOpacity>
                  <Text style={styles.whyText}>Why do we need this? ▾</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Switch
              value={permissions[item.key as keyof typeof permissions]}
              onValueChange={() => toggle(item.key as keyof typeof permissions)}
              trackColor={{ false: 'rgba(255,255,255,0.2)', true: '#7de1bd' }}
              thumbColor="#ffffff"
            />
          </View>
        ))}
      </View>

      {/* Continue button */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push('/face-id')}
      >
        <Text style={styles.primaryButtonText}>Continue</Text>
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
    marginBottom: 32,
    lineHeight: 24,
  },
  list: {
    flex: 1,
    gap: 12,
  },
  permissionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 16,
    padding: 16,
  },
  permissionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(125,225,189,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
  },
  permissionText: {
    flex: 1,
  },
  permissionTitle: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 2,
  },
  whyText: {
    color: '#7de1bd',
    fontSize: 12,
  },
  primaryButton: {
    backgroundColor: '#7de1bd',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 24,
  },
  primaryButtonText: {
    color: '#1b0067',
    fontSize: 17,
    fontWeight: '700',
  },
});