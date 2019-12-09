const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname,'docs'),
        compress:true,
        publicPath: "docs",
        writeToDisk:true
    },
    entry: './src/js/app.js',
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname, 'docs/js'),
        publicPath: 'docs'
    },
    module:{
        rules:[
            {
                test: /\.(scss)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../fonts/',
                            publicPath: '../fonts/'
                        }
                    }
                ]
            },
            { test: /\.html$/, use: ['html-loader?interpolate'] }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/app.css'
        })
    ]
}