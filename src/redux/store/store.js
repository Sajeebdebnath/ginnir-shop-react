import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import authReducer from "../reducers/authReducer"
import productReducer from "../reducers/productReducer"

const store = createStore(
  combineReducers({
    product: productReducer,
    auth: authReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
