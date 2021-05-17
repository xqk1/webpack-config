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
    //       priority: 10, //权重
    //       // chunks: 'initial', // 只打包初始时依赖的第三方
    //     },
    //     // elementUI: {
    //     //   name: 'chunk-antd', // 单独将 elementUI 拆包
    //     //   priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
    //     //   test: /[\\/]node_modules[\\/]antd[\\/]/,
    //     // },
    //     // commons: {
    //     //   name: "chunk-commons",
    //     //   test: resolve("src/components"), // 可自定义拓展你的规则
    //     //   minChunks: 2, // 最小共用次数
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
