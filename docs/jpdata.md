# 加工済みオープンデータ

BQ FUN でいくつかのデータを加工して、Google Cloud Analytics Hub で公開しています。
Google Cloud 利用者は、自身の BigQuery データセットにリンクして、自動更新されるデータを利用できます。

[PODB on BigQuery](https://bqfun.jp/docs/podb) もご確認ください。

## データ一覧

| データ名          | データセット名               | 更新頻度 | Analytics Hub                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|---------------|-----------------------|--|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 法人情報（経済産業省）   | gbizinfo              | 毎日 | [US](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/us_jpdata_1877561be8d/listings/gbizinfo_preprocessed_by_bq_fun_18253b3389d), [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/gbizinfo_preprocessed_by_bq_fun_18253b3389d) |
| 法人情報（国税庁）     | houjinbangou          | 毎月 | ~~US~~, [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/corporate_number_preprocessed_by_bq_fun_1843bbd5a18) |
| 国民の祝日         | holidays              | 毎日 | [US](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/us_jpdata_1877561be8d/listings/jp_holidays_preprocessed_by_bq_fun_18253c4e9dc), [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/jp_holidays_preprocessed_by_bq_fun_18253c4e9dc) |
| 住所、所在地（デジタル庁） | base_registry_address | 毎日 | [US](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/us_jpdata_1877561be8d/listings/base_registry_address_preprocessed_by_bq_fun_123456789ab), [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/base_registry_address_preprocessed_by_bq_fun_123456789ab) |
| SSDSE（教育用標準データセット） | ssdse                 | 毎日 | [US](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/us_jpdata_1877561be8d/listings/ssdse_preprocessed_by_bq_fun_190feead717), [asia-northeast1](https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/jpdata_18253a34a30/listings/ssdse_preprocessed_by_bq_fun_190feeab20f) |

## お問い合わせ
[BQ FUN Slack](https://bqfun.jp/docs/#slack) または、[GitHub Issues](https://github.com/bqfun/jpdata/issues) にてお問い合わせください。

## Health ダッシュボード

<iframe width="720" height="560" src="https://datastudio.google.com/embed/reporting/8652cb6b-9436-4828-b4d8-72852d78d19e"></iframe>
