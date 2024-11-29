import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreenpj() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Noli Me Tangere</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06402b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize:50 ,
  },
  
}
);

