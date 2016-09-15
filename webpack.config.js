var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
      test: /\.jsx?$/,
      exclude: /node_modules/
    },
    { 
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000' 
      
    }]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      Header: 'src/components/Header',
      SearchBar: 'src/components/SearchBar',
      VideoList: 'src/components/VideoList',
      VideoListItem: 'src/components/VideoListItem',
      VideoDetail: 'src/components/VideoDetail',
      applicationStyles: 'src/style/style.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
