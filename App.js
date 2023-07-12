import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import ItemListCategory from "./src/screens/ItemListCategory";
import { useFonts } from "expo-font";
import Home from "./src/screens/Home";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [fontsLoaded] = useFonts({
    Josefin: require("./src/assets/Jossefin_Sans/JosefinSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header />
      {categorySelected ? (
        <ItemListCategory
          category={categorySelected}
          setCategory={setCategorySelected}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
