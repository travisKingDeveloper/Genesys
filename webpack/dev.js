const path = require('path');

const common = require('./common');

module.exports = Object.assign({}, common, {
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, '..', 'dist'),
    },
    devtool: 'source-map',
});