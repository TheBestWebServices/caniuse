const path                      = require('path');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');
const CopyPlugin                = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    'js/background': './src/js/background.js',
    'js/content'   : './src/js/content.js',
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  devtool: isDevelopment ? 'cheap-module-source-map' : false,
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: '**/*.{json,png}', to: '[path][name].[ext]', context: 'src/' },
      ],
    }),
  ],
  optimization: {
    minimize: !isDevelopment,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
};
