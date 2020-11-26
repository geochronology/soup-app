import { act } from "react-dom/test-utils";
import { SOUPS } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case SOUPS.SOUPIFY_FAIL_OH_NO:
      return action.error
    case SOUPS.SOUPIFY: // do nothing
    case SOUPS.SOUPIFY_SUCCESS:
      return null

    default: return state
  }
}

export default errorReducer