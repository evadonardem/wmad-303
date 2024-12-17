import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AboutBPA: React.FC = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const generateGreeting = () => {
    if (name) {
      setGreeting(`Nice to meet you, ${name}!`);
    } else {
      setGreeting("Please enter your name.");
    }
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="information" size={100} color="black" />
      <Text style={styles.name}>Hi, I'm M</Text>
      {greeting && <Text style={styles.greeting}>{greeting}</Text>}
      <Text style={styles.prompt}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        onChangeText={setName}
        value={name}
      />
      <Button title="Generate Greeting" onPress={generateGreeting} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    marginVertical: 10,
  },
  greeting: {
    fontSize: 18,
    marginVertical: 10,
  },
  prompt: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 10,
  },
});

export default AboutBPA;