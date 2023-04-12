# 加工済みオープンデータ

BQ FUNでいくつかのデータを加工して、Google Cloud Analytics Hubで公開しています。
Google Cloudを利用者は、自身のBigQueryデータセットにリンクして、自動更新されるデータを利用できます。

## データ一覧

| データ名 | データセット名 | 更新頻度 | Analytics Hub | 実装 |
|--|--|--|--|--|
| 法人情報（経済産業省） | gbizinfo | 毎日 | [US](https://console.cloud.google.com/bigquery/analytics-hub/exchanges(analyticshub:projects/jpdata/locations/us/dataExchanges/us_jpdata_1877561be8d/listings/gbizinfo_preprocessed_by_bq_fun_18253b3389d)), [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/exchanges(analyticshub:projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/gbizinfo_preprocessed_by_bq_fun_18253b3389d)) | [GitHub](https://github.com/bqfun/jpdata/blob/dc28e7b25cd71c41d89ca8d36a046ab00094ea05/terraform/modules/gbizinfo/main.tf) |
| 法人情報（国税庁）| houjinbangou | 毎月 | ~~US~~, [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/exchanges(analyticshub:projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/corporate_number_preprocessed_by_bq_fun_1843bbd5a18)) | [GitHub](https://github.com/bqfun/jpdata/blob/dc28e7b25cd71c41d89ca8d36a046ab00094ea05/terraform/modules/houjinbangou_change_history_diff/main.tf#L20) |
| 国民の祝日 | holidays | 毎日 | [US](https://console.cloud.google.com/bigquery/analytics-hub/exchanges(analyticshub:projects/jpdata/locations/us/dataExchanges/us_jpdata_1877561be8d/listings/jp_holidays_preprocessed_by_bq_fun_18253c4e9dc)), [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/exchanges(analyticshub:projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/jp_holidays_preprocessed_by_bq_fun_18253c4e9dc)) | [GitHub](https://github.com/bqfun/jpdata/blob/dc28e7b25cd71c41d89ca8d36a046ab00094ea05/terraform/modules/shukujitsu/main.tf) |
| 住所、所在地（デジタル庁） | base_registry_address | 毎日 | [US](https://console.cloud.google.com/bigquery/analytics-hub/exchanges(analyticshub:projects/jpdata/locations/us/dataExchanges/us_jpdata_1877561be8d/listings/base_registry_address_preprocessed_by_bq_fun_123456789ab)), [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/exchanges(analyticshub:projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/base_registry_address_preprocessed_by_bq_fun_123456789ab)) | [GitHub](https://github.com/bqfun/jpdata/blob/dc28e7b25cd71c41d89ca8d36a046ab00094ea05/terraform/modules/base_registry_address/main.tf) |

## Health ダッシュボード

<iframe width="720" height="560" src="https://datastudio.google.com/embed/reporting/8652cb6b-9436-4828-b4d8-72852d78d19e"></iframe>
