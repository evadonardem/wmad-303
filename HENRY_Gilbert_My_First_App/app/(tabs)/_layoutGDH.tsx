import React from 'react';
import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00F5D4', // Bright turquoise for active tabs
        tabBarInactiveTintColor: '#A9A9A9', // Light gray for inactive tabs
        headerStyle: {
          backgroundColor: '#023E58', // Dark blue for the header
        },
        headerShadowVisible: false,
        headerTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#012B39', // Deep blue background for the tab bar
          borderTopWidth: 0, // Removes the border for a cleaner look
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="aboutBPA"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'information' : 'information-outline'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
