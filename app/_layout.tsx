import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { inject } from '@vercel/analytics';
import { Platform } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    WinkyRough: require('../assets/fonts/WinkyRough-Bold.ttf'),
    WinkyRegular: require('../assets/fonts/WinkyRough-Regular.ttf'),
    WinkyBlack: require('../assets/fonts/WinkyRough-Black.ttf'),
    WinkySemiBold: require('../assets/fonts/WinkyRough-SemiBold.ttf'),
    UbuntuRegular: require('../assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuBold: require('../assets/fonts/Ubuntu-Bold.ttf'),
  });

  useEffect(() => {
    if (!loaded) return;

    SplashScreen.hideAsync();

    if (Platform.OS === 'web') {
      inject();
    }
  }, [loaded]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="newIndex" />
        <Stack.Screen name="dummy1" />
        <Stack.Screen name="dummy2" />
        <Stack.Screen name="dummy3" />
        <Stack.Screen name="dummy4" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
