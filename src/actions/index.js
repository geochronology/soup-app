import { SOUPS, NOMS } from "../constants";

const soupify = () => ({
  type: SOUPS.SOUPIFY
})

const pourSoup = (soups) => ({
  type: SOUPS.SOUPIFY_SUCCESS,
  soups
})

const soupMalfunction = error => ({
  type: SOUPS.SOUPIFY_FAIL_OH_NO,
  error
})

const loadSoupNoms = id => ({
  type: NOMS.LOAD,
  id
})

const setSoupNoms = (id, noms) => ({
  type: NOMS.LOAD_SUCCESS,
  id,
  noms
})

const setSoupNomsError = id => ({
  type: NOMS.LOAD_FAIL,
  id
})

export {
  soupify,
  pourSoup,
  soupMalfunction,
  loadSoupNoms,
  setSoupNoms,
  setSoupNomsError
}
