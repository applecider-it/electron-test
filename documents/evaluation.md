# 評価

基本的には、ts, vue, tailwind3で実装するのが正解だと思う。

ただし、構造が複雑なので、学習用途でJSで試すのはいいと思う。

## ts, vueを使う場合

`npm create electron-vite@latest`を使うのが無難。

## jsを使う場合

macはホットリロードで、複数windowになる。

windowsネイティブは、node_modulesが遅い。

wslでlinux向けに作って、mac, windowsは動作確認だけするのがいいのかも。
