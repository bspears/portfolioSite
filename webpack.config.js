
module.exports = {
    entry: './app.js',

    output: {
        path: 'build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(js$|jsx$)/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};