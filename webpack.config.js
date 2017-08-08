const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const WEB_DIR = path.resolve(__dirname, 'webapp');


const config = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
};


const webappConfig = {
  entry: `${WEB_DIR}/src/index.js`,
  output: {
    path: WEB_DIR,
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: `${WEB_DIR}/src`,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env'],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};


module.exports = [config, webappConfig];
