import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)CT" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}