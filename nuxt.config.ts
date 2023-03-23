// @ts-nocheck
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Dekpoke 🐹",
      meta: [{ name: "description", content: "Amazing Pokedex for you! 🤙" }],
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-lodash"],
  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ["camelCase", "stringToCamelCase"],
      ["kebabCase", "stringToKebab"],
      ["isDate", "isLodashDate"],
    ],
  },
  css: ["assets/scss/global.scss"],
  components: [{ path: "./components/Details" }, "./components"],
});
