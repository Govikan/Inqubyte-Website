// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://govikan.github.io',
  base: '/Inqubyte-Website/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
