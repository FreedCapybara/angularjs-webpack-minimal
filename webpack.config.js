const path = require('path');

// https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5
// https://github.com/preboot/angularjs-webpack/blob/master/webpack.config.js
module.exports = (env, argv) => {
  const config = {
    entry: './index.js',

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },

    target: ['web', 'es5'],

    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      }, {
          test: /\.html$/,
          loader: 'raw-loader'
      }]
    },

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  };

  return config;
};
