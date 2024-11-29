import { View, Text, StyleSheet, Image } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreenjsk() {
  return (
    <>
      <Stack.Screen options={{ title: 'HEPZ!!! ISKAM KA ATA BOI!!!??' }} />
      <View style={styles.container}>
        {/* Skull Image */}
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/928418862/vector/skull-and-bones-icon.jpg?s=612x612&w=0&k=20&c=Ul5MJk6AtM27qr7agihVgaP5LaJhs5_tk6SLGvh2EVc=' }}  // Replace with your skull image URL
          style={styles.skullImage}
        />
        <Text style={styles.text}>404 - NOT FOUND</Text>
        <Link href="/" style={styles.button}>
          BALIK NA BOI!!!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',  // Dark base color for the background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  skullImage: {
    width: 150,  // Adjust width of the skull image
    height: 150,  // Adjust height of the skull image
    marginBottom: 20,  // Space between the skull image and text
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#999',  // Metallic border around the skull image
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },

  text: {
    color: 'silver',  // Metallic silver text for the main header
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textShadowColor: '#666',  // Darker metallic shadow for depth
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
    marginBottom: 30,
  },

  button: {
    fontSize: 40,
    textDecorationLine: 'underline',
    color: 'gold',  // Metallic gold color for the button text
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#FFD700',  // Gold border around the button
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: 'transparent',
    letterSpacing: 2,
    textShadowColor: '#555',  // Subtle dark shadow for the button text
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
});
