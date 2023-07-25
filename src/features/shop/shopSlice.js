import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/products.json";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      categorySelected: "",
      productIdSelected: "",
      allProducts: productsData,
      productsSelected: [],
      productDetail: null,
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.value.productsSelected = state.value.allProducts.filter(
        (product) => product.category === action.payload
      );
      state.value.categorySelected = action.payload;
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload;
      state.value.productDetail = state.value.productsSelected.find(
        (product) => product.id === state.value.productIdSelected
      );
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
