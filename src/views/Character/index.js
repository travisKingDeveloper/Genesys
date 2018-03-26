import React, { Component } from 'react';

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