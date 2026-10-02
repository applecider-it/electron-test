import type { Router } from "vue-router";
import { setupIpcApp } from "./ipc/app";

export const setupIpc = (router: Router) => {
  // Use contextBridge
  window.ipcRenderer.on("main-process-message", (_event, message) => {
    console.log(message);
  });

  setupIpcApp(router);
};
