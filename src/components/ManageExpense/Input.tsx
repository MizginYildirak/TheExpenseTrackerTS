import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label, invalid, style, textInputConfig}) {
  return (
    <View>
      <Text>Input</Text>
      <TextInput />
    </View>
  )
}

const styles = StyleSheet.create({})
