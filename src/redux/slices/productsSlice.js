import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
};

export const productsSlice = createSlice({
   name: "productsData",
   initialState,
   reducers: {
      fetchProducts: () => { },
      loadProductsData: (state, action) => {
         state.items = action.payload;
      },
   },
});

export const { loadProductsData, fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;