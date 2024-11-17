const { start } = require("@persevie/gcssjs");

class GcssjsWebpackPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      "GcssjsWebpackPlugin",
      (compilation, callback) => {
        start("build");
        callback();
      },
    );
  }
}

module.exports = GcssjsWebpackPlugin;
