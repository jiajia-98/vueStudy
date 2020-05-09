const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // less-loader版本过高也会造成报错不能打包
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //当前加载的图片大小 小于limit的时候回使用base64格式 
                        //当图片大于limit的时候 需要安装 file-loader 模块进行加载
                        limit: 22000,
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        //alias:别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        //配置省略文件后缀名
        extensions: ['.js', '.css', '.vue']
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归djj所有'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new uglifyjsWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        inline: true
    }

}