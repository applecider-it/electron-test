/** IPC送受信テスト */
export const ipcSendTest = async (val: string) => {
  return await window.ipcRenderer.invoke("development--get-data", val);
};

/** ダイアログでファイル選択して読み込み */
export const openFile = async () => {
  return await window.ipcRenderer.invoke("development--open-text-file");
};
