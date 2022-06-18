import {
  AUTH_ERROR_CLEAR,
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_REG_SUCCESS,
  AUTH_SUCCESS,
} from "../actionTypes/authActionType"

const authInitialState = {
  isAuthenticated: false,
  token: null,
  userEmail: null,
  authLoading: false,
  authFailedMsg: null,
  authSuccessMsg: null,
}

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authLoading: false,
        authFailedMsg: null,
        isAuthenticated: true,
        token: action.payload.token,
        userEmail: action.payload.userEmail,
      }
    case AUTH_REG_SUCCESS:
      return {
        ...state,
        authLoading: false,
        authFailedMsg: null,
        authSuccessMsg: "OK",
      }

    case AUTH_FAILED:
      return {
        ...state,
        authLoading: false,
        authFailedMsg: action.payload,
      }
    case AUTH_ERROR_CLEAR:
      return {
        ...state,
        authLoading: false,
        authFailedMsg: null,
        authSuccessMsg: null,
      }
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      }

    case AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userEmail: null,
        authLoading: false,
        authFailedMsg: null,
        authSuccessMsg: null,
      }
    default:
      return state
  }
}

export default authReducer
