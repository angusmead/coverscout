import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
      "react-helmet-async",
      "react-router-dom",
    ],
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    // Trailing-slash-style URLs (each route → /route/index.html)
    dirStyle: "nested",
    // Mock browser globals during SSR pass — needed by some shadcn primitives.
    mock: true,
  },
}));
