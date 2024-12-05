import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AboutJvd() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This app is designed by Basilio Clint Kycer as a learning project.
      </Text>
      <Image source={require('../assets/dragon.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});