import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Aboutlg() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="information-circle"
          size={70}
          color="#8E5A3B"
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>About This App</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Welcome to a journey of building universal apps! In this tutorial,
          we'll create an Expo app that seamlessly runs on Android, iOS, and the web, all from a single codebase. Let's
          get started!
        </Text>
        <Text style={styles.text}>
          This app will guide you through developing cross-platform apps that are easily deployable across devices.
          By the end of this tutorial, you'll be equipped to create and manage apps for multiple platforms effortlessly.
        </Text>
        <Text style={styles.text}>
          Stay tuned as we explore the world of Expo and React Native, transforming your app ideas into reality with minimal effort!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF7F5', // Subtle off-white background for a clean look
    padding: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5E8E4', // Light gradient-style background for icon
    borderRadius: 60,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 28, // Slightly larger title for emphasis
    fontWeight: 'bold',
    color: '#8E5A3B', // Rich, inviting color for title
    marginBottom: 25,
    textAlign: 'center',
  },
  textContainer: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: '#FFFDFB', // Subtle card background
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    color: '#555', // Neutral text color for good contrast
    textAlign: 'justify',
    lineHeight: 26,
    marginBottom: 15,
  },
});
