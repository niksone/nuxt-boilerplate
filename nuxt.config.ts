import path from "path";
import { withOpacity } from "./utils/tailiwing";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [path.join(__dirname, "assets/css/base.css")],
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  primevue: {
    usePrimeVue: true,
    importPT: { from: path.resolve(__dirname, "./presets/lara/") }, //import and apply preset
    options: {
      ripple: true,
      unstyled: true,
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
    ],
    strategy: "no_prefix",
    langDir: "locales/",
  },
  tailwindcss: {
    config: {
      darkMode: ["variant", "body:not(.light *)"],
      content: ["presets/**/*.{js,vue,ts}"],
      theme: {
        extend: {
          colors: {
            "primary-50": withOpacity("--primary-50"),
            "primary-100": withOpacity("--primary-100"),
            "primary-200": withOpacity("--primary-200"),
            "primary-300": withOpacity("--primary-300"),
            "primary-400": withOpacity("--primary-400"),
            "primary-500": withOpacity("--primary-500"),
            "primary-600": withOpacity("--primary-600"),
            "primary-700": withOpacity("--primary-700"),
            "primary-800": withOpacity("--primary-800"),
            "primary-900": withOpacity("--primary-900"),
            "primary-950": withOpacity("--primary-950"),
            "surface-0": "rgb(var(--surface-0))",
            "surface-50": "rgb(var(--surface-50))",
            "surface-100": "rgb(var(--surface-100))",
            "surface-200": "rgb(var(--surface-200))",
            "surface-300": "rgb(var(--surface-300))",
            "surface-400": "rgb(var(--surface-400))",
            "surface-500": "rgb(var(--surface-500))",
            "surface-600": "rgb(var(--surface-600))",
            "surface-700": "rgb(var(--surface-700))",
            "surface-800": "rgb(var(--surface-800))",
            "surface-900": "rgb(var(--surface-900))",
            "surface-950": "rgb(var(--surface-950))",
          },
        },
      },
    },
  },
});
