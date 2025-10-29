import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Apenas o plugin React padrão
  base: process.env.VITE_BASE_PATH || "/portfolio",
});
