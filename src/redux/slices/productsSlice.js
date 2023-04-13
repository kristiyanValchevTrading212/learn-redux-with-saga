import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
};

export const productsSlice = createSlice({
   name: "productsData",
   initialState,
   reducers: {
      loadProductsData: (state, action) => {
         state.items = action.payload;
      },
   },
});

export const { loadProductsData } = productsSlice.actions;

export default productsSlice.reducer;