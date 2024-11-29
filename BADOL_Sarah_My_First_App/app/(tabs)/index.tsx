import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import { SafeAreaProvider } from "react-native-safe-area-context";

const PlaceholderImage =
  "https://i.pinimg.com/originals/00/25/29/00252969210cac9373b66eae03b7c522.jpg";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text}>Hello! World Sarah Badol</Text>
            <View style={styles.imageContainer}>
              <ImageViewer imgSource={PlaceholderImage} />
            </View>
            <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" />
              <Button label="Use this photo" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202D3E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    marginVertical:10,
  },

  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
