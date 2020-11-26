import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const middleware = []

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
  ))
  return store
}

export default configureStore