const babel = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const livereload = require("rollup-plugin-livereload");
const serve = require("rollup-plugin-serve");
const rollupPluginGcssjs = require("../package/index.js");
const copy = require("rollup-plugin-copy");

module.exports = {
  input: "src/index.jsx",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    copy({
      targets: [{ src: "public/index.html", dest: "dist" }],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions: [".js", ".jsx"],
    }),
    rollupPluginGcssjs(),
    serve({
      open: true,
      contentBase: ["dist"],
      port: 3000,
    }),
    livereload("dist"),
  ],
};
