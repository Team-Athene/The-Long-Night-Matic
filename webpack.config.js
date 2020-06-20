const path = require('path')

module.exports = {
  entry: './script/index.js',
  node: {
    fs: 'empty'
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  externals: [
    (function () {
      var IGNORES = [
        'electron'
        // 'fs'
      ]
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')")
        }
        return callback()
      }
    })()
  ]
}