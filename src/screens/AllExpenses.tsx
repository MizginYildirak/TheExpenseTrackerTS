import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../components/context/expenses-context";

export default function AllExpenses() {
  const { expenses } = useContext(ExpensesContext);

  console.log(expenses)
  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}


