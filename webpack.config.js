var path = require(`path`)

module.exports = {
  mode: `development`,
  entry: `./scripts/inject.js`,
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use:  {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`],
          },
        }, 
      },  
    ],
  }, 
}