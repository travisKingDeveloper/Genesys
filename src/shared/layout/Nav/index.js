import React, { Component } from 'react';
import Link from 'shared/ui-kit/Link';

import './style.scss';

export default class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/character/21">Current Character</Link>
                </li>
            </ul>
        );
    }
}
