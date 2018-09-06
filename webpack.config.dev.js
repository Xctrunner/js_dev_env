var path = require('path');

// module.exports = {
//     devtool: 'inline-source-map',
//     entry: [
//         path.resolve(__dirname, 'src/index.ts') // TODO this probably needs to be changed to work with dist
//     ],
//     resolve: {
//         // Add '.ts' and '.tsx' as resolvable extensions.
//         extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
//     },
//     target: 'node', // could be node instead, or electron
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     plugins: [], // hot reloading, linting, catching errors
//     module: {
//         rules: [

//         ]
//         loaders: [
//             { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
//             {test: /\.css$/, loaders: ['style', 'css']}
//         ],
//         preLoaders: [
//             // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//             { test: /\.js$/, loader: "source-map-loader" }
//         ]
//     }
// }

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.ts') // TODO this probably needs to be changed to work with dist
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};