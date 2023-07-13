import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import Header from "../components/Header";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/ItemDetail";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            header: () => {
              return (
                <Header
                  title={
                    route.name === "Home"
                      ? "Categories"
                      : route.name === "ItemListCategory"
                      ? "Products"
                      : "Detail"
                  }
                />
              );
            },
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
