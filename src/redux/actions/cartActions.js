import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants";

export const addToCart = productData => {
   return {
      type: ADD_TO_CART,
      payload: {
         ...productData,
         count: 1,
      },
   };
}

export const removeFromCart = productID => {
   return {
      type: REMOVE_FROM_CART,
      payload: {
         id: productID,
      },
   };
}

export const emptyCart = () => {
   return {
      type: EMPTY_CART,
   };
}