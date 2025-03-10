import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../util/date";

interface ExpenseFormProps {
  submitButtonLabel: string;
  onCancel: () => void;
  onSubmit: (expense: Omit<Expense, "id">) => void;
  defaultValues?: Expense;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ submitButtonLabel, onCancel, onSubmit, defaultValues }) => {
  const [inputs, setInputs] = useState({
    amount: { value: defaultValues ? defaultValues.amount.toString() : "" },
    date: { value: defaultValues ? getFormattedDate(defaultValues.date) : "" },
    description: { value: defaultValues ? defaultValues.description : "" },
  });

  const inputChangedHandler = (inputIdentifier: string, enteredValue: string) => {
    setInputs((curInputs) => ({
      ...curInputs,
      [inputIdentifier]: { value: enteredValue },
    }));
  };

  const submitHandler = () => {
    const expenseData = {
      amount: parseFloat(inputs.amount.value),
      date: inputs.date.value,
      description: inputs.description.value,
    };
    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View>
        <View style={styles.inputsRow}>
          <Input
            style={styles.rowInput}
            value={inputs.amount.value}
            onChangeText={(text) => inputChangedHandler("amount", text)}
            label="Amount"
            keyboardType="numeric"
          />
          <Input
            style={styles.rowInput}
            value={inputs.date.value}
            onChangeText={(text) => inputChangedHandler("date", text)}
            label="Date"
          />
        </View>
        <Input
          value={inputs.description.value}
          onChangeText={(text) => inputChangedHandler("description", text)}
          label="Description"
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel}>Cancel</Button>
        <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  rowInput: {
    width: 175,
    height: 40,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ExpenseForm;