const path = require('path');

const common = require('./common');

module.exports = Object.assign({}, common, {
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, '..', 'dist'),
        historyApiFallback: true,
    },
    devtool: 'source-map',
    module: Object.assign({}, common.module, {
        rules: common.module.rules.concat([
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'eslint-loader' },
                ],
            },
        ]),
    }),
});