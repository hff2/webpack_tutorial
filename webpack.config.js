const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    // 檔案入口
    entry: './src/index.js',
    output: {
        // 產生的檔案路徑
        path: path.resolve(__dirname, 'dist'),
        // 產生的檔案名
        filename: 'main.[hash].bundle.js',
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
    // 放 css loader的部分
    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
        
    },
    devtool: 'source-map',
    // webpack 直接幫我複製我做好的template
    plugins: [
        new HtmlWebpackPlugin({
            template: './base.html'
        }),
        // 靠這一個插件可以將css自動引入
        new MiniCssExtractPlugin({
            filename:'main.[hash].css'
        })
    ],
};