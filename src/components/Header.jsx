import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/Colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
  },
  textHeader: {
    fontFamily: "Josefin",
    fontSize: 24,
  },
});
