const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const merge = require("webpack-merge");

const base = {
  target: 'electron-renderer',
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  output: {
    filename: process.env.__ENV__ === 'dev' ? "bundle.js" : 'bundle.[hash].js',
    path: __dirname + "/dist"
  },


  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },

};

const dev = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    filename: 'bundle.js',
    contentBase: './dist',
    publicPath: '/built/',
    inline: true,
    hot: true,
    stats: {
      chunks: false,
      colors: true
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

const prod = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        cache: true,
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  performance: {
    hints: false
  }
};

module.exports = merge(
  base,
  process.env.__ENV__ === "dev" ? dev : prod
);
