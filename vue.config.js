const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/Commerce/',
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
  },
};
