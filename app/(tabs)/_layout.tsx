import React from "react";

import { Platform } from "react-native";

import { Tabs } from "expo-router";

import { HapticTab } from "@/components/common/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        animation: "shift",
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lift"
        options={{
          title: "Lift",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="truck.box.fill" color={color} />
          ),
          // Hide the tab on web it doesn't support Bluetooth API
          ...(Platform.OS === "web" && { href: null }),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          // Hide the tab for now
          href: null,
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gearshape.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
