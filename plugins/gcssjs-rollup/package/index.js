const { start } = require("@persevie/gcssjs");

function rollupPluginGcssjs() {
  return {
    name: "rollup-plugin-gcssjs",

    generateBundle(options, bundle) {
      start("build");
    },
  };
}

module.exports = rollupPluginGcssjs;
