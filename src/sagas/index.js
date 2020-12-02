import { all } from "redux-saga/effects";

import soupifySaga from "./soupifySaga";
import nomSaga from "./nomSaga";

function* rootSaga() {
  yield all([
    soupifySaga(),
    nomSaga()
  ])
}

export default rootSaga
