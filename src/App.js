import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from 'shared/layout/Nav';

import UserCharacters from './views/UserCharacters';
import Character from './views/Character';
import Home from './views/Home';
import NotFound from './views/NotFound';

import './common.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/characters" component={UserCharacters} />
                    <Route path="/character/:id" component={Character} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
