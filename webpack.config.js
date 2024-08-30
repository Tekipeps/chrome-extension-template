const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const mode = env.NODE_ENV || "production";
  const isDevelopment = mode === "development";

  return {
    mode,
    devtool: isDevelopment ? "inline-source-map" : false,
    entry: {
      popup: "./src/popup/index.tsx",
      content: "./src/content/index.tsx",
      background: "./src/background/background.ts",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      chunkFormat: "array-push",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: "public", to: "." }],
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
              beautify: false,
            },
            mangle: false,
            compress: {
              collapse_vars: true,
            },
          },

          extractComments: false,
          parallel: true,
        }),
      ],
    },
  };
};
