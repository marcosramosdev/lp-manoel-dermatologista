// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://drmanoel.com.br',
  output: 'static',

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify({
    imageCDN: false,
  }),
});