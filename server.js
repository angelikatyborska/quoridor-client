/* eslint-disable no-var, strict */
'use strict';

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const port = 8080;

config.entry.app.unshift(`webpack-dev-server/client?http://localhost:${port}/`, "webpack/hot/dev-server");

var server = new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});

