import axios from "axios"
import { PRODUCT_FETCH_ALL, PRODUCT_FETCH_ALL_FAILED } from "../actionTypes/productActionType"

const url = "http://localhost:4000"

export const productAllFetch = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  await axios
    .get(url + "/products", config)
    .then((response) => {
      const data = response.data
      console.log(response.data)
      dispatch({
        type: PRODUCT_FETCH_ALL,
        payload: data,
      })
    })
    .catch((error) => {
      console.log("Fetch error", error.response)
      dispatch({
        type: PRODUCT_FETCH_ALL_FAILED,
      })
    })
}
