var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: "./source_files/index.js",
  output: {
    path: path.resolve(
      __dirname,
      "./deploy_files/Element/Portal_Conteudo/_staticfiles/elements/js/"
    ),
    filename: "elements.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
