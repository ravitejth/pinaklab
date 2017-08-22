'use strict';

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');
var webpack     = require('webpack');

module.exports = webpackMerge(commonConfig, {

  devtool: 'inline-source-map',

  // OUTPUT FILE
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  devServer: {
    noInfo: true,
    inline: true,
    historyApiFallback: true
  }

});
