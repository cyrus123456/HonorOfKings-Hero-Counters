import react from "@vitejs/plugin-react";
import { inspectAttr } from 'kimi-plugin-inspect-react';
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';

import { cloudflare } from "@cloudflare/vite-plugin";

// const deployTarget = process.env.VITE_DEPLOY_TARGET

// https://vite.dev/config/
export default defineConfig({
  // base: (process.env.NODE_ENV === 'production' && deployTarget === 'github') ? '/HonorOfKings-Hero-Counters/' : './',
  base: './',
  plugins: [inspectAttr(), react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['apple-touch-icon.png'],
    manifest: {
      name: '王者荣耀英雄克制关系图 | Honor of Kings Hero Counters',
      short_name: 'KOG Counters',
      description: '交互式网络图可视化展示王者荣耀英雄之间的克制关系',
      theme_color: '#0f172a',
      background_color: '#0f172a',
      display: 'standalone',
      orientation: 'any',
      scope: './',
      start_url: './',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],
      categories: ['games', 'entertainment', 'utilities'],
      lang: 'zh-CN',
      dir: 'ltr',
      prefer_related_applications: false
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api\.ipapi\.co\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'ipapi-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 // 24 hours
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    devOptions: {
      enabled: true
    }
  }), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: 'hidden',
  },
  server: {
  },
});