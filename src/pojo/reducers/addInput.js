import {CHANGE_ADD_INPUT} from '../actions/pojoActions'

const addInput = (state = '', action) => {
    switch (action.type) {
        case CHANGE_ADD_INPUT:
            console.log('add_action', action);
            return action.input;
        default:
            return state;
    }
};

export default addInput;