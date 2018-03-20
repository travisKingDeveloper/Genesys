import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Home from './views/Home';
import Link from 'shared/ui-kit/Link';

export default function Routes(props) {
    const {
        store
    } = props;

    return (<BrowserRouter>
        <Provider store={store}>
            <App>
                <Route path="/" component={Link}/>
                <Route path="/TravisIsCool" component={Home}/>
            </App>
        </Provider>
    </BrowserRouter>)
}
