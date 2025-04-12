const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',

    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, // Очищать папку dist перед сборкой
    },

    mode: isProduction ? 'production' : 'development',

    devServer: {
      static: './dist',
      hot: true,
      open: true,
    },

    module: {
      rules: [

        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader', 
            'css-loader',   
            'postcss-loader', 
            'sass-loader'   
        ],
        },


        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },


        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
    ],

    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
    },

    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};