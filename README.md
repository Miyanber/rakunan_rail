# 洛南高校・附属中学校 鉄道研究部 公式サイト

Rakunan Railway Research Society (RRRS) の公式ホームページのソースコードです。
ビルド不要の静的サイト（HTML / CSS / JavaScript）で、FC2ホームページ等で運用されています。

## ローカルでの確認方法

`header.html` / `footer.html` を `fetch` で読み込むため、`file://` ではなくローカルサーバー経由で開いてください。

```bash
# Python
python -m http.server 8000
# または Node.js
npx serve .
```

ブラウザで http://localhost:8000/ を開きます。

## 構成

| パス | 内容 |
| --- | --- |
| `*.html` | 各ページ (`header.html` / `footer.html` は共通パーツ) |
| `css/` | スタイルシート |
| `script.js` | ヘッダー・フッター読み込み等 |
| `img/` | 画像 |

## ライセンス

ソースコードは [MIT License](LICENSE) です。
ただし、画像・ロゴ・部誌等のコンテンツおよびSNS各社のロゴ・埋め込みは各権利者に帰属し、MITライセンスの対象外です。
