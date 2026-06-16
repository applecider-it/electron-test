import { app, BrowserWindow } from "electron";

/** 製品版（ビルド後）だけデベロッパーツールをブロック */
export function blockDevTool(win: BrowserWindow) {
  if (app.isPackaged) {
    // ビルド時の場合

    // 1. ショートカットキーを無効化
    win.webContents.on("before-input-event", (event, input) => {
      // Mac: Cmd + Option + I
      const isMacDevTools = input.meta && input.alt && input.code === "KeyI";
      // Windows/Linux: Ctrl + Shift + I
      const isWinDevTools =
        input.control && input.shift && input.code === "KeyI";

      if (isMacDevTools || isWinDevTools) {
        event.preventDefault(); // 本来の挙動（開発者ツールを開く）を阻止
      }
    });

    // 2. メニューバーなど、他の方法で万が一開かれても「即座に閉じる」安全策
    win.webContents.on("devtools-opened", () => {
      win.webContents.closeDevTools();
    });
  }
}
