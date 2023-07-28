import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import productsRaw from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const ItemListCategory = ({ navigation, route }) => {
  const productsByCategory = useSelector(
    (state) => state.shopReducer.value.productsByCategory
  );

  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsByCategory.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );
    setProducts(productsFiltered);
  }, [keyword]);

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
        style={styles.list}
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => (
          <ProductItem item={item} navigation={navigation} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  FlatListContainer: {
    flex: 1,
    paddingBottom: 65,
  },
  list: {
    // paddingHorizontal: 70,
  },
});
