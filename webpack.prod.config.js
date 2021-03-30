const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/components/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.ts', '.tsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new ForkTSCheckerWebpackPlugin(),
  ],
};