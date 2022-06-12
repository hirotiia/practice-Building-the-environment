const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          // 下から上に適応される
          { 
            loader: MiniCssExtractPlugin.loader 
          },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/style.css'
      }),
      new HtmlWebpackPlugin({
          template: './src/templates/index.html'
      }),
      new CleanWebpackPlugin()
  ]
};