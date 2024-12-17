import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSourceJA: ImageSource;
  selectedImageJA?: string;
};

export default function ImageViewer({ imgSourceJA, selectedImageJA }: Props) {
  const imageSource = selectedImageJA ? { uri: selectedImageJA } : imgSourceJA;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});