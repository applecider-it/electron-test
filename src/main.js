const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // セキュリティのための設定（ preload.js を経由させる ）
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // 画面に表示するHTMLファイルを読み込む
  win.loadFile('index.html');
}

// Electronの準備ができたらウインドウを開く
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// ウインドウがすべて閉じられたらアプリを終了する（Mac以外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});