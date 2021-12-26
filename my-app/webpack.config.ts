const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    compress: true,
    port: 300,
    historyApiFallback: true,
  },
  entry: __dirname + '/src/index.js',
  module: {
    rules: [
      { test: /\.tsx?$/, use: ['ts-loader'] },
      { test: /\.css$/, use: ['style-loader', {loader: 'css-loader', options: {modules: true}}]}
    ]
  }
}


