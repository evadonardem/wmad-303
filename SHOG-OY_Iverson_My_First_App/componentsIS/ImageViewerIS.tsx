import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSourceIS: ImageSource;
  selectedImageIS?: string;
};

export default function ImageViewer({ imgSourceIS, selectedImageIS }: Props) {
  const imageSource = selectedImageIS ? { uri: selectedImageIS } : imgSourceIS;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});