import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  productDetailsReducer,
  productsReducer
} from './reducers/productsReducer'

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer
})

let initialState = {}

const middleWare = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
)
export default store
