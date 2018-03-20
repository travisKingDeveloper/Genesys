const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, '..', 'src', 'index.js'),
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].module.js',
        sourceMapFilename: '[file].map',
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        alias: {
            shared: path.join(__dirname, '..', 'src', 'shared'),
        },
    },
    plugins: [
        new HTMLWebpackPlugin({ title: 'Genesys' }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }
        ]
    }
};