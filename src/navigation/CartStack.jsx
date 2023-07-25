import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Cart from "../screens/Cart";
import Header from "../components/Header";
import { titleHeader } from "../global/Global";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title={titleHeader[route.name]} />;
        },
      })}
    >
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;

const styles = StyleSheet.create({});
