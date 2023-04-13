import { takeEvery, put } from "redux-saga/effects";

import { loadProductsData, fetchProducts } from "./slices/productsSlice";

function* onFetchProducts() {
   let data = yield fetch("http://localhost:3002/products");
   data = yield data.json();
   yield put(loadProductsData(data));
}

function* productsSaga() {
   yield takeEvery(fetchProducts, onFetchProducts);
}

export default productsSaga;