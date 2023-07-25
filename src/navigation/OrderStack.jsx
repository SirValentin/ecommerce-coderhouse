import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { titleHeader } from "../global/Global";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/OrderScreen";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();
const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OrderScreen"
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title={titleHeader[route.name]} />;
        },
      })}
    >
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
