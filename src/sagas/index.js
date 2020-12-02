import { all } from "redux-saga/effects";

import soupifySaga from "./soupifySaga";

function* rootSaga() {
  yield all([
    soupifySaga(),
  ])
}

export default rootSaga
