import axios from "axios"
import { AUTH_ERROR_CLEAR, AUTH_FAILED, AUTH_LOADING, AUTH_REG_SUCCESS } from "../actionTypes/authActionType"

const url = "http://localhost:4000"

export const clearAuthErrors = () => {
  return {
    type: AUTH_ERROR_CLEAR,
  }
}
export const authRegSuccess = () => {
  return {
    type: AUTH_REG_SUCCESS,
  }
}

export const authLoading = () => {
  return {
    type: AUTH_LOADING,
  }
}

export const authFailed = (error) => {
  return {
    type: AUTH_FAILED,
    payload: error,
  }
}

export const authSignUp = (email, password) => async (dispatch) => {
  dispatch(authLoading())
  const authData = {
    email: email,
    password: password,
  }
  await axios
    .post(url + "/users/", authData)
    .then((response) => {
      dispatch(authRegSuccess())
      const data = response
      console.log(data)
    })
    .catch((error) => {
      console.log(error.response)
      const errorMsg = error.response.data
      dispatch(authFailed(errorMsg))
    })
}
