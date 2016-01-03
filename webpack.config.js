var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: [
    'bootstrap-loader',
    './index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtoll: 'eval-source-map',
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.html',
      title: 'SSWD Team Site',
      appMountId: 'app'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: [
            'react',
            'es2015'
          ]
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'resolve-url'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'resolve-url',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      }
    ]
  }
};
