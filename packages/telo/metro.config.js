const { createMetroConfiguration } = require("expo-yarn-workspaces");
const path = require("path");

const y = createMetroConfiguration(__dirname);

const watchFolders = [
  path.resolve(__dirname + "/.."),
  path.resolve(__dirname + "/../../", "node_modules"),
];

module.exports = {
  ...y,
  resolver: {
    ...y.resolver,
    sourceExts: ["jsx", "js", "ts", "tsx"],
  },
  watchFolders,
};
