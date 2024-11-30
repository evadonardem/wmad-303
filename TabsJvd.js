import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabsJvd() {
  const onPressJvd = (tab) => {
    console.log(`${tab} tab clicked`);
  };

  return (
    <View style={styles.tabContainer}>
      {['Home', 'About', 'Contact'].map((tab, index) => (
        <TouchableOpacity key={index} onPress={() => onPressJvd(tab)}>
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
});