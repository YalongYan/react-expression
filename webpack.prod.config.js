const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  let result =  {
    mode: 'production',
    entry: './src/components/index.tsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './dist'),
      libraryTarget: 'commonjs2',
    },
    resolve: {
      extensions: [
        '.js', '.jsx', '.ts', '.tsx'
      ]
    },
    externals: [nodeExternals()],
    // externals: {
    //   react: 'react',
    //   antd: 'antd'
    // },
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
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
      ]
    },
    plugins: [
      // new BundleAnalyzerPlugin()
    ],
  }
  if (argv.analyze === 'true') {
    result.plugins.push(new BundleAnalyzerPlugin())
  }
  return result
}
