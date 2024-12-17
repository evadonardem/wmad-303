import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)IS" options={{ headerShown: false }} />
      <Stack.Screen name="+not-foundIS" />
    </Stack>
  );
}
