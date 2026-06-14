<script setup lang="ts">
import { ref } from 'vue'

const fileContent = ref("")
const filePath = ref("")

const openFile = async () => {
  const res = await window.ipcRenderer.invoke('development--open-text-file');
  if (!res) return; // キャンセル時

  filePath.value = res.filePath;
  fileContent.value = res.content;
}
</script>

<template>

  <h3 class="app-h3">ファイルシステム動作確認</h3>

  <div class="my-5">
    <button type="button" @click="openFile" class="app-btn-primary">ファイルを開く</button>
  </div>

  <div>path: {{ filePath }}</div>
  <pre>{{ fileContent }}</pre>

</template>