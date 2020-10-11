require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? '' : 'eval-cheap-module-source-map',
  entry: path.resolve(__dirname, '../source/index.tsx'),
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ]
  },
  output: isProduction
    ? {
        path: path.resolve(__dirname, '../public/client'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        publicPath: '/'
      }
    : {
        filename: 'js/main.js',
        chunkFilename: 'js/[name].js',
        publicPath: '/'
      },
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
            if (isProduction) {
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
  performance: {
    hints: isProduction ? 'warning' : false
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      API_URL: '',
      SENTRY_DSN: '',
      SSR: ''
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../source/index.ejs'),
      chunksSortMode: 'none'
    }),
    ...(isProduction
      ? [new CleanWebpackPlugin(), ...(process.env.BUILD_ANALYZE ? [new BundleAnalyzerPlugin()] : [])]
      : [])
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
};
