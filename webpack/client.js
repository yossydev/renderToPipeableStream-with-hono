const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../client/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(?:js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
      },
    ],
  },
};
