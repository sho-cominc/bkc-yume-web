import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// NOTE: @astrojs/sitemap 3.2.1 currently throws against this Astro 4.16
// build pipeline (`_routes.reduce` undefined). Re-enable when upstream fix lands.

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
