import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import jobReducer from './reducers/jobReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
    job: jobReducer,
    filter: filterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
