<script setup lang="ts">
import { ref } from 'vue'

const result = ref("")

const testFunc = async () => {
  result.value = await window.ipcRenderer.invoke('get-data', 'Val1');
}
</script>

<template>
  <h2 class="app-h2">Home</h2>

  <div class="app-card">
    <button type="button" @click="testFunc" class="app-btn-primary">Test</button>
    <p>
      result: {{ result }}
    </p>
  </div>
</template>
