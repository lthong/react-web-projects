const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: 'bundle.js',
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // https://webpack.docschina.org/loaders/babel-loader/
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // https://babeljs.io/docs/en/babel-preset-env
            // https://babeljs.io/docs/en/babel-preset-react
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // set the value of cacheDirectory to true, the loader will use the default cache directory in node_modules/.cache/babel-loader.
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    // https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
  ],
};
