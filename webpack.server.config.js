const path = require('path')
const fs = require('fs')
const webpack = require('webpack');
const p = process.env.NODE_ENV === 'production'

/**
 * @see http://jlongster.com/Backend-Apps-with-Webpack--Part-I
 */
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, './index.js'),
  output: {
    path: __dirname,
    filename: 'server.js'
  },
  externals: nodeModules,
  node: {
    console: true,
    __filename: true,
    __dirname: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.join(__dirname, './app'),
          path.join(__dirname, './index.js')
        ],
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      components: path.join(__dirname, './app/components'),
      routes: path.join(__dirname, './app/routes'),
      app: path.join(__dirname, './app'),
      state: path.join(__dirname, './app/state'),
    }
  }
}
