import { takeEvery, put } from "redux-saga/effects";

import { loadProductsData } from "./slices/productsSlice";

function* getProducts() {
   let data = yield fetch("http://localhost:3002/products");
   data = yield data.json();
   yield put(loadProductsData(data));
}

function* productsSaga() {
   yield takeEvery(loadProductsData, getProducts);
}

export default productsSaga;