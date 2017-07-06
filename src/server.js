
const React = require('react');
const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express();
   
    const publicPath = express.static(path.join(__dirname, '../build'));

   
    app.use('/build', publicPath);

    if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}
   

    return app;
  }
}
