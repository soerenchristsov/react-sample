import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/odata": "http://localhost:4004",
    },
  },
  plugins: [react()],
});
