import { combineReducers } from "redux";

import appReducer from "./slices/appSlice";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productsSlice";

export default combineReducers({
   appData: appReducer,
   cartData: cartReducer,
   productsData: productReducer,
});