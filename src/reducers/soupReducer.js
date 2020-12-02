import { SOUPS } from "../constants";

const soupReducer = (state = [], action) => {
  if (action.type === SOUPS.SOUPIFY_SUCCESS) {
    return [...state, ...action.soups]
  }
  return state
}

export default soupReducer