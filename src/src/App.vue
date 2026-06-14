<script setup lang="ts">
// 必要に応じてロジックをここに
</script>

<template>
  <div class="w-screen h-screen flex flex-col bg-slate-50 text-slate-800 select-none overflow-hidden">
    
    <header class="flex items-center justify-between p-4 bg-white border-b border-slate-200 shadow-sm">
      <div class="flex items-center space-x-3">
        <img src="/electron-vite.svg" class="w-8 h-8 object-contain" alt="Electron Vite Logo" />
        
        <nav class="flex space-x-1 pl-4 border-l border-slate-200">
          <router-link to="/" class="app-link-normal">ホーム</router-link>
          <router-link to="/development" class="app-link-normal">開発者向けページ</router-link>
        </nav>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto p-8">
      <router-view></router-view>
    </main>
    
  </div>
</template>