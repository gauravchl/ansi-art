var path = require('path');
var webpack = require('webpack');


var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');
var WEB_DIR = path.resolve(__dirname, 'webapp');



var config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR,
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.js|\.es6$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015']}
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

};


var webappConfig = {
  entry: WEB_DIR + '/src/index.js',
  output: {
    path: WEB_DIR,
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js|\.es6$/,
        include: WEB_DIR + '/src',
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015']}
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],

}



module.exports = [config, webappConfig];
