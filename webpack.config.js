module.exports = {
  entry: './app/client.js',
  output: {
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
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
};
