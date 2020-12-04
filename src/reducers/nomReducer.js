import { NOMS } from "../constants";

const nomReducer = (state = {}, action) => {
  switch (action.type) {
    case NOMS.LOAD:
      return {
        ...state,
        [action.id]: {
          isLoading: true,
          noms: null, // indicate that no data has been downloaded yet
          error: false
        }
      }
    case NOMS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          noms: action.noms, // store number of downloads here as "noms"
          error: false
        }
      }
    case NOMS.LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          // noms: action.noms,
          error: true // flag the error
        }
      }
    default: return state
  }
}

export default nomReducer
