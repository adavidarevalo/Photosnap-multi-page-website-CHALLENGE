const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  resolve: {
    extensions:[".js"]
  },
  module:{
    rules: [
      {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      use:[MiniCssExtractPlugin.loader, "css-loader"]
    },
    {
      test: /\.(woff|| woff2)$/,
      use:{
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff",
          name: "[name].[ext]",
          outputPath: "./assets/fonts/",
          publicPath: "./assets/fonts/",
          esModule: false
        }
      }
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin( ),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from:path.resolve(__dirname, "src", "assets"),
          to: "assets"
        }
      ]
    })
   ]
}