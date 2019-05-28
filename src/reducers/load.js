import {LOAD_DATA} from './../actions'

const filter = (state = [], action) => {
    switch (action.type) {
        case LOAD_DATA:
            break;
        default:
            return state;
    }
};

export default filter;