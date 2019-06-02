import {combineReducers} from "redux";
import data from "../../pojo/reducers/data"
import addInput from "../../pojo/reducers/addInput";

export default combineReducers({
    data,
    addInput
})