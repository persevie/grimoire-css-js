import { start } from "@persevie/gcssjs";

function vitePluginGcssjs() {
  return {
    name: "vite-plugin-gcssjs",

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

export default vitePluginGcssjs;
