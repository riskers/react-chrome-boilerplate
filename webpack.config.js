const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname);

const mode = process.env.MODE;

const entry = {
  background: [`${ROOT}/src/background.js`],
  content_script: [`${ROOT}/src/content_script.js`],
  inject: [`${ROOT}/src/inject/index.js`],
  'options/index': [`${ROOT}/src/options/index`],
  'popup/index': [`${ROOT}/src/popup/index`],
};

const config = {
  entry,
  mode,
  output: {
    path: `${ROOT}/chrome`,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map.js',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        include: `${ROOT}/src`,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': `${ROOT}/src`,
    },
  },
};

if (mode === 'development') {
  config.devtool = 'cheap-module-source-map';
}

module.exports = config;
