import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/Colors";

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "60%",
  },
  text: {
    color: colors.lightBlue,
    fontFamily: "PlayFair",
    fontSize: 22,
  },
});
