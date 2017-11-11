const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './lib/entrypoint.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'assets'),
    publicPath: '/',
    port: 3000,
    watchContentBase: true
  },
  devtool: 'sourcemap',
}
