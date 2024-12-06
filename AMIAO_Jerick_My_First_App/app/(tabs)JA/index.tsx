import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { type ImageSource } from "expo-image";

import Button from '@/componentsJA/ButtonJA';
import ImageViewer from '@/componentsJA/ImageViewerJA';
import IconButton from '@/componentsJA/IconButtonJA';
import CircleButton from '@/componentsJA/CircleButtonJA';
import EmojiPicker from '@/componentsJA/EmojiPickerJA';
import EmojiList from '@/componentsJA/EmojiListJA';
import EmojiSticker from '@/componentsJA/EmojiStickerJA';

const PlaceholderImage = require('@/assets/images/background-image.jpg');

export default function Index() {
  const [selectedImageJA, setSelectedImageJA] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsyncJA = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageJA(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onResetJA = () => {
    setShowAppOptions(false);
  };

  const onAddStickerJA = () => {
    setIsModalVisible(true);
  };

  const onModalCloseJA = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsyncJA = async () => {
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
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSourceJA={PlaceholderImage} selectedImageJA={selectedImageJA} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onResetJA} />
            <CircleButton onPress={onAddStickerJA} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsyncJA} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button themeJA="primary" labelJA="Choose a photo" onPressJA={pickImageAsyncJA} />
          <Button labelJA="Use this photo" onPressJA={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalCloseJA}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalCloseJA} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3DCD9',
    alignItems: 'center',
  },
  imageContainer: {
    padding: 5,
    marginBottom: 10,
    flex: 1,
    borderWidth: 4,           
    borderColor: '#24150D',   
    borderRadius: 10,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
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
