import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class Character extends Component {
    render() {
        const {
            match: {
                params: {
                    id,
                },
                url,
            },
        } = this.props;

        return (<div>
            <span>{`${url} : ${id}`}</span>
            <ul>
                <li>
                    <Link to={`${url}/criticalInjuries`}>Crits</Link>
                </li>
                <li>
                    <Link to={`${url}/items`}>Items</Link>
                </li>
            </ul>
        </div>);
    }
}

Character.propTypes = {
    match: PropTypes.object,
};

