import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View>
        <View style={styles.inputsRow}>
          <Input
            style={styles.rowInput} // Input stillerini burada birleştirdik
            defaultValue={defaultValues?.amount}
          />
          <Input
            style={styles.rowInput} // Input stillerini burada birleştirdik
            defaultValue={defaultValues?.date}
          />
        </View>
        <Input
          // Üçüncü input için de aynı stil
          defaultValue={defaultValues?.category}
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={onSubmit}>
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
    flexDirection: "row", // Elemanları yan yana yerleştirir
    justifyContent: "space-between", // Aralarındaki boşluğu eşitler
    marginBottom: 30,
  },
  rowInput: {
  
    width: 175,
    height: 40
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
