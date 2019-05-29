export const changeFilter = filter => ({
    type: CHANGE_FILTER,
    filter
});

export const loadData = data => ({
    type: LOAD_DATA,
    data
});

export const addData = data => ({
   type: ADD_DATA,
    data
});

export const changeAddInput = input => ({
   type: CHANGE_ADD_INPUT,
   input
});

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const LOAD_DATA = 'LOAD_DATA';
export const ADD_DATA = 'ADD_DATA';
export const CHANGE_ADD_INPUT = 'CHANGE_ADD_INPUT';