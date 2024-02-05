import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexcoronell.github.io/',
  integrations: [tailwind({
    nesting: true,
    applyBaseStyles: false
  }), preact(), sitemap()]
});