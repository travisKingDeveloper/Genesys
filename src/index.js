import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './reducers';
import Routes from './routes';
import App from './App';

const container = document.createElement('div');
document.body.appendChild(container);

render((<Provider store={store}>
        <Routes>
            <App />
        </Routes>
    </Provider>), container);