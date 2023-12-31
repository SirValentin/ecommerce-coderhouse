import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
import ListAddress from "../screens/ListAddress";
import LocationSelector from "../screens/LocationSelector";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header route={route} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
      <Stack.Screen name="List Address" component={ListAddress} />
      <Stack.Screen name="Location Selector" component={LocationSelector} />
    </Stack.Navigator>
  );
};

export default MyProfileStack;
