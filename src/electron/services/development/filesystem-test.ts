import { dialog } from "electron";
import { readFile } from "fs/promises";

/** ファイルシステム動作確認 */
export const execFilesystemTest = async () => {
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
};
