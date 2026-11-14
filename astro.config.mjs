// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages serves this repository at https://pearlgpaul.github.io/portfolio/
// If you move to a custom domain or a <user>.github.io repository,
// change `site` and set `base` to '/'.
export default defineConfig({
  site: 'https://pearlgpaul.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: false },
  },
});
