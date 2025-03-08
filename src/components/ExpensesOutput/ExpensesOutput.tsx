import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({ expenses, fallbackText }) {
  let content = <Text>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View>
      <ExpensesSummary expenses={expenses}  />
      {content}
    </View>
  );
}

export default ExpensesOutput

const styles = StyleSheet.create({});
