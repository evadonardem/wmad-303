import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { type ImageSource } from "expo-image";

import Button from '@/componentsIS/ButtonIS';
import ImageViewer from '@/componentsIS/ImageViewerIS';
import IconButton from '@/componentsIS/IconButtonIS';
import CircleButton from '@/componentsIS/CircleButtonIS';
import EmojiPicker from '@/componentsIS/EmojiPickerIS';
import EmojiList from '@/componentsIS/EmojiListIS';
import EmojiSticker from '@/componentsIS/EmojiStickerIS';

const PlaceholderImage = require('@/assets/images/background-image.jpg');

export default function Index() {
  const [selectedImageIS, setSelectedImageIS] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsyncIS = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageIS(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onResetIS = () => {
    setShowAppOptions(false);
  };

  const onAddStickerIS = () => {
    setIsModalVisible(true);
  };

  const onModalCloseIS = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsyncIS = async () => {
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
          <ImageViewer imgSourceIS={PlaceholderImage} selectedImageIS={selectedImageIS} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onResetIS} />
            <CircleButton onPress={onAddStickerIS} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsyncIS} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button themeIS="primary" labelIS="Choose a photo" onPressIS={pickImageAsyncIS} />
          <Button labelIS="Use this photo" onPressIS={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalCloseIS}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalCloseIS} />
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
