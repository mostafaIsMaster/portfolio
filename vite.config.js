import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import Markdown from 'vite-plugin-vue-markdown'
import path from 'node:path'
import { VitePWA } from 'vite-plugin-pwa'

// Set your GitHub repository name here
const repoName = 'portfolio';  // Replace 'your-repo-name' with your actual repository name

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    VitePWA({
      mode: 'development',
      base: `/`,  // GitHub Pages will deploy your app to the root of the repository
      srcDir: 'src',
      filename: 'sw.ts',
      strategies: 'injectManifest',
      manifest: {
        name: 'Mostafa Kamal Portfolio 💼',
        short_name: 'Mostafa-Kamal-Portfolio',
        description: 'A personal portfolio to showcase my experience, education, skills, projects, certificates, achievements, and recommendations.',
        theme_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: 'icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'components': path.resolve(__dirname, './src/components'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  // Add the base path to handle GitHub Pages correctly
  base: `/portfolio/`  // Replace 'your-repo-name' with the actual repository name
})
