import HtmlWebpackPlugin from "html-webpack-plugin";

import Dotenv from "dotenv-webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default {
  resolve: { extensions: [".js", ".ts", ".webp", ".tsx"] },
  module: {
    rules: [
      // LOADER JS
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      //LOADER WEBP
      {
        test: /\.webp$/i,
        type: "asset/resource",
      },
      //LOADER  SASS
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      scriptLoading: "blocking",
      hash: true,
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // genera stats.html en dist/
      openAnalyzer: false, // true abre el navegador automáticamente
      reportFilename: "bundle-stats.html",
    }),
  ],
};
