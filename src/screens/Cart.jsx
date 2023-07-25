import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import cartData from "../data/cart.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/Colors";

const Cart = () => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cartData.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    );
    setTotal(total);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartData}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable>
          <Text style={styles.text}>Confirm</Text>
        </Pressable>
        <Text style={styles.text}>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  list: {
    width: "100%",
    paddingHorizontal: 30,
  },
  totalContainer: {
    width: "100%",
    backgroundColor: colors.blue,
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
