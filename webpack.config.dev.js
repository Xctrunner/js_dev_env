import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web', // could be node instead, or electron
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [], // hot reloading, linting, catching errors
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}, // hopefully change babel out
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}