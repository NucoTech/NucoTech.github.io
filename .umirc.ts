import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Nuco.Tech Open Source',
  mode: 'site',
  logo: '/images/logo.png',
  favicon: '/images/favicon.ico',
  // more config: https://d.umijs.org/config
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      {
        title: 'Projects',
        path: '/opensource',
      },
      {
        title: 'Links',
        path: '/links',
      },
    ],
    'zh-CN': [
      {
        title: '开源项目',
        path: '/zh-CN/opensource',
      },
      {
        title: '友链',
        path: '/zh-CN/links',
      },
    ],
  },
});
