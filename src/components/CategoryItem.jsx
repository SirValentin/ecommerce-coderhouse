import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const onSelectCategory = () => {
    dispatch(setCategorySelected(item));
    navigation.navigate("ItemListCategory", { category: item });
  };
  return (
    <Pressable style={styles.container} onPress={onSelectCategory}>
      <Card>
        <Text>{item}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
