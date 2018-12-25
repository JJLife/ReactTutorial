import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form"
import ProductReducer from "./ProductReducer";
import OrderRuducer from "./OrderReducer";

const rootReducer = combineReducers({
    orders: OrderRuducer,
    products: ProductReducer,
    form : reduxForm
})

export default rootReducer;