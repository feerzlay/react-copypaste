const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/main.js',
    chunkFilename: 'js/[name].js',
    publicPath: '/'
  },
  performance: {
    hints: false
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
});
