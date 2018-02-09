'use strict';

require('dotenv').config();

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webPackConfig = module.exports = {};

const PRODUCTION = process.env.NODE_ENV === 'production';

webPackConfig.entry = `${__dirname}/src/main.js`;
webPackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

webPackConfig.plugins = [
  new HTMLPlugin({template: `${__dirname}/src/public/index.html`}),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
  new ExtractTextPlugin({
    filename: 'bundle.[hash].css',
    disable: process.env.NODE_ENV !== 'production',
  }),
];

if (PRODUCTION) {
  webPackConfig.plugins = webPackConfig.plugins.concat([
    new UglifyPlugin(),
    new CleanPlugin(),
  ]);
}

webPackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.(jpg|gif|png|svg)$/,
      exclude: /\.icon\.svg$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'image/[name].[hash].[ext]',
        },
      }],
    },
    {
      test: /\.(woff|woff2|ttf|eot).*/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'font/[name].[hash].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(mp3|wav)$/,
      exclude: /\.icon\.svg$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'sound/[name].[hash].[ext]',
        },
      }],
    },
    {
      test:  /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [`${__dirname}/src/style`],
            },
          },
        ],
      }),
    },
  ],
};

webPackConfig.devtool = PRODUCTION ? undefined : 'eval-source-map';

webPackConfig.devServer = {
  historyApiFallback: true,
};
