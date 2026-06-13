const { contextBridge, ipcRenderer } = require('electron');

// 画面（windowオブジェクト）に「myAPI」という窓口を公開する
contextBridge.exposeInMainWorld('myAPI', {
  // HTML側から window.myAPI.callMainFunction() で呼べるようにする
  callMainFunction: () => {
    // メインプロセスに向けて 'trigger-action' という合図を送る
    ipcRenderer.send('trigger-action');
  }
});