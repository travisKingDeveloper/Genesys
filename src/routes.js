import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function Routes(props) {
    return (<BrowserRouter>
                {props.children}
            </BrowserRouter>);
}
