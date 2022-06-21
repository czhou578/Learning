const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  entry: __dirname + '/src/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]

      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.tsx', '.css', '.ts']
  },
  target: 'web',
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'}),
  ]
}

