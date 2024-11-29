import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImagewe?: string;
};

export default function ImageViewer({ imgSource, selectedImagewe }: Props) {
    const imageSource = selectedImagewe ? { uri: selectedImagewe } : imgSource;
    return <Image source={imageSource} style={styles.image} />;
  }

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});


