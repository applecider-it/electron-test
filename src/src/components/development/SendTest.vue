<script setup lang="ts">
import { ref } from 'vue'

import { ipcSendTest } from '../../ipc/development'

const result = ref("")
const textInput = ref("")

const testFunc = async () => {
  result.value = await ipcSendTest(textInput.value);
}
</script>

<template>
  <h3 class="app-h3">送受信動作確認</h3>

  <input type="text" v-model="textInput" class="app-form-input" />

  <div class="my-5">
    <button type="button" @click="testFunc" class="app-btn-primary">Test</button>
  </div>

  <div>result: {{ result }}</div>
</template>
