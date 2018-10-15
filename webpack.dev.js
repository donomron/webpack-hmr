const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const PORT_DEV_SERVER = 3000;

// css rule
const css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const config = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [css]
  },
  devServer: {
  	contentBase: '/',
  	port: PORT_DEV_SERVER,
  	open: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(common, config);
