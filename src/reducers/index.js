import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import soupReducer from "./soupReducer";
import loadingReducer from "./loadingReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  soups: soupReducer,
  error: errorReducer,
  nextPage: pageReducer
})

export default rootReducer