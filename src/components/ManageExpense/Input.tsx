import { StyleSheet, Text, TextInput, View, TextInputProps } from "react-native";
import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: TextInputProps['keyboardType']; 
  style?: object;
}

export default function Input({
  label,
  value,
  onChangeText,
  keyboardType,
  style,
}: InputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        placeholder={label}
      />
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
