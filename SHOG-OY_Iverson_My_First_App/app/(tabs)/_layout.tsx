import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#24150D',
                tabBarInactiveTintColor: '#E3DCD9',
                headerStyle: {
                    backgroundColor: '#E3DCD9',
                },
                headerShadowVisible: false,
                headerTintColor: '#24150D',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 24,              
                    fontWeight: 'bold',      
                },
                tabBarStyle: {
                    backgroundColor: '#A18475',
                },
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: 'BOOKAROO',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="aboutIS"
                options={{
                    title: 'ABOUT',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
