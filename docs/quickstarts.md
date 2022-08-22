# BigQueryに触ってみよう

BigQueryを触ったことのない人が、どんな時に使うべきかを知るためのドキュメントです。

## BigQueryとは

データ分析用の計算機兼、データ保管庫です。Google Cloudによって提供されています。

もっと知る：[BigQuery とは | Google Cloud](https://cloud.google.com/bigquery/docs/introduction?hl=ja)

### 計算機としての機能

「SQL」と呼ばれる命令を与えることで、データ集計や機械学習などの手続きを高速に実行できます。

もっと知る：[BigQuery 分析の概要 | Google Cloud](https://cloud.google.com/bigquery/docs/query-overview?hl=ja)

### データ保管庫としての機能

BigQueryの外からデータを入れたり、BigQueryの外にデータを提供したりできます。

もっと知る：[BigQuery ストレージの概要 | Google Cloud](https://cloud.google.com/bigquery/docs/storage_overview?hl=ja)

## どんな時に使えるの？
データ分析が求められる場合に活用できます。簡単にまとめると以下のような例があります。

もっと知る：[BigQuery | Google Cloud Blog](https://cloud.google.com/blog/ja/products/bigquery)

### 計算機としての機能
- データを繰り返し分析して、仮説を調査したい
- 機械学習を使って、ラベル付けを自動化したい
- データ分析の料金や待ち時間、環境保守コストを減らしたい

### データ保管庫としての機能
- 構造化データや半構造化データを保管したい
- Google Cloudを使っているから使いやすい場所にデータを置いておきたい
- 全世界の人にデータを販売、共有したい


## 無料で試したい

### BigQueryサンドボックス
**無料＆クレジットカード不要**で試せるBigQueryサンドボックスがあります。

#### おすすめの進め方

1. [BigQuery サンドボックスを有効にする | Google Cloud](https://cloud.google.com/bigquery/docs/sandbox?hl=ja)を参考に、サンドボックス環境を準備
2. [コンソールを使用して一般公開データセットにクエリを実行する | BigQuery | Google Cloud](https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console?hl=ja)を上から試す
3. 気の向くまま自由に触る

#### 制限

以下の制限にかかるような操作はエラーになります。次の月から再び利用できます。

- 計算機として
    - データ参照量は 1TB/月 まで
- データ保管庫として
    - ストレージは 10GB/月 まで
    - 60日 で自動削除
- BigQuery全体として
    - 一般利用と同等の制限
    - 無料枠のない機能の制限

もっと知る：[制限事項 | BigQuery サンドボックスを有効にする](https://cloud.google.com/bigquery/docs/sandbox?hl=ja#limitations)

### Google Cloud Skills Boost

Google Cloud Skills Boostには、オンライン学習用にハンズオンラボが一部無料で用意されています。
何から始めたらよいのか分からない時にも、テキストに沿って手を動かせるようになっています。

#### おすすめの進め方
2022-08-22現在、無料のものを選んでいます。

1. [BigQuery ウェブ UI を使用する | Google Cloud Skills Boost](https://www.cloudskillsboost.google/focuses/3616?locale=ja&parent=catalog)を進める
2. 以下のいずれかに挑戦する
    - [BigQuery の気象データ | Google Cloud Skills Boost](https://www.cloudskillsboost.google/focuses/609?locale=ja&parent=catalog)
    - [Google BigQuery で SQL を使用して e コマース データセットを操作する | Google Cloud Skills Boost](https://www.cloudskillsboost.google/focuses/3618?locale=ja&parent=catalog)

もっと知る：[Google Cloud Skills Boost](https://www.cloudskillsboost.google/?locale=ja)

## 料金

料金は「分析料金 + ストレージ料金 + ストリーミング料金」で計算されます。

このドキュメントは2022-08-21当時の内容になります。利用する際には、必ず公式ドキュメントで最新の料金を確認してください。

もっと知る：[料金 | BigQuery: クラウド データ ウェアハウス](https://cloud.google.com/bigquery/pricing?hl=ja)

### 分析料金

オンデマンド料金が標準です。一部または全部を定額料金に置き換えることができます。

#### オンデマンド料金

クエリで参照したデータ量で課金されます。毎月 1TB まで無料枠があります。

$5 ~ $9/TB で、利用する計算機の場所によって異なります。東京（asia-northeast1）は $6/TB、米国（US）は $5/TB です。

#### 定額料金

「スロット」と呼ばれる計算機の時間割り当てを購入して利用します。 BigQueryを十分に利用していて、かつ以下のような場合に利用するのがおすすめです。

- 固定料金にしたい
- 重要な分析に計算機割り当てを優先したい

### ストレージ料金

保存しているデータ量で課金されます。10GB/月 の無料枠があります。

2022-08-21現在、$20 ~ $33/TB月 で、利用する計算機の場所によって異なります。asia-northeast1（東京）は $23/TB、US（米国マルチリージョン）は $20/TB です。90日間 変更されていないテーブルまたはテーブル パーティションは、自動的に約 50% 値引きされます。

### ストリーミング料金

データ取り込み、データ抽出に料金がかかります。一部無料枠があります。ストリーミングではないバッチでの取り込みや抽出は無料です。

- [データ取り込みの料金 | 料金](https://cloud.google.com/bigquery/pricing?hl=ja#data_ingestion_pricing)
- [データ抽出の料金 | 料金](https://cloud.google.com/bigquery/pricing?hl=ja#data_extraction_pricing)

## BigQuery利用のステップ

BigQuery利用ステップを、権限の弱い順に分類すると以下のようになります。
上から順に学ぶと良いと思います。

1. BigQueryのWeb UIをさわる（データ閲覧者）
2. BigQueryのクエリを書いて、データを見る（ジョブユーザー）
3. BigQueryにデータを入れて、保守する（データオーナー）
4. BigQueryの管理をする（管理者）
