import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreenlg() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>About Linson Pogi</Text>
      <Text style={styles.bodyText}>This is the about screen where you can learn more about Linson Pogi!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4E157',  // A fresh and vibrant green color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1C',  // Dark gray for high contrast
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'sans-serif-condensed',  // Sleek and modern font
  },
  bodyText: {
    fontSize: 18,
    color: '#4E4E4E',  // Lighter gray for secondary text
    textAlign: 'center',
    lineHeight: 24,
    fontStyle: 'italic',  // Friendly and warm
    marginHorizontal: 30,
  },
});
