import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import RecentExpenses from "./src/screens/RecentExpenses.tsx";
import AllExpenses from "./src/screens/AllExpenses.tsx";
import ManageExpense from "./src/screens/ManageExpense.tsx";
import IconButton from "./src/components/UI/IconButton";
import { ExpensesContextProvider } from "./src/components/context/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          backgroundColor: "#2E2E2E",
        },
        headerTintColor: "#FFFFFF",
        headerStyle: {
          backgroundColor: "#2E2E2E",
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
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      ></BottomTabs.Screen>
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: "modal",
              headerStyle: {
                backgroundColor: "#2E2E2E",
              },
              headerTintColor: "#FFFFFF",
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
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
