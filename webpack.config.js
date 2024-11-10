const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: './index.js', // ваш основной файл
    output: {
        filename: 'bundle.js', // имя выходного файла
        path: path.resolve(__dirname, 'dist'), // путь к выходному файлу
        libraryTarget: 'commonjs2', // формат выходного файла
    },
    target: 'node', // указываем, что это для Node.js
    externals: [nodeExternals()], // исключаем зависимости из сборки
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // если вы используете Babel
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser', // добавляем поддержку process
            Buffer: ['buffer', 'Buffer'], // добавляем поддержку Buffer
        }),
    ],
}; 