import React from 'react';

import UserCharacters from './areas/UserCharacters';
import Routes from './Routes';

export default function (props) {
    return (
        <div>
            <h1>This is where we could connect to redux store for Entire View</h1>
            <UserCharacters {...props} />
            <Routes {...props} />
        </div>
    );
}
