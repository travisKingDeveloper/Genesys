import { combineReducers, createStore } from 'redux';

import example from './example';
import userSettings from './user-settings';

const reducers = combineReducers({
    example,
    userSettings,
});

export default createStore(
    reducers,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // This is dirty Redux Tools
);
