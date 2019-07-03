const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'myLib',
        libraryTarget: 'umd',
        filename: 'myLib.js',
        umdNamedDefine: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 3000
    },
    resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}