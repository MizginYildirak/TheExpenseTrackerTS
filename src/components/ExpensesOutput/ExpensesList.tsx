import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem({ item }) {
  return <ExpenseItem {...item} />;
}
export default function ExpensesList({ expenses }) {
  console.log("expensesulan:", expenses)
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
