<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const result = ref("")

const testFunc = async () => {
  result.value = await window.ipcRenderer.invoke('get-data', 'Val1');
}
</script>

<template>
  <h1>Home</h1>

  <div class="card">
    <button type="button" @click="testFunc" class="app-btn-primary">Test</button>
    <p>
      result: {{ result }}
    </p>
    <button type="button" @click="count++" class="app-btn-primary">count is {{ count }}</button>
  </div>
</template>
