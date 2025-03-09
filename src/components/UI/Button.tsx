import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ children, onPress, style }) {
  return (
    <View>
      <Pressable onPress={onPress} style={[styles.button, style]}>
        <View>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#6200EE",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
