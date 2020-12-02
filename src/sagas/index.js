import { takeEvery } from 'redux-saga/effects'

import { SOUPS } from "../constants";

function* workerSaga() {
  console.log('generating soup...')
}

function* rootSaga() {
  // Watch for image load button click
  yield takeEvery(SOUPS.SOUPIFY, workerSaga)
}

export default rootSaga
