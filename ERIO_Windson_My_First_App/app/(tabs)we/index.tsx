import { View, StyleSheet } from 'react-native';
 import { Image } from 'expo-image'; 
 import { useState } from 'react';
 import { type ImageSource } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/componentswe/Buttonwe';
import ImageViewer from "@/componentswe/ImageViewerwe";
import IconButton from '@/componentswe/IconButtonwe';
import CircleButton from '@/componentswe/CircleButtonwe';
import EmojiPicker from '@/componentswe/EmojiPickerwe';
import EmojiList from '@/componentswe/EmojiListwe';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import EmojiSticker from '@/componentswe/EmojiStickerwe';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PlaceholderImage = require('@/assets/images/R.jpg');


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);


  const pickImageAsyncwe= async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
        setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  
  const onReset = () => {
    setShowAppOptions(false);
  };

  
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
  };

  return (
    <GestureHandlerRootView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImagewe={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View />
      ) : (
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPresswe={pickImageAsyncwe} />
        <Button label="Use this photo" />
      </View>
      )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 390,
    borderRadius: 18,
  }, footerContainer: {
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
