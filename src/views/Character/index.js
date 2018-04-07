import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Character extends Component {
    render() {
        const {
            match: {
                params: {
                    id,
                },
            },
        } = this.props;

        return (<div>
            Bitch Man!!!! {id}
        </div>);
    }
}

Character.propTypes = {
    match: PropTypes.object,
};

