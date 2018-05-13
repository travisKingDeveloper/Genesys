import React from 'react';
import darkside from './darkside';
import lightside from './lightside';

const themes = {
    lightside,
    darkside,
};
export default themes;

export const ThemeContext = React.createContext(darkside);

