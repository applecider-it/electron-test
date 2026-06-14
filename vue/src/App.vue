<script setup lang="ts"></script>

<template>
  <div>
    <a href="https://electron-vite.github.io" target="_blank">
      <img src="/electron-vite.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <nav>
    <router-link to="/">ホーム</router-link>
    <router-link to="/settings">設定</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
