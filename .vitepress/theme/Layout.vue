<script setup>
import DefaultTheme from 'vitepress/theme'
// import { useData } from 'vitepress'

const { Layout } = DefaultTheme
// const { site } = useData()

const badges = [
  'https://badges.cssnr.com/ghcr/size/smashedr/node-badges?style=for-the-badge',
  'https://badges.cssnr.com/ghcr/tags/smashedr/node-badges/latest?style=for-the-badge',
  'https://badges.cssnr.com/ghcr/tags/smashedr/node-badges?style=for-the-badge',
]
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="features-after">
        <div class="badges">
          <a v-for="(url, i) in badges" :key="i" :href="url" target="_blank" rel="noopener">
            <img :src="url" alt="Badge" />
          </a>
        </div>

        <a href="https://ko-fi.com/cssnr" target="_blank" rel="noopener">
          <!--<img alt="Ko-Fi" :src="`${site.base}images/ko-fi.gif`" />-->
          <!--<img alt="Ko-Fi" :src="`./images/ko-fi.gif`" />-->
          <img alt="Support Us on Ko-Fi" src="@public/images/ko-fi.gif" />
        </a>
      </div>
    </template>
  </Layout>
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
.features-after {
  margin-top: 64px;
  padding: 0 24px;
  text-align: center;
}

.features-after .badges img {
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  margin-right: 8px;
  margin-bottom: 8px;
}
.features-after .badges img:hover {
  transform: scale(1.04);
}

.features-after img {
  margin: auto;
  display: inline-block;
  vertical-align: middle;
}
</style>
