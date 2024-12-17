import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { type ImageSource } from "expo-image";

import Button from '@/componentsJSK/ButtonJSK';
import ImageViewer from '@/componentsJSK/ImageViewerJSK';
import IconButton from '@/componentsJSK/IconButtonJSK';
import CircleButton from '@/componentsJSK/CircleButtonJSK';
import EmojiPicker from '@/componentsJSK/EmojiPickerJSK';
import EmojiList from '@/componentsJSK/EmojiListJSK';
import EmojiSticker from '@/componentsJSK/EmojiStickerJSK';

const PlaceholderImage = require('@/assets/images/background-image.jpg');

export default function Index() {
  const [selectedImageJSK, setSelectedImageJSK] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsyncJSK = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageJSK(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onResetJSK = () => {
    setShowAppOptions(false);
  };

  const onAddStickerJSK = () => {
    setIsModalVisible(true);
  };

  const onModalCloseJSK = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsyncJSK = async () => {
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
          <ImageViewer imgSourceJSK={PlaceholderImage} selectedImageJSK={selectedImageJSK} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onResetJSK} />
            <CircleButton onPress={onAddStickerJSK} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsyncJSK} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button themeJSK="primary" labelJSK="Choose a photo" onPressJSK={pickImageAsyncJSK} />
          <Button labelJSK="Use this photo" onPressJSK={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalCloseJSK}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalCloseJSK} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  imageContainer: {
    padding: 5,
    marginBottom: 10,
    flex: 1,
    borderWidth: 4,           
    borderColor: 'black',   
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
