"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description webpack 4.x all in one
 * @augments
 * @example
 *
 */

const path = require("path");
const Webpack = require("webpack"); //to access built-in plugins
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");// template
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");// extract css files
const CopyWebpackPlugin = require("copy-webpack-plugin");// copy folder

// vendor & package.dependencies
const npm_packages = require("./package.json");



module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};

