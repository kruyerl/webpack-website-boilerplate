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
                { // Styles
                  test: /\.(sa|sc|c)ss$/,
                  use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                  ],
                }, { // JS
                    test: /\.js$/, 
                    exclude: /node_modules/, 
                    loader: "babel-loader" 
                }, { // Images
                    test: /\.(png|jp(e*)g|gif|svg)$/,
                    use: ['file-loader?name=img/[name].[ext]?[hash:5]','image-webpack-loader'] 
                }, { // Fonts
                    test: /\.(woff|woff2|ttf|eot)$/,
                    loader: 'file-loader?name=fonts/[name].[ext]'
                }, { // Favicon
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
            open: false,
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
