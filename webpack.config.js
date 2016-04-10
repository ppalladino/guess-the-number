var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      components: path.join(__dirname, '/src/components'),
      containers: path.join(__dirname, '/src/containers'),
      services: path.join(__dirname, '/src/services'),
    }
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }
    ]
  },
};
