var webpack = require('webpack');

const ENV = process.env.ENV || 'prod';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/js/main',
  output: {
    path: __dirname + '/dist',
    filename: 'build.js',
    library: 'app'
  },
  watch: ENV == 'dev',
  devtool: (ENV == 'dev') ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
       test: /\.html$/,
       loader: 'html-loader'
      },
      {
       test: /\.(jpe?g|png|gif|svg)$/i,
       use: [
         'file-loader?name=[name].[ext]&outputPath=img/',
       ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

if (ENV == 'prod') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      warning: false
    })
  )
}
