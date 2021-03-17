module.exports = {
  entry: "./src/main/main.ts",
  module: {
    rules: require("./webpack.rules"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
