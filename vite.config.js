import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Ändere den Base-Pfad zum Root für die Custom Domain
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.webp", "**/*.json"], // Unterstützt sowohl WebP- als auch JSON-Dateien
});