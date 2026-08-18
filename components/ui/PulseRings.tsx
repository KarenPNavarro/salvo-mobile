import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

type PulseRingsProps = {
  size: number;
  color: string;
  duration?: number;
  stagger?: number;
  ringCount?: number;
  maxScale?: number;
};

export function PulseRings({
  size,
  color,
  duration = 2600,
  stagger = 900,
  ringCount = 2,
  maxScale = 2.1,
}: PulseRingsProps) {
  const values = useRef(Array.from({ length: ringCount }, () => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = values.map((value, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * stagger),
          Animated.timing(value, {
            toValue: 1,
            duration,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(value, { toValue: 0, duration: 0, useNativeDriver: true }),
        ])
      )
    );
    animations.forEach((a) => a.start());
    return () => animations.forEach((a) => a.stop());
  }, [values, duration, stagger]);

  return (
    <View style={[styles.wrap, { width: size, height: size }]} pointerEvents="none">
      {values.map((value, index) => {
        const scale = value.interpolate({ inputRange: [0, 1], outputRange: [1, maxScale] });
        const opacity = value.interpolate({ inputRange: [0, 0.15, 1], outputRange: [0, 0.45, 0] });
        return (
          <Animated.View
            key={index}
            style={[
              styles.ring,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                borderColor: color,
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', justifyContent: 'center' },
  ring: { position: 'absolute', borderWidth: 1.5 },
});
