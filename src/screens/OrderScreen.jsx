import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import orderData from "../data/orders.json";
import OrderItem from "../components/OrderItem";

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.containerFlatList}
        data={orderData}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  containerFlatList: {
    width: "100%",
    paddingHorizontal: 30,
  },
});
