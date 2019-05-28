import {CHANGE_FILTER} from './../actions'

const filter = (state = "", action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            console.log("FIlter changed.",action.filter);
            //todo: here return filteredState
            // return action.filter;
        default:
            return state;
    }
};

export default filter;