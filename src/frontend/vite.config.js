import { fileURLToPath, URL } from "url";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { VitePWA } from "vite-plugin-pwa";



export default defineConfig({
  logLevel: "error",
  build: {
    emptyOutDir: true,
    sourcemap: false,
    minify: false,
  },
  css: {
    postcss: "./postcss.config.js",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    // Generate real PNG icon files at build time only — skip in dev for fast startup
    {
      name: "generate-pwa-icons",
      apply: "build",
      async buildStart() {
        const { generatePNG } = await import("./scripts/create-pwa-icons.mjs");
        const iconsDir = resolve("./public/icons");
        const screenshotsDir = resolve("./public/screenshots");
        await generatePNG(192, `${iconsDir}/icon-192.png`, false);
        await generatePNG(512, `${iconsDir}/icon-512.png`, false);
        await generatePNG(512, `${iconsDir}/icon-512-maskable.png`, true);
        await generatePNG(1280, `${screenshotsDir}/screenshot-wide.png`, false);
        await generatePNG(750, `${screenshotsDir}/screenshot-narrow.png`, false);
      },
    },
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "icons/*.svg", "icons/*.png", "screenshots/*.png"],
      manifest: {
        name: "IT Fresher Hub",
        short_name: "IT Fresher",
        description:
          "IT Fresher Hub — scenario-based learning platform for IT freshers. Master Python, SQL, DevOps, Cloud, and 20+ more skills with real-world projects.",
        theme_color: "#1a73e8",
        background_color: "#0a0a14",
        display: "standalone",
        start_url: "/",
        scope: "/",
        dir: "ltr",
        lang: "en-US",
        orientation: "portrait-primary",
        categories: ["education", "productivity", "utilities"],
        iarc_rating_id: "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7",
        icons: [
          {
            src: "/icons/icon-192.svg",
            sizes: "192x192",
            type: "image/svg+xml",
            purpose: "any",
          },
          {
            src: "/icons/icon-512.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any",
          },
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/screenshot-wide.png",
            sizes: "1280x1280",
            type: "image/png",
            form_factor: "wide",
            label: "IT Fresher Hub — Course Dashboard",
          },
          {
            src: "/screenshots/screenshot-narrow.png",
            sizes: "750x750",
            type: "image/png",
            form_factor: "narrow",
            label: "IT Fresher Hub — Learning Dashboard",
          },
        ],
        shortcuts: [
          {
            name: "My Courses",
            short_name: "Courses",
            description: "Browse all available IT courses",
            url: "/",
            icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
          },
          {
            name: "My Dashboard",
            short_name: "Dashboard",
            description: "View your learning progress",
            url: "/?tab=dashboard",
            icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/api/, /^\/admin/],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(new URL("../declarations", import.meta.url)),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
    dedupe: [],
  },
});
