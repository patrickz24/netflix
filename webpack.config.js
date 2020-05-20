const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./index.js", "./sass/style.scss"],
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
    //new ExtractTextPlugin("./css/[name].css"),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }, { loader: "sass-loader" }],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
};