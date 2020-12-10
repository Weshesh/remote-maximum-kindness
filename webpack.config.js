const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    port: 3000,
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};
