import DefaultTheme, { VPBadge } from 'vitepress/theme'
import '@catppuccin/vitepress/theme/macchiato/green.css'
import './custom.css'

import Layout from './Layout.vue'

import BadgePreview from './components/BadgePreview.vue'

// import Contributors from '@cssnr/vitepress-plugin-contributors'
// import '@cssnr/vitepress-plugin-contributors/style.css'
// import contributors from '../contributors.json'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    Layout: Layout,

    enhanceApp({ app }) {
        app.component('Badge', VPBadge)

        app.component('BadgePreview', BadgePreview)

        // app.component('Contributors', Contributors)
        // app.config.globalProperties.$contributors = contributors
    },
}
