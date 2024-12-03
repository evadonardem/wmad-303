import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { type ImageSource } from "expo-image";

import Button from '@/componentslg/Buttonlg';
import ImageViewer from '@/componentslg/ImageViewerlg';
import IconButton from '@/componentslg/IconButtonlg';
import CircleButton from '@/componentslg/CircleButtonlg';
import EmojiPicker from '@/componentslg/EmojiPickerlg';
import EmojiList from '@/componentslg/EmojiListlg';
import EmojiSticker from '@/componentslg/EmojiStickerlg';

const PlaceholderImage = require('@/assets/images/background-image.jpg');

export default function Index() {
  const [selectedImagelg, setSelectedImagelg] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsynclg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImagelg(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onResetlg = () => {
    setShowAppOptions(false);
  };

  const onAddStickerlg = () => {
    setIsModalVisible(true);
  };

  const onModalCloselg = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsynclg = async () => {
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
        <View ref={imageRef} collapsable={false} style={styles.imageView}>
          <ImageViewer imgSourcelg={PlaceholderImage} selectedImagelg={selectedImagelg} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onResetlg} />
            <CircleButton onPress={onAddStickerlg} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsynclg} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button themelg="primary" labellg="Choose a photo" onPresslg={pickImageAsynclg} />
          <Button labellg="Use this photo" onPresslg={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalCloselg}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalCloselg} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  imageContainer: {
    flex: 2 / 3,
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    marginVertical: 15,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    alignItems: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
});
