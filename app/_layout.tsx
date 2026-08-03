import { Stack } from 'expo-router';

<Stack.Screen name="emergency-active" />

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
