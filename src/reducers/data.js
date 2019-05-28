import {CHANGE_FILTER, LOAD_DATA} from './../actions'

const data = (state = {data: [], filter: ''}, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return Object.assign({},state, {
                data: action.data
            });
        case CHANGE_FILTER:
            console.log("Filter changed.", action.filter);
            console.log('state', state);
            return Object.assign({}, state, {
                data: state.data.filter((entry) => entry.field.includes(action.filter)),
                filter: action.filter
            });
        default:
            return state;
    }
};

export default data;