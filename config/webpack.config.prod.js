const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/'
  },
  plugins: [new CleanWebpackPlugin()]
});
