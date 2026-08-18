import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Mulish_300Light } from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import { ContactsProvider } from '../contexts/ContactsContext';
import { DeviceProvider } from '../contexts/DeviceContext';
import { colors } from '../constants/theme';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Mulish_300Light,
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.indigo }} />;
  }

  return (
    <DeviceProvider>
      <ContactsProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ContactsProvider>
    </DeviceProvider>
  );
}
