const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const webpack = require("webpack");

module.exports = {  
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      root: path.resolve("./src"),
    },
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,      
      "vm": false,
      "os": false,
      "worker_threads": false,
      "child_process": false,
      "constants": false
    } 
  },
  module: {
    rules: [      
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.mp3$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          }
        ]        
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/favicon.png",
      cache: true,
      mode: "webapp",
      devMode: "webapp",
    }),
    new webpack.ContextReplacementPlugin(
      /\.\/locale$/,
      "empty-module",
      false,
      /js$/
    ),
    new CaseSensitivePathsPlugin(),   
    new webpack.DefinePlugin({ 
      'process.env.NODE_ENV':  JSON.stringify('development'),
      'process.env.sidebarWidth':  JSON.stringify('development'),
      // 'process.env.settingPanel':  JSON.stringify('http://ifms.iranianpc.com/'),
      // 'process.env.REACT_APP_API_KEY': JSON.stringify('http://ifms.iranianpc.com/'),
      // 'process.env.help':  JSON.stringify('http://ifms.reorazavi.org'),      
      'process.env.settingPanel':  JSON.stringify('http://app.pro.jalizan.com:9090/'),
      'process.env.REACT_APP_API_KEY': JSON.stringify('http://app.pro.jalizan.com:9090/'),
      'process.env.help':  JSON.stringify('http://ifms.reorazavi.org'),      
      'process.env.weatherURL':  JSON.stringify('http://openweathermap.org/img/wn/'),      
   }), 
  ],
};
