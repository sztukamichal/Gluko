var path = require('path');

module.exports = {
    entry: './src/main/app/src/index.jsx',
    output: {
        path: path.resolve('./target/classes/static/built'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: 'css-loader', exclude: /node_modules/, query: {modules: true}},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.svg/, loader: 'svg-react-loader', exclude: /node_modules/}
        ]
    }
};