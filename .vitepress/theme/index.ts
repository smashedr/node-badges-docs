import DefaultTheme, { VPBadge } from 'vitepress/theme'
import '@catppuccin/vitepress/theme/macchiato/green.css'
import './custom.css'

import Layout from './Layout.vue'

import BadgePreview from './components/BadgePreview.vue'
import PurgeCache from './components/PurgeCache.vue'

import chat from 'vitepress-chat'
import 'vitepress-chat/style.css'

// import Contributors from '@cssnr/vitepress-plugin-contributors'
// import '@cssnr/vitepress-plugin-contributors/style.css'
// import contributors from '../contributors.json'

// noinspection JSUnusedGlobalSymbols
export default {
  ...DefaultTheme,

  Layout: Layout,

  ...chat(DefaultTheme, {
    api: import.meta.env.VITE_AI_API,
    headers: import.meta.env.VITE_AI_AUTH ? { Authorization: import.meta.env.VITE_AI_AUTH } : undefined,
    filePath: 'llms.txt',
    // showReasoning: true,
  }),

  enhanceApp({ app }) {
    app.component('Badge', VPBadge)

    app.component('BadgePreview', BadgePreview)
    app.component('PurgeCache', PurgeCache)

    // app.component('Contributors', Contributors)
    // app.config.globalProperties.$contributors = contributors
  },
}
