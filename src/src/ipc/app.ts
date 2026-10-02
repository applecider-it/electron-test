import type { Router } from "vue-router";

export const setupIpcApp = (router: Router) => {
  // ipcでページ遷移させる
  window.ipcRenderer.on("app--router-push", (_event, uri) => {
    console.log("app--router-push", { uri });

    router.push(uri);
  });
};
