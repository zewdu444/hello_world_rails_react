import { resolve } from "path"
import { optimize } from "webpack"

export const mode = "production"
export const devtool = "source-map"
export const entry = {
  application: "./app/javascript/application.js"
}
export const module = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
  ],
}
export const output = {
  filename: "[name].js",
  sourceMapFilename: "[file].map",
  path: resolve(__dirname, "app/assets/builds"),
}
export const plugins = [
  new optimize.LimitChunkCountPlugin({
    maxChunks: 1
  })
]
