import type { BrowserWindow } from "electron";

/** ipcでページ遷移させる */
export const routerPush = (win: BrowserWindow, uri: string) => {
    win.webContents.send("app--router-push", uri);
}