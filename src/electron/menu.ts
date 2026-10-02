import { app, MenuItemConstructorOptions, type BrowserWindow } from "electron";

import { routerPush } from "./ipc/app";

/** メニューのテンプレートを定義 */
export const getMenuTemplate = (getWindow: () => BrowserWindow | null) => {
  const menuTemplate: MenuItemConstructorOptions[] = [
    {
      label: "ファイル",
      submenu: [{ role: "quit", label: "アプリを終了" }],
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

  if (!app.isPackaged) {
    // 開発時の場合

    menuTemplate.push({
      label: "開発",
      submenu: [
        { role: "reload", label: "再読み込み" },
        { role: "forceReload", label: "強制的に再読み込み" },
        { type: "separator" },
        { role: "toggleDevTools", label: "デベロッパーツールを切り替え" }, // ★ これで Cmd+Opt+I が復活します
        { type: "separator" },
        {
          label: "開発者向けページに移動",
          click: () => {
            const win = getWindow();
            if (!win) return;
            routerPush(win, "/development");
          },
        },
      ],
    });
  }

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
