import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { FontAwesome5 } from "@expo/vector-icons";

const CartItem = ({ cartItem }) => {
  return (
    <Card>
      <View style={styles.containerCard}>
        <View>
          <Text style={styles.text}>
            {cartItem.title} {cartItem.quantity}
          </Text>
          <Text style={styles.text}>{cartItem.brand}</Text>
          <Text style={styles.text}>${cartItem.price}</Text>
        </View>
        <FontAwesome5 name="trash" size={24} color="black" />
      </View>
    </Card>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  containerCard: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "black",
  },
});
