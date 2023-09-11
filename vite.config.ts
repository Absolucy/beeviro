import Icons from "unplugin-icons/vite";
import TurboConsole from "vite-plugin-turbo-console";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import legacy from "vite-plugin-legacy-swc";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { TailwindCSSVitePlugin } from "tailwindcss-vite-plugin";
import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		react(),
		TurboConsole(),
		eslintPlugin(),
		Icons({ compiler: "jsx", jsx: "react" }),
		TailwindCSSVitePlugin(),
		legacy(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
