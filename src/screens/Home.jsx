import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../global/Colors";
import categories from "../data/categories";
import CategoryItem from "../components/CategoryItem";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => (
          <CategoryItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
});
