# AviUtl2-IntelliSense
AviUtl2のスクリプトファイル作成を補助するVScode用の拡張機能です。<br>
Snippets,SignatureHelp,候補表示などのコード補完機能があります。
> [!IMPORTANT]
> この拡張機能はいまのところベータ版として公開しています。<br>
不具合のご指摘やご要望がございましたら、このリポジトリのissuesもしくはDMにてお知らせください。

## 機能紹介
### Snippets
設定項目(`--value@`など)の入力を補助するものです。<br>
`--`を省略して項目を入力しTabキーを押すと、設定項目のひな形が生成されます。
<img src="images/snippets.gif" width="500">

### SignatureHelp
設定や関数の各項目の形式を表示します。<br>
関数入力時には現在入力中の項目がハイライト表示され、説明も出てきます。
<img src="images/signaturehelp.gif" width="500"><br>

### 候補表示
入力した文字によって設定項目や関数の予測候補が表示されます。<br>
<img src="images/kouho.gif" width="500"><br>
> [!TIP]
> これらの機能は特定の文字(`@,--,.`など)を入力することにより作動する仕組みになっています。<br>
入力時以外に表示させたり、万が一表示されなかったりする場合は、`Ctrl+Shift+Space`で手動で表示させることもできます。

## 導入方法
1.Releasesから最新のバージョンの`.vsix`をダウンロードしてください。<br>
2.VScodeを立ち上げ、拡張機能メニューの上部にあるボタンを押し、「VSIXからのインストール」を選択してください。<br>
<img src="images/install1.png" width="600"><br>
3.ダイアログでダウンロードしたvsixファイルを選択してください。<br>
**これで完了です。お疲れさまでした！**<br>
> [!TIP]
> VScodeのターミナルからも導入ができます。<br>
`cd`でvsixがインストールされている場所に飛んだあと、<br>
`code --install-extension aul2-intellisense-x.x.x.vsix`を実行してください
## アンインストール方法
ほかの拡張機能と同様に、拡張機能のメニューからAviUtl2 IntelliSenseを選び、「アンインストール」を選択してください。
