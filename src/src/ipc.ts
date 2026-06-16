import type { Router } from "vue-router";

export const setupIpc = (router: Router) => {
  // Use contextBridge
  window.ipcRenderer.on("main-process-message", (_event, message) => {
    console.log(message);
  });

  window.ipcRenderer.on("app--router-push", (_event, uri) => {
    console.log("app--router-push", { uri });

    router.push(uri);
  });
};
