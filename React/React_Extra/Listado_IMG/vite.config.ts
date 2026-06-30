import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import tsconfingPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfingPaths(), checker({ typescript: true }), react()],
});
