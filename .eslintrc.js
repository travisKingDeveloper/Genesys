module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb',
    env: {
        browser: true,
        es6: true,
    },
    rules: {
        // Customized Rules
        "indent": [ 'warn', 4, { SwitchCase: 1 } ],
        "react/jsx-filename-extension": [ 'error', { extensions: ['.js']}],
        // Disabled Rules
        "linebreak-style": 0, //Multi Machine Development
    },
    parserOptions: {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true
        }
    }
}