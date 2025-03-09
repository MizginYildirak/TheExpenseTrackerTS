import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({ expenses, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: "#A0C4FF",
  },
  infoText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
