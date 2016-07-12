var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ["./src/app/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  debug: true,
  devtool: "#cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      }
    ]
  },
  eslint: {
    fix: true,
  },
};