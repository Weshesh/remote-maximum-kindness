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
    assetModuleFilename: 'assets/[hash][ext][query]',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
