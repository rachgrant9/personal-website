import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-portfolio.vercel.app',
  integrations: [tailwind()],
});
