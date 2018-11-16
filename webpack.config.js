const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require('webpack')
const glob = require('glob')
const PurifyCSSPlugin = require('purifycss-webpack')

//TODO: asset Duplication
//TODO: Image Duplication
//TODO: React
//TODO: Tree Shaking
//TODO: GIT REPO
module.exports = env => {
    let devMode = env.development

    return {
        entry: {
            index: "./src/index.js",
            contact: "./src/contact.js" 
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: './[name].bundle.[hash].js'
        },

        module: {
            rules: [
                {
                  test: /\.(sa|sc|c)ss$/,
                  use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                  ],
                },
                { 
                    test: /\.js$/, 
                    exclude: /node_modules/, 
                    loader: "babel-loader" 
                },
                {
                    test: /\.(png|jp(e*)g|gif|svg)$/,
                    use: ['file-loader?name=img/[name][hash:6].[ext]','image-webpack-loader'] 
                },
                {
                    test: /\.(ico)$/,
                    use: 'file-loader?name=[name].[ext]' 
                },
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000,
            hot: true,
            stats: "errors-only",
            open: true,
        },
        plugins: [  
            //Pages
            new HtmlWebpackPlugin({
                title: 'LDKcreatives - Home',
                hash: true,
                minify: {collapseWhitespace: true},
                template: './src/index.html',
                filename: './index.html',
                chunks: ['index'],
            }),
            new HtmlWebpackPlugin({
                title: 'LDKcreatives - Contact',
                hash: true,
                minify: {collapseWhitespace: true},
                template: './src/contact.html',
                filename: './contact.html',
                chunks: ['contact'],
            }),



            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new PurifyCSSPlugin({
                paths: glob.sync(path.join(__dirname, 'src/*.html'))
            })
        ],
    }
}
