import { SOUPS } from "../constants";

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    // increment nextPage by 1 when data is loaded successfully from current page
    case SOUPS.SOUPIFY_SUCCESS:
      return state + 1
    default:
      return state
  }
}

export default pageReducer