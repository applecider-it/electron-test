import { ipcMain, dialog } from "electron";
import { readFile } from "fs/promises";

export const setupIpc = () => {
  ipcMain.handle("get-data", async (_event, val) => {
    console.log("get-data", { val });
    return "メインプロセスからのデータ" + val;
  });

  // ダイアログでファイル選択して読み込み
  ipcMain.handle("open-text-file", async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: ["openFile"],
      filters: [
        {
          name: "テキストファイル",
          extensions: ["txt", "md", "csv", "json", "log"],
        },
        { name: "すべてのファイル", extensions: ["*"] },
      ],
    });

    if (canceled || filePaths.length === 0) return null;

    const filePath = filePaths[0];
    const content = await readFile(filePath, "utf-8");
    return { filePath, content };
  });
};
