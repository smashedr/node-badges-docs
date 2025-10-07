import { defineConfig } from 'vitepress'
import path from 'path'

const settings = {
  base: '/node-badges-docs', // no trailing slash
  title: 'Node Badges',
  name: 'Node Badges',
  description: {
    short: 'NodeJS Badge Server.',
    long: 'Badge Server written in NodeJS and built with Docker.',
  },
  image: '/images/logo.png',
  color: '#ce2727',
  source_repo: 'https://github.com/smashedr/node-badges',
  docs_repo: 'https://github.com/smashedr/node-badges-docs',
}

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  srcDir: './docs',
  base: `${settings.base}/`, // NOTE: base is also required for meta paths
  vite: {
    resolve: {
      alias: {
        '@public': path.resolve(__dirname, '../docs/public'),
      },
    },
    server: {
      allowedHosts: true,
    },
  },

  ignoreDeadLinks: [/^https?:\/\/localhost/],

  title: settings.title,
  description: settings.description.short,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: `${settings.base}/favicon.ico` }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: settings.base + settings.image }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${settings.base}/images/logo32.png` }],

    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: settings.color }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: settings.base + settings.image }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: settings.base + settings.image }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.title,
    logo: `${settings.base}/images/logo32.png`,
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/guides/get-started' },
      // { text: 'Badges', link: '/guides/badges' },
      { text: 'Deploy', link: '/guides/deploy' },
      { text: 'Support', link: '/support' },
      // {
      //   text: 'Links',
      //   items: [
      //     { text: 'GitHub Source Code', link: settings.source_repo },
      //     { text: 'Developer Site', link: 'https://cssnr.github.io/' },
      //     { text: 'Contribute', link: 'https://ko-fi.com/cssnr' },
      //   ],
      // },
    ],

    socialLinks: [
      { icon: 'github', link: settings.source_repo },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-container-icon lucide-container"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1"/><path d="m10 14 11.9-6.9"/><path d="M14 19.8v-8.1"/><path d="M18 17.5V9.4"/></svg>',
        },
        link: 'https://github.com/smashedr/node-badges/pkgs/container/node-badges',
      },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
      { icon: 'kofi', link: 'https://ko-fi.com/cssnr' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        },
        link: 'https://cssnr.github.io/',
      },
    ],

    sidebar: [
      {
        text: 'Guides',
        base: '/guides',
        items: [
          { text: 'Get Started', link: '/get-started' },
          // { text: 'Badges', link: '/badges' },
          { text: 'Deploy', link: '/deploy' },
        ],
      },
      // {
      //   text: 'Documentation',
      //   base: '/docs',
      //   // collapsed: false,
      //   items: [
      //     { text: 'Popup', link: '/popup' },
      //     { text: 'Parameters', link: '/parameters' },
      //   ],
      // },
      {
        text: 'Support',
        items: [{ text: 'Get Help', link: '/support' }],
      },
    ],

    editLink: {
      pattern: `${settings.docs_repo}/blob/master/docs/:path`,
      text: 'View or Edit on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: 'NWVKC37L32',
      //   apiKey: 'ead8f5921d4dd8b743d69ee4db57c7a4',
      //   indexName: 'node-badges',
      // },
    },

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    externalLinkIcon: true,
    outline: 'deep',
  },
})
