import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Input({ label, invalid, style, textInputConfig }) {
  return (
    <View>
      <Text>Input</Text>
      <TextInput style={[styles.input, style]} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    color: "black",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
});
