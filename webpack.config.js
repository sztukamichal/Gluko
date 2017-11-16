var path = require('path');

module.exports = {
    entry: './src/main/app/src/index.js',
    output: {
        //path: path.resolve('./src/main/resources/static/built'),
        path: path.resolve('./target/classes/static/built'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};