import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import RecentExpenses from "./src/screens/RecentExpenses.tsx";
import AllExpenses from "./src/screens/AllExpenses.tsx";
import ManageExpense from "./src/screens/ManageExpense.tsx";
import IconButton from "./src/components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      tabBarStyle: {
        backgroundColor: "black",
      },
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: "black",
      },

      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          size={24} 
          color={tintColor}
          onPress={() => {
            navigation.navigate("ManageExpense");
          }}
        />
      ),
    })}
    
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
      ></BottomTabs.Screen>
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="ManageExpense" component={ManageExpense}     options= {
       { presentation: 'modal'}
      }></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
