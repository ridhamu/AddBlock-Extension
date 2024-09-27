const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        /*
        “Hai kompiler webpack, ketika Anda menemukan jalur yang berujung pada file '.css' di dalam pernyataan require() / import, gunakan 'css-loader' atau 'style-loader' untuk mengubahnya sebelum Anda menambahkannya ke dalam bundel.”
         */
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('./src/static/manifest.json'),
          to: path.resolve('./dist'),
        },
        {
          from: path.resolve('./src/static/rules1.json'),
          to: path.resolve('./dist'),
        },
        {
          from: path.resolve('./src/static/icons'),
          to: path.resolve('./dist/icons'),
        },
      ],
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};


