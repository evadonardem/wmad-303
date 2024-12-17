import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)jsk" options={{ headerShown: false }} />
      <Stack.Screen name="+not-foundJSK" />
    </Stack>
  );
}
