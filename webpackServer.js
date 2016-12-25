var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require('./webpack.config')

var compiler = webpack(
  config
);
var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  contentBase: "./public/",
  // or: contentBase: "http://localhost/",

  hot: true,
  // 启用热替换
  // 添加 "webpack/hot/dev-server" 在entry

  // webpack-dev-middleware options
  quiet: false,
  noInfo: true,
  publicPath: config.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true }
});
server.listen(8080, "localhost", function() {
  console.log('listening 8080 port .....')
});