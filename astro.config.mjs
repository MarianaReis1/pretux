import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";


export default defineConfig({
  integrations: [vue(), tailwind()],
  build: { format: 'file' },
  site: 'https://marianareis1.github.io',
  // base: '/pretux'
});