var webpack = require('webpack');
// 创建模板
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
	devtool:"source-map",
  // 入口 引入根目录下的index.js
  entry: './index.js',
  // 出口 导出到public下的bundle.js
  output: {
    path: path.resolve(__dirname, 'public'),
    // main-xxxxxxx.js
    filename: '[name]-[hash].js'
  },
  // 加载器 把非JS类型文件转为JS能处理的文件
  module: {
    rules: [
      // 处理图片的loader
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'url-loader'
      },
      // 处理txt类型的loader
      {
        test: /\.txt$/,
        use: 'text-loader'
      },
      // 处理json类型的loader
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      // 处理html类型的loader
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      // 处理css类型的loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.js[x]?$/,
        // 除了了node_modules|bower_components文件夹之外的都转换
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  // 插件
  plugins: [// 压缩JS文件
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './template/index.html'})],
  // 配置服务器
  devServer: {
    contentBase: "./public",
    inline: true, //自动刷新
    port: 5555
  }
};
