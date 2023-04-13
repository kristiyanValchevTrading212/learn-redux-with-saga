import { takeEvery, put, all } from "redux-saga/effects";

import { loadProductsData, fetchProducts } from "../redux/slices/productsSlice";

function* onFetchProducts() {
  let data = yield fetch("http://localhost:3002/products");
  data = yield data.json();
  yield put(loadProductsData(data));
}

function* productsSaga() {
  yield all([takeEvery(fetchProducts, onFetchProducts)]);
}

export default productsSaga;
