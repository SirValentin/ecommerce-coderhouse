import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import productsRaw from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";

const ItemListCategory = ({ category, setCategory }) => {
  const [categorySelected, setCategorySelected] = useState(category);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsRaw.filter(
      (product) =>
        product.category === categorySelected &&
        product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );
    setProducts(productsFiltered);
  }, [categorySelected, keyword]);

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9]*$/;
    if (expression.test(input)) {
      setKeyword(input);
      setKeywordError("");
    } else {
      setKeywordError("ingresa solo letras y numeros");
    }
  };

  return (
    <View style={styles.FlatListContainer}>
      <Search
        onSearch={onSearch}
        error={keywordError}
        goBack={() => setCategory("")}
      />
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => ProductItem({ item })}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  FlatListContainer: {
    flex: 1,
    alignItems: "center",
  },
});
