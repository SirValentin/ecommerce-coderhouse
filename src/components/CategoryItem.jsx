import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const CategoryItem = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ItemListCategory", { category: item })
      }
    >
      <Card>
        <Text>{item}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
