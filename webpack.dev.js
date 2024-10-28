const {merge}= require("webpack-merge");
const config= require("./webpack.config.js")
const path= require("path");


module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080, // El puerto de tu servidor
        watchFiles: ["./src/template.html"],
        
      },
  
  });

