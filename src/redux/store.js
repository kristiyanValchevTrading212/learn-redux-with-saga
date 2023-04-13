import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import productsSaga from "./productsSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
   reducer: rootReducer,
   middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productsSaga);

export default store;