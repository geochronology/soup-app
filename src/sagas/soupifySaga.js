import { call, put, select, takeEvery } from "redux-saga/effects";
import { SOUPS } from "../constants";
import { getSoups } from "../api";
import { pourSoup, soupMalfunction } from "../actions";

// return the next page of data to fetch
const getPage = state => state.nextPage

function* handleTheSoup() {
  try {
    console.log('SOUP!!1')

    // get current page from state with select()
    const page = yield select(getPage)

    // get the soup from API
    const soups = yield call(getSoups, page)

    // make the soup come alive with the power of friendship
    yield put(pourSoup(soups.results))

  } catch (error) {
    // yield put()
    console.log("FUUUUUUUUU")
    console.log(error)
  }
  // console.log(page)
}

// function* handleTheSoup() {
//   console.log("SOUP!!!")
// }


export default function* watchForSoup() {
  // handle async soup getting whenever the soupification is commenced
  yield takeEvery(SOUPS.SOUPIFY, handleTheSoup)
}