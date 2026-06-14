<script setup lang="ts">
import vueSvg from '../assets/vue.svg'

import FileSystemTest from '../components/development/FileSystemTest.vue'
import SendTest from '../components/development/SendTest.vue'
</script>

<template>
  <h2 class="app-h2">開発者向けページ</h2>

  <div class="app-card">
    <SendTest />
  </div>

  <div class="app-card mt-5">
    <FileSystemTest />
  </div>

  <div class="app-card mt-5">
    <h3 class="app-h3">その他動作確認</h3>

    <div>
      アセット動作確認：
      <img :src="vueSvg" class="inline-block w-10" />
    </div>

    <div>
      リンク動作確認：
      <a href="https://electron-vite.github.io" target="_blank">
        https://electron-vite.github.io
      </a>
    </div>
  </div>
</template>