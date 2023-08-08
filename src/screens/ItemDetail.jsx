import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../features/cart/cartSlice";

const ItemDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state) => state.shopReducer.value.productDetail
  );
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  const onAddCart = () => {
    dispatch(addCartItem({ ...productDetail, quantity: 1 }));
  };
  useEffect(() => {
    if (width > height) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }, [width, height]);

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go Back" />
      {productDetail && (
        <View
          style={
            orientation === "portrait"
              ? styles.container
              : styles.containerLandscape
          }
        >
          <Image
            source={{ uri: productDetail.images[0] }}
            resizeMode="contain"
            style={styles.image}
          />
          <View>
            <Text>{productDetail.title}</Text>
            <Text>{productDetail.description}</Text>
            <Text>${productDetail.price}</Text>
          </View>
        </View>
      )}
      <Pressable onPress={onAddCart}>
        <Text>Add to cart</Text>
      </Pressable>
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
