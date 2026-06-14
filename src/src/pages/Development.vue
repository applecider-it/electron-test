<script setup lang="ts">
import { ref } from 'vue'
import vueSvg from '../assets/vue.svg'

const result = ref("")
const fileContent = ref("")
const filePath = ref("")
const textInput = ref("")

const testFunc = async () => {
  result.value = await window.ipcRenderer.invoke('get-data', textInput.value);
}

const openFile = async () => {
  const res = await window.ipcRenderer.invoke('open-text-file');
  if (!res) return; // キャンセル時

  filePath.value = res.filePath;
  fileContent.value = res.content;
}
</script>

<template>
  <h2 class="app-h2">開発者向けページ</h2>

  <div class="app-card">
    <h3 class="app-h3">送受信動作確認</h3>

    <input type="text" v-model="textInput" class="app-form-input" />

    <div class="my-5">
      <button type="button" @click="testFunc" class="app-btn-primary">Test</button>
    </div>

    <div>result: {{ result }}</div>
  </div>

  <div class="app-card mt-5">
    <h3 class="app-h3">ファイルシステム動作確認</h3>

    <div class="my-5">
      <button type="button" @click="openFile" class="app-btn-primary">ファイルを開く</button>
    </div>

    <div>path: {{ filePath }}</div>
    <pre>{{ fileContent }}</pre>
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