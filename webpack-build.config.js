const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        filename: "bundle.js",
        path: path.resolve("public/build/"),
        publicPath: "/",
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
        ],
    },
}
