import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Text,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartStack from "./CartStack";
import ShopStack from "./ShopStack";
import { colors } from "../global/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import OrderStack from "./OrderStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";
import MyProfileStack from "./MyProfileStack";

const Tab = createBottomTabNavigator();
const Navigator = () => {
  const { email } = useSelector((state) => state.userReducer.value);
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {email ? (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: styles.tabBarStyle,
            }}
          >
            <Tab.Screen
              name="Shop"
              component={ShopStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.containerTab}>
                      <FontAwesome
                        name="shopping-bag"
                        size={24}
                        color={focused ? "white" : colors.navy}
                      />
                      <Text style={styles.textTab}>Shop</Text>
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Cart"
              component={CartStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.containerTab}>
                      <FontAwesome
                        name="shopping-cart"
                        size={24}
                        color={focused ? "white" : colors.navy}
                      />
                      <Text style={styles.textTab}>Cart</Text>
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Orders"
              component={OrderStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.containerTab}>
                      <FontAwesome
                        name="list-ul"
                        size={24}
                        color={focused ? "white" : colors.navy}
                      />
                      <Text style={styles.textTab}>Orders</Text>
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="MyProfile"
              component={MyProfileStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.containerTab}>
                      <Ionicons
                        name="person-circle-outline"
                        size={24}
                        color={focused ? "white" : colors.navy}
                      />
                      <Text style={styles.textTab}>Profile</Text>
                    </View>
                  );
                },
              }}
            />
          </Tab.Navigator>
        ) : (
          <AuthStack />
        )}
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
  tabBarStyle: {
    backgroundColor: colors.blue,
    shadowColor: "black",
    elevation: 4,
    position: "absolute",
    bottom: 15,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 50,
  },
  textTab: {
    color: colors.navy,
  },
  containerTab: {
    alignItems: "center",
  },
});
