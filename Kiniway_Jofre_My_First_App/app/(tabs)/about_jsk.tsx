import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreenjsk() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen ni Dudz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',  // Dark gray background for a sleek, moody vibe
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#00BFFF',  // Neon blue text for a fresh, vibrant gaming feel
    fontSize: 40,
    fontFamily: 'monospace',  // Retro pixel font
    textShadowColor: '#8A2BE2',  // Neon purple shadow to create contrast and depth
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
});
