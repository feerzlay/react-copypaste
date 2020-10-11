require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: path.resolve(__dirname, '../source/index.server.tsx'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../public/server'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.server.json'
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          emitFile: false,
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
  externals: [nodeExternals()],
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      API_URL: '',
      SENTRY_DSN: ''
    })
  ]
};
