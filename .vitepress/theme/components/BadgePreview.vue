<script setup>
// noinspection NpmUsedModulesInstalled
import { ref } from 'vue'
// import { debounce } from '../scripts/functions'

// Props
const props = defineProps({
  badgesUrl: { type: String, default: 'https://badges.cssnr.com' },
  defaultRepo: { type: String, default: 'smashedr/node-badges' },
  linkImage: { type: Boolean, default: false },
})

const srcUrl = ref(`${props.badgesUrl}/ghcr/size/${props.defaultRepo}`)
const imgUrl = ref(`${props.badgesUrl}/ghcr/size/${props.defaultRepo}`)
const markdownUrl = ref(`![Alt Text](${props.badgesUrl}/ghcr/size/${props.defaultRepo})`)

const encodeInput = ref()
const encodeOutput = ref()

function setMdUrl(url) {
  markdownUrl.value = `![Alt Text](${url})`
}

function handleChange() {
  imgUrl.value = srcUrl.value
  setMdUrl(srcUrl.value)
}

function handleClick(event) {
  imgUrl.value = event.target.dataset.value
  srcUrl.value = event.target.dataset.value
  setMdUrl(event.target.dataset.value)
}

function handleEncode() {
  encodeOutput.value = encodeURIComponent(encodeInput.value)
}

function handleOutputClick(event) {
  if (event.target.value) {
    event.target.select()
    navigator.clipboard.writeText(event.target.value)
  }
}
// const handleEncodeDebounce = debounce(handleEncode, 250)
</script>

<template>
  <div class="badge-preview">
    <details>
      <summary>Click to View Available Links and Badges</summary>
      <p class="badge-preview-tip">
        💡 Tip: Click on a link to auto-fill the box or add <code>?color=red</code>
      </p>
      <ul class="badge-preview-links">
        <li>
          <span @click="handleClick" :data-value="`${props.badgesUrl}/ghcr/size/${props.defaultRepo}`">
            /ghcr/size/{owner}/{package}
          </span>
        </li>
        <li>
          <span @click="handleClick" :data-value="`${props.badgesUrl}/ghcr/tags/${props.defaultRepo}/latest`">
            /ghcr/tags/{owner}/{package}/latest
          </span>
        </li>
        <li>
          <span @click="handleClick" :data-value="`${props.badgesUrl}/ghcr/tags/${props.defaultRepo}`">
            /ghcr/tags/{owner}/{package}
          </span>
        </li>
        <li>
          <span
            @click="handleClick"
            :data-value="`${props.badgesUrl}/yaml/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Frender.yaml/%24.services%5B0%5D.dockerCommand`"
          >
            /yaml/{url}/{path}
          </span>
        </li>
        <li>
          <span
            @click="handleClick"
            :data-value="`${props.badgesUrl}/json/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Fpackage.json/%24.name`"
          >
            /json/{url}/{path}
          </span>
        </li>
        <li>
          <span @click="handleClick" :data-value="`${props.badgesUrl}/static/message`">
            /static/{message}
          </span>
        </li>
        <li>
          <span @click="handleClick" :data-value="`${props.badgesUrl}/static/message/label`">
            /static/{message}/{label}
          </span>
        </li>
        <li>
          <span
            @click="handleClick"
            :data-value="`${props.badgesUrl}/vt/cssnr/zipline-android/app-release.apk`"
          >
            /vt/{owner}/{repo}/{asset}
          </span>
        </li>
        <li>
          <span
            @click="handleClick"
            :data-value="`${props.badgesUrl}/vt/cssnr/zipline-android/app-release.apk/1.0.29`"
          >
            /vt/{owner}/{repo}/{asset}/{tag}
          </span>
        </li>
      </ul>
    </details>

    <label for="inputUrl">Badge URL</label>
    <textarea id="inputUrl" rows="3" style="width: 100%" v-model="srcUrl" @change="handleChange"></textarea>

    <label for="inputUrl">Badge Result</label>
    <div class="badge-preview-badge">
      <a v-if="props.linkImage" :href="imgUrl" target="_blank"><img :src="imgUrl" alt="Example Badge" /></a>
      <img v-else :src="imgUrl" alt="Example Badge" />
    </div>

    <label for="markdownUrl">Markdown URL Result</label>
    <textarea
      id="markdownUrl"
      style="width: 100%"
      v-model="markdownUrl"
      @click="handleOutputClick"
      readonly
    ></textarea>

    <div class="">
      <input
        id="encodeInput"
        placeholder="URL Encode Input (enter a value to encode it)"
        v-model="encodeInput"
        type="text"
        @input="handleEncode"
      />
      <input
        id="encodeOutput"
        placeholder="Encoded Results"
        v-model="encodeOutput"
        type="text"
        @click="handleOutputClick"
        readonly
      />
      <p class="badge-preview-tip">💡 Tip: Clicking on the result copies it to the clipboard.</p>
    </div>
  </div>
</template>

<style scoped>
.badge-preview-badge {
  background-color: var(--vp-code-block-bg);
  border-radius: 10px;
  /*margin: 18px 0;*/
  padding: 18px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.badge-preview textarea {
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  padding: 4px;
}
#markdownUrl {
  border: 1px solid var(--vp-c-gray-1);
  margin-bottom: 18px;
}

.badge-preview input {
  border: 1px solid var(--vp-c-gray-1);
  border-radius: 8px;
  padding: 4px;
  width: 100%;
}

.badge-preview-badge a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.badge-preview-badge img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.badge-preview-links li > span {
  cursor: pointer;
}
.badge-preview input:first-of-type {
  border: 1px solid var(--vp-c-indigo-1);
  margin-bottom: 8px;
}
.badge-preview summary {
  font-style: italic;
}
.badge-preview-tip {
  color: var(--vp-c-success-1);
  font-style: italic;
  font-size: 0.88em;
}
</style>
