var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var ROOT = path.resolve(__dirname)

var entry = {
  background: [
    ROOT + '/src/background.js'
  ],
  content_script: [
    ROOT + '/src/content_script.js'
  ],
  inject: [
    ROOT + '/src/inject/index.js'
  ],
  'options/index': [
    ROOT + '/src/options/index'
  ],
  'popup/index': [
    ROOT + '/src/popup/index'
  ]
}

module.exports = {
  entry: entry,
  devtool: 'eval-source-map',
  output: {
    path: ROOT + '/chrome',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: ROOT + '/src',
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': ROOT + '/src'
    }
  }
}
