import { fork, take, put, call } from "redux-saga/effects";

import { SOUPS } from "../constants";
import { getSoupNoms } from "../api";
import { loadSoupNoms, setSoupNoms, setSoupNomsError } from "../actions";

function* handleNomRequest(id) {
  yield put(loadSoupNoms(id))
  const res = yield call(getSoupNoms, id)
  console.log(res)
  yield put(setSoupNoms(id, res.downloads.total))
  // console.log(id)
}

function* watchNomRequest() {
  while (true) {
    // destructure soups from result of successful soup load
    const { soups } = yield take(SOUPS.SOUPIFY_SUCCESS)

    // iterate over soups to get noms for each soup
    for (const soup of soups) {
      yield fork(handleNomRequest, soup.id)
    }
  }
}

export default watchNomRequest
