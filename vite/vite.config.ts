import { defineConfig } from "vite";
import { bundleStats } from "rollup-plugin-bundle-stats";
import { compression } from "vite-plugin-compression2";
import { checker } from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    bundleStats(),
    compression({
      algorithms: ["brotli", "gzip"],
    }),
  ],
});
