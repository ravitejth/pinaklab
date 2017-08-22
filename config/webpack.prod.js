const webpackMerge = require('webpack-merge'),
  commonConfig = require('./webpack.common.js'),
  webpack = require('webpack'),
  path = require('path');

module.exports = webpackMerge(commonConfig, {

  devtool: 'cheap-module-source-map',

  entry: {
    vendor: [
      './client/polyfills.ts',
      './client/vendor.ts'
    ],
    app: [
      './client/main.ts'
    ]
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: true,
      mangle: false, // MANGLE BREAKS JQUERY
      sourceMap: true
    })
  ]

});
