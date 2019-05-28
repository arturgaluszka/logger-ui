export const changeFilter = filter => ({
    type: CHANGE_FILTER,
    filter
});

export const loadData = data => ({
    type: LOAD_DATA,
    data
});

// export const VisibilityFilters = {
//     ALL_ENTRIES: 'ALL_ENTRIES',
//     FILTERED_ENTRIES: 'FILTERED_ENTRIES'
// }

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const LOAD_DATA = 'LOAD_DATA';