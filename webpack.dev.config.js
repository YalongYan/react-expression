const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
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
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new ForkTSCheckerWebpackPlugin()
  ],
};
