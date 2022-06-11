const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 下から上に適応される
          { 
              loader: MiniCssExtractPlugin.loader 
          },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
          },
          // [sass-loader](/loaders/sass-loader)
          { 
            loader: 'sass-loader' 
          }
        ]
      }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
  ]
};