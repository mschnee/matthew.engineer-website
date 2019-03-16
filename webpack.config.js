const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.ts',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.svg', '.css'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }, {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/normalize.css/normalize.css', to: 'assets/normalize.css'}
        ]),
        new HtmlWebpackPlugin({
            template: './assets/index.html'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                'assets/normalize.css',
                'assets/base.css'
            ],
            append: false
        })
    ]
}
