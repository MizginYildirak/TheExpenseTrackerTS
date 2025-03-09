import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: id
    });
  }

  return (
    <Pressable onpress={expensePressHandler}>
      <View>
        <View>
          <Text>{description}</Text>
          <Text>{date}</Text>
        </View>
        <Text>{amount}</Text>
      </View>
    </Pressable>
  );
}
