import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { LinearGradient } from 'expo-linear-gradient';

import ImageViewer from '@/componentsGDH/ImageViewerGDH';
import Button from '@/componentsGDH/ButtonGDH';
import IconButton from '@/componentsGDH/IconBottonGDH';
import CircleButton from '@/componentsGDH/CircleBottonGDH';
import EmojiPicker from '@/componentsGDH/EmojiPickerGDH';
import EmojiList from '@/componentsGDH/EmojiListGDH';
import EmojiSticker from '@/componentsGDH/EmojiStickerGDH';

const PlaceholderImage = require('@/assets/images/pogi.jpg');

export default function Index() {
  const imageRef = useRef<View>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    if (!status) {
      requestPermission();
    }
  }, [status]);

  const pickImageAsync = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
        setShowAppOptions(true);
      } else {
        Alert.alert('No Image Selected', 'You did not select any image.');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const onSaveImageAsync = async () => {
    try {
      if (imageRef.current) {
        const localUri = await captureRef(imageRef, {
          format: 'png',
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(localUri);
        Alert.alert('Success', 'Image saved to your library!');
      } else {
        Alert.alert('Error', 'Image reference is missing.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to save the image.');
      console.error(error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <GestureHandlerRootView style={styles.container}>
            <LinearGradient
              colors={['#7F00FF', '#E100FF']}
              style={styles.backgroundGradient}
            >
              <View style={styles.imageContainer} ref={imageRef} collapsable={false}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
                {pickedEmoji && <EmojiSticker imageSize={50} stickerSource={{ uri: pickedEmoji }} />}
              </View>

              {showAppOptions ? (
                <View style={styles.optionsContainer}>
                  <View style={styles.optionsRow}>
                    <IconButton icon="refresh" label="Reset" onPress={() => setShowAppOptions(false)} />
                    <CircleButton onPress={() => setIsModalVisible(true)} />
                    <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                  </View>
                </View>
              ) : (
                <View style={styles.footerContainer}>
                  <Button theme="primary" label="Choose a photo" onPressBPA={pickImageAsync} />
                  <Button label="Use this photo" onPressBPA={() => setShowAppOptions(true)} />
                </View>
              )}

              <EmojiPicker isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
                <EmojiList
                  onSelect={(image) => setPickedEmoji(image.uri)}
                  onCloseModal={() => setIsModalVisible(false)}
                />
              </EmojiPicker>
            </LinearGradient>
          </GestureHandlerRootView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  backgroundGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    padding: 15,
    backgroundColor: '#1F1F1F',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
});
