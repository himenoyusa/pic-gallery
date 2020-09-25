const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.jsx',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 3000,
    // overlay: true, // 浏览器直接显示命令行的错误
    hot: true,
    historyApiFallback: true,
    // hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            limit: 10240,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [
    new MiniExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
