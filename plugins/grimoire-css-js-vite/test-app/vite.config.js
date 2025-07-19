import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginGcssjs from "../package/index.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginGcssjs()],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
