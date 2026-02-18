import { Stack } from "expo-router";

export default function SavedStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: false,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="[city]"
        options={{
          headerShown: false,
          presentation: "card",
        }}
      />
    </Stack>
  );
}
