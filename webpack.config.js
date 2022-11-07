const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-alt');

const { NODE_ENV = 'production' } = process.env;
console.log(NODE_ENV)
module.exports = {
  entry: './src/index.ts',
  externals: [ nodeExternals() ],
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['pnpm run:dev']
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  watch: NODE_ENV === 'development'
}