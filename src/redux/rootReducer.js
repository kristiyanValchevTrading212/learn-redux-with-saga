import { combineReducers } from "redux";

import { appReducer } from "./reducers/appReducer";
import { cartReducer } from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducer";

export default combineReducers({
   appData: appReducer,
   cartData: cartReducer,
   productsData: productReducer,
});