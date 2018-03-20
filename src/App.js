import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'shared/ui-kit/Button';
import './common.scss';

@connect((state) => ({
    ...state.example
}))
export default class App extends Component {
    render() {
        return (<div className="danger">
            hello worlds {this.props.travis ? 'travis': 'lower life form'}

            <Button />

            This is all above app

            {this.props.children}
        </div>);
    }
}
