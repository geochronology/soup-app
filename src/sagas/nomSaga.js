import { fork, take } from "redux-saga/effects";

import { SOUPS } from "../constants";
import { getSoupNoms } from "../api";
import { } from "../actions";

function* handleNomRequest(id) {
  console.log(id)
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







