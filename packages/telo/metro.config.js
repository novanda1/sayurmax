const { createMetroConfiguration } = require("expo-yarn-workspaces");
const path = require("path");

const y = createMetroConfiguration(__dirname);

const watchFolders = [
    path.resolve(__dirname + "/.."),
    path.resolve(__dirname + "/../../", "node_modules"),
    path.resolve(__dirname + "/../", "shared/lib/"),
];

module.exports = {
    ...y,
    resolver: {
        ...y.resolver,
        sourceExts: ["jsx", "js", "ts", "tsx"],
    },
    watchFolders,
};
