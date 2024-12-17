import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)lg" options={{ headerShown: false }} />
      <Stack.Screen name="+not-foundlg" />
    </Stack>
  );
}
