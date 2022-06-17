import {
  PRODUCT_FETCH_ALL,
  PRODUCT_FETCH_ALL_FAILED,
  PRODUCT_FETCH_SINGLE,
  PRODUCT_FETCH_SINGLE_FAILED,
} from "../actionTypes/productActionType"

const productInitialState = {
  allProducts: null,
  allProductsFailed: false,
  singleProductLoading: false,
  singlePrdouctFailed: false,
  singleProduct: null,
}

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_ALL:
      return {
        ...state,
        allProducts: action.payload,
        allProductsFailed: false,
      }

    case PRODUCT_FETCH_ALL_FAILED:
      return {
        ...state,
        allProductsFailed: true,
      }
    case PRODUCT_FETCH_SINGLE:
      return {
        ...state,
        singleProduct: action.payload,
        singleProductLoading: false,
      }
    case PRODUCT_FETCH_SINGLE_FAILED:
      return {
        ...state,
        singlePrdouctFailed: true,
        singleProductLoading: false,
      }

    default:
      return state
  }
}

export default productReducer
