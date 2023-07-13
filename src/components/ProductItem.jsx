import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const ProductItem = ({ item, navigation }) => {
  const onSelect = (id) => {
    navigation.navigate("ItemDetail", { productId: item.id });
  };
  return (
    <Pressable onPress={() => onSelect(item.id)}>
      <Card>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: item.images[0] }}
        />
        <Text style={styles.text}>{item.title}</Text>
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
  },
  text: {
    color: "white",
    paddingTop: 4,
    fontFamily: "Josefin",
    fontSize: 18,
  },
});
