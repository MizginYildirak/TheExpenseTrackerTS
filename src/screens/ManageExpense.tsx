import { StyleSheet, Text, View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { useContext, useLayoutEffect } from "react";
import { ExpensesContext } from "../components/context/expenses-context";

export default function ManageExpense({route, navigation}) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  function cancelHandler() {
    navigation.goBack();
  }

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }
  

  return (
    <View>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
