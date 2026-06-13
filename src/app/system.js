const { app } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;
const isMac = process.platform !== 'darwin';

/**
 * ホットリロードの設定（自分自身がある場所 __dirname を監視）
 * Macだとwindowが複数表示されたり、うまく動作しない
 */
function setupReload() {
  if (isDev && isMac) {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
      hardResetMethod: 'exit', // ← ウインドウが残るのを防ぐ設定
    });
  }
}

/** 製品版（ビルド後）だけデベロッパーツールをブロック */
function blockDevTool(win) {
  if (!isDev) {
    // 1. ショートカットキーを無効化
    win.webContents.on('before-input-event', (event, input) => {
      console.log('before-input-event', input.meta, input.alt, input.code);
      // Mac: Cmd + Option + I
      const isMacDevTools = input.meta && input.alt && input.code === 'KeyI';
      // Windows/Linux: Ctrl + Shift + I
      const isWinDevTools =
        input.control && input.shift && input.code === 'KeyI';

      console.log({ isMacDevTools, isWinDevTools });

      if (isMacDevTools || isWinDevTools) {
        event.preventDefault(); // 本来の挙動（開発者ツールを開く）を阻止
      }
    });

    // 2. メニューバーなど、他の方法で万が一開かれても「即座に閉じる」安全策
    win.webContents.on('developer-tools-opened', () => {
      win.webContents.closeDevTools();
    });
  }
}

module.exports = { isDev, isMac, setupReload, blockDevTool };
