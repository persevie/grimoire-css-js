import { start } from "@persevie/grimoire-css-js";

function vitePluginGrimoireCSSJS() {
  return {
    name: "vite-plugin-grimoire-css-js",

    buildStart() {
      start("build");
    },

    handleHotUpdate({ server }) {
      start("build");

      server.moduleGraph.invalidateAll();
      server.ws.send({
        type: "full-reload",
        path: "*",
      });
    },
  };
}

export default vitePluginGrimoireCSSJS;
