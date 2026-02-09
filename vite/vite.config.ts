import { defineConfig } from "vite";
import { bundleStats } from "rollup-plugin-bundle-stats";

import { checker } from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    bundleStats(),
  ],
  css: {
    modules: {
      globalModulePaths: [/global\.module\.css$/, /global\/.*\.module\.css$/],
    },
  },
});
