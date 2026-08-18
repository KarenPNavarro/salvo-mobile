import { useRouter } from 'expo-router';
import { Fingerprint, MapPin, Microphone, Phone, VideoCamera } from 'phosphor-react-native';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { Screen } from '../components/ui/Screen';
import { fonts, type } from '../constants/theme';
import { useContacts } from '../contexts/ContactsContext';

export default function EmergencyActiveScreen() {
  const router = useRouter();
  const { contacts } = useContacts();
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const alertedCount = contacts.length;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleEnd = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <Screen alert>
      <View style={styles.container}>
        <View style={styles.livePill}>
          <View style={styles.liveDot} />
          <Text style={styles.livePillText}>LIVE · {formatTime(elapsed)}</Text>
        </View>

        <Text style={[type.hero, styles.title]}>Emergency active</Text>
        <Text style={styles.subtitle}>{alertedCount} contacts have been alerted</Text>

        <View style={styles.statusList}>
          <StatusRow icon={<VideoCamera size={19} color="#FFFFFF" />} label="Recording camera" />
          <StatusRow icon={<Microphone size={19} color="#FFFFFF" />} label="Recording audio" />
          <StatusRow icon={<MapPin size={19} color="#FFFFFF" />} label="Sharing location" liveLabel="live" />
        </View>

        <View style={styles.callNote}>
          <Phone size={16} color="rgba(255,255,255,0.85)" weight="fill" />
          <Text style={styles.callNoteText}>
            {contacts[0]?.name ?? 'A contact'} answered · calling {contacts[1]?.name ?? 'next contact'} next
          </Text>
        </View>

        <View style={styles.spacer} />

        <Button
          label="End emergency alert"
          variant="alert-white"
          onPress={handleEnd}
        />
        <View style={styles.hintRow}>
          <Fingerprint size={13} color="rgba(255,255,255,0.7)" />
          <Text style={styles.hint}>Requires Face ID · contacts will be told you're safe</Text>
        </View>
      </View>
    </Screen>
  );
}

function StatusRow({ icon, label, liveLabel }: { icon: ReactNode; label: string; liveLabel?: string }) {
  return (
    <View style={styles.statusRow}>
      {icon}
      <Text style={styles.statusLabel}>{label}</Text>
      <View style={styles.statusRight}>
        {liveLabel ? (
          <Text style={styles.statusLiveLabel}>{liveLabel}</Text>
        ) : (
          <View style={styles.statusDot} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  livePill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.24)',
    marginBottom: 22,
  },
  liveDot: { width: 7, height: 7, borderRadius: 3.5, backgroundColor: '#FFFFFF' },
  livePillText: { fontFamily: fonts.heading, fontSize: 12, color: '#FFFFFF', letterSpacing: 0.5 },
  title: { color: '#FFFFFF', textAlign: 'center' },
  subtitle: { fontFamily: fonts.body, fontSize: 14.5, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: 8, marginBottom: 26 },
  statusList: { gap: 10, marginBottom: 16 },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  statusLabel: { flex: 1, fontFamily: fonts.heading, fontSize: 14.5, color: '#FFFFFF' },
  statusRight: { alignItems: 'flex-end' },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FFFFFF' },
  statusLiveLabel: { fontFamily: fonts.body, fontSize: 12, color: 'rgba(255,255,255,0.75)' },
  callNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  callNoteText: { flex: 1, fontFamily: fonts.body, fontSize: 12.5, color: 'rgba(255,255,255,0.9)' },
  spacer: { flex: 1 },
  hintRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 12 },
  hint: { fontFamily: fonts.body, fontSize: 12, color: 'rgba(255,255,255,0.7)', textAlign: 'center' },
});
