const { start } = require("@persevie/grimoire-css-js");

function rollupPluginGrimoireCSSJS() {
  return {
    name: "rollup-plugin-grimoire-css-js",

    generateBundle(options, bundle) {
      start("build");
    },
  };
}

module.exports = rollupPluginGrimoireCSSJS;
