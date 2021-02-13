var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

// module.exports = {
//   entry: APP_DIR + "/App.js",
//   output: {
//     path: BUILD_DIR,
//     filename: "bundle.js"
//   },
//   devServer: {
//     inline: true,
//     contentBase: './public',
//     port: 3333
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// }
var config = {
  entry: APP_DIR + '/App.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
    }]
  }
};

module.exports = config;
