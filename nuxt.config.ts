import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Global page headers, CSS, plugins, etc.
  css: [
    '~/assets/styles/main.css'
  ],

  // Build modules, modules (including Axios), and other Nuxt configurations
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    // '@nuxtjs/axios',
    '@pinia/nuxt',
  ],
  plugins: [
    // '~/plugins/axios.js',
  ],

  // Server Middleware for API and MongoDB connection
  serverMiddleware: [
    { path: '/api', handler: '~/server/api' } // Handle API routes in server/api/index.ts
  ],

  // Environment variables configuration
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000/api'
    }
  },

  // PostCSS Configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Compatibility Date
  compatibilityDate: '2024-07-17',
}

export default config
