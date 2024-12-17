import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import ImageViewer from '@/components/ImageViewerRap';
import Button from '@/components/ButtonRap';
import IconButton from '@/components/IconButtonRap';
import CircleButton from '@/components/CirclebuttonRap';
import EmojiPicker from '@/components/EmojiPickerRap';
import EmojiList from '@/components/EmojiListRap';
import EmojiSticker from '@/components/EmojiStickerRap';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

const PlaceholderImage = require('@/assets/images/msi-red-logo.jpg');

export default function Index() {
  const imageRef = useRef<View>(null);
  const [selectedImageBPA, setSelectedImageBPA] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();

  // Request media library permissions if not already granted
  useEffect(() => {
    if (!status) {
      requestPermission();
    }
  }, [status]);

  // Select an image from the library
  const pickImageAsyncBPA = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageBPA(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      Alert.alert('No Image Selected', 'You did not select any image.');
    }
  };

  // Save the image to the library
  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });
      await MediaLibrary.saveToLibraryAsync(localUri);
      Alert.alert('Success', 'Image saved to your library!');
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
            <View style={styles.imageContainer} ref={imageRef} collapsable={false}>
              <ImageViewer imgSource={PlaceholderImage} selectedImageBPA={selectedImageBPA} />
              {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={{ uri: pickedEmoji }} />}
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
                <Button theme="primary" label="Choose a photo" onPressBPA={pickImageAsyncBPA} />
                <Button label="Use this photo" onPressBPA={() => setShowAppOptions(true)} />
              </View>
            )}

            <EmojiPicker isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
              <EmojiList onSelect={(image) => setPickedEmoji(image.uri)} onCloseModal={() => setIsModalVisible(false)} />
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
    backgroundColor: 'linear-gradient(135deg, #6A0572, #28A745)',
    alignItems: 'center',
  },
  contentContainer: {
    paddingBottom: 50,
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'linear-gradient(135deg, #6A0572, #28A745)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});