import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#386de5" }}
    >
      <Tabs.Screen
        name="(search)/index"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="search" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="heart-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings/index"
        options={{
          title: "Bookings",
          tabBarIcon: ({ color }) => (
            <Feather name="briefcase" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-account/index"
        options={{
          title: "My account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
