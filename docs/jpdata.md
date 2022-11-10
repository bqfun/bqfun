# 加工済みオープンデータ

BQ FUNでいくつかのデータを加工して、Google Cloud Analytics Hubで公開しています。
Google Cloudを利用者は、自身のBigQueryデータセットにリンクして、自動更新されるデータを利用できます。

## データ一覧

| データ名 | データセット名 | 更新頻度 | Analytics Hub | 実装 |
|--|--|--|--|--|
| 法人情報（経済産業省） | gbizinfo | 毎日 | [リンク](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/120299025068/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/gbizinfo_preprocessed_by_bq_fun_18253b3389d) | [リンク](https://github.com/bqfun/jpdata/blob/84963d15f547a34e1d093ba131ee00cc7f47b29b/terraform/environments/prod/main.tf#L22-L34) |
| 法人情報（国税庁）| houjinbangou | 毎月 | [リンク](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/120299025068/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/corporate_number_preprocessed_by_bq_fun_1843bbd5a18) | [リンク](https://github.com/bqfun/jpdata/blob/84963d15f547a34e1d093ba131ee00cc7f47b29b/terraform/environments/prod/main.tf#L50-L64) |
| 国民の祝日 | holidays | 毎日 | [リンク](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/120299025068/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/jp_holidays_preprocessed_by_bq_fun_18253c4e9dc) | [リンク](https://github.com/bqfun/jpdata/blob/84963d15f547a34e1d093ba131ee00cc7f47b29b/terraform/environments/prod/main.tf#L36-L48) |

## Health ダッシュボード

<iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/8652cb6b-9436-4828-b4d8-72852d78d19e"></iframe>
