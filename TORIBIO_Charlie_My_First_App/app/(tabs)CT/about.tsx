import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AboutCT() {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle" size={50} color="#24150D" style={styles.icon} />
      <Text style={styles.title}>About This App</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          We're about to embark on a journey of building universal apps. In this tutorial, we'll create an Expo app 
          that runs seamlessly on Android, iOS, and web, all with a single codebase. Let's get started!
        </Text>
        <Text style={styles.text}>
          With this app, you'll learn how to develop cross-platform apps that can be easily deployed across various devices. 
          By the end of this tutorial, you'll have a solid understanding of how to create and manage apps for multiple platforms.
        </Text>
        <Text style={styles.text}>
          Stay tuned as we dive deeper into the world of Expo and React Native, bringing your app ideas to life with minimal effort!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
    paddingVertical: 40,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#24150D',
    marginBottom: 20, 
  },
  textContainer: {
    width: '80%',  
    maxWidth: 600, 
  },
  text: {
    fontSize: 16, 
    color: '#444', 
    textAlign: 'center',
    lineHeight: 24, 
    marginBottom: 15, 
  },
});