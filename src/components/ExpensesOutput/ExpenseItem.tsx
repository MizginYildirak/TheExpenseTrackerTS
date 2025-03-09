import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }



  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#2E2E2E",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "gray",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  text: {
    color: "#FFFFFF",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
    height: 40,
  },
  amount: {
    fontWeight: "bold",
  },
});
