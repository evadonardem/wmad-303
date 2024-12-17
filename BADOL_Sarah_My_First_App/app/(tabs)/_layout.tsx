
import React from 'react';
import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#03F7EB',
        headerStyle: {
          backgroundColor: '#031926',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#031926',
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
        name="aboutSMB"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            // <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
            <MaterialCommunityIcons name="face-man-profile" size={24}  color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

