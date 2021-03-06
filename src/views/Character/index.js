import React from 'react';

import Character from './areas/Character';
import Routes from './Routes';

export default function (props) {
    return (
        <div>
            <h1>This is where we could connect to redux store for Entire View</h1>
            <Character {...props} />
            <Routes {...props} />
        </div>
    );
}
