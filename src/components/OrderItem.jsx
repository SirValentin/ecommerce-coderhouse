import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";

const OrderItem = ({ order }) => {
  const total = order.items.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );
  return (
    <Card>
      <View style={styles.container}>
        <Text>{new Date(order.createdAt).toLocaleString()}</Text>
        <Text style={styles.textPrice}>${total}</Text>
      </View>
    </Card>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textPrice: {
    fontSize: 18,
  },
});
