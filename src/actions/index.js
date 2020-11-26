import { SOUPS } from "../constants";

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

export {
  soupify,
  pourSoup,
  soupMalfunction
}
