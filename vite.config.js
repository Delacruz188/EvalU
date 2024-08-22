/* eslint-disable no-undef */
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "src@components": path.resolve(__dirname, "./src/components"),
      "src@hooks": path.resolve(__dirname, "./src/hooks"),
      "src@redux": path.resolve(__dirname, "./src/redux"),
    },
  },
});
