var config = {
    entry: './main.js',

    output: {
        path: './',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            { include: /\.json$/, loaders: ["json-loader"] },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react','stage-0']
                }
            }
        ]
    }
    ,
    resolve: {
        extensions: ['', '.json', '.jsx', '.js']
    }
}

module.exports = config;