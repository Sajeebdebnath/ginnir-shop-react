import axios from "axios"

import jwt_decode from "jwt-decode"
import {
  AUTH_ERROR_CLEAR,
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_REG_SUCCESS,
  AUTH_SUCCESS,
} from "../actionTypes/authActionType"

const url = "http://localhost:4000"

export const clearAuthErrors = () => {
  return {
    type: AUTH_ERROR_CLEAR,
  }
}
export const authSuccess = (token, userEmail) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token: token,
      userEmail: userEmail,
    },
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

export const authLogin = (email, password) => async (dispatch) => {
  dispatch(authLoading())
  const authData = {
    email: email,
    password: password,
  }
  await axios
    .post(url + "/login", authData)
    .then((response) => {
      console.log(response.data)
      const token = response.data.accessToken
      const decode = jwt_decode(token)
      const expiration = new Date(decode.exp * 1000)
      console.log(decode, "exp:", expiration)
      localStorage.setItem("token", token)
      localStorage.setItem("userEmail", decode.email)
      localStorage.setItem("expiration", expiration)
      dispatch(authSuccess(token, decode.email))
    })
    .catch((error) => {
      const errorMsg = error.response.data
      dispatch(authFailed(errorMsg))
    })
}
export const authLogout = () => (dispatch) => {
  localStorage.removeItem("token")
  localStorage.removeItem("userEmail")
  localStorage.removeItem("expiration")
  dispatch({
    type: AUTH_LOGOUT,
  })
}

export const authCheck = () => (dispatch) => {
  const token = localStorage.getItem("token")
  if (!token) {
    authLogout()
  } else {
    const expiration = new Date(localStorage.getItem("expiration"))
    if (expiration <= new Date()) {
      authLogout()
    } else {
      const userEmail = localStorage.getItem("userEmail")
      dispatch(authSuccess(token, userEmail))
    }
  }
}
