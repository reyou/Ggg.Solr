const path = require("path");
const config = {
  mode: "development",
  entry: "./server/client.jsx",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "server"),
    filename: "client.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
module.exports = config;
