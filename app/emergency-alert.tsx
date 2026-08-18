import { useRouter } from 'expo-router';
import { Fingerprint } from 'phosphor-react-native';
import { useEffect, useRef, useState } from 'react';
import { PanResponder, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { Pill } from '../components/ui/Pill';
import { ProgressRing } from '../components/ui/ProgressRing';
import { PulseRings } from '../components/ui/PulseRings';
import { Screen } from '../components/ui/Screen';
import { fonts, type } from '../constants/theme';

const TOTAL_SECONDS = 10;

export default function EmergencyAlertScreen() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const cancelledRef = useRef(false);

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (!cancelledRef.current) {
        router.replace('/emergency-active');
      }
      return;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, router]);

  const cancel = () => {
    cancelledRef.current = true;
    router.back();
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => gesture.dy < -12,
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -40) cancel();
      },
    })
  ).current;

  return (
    <Screen alert>
      <View style={styles.container} {...panResponder.panHandlers}>
        <Pill label="TEST MODE" tone="neutral" style={styles.testPill} />

        <View style={styles.ringWrap}>
          <View style={styles.pulseOverlay}>
            <PulseRings size={216} color="#FFFFFF" duration={2200} stagger={750} maxScale={1.6} />
          </View>
          <ProgressRing
            size={216}
            strokeWidth={10}
            progress={secondsLeft / TOTAL_SECONDS}
            fillColor="rgba(255,255,255,0.9)"
            trackColor="rgba(255,255,255,0.18)"
            duration={950}
          >
            <Text style={styles.countdownNumber}>{secondsLeft}</Text>
            <Text style={styles.countdownUnit}>SECONDS</Text>
          </ProgressRing>
        </View>

        <Text style={[type.hero, styles.title]}>Emergency alert</Text>
        <Text style={styles.subtitle}>Your contacts will be alerted unless you cancel.</Text>
        <Text style={styles.locating}>Locating contacts in your area</Text>

        <View style={styles.spacer} />

        <Button
          label="Use Face ID to cancel"
          variant="alert-white"
          icon={<Fingerprint size={18} color="#BE1839" weight="fill" />}
          onPress={cancel}
        />
        <Text style={styles.hint}>Swipe up to cancel manually</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  testPill: { alignSelf: 'center', marginBottom: 28, borderColor: 'rgba(255,255,255,0.3)' },
  ringWrap: { width: 216, height: 216, alignItems: 'center', justifyContent: 'center', marginBottom: 28 },
  pulseOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  countdownNumber: { fontFamily: fonts.heading, fontSize: 76, color: '#FFFFFF' },
  countdownUnit: { fontFamily: fonts.heading, fontSize: 13, letterSpacing: 2, color: 'rgba(255,255,255,0.75)', marginTop: 2 },
  title: { color: '#FFFFFF', textAlign: 'center' },
  subtitle: { fontFamily: fonts.body, fontSize: 15, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: 10, paddingHorizontal: 20 },
  locating: { fontFamily: fonts.body, fontSize: 12.5, color: 'rgba(255,255,255,0.6)', marginTop: 14 },
  spacer: { flex: 1 },
  hint: { fontFamily: fonts.body, fontSize: 12.5, color: 'rgba(255,255,255,0.65)', textAlign: 'center', marginTop: 12 },
});
