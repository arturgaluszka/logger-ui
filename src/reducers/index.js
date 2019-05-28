import {combineReducers} from "redux";
import filter from "./filter"
import load from "./load"

export default combineReducers({
    filter,
    load
})