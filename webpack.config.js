var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: `${__dirname}/dist`,
    filename: 'app.bundle.js',
  },

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },

  resolve: {
    extensions: ['.ts', '.css', '.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};