import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack>
        {/* Auth screens */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* Tabs screens */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Reports screen */}
        <Stack.Screen name="Reports/index" options={{ headerShown: true }} />

      </Stack>
    </GestureHandlerRootView>
  );
}