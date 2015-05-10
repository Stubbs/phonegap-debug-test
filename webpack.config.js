module.exports = {
    entry: './src/',
    output: {
        path: __dirname + '/www/js/',
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
}