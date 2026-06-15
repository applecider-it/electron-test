import { app, MenuItemConstructorOptions } from "electron";

/** メニューのテンプレートを定義 */
export const getMenuTemplate = (createWindow: Function) => {
  const menuTemplate: MenuItemConstructorOptions[] = [
    {
      label: "ファイル",
      submenu: [
        {
          label: "新しいウィンドウ",
          click: () => {
            createWindow();
          },
        },
        { type: "separator" }, // 区切り線
        { role: "quit", label: "アプリを終了" },
      ],
    },
    {
      label: "編集",
      submenu: [
        { role: "undo", label: "元に戻す" },
        { role: "redo", label: "やり直し" },
        { type: "separator" },
        { role: "cut", label: "切り取り" },
        { role: "copy", label: "コピー" },
        { role: "paste", label: "貼り付け" },
      ],
    },
  ];

  if (process.platform === "darwin") {
    // MacOSの場合

    menuTemplate.unshift({
      label: app.name,
      submenu: [
        { role: "about", label: `${app.name}について` },
        { type: "separator" },
        { role: "quit", label: "終了" },
      ],
    });
  }

  return menuTemplate;
};
