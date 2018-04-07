import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CritInjuries from './areas/CritInjuries';
import Items from './areas/Items';

export default function Routes({ match }) {
    return (<div>
        <Route path={`${match.url}/criticalInjuries`} component={CritInjuries} />
        <Route path={`${match.url}/items`} component={Items} />
    </div>);
}

Routes.propTypes = {
    match: PropTypes.object,
};
