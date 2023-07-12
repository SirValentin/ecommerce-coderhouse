import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../global/Colors";

const Card = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: colors.navy,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
