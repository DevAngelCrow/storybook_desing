import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import {peerDependencies} from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({exclude: ["**/*.stories.ts", "**/*.test.ts"]})],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "desing-system-story-book",
      fileName: (format) => `desing-system-story-book.${format}.js`,
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {globals: { react: "React", "react-dom":"ReactDOM"}}
    }
  }
})
