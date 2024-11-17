const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GcssjsWebpackPlugin = require("../package/index.js");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
    }),
    new GcssjsWebpackPlugin(),
  ],
  devServer: {
    static: "./dist",
  },
};
