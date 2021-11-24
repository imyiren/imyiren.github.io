import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Yiren',
  favicon: 'https://avatars.githubusercontent.com/u/46130819?v=4',
  logo: 'https://avatars.githubusercontent.com/u/46130819?v=4',
  outputPath: 'docs',
  resolve: {
    includes: ['mds'],
  },
  // more config: https://d.umijs.org/config
});
