import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSourceJSK: ImageSource;
  selectedImageJSK?: string;
};

export default function ImageViewer({ imgSourceJSK, selectedImageJSK }: Props) {
  const imageSource = selectedImageJSK ? { uri: selectedImageJSK } : imgSourceJSK;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});