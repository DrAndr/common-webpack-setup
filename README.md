
## install requirements

`npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
`

`npx cross-env BABEL_SHOW_CONFIG_FOR=./src/index.js npx babel ./src/index.js
`

`npm install --save-dev style-loader css-loader sass-loader sass file-loader @svgr/webpack
`


## webpack.config.js:

`
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource', // или используем svgr для SVG
    },
  ],
},`

## build bandle

`webpack`


## install and run server

`npm install -g serve`

'serve -s dist'