import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function AboutMPM() {
  const [name, setName] = useState("")
  return (
    <View style={styles.container}>

      <MaterialCommunityIcons name="face-man-profile" size={100} color="black" />
      <Text style={styles.name}>
        Hi I'm M
      </Text>
      <Text style={styles.name}>{name === '' ? '' : `Nice to meet you ${name}`}</Text>
      <br />
      <Text>Enter your name</Text>
      <input style={styles.input} type="text" onChange={(e) => setName(e.target.value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9daea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#191516',
  },
  name: {
    color: '#031926',
    fontWeight: '900',
    fontSize: 20,
    marginTop: 20
  },
  input: {
    color: '#031926',
  },
});
