<script setup>
// noinspection NpmUsedModulesInstalled
import { ref } from 'vue'

import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

// Props
const props = defineProps({
  url: { type: String, default: 'https://badges.cssnr.com' },
  repo: { type: String, default: 'smashedr/node-badges' },
  placeholder: { type: String, default: 'Badge URL to Purge.' },
})

const purgeInput = ref()
const purgeCount = ref(0)
const purgeResults = ref('Results: Awaiting Purge')

async function purgeClick(event) {
  // console.log('event:', event)
  console.log('purgeInput.value:', purgeInput.value)
  try {
    const url = new URL(purgeInput.value)
    // console.log('url:', url)
    const response = await fetch(url, { method: 'PURGE' })
    // console.log('response:', response)
    console.log('response.status:', response.status)
    const text = await response.text()
    console.log('text:', text)
    purgeCount.value++
    console.log('purgeCount.value:', purgeCount.value)
    purgeResults.value = `Result ${purgeCount.value}: Successfully Purged ${text} Keys.`
  } catch (error) {
    console.log('error:', error.message)
    purgeResults.value = `Error: ${error.message}`
  }
}
</script>

<template>
  <div class="purge-cache">
    <input v-model="purgeInput" id="purgeInput" :placeholder="props.placeholder" type="text" />
    <!--<a href="index.md" class="VPButton medium brand" type="button">Purge</a>-->
    <div class="purge-cache-controls">
      <VPButton text="Purge" @click="purgeClick" style="margin: 0 0 12px 12px" />
      <div class="purge-cache-results">{{ purgeResults }}</div>
    </div>
  </div>
</template>

<style scoped>
.purge-cache input {
  border: 1px solid var(--vp-c-indigo-3);
  border-radius: 8px;
  padding: 4px;
  width: 100%;
}
.purge-cache-controls {
  margin: 16px 0;
}
.purge-cache-results {
  margin-left: 16px;
  display: inline-block;
  font-weight: 300;
}
</style>
