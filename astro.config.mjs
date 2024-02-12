import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexcoronell.dev/',
  integrations: [tailwind({
    nesting: true,
    applyBaseStyles: false
  }), preact(), sitemap()],
  output: 'server',
  adapter: cloudflare(),
});