import { ipcMain } from "electron";

export const setupIpc = () => {
  ipcMain.handle("get-data", async (_event, val) => {
    console.log("get-data", { val });
    return "メインプロセスからのデータ" + val;
  });
};
