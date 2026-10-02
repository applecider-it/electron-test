import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { setupIpc } from "./ipc.ts";

createApp(App)
  .use(router)
  .mount("#app")
  .$nextTick(() => {
    setupIpc(router);
  });
