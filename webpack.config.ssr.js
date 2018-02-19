const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.js',
  output: {
    filename: './ssr.js',
  },
  target: 'node',
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-2'],
        },
      },
    ],
  },
  externals: nodeExternals(),
};
