'use strict';

// CONSTANTS
const ENV         = process.env.NODE_ENV,
  isProd      = ENV == 'production',
  path        = require('path'),
  webpack     = require('webpack');

// PLUGINS
const CopyWebpackPlugin     = require('copy-webpack-plugin'),
  HtmlWebpackPlugin         = require('html-webpack-plugin'),
  HtmlWebpackPugPlugin      = require('html-webpack-pug-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  ImageminPlugin            = require('imagemin-webpack-plugin').default,
  ProgressBarPlugin         = require('progress-bar-webpack-plugin');

var config = {

  context: path.join(__dirname, '..'),

  progress: true,
  // OTHER SETTINGS
  engines: {
    css: 'sass',
    html: 'pug'
  },

  prettify: true,

  devServer: {
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true
  },

  // LOADERS
  module: {
    loaders: [
      { // ASSETS
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
      },
      { // HTML
        test: /\.html$/,
        loader: 'html-loader'
      },
      { // JS
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../_dist')
        ],
        loader: 'babel'
      },
      { // JSON
        test: /\.json$/,
        loader: 'json-loader'
      },
      { // PUG
        test: /\.pug$/,
        loader: 'pug-html-loader'
      },
      { // SASS
        test: /\.scss$/,
        loaders: [ ExtractTextPlugin.extract('style!sass'),'raw', 'sass-loader?sourceMap']
      },
      { // TYPESCRIPT
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          '@angularclass/hmr-loader',
          'angular2-router-loader'
        ]
      }
    ]
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, '../client/stylesheets')]
  },

  // OUTPUT FILE
  output: {
    path: path.resolve(__dirname, '../_dist'),
    filename: 'bundle.js'
  },

  // PLUGINS
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    // NG2 HACK: angular/angular#11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': ENV
      }
    }),

    new webpack.ProvidePlugin({
      Hammer: 'hammerjs/hammer'
    }),

    // BETTER PROGRESS INDICATORS IN TERMINAL DURING BUILDS
    new ProgressBarPlugin(),

    // ADD VENDOR MODULES TO SEPARATE FILE
    new webpack.optimize.CommonsChunkPlugin('vendor', 'common.js', Infinity)

  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html', '.pug', 'map'],
    exclude: ['node_modules']
  }

};


// ENV SPECIFIC SETTINGS
if (isProd) {

  console.log('SERVING PRODUCTION BUILD');

  config.devtool = 'cheap-module-source-map';

  config.entry = {
    vendor: [
      './client/polyfills.ts',
      './client/vendor.ts'
    ],
    app: [
      './client/app/app.module.ts',
      './client/main.ts'
    ]
  };

  config.plugins.push(
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // // Dedupe modules in the output
    // new webpack.optimize.DedupePlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: true,
      mangle: false, // MANGLE BREAKS JQUERY
      sourceMap: true
    }),

    // A plugin for a more aggressive chunk merging strategy
    // https://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
    // new webpack.optimize.AggressiveMergingPlugin(),

    // https://github.com/Klathmon/imagemin-webpack-plugin
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100'
      }
    }),

    // Copy assets from the public folder
    // Reference: https://github.com/kevlened/copy-webpack-plugin
    new CopyWebpackPlugin([{
      from: './public'
    }])
  );

} else {

  console.log('SERVING DEVELOPMENT BUILD ');

  config.devtool = 'inline-source-map';

  config.entry = {
    vendor: [
      './client/polyfills.ts',
      './client/vendor.ts'
    ],
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&noInfo=true&reload=true',
      './client/main.ts'
    ]
  };

  config.plugins.push(

    new ExtractTextPlugin('css/styles.css', {
      allChunks: true
    }),

    new CopyWebpackPlugin([{
      from: './public'
    }]),

    new HtmlWebpackPlugin({
      filetype: 'pug',
      template: 'index.pug'
    })
  );

}

module.exports = config;
