import React from "react";
import { Text, View } from "react-native";

export default function ImageTreeInfo() {
  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        About the Image Tree
      </Text>
      <Text style={{ textAlign: 'center' }}>
        The image tree is a beautiful and unique feature of this app. It's a
        representation of the image hierarchy, showing the relationships
        between different images. Each image is represented by a node in the
        tree, and the connections between nodes indicate the parent-child
        relationships.
      </Text>
      <Text style={{ marginTop: 16, textAlign: 'center' }}>
        To navigate through the tree, you can use the buttons at the top of the
        screen. The "Back" button takes you back to the previous node in the
        tree, while the "Forward" button takes you to the next node.
      </Text>
      <Text style={{ marginTop: 16, textAlign: 'center' }}>
        You can also use the "Home" button to return to the root node of the tree.
      </Text>
    </View>
  );
}