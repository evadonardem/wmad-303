import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabsJvd from './src/components/TabsJvd';
import AboutJvd from './src/components/AboutJvd';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My First App by Basilio Clint Kycer</Text>
      <TabsJvd />
      <AboutJvd />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});