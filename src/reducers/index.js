import { combineReducers } from "redux";

import { errorReducer } from "./errorReducer";
import { soupReducer } from "./soupReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  soups: soupReducer,
  error: errorReducer
})

export default rootReducer