const path = require('path');

module.exports = {
    "mode": "development", // "production" | "development" | "none",

    "entry": "./client/index.js",

    "output": {
        "path"      : path.resolve(__dirname, "./dist/js"),
        "filename"  : "bundle.js",
        "publicPath": "./"
    },

    "module": {
        "rules": [
            {
                loader: 'babel-loader',
                test: /\.js$/i,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },

    "plugins": [
        
    ]
}