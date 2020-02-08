const path = require('path');

module.exports = {
  mode: 'production',
  // enanble source map for debugging webpack's output
  devtool: 'source-map',
  entry: './src/components/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // find file name end by .tsx
        use: 'ts-loader', // use ts-loader for loading
        exclude: /node_modules/ // no find file in node_modules
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint')
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.jsx']
  },
  output: {
    filename: 'bundle.js', // file name export when build
    path: path.resolve(__dirname, 'dist') // path when build
  }
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
