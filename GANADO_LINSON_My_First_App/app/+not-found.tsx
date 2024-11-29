import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreenlg() {
  return (
    <>
      <Stack.Screen options={{ title: 'Ops, Kamali!' }} />
      <View style={styles.container}>
        <Text style={styles.errorText}>Kupal Ka Ba BOSS!!!!</Text>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',  // Dark background for a creepy atmosphere
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'red',  // Blood red color for a menacing look
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: '#8B0000',  // Dark red shadow for an ominous effect
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,  // Gives a glow-like effect to the text
    fontFamily: 'cursive',  // Cursive for a spooky, unsettling look
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15,
    backgroundColor: '#000',  // Black button for a dark theme
    borderWidth: 2,
    borderColor: '#FF6347',  // Light red border for contrast
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',  // Subtle shadow around button
    letterSpacing: 1,
  },
});
