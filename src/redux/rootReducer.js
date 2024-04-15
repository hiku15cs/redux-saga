import { combineReducers } from "redux";
import { cartdata } from "./cartReducer";
import {productReducer} from "./productReducer";


export default combineReducers({
    cartdata,
    productReducer
});