import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ onSearch, error, goBack }) => {
  const [keyword, setKeyword] = useState("");
  const deleteInput = () => {
    setKeyword("");
    onSearch("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Busca un producto"
          value={keyword}
          onChangeText={setKeyword}
        />
        <View style={styles.buttons}>
          <Pressable onPress={() => onSearch(keyword)}>
            <FontAwesome5 name="search" size={24} color={colors.navy} />
          </Pressable>
          <Pressable onPress={() => deleteInput()}>
            <FontAwesome5 name="eraser" size={24} color={colors.navy} />
          </Pressable>
          <Pressable onPress={goBack}>
            <AntDesign name="back" size={24} color={colors.navy} />
          </Pressable>
        </View>
      </View>
      {error ? <Text style={styles.textError}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "100%",
  },
  containerInput: {
    flexDirection: "row",
  },
  buttons: {
    flexDirection: "row",
    width: "20%",
    gap: 5,
    paddingLeft: 5,
  },
  inputSearch: {
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: colors.lightBlue,
    width: "70%",
  },
  textError: {
    color: "red",
  },
});
