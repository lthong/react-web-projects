const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: resolve(__dirname, 'build'),
  },
  devtool: 'eval-source-map',
  devServer: {
    publicPath: '/',
    contentBase: resolve(__dirname, 'public'),
    overlay: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage' }],
              '@babel/preset-react',
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        exclude: /\.(m?js|css|scss|sass|jpe?g|png|gif|json|html)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
};
