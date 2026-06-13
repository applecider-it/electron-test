const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// ホットリロードの設定（自分自身がある場所 __dirname を監視）
if (process.env.NODE_ENV !== 'production') {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit' // ← ウインドウが残るのを防ぐ設定
  });
}

// メインプロセス側で実行したい関数を定義
function myBackendFunction() {
  console.log('🚨 メインプロセス側の関数が実行されました！(Node.js環境)');
}

// 画面からの合図を待ち受ける
ipcMain.on('trigger-action', () => {
  // 合図が来たら関数を実行する
  myBackendFunction();
});

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