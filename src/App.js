import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Nav from 'shared/layout/Nav';
import themes from 'shared/themes';

import UserCharacters from './views/UserCharacters';
import Character from './views/Character';
import Home from './views/Home';
import NotFound from './views/NotFound';

import './common.scss';

@connect(state => ({
    themeName: state.userSettings.themeName,
}))
export default class App extends Component {
    static propTypes = {
        themeName: PropTypes.string.isRequired,
    }

    render() {
        const {
            themeName,
        } = this.props;

        const theme = themes[themeName];

        return (
            <div>
                <ThemeProvider theme={theme}>
                    <div>
                        <Nav />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/characters" component={UserCharacters} />
                            <Route path="/character/:id" component={Character} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </ThemeProvider>
            </div>
        );
    }
}
