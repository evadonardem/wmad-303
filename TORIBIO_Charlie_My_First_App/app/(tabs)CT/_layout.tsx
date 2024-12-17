import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#303030',
                headerStyle: {
                    backgroundColor: 'grey',
                },
                headerShadowVisible: false,
                headerTintColor: '#000',
                tabBarStyle: {
                    backgroundColor: 'grey',
                },
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Monkey',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="aboutCT"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}