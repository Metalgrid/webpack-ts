const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "build", "app"),
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            include: [
                path.resolve(__dirname, "src")
            ],
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
    }
}