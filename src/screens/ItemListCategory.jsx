import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import productsRaw from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";

const ItemListCategory = ({ navigation, route }) => {
  const { category } = route.params;

  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsRaw.filter(
      (product) =>
        product.category === category &&
        product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );
    setProducts(productsFiltered);
  }, [category, keyword]);

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
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => (
          <ProductItem item={item} navigation={navigation} />
        )}
        numColumns={2}
        horizontal={false}
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
