/** @format */

const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  // entry: {
  //   main: path.resolve(__dirname, 'src/index.js'),
  //   home: path.resolve(__dirname, 'src/containers/Home/index.js'),
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: '[name].[chunkhash].js',
    // chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      // {
      //   test: /\.(css|less)$/,
      //   use: [
      //     'style-loader',
      //     // MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'less-loader',
      //   ],
      // },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         // limit: 8192,
      //         limit: 1024,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    // new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyPlugin({
      patterns: [{ from: 'static', to: 'static' }],
    }),
    // new HtmlWebpackPlugin({ filename: 'index.html', chunks: ['main'], template: './src/index.html' }),
    // new HtmlWebpackPlugin({ filename: 'home.html', chunks: ['home'], template: './src/containers/Home/index.html' }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash].css',
    //   chunkFilename: '[id].[contenthash].css',
    // }),
    // new BundleAnalyzerPlugin()
  ],
  // devServer: {
  //   port: 8080,
  //   contentBase: path.join(__dirname, './dist'),
  //   historyApiFallback: true,
  //   hot: true,
  // },
  resolve: {
    alias: {
      // root: path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js', '.json', '.wasm'],
  },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
  optimization: {
    // splitChunks: {
    //   // include all types of chunks
    //   chunks: 'all',
    //   cacheGroups: {
    //     libs: {
    //       name: 'chunk-libs',
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: 10, //??????
    //       // chunks: 'initial', // ????????????????????????????????????
    //     },
    //     // elementUI: {
    //     //   name: 'chunk-antd', // ????????? elementUI ??????
    //     //   priority: 20, // ??????????????? libs ??? app ????????????????????? libs ?????? app
    //     //   test: /[\\/]node_modules[\\/]antd[\\/]/,
    //     // },
    //     // commons: {
    //     //   name: "chunk-commons",
    //     //   test: resolve("src/components"), // ??????????????????????????????
    //     //   minChunks: 2, // ??????????????????
    //     //   priority: 5,
    //     //   reuseExistingChunk: true
    //     // }
    //   },
    // },
    // // runtimeChunk: {
    // //   name: (entrypoint) => `${entrypoint.name}-runtime`,
    // // },
  },
};
