import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductsReducer from "./modules/listProducts/reducer";
import cartReducer from "./modules/cartProducts/reducer";

const reducers = combineReducers({ products: ProductsReducer, cart: cartReducer })
const store = createStore(reducers, applyMiddleware(thunk))
export default store