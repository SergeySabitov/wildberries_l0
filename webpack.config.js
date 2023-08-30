const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer:{
        open: true,
        hot: true,

    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js'
    },
    module: {
        rules: [
        //   {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     use: {
        //       loader: 'babel-loader',
        //     },
        //   },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true,
                },
              },
            ],
          },
          {
            test: /\.(c|sa|sc)ss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ],
          },
        //   {// prod
        //     test: /\.(c|sa|sc)ss$/,
        //     use: [
        //       MiniCssExtractPlugin.loader,
        //       'css-loader',
        // 'sass-loader'
        //     ],
        //   },
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          },
          {
            test: /\.woff2?$/i,
            type:'asset/resource',
            generator: {
                filename:'fonts/[name][ext]'
            }
          },
          {
            test: /\.(jpe?g|png|web|svg)$/i,
            type:'asset/resource'
          }
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src','index.html')
        }),
        new MiniCssExtractPlugin({
          filename: 'index.[contenthash].css'
        })
      ], 
}