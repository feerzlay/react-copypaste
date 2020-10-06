require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../source/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '~modules': path.resolve(__dirname, '../source/modules')
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../source/index.ejs'),
      chunksSortMode: 'none'
    })
  ]
};
