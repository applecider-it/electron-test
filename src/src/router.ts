import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Development from "./pages/Development.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/development", component: Development },
  ],
});
