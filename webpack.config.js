var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var appName = 'index';
var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true, sourceMap: false }));
  plugins.push(new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }));
  outputFile = appName + '.min.js';
} else {
  outputFile = appName + '.js';
}

var ExtractTextPlugin = require("extract-text-webpack-plugin");
plugins.push(new ExtractTextPlugin("styles.css", {allChunks: false}));

var config = {
    entry: './main.js',

    output: {
        path: './',
        filename: outputFile,
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            { include: /\.json$/, loaders: ["json-loader"] },
            { test: /\.css$/, loader:ExtractTextPlugin.extract("style-loader", "css-loader") },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react','stage-0']
                }
            }
        ]
    },
    plugins: plugins
    ,
    resolve: {
        extensions: ['', '.json', '.jsx', '.js', '.css']
    }
}

module.exports = config;