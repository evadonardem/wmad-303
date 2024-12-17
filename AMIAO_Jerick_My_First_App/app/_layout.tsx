import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)JA" options={{ headerShown: false }} />
      <Stack.Screen name="+not-foundJA" />
    </Stack>
  );
}
