import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { type ImageSource } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/componentswe/Buttonwe';
import ImageViewer from '@/componentswe/ImageViewerwe';
import EmojiPicker from '@/componentswe/EmojiPickerwe';
import EmojiList from '@/componentswe/EmojiListwe';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import EmojiSticker from '@/componentswe/EmojiStickerwe';
import IconButton from '@/componentswe/IconButtonwe';
import CircleButton from '@/componentswe/CircleButtonwe';

const PlaceholderImage = require('@/assets/images/R.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [isPhotoUsed, setIsPhotoUsed] = useState<boolean>(false); 

  const pickImageAsyncwe = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setSelectedImage(undefined); 
    setPickedEmoji(undefined); 
    setIsPhotoUsed(false); 
  };

  const onUsePhoto = () => {
    setIsPhotoUsed(true); 
  };

  // Function to show the emoji picker modal
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // Logic to save the image can be added here
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {/* Show the selected image or the placeholder */}
          <ImageViewer imgSource={selectedImage ? { uri: selectedImage } : PlaceholderImage} />
          
          {/* Show the sticker if added */}
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>

        {/* Conditionally render buttons */}
        {isPhotoUsed ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              {/* "Reset" button visible after selecting and using the image */}
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            {/* "Choose a photo" button visible before selecting an image */}
            <Button theme="primary" label="Choose a photo" onPresswe={pickImageAsyncwe} />
            {/* "Use this photo" button visible after image selection */}
            <Button label="Use this photo" onPresswe={onUsePhoto} />
          </View>
        )}

        {/* Emoji picker modal */}
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
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    margin:50,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  
});
