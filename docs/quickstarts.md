# BigQueryに触ってみよう

BigQueryを触ったことのない人が、どんな時に使うべきかを知るためのドキュメントです。

## BigQueryとは

データ分析用の計算機兼、データ保管庫です。Google Cloudによって提供されています。

### 計算機としての機能

「SQL」と呼ばれる命令を与えることで、データ集計や機械学習などの手続きを高速に実行できます。

[BigQuery 分析の概要 | Google Cloud](https://cloud.google.com/bigquery/docs/query-overview?hl=ja)

### データ保管庫としての機能

BigQueryの外からデータを入れたり、BigQueryの外にデータを提供したりできます。先述の計算機としての機能では実現が難しい手続きを、他の仕組みを使って柔軟に実現できます。

[BigQuery ストレージの概要 | Google Cloud](https://cloud.google.com/bigquery/docs/storage_overview?hl=ja)

## どんな時に使えるの？
データ分析が求められる場合に活用できます。
[BigQuery | Google Cloud Blog](https://cloud.google.com/blog/ja/products/bigquery)には顧客事例を含む活用例が載っています。

簡単にまとめると以下のような例があります。

### 計算機としての機能
- データを繰り返し分析して、仮説を調査したい
- 機械学習を使って、ラベル付けを自動化したい
- データ分析の料金や待ち時間を減らしたい

### データ保管庫としての機能
- 構造化データや半構造化データを保管したい
- Google Cloudを使っているから使いやすい場所にデータを置いておきたい
- 全世界の人にデータを販売、共有したい

### BigQuery全体としての機能
- データ分析環境の保守コストを減らしたい

## 無料で試したい

無料＆クレジットカード不要で試せるBigQueryサンドボックスがあります。月当たりの制限にかかるとエラーになりますが、次の月からまた利用することができます。

[BigQuery サンドボックスを有効にする | Google Cloud](https://cloud.google.com/bigquery/docs/sandbox?hl=ja)を参考に、サンドボックス環境で、[コンソールを使用して一般公開データセットにクエリを実行する | BigQuery | Google Cloud](https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console?hl=ja)を実行してみると良いでしょう。

BigQueryサンドボックスには、以下のような制限があります。

- 計算機として
    - データ参照量は 1 TB/月 まで
- データ保管庫として
    - ストレージは 10 GB/月 まで
    - 60日で自動削除
- BigQuery全体として
    - 一般利用と同等の制限
    - 無料枠のない機能の制限

## 料金

料金は、「分析料金 + ストレージ料金 + 一部の機能料金」で計算されます。

このドキュメントは2022-08-21当時の内容になります。利用する際には、必ず公式ドキュメントで最新の料金を確認してください。

[料金 | BigQuery: クラウド データ ウェアハウス](https://cloud.google.com/bigquery/pricing?hl=ja)

### 分析料金

オンデマンド料金が標準です。一部または全部を定額料金に置き換えることができます。

#### オンデマンド料金

クエリで参照したデータ量で課金されます。毎月1TBまで無料枠があります。

$5 ~ $9 / TBで、利用する計算機の場所によって異なります。asia-northeast1（東京）は$6/TB、US（米国マルチリージョン）は$5/TBです。

#### 定額料金

「スロット」と呼ばれる計算機の時間割り当てを購入して利用します。オンデマンド料金とは異なり、クエリで参照するデータ量は無関係のため、固定料金にしたい場合に向いています。

### ストレージ料金

保存しているデータ量で課金されます。毎月10GBまで無料枠があります。

2022-08-21現在、$20 ~ $33 / TB月で、利用する計算機の場所によって異なります。asia-northeast1（東京）は$23/TB、US（米国マルチリージョン）は$20/TBです。90 日間変更されていないテーブルまたはテーブル パーティションは、自動的に約 50% 値引きされます。

### 一部の機能料金

データ取り込み、データ抽出に料金がかかります。一部無料枠があります。

- [データ取り込みの料金 | 料金](https://cloud.google.com/bigquery/pricing?hl=ja#data_ingestion_pricing)
- [データ抽出の料金 | 料金](https://cloud.google.com/bigquery/pricing?hl=ja#data_extraction_pricing)

## BigQuery利用のステップ

BigQuery利用ステップを、権限の弱い順に分類すると以下のようになります。
上から順に学ぶと良いと思います。

1. BigQueryのWeb UIをさわる（データ閲覧者）
2. BigQueryのクエリを書いて、データを見る（ジョブユーザー）
3. BigQueryにデータを入れて、保守する（データオーナー）
4. BigQueryの管理をする（管理者）
