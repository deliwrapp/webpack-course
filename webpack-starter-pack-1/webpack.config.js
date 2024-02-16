const webpack = require("webpack");
const path = require("path");

let config = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            { 
                test: /\.scss?$/, 
                exclude: /node_modules/, 
                use: ["style-loader", 'css-loader', 'sass-loader', 'postcss-loader'] 
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        open: true,
        hot: true,
        compress: true,
        port: 9000,
    },
}

module.exports = config;

