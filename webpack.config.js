var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/app',
  entry: './main',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SSWD Team Site'
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
      }
    ]
  }
};
