import {ADD_DATA, CHANGE_FILTER} from './../actions'
import {LOAD_DATA} from "../actions";

const data = (state = {current: [], filter: '', loadedData: []}, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return Object.assign({}, state, {
                loadedData: action.data
            });
        case ADD_DATA:
            let loadedData = [
                ...state.loadedData,
                action.data
            ];
            return Object.assign({},state,{
                loadedData: loadedData,
                current : filter(loadedData, state.filter)
            });
        case CHANGE_FILTER:
            console.log("Filter changed.", action.filter);
            return Object.assign({}, state, {
                current : filter(state.loadedData, action.filter),
                filter: action.filter
            });
        default:
            return state;
    }
};

function filter(loadedData, filter) {
    console.log('filtering ' + filter, loadedData);
    if(filter === '') {
        return loadedData;
    }
    return loadedData.filter((entry) => entry.field.includes(filter));
}

export default data;