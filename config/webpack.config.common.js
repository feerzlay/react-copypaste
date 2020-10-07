require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../source/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name() {
            if (process.env.NODE_ENV === 'production') {
              return '[contenthash].[ext]';
            }
            return '[path][name].[ext]';
          }
        }
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
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_URL', 'SENTRY_DSN']),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../source/index.ejs'),
      chunksSortMode: 'none'
    })
  ]
};
