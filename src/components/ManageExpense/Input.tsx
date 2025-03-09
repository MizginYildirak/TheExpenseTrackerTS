import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Input({ label, value, onChangeText, keyboardType, style, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={[styles.input, style]} onChangeText={onChangeText}  value={value} keyboardType={keyboardType} placeholder={label}   />
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
