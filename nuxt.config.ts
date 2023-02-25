// @ts-nocheck
export default defineNuxtConfig({
	modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
	pwa: {
		registerType: "autoUpdate",
		manifest: {
			name: "Nuxt Vite PWA",
			short_name: "NuxtVitePWA",
			theme_color: "#ffffff",
			icons: [
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any maskable",
				},
			],
		}
	},
	css: ["assets/scss/global.scss"],
});
