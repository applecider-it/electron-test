import { ipcMain } from "electron";

import { execFilesystemTest } from "../services/development/filesystem-test";

export const setupIpcDevelopment = () => {
  // IPC送受信テスト
  ipcMain.handle("development--get-data", async (_event, val) => {
    console.log("get-data", { val });
    return "メインプロセスからのデータ" + val;
  });

  // ダイアログでファイル選択して読み込み
  ipcMain.handle("development--open-text-file", async () => {
    return await execFilesystemTest();
  });
};
