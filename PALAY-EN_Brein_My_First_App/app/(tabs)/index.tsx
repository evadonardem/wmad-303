import React, { useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { LinearGradient } from 'expo-linear-gradient';

import ImageViewer from '@/componentsBPA/ImageViewerBPA';
import Button from '@/componentsBPA/ButtonBPA';
import IconButton from '@/componentsBPA/IconBottonBPA';
import CircleButton from '@/componentsBPA/CircleBottonBPA';
import EmojiPicker from '@/componentsBPA/EmojiPickerBPA';
import EmojiList from '@/componentsBPA/EmojiListBPA';
import EmojiSticker from '@/componentsBPA/EmojiStickerBPA';

const PlaceholderImage = require('@/assets/images/msi-red-logo.jpg');

export default function Index() {
  const imageRef = useRef<View>(null);
  const [selectedImageBPA, setSelectedImageBPA] = useState<string | undefined>();
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  // Request media library permissions if not already granted
  React.useEffect(() => {
    if (!status) {
      requestPermission();
    }
  }, [status]);

  // Select an image from the library
  const pickImageAsyncBPA = async () => {
    try {
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
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  // Save the image to the library
  const onSaveImageAsync = async () => {
    try {
      if (imageRef.current) {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(localUri);
        Alert.alert('Success', 'Image saved to your library!');
      } else {
        Alert.alert('Error', 'Image reference is missing.');
      }
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <GestureHandlerRootView style={styles.container}>
            <LinearGradient colors={['#6A0572', '#28A745']} style={styles.backgroundGradient}>
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
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    paddingBottom: 0,
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
});
