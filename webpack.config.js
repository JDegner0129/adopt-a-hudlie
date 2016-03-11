module.exports = [{
  context: __dirname,
  entry: {
    home: './src/app/home/home.js',
    profile: './src/app/profile.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]-entry.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      },
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass',
    }],
    // preLoaders: [{
    //   test: /\.(js|jsx|es6)$/,
    //   loader: 'eslint-loader',
    //   exclude: /node_modules/,
    // }],
  },
}];
