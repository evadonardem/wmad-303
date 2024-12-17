import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { type ImageSource } from "expo-image";

import Button from '@/componentsCT/ButtonCT';
import ImageViewer from '@/componentsCT/ImageViewerCT';
import IconButton from '@/componentsCT/IconButtonCT';
import CircleButton from '@/componentsCT/CircleButtonCT';
import EmojiPicker from '@/componentsCT/EmojiPickerCT';
import EmojiList from '@/componentsCT/EmojiListCT';
import EmojiSticker from '@/componentsCT/EmojiStickerCT';

const PlaceholderImage = require('@/assets/images/backgroud-image.jpg');

export default function Index() {
  const [selectedImageCT, setSelectedImageCT] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsyncCT = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageCT(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onResetCT = () => {
    setShowAppOptions(false);
  };

  const onAddStickerCT = () => {
    setIsModalVisible(true);
  };

  const onModalCloseCT = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsyncCT = async () => {
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
          <ImageViewer imgSourceCT={PlaceholderImage} selectedImageCT={selectedImageCT} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}  
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onResetCT} />
            <CircleButton onPress={onAddStickerCT} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsyncCT} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button themeCT="primary" labelCT="Choose a photo" onPressCT={pickImageAsyncCT} />
          <Button labelCT="Use this photo" onPressCT={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalCloseCT}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalCloseCT} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    padding: 5,
    marginBottom: 10,
    flex: 1,
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