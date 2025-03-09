import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../util/date";

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: inputs.date.value,
      description: inputs.description.value,
    };
    onSubmit(expenseData);
  }



  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View>
        <View style={styles.inputsRow}>
          <Input
            style={styles.rowInput}
            value={inputs.amount.value}
            onChangeText={inputChangedHandler.bind(this, "amount")}
            label="Amount"
            keyboardType="numeric"
          />
          <Input
            style={styles.rowInput}
            value={inputs.date.value}
            onChangeText={inputChangedHandler.bind(this, "date")}
            label="Date"
          />
        </View>
        <Input
          value={inputs.description.value}
          onChangeText={inputChangedHandler.bind(this, "description")}
          label="Description"
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

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
