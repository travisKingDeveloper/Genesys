import { combineReducers, createStore } from 'redux';

import { default as example } from './example';

const reducers = combineReducers({
    example,
});

export default createStore(
    reducers,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // This is dirty Redux Tools
);
