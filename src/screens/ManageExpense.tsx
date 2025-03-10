import {
  useState,
  useContext,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { ExpensesContext } from "../components/context/expenses-context";
import { useFocusEffect } from "@react-navigation/native";
import Button from "../components/UI/Button";
import { Ionicons } from "@expo/vector-icons";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const [isEditing, setIsEditing] = useState(false);

  const editedExpenseId = route.params?.expenseId;

  console.log("editedExpenseId:", editedExpenseId);

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  console.log("selectedExpense:", selectedExpense);

  useFocusEffect(
    useCallback(() => {
      const updatedExpenseId = route.params?.expenseId;
      console.log("Route Params:", route.params);
      console.log("Güncellenen expenseId:", updatedExpenseId);

      if (updatedExpenseId) {
        setIsEditing(true);
      } else {
        setIsEditing(false);
      }
    }, [route.params?.expenseId])
  );

  useEffect(() => {
    if (isEditing && route.params?.expenseId) {
      navigation.setParams({ expenseId: route.params.expenseId });
    }
  }, [isEditing, route.params?.expenseId, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const deleteExpenseHandler = () => {
    Alert.alert("Are you sure?", "Do you really want to delete this expense?", [
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          expensesCtx.deleteExpense(editedExpenseId);
          navigation.goBack();
        },
      },
    ]);
  };

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      console.log("expenseData:", expenseData);
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  console.log("isEditing:", isEditing);

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <Ionicons
            style={styles.delete}
            name="trash-bin-outline"
            color="red"
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#A0C4FF",
  },
  delete: {
    fontSize: 30,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    alignItems: "center",
  },
});
