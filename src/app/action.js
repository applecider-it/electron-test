const { ipcMain } = require('electron');

/** メインプロセス側で実行したい関数を定義 */
function myBackendFunction() {
  console.log('メインプロセス側の関数が実行されました！(Node.js環境)');
}

/** アクションのセットアップ */
function setupAction() {
  // 画面からの合図を待ち受ける
  ipcMain.on('trigger-action', () => {
    // 合図が来たら関数を実行する
    myBackendFunction();
  });
}

module.exports = { setupAction };
