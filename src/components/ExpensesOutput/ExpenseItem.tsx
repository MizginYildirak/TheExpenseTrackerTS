import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function ExpenseItem({ id, description, amount, date }) {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{description}</Text>
          <Text>{date}</Text>
        </View>
        <Text>{amount.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
}
