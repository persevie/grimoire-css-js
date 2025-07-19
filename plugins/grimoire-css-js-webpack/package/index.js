const { start } = require("@persevie/grimoire-css-js");

class GcssjsWebpackPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      "GcssjsWebpackPlugin",
      (compilation, callback) => {
        start("build");
        callback();
      }
    );
  }
}

module.exports = GcssjsWebpackPlugin;
