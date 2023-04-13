import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
   cartContent: [],
};

export const cartReducer = (state = initialState, action) => {
   let newCartContent = [...state.cartContent];
   let alreadyHaveElement = state.cartContent.find(element => element?.id === action?.payload?.id);

   switch (action.type) {
      case ADD_TO_CART:
         if (alreadyHaveElement)
            newCartContent = newCartContent.map(element => {
               if (element.id === action.payload.id) element.count = (element.count || 0) + 1;
               return element;
            });
         else newCartContent.push(action.payload);

         return {
            ...state,
            cartContent: newCartContent,
         };

      case REMOVE_FROM_CART:
         if (alreadyHaveElement?.count > 1) {
            newCartContent = newCartContent.map(element => {
               if (element.id === action.payload.id) element.count -= 1;
               return element;
            });
         }
         else newCartContent = newCartContent.filter(element => element.id !== action.payload.id);

         return {
            ...state,
            cartContent: newCartContent,
         };

      case EMPTY_CART:
         return {
            ...state,
            cartContent: [],
         };

      default: return state;
   }
}