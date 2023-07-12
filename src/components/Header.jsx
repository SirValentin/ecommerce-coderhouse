import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: "10%",
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textHeader: {
    fontFamily: "Josefin",
    fontSize: 24,
  },
});
