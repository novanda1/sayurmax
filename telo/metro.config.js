const { createMetroConfiguration } = require("expo-yarn-workspaces");

const y = createMetroConfiguration(__dirname);

module.exports = {
  ...y,
  resolver: {
    ...y.resolver,
    sourceExts: ["jsx", "js", "ts", "tsx"],
  },
};
