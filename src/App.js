import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Nav from 'shared/layout/Nav';

import Character from './views/Character';
import Characters from './views/Characters';
import Home from './views/Home';
import NotFound from './views/NotFound';

import './common.scss';

export default class App extends Component {
    render() {
        return (<div>
            <Nav />

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/character" component={Characters}/>
                <Route path="/character/:id" component={Character}/>
                <Route component={NotFound} />
            </Switch>
        </div>);
    }
}
