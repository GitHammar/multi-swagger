const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const outputPath = path.resolve(__dirname, 'dist');
module.exports = {
    mode: 'development',
    entry: {
        // tell webpack where our code is
        app: './src/index.js',
    },
    module: {
        rules: [{
            test: /\.yaml$/,
            use: [
                { loader: 'json-loader' },
                { loader: 'yaml-loader' }
            ]
        },
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
            ]
        }]
    },
    plugins: [
        // tell webpack to use our template we created
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "swagger", to: "swagger" },
            ],
        }),
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    // tell webpack where to output the build code to - './dist'
    output: {
        filename: '[name].bundle.js',
        path: outputPath,
    }
};
