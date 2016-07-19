var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      SearchBar: 'src/components/SearchBar',
      VideoList: 'src/components/VideoList',
      VideoListItem: 'src/components/VideoListItem',
      VideoDetail: 'src/components/VideoDetail'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
