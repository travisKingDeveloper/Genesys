import React from 'react';
import { render } from 'react-dom';

import store from './reducers';
import Routes from './routes';

const container = document.createElement('div');
document.body.appendChild(container);

render(<Routes store={store} />, container);