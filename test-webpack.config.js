const webpack = require('webpack');
const { resolve } = require("path");

const projectRoot = __dirname;
const appPath = "src";
const appFullPath = resolve(projectRoot, appPath);

module.exports = {
  devtool: '#inline-source-map',

  entry: [
    './src/app/**/*.ts',
    './src/tests/**/*.spec.ts',
  ],

  output: {
    filename: 'dist/bundle.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    // Resolve {N} system modules from tns-core-modules
    // modules: [
    //   resolve(__dirname, "node_modules/tns-core-modules"),
    //   resolve(__dirname, "node_modules"),
    //   "node_modules/tns-core-modules",
    //   "node_modules",
    // ],
    alias: {
      '~': appFullPath
    },
    // symlinks: true
  },

  module: {
    rules: [
      {
        test: /\.ts$/, use: [{
          loader: 'ts-loader'
        }]
      }]
  }
};