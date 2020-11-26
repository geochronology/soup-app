import { SOUPS } from "../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case SOUPS.SOUPIFY:
      return true;
    case SOUPS.SOUPIFY_SUCCESS:
      return false;
    case SOUPS.SOUPIFY_FAIL_OH_NO:
      return false

    default: return state
  }
}

export default loadingReducer
