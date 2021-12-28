const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "docs"),
  },
  resolve: {
      extensions: ["", ".js", ".jsx"]
  },
  module: {
    rules: [{ 
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-react"]
            }
        }},
        {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
        },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        }]
  }
};