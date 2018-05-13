module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb',
    env: {
        browser: true,
        es6: true,
    },
    rules: {
        // Customized Rules
        "indent": [ 'warn', 4, { "SwitchCase:: 1 } ],
        "max-len": ["error", { "ignoreComments": true, "code": 100 }],
        "react/jsx-filename-extension": [ 'error', { "extensions": ['.js']}],
        "import/extensions": ["error", "ignorePackages", { "js": "never" }],
        "react/prop-types": [2, { "ignore": ["children"] }],
        "react/forbid-prop-types": [1, { "forbid": [ "any" ] } ],
        "jsx-a11y/anchor-is-valid": [ "error", {"components": [ "Link" ],"specialLink": [ "to" ]}],
        "react/prefer-stateless-function": [0], //For not polluting warnings when prototyping code. If we see it to need to be stateless we will mark it in pr
        "linebreak-style": 0, //Multi Machine Development
        "import/no-unresolved": "off", //This is brittle and with the defined shared it breaks,
        "react/no-unescaped-entities": ["off"], //I don't see much sense in making sure you escape text such as ' " and < > because it solves a nearly unexistant problem of accidentally ending react tag prematuraly
        "react/jsx-indent": "off", //Turned off because I'm not sure what style of indents I like but it tends to be odd
        "react/jsx-closing-tag-location": "off", //Turned off because I'm not sure what style of indents I like but it tends to be odd
        "react/require-default-props": "off",
        "import/no-named-default": 0, //Refactoring is easier this way plus you can alias as well
    },
    parserOptions: {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true
        }
    }
}