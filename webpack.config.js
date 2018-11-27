const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {
  const devMode = env.development;
  const prodMode = env.production;

  if (env.production == true) {
    ('production');
  } else {
    ('development');
  }

  return {
    entry: {
      index: './src/index.js',
      contact: './src/contact.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './[name].bundle.[hash:5].js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      hot: true,
      stats: 'errors-only',
      open: false,
      historyApiFallback: true,
      stats: 'minimal',
    },
    module: {
      rules: [
        {
          // Styles
          test: /\.(sa|sc|c)ss$/,
          use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          // JS
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          // Images
          test: /\.(png|jp(e*)g|gif|svg)$/,
          use: ['file-loader?name=img/[name].[ext]?[hash:5]', 'image-webpack-loader'],
        },
        {
          // Fonts
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'file-loader?name=fonts/[name].[ext]',
        },
        {
          // Favicon
          test: /\.(ico)$/,
          use: 'file-loader?name=[name].[ext]',
        },
      ],
    },
    plugins: [
      // Pages
      new HtmlWebpackPlugin({
        title: 'LDKcreatives - Home',
        description: '',
        keywords: '',
        hash: true,
        minify: { collapseWhitespace: true },
        template: './src/index.html',
        filename: './index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        title: 'LDKcreatives - Contact',
        description: '',
        keywords: '',
        hash: true,
        minify: { collapseWhitespace: true },
        template: './src/contact.html',
        filename: './contact.html',
        chunks: ['contact'],
      }),

      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash:5].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash:5].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      // new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      // paths: glob.sync(path.join(__dirname, 'src/*.html')),
      // minimize: prodMode,
      // purifyOptions: {
      //  info: true,
      // },
      // }),
      new CopyWebpackPlugin([
        {
          from: 'src/files',
          to: 'files/[name].[ext]',
        },
      ]),
      new CopyWebpackPlugin([
        {
          from: 'src/.htaccess',
          to: './',
        },
      ]),
    ],
    optimization: {
      minimize: prodMode,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            parse: {},
            compress: {},
            mangle: true,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_fnames: false,
          },
        }),
      ],
    },
  };
};
