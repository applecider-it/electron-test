const { contextBridge, ipcRenderer } = require('electron');

// 画面（windowオブジェクト）に「myAPI」という窓口を公開する
contextBridge.exposeInMainWorld('myAPI', {
  // HTML側から window.myAPI.callMainFunction() で呼べるようにする
  callMainFunction: (text) => ipcRenderer.invoke('trigger-action', text)
});