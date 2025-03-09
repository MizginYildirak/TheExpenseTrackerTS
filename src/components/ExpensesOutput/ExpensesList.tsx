import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(ItemData) {
  return <ExpenseItem {...ItemData.item} />;
}

export default function ExpensesList({ expenses }) {


  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

