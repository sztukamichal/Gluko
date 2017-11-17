let path = require('path');

module.exports = {
    entry: './src/main/app/src/index.jsx',
    output: {
        path: path.resolve('./target/classes/static/built'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
            }
        ]
    }
};