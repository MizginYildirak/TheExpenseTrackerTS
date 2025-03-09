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
    <View>
      <Text>ExpenseForm</Text>
      <View>
        <View>
          <Input />
          <Input />
        </View>
        <Input />
      </View>
      <View>
        <Button onPress={onCancel}>Cancel</Button>
        <Button onPress={onSubmit}>{submitButtonLabel}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
