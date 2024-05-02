// filterActions.js

// Action Types
export const FILTER_JOBS = 'FILTER_JOBS';

// Action Creator
export const filterJobs = (filters) => ({
    type: FILTER_JOBS,
    payload: filters,
});
