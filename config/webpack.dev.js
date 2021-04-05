const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        port: 9000,
        contentBase: '../dist',
        open: 'opera',
        hot: true
    },
    target: 'web',
    plugins: [ 
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    devtool: "eval-source-map",
    module: {
        rules: [            
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /.(css|sass|scss)$/
            },
        ]
    },
    externals: {
        config: JSON.stringify({
            apiUrl: 'http://localhost:5000'
        })
    }

}

module.exports = merge(common, devConfig)