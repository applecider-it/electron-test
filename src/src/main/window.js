const { app, BrowserWindow } = require('electron');
const path = require('path');

const { isDev, isMac, blockDevTool } = require('./system');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // セキュリティのための設定（ preload.js を経由させる ）
      preload: path.join(__dirname, '..', 'preload', 'preload.js'),
    },
  });

  blockDevTool(win);

  // 画面に表示するHTMLファイルを読み込む
  win.loadFile(path.join(__dirname, '..', 'renderer', 'index.html'));
}

function setupWindow() {
  // Electronの準備ができたらウインドウを開く
  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  // ウインドウがすべて閉じられたらアプリを終了する（Mac以外）
  app.on('window-all-closed', () => {
    if (!isMac || isDev) app.quit();
  });
}

module.exports = { setupWindow };
