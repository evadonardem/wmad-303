import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PickImageAsyncJvd() {
  const [selectedImageJvd, setSelectedImageJvd] = useState(null);

  const pickImageAsyncJvd = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageJvd(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={pickImageAsyncJvd} />
      {selectedImageJvd && <Image source={{ uri: selectedImageJvd }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});