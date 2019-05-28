import {CHANGE_FILTER} from './../actions'
import {LOAD_DATA} from "../actions";

const data = (state = {current: [], filter: '', loadedData: []}, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return Object.assign({}, state, {
                loadedData: action.data
            });
        case CHANGE_FILTER:
            console.log("Filter changed.", action.filter);
            console.log('state', state);
            return Object.assign({}, state, {
                current: state.loadedData.filter((entry) => entry.field.includes(action.filter)),
                filter: action.filter
            });
        default:
            return state;
    }
};

export default data;