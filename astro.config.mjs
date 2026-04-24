import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bkc-yume.pages.dev',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: { prefixDefaultLocale: true }
  },
  build: { inlineStylesheets: 'auto' }
});
