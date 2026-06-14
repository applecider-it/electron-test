<script setup lang="ts">
import { ref } from 'vue'

const result = ref("")
const fileContent = ref("")
const filePath = ref("")

const testFunc = async () => {
  result.value = await window.ipcRenderer.invoke('get-data', 'Val1');
}

const openFile = async () => {
  const res = await window.ipcRenderer.invoke('open-text-file');
  if (!res) return; // キャンセル時

  filePath.value = res.filePath;
  fileContent.value = res.content;
}
</script>

<template>
  <h2 class="app-h2">Home</h2>

  <div class="app-card">
    <button type="button" @click="testFunc" class="app-btn-primary">Test</button>
    <p>result: {{ result }}</p>
  </div>

  <div class="app-card">
    <button type="button" @click="openFile" class="app-btn-primary">ファイルを開く</button>
    <p>path: {{ filePath }}</p>
    <pre>{{ fileContent }}</pre>
  </div>
</template>