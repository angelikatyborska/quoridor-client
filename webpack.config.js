const autoprefixer = require('autoprefixer');
const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader',
];

module.exports = {
  entry: {
    app: ["./src/app/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/static/",
    filename: "bundle.js"
  },
  debug: true,
  devtool: "#cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
  eslint: {
    fix: true,
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
};