import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";
import React from 'react';

type Props = {
  imgSource: ImageSource;
  selectedImageMPM?: string;
};

export default function ImageViewer({ imgSource, selectedImageMPM }: Props) {
  const imageSource = selectedImageMPM ? { uri: selectedImageMPM } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
