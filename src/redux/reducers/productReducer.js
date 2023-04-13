import { SET_PRODUCTS_LIST } from "../constants";

const initialState = {
   items: [],
};

export const productReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PRODUCTS_LIST:
         return {
            ...state,
            items: [
               ...state.items,
               ...action.payload,
            ],
         };

      default: return state;
   }
}