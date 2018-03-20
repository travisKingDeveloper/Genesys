import { combineReducers, createStore } from 'redux';

import { default as example } from './example';

const reducers = combineReducers({
    example,
});

export default createStore(
    reducers, 
    //This is dirty Redux Tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);