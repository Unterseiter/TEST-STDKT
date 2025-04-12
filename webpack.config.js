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
      publicPath: '/', // Ключевая настройка!
      clean: true,
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
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['autoprefixer']],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash][ext][query]', // Изменили путь
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.html$/i, // Добавили html-loader
          loader: 'html-loader',
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