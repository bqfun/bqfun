# Contribution Guide

[bqfun.jp](https://bqfun.jp/docs/)へのコントリビューションガイドです。

## Docusaurus

[bqfun.jp](https://bqfun.jp/docs/)は[Docusaurus](https://docusaurus.io/)で作成、GitHub Pagesでホストされています。
ドキュメントはマークダウンと一部が拡張されたMDXで書かれています。Docusaurusのドキュメントを参考にしてください。

- [Markdown Features | Docusaurus](https://docusaurus.io/docs/markdown-features)

## GitHub

### Issues

[New Issue · bqfun/bqfun · GitHub](https://github.com/bqfun/bqfun/issues/new)から、内容の改善、訂正、追加の提案をお願いします。

### Pull Request

内容の改善、訂正、追加の具体的な提案があれば、Pull Requestをお願いします。 Pull Requestにはこのドキュメントの[ライセンス](./LICENSE)（MIT License）が適用されます。

## 修正の方法

軽微な修正であれば、ウェブページの下部「このページを編集」から、GitHub上で編集してPull Requestを送ってください。

ローカルで編集して送りたい場合は、フォークしてPull Requestを送ってください。

### 修正の確認

`yarn start`を実行後、[http://localhost:3000/](http://localhost:3000/)へアクセスしてプレビュー表示ができます。

### ディレクトリ構造

`blog`下に日付別のリリース等の記事、`docs`下にドキュメントを配置します。

```
bqbun
├── blog
│   ├── 2022-07-31-holidays-preprocessed
│   │   ├── index.md
│   │   └── jpholidays.png
│   └── 2022-08-01-gbizinfo-preprocessed
│       ├── index.md
│       └── gbizinfo.png
├── docs
│   ├── introduction.md
│   └── quickstarts.md
└── ...
```
