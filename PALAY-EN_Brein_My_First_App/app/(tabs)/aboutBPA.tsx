import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
    <LinearGradient
      colors={['#6A0572', '#28A745']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <MaterialCommunityIcons name="information" size={100} color="#FFFFFF" />
        <Text style={styles.name}>Hi, I'm M</Text>
        {greeting && <Text style={styles.greeting}>{greeting}</Text>}
        <Text style={styles.prompt}>Enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          placeholderTextColor="#CCC"
          onChangeText={setName}
          value={name}
        />
        <TouchableOpacity onPress={generateGreeting} style={styles.button}>
          <Text style={styles.buttonText}>Generate Greeting</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  name: {
    fontSize: 24,
    color: '#FFFFFF',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 18,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  prompt: {
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#6A0572',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AboutBPA;
