import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreenSmb() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Iceland</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374D68',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
