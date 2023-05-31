import { Stack } from "expo-router";

export default function FeedLayout() {
  return (
    <Stack>
      <Stack.Screen name="tweet" options={{ headerShown: false }} />
    </Stack>
  );
}
