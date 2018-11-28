import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import OrderRuducer from "./OrderReducer";

const rootReducer = combineReducers({
    orders: OrderRuducer,
    products: ProductReducer

})

export default rootReducer;