import {ADD_DATA, CHANGE_FILTER, REMOVE_DATA} from '../actions/pojoActions'
import {LOAD_DATA} from "../actions/pojoActions";

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
        case REMOVE_DATA:
            let loadedDataRemoved = state.loadedData.filter((entry)=> entry.id !== action.toRemove);
            return Object.assign({},state,{
                loadedData: loadedDataRemoved,
                current : filter(loadedDataRemoved, state.filter)
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