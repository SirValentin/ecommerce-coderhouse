import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";

const ItemDetail = ({ navigation, route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > height) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }, [width, height]);

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === productId
    );
    setProduct(productSelected);
  }, [productId]);

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go Back" />
      {product && (
        <View
          style={
            orientation === "portrait"
              ? styles.container
              : styles.containerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            resizeMode="contain"
            style={styles.image}
          />
          <View>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  containerLandscape: {
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 200,
  },
});
