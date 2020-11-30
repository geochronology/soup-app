import { takeEvery } from 'redux-saga/effects'


function* workerSaga() {
  console.log('hey from worker')
}

function* rootSaga() {
  yield takeEvery('HELLO', workerSaga)
}

export default rootSaga