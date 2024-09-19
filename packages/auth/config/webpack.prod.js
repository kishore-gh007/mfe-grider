const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/auth/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "authApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Auth": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
