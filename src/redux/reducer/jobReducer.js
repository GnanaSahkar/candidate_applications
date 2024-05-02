

import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from '../Actions/jobActions';

const initialState = {
    jobs: [],
    loading: false,
    error: null,
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_JOBS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default jobReducer;
