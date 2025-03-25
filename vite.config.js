import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import libCss from "vite-plugin-libcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libCss()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "index.tsx"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "my-lib",
    },
  },
});
