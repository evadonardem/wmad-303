import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageViewer from "@/components/ImageViewer";
import Button from '@/components/Button';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const PlaceholderImageBPA = require('@/assets/images/tree.png');

export default function Index() {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView>
          <View style={styles.container}>
            <br />
            <View style={styles.imageContainer}>
              <ImageViewer imgSource={PlaceholderImageBPA} />
            </View>
            <br />
            <View style={styles.footerContainer}>
              <Button theme="primary" label="Choose a image" />
              <Button label="Use this photo" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9DAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#191516',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#191516',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
