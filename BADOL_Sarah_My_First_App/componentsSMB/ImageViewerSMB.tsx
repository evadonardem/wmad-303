import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";
import React from 'react';

type Props = {
  imgSource: ImageSource;
  selectedImageSMB?: string;
};

export default function ImageViewer({ imgSource, selectedImageSMB }: Props) {
  const imageSource = selectedImageSMB ? { uri: selectedImageSMB } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});