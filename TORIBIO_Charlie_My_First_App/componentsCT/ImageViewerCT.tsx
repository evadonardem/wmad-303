import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSourceCT: ImageSource;
  selectedImageCT?: string;
};

export default function ImageViewer({ imgSourceCT, selectedImageCT }: Props) {
  const imageSource = selectedImageCT ? { uri: selectedImageCT } : imgSourceCT;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});