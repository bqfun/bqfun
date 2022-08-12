# 加工済みオープンデータ

BQ FUNでいくつかのデータを加工して、Google Cloud Analytics Hubで公開しています。
Google Cloudを利用者は、自身のBigQueryデータセットにリンクして、自動更新されるデータを利用できます。

## データ一覧

| データ名 | データセット名 | 更新頻度 | Analytics Hub | 実装 |
|--|--|--|--|--|
| 法人情報 | gbizinfo | 毎日 | [リンク](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/120299025068/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/gbizinfo_preprocessed_by_bq_fun_18253b3389d) | [リンク](https://github.com/bqfun/jpdata/blob/1aacf17cb8202b6a423ff271aebf7464f436b84c/terraform/environments/prod/main.tf#L15-L31) |
| 国民の祝日 | holidays | 毎週 | [リンク](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/120299025068/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/jp_holidays_preprocessed_by_bq_fun_18253c4e9dc) | [リンク](https://github.com/bqfun/jpdata/blob/1aacf17cb8202b6a423ff271aebf7464f436b84c/terraform/environments/prod/main.tf#L33-L49) |

## Health ダッシュボード

<iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/8652cb6b-9436-4828-b4d8-72852d78d19e"></iframe>
