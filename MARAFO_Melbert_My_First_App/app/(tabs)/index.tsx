
import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageViewer from "@/componentsMPM/ImageViewerMPM";
import Button from '@/componentsMPM/ButtonMPM';
import { ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import IconButton from '@/componentsMPM/IconBottonMPM';
import CircleButton from '@/componentsMPM/CircleBottonMPM';
import EmojiPicker from '@/componentsMPM/EmojiPickerMPM';
import { type ImageSource } from 'expo-image';
import EmojiList from '@/componentsMPM/EmojiListMPM';
import EmojiSticker from '@/componentsMPM/EmojiStickerMPM';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

const PlaceholderImage = require('@/assets/images/cat.jpeg');

export default function Index() {
  const imageRef = useRef<View>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImageMPM, setselectedImageMPM] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsyncMPM = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setselectedImageMPM(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onAddStickerMPM = () => {
    setIsModalVisible(true);
  };

  const onModalCloseMPM = () => {
    setIsModalVisible(false);
  };

  const onReset = () => {
    setShowAppOptions(false);
  };


  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView>
          <GestureHandlerRootView style={styles.container}>
            <br />
            <View style={styles.imageContainer}>
            <View ref={imageRef} collapsable={false}>
              <ImageViewer imgSource={PlaceholderImage} selectedImageMPM={selectedImageMPM} />
              {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
            </View>
            </View>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {showAppOptions ? (
              <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                  <IconButton icon="refresh" label="Reset" onPress={onReset} />
                  <CircleButton onPress={onAddStickerMPM} />
                  <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                </View>
              </View>
            ) : (
              <View style={styles.footerContainer}>
                <Button theme="primary" label="Choose a photo" onPressMPM={pickImageAsyncMPM} />
                <Button label="Use this photo" onPressMPM={() => setShowAppOptions(true)} />
            </View>
            )}

            <EmojiPicker isVisible={isModalVisible} onClose={onModalCloseMPM}>
              <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalCloseMPM} />
            </EmojiPicker>
          </GestureHandlerRootView>
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
    // justifyContent: 'center',
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
    flex: 1,
    alignItems: 'center',
    // paddingVertical: 20
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
