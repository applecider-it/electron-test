const { createApp } = window.Vue;
const { createRouter, createWebHashHistory } = window.VueRouter;

import Layout from './Layout.js';

import Home from './pages/Home.js';
import Settings from './pages/Settings.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/settings', component: Settings },
  ],
});

createApp(Layout).use(router).mount('#app');
