const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const PUBLIC_DIR = 'public';

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `./ ${PUBLIC_DIR}`,
  },
  plugins: [
    new CleanWebpackPlugin([PUBLIC_DIR]),
    new HtmlWebpackPlugin({
      title: 'Dev',
      meta: { viewport: 'width=device-width, initial-scale=1.0' },
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, PUBLIC_DIR),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
