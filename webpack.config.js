const path = require('path');
const webpack = require('webpack');

const WEB_DIR = path.resolve(__dirname, 'webapp');

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


module.exports = [webappConfig];
