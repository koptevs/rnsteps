import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  IBMPlexSans_400Regular as Regular,
  IBMPlexSans_700Bold as Bold,
} from '@expo-google-fonts/ibm-plex-sans';
// https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans

import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular,
    Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
