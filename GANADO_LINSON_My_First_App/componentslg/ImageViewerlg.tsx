import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSourcelg: ImageSource;
  selectedImagelg?: string;
};

export default function ImageViewer({ imgSourcelg, selectedImagelg }: Props) {
  const imageSource = selectedImagelg ? { uri: selectedImagelg } : imgSourcelg;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});