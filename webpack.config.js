const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//var nodeExternals = require('webpack-node-externals');

const VENDOR_LIBS = ['react-dom','react'];
module.exports = {
  entry: {
       bundle: "./src/index.js",
       vendor: VENDOR_LIBS
  },
  output: {
  	path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
    //publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
      	test: /\.jsx?/, 
        loader: 'babel-loader',
        query:{
                    presets: ['es2015', 'react']
              },
        include: path.join(__dirname, '.', 'src'),
        exclude: path.join(__dirname, '.', 'node_modules'),
      },
      {
      test: /\.css$/,
      loaders: ExtractTextPlugin.extract('css-loader'),
   
       },
    {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
       {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            }
          }
        }]
    }
    ]
  },
   devServer: {
    historyApiFallback: true
  },
  plugins: [
        new ExtractTextPlugin({filename: 'styles/style.css', 
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
           names: ['vendor','manifest']
        }),
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
    ]
}
