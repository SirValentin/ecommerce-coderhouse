import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
// import cartData from "../data/cart.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/Colors";
import { useSelector } from "react-redux";
import { usePostCartMutation } from "../services/shopServices";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostCartMutation();
  const onConfirm = () => {
    triggerPost({ total, cartItems, user: "loggedUser" });
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable>
          <Text style={styles.text} onPress={onConfirm}>
            Confirm
          </Text>
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
