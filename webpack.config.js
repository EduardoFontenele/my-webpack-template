const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'public', 'assets', 'js' )
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    },
                },
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
              },
        ],
    },
}