<script setup lang="ts">
import vueSvg from './assets/vue.svg'
</script>

<template>
  <div class="p-5">
    <div>
      <a href="https://electron-vite.github.io" target="_blank">
        <img src="/electron-vite.svg" class="inline-block w-10" />
      </a>
      <img :src="vueSvg" class="inline-block w-10" />
    </div>
    <div class="space-x-2">
      <router-link to="/" class="app-link-normal">ホーム</router-link>
      <router-link to="/settings" class="app-link-normal">設定</router-link>
    </div>
  </div>
  <div class="p-10">
    <router-view></router-view>
  </div>
</template>
