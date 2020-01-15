const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { cwd, prod, dev, omit } = require('./config');
const babelNodeModules = require('./.babel.node_modules.js');

const distPath = join(__dirname, '/dist');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: prod.if('[name].[contentHash].bundle.js', '[name].bundle.js'),
        path: distPath,
        publicPath: '/',
    },
    devServer: {
        port: 3002,
        hot: true,
        contentBase: distPath,
    },
    bail: prod.is,
    cache: dev.is,
    mode: dev.if('development', 'production'),

    // Ability to set custom devtool (e.g. eval-source-map) for better DX on debugging.
    devtool: process.env.DEVTOOL || prod.if(false, 'cheap-module-eval-source-map'),

    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },

    module: {
        rules: omit([
            {
                test: /\.tsx?$/,
                include: cwd('src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: dev.is,
                    babelrc: true,
                    sourceType: 'module',
                },
            },
            // transpile node_modules for production
            prod.if({
                test: /\.m?js$/,
                include: cwd('node_modules'),
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    sourceType: 'module', // use 'unambiguous' if it fails
                    ...babelNodeModules,
                },
            }),
        ]),
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single',
    },

    plugins: [
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
            formatter: 'codeframe',
        }),
        new HtmlWebpackPlugin({
            title: 'broker app',
            template: './public/index.html',
        }),
    ],

    performance: {
        hints: prod.if('warning', false),
    },
};
