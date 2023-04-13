import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartContent: [],
};

export const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const element = state.cartContent.find(
        (element) => element?.id === action?.payload?.id
      );

      if (element) {
        element.count = (element.count || 0) + 1;
      } else {
        state.cartContent.push({
          ...action.payload,
          count: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      if (
        state.cartContent.find((element) => element?.id === action?.payload)
          ?.count > 1
      ) {
        state.cartContent = state.cartContent.map((element) => {
          if (element.id === action.payload) element.count -= 1;
          return element;
        });
      } else
        state.cartContent = state.cartContent.filter(
          (element) => element.id !== action.payload
        );
    },
    emptyCart: (state) => {
      state.cartContent = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
