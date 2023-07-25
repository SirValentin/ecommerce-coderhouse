import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { setProductIdSelected } from "../features/shop/shopSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const onSelect = () => {
    dispatch(setProductIdSelected(item.id));
    navigation.navigate("ItemDetail", { productId: item.id });
  };
  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <Card>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: item.images[0] }}
        />
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>${item.price}</Text>
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
  image: {
    width: "100%",
    height: 100,
    paddingBottom: 4,
  },
  text: {
    color: "black",
    fontFamily: "Josefin",
    fontSize: 18,
  },
});
