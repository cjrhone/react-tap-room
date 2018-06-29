const webpack = require('webpack');
const { resolve } = require('path'); //pretty much a shortcut for  routing through files
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch', //activates hot module replacement
    'webpack-dev-server/client?http://localhost:8080', //connects to the necessary end-point
    'webpack/hot/only-dev-server', //instructs Webpack to bundle code
    resolve(__dirname, "src") + "/index.jsx" //something about locating where to build
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/' //where HMR will be loaded, the default single page app
  },

  resolve: {
    extensions: ['.js', '.jsx'] //open files with specific extensions
  },

  devtool: '#source-map', //points error messages to source code

  devServer: {
    hot: true, //enables HMR to local server
    contentBase: resolve(__dirname, 'build'), //points to source code it will serve in the browser
    publicPath: '/' // ALWAYS match publicPath output
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
          }
        },
        {
          test: /\.(png|gif|jp(e*)g|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]'
            }
          }
        },
      {
        test: /\.jsx?$/, //takes a regular expression indicating which files to trasnform
        loader: "babel-loader", //webpack, use babel as a loader
        exclude: /node_modules/, //outlines which files should be excluded
        options: { //indicates what kind of project we are working
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel",
            "styled-jsx/babel"
          ]
        }
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //enables HMR globally
    new webpack.NamedModulesPlugin(), //prints HMR status updates to the console
    new HtmlWebpackPlugin({
      template: 'template.ejs', //which file to use as a template when creating index.html
      appMountId: 'react-app-root', //provides the name of our HTML's root DOM node ( a root DOM node is the area of a page React manages)
      title: 'React Help Queue', //sets our new <title> tags
      filename: resolve(__dirname, "build", "index.html"), //location we're placing our programmatically-generated index.html
    }),
  ]
};
