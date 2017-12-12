const webpack = require("webpack");
const path = require("path");

module.exports = {
    /* Define our entry point. */
    entry: "./lib/entrypoint.js",

    /* Define our output file name. */
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    /* Set up the development server. */
    devServer: {
        contentBase: path.resolve(__dirname, "assets"),
        publicPath: "/",
        port: 3000,
        watchContentBase: true,
    },
    /* Set up the modules */
    module: {
        loaders: [{
            test: path.join(__dirname, "dist"),
            loader: "babel-loader",
        }],
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],

    /* Add source map so that we can use debug tools in Chrome. */
    devtool: "sourcemap",
};
