// filterReducer.js

import { FILTER_JOBS } from '../Actions/filterActions';

const initialState = {
    minBasePay: '',
    location: '',
    remote: false,
    // Define initial state for other filters as needed
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_JOBS:
            // Merge the payload with the current state to update only the specified filters
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
