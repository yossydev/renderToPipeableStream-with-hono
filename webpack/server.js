const path = require("path");
const externals = require("webpack-node-externals");

module.exports = {
  target: "node",
  mode: "development",
  entry: path.resolve(__dirname, "../server/index.js"),
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "../dist"),
  },
  externals: [externals()], // will not bundle node modules
  module: {
    rules: [
      {
        test: /\.(?:js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: "cjs" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
};
