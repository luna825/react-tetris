var path = require('path')
var webpack = require('webpack')

var config={
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
    path.resolve(__dirname, 'src/index.js')
  ],
  output:{
    path:path.resolve(__dirname,'public','assets'),
    filename:'bundle.js',
    publicPath:'/assets/'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['es2015','react','stage-0']
        }
      },
      {test: /\.(jpe?g|png|gif|svg)$/, loader: 'url?limit=1024&name=img/[name].[ext]'},
      {test: /\.scss$/, loader:'style!css?modules&localIdentName=[local]-[hash:base64:5]!sass'},
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config