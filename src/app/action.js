const { ipcMain } = require('electron');

/** アクションのセットアップ */
function setupAction() {
  ipcMain.handle('trigger-action', (event, text) => {
    console.log('受け取ったテキスト:', text);
  });
}

module.exports = { setupAction };
