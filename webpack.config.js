const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (_, { mode }) => {
  const isDevelopment = mode === 'development';

  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx|s([ac])ss)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.scss'],
      alias: {
        Pages: path.resolve(__dirname, 'src/pages/'),
        Entities: path.resolve(__dirname, 'src/entities/'),
        Features: path.resolve(__dirname, 'src/features/'),
        Shared: path.resolve(__dirname, 'src/shared/')
      }
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
      clean: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: false
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
        publicPath: '/index.html'
      },
      client: {
        overlay: {
          errors: true
        },
        progress: true
      },
      hot: true,
      historyApiFallback: true
    }
  };
};

module.exports = config;
