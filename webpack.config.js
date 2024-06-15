module.exports = {
  mode: "development",
  entry: `${__dirname}/client/index.js`,
  output: {
    filename: "index.js",
    path: `${__dirname}/dist`,
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(?:js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
