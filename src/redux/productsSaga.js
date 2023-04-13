import { takeEvery, put } from "redux-saga/effects";

import { PRODUCTS_LIST, SET_PRODUCTS_LIST } from "./constants";

function* getProducts() {
   let data = yield fetch("http://localhost:3002/products");
   data = yield data.json();
   yield put({
      type: SET_PRODUCTS_LIST,
      payload: data,
   });
}

function* productsSaga() {
   yield takeEvery(PRODUCTS_LIST, getProducts);
}

export default productsSaga;