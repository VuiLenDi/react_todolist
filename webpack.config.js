
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const babel_loader = require('babel-loader');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'test-webpack.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};

module.exports = config;